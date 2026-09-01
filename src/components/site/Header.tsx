"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ArrowRight } from "lucide-react";
import { nav, site } from "@/lib/site";
import { cn } from "@/lib/utils";

/** Editorial light header — white, near-black wordmark, dark pill CTA. */
export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const phoneHref = `tel:${site.phone.replace(/\s/g, "")}`;

  // Close on navigation.
  useEffect(() => { setOpen(false); }, [pathname]);

  // Lock the page behind the open panel, and close on Escape.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bone/95 backdrop-blur">
      <div className="container-page flex h-[68px] items-center justify-between gap-3 sm:h-[76px] lg:h-[88px]">
        <Link href="/" aria-label="IFA Connect home" className="shrink-0">
          <Image
            src="/logo-transparent.png"
            alt="IFA Connect"
            width={400}
            height={80}
            priority
            className="h-[26px] w-auto sm:h-8 lg:h-9"
          />
        </Link>

        <nav className="hidden items-center gap-4 lg:flex xl:gap-6">
          {nav.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="whitespace-nowrap text-[11px] font-bold uppercase tracking-[0.1em] text-ink transition-colors hover:text-stone xl:text-[13px] xl:tracking-[0.14em]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <Link
            href="/find-a-financial-adviser/"
            className="hidden whitespace-nowrap rounded-full bg-ink px-5 py-3 text-[14px] font-semibold text-white transition-colors hover:bg-charcoal-deep lg:inline-flex xl:px-6 xl:text-[15px]"
          >
            Find an Adviser
          </Link>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-ink transition-colors hover:bg-stone-tint lg:hidden"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile panel. Height-capped and scrollable so a seven-item nav plus the
          CTAs still fits on a 320×568 screen. */}
      <div
        id="mobile-nav"
        className={cn(
          "overflow-hidden border-line bg-bone transition-[max-height] duration-300 ease-out lg:hidden",
          open ? "max-h-[calc(100svh-68px)] border-t" : "max-h-0",
        )}
      >
        <nav className="container-page max-h-[calc(100svh-68px)] overflow-y-auto overscroll-contain py-3 pb-6">
          <ul>
            {nav.map((item, i) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between gap-3 border-b border-line-soft py-3.5 text-[15px] font-semibold text-ink"
                >
                  <span className="flex items-baseline gap-3">
                    <span className="text-[11px] font-bold text-stone">{String(i + 1).padStart(2, "0")}</span>
                    {item.label}
                  </span>
                  <ArrowRight className="h-4 w-4 shrink-0 text-faint" />
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="/find-a-financial-adviser/"
            onClick={() => setOpen(false)}
            className="mt-5 flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-ink px-5 text-[15px] font-semibold text-white"
          >
            Find an Adviser <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href={phoneHref}
            className="mt-3 flex min-h-[52px] items-center justify-center gap-2 rounded-full border border-line px-5 text-[15px] font-semibold text-ink"
          >
            <Phone className="h-4 w-4 text-stone" /> {site.phone}
          </a>
          <p className="mt-4 text-center text-[11px] leading-relaxed text-faint">
            Independent · Whole-of-market · FCA-regulated advisers
          </p>
        </nav>
      </div>
    </header>
  );
}
