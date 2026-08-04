"use client";

import { useState } from "react";
import { Copy, Check, Trash2 } from "lucide-react";
import { deleteBooking } from "@/app/admin/actions";

interface Props {
  id: string;
  full_name: string;
  phone: string;
  email?: string | null;
  area?: string | null;
  service?: string | null;
  vehicle?: string | null;
  preferred_date?: string | null;
  preferred_time?: string | null;
  notes?: string | null;
  status: string;
  created_at: string;
}

export function BookingActions(p: Props) {
  const [copied, setCopied] = useState(false);

  const copyText = [
    "Latin King Detailing — Booking",
    `Name: ${p.full_name}`,
    `Phone: ${p.phone}`,
    p.email    && `Email: ${p.email}`,
    p.area     && `Area: ${p.area}`,
    p.service  && `Service: ${p.service}`,
    p.vehicle  && `Vehicle: ${p.vehicle}`,
    p.preferred_date && `Date: ${new Date(p.preferred_date).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}${p.preferred_time ? ` · ${p.preferred_time}` : ""}`,
    p.notes    && `Notes: "${p.notes}"`,
    `Status: ${p.status}`,
    `Submitted: ${new Date(p.created_at).toLocaleString("en-GB", { day: "numeric", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" })}`,
  ].filter(Boolean).join("\n");

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(copyText);
    } catch {
      const el = document.createElement("textarea");
      el.value = copyText;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const btnBase: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.375rem",
    minHeight: "44px",
    borderRadius: "0.5rem",
    fontSize: "0.8125rem",
    fontWeight: 600,
    cursor: "pointer",
    border: "none",
    width: "100%",
  };

  return (
    <div style={{ display: "flex", gap: "0.5rem" }}>
      <button
        type="button"
        onClick={handleCopy}
        style={{
          ...btnBase,
          flex: 1,
          background: copied ? "rgba(30,180,80,0.12)" : "rgba(255,255,255,0.07)",
          border: `1px solid ${copied ? "rgba(30,180,80,0.3)" : "rgba(255,255,255,0.12)"}`,
          color: copied ? "rgb(30,200,80)" : "rgba(255,255,255,0.75)",
        }}
      >
        {copied ? <Check size={14} /> : <Copy size={14} />}
        {copied ? "Copied!" : "Copy"}
      </button>

      <form action={deleteBooking} style={{ flex: 1 }}>
        <input type="hidden" name="id" value={p.id} />
        <button
          type="submit"
          onClick={(e) => {
            if (!confirm(`Delete booking for ${p.full_name}?\nThis cannot be undone.`)) {
              e.preventDefault();
            }
          }}
          style={{
            ...btnBase,
            background: "rgba(196,30,58,0.1)",
            border: "1px solid rgba(196,30,58,0.25)",
            color: "var(--color-accent-400)",
          }}
        >
          <Trash2 size={14} />
          Delete
        </button>
      </form>
    </div>
  );
}
