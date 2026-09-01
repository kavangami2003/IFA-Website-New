import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { TrustpilotStrip } from "@/components/site/TrustpilotStrip";
import { Faq, type QA } from "@/components/site/Faq";

export type IconItem = { icon: LucideIcon; t: string; d: string };
export type Step = { n: string; t: string; d: string };

export type ServiceData = {
  href?: string; // primary funnel link; defaults to the find-an-adviser form
  hero: { title: string; intro: string; primary: string; secondary: string; image: string; alt: string };
  /** Section 3 of the spec — name the fear before selling the fix. */
  pain?: { title: string; body: string };
  grid: { title: string; intro: string; items: IconItem[] };
  split: { title: string; body: string; link: string; image: string; alt: string };
  steps: { title: string; items: Step[] };
  statement: string;
  dark: { title: string; intro: string; cards: IconItem[] };
  experts: { title: string; body: string; link: string; image: string; alt: string };
  /** Section 9 of the spec — objection-kill FAQ, emitted as FAQPage schema. */
  faqs?: QA[];
  cta: { title: string; body: string; button: string; compliance: string };
};

export function ServiceLayout({ data }: { data: ServiceData }) {
  const href = data.href ?? "/find-a-financial-adviser/";

  const faqSchema = data.faqs?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: data.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }
    : null;

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="container-page pb-10 pt-10 sm:pb-16 sm:pt-16 md:pb-24 md:pt-24">
        <div className="grid grid-cols-1 items-center gap-9 sm:gap-12 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-7 lg:pr-8">
            <h1 className="txt-hero text-ink">{data.hero.title}</h1>
            <p className="mt-5 max-w-2xl txt-lead text-body sm:mt-8">{data.hero.intro}</p>
            <div className="cta-stack mt-7 sm:mt-10">
              <Link
                href={href}
                className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-ink px-7 text-[15px] font-semibold text-white transition-colors hover:bg-charcoal-deep sm:px-8 sm:text-base"
              >
                {data.hero.primary}
              </Link>
              <Link
                href="#details"
                className="inline-flex min-h-[52px] items-center justify-center rounded-full border-2 border-ink px-7 text-[15px] font-semibold text-ink transition-all hover:bg-ink hover:text-white sm:px-8 sm:text-base"
              >
                {data.hero.secondary}
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.12} className="lg:col-span-5">
            <div className="organic-shape relative h-[320px] w-full overflow-hidden sm:h-[440px] md:h-[560px] lg:h-[680px]">
              <Image src={data.hero.image} alt={data.hero.alt} fill priority sizes="(max-width:1024px) 100vw, 42vw" className="object-cover" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= TRUST BAR (spec §2) ================= */}
      <TrustpilotStrip />

      {/* ================= THE PAIN (spec §3) ================= */}
      {data.pain && (
        <section className="bg-cream py-14 sm:py-20 md:py-24">
          <div className="container-page">
            <Reveal className="max-w-3xl">
              <h2 className="txt-section text-ink">{data.pain.title}</h2>
              <p className="mt-5 txt-lead text-body sm:mt-7">{data.pain.body}</p>
            </Reveal>
          </div>
        </section>
      )}

      {/* ================= TEAL — GRID (spec §4) ================= */}
      <section id="details" className="scroll-mt-24 bg-charcoal py-14 text-white sm:py-20 md:py-28">
        <div className="container-page">
          <Reveal>
            <h2 className="txt-section text-white">{data.grid.title}</h2>
            <p className="mt-4 max-w-2xl txt-body text-on-charcoal sm:mt-6">{data.grid.intro}</p>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-9 sm:mt-16 md:grid-cols-2 md:gap-x-16 md:gap-y-12">
            {data.grid.items.map((s, i) => (
              <Reveal key={s.t} delay={(i % 2) * 0.1}>
                <div className="border-t border-white/20 pt-6 sm:pt-8">
                  <s.icon className="h-8 w-8 text-white sm:h-9 sm:w-9" strokeWidth={1.6} />
                  <h3 className="mt-4 text-xl font-semibold text-white sm:mt-6 sm:text-2xl">{s.t}</h3>
                  <p className="mt-3 txt-body text-on-charcoal">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SPLIT (image right) ================= */}
      <section className="container-page py-14 sm:py-20 md:py-28">
        <div className="grid grid-cols-1 items-center gap-10 sm:gap-16 lg:grid-cols-2 lg:gap-24">
          <Reveal>
            <h2 className="txt-section text-ink">{data.split.title}</h2>
            <p className="mt-5 txt-lead text-body sm:mt-8">{data.split.body}</p>
            <Link href={href} className="mt-7 inline-flex min-h-[44px] items-center gap-2 text-[15px] font-semibold text-stone transition-colors hover:text-champagne-deep sm:mt-10 sm:text-base">
              {data.split.link} <ArrowRight className="h-4 w-4 shrink-0" />
            </Link>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="organic-shape relative h-[300px] w-full overflow-hidden sm:h-[420px] md:h-[560px]">
              <Image src={data.split.image} alt={data.split.alt} fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= TEAL — STEPS (spec §6) ================= */}
      <section className="bg-charcoal py-14 text-white sm:py-20 md:py-28">
        <div className="container-page">
          <Reveal><h2 className="txt-section text-white">{data.steps.title}</h2></Reveal>
          <div className="mt-10 grid grid-cols-1 gap-10 sm:mt-16 md:mt-20 md:grid-cols-3 md:gap-8">
            {data.steps.items.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.1}>
                <span className="block text-4xl font-light text-white opacity-50 sm:text-5xl">{s.n}</span>
                <h3 className="mt-4 text-xl font-semibold text-white sm:mt-6 sm:text-2xl">{s.t}</h3>
                <p className="mt-3 txt-body text-on-charcoal sm:mt-4">{s.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= STATEMENT (cream) ================= */}
      <section className="bg-cream py-16 sm:py-24 md:py-36">
        <div className="container-page">
          <Reveal>
            <h2 className="txt-statement max-w-4xl text-ink">{data.statement}</h2>
          </Reveal>
        </div>
      </section>

      {/* ================= DARK — TRUST ================= */}
      <section className="bg-[#0a0d1b] py-14 text-white sm:py-20 md:py-28">
        <div className="container-page">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:items-end md:gap-8">
            <Reveal><h2 className="txt-section text-white">{data.dark.title}</h2></Reveal>
            <Reveal delay={0.1}><p className="txt-body text-white/70">{data.dark.intro}</p></Reveal>
          </div>
          <div className="mt-9 grid grid-cols-1 gap-4 sm:mt-14 sm:gap-6 md:grid-cols-3">
            {data.dark.cards.map((c, i) => (
              <Reveal key={c.t} delay={i * 0.08}>
                <div className="h-full rounded-3xl border border-white/10 bg-[#202331] p-6 sm:p-8">
                  <c.icon className="h-8 w-8 text-stone" strokeWidth={1.6} />
                  <h3 className="mt-5 text-lg font-semibold text-white sm:mt-6 sm:text-xl">{c.t}</h3>
                  <p className="mt-3 txt-body text-white/70">{c.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= MEET THE EXPERTS (image left) ================= */}
      <section className="container-page py-14 sm:py-20 md:py-28">
        <div className="grid grid-cols-1 items-center gap-10 sm:gap-16 lg:grid-cols-2 lg:gap-24">
          <Reveal>
            <div className="organic-shape-sm relative h-[280px] w-full overflow-hidden sm:h-[420px] md:h-[560px]">
              <Image src={data.experts.image} alt={data.experts.alt} fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="txt-section text-ink">{data.experts.title}</h2>
            <p className="mt-5 txt-lead text-body sm:mt-8">{data.experts.body}</p>
            <Link href={href} className="mt-7 inline-flex min-h-[44px] items-center gap-2 text-[15px] font-semibold text-stone transition-colors hover:text-champagne-deep sm:mt-10 sm:text-base">
              {data.experts.link} <ArrowRight className="h-4 w-4 shrink-0" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ================= FAQ (spec §9) ================= */}
      {data.faqs?.length ? (
        <section className="border-t border-line py-14 sm:py-20 md:py-24">
          <div className="container-page mx-auto max-w-[800px]">
            <h2 className="txt-section mb-8 text-center text-ink sm:mb-12">Frequently asked questions</h2>
            <Faq items={data.faqs} />
          </div>
          {faqSchema && (
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
          )}
        </section>
      ) : null}

      {/* ================= DARK CTA (spec §10 + §11) ================= */}
      <section className="bg-[#0a0d1b] py-16 text-center text-white sm:py-24 md:py-32">
        <div className="container-page">
          <Reveal>
            <h2 className="txt-section mx-auto max-w-3xl text-white">{data.cta.title}</h2>
            <p className="mx-auto mt-5 max-w-xl txt-body text-white/70 sm:mt-6">{data.cta.body}</p>
            <div className="cta-stack mt-8 justify-center sm:mt-10">
              <Link
                href={href}
                className="inline-flex min-h-[52px] items-center gap-2 rounded-full bg-stone px-7 text-[15px] font-semibold text-white transition-colors hover:bg-champagne-deep sm:px-8 sm:text-base"
              >
                {data.cta.button} <ArrowRight className="h-4 w-4 shrink-0" />
              </Link>
            </div>
            <p className="mx-auto mt-10 max-w-2xl text-[13px] leading-relaxed text-white/40 sm:mt-14 sm:text-sm">{data.cta.compliance}</p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
