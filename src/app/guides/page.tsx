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
  { t: "Investments & Wealth", d: "Building a diversified, risk-adjusted portfolio around your goals.", href: "/investments/" },
  { t: "Switching Advisers", d: "How to move to a better adviser — and why it's simpler than you think.", href: "/switching/" },
];

export default function GuidesPage() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="container-page pb-12 pt-16 md:pb-16 md:pt-24">
        <Reveal>
          <span className="mb-4 block text-[14px] font-bold uppercase tracking-[0.2em] text-stone">Guides &amp; Resources</span>
          <h1 className="max-w-4xl font-display text-[3rem] font-extrabold leading-[1.05] tracking-[-0.02em] text-ink sm:text-6xl md:text-[5rem]">
            Understand your options before you decide.
          </h1>
          <p className="mt-8 max-w-2xl text-xl leading-relaxed text-body md:text-[22px]">
            Clear, jargon-free guides to the big financial decisions — so you can walk into any conversation with an adviser already knowing the right questions to ask.
          </p>
        </Reveal>
      </section>

      {/* ================= FEATURED GUIDES ================= */}
      <section className="container-page py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {guides.map((g, i) => (
            <Reveal key={g.t} delay={(i % 3) * 0.08}>
              <Link href={g.href} className="group block overflow-hidden rounded-[28px] border border-line transition-transform hover:-translate-y-1">
                <div className="relative h-56 w-full overflow-hidden">
                  <Image src={g.img} alt={g.t} fill sizes="(max-width:768px) 100vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-ink">{g.t}</h3>
                  <p className="mt-3 leading-relaxed text-body">{g.d}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-stone">
                    Read the guide <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ================= MORE TOPICS ================= */}
      <section className="container-page py-12 md:py-16">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {more.map((m, i) => (
            <Reveal key={m.t} delay={(i % 2) * 0.08}>
              <Link href={m.href} className="group flex items-center justify-between gap-6 rounded-[28px] bg-cream p-8 transition-transform hover:-translate-y-1">
                <div>
                  <h3 className="text-2xl font-bold text-ink">{m.t}</h3>
                  <p className="mt-2 leading-relaxed text-body">{m.d}</p>
                </div>
                <ArrowRight className="h-6 w-6 shrink-0 text-stone transition-transform group-hover:translate-x-1" />
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-[#0a0d1b] py-24 text-center text-white md:py-32">
        <div className="container-page">
          <Reveal>
            <h2 className="mx-auto max-w-3xl font-display text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-[3.5rem]">Ready to speak to a real person?</h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/70">When you&apos;re ready, we&apos;ll introduce you to a hand-picked, FCA-regulated independent adviser — usually within the hour. Free, with no obligation.</p>
            <Link href="/find-a-financial-adviser/" className="mt-10 inline-flex items-center gap-2 rounded-full bg-stone px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-champagne-deep">
              Find my adviser <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
