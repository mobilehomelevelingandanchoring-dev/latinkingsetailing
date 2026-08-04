import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { createAdminClient } from "@/lib/supabase/server";
import { logoutAdmin, updateBookingStatus } from "@/app/admin/actions";
import { BookingActions } from "@/app/admin/BookingActions";

export const metadata = { title: "Bookings | Latin King Detailing Admin", robots: "noindex" };
export const dynamic = "force-dynamic";

const STATUS_COLOURS: Record<string, string> = {
  new:       "rgba(196,30,58,0.9)",
  contacted: "rgba(200,140,0,0.9)",
  confirmed: "rgba(30,130,196,0.9)",
  completed: "rgba(30,180,80,0.9)",
  cancelled: "rgba(100,100,110,0.9)",
};

const ALL_STATUSES = ["new", "contacted", "confirmed", "completed", "cancelled"];

export default async function AdminPage() {
  const adminPass = process.env.ADMIN_PASSWORD?.trim() ?? "";
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
    <div style={{ minHeight: "100dvh", background: "var(--color-base-950)", padding: "1rem" }}>
      <div style={{ maxWidth: "720px", margin: "0 auto" }}>

        {/* Header */}
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "0.75rem", marginBottom: "1.25rem", flexWrap: "wrap" }}>
          <div>
            <h1 style={{
              fontFamily: "var(--font-barlow-condensed)",
              fontWeight: 900,
              fontSize: "clamp(1.6rem, 5vw, 2.25rem)",
              letterSpacing: "-0.02em",
              lineHeight: 1,
              marginBottom: "0.2rem",
            }}>
              Bookings
            </h1>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.8125rem" }}>
              {rows.length} total · {counts.new ?? 0} new
            </p>
          </div>
          <form action={logoutAdmin}>
            <button
              type="submit"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: "0.5rem",
                color: "rgba(255,255,255,0.6)",
                fontSize: "0.8125rem",
                fontWeight: 600,
                padding: "0.5rem 1rem",
                cursor: "pointer",
                minHeight: "40px",
              }}
            >
              Sign out
            </button>
          </form>
        </div>

        {/* Status summary chips */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.375rem", marginBottom: "1.25rem" }}>
          {ALL_STATUSES.map(s => (
            <span key={s} style={{
              background: STATUS_COLOURS[s],
              color: "#fff",
              padding: "0.2rem 0.65rem",
              borderRadius: "9999px",
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.01em",
            }}>
              {s} {counts[s] ?? 0}
            </span>
          ))}
        </div>

        {error && (
          <p style={{ color: "var(--color-accent-400)", marginBottom: "1rem", fontSize: "0.875rem" }}>
            Error loading bookings: {error.message}
          </p>
        )}

        {rows.length === 0 && !error ? (
          <div style={{
            background: "var(--color-base-900)",
            borderRadius: "0.75rem",
            padding: "3rem 1.5rem",
            textAlign: "center",
            color: "rgba(255,255,255,0.35)",
            fontSize: "0.9rem",
          }}>
            No bookings yet — they&apos;ll appear here when customers submit the form.
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {rows.map(b => (
              <BookingCard key={b.id} booking={b} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function BookingCard({ booking: b }: { booking: Record<string, string> }) {
  return (
    <div style={{
      background: "var(--color-base-900)",
      borderRadius: "0.75rem",
      borderLeft: `4px solid ${STATUS_COLOURS[b.status] ?? "#555"}`,
      overflow: "hidden",
    }}>
      {/* Card body */}
      <div style={{ padding: "1rem" }}>

        {/* Name + badge */}
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "0.5rem", marginBottom: "0.6rem" }}>
          <span style={{
            fontFamily: "var(--font-barlow-condensed)",
            fontWeight: 800,
            fontSize: "1.125rem",
            color: "#fff",
          }}>
            {b.full_name}
          </span>
          <span style={{
            background: STATUS_COLOURS[b.status] ?? "#555",
            color: "#fff",
            fontSize: "0.6875rem",
            fontWeight: 700,
            padding: "0.15rem 0.5rem",
            borderRadius: "9999px",
            textTransform: "uppercase" as const,
            letterSpacing: "0.07em",
          }}>
            {b.status}
          </span>
        </div>

        {/* Contact — big tap targets on mobile */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "0.6rem" }}>
          <a
            href={`tel:${b.phone}`}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.3rem",
              color: "var(--color-accent-400)",
              fontWeight: 700,
              fontSize: "0.9375rem",
              textDecoration: "none",
              padding: "0.25rem 0",
            }}
          >
            📞 {b.phone}
          </a>
          {b.email && (
            <a
              href={`mailto:${b.email}`}
              style={{
                display: "inline-flex",
                alignItems: "center",
                color: "rgba(255,255,255,0.45)",
                fontSize: "0.8125rem",
                textDecoration: "none",
                padding: "0.25rem 0",
                wordBreak: "break-all",
              }}
            >
              ✉ {b.email}
            </a>
          )}
        </div>

        {/* Details pills */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.375rem 0.75rem", fontSize: "0.8125rem", color: "rgba(255,255,255,0.5)", marginBottom: b.notes ? "0.5rem" : "0.75rem" }}>
          {b.area    && <span>📍 {b.area}</span>}
          {b.service && <span>🔧 {b.service}</span>}
          {b.vehicle && <span>🚗 {b.vehicle}</span>}
          {b.preferred_date && (
            <span>
              📅{" "}
              {new Date(b.preferred_date).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}
              {b.preferred_time ? ` · ${b.preferred_time}` : ""}
            </span>
          )}
        </div>

        {b.notes && (
          <p style={{
            fontSize: "0.8125rem",
            color: "rgba(255,255,255,0.38)",
            fontStyle: "italic",
            marginBottom: "0.5rem",
            paddingLeft: "0.75rem",
            borderLeft: "2px solid rgba(255,255,255,0.1)",
          }}>
            {b.notes}
          </p>
        )}

        <p style={{ fontSize: "0.6875rem", color: "rgba(255,255,255,0.22)", marginBottom: "1rem" }}>
          Submitted{" "}
          {new Date(b.created_at).toLocaleString("en-GB", {
            day: "numeric", month: "short", year: "numeric",
            hour: "2-digit", minute: "2-digit",
          })}
          {b.source ? ` · via ${b.source}` : ""}
        </p>

        {/* Status update */}
        <form
          action={updateBookingStatus}
          style={{ display: "flex", gap: "0.5rem", marginBottom: "0.5rem" }}
        >
          <input type="hidden" name="id" value={b.id} />
          <select
            name="status"
            defaultValue={b.status}
            style={{
              flex: 1,
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: "0.5rem",
              color: "#fff",
              fontSize: "0.875rem",
              padding: "0 0.75rem",
              minHeight: "44px",
              cursor: "pointer",
            }}
          >
            {ALL_STATUSES.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
          <button
            type="submit"
            style={{
              background: "rgba(255,255,255,0.07)",
              border: "1px solid rgba(255,255,255,0.14)",
              borderRadius: "0.5rem",
              color: "rgba(255,255,255,0.8)",
              fontSize: "0.8125rem",
              fontWeight: 700,
              padding: "0 1rem",
              minHeight: "44px",
              cursor: "pointer",
              whiteSpace: "nowrap",
            }}
          >
            Update
          </button>
        </form>

        {/* Copy + Delete */}
        <BookingActions
          id={b.id}
          full_name={b.full_name}
          phone={b.phone}
          email={b.email}
          area={b.area}
          service={b.service}
          vehicle={b.vehicle}
          preferred_date={b.preferred_date}
          preferred_time={b.preferred_time}
          notes={b.notes}
          status={b.status}
          created_at={b.created_at}
        />
      </div>
    </div>
  );
}
