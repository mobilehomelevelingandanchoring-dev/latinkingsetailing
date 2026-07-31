import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

const crownSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 90" fill="none"><polyline points="4,74 18,44 37,62 50,8 63,62 82,44 96,74" stroke="#C41E3A" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/><rect x="4" y="74" width="92" height="14" rx="3" fill="#C41E3A"/><circle cx="50" cy="8" r="8" fill="#C41E3A"/><circle cx="18" cy="44" r="7" fill="#C41E3A"/><circle cx="82" cy="44" r="7" fill="#C41E3A"/></svg>`;

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        background: "#0a0a0b",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`data:image/svg+xml,${encodeURIComponent(crownSvg)}`}
        width={28}
        height={25}
        alt=""
      />
    </div>,
    { ...size }
  );
}
