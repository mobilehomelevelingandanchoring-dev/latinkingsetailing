import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { createAdminClient } from "@/lib/supabase/server";
import { logoutAdmin, updateBookingStatus } from "@/app/admin/actions";

export const metadata = { title: "Bookings | Latin King Detailing Admin", robots: "noindex" };
export const dynamic = "force-dynamic";

const STATUS_COLOURS: Record<string, string> = {
  new:       "rgba(196,30,58,0.85)",
  contacted: "rgba(180,120,0,0.85)",
  confirmed: "rgba(30,130,196,0.85)",
  completed: "rgba(30,180,80,0.85)",
  cancelled: "rgba(100,100,110,0.85)",
};

const ALL_STATUSES = ["new", "contacted", "confirmed", "completed", "cancelled"];

export default async function AdminPage() {
  // Fail-safe auth: if env var missing OR cookie missing OR mismatch → login
  const adminPass = process.env.ADMIN_PASSWORD;
  const jar = await cookies();
  const cookieVal = jar.get("lkd_admin")?.value;

  if (!adminPass || !cookieVal || cookieVal !== adminPass) {
    redirect("/admin/login");
  }

  const db = createAdminClient();
  const { data: bookings, error } = await db
    .from("bookings")
    .select("*")
    .order("created_at", { ascending: false });

  const rows = bookings ?? [];
  const counts = ALL_STATUSES.reduce(
    (acc, s) => ({ ...acc, [s]: rows.filter(b => b.status === s).length }),
    {} as Record<string, number>
  );

  return (
    <div style={{ minHeight: "100dvh", background: "var(--color-base-950)", padding: "2rem 1rem" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        {/* Header */}
        <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
          <div>
            <h1
              style={{
                fontFamily: "var(--font-barlow-condensed)",
                fontWeight: 900,
                fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                letterSpacing: "-0.02em",
                lineHeight: 1,
                marginBottom: "0.25rem",
              }}
            >
              Bookings
            </h1>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.875rem" }}>
              {rows.length} total · {counts.new ?? 0} new
            </p>
          </div>
          <form action={logoutAdmin}>
            <button type="submit" className="btn btn-secondary" style={{ fontSize: "0.875rem", padding: "0.5rem 1.25rem" }}>
              Sign out
            </button>
          </form>
        </div>

        {/* Status chips */}
        <div className="flex flex-wrap gap-2 mb-8">
          {ALL_STATUSES.map(s => (
            <span
              key={s}
              style={{
                background: STATUS_COLOURS[s],
                color: "#fff",
                padding: "0.25rem 0.75rem",
                borderRadius: "9999px",
                fontSize: "0.8125rem",
                fontWeight: 600,
              }}
            >
              {s} — {counts[s] ?? 0}
            </span>
          ))}
        </div>

        {error && (
          <p style={{ color: "var(--color-accent-400)", marginBottom: "1rem" }}>
            Error loading bookings: {error.message}
          </p>
        )}

        {rows.length === 0 && !error ? (
          <div
            className="card p-12 text-center"
            style={{ background: "var(--color-base-900)", color: "rgba(255,255,255,0.4)" }}
          >
            No bookings yet — they&apos;ll appear here when customers submit the form.
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            {rows.map(b => (
              <BookingCard key={b.id} booking={b} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// Extracted component so server action is NOT inside .map()
function BookingCard({ booking: b }: { booking: Record<string, string> }) {
  return (
    <div
      className="card p-5"
      style={{
        background: "var(--color-base-900)",
        borderLeft: `3px solid ${STATUS_COLOURS[b.status] ?? "#444"}`,
      }}
    >
      <div className="grid sm:grid-cols-[1fr_auto] gap-4 items-start">
        {/* Details */}
        <div className="flex flex-col gap-1.5">
          <div className="flex flex-wrap items-center gap-2">
            <span style={{ fontFamily: "var(--font-barlow-condensed)", fontWeight: 800, fontSize: "1.1rem", color: "#fff" }}>
              {b.full_name}
            </span>
            <span style={{
              background: STATUS_COLOURS[b.status],
              color: "#fff",
              fontSize: "0.7rem",
              fontWeight: 700,
              padding: "0.15rem 0.55rem",
              borderRadius: "9999px",
              textTransform: "uppercase" as const,
              letterSpacing: "0.06em",
            }}>
              {b.status}
            </span>
          </div>

          <div className="flex flex-wrap gap-x-4 gap-y-1" style={{ fontSize: "0.875rem" }}>
            <a href={`tel:${b.phone}`} style={{ color: "var(--color-accent-400)", fontWeight: 600 }}>
              {b.phone}
            </a>
            {b.email && (
              <a href={`mailto:${b.email}`} style={{ color: "rgba(255,255,255,0.5)" }}>
                {b.email}
              </a>
            )}
          </div>

          <div className="flex flex-wrap gap-x-4 gap-y-1" style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.5)" }}>
            {b.area    && <span>📍 {b.area}</span>}
            {b.service && <span>🔧 {b.service}</span>}
            {b.vehicle && <span>🚗 {b.vehicle}</span>}
            {b.preferred_date && (
              <span>
                📅{" "}
                {new Date(b.preferred_date).toLocaleDateString("en-GB", {
                  day: "numeric", month: "short", year: "numeric",
                })}
                {b.preferred_time ? ` · ${b.preferred_time}` : ""}
              </span>
            )}
          </div>

          {b.notes && (
            <p style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.4)", marginTop: "0.25rem", fontStyle: "italic" }}>
              &ldquo;{b.notes}&rdquo;
            </p>
          )}

          <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.25)", marginTop: "0.25rem" }}>
            {new Date(b.created_at).toLocaleString("en-GB", {
              day: "numeric", month: "short", year: "numeric",
              hour: "2-digit", minute: "2-digit",
            })}
          </p>
        </div>

        {/* Status updater */}
        <StatusForm id={b.id} currentStatus={b.status} />
      </div>
    </div>
  );
}

function StatusForm({ id, currentStatus }: { id: string; currentStatus: string }) {
  return (
    <form action={updateBookingStatus} className="flex flex-col gap-2 min-w-[140px]">
      <input type="hidden" name="id" value={id} />
      <select
        name="status"
        defaultValue={currentStatus}
        className="form-input"
        style={{ fontSize: "0.8125rem", padding: "0.4rem 0.75rem", minHeight: "unset" }}
      >
        {ALL_STATUSES.map(s => <option key={s} value={s}>{s}</option>)}
      </select>
      <button
        type="submit"
        className="btn btn-secondary"
        style={{ fontSize: "0.8125rem", padding: "0.4rem 0.75rem", minHeight: "unset" }}
      >
        Update
      </button>
    </form>
  );
}
