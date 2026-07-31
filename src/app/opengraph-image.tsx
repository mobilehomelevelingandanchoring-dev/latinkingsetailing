import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Latin King Detailing — Mobile Car Detailing & Ceramic Coating in Urmston, Manchester";

const crownSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 90" fill="none"><polyline points="4,74 18,44 37,62 50,8 63,62 82,44 96,74" stroke="#C41E3A" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/><rect x="4" y="74" width="92" height="14" rx="3" fill="#C41E3A"/><circle cx="50" cy="8" r="8" fill="#C41E3A"/><circle cx="18" cy="44" r="7" fill="#C41E3A"/><circle cx="82" cy="44" r="7" fill="#C41E3A"/></svg>`;

async function loadFont(): Promise<ArrayBuffer | null> {
  try {
    const css = await fetch(
      "https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@900&display=swap",
      { headers: { "User-Agent": "Mozilla/5.0 (compatible; Googlebot/2.1)" } }
    ).then((r) => r.text());

    const url = css.match(/url\(([^)]+\.woff2)\)/)?.[1];
    if (!url) return null;
    return fetch(url).then((r) => r.arrayBuffer());
  } catch {
    return null;
  }
}

export default async function OGImage() {
  const fontData = await loadFont();

  return new ImageResponse(
    <div
      style={{
        background:
          "radial-gradient(ellipse 900px 500px at 50% 5%, rgba(196,30,58,0.28) 0%, #0a0a0b 65%)",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: fontData ? "Barlow" : "sans-serif",
      }}
    >
      {/* Crown */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`data:image/svg+xml,${encodeURIComponent(crownSvg)}`}
        width={148}
        height={133}
        alt=""
      />

      {/* LATIN KING */}
      <div
        style={{
          color: "white",
          fontSize: 110,
          fontWeight: 900,
          letterSpacing: "0.07em",
          lineHeight: 1,
          marginTop: 28,
        }}
      >
        LATIN KING
      </div>

      {/* DETAILING */}
      <div
        style={{
          color: "#C41E3A",
          fontSize: 78,
          fontWeight: 900,
          letterSpacing: "0.22em",
          lineHeight: 1,
          marginTop: 6,
        }}
      >
        DETAILING
      </div>

      {/* Divider */}
      <div
        style={{
          width: 520,
          height: 1,
          background: "rgba(255,255,255,0.18)",
          marginTop: 38,
        }}
      />

      {/* Location */}
      <div
        style={{
          color: "rgba(255,255,255,0.55)",
          fontSize: 28,
          letterSpacing: "0.05em",
          marginTop: 24,
          fontWeight: 600,
        }}
      >
        Mobile Car Detailing · Urmston, Manchester
      </div>

      {/* Rating */}
      <div
        style={{
          color: "rgba(255,255,255,0.32)",
          fontSize: 22,
          letterSpacing: "0.04em",
          marginTop: 12,
        }}
      >
        ⭐ 5.0 · 47+ Verified Reviews · We Come to You
      </div>
    </div>,
    {
      ...size,
      fonts: fontData
        ? [{ name: "Barlow", data: fontData, weight: 900, style: "normal" }]
        : undefined,
    }
  );
}
