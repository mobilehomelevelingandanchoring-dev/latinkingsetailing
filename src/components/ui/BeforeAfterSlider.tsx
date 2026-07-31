"use client";

import { useRef, useState, useCallback } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface BeforeAfterSliderProps {
  before: { src: string; alt: string };
  after: { src: string; alt: string };
  className?: string;
  initialPosition?: number;
}

export function BeforeAfterSlider({
  before,
  after,
  className,
  initialPosition = 50,
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(initialPosition);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updatePosition = useCallback((clientX: number) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPosition((x / rect.width) * 100);
  }, []);

  const onMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    updatePosition(e.clientX);
    e.preventDefault();
  };

  const onMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging) return;
      updatePosition(e.clientX);
    },
    [isDragging, updatePosition]
  );

  const onMouseUp = () => setIsDragging(false);

  const onTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    updatePosition(e.touches[0].clientX);
  };

  const onTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (!isDragging) return;
      updatePosition(e.touches[0].clientX);
    },
    [isDragging, updatePosition]
  );

  const onTouchEnd = () => setIsDragging(false);

  return (
    <div
      ref={containerRef}
      className={cn("ba-slider rounded-xl overflow-hidden select-none", className)}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      aria-label="Before and after comparison slider"
      role="img"
    >
      {/* After image (full) */}
      <div className="relative w-full h-full">
        <Image
          src={after.src}
          alt={after.alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 60vw"
          priority
        />
        {/* After label */}
        <span
          className="absolute top-4 right-4 px-2.5 py-1 rounded text-xs font-bold tracking-wider uppercase"
          style={{
            background: "rgba(196,30,58,0.9)",
            color: "#fff",
            backdropFilter: "blur(4px)",
          }}
        >
          After
        </span>
      </div>

      {/* Before image (clipped) */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <Image
          src={before.src}
          alt={before.alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 60vw"
        />
        {/* Before label */}
        <span
          className="absolute top-4 left-4 px-2.5 py-1 rounded text-xs font-bold tracking-wider uppercase"
          style={{
            background: "rgba(0,0,0,0.7)",
            color: "#fff",
            backdropFilter: "blur(4px)",
          }}
        >
          Before
        </span>
      </div>

      {/* Drag handle */}
      <div
        className="absolute inset-y-0 z-20"
        style={{ left: `${position}%`, transform: "translateX(-50%)" }}
      >
        {/* Line */}
        <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-0.5 bg-white/90" />
        {/* Circle */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full flex items-center justify-center shadow-xl"
          style={{
            background: "var(--color-accent-600)",
            border: "3px solid #fff",
            boxShadow: "0 4px 20px rgba(0,0,0,0.6)",
          }}
        >
          <svg width="16" height="10" viewBox="0 0 16 10" fill="white">
            <path d="M0 5 L5 0 L5 10 Z" />
            <path d="M16 5 L11 0 L11 10 Z" />
          </svg>
        </div>
      </div>
    </div>
  );
}
