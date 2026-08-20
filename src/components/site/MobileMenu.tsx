"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { Menu, X, ArrowUpRight, Phone } from "lucide-react";
import { nav, site } from "@/lib/site";

/**
 * Full-screen GSAP mobile menu.
 * Open: gold wipe → midnight panel wipe → links stagger up through masks → meta fades in.
 * Close: fast reverse. Rendered through a portal into <body> so the header's
 * backdrop-blur (a containing block) can't trap the fixed overlay.
 */
export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  const overlayRef = useRef<HTMLDivElement>(null);
  const goldRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const topRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const metaRef = useRef<HTMLDivElement>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);

  const openMenu = useCallback(() => { setMounted(true); setOpen(true); }, []);
  const closeMenu = useCallback(() => {
    setOpen(false);
    if (tl.current) {
      tl.current.timeScale(1.9).reverse();
      tl.current.eventCallback("onReverseComplete", () => setMounted(false));
    } else {
      setMounted(false);
    }
  }, []);

  // Close on route change. Compares against the previous pathname rather than
  // reading `mounted`, so opening the menu can't re-trigger this effect and
  // close it again in the same commit.
  const lastPath = useRef(pathname);
  useEffect(() => {
    if (lastPath.current === pathname) return;
    lastPath.current = pathname;
    closeMenu();
  }, [pathname, closeMenu]);

  // Lock body scroll while mounted
  useEffect(() => {
    if (!mounted) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, [mounted]);

  // Build + play timeline on mount
  useEffect(() => {
    if (!mounted || !overlayRef.current) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const links = listRef.current?.querySelectorAll("[data-link]") ?? [];

    const ctx = gsap.context(() => {
      gsap.set(overlayRef.current, { autoAlpha: 1 });
      if (reduce) {
        gsap.set([goldRef.current, panelRef.current], { scaleY: 1 });
        gsap.set([topRef.current, metaRef.current], { autoAlpha: 1, y: 0 });
        gsap.set(links, { yPercent: 0 });
        return;
      }
      gsap.set([goldRef.current, panelRef.current], { scaleY: 0, transformOrigin: "bottom center" });
      gsap.set(topRef.current, { autoAlpha: 0 });
      gsap.set(links, { yPercent: 120 });
      gsap.set(metaRef.current, { autoAlpha: 0, y: 24 });

      tl.current = gsap.timeline({ defaults: { ease: "power4.out" } });
      tl.current
        .to(goldRef.current, { scaleY: 1, duration: 0.42 })
        .to(panelRef.current, { scaleY: 1, duration: 0.5 }, "-=0.26")
        .to(topRef.current, { autoAlpha: 1, duration: 0.3 }, "-=0.2")
        .to(links, { yPercent: 0, stagger: 0.06, duration: 0.6 }, "-=0.15")
        .to(metaRef.current, { autoAlpha: 1, y: 0, duration: 0.4 }, "-=0.25");
    });
    return () => ctx.revert();
  }, [mounted]);

  const phoneHref = `tel:${site.phone.replace(/\s/g, "")}`;

  return (
    <>
      <button
        onClick={() => (open ? closeMenu() : openMenu())}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:border-stone lg:hidden"
      >
        <Menu className="h-5 w-5" />
      </button>

      {mounted &&
        createPortal(
          <div ref={overlayRef} className="fixed inset-0 z-[100] overflow-hidden invisible">
            <div ref={goldRef} className="absolute inset-0 bg-stone" />
            <div ref={panelRef} className="absolute inset-0 bg-charcoal" />

            <div className="relative flex h-[100svh] flex-col px-6 pb-10 pt-5">
              {/* top bar */}
              <div ref={topRef} className="flex items-center justify-between">
                <Image src="/logo-white.png" alt="IFA Connect" width={400} height={80} className="h-6 w-auto" />
                <button onClick={closeMenu} aria-label="Close menu" className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:border-stone">
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* links */}
              <ul ref={listRef} className="mt-auto flex flex-col">
                {nav.map((item, i) => (
                  <li key={item.href} className="overflow-hidden border-b border-white/10">
                    <Link data-link href={item.href} onClick={closeMenu} className="group flex items-baseline gap-4 py-3.5">
                      <span className="font-display text-xs font-bold text-stone">0{i + 1}</span>
                      <span className="font-display text-[1.75rem] font-extrabold leading-none text-white transition-colors group-hover:text-stone">{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>

              {/* meta */}
              <div ref={metaRef} className="mt-8">
                <Link href="/find-a-financial-adviser/" onClick={closeMenu} className="flex items-center justify-center gap-2 rounded-full bg-stone px-6 py-3.5 font-display text-sm font-bold text-charcoal">
                  Find my adviser <ArrowUpRight className="h-4 w-4" />
                </Link>
                <a href={phoneHref} className="mt-4 flex items-center justify-center gap-2 text-sm font-semibold text-white/80">
                  <Phone className="h-4 w-4 text-stone" /> {site.phone}
                </a>
                <p className="mt-6 text-center index-label text-white/40">Independent · Whole-of-market · UK</p>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
