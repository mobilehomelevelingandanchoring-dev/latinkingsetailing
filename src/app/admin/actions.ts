"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { createAdminClient } from "@/lib/supabase/server";

const COOKIE = "lkd_admin";
const MAX_AGE = 60 * 60 * 24 * 7; // 7 days

export async function loginAdmin(formData: FormData) {
  const password = formData.get("password") as string;
  const adminPass = process.env.ADMIN_PASSWORD;

  const trimmedPass = adminPass?.trim() ?? "";
  if (!trimmedPass || password.trim() !== trimmedPass) {
    redirect("/admin/login?error=1");
  }

  const jar = await cookies();
  jar.set(COOKIE, trimmedPass, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: MAX_AGE,
    path: "/admin",
  });
  redirect("/admin");
}

export async function logoutAdmin() {
  const jar = await cookies();
  jar.delete(COOKIE);
  redirect("/admin/login");
}

export async function updateBookingStatus(formData: FormData) {
  const adminPass = process.env.ADMIN_PASSWORD?.trim() ?? "";
  const jar = await cookies();
  const cookieVal = jar.get(COOKIE)?.value;

  if (!adminPass || !cookieVal || cookieVal !== adminPass) {
    redirect("/admin/login");
  }

  const id     = formData.get("id") as string;
  const status = formData.get("status") as string;

  const db = createAdminClient();
  await db.from("bookings").update({ status }).eq("id", id);

  redirect("/admin");
}
