import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";

export const metadata: Metadata = {
  title: "Guides & Resources | Independent Financial Advice, Explained",
  description:
    "Plain-English guides to retirement, pensions and inheritance planning — so you can make confident decisions before speaking to an independent, FCA-regulated adviser.",
};

const guides = [
  { t: "Retirement Planning", d: "How to turn a lifetime of saving into a secure, tax-efficient income that lasts.", img: "/guide-retire.jpg", href: "/retirement/" },
  { t: "Pensions", d: "Consolidating old pots, cutting hidden fees and making the most of tax relief.", img: "/guide-pensions.jpg", href: "/pensions/" },
  { t: "Inheritance & Estate", d: "Reducing inheritance tax and passing on more of your wealth to your family.", img: "/guide-iht.jpg", href: "/inheritance/" },
];

const more = [
  { t: "How much do I need to retire?", d: "A plain-English walk through the numbers behind the question everyone asks first.", href: "/guides/how-much-do-i-need-to-retire/" },
  { t: "Investments & Wealth", d: "Building a diversified, risk-adjusted portfolio around your goals.", href: "/investments/" },
  { t: "Selling a Business", d: "What to plan for before and after the proceeds land in your account.", href: "/selling-your-business/" },
  { t: "Switching Advisers", d: "How to move to a better adviser — and why it's simpler than you think.", href: "/switching/" },
];

export default function GuidesPage() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="container-page pb-8 pt-10 sm:pb-12 sm:pt-16 md:pb-16 md:pt-24">
        <Reveal>
          <span className="mb-3 block text-[12px] font-bold uppercase tracking-[0.2em] text-stone sm:mb-4 sm:text-[14px]">Guides &amp; Resources</span>
          <h1 className="txt-hero max-w-4xl text-ink">Understand your options before you decide.</h1>
          <p className="mt-5 max-w-2xl txt-lead text-body sm:mt-8">
            Clear, jargon-free guides to the big financial decisions — so you can walk into any conversation with an adviser already knowing the right questions to ask.
          </p>
        </Reveal>
      </section>

      {/* ================= FEATURED GUIDES ================= */}
      <section className="container-page py-8 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 gap-5 sm:gap-8 md:grid-cols-3">
          {guides.map((g, i) => (
            <Reveal key={g.t} delay={(i % 3) * 0.08}>
              <Link href={g.href} className="group block h-full overflow-hidden rounded-[20px] border border-line transition-transform hover:-translate-y-1 sm:rounded-[28px]">
                <div className="relative h-44 w-full overflow-hidden sm:h-56">
                  <Image priority={i === 0} src={g.img} alt={g.t} fill sizes="(max-width:768px) 100vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-5 sm:p-8">
                  <h3 className="txt-card text-ink">{g.t}</h3>
                  <p className="mt-2 txt-body text-body sm:mt-3">{g.d}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-stone sm:mt-6">
                    Read the guide <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ================= MORE TOPICS ================= */}
      <section className="container-page py-8 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">
          {more.map((m, i) => (
            <Reveal key={m.t} delay={(i % 2) * 0.08}>
              <Link href={m.href} className="group flex h-full items-center justify-between gap-4 rounded-[20px] bg-cream p-5 transition-transform hover:-translate-y-1 sm:gap-6 sm:rounded-[28px] sm:p-8">
                <div className="min-w-0">
                  <h3 className="txt-card text-ink">{m.t}</h3>
                  <p className="mt-2 txt-body text-body">{m.d}</p>
                </div>
                <ArrowRight className="h-5 w-5 shrink-0 text-stone transition-transform group-hover:translate-x-1 sm:h-6 sm:w-6" />
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-[#0a0d1b] py-16 text-center text-white sm:py-24 md:py-32">
        <div className="container-page">
          <Reveal>
            <h2 className="txt-section mx-auto max-w-3xl text-white">Ready to speak to a real person?</h2>
            <p className="mx-auto mt-5 max-w-xl txt-body text-white/70 sm:mt-6">
              When you&apos;re ready, we&apos;ll introduce you to a hand-picked, FCA-regulated independent adviser — usually within the hour. Free, with no obligation.
            </p>
            <div className="cta-stack mt-8 justify-center sm:mt-10">
              <Link href="/find-a-financial-adviser/" className="inline-flex min-h-[52px] items-center gap-2 rounded-full bg-stone px-7 text-[15px] font-semibold text-white transition-colors hover:bg-champagne-deep sm:px-8 sm:text-base">
                Find my adviser <ArrowRight className="h-4 w-4 shrink-0" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
