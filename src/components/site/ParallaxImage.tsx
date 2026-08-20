"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { cn } from "@/lib/utils";

/** Image that drifts on scroll for depth. Inner is oversized so no gaps appear. */
export function ParallaxImage({ src, alt, className, priority, amount = 8 }: { src: string; alt: string; className?: string; priority?: boolean; amount?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [`-${amount}%`, `${amount}%`]);
  return (
    <div ref={ref} className={cn("relative overflow-hidden", className)}>
      <motion.div style={{ y }} className="absolute inset-x-0 -top-[10%] h-[120%]">
        <Image src={src} alt={alt} fill priority={priority} sizes="(max-width:1024px) 100vw, 55vw" className="object-cover" />
      </motion.div>
    </div>
  );
}
