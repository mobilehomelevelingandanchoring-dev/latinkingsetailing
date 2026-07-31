import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  titleHighlight?: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  titleHighlight,
  description,
  centered = false,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("mb-12", centered && "text-center", className)}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>
        {title}
        {titleHighlight && (
          <>
            {" "}
            <span className="gradient-text-red">{titleHighlight}</span>
          </>
        )}
      </h2>
      {description && (
        <p className="mt-4 text-lg" style={{ color: "rgba(255,255,255,0.6)", maxWidth: centered ? "55ch" : "60ch", marginInline: centered ? "auto" : undefined }}>
          {description}
        </p>
      )}
    </div>
  );
}
