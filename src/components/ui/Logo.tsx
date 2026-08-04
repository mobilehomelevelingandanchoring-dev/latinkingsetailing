import Link from "next/link";

function CrownMark({ size = 36 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={Math.round(size * 0.9)}
      viewBox="0 0 100 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Crown peak strokes */}
      <polyline
        points="4,74 18,44 37,62 50,8 63,62 82,44 96,74"
        stroke="#C41E3A"
        strokeWidth="9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Crown band */}
      <rect x="4" y="74" width="92" height="14" rx="3" fill="#C41E3A" />
      {/* Tip orbs */}
      <circle cx="50" cy="8" r="8" fill="#C41E3A" />
      <circle cx="18" cy="44" r="7" fill="#C41E3A" />
      <circle cx="82" cy="44" r="7" fill="#C41E3A" />
    </svg>
  );
}

interface LogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
  asLink?: boolean;
}

export function Logo({ size = "md", className = "", asLink = true }: LogoProps) {
  const crownSize = size === "sm" ? 30 : size === "lg" ? 52 : 40;
  const nameFs = size === "sm" ? "1.15rem" : size === "lg" ? "1.75rem" : "1.4rem";
  const tagFs = size === "sm" ? "0.58rem" : size === "lg" ? "0.9rem" : "0.72rem";

  const inner = (
    <div className={`flex items-center gap-3 ${className}`}>
      <CrownMark size={crownSize} />
      <div style={{ lineHeight: 1 }}>
        <div
          style={{
            fontFamily: "var(--font-barlow-condensed)",
            fontWeight: 900,
            fontSize: nameFs,
            color: "white",
            letterSpacing: "0.07em",
          }}
        >
          LATIN KING
        </div>
        <div
          style={{
            fontFamily: "var(--font-barlow-condensed)",
            fontWeight: 800,
            fontSize: tagFs,
            color: "var(--color-accent-400)",
            letterSpacing: "0.22em",
            marginTop: "3px",
          }}
        >
          DETAILING
        </div>
      </div>
    </div>
  );

  if (!asLink) return inner;

  return (
    <Link href="/" aria-label="Latin King Detailing — Home">
      {inner}
    </Link>
  );
}
