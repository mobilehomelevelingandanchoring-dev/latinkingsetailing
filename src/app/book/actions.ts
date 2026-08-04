"use server";

import { createClient } from "@supabase/supabase-js";
import { bookingSchema } from "@/lib/booking-schema";

export type QuoteResult = { ok: true } | { ok: false; error: string };

export async function submitQuote(data: {
  name: string;
  phone: string;
  postcode: string;
  vehicleType: string;
  vehicleMakeModel: string;
  service: string;
  message: string;
}): Promise<QuoteResult> {
  if (!data.name?.trim() || !data.phone?.trim() || !data.service?.trim()) {
    return { ok: false, error: "Please fill in all required fields." };
  }

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim();
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.trim();

  if (!url || !key) {
    return { ok: false, error: "Booking system unavailable — please call 07482 225323 directly." };
  }

  const supabase = createClient(url, key);
  const vehicle = [data.vehicleType, data.vehicleMakeModel].filter(Boolean).join(" — ") || null;

  const { error } = await supabase.from("bookings").insert({
    full_name: data.name.trim(),
    phone: data.phone.trim(),
    email: null,
    area: data.postcode?.trim() || null,
    service: data.service.trim(),
    vehicle,
    notes: data.message?.trim() || null,
    source: "quote-form",
    status: "new",
  });

  if (error) {
    return { ok: false, error: `Could not save your request (${error.code ?? "unknown"}) — please call 07482 225323.` };
  }

  return { ok: true };
}

export type BookingResult =
  | { ok: true; name: string; phone: string }
  | { ok: false; error: string };

export async function submitBooking(
  formData: unknown,
  loadedAt: number
): Promise<BookingResult> {
  // Time-based bot check — real humans take >2 s to fill a form
  const elapsed = Date.now() - loadedAt;
  if (elapsed < 2000) {
    return { ok: true, name: "", phone: "" };
  }

  const parsed = bookingSchema.safeParse(formData);
  if (!parsed.success) {
    const firstError = parsed.error.issues[0]?.message ?? "Please check your inputs.";
    return { ok: false, error: firstError };
  }

  const { _hp, ...data } = parsed.data;

  if (_hp && _hp.length > 0) {
    return { ok: true, name: "", phone: "" };
  }

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim();
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.trim();

  if (!url || !key) {
    console.error("[booking] Supabase env vars missing — URL:", !!url, "KEY:", !!key);
    return {
      ok: false,
      error: "Booking system unavailable — please call 07482 225323 directly.",
    };
  }

  const supabase = createClient(url, key);

  const { error } = await supabase.from("bookings").insert({
    full_name: data.full_name,
    phone: data.phone,
    email: data.email || null,
    area: data.area,
    service: data.service,
    vehicle: data.vehicle || null,
    preferred_date: data.preferred_date || null,
    preferred_time: data.preferred_time || null,
    notes: data.notes || null,
    source: "website",
    status: "new",
  });

  if (error) {
    console.error("[booking] Supabase insert error:", error.code, error.message);
    return {
      ok: false,
      error: `Could not save your booking (${error.code ?? "unknown error"}) — please call 07482 225323.`,
    };
  }

  return { ok: true, name: data.full_name, phone: data.phone };
}
