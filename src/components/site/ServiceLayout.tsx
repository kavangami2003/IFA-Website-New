import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";

const ORGANIC = { borderRadius: "240px 240px 40px 240px" } as const;

export type IconItem = { icon: LucideIcon; t: string; d: string };
export type Step = { n: string; t: string; d: string };

export type ServiceData = {
  href?: string; // primary funnel link; defaults to the find-an-adviser form
  hero: { title: string; intro: string; primary: string; secondary: string; image: string; alt: string };
  grid: { title: string; intro: string; items: IconItem[] };
  split: { title: string; body: string; link: string; image: string; alt: string };
  steps: { title: string; items: Step[] };
  statement: string;
  dark: { title: string; intro: string; cards: IconItem[] };
  experts: { title: string; body: string; link: string; image: string; alt: string };
  cta: { title: string; body: string; button: string; compliance: string };
};

export function ServiceLayout({ data }: { data: ServiceData }) {
  const href = data.href ?? "/find-a-financial-adviser/";
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="container-page pb-16 pt-16 md:pb-24 md:pt-24">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-7 lg:pr-8">
            <h1 className="font-display text-[3rem] font-extrabold leading-[1.05] tracking-[-0.02em] text-ink sm:text-6xl md:text-[5rem]">
              {data.hero.title}
            </h1>
            <p className="mt-8 max-w-2xl text-xl leading-relaxed text-body md:text-[22px]">{data.hero.intro}</p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link href={href} className="inline-flex w-fit items-center justify-center gap-2 rounded-full bg-ink px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-charcoal-deep">
                {data.hero.primary}
              </Link>
              <Link href="#details" className="inline-flex w-fit items-center justify-center rounded-full border-2 border-ink px-8 py-4 text-base font-semibold text-ink transition-all hover:bg-ink hover:text-white">
                {data.hero.secondary}
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.12} className="lg:col-span-5">
            <div className="relative h-[500px] w-full overflow-hidden md:h-[680px]" style={ORGANIC}>
              <Image src={data.hero.image} alt={data.hero.alt} fill priority sizes="(max-width:1024px) 100vw, 42vw" className="object-cover" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= TEAL — GRID ================= */}
      <section id="details" className="bg-charcoal py-20 text-white md:py-28">
        <div className="container-page">
          <Reveal>
            <h2 className="font-display text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-[3.5rem]">{data.grid.title}</h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-on-charcoal">{data.grid.intro}</p>
          </Reveal>
          <div className="mt-16 grid grid-cols-1 gap-x-16 gap-y-12 md:grid-cols-2">
            {data.grid.items.map((s, i) => (
              <Reveal key={s.t} delay={(i % 2) * 0.1}>
                <div className="border-t border-white/20 pt-8">
                  <s.icon className="h-9 w-9 text-white" strokeWidth={1.6} />
                  <h3 className="mt-6 text-2xl font-semibold text-white">{s.t}</h3>
                  <p className="mt-3 text-[17px] leading-relaxed text-on-charcoal">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SPLIT (image right) ================= */}
      <section className="container-page py-20 md:py-28">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-24">
          <Reveal>
            <h2 className="font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl md:text-[3.5rem]">{data.split.title}</h2>
            <p className="mt-8 text-xl leading-relaxed text-body">{data.split.body}</p>
            <Link href={href} className="mt-10 inline-flex items-center gap-2 text-base font-semibold text-stone transition-colors hover:text-champagne-deep">
              {data.split.link} <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative h-[420px] w-full overflow-hidden md:h-[560px]" style={ORGANIC}>
              <Image src={data.split.image} alt={data.split.alt} fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= TEAL — STEPS ================= */}
      <section className="bg-charcoal py-20 text-white md:py-28">
        <div className="container-page">
          <Reveal><h2 className="font-display text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-[3.5rem]">{data.steps.title}</h2></Reveal>
          <div className="mt-16 grid grid-cols-1 gap-14 md:mt-20 md:grid-cols-3 md:gap-8">
            {data.steps.items.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.1}>
                <span className="block text-5xl font-light text-white opacity-50">{s.n}</span>
                <h3 className="mt-6 text-2xl font-semibold text-white">{s.t}</h3>
                <p className="mt-4 text-lg leading-relaxed text-on-charcoal">{s.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= STATEMENT (cream) ================= */}
      <section className="bg-cream py-24 md:py-36">
        <div className="container-page">
          <Reveal>
            <h2 className="max-w-4xl font-display text-4xl font-bold leading-[1.1] tracking-[-0.02em] text-ink sm:text-5xl md:text-[4rem]">{data.statement}</h2>
          </Reveal>
        </div>
      </section>

      {/* ================= DARK — PERFORMANCE & TRUST ================= */}
      <section className="bg-[#0a0d1b] py-20 text-white md:py-28">
        <div className="container-page">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-end">
            <Reveal><h2 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-[3.5rem]">{data.dark.title}</h2></Reveal>
            <Reveal delay={0.1}><p className="text-lg leading-relaxed text-white/70">{data.dark.intro}</p></Reveal>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {data.dark.cards.map((c, i) => (
              <Reveal key={c.t} delay={i * 0.08}>
                <div className="h-full rounded-3xl border border-white/10 bg-[#202331] p-8">
                  <c.icon className="h-8 w-8 text-stone" strokeWidth={1.6} />
                  <h3 className="mt-6 text-xl font-semibold text-white">{c.t}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-white/70">{c.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= MEET THE EXPERTS (image left) ================= */}
      <section className="container-page py-20 md:py-28">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-24">
          <Reveal>
            <div className="relative h-[420px] w-full overflow-hidden rounded-[40px] md:h-[560px]">
              <Image src={data.experts.image} alt={data.experts.alt} fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl md:text-[3.5rem]">{data.experts.title}</h2>
            <p className="mt-8 text-xl leading-relaxed text-body">{data.experts.body}</p>
            <Link href={href} className="mt-10 inline-flex items-center gap-2 text-base font-semibold text-stone transition-colors hover:text-champagne-deep">
              {data.experts.link} <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ================= DARK CTA ================= */}
      <section className="bg-[#0a0d1b] py-24 text-center text-white md:py-32">
        <div className="container-page">
          <Reveal>
            <h2 className="mx-auto max-w-3xl font-display text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-[3.5rem]">{data.cta.title}</h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/70">{data.cta.body}</p>
            <Link href={href} className="mt-10 inline-flex items-center gap-2 rounded-full bg-stone px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-champagne-deep">
              {data.cta.button} <ArrowRight className="h-4 w-4" />
            </Link>
            <p className="mx-auto mt-14 max-w-2xl text-sm leading-relaxed text-white/40">{data.cta.compliance}</p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
