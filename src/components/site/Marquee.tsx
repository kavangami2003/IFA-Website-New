import { cn } from "@/lib/utils";
import type { CSSProperties } from "react";

/** Infinite marquee ticker. The row is duplicated so the -50% loop is seamless. */
export function Marquee({ items, className, speed = 34 }: { items: string[]; className?: string; speed?: number }) {
  const row = [...items, ...items];
  return (
    <div className={cn("flex overflow-hidden whitespace-nowrap", className)} aria-hidden>
      <div className="marquee-track flex shrink-0 items-center" style={{ "--marquee-speed": `${speed}s` } as CSSProperties}>
        {row.map((t, i) => (
          <span key={i} className="flex items-center">
            <span className="mx-6 index-label text-[0.8rem]">{t}</span>
            <span className="h-2.5 w-5 shrink-0 rounded-[7px] border-2 border-stone/60" />
          </span>
        ))}
      </div>
    </div>
  );
}
