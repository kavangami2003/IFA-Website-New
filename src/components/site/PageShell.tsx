import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";

/**
 * Shell for the long-form pages (about, guides, legal). Deliberately plain —
 * the money pages carry the imagery, these carry the words.
 */
export function PageShell({
  eyebrow,
  title,
  intro,
  updated,
  children,
  cta = true,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  updated?: string;
  children: ReactNode;
  cta?: boolean;
}) {
  return (
    <>
      <section className="border-b border-line bg-cream py-10 sm:py-14 md:py-20">
        <div className="container-page">
          <Reveal className="max-w-3xl">
            {eyebrow && (
              <span className="mb-3 block text-[12px] font-bold uppercase tracking-[0.2em] text-stone sm:mb-4 sm:text-[14px]">
                {eyebrow}
              </span>
            )}
            <h1 className="txt-hero text-ink">{title}</h1>
            {intro && <p className="mt-5 txt-lead text-body sm:mt-7">{intro}</p>}
            {updated && <p className="mt-5 text-[13px] text-faint">Last updated: {updated}</p>}
          </Reveal>
        </div>
      </section>

      <section className="container-page py-10 sm:py-14 md:py-20">
        <div className="prose-ifa">{children}</div>
      </section>

      {cta && (
        <section className="bg-[#0a0d1b] py-14 text-center text-white sm:py-20 md:py-24">
          <div className="container-page">
            <Reveal>
              <h2 className="txt-section mx-auto max-w-2xl text-white">Ready to speak to a real person?</h2>
              <p className="mx-auto mt-5 max-w-xl txt-body text-white/70">
                Answer a few questions and we&apos;ll introduce you to one hand-picked, FCA-regulated independent adviser. Free, with no obligation.
              </p>
              <div className="cta-stack mt-8 justify-center">
                <Link
                  href="/find-a-financial-adviser/"
                  className="inline-flex min-h-[52px] items-center gap-2 rounded-full bg-stone px-7 text-[15px] font-semibold text-white transition-colors hover:bg-champagne-deep sm:px-8 sm:text-base"
                >
                  Find my adviser <ArrowRight className="h-4 w-4 shrink-0" />
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      )}
    </>
  );
}
