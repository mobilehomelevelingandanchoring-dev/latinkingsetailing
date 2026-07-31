"use client";

import { useRef, useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle, Phone, Loader2, AlertCircle } from "lucide-react";
import {
  bookingSchema,
  BookingFormValues,
  SERVICE_AREAS,
  SERVICES,
  PREFERRED_TIMES,
} from "@/lib/booking-schema";
import { submitBooking, BookingResult } from "@/app/book/actions";
import { BUSINESS } from "@/lib/business";

export function BookingForm() {
  const loadedAt = useRef(Date.now());
  const [result, setResult] = useState<BookingResult | null>(null);
  const [isPending, startTransition] = useTransition();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
  });

  const onSubmit = (data: BookingFormValues) => {
    startTransition(async () => {
      const res = await submitBooking(data, loadedAt.current);
      setResult(res);
    });
  };

  // ── Success state ──────────────────────────────────────────────────────────
  if (result?.ok && result.name) {
    return (
      <div
        className="card p-8 sm:p-10 flex flex-col items-center text-center gap-5"
        style={{ background: "var(--color-base-900)" }}
      >
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center"
          style={{ background: "rgba(196,30,58,0.12)", border: "1px solid rgba(196,30,58,0.3)" }}
        >
          <CheckCircle size={32} style={{ color: "var(--color-accent-400)" }} />
        </div>
        <div>
          <h2
            style={{
              fontFamily: "var(--font-barlow-condensed)",
              fontWeight: 900,
              fontSize: "clamp(1.5rem, 4vw, 2rem)",
              letterSpacing: "-0.01em",
              lineHeight: 1.1,
              marginBottom: "0.5rem",
            }}
          >
            Request received, {result.name.split(" ")[0]}!
          </h2>
          <p style={{ color: "rgba(255,255,255,0.65)", maxWidth: "40ch", margin: "0 auto" }}>
            We&apos;ve got your booking request and will call you on{" "}
            <strong style={{ color: "#fff" }}>{result.phone}</strong> shortly to confirm the details.
          </p>
        </div>
        <a
          href={`tel:${BUSINESS.phone}`}
          className="btn btn-secondary"
          style={{ marginTop: "0.5rem" }}
        >
          <Phone size={15} />
          Can&apos;t wait? Call {BUSINESS.phoneDisplay}
        </a>
      </div>
    );
  }

  // ── Form ───────────────────────────────────────────────────────────────────
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}
    >
      {/* Honeypot — hidden from real users, bots fill it */}
      <input
        type="text"
        tabIndex={-1}
        aria-hidden="true"
        autoComplete="off"
        style={{ position: "absolute", left: "-9999px", width: "1px", height: "1px", opacity: 0 }}
        {...register("_hp")}
      />

      {/* Row 1: Name + Phone */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="form-field">
          <label htmlFor="full_name" className="form-label">
            Full name <span style={{ color: "var(--color-accent-400)" }}>*</span>
          </label>
          <input
            id="full_name"
            type="text"
            className="form-input"
            placeholder="e.g. James Smith"
            autoComplete="name"
            {...register("full_name")}
          />
          {errors.full_name && <FieldError msg={errors.full_name.message} />}
        </div>

        <div className="form-field">
          <label htmlFor="phone" className="form-label">
            Phone <span style={{ color: "var(--color-accent-400)" }}>*</span>
          </label>
          <input
            id="phone"
            type="tel"
            className="form-input"
            placeholder="07482 225323"
            autoComplete="tel"
            {...register("phone")}
          />
          {errors.phone && <FieldError msg={errors.phone.message} />}
        </div>
      </div>

      {/* Row 2: Email */}
      <div className="form-field">
        <label htmlFor="email" className="form-label">
          Email <span style={{ color: "rgba(255,255,255,0.35)", fontWeight: 400 }}>(optional)</span>
        </label>
        <input
          id="email"
          type="email"
          className="form-input"
          placeholder="james@example.com"
          autoComplete="email"
          {...register("email")}
        />
        {errors.email && <FieldError msg={errors.email.message} />}
      </div>

      {/* Row 3: Area + Service */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="form-field">
          <label htmlFor="area" className="form-label">
            Your area <span style={{ color: "var(--color-accent-400)" }}>*</span>
          </label>
          <select id="area" className="form-input" {...register("area")}>
            <option value="">Select your area…</option>
            {SERVICE_AREAS.map((a) => (
              <option key={a} value={a}>{a}</option>
            ))}
          </select>
          {errors.area && <FieldError msg={errors.area.message} />}
        </div>

        <div className="form-field">
          <label htmlFor="service" className="form-label">
            Service interested in <span style={{ color: "var(--color-accent-400)" }}>*</span>
          </label>
          <select id="service" className="form-input" {...register("service")}>
            <option value="">Select a service…</option>
            {SERVICES.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
          {errors.service && <FieldError msg={errors.service.message} />}
        </div>
      </div>

      {/* Row 4: Vehicle */}
      <div className="form-field">
        <label htmlFor="vehicle" className="form-label">
          Vehicle make & model{" "}
          <span style={{ color: "rgba(255,255,255,0.35)", fontWeight: 400 }}>(optional)</span>
        </label>
        <input
          id="vehicle"
          type="text"
          className="form-input"
          placeholder="e.g. VW Golf 2019 — helps us give an accurate quote"
          {...register("vehicle")}
        />
      </div>

      {/* Row 5: Date + Time */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="form-field">
          <label htmlFor="preferred_date" className="form-label">
            Preferred date{" "}
            <span style={{ color: "rgba(255,255,255,0.35)", fontWeight: 400 }}>(optional)</span>
          </label>
          <input
            id="preferred_date"
            type="date"
            className="form-input"
            min={new Date().toISOString().split("T")[0]}
            {...register("preferred_date")}
            style={{ colorScheme: "dark" }}
          />
        </div>

        <div className="form-field">
          <label htmlFor="preferred_time" className="form-label">
            Preferred time{" "}
            <span style={{ color: "rgba(255,255,255,0.35)", fontWeight: 400 }}>(optional)</span>
          </label>
          <select id="preferred_time" className="form-input" {...register("preferred_time")}>
            <option value="">Any time…</option>
            {PREFERRED_TIMES.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Row 6: Notes */}
      <div className="form-field">
        <label htmlFor="notes" className="form-label">
          Anything else?{" "}
          <span style={{ color: "rgba(255,255,255,0.35)", fontWeight: 400 }}>(optional)</span>
        </label>
        <textarea
          id="notes"
          className="form-input"
          rows={3}
          placeholder="e.g. pet hair, heavy staining, special paint colour, access instructions…"
          {...register("notes")}
        />
        {errors.notes && <FieldError msg={errors.notes.message} />}
      </div>

      {/* Server error */}
      {result && !result.ok && (
        <div
          className="flex items-start gap-3 p-4 rounded-lg"
          style={{
            background: "rgba(196,30,58,0.1)",
            border: "1px solid rgba(196,30,58,0.3)",
          }}
          role="alert"
        >
          <AlertCircle size={18} style={{ color: "var(--color-accent-400)", flexShrink: 0, marginTop: "2px" }} />
          <div>
            <p style={{ color: "rgba(255,255,255,0.85)", margin: 0 }}>{result.error}</p>
            <a
              href={`tel:${BUSINESS.phone}`}
              style={{ color: "var(--color-accent-400)", fontSize: "0.875rem" }}
            >
              Call us directly: {BUSINESS.phoneDisplay}
            </a>
          </div>
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={isPending}
        className="btn btn-primary w-full"
        style={{ fontSize: "1rem", minHeight: "52px" }}
      >
        {isPending ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            Sending request…
          </>
        ) : (
          "Request Free Quote"
        )}
      </button>

      <p
        className="text-center text-xs"
        style={{ color: "rgba(255,255,255,0.35)" }}
      >
        No payment required — we&apos;ll call to confirm and quote before any work starts.
      </p>
    </form>
  );
}

function FieldError({ msg }: { msg?: string }) {
  if (!msg) return null;
  return (
    <p
      role="alert"
      style={{ color: "var(--color-accent-400)", fontSize: "0.8125rem", marginTop: "0.25rem" }}
    >
      {msg}
    </p>
  );
}
