"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { label: "Retirement", href: "/retirement/" },
  { label: "Pensions", href: "/pensions/" },
  { label: "Investments", href: "/investments/" },
  { label: "Inheritance", href: "/inheritance/" },
  { label: "Switching", href: "/switching/" },
  { label: "Guides", href: "/guides/" },
];

/** Editorial light header — white, near-black wordmark, dark pill CTA. */
export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bone/95 backdrop-blur">
      <div className="container-page flex h-[76px] items-center justify-between md:h-[88px]">
        <Link href="/" aria-label="IFA Connect home" className="shrink-0">
          <Image src="/logo-transparent.png" alt="IFA Connect" width={400} height={80} priority className="h-8 w-auto md:h-9" />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => (
            <Link key={item.label} href={item.href} className="text-[13px] font-bold uppercase tracking-[0.14em] text-ink transition-colors hover:text-stone">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/find-a-financial-adviser/" className="hidden rounded-full bg-ink px-6 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-charcoal-deep lg:inline-flex">
            Find an Adviser
          </Link>
          <button onClick={() => setOpen((v) => !v)} aria-label="Menu" aria-expanded={open} className="inline-flex h-11 w-11 items-center justify-center rounded-full text-ink lg:hidden">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-line bg-bone lg:hidden">
          <nav className="container-page flex flex-col py-4">
            {nav.map((item) => (
              <Link key={item.label} href={item.href} onClick={() => setOpen(false)} className="border-b border-line-soft py-3 text-base font-medium text-ink last:border-0">
                {item.label}
              </Link>
            ))}
            <Link href="/find-a-financial-adviser/" onClick={() => setOpen(false)} className="mt-4 rounded-full bg-ink px-6 py-3 text-center text-[15px] font-semibold text-white">
              Find an Adviser
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
