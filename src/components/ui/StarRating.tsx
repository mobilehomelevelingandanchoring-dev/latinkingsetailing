import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface StarRatingProps {
  rating?: number;
  max?: number;
  size?: number;
  className?: string;
}

export function StarRating({ rating = 5, max = 5, size = 16, className }: StarRatingProps) {
  return (
    <div className={cn("stars", className)} aria-label={`${rating} out of ${max} stars`} role="img">
      {Array.from({ length: max }).map((_, i) => (
        <Star
          key={i}
          size={size}
          fill={i < Math.round(rating) ? "currentColor" : "none"}
          strokeWidth={1.5}
        />
      ))}
    </div>
  );
}
