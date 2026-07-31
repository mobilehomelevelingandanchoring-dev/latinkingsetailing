"use server";

import { createClient } from "@supabase/supabase-js";
import { bookingSchema } from "@/lib/booking-schema";

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
    // Fake success — don't tip off bots
    return { ok: true, name: "", phone: "" };
  }

  const parsed = bookingSchema.safeParse(formData);
  if (!parsed.success) {
    return { ok: false, error: "Validation failed. Please check your inputs." };
  }

  const { _hp, ...data } = parsed.data;

  // Honeypot check — bots fill hidden fields
  if (_hp && _hp.length > 0) {
    return { ok: true, name: "", phone: "" };
  }

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !key) {
    console.error("Supabase env vars not set");
    return {
      ok: false,
      error:
        "Booking system is temporarily unavailable. Please call us directly.",
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
    console.error("Supabase insert error:", error);
    return {
      ok: false,
      error:
        "Something went wrong saving your booking. Please call us directly.",
    };
  }

  return { ok: true, name: data.full_name, phone: data.phone };
}
