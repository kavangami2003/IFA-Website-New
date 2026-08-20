"use client";

import { type ReactNode, useEffect } from "react";
import { ReactLenis, useLenis } from "lenis/react";
import { usePathname } from "next/navigation";
import "lenis/dist/lenis.css";

/**
 * Lenis smooth scroll (house standard: lerp 0.12, smoothWheel).
 * Resets scroll to top on every client-side navigation.
 */
function ScrollReset() {
  const lenis = useLenis();
  const pathname = usePathname();

  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true, force: true });
    } else if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
    }
  }, [pathname, lenis]);

  return null;
}

export function SmoothScroll({ children }: { children: ReactNode }) {
  return (
    <ReactLenis root options={{ lerp: 0.12, smoothWheel: true }}>
      <ScrollReset />
      {children}
    </ReactLenis>
  );
}
