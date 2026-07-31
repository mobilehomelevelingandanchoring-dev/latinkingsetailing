"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { createAdminClient } from "@/lib/supabase/server";

const COOKIE = "lkd_admin";
const MAX_AGE = 60 * 60 * 24 * 7; // 7 days

export async function loginAdmin(formData: FormData) {
  const password = formData.get("password") as string;
  if (password !== process.env.ADMIN_PASSWORD) {
    redirect("/admin/login?error=1");
  }
  const jar = await cookies();
  jar.set(COOKIE, process.env.ADMIN_PASSWORD!, {
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

export async function updateBookingStatus(id: string, status: string) {
  const jar = await cookies();
  if (jar.get(COOKIE)?.value !== process.env.ADMIN_PASSWORD) {
    throw new Error("Unauthorized");
  }
  const db = createAdminClient();
  await db.from("bookings").update({ status }).eq("id", id);
}
