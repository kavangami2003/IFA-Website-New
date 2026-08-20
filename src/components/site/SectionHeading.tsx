import type { ReactNode } from "react";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

interface Props {
  index?: string;
  eyebrow?: string;
  title: ReactNode;
  intro?: string;
  invert?: boolean;
  className?: string;
}

export function SectionHeading({ index, eyebrow, title, intro, invert, className }: Props) {
  return (
    <Reveal className={cn("max-w-3xl", className)}>
      {(index || eyebrow) && (
        <div className={cn("index-label mb-5 flex items-center gap-3", invert ? "text-stone" : "text-stone-dark")}>
          {index && <span>({index})</span>}
          <span className="h-px w-8 bg-current opacity-40" />
          {eyebrow && <span>{eyebrow}</span>}
        </div>
      )}
      <h2 className={cn("display-2", invert && "text-white")}>{title}</h2>
      {intro && <p className={cn("mt-4 max-w-xl text-[15px] leading-relaxed", invert ? "text-on-charcoal" : "text-body")}>{intro}</p>}
    </Reveal>
  );
}
