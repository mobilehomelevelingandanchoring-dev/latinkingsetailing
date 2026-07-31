"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import { BUSINESS } from "@/lib/business";

const SERVICES = BUSINESS.services.map((s) => s.name);
const VEHICLE_TYPES = ["Hatchback", "Saloon", "Estate", "SUV / 4x4", "MPV / People Carrier", "Coupe", "Convertible", "Van", "Motorbike", "Luxury / Exotic", "Other"];

interface FormData {
  name: string;
  phone: string;
  postcode: string;
  vehicleType: string;
  vehicleMakeModel: string;
  service: string;
  message: string;
}

const INITIAL: FormData = {
  name: "",
  phone: "",
  postcode: "",
  vehicleType: "",
  vehicleMakeModel: "",
  service: "",
  message: "",
};

export function QuoteForm() {
  const [form, setForm] = useState<FormData>(INITIAL);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    // In production: POST to /api/quote or use form service (Formspree, etc.)
    await new Promise((r) => setTimeout(r, 800));
    setSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div
        className="card p-10 flex flex-col items-center text-center gap-5"
        style={{ background: "var(--color-base-900)" }}
      >
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center"
          style={{ background: "rgba(196,30,58,0.15)", color: "var(--color-accent-500)" }}
        >
          <CheckCircle size={32} />
        </div>
        <div>
          <h2 className="text-2xl mb-2" style={{ fontFamily: "var(--font-barlow-condensed)", fontWeight: 800 }}>
            Quote request received!
          </h2>
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
            We&apos;ll come back to you as soon as possible — usually within a few hours. In the meantime, feel free to call us on{" "}
            <a href={`tel:${BUSINESS.phone}`} className="font-semibold text-white">
              {BUSINESS.phoneDisplay}
            </a>
            .
          </p>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="card p-8 space-y-5"
      style={{ background: "var(--color-base-900)" }}
      aria-label="Quote request form"
    >
      <h2
        className="text-2xl mb-1"
        style={{ fontFamily: "var(--font-barlow-condensed)", fontWeight: 800 }}
      >
        Request a free quote
      </h2>
      <p className="text-sm !mt-1" style={{ color: "rgba(255,255,255,0.5)" }}>
        No obligation. We&apos;ll respond with a fixed price.
      </p>

      <div className="grid sm:grid-cols-2 gap-5 !mt-6">
        <div className="form-field">
          <label htmlFor="name" className="form-label">Your name *</label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="e.g. James Smith"
            className="form-input"
          />
        </div>
        <div className="form-field">
          <label htmlFor="phone" className="form-label">Phone number *</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            required
            value={form.phone}
            onChange={handleChange}
            placeholder="e.g. 07700 900000"
            className="form-input"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div className="form-field">
          <label htmlFor="postcode" className="form-label">Your postcode *</label>
          <input
            id="postcode"
            name="postcode"
            type="text"
            inputMode="text"
            autoComplete="postal-code"
            required
            value={form.postcode}
            onChange={handleChange}
            placeholder="e.g. M41 6QT"
            className="form-input"
            style={{ textTransform: "uppercase" }}
          />
        </div>
        <div className="form-field">
          <label htmlFor="vehicleType" className="form-label">Vehicle type *</label>
          <select
            id="vehicleType"
            name="vehicleType"
            required
            value={form.vehicleType}
            onChange={handleChange}
            className="form-input"
          >
            <option value="">Select type…</option>
            {VEHICLE_TYPES.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="form-field">
        <label htmlFor="vehicleMakeModel" className="form-label">Vehicle make & model</label>
        <input
          id="vehicleMakeModel"
          name="vehicleMakeModel"
          type="text"
          value={form.vehicleMakeModel}
          onChange={handleChange}
          placeholder="e.g. BMW 3 Series, Audi Q5, Ferrari Purosangue…"
          className="form-input"
        />
      </div>

      <div className="form-field">
        <label htmlFor="service" className="form-label">Service interested in *</label>
        <select
          id="service"
          name="service"
          required
          value={form.service}
          onChange={handleChange}
          className="form-input"
        >
          <option value="">Select a service…</option>
          {SERVICES.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
          <option value="Not sure — advise me">Not sure — advise me</option>
        </select>
      </div>

      <div className="form-field">
        <label htmlFor="message" className="form-label">Anything else? (optional)</label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Any specific concerns, paint issues, time constraints or questions…"
          className="form-input"
          rows={4}
        />
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="btn btn-primary w-full justify-center !mt-6"
        style={{ minHeight: "52px", fontSize: "1rem" }}
      >
        {submitting ? (
          <>
            <span className="animate-spin inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full" />
            Sending…
          </>
        ) : (
          <>
            <Send size={16} />
            Get My Free Quote
          </>
        )}
      </button>

      <p className="text-xs text-center !mt-2" style={{ color: "rgba(255,255,255,0.35)" }}>
        By submitting you agree to be contacted by Latin King Detailing regarding your quote.
      </p>
    </form>
  );
}
