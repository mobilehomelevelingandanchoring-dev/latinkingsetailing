import { loginAdmin } from "@/app/admin/actions";

export const metadata = { title: "Admin Login | Latin King Detailing", robots: "noindex" };

export default function AdminLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  return (
    <main
      className="min-h-dvh flex items-center justify-center px-4"
      style={{ background: "var(--color-base-950)" }}
    >
      <div
        className="card w-full max-w-sm p-8"
        style={{ background: "var(--color-base-900)" }}
      >
        <h1
          className="mb-1"
          style={{
            fontFamily: "var(--font-barlow-condensed)",
            fontWeight: 900,
            fontSize: "1.75rem",
            letterSpacing: "-0.01em",
          }}
        >
          Admin Login
        </h1>
        <p className="text-sm mb-6" style={{ color: "rgba(255,255,255,0.45)" }}>
          Latin King Detailing — bookings dashboard
        </p>

        <form action={loginAdmin} className="flex flex-col gap-4">
          <div className="form-field">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              className="form-input"
              autoComplete="current-password"
              autoFocus
              required
            />
          </div>

          {/* Error shown via searchParams to avoid client component */}
          <AdminError searchParams={searchParams} />

          <button type="submit" className="btn btn-primary w-full" style={{ minHeight: "48px" }}>
            Sign in
          </button>
        </form>
      </div>
    </main>
  );
}

async function AdminError({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const params = await searchParams;
  if (!params.error) return null;
  return (
    <p style={{ color: "var(--color-accent-400)", fontSize: "0.875rem" }}>
      Incorrect password — try again.
    </p>
  );
}
