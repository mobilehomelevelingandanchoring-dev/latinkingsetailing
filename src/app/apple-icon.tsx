import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

const crownSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 90" fill="none"><polyline points="4,74 18,44 37,62 50,8 63,62 82,44 96,74" stroke="#C41E3A" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/><rect x="4" y="74" width="92" height="14" rx="3" fill="#C41E3A"/><circle cx="50" cy="8" r="8" fill="#C41E3A"/><circle cx="18" cy="44" r="7" fill="#C41E3A"/><circle cx="82" cy="44" r="7" fill="#C41E3A"/></svg>`;

export default function AppleIcon() {
  return new ImageResponse(
    <div
      style={{
        background: "#0a0a0b",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 0,
        borderRadius: 32,
      }}
    >
      {/* Crown */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`data:image/svg+xml,${encodeURIComponent(crownSvg)}`}
        width={100}
        height={90}
        alt=""
      />
      {/* LATIN KING */}
      <div
        style={{
          color: "white",
          fontSize: 28,
          fontWeight: 900,
          letterSpacing: "0.07em",
          marginTop: 10,
          lineHeight: 1,
          fontFamily: "sans-serif",
        }}
      >
        LATIN KING
      </div>
      {/* DETAILING */}
      <div
        style={{
          color: "#C41E3A",
          fontSize: 20,
          fontWeight: 900,
          letterSpacing: "0.2em",
          marginTop: 4,
          lineHeight: 1,
          fontFamily: "sans-serif",
        }}
      >
        DETAILING
      </div>
    </div>,
    { ...size }
  );
}
