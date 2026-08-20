import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Star, Lock, ShieldCheck, Clock, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { TrustBar } from "@/components/site/TrustBar";
import { Steps } from "@/components/site/Steps";
import { CtaSection } from "@/components/site/CtaSection";
import { Faq, type QA } from "@/components/site/Faq";
import { Marquee } from "@/components/site/Marquee";
import { ParallaxImage } from "@/components/site/ParallaxImage";
import { Button } from "@/components/ui/Button";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Independent Retirement Advice — Matched by a Real Person",
  description:
    "Speak to a real person, usually within the hour, and get introduced to a hand-picked independent retirement adviser. Free, no obligation. £250k+ portfolios.",
  alternates: { canonical: "/retirement-advice/" },
};

const marquee = ["Retirement planning", "Pension consolidation", "Drawdown & tax", "The 2027 IHT change", "Independent only", "Within the hour"];

const helps = [
  { n: "01", t: "Will my money last?", d: "A plan for turning pensions and savings into an income that doesn't run out." },
  { n: "02", t: "Am I paying too much tax?", d: "Drawdown, tax-free cash and allowances used in the right order." },
  { n: "03", t: "When can I afford to stop?", d: "A clear “how much is enough” for your life." },
  { n: "04", t: "The 2027 pension IHT change", d: "How the new inheritance-tax rules on pensions might affect your plans." },
  { n: "05", t: "Should I combine my pensions?", d: "Whether consolidating your pots makes sense." },
  { n: "06", t: "Sequencing & risk", d: "Protecting the pot from a bad early run in the markets." },
];

const faqs: QA[] = [
  { q: "Is this free — what's the catch?", a: "It's free to you. Advisers pay us to be introduced to people looking for advice, so there's no charge and no obligation to proceed." },
  { q: "Will my adviser be genuinely independent?", a: "Always. Every adviser we introduce you to is independent, whole-of-market and FCA-regulated — never restricted to one firm's products." },
  { q: "I already have an adviser — is it worth a second opinion?", a: "Many people ask for a second opinion, especially on fees, performance or whether their current adviser is truly independent. There's no obligation to switch." },
  { q: "How much do I need to retire?", a: "It depends on the life you want and the income you'll draw. An independent adviser can help you work out a realistic “enough” for your circumstances." },
  { q: "Will the adviser be local to me?", a: "Wherever possible we match you with an adviser who covers your area — and many also advise by phone or video." },
  { q: "What happens after I enquire?", a: "A real member of our team calls you, usually within the hour in office hours, to understand your situation and introduce you to a suitable independent retirement adviser." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Service", name: "Independent retirement advice introduction", provider: { "@type": "Organization", name: site.name }, areaServed: "GB", description: "Introductions to FCA-regulated independent retirement advisers for portfolios of £250,000 and above." },
    { "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
  ],
};

export default function RetirementPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ================= HERO ================= */}
      <section className="relative min-h-[100svh] w-full overflow-hidden bg-charcoal text-white">
        <div className="absolute inset-0">
          <Image src="/retirement-hero.jpg" alt="A confident couple in their early sixties enjoying a bright morning on a sunlit terrace" fill priority sizes="100vw" className="object-cover object-[70%_center]" />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/85 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-transparent to-charcoal/25" />
        </div>

        <div className="pointer-events-none absolute right-6 top-1/2 hidden -translate-y-1/2 rotate-90 xl:block">
          <span className="index-label text-white/40">Retirement · Independent · UK</span>
        </div>

        <div className="container-page relative z-10 flex min-h-[100svh] items-center pb-40 pt-28 sm:pb-24">
          <Reveal className="max-w-xl">
            <div className="index-label flex items-center gap-3 text-stone">
              <span className="inline-block h-2.5 w-5 shrink-0 rounded-[7px] border-2 border-stone" />
              <span>Retirement</span>
            </div>
            <h1 className="mt-6 display-1 text-white [text-shadow:0_2px_28px_rgba(0,0,0,0.55)]">
              Independent retirement advice, matched by a <span className="text-stone">real person</span>.
            </h1>
            <p className="mt-5 max-w-md text-base text-white/85 [text-shadow:0_1px_12px_rgba(0,0,0,0.5)]">
              With £250k+ in pensions and savings? Speak to a real member of our team, usually
              within the hour, and get introduced to one hand-picked, FCA-regulated independent
              adviser. Free, no obligation.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link href="/find-a-financial-adviser/?s=retirement" className="inline-flex items-center gap-2 rounded-full bg-stone px-6 py-3 font-display text-sm font-bold text-charcoal transition-colors hover:bg-champagne-deep">
                Find my retirement adviser <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-9 flex items-center gap-3">
              <span className="h-px w-10 bg-stone/60" />
              <span className="index-label text-white/60">Free · No obligation · £250k+ portfolios</span>
            </div>
          </Reveal>
        </div>

        <div className="absolute inset-x-0 bottom-0 z-10 border-t border-white/15 bg-charcoal/55 backdrop-blur-md">
          <div className="container-page grid grid-cols-2 sm:grid-cols-4">
            <div className="flex items-center gap-2 border-b border-r border-white/10 py-4 pr-4 sm:border-b-0"><Star className="h-4 w-4 fill-tp-green text-tp-green" /><span className="text-sm font-semibold">Trustpilot {site.trustpilot}</span></div>
            <div className="flex items-center gap-2 border-b border-white/10 py-4 pl-4 sm:border-b-0 sm:border-r sm:pl-5"><span className="font-display text-sm font-bold text-white">{site.advisers}</span><span className="index-label text-on-charcoal">advisers</span></div>
            <div className="flex items-center gap-2 border-r border-white/10 py-4 pr-4 sm:pl-5 sm:pr-0"><Clock className="h-4 w-4 text-stone" /><span className="index-label text-on-charcoal">Within the hour</span></div>
            <div className="flex items-center gap-2 py-4 pl-4 sm:pl-5"><span className="font-display text-sm font-bold text-white">£250k+</span><span className="index-label text-on-charcoal">portfolios</span></div>
          </div>
        </div>
      </section>

      <div className="border-y border-line bg-bone py-5 text-ink"><Marquee items={marquee} /></div>

      {/* ================= PAIN ================= */}
      <section className="container-page py-[60px] sm:py-24 lg:py-32">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-7">
            <div className="index-label mb-6 flex items-center gap-3 text-stone-dark">
              <span>(02)</span><span className="h-px w-8 bg-stone-dark/40" /><span>The one decision you can&apos;t redo</span>
            </div>
            <h2 className="display-1">Retirement is the one decision you can&apos;t <span className="u-accent">redo.</span></h2>
          </Reveal>
          <Reveal delay={0.12} className="flex items-end lg:col-span-5">
            <p className="text-lg text-body">
              Get it wrong and you either run out of money too soon, or live smaller than you
              needed to. Pensions, tax, drawdown, the State Pension, how much is “enough” —
              it&apos;s a lot to get right once. The right independent adviser turns that
              guesswork into a plan built around <span className="font-semibold text-ink">your numbers.</span>
            </p>
          </Reveal>
        </div>
      </section>

      <TrustBar />

      {/* ================= WHAT AN ADVISER HELPS WITH ================= */}
      <section className="border-y border-line bg-stone-tint">
        <div className="container-page py-[60px] sm:py-24 lg:py-32">
          <SectionHeading index="03" eyebrow="What a retirement adviser helps with" title="The worries a good adviser turns into a plan." intro="An independent adviser helps you work through each of these. We don't advise; they do." />
          <div className="mt-14 grid gap-px border-l border-t border-line md:grid-cols-2 lg:grid-cols-3">
            {helps.map((h, i) => (
              <Reveal key={h.n} delay={(i % 3) * 0.08} className="border-b border-r border-line bg-bone p-7">
                <div className="numeral text-stone/30">{h.n}</div>
                <h3 className="mt-3 display-3">{h.t}</h3>
                <p className="mt-2 text-sm text-body">{h.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY INDEPENDENT ================= */}
      <section className="bg-charcoal text-white">
        <div className="container-page grid items-stretch gap-12 py-[60px] sm:py-24 lg:grid-cols-12 lg:py-32">
          <Reveal className="lg:col-span-5">
            <ParallaxImage src="/retirement-adviser.jpg" alt="An independent retirement specialist reviewing a plan with a client" className="aspect-[4/3] w-full rounded-[6px] lg:h-full lg:min-h-[460px]" />
          </Reveal>
          <div className="flex flex-col justify-center lg:col-span-7">
            <SectionHeading index="04" eyebrow="Why independent" invert
              title={<>We only introduce you to genuinely <span className="u-accent-thick">independent</span> advisers.</>}
              intro="A restricted adviser can only recommend certain firms' products. An independent, whole-of-market adviser searches everything and is free to recommend what's actually best for you. Every adviser we match you with is independent and FCA-regulated — never restricted." />
            <Reveal delay={0.15} className="mt-9"><Button href="/find-a-financial-adviser/?s=retirement" variant="onDark">Find my retirement adviser</Button></Reveal>
          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="container-page py-[60px] sm:py-24 lg:py-32">
        <SectionHeading index="05" eyebrow="How it works" title="Three steps — and a real person within the hour." />
        <div className="mt-14"><Steps cta="Find my retirement adviser" href="/find-a-financial-adviser/?s=retirement" /></div>
      </section>

      {/* ================= REASSURANCE ================= */}
      <section className="border-y border-line bg-charcoal text-white">
        <div className="container-page py-[60px] sm:py-20">
          <Reveal className="mx-auto max-w-4xl text-center">
            <Lock className="mx-auto h-8 w-8 text-stone" />
            <p className="mt-6 display-2 text-white">
              We only ever ask for a rough asset band — <span className="u-accent-thick">never account numbers</span> — and your details are only shared with the one adviser we match you to.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ================= SOCIAL PROOF ================= */}
      <section className="container-page grid items-center gap-12 py-[60px] sm:py-24 lg:grid-cols-12 lg:py-32">
        <Reveal className="lg:col-span-5">
          <ParallaxImage src="/retirement-proof.jpg" alt="A happy retired client at home who used IFA Connect" className="aspect-[4/3] w-full rounded-[6px]" />
        </Reveal>
        <div className="lg:col-span-7">
          <Reveal>
            <div className="flex items-center gap-2 text-sm font-semibold">
              <span className="inline-flex">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-tp-green text-tp-green" />)}</span>
              Trustpilot {site.trustpilot}
            </div>
            <blockquote className="mt-6 display-2">
              &ldquo;I was nervous about getting retirement right. They matched me with an adviser who built a plan around my <span className="u-accent">actual numbers</span> — no jargon, no pressure.&rdquo;
            </blockquote>
            <figcaption className="index-label mt-6 text-stone-dark">Verified review · retirement planning</figcaption>
          </Reveal>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="border-y border-line bg-stone-tint">
        <div className="container-page grid gap-12 py-[60px] sm:py-24 lg:grid-cols-12 lg:py-32">
          <div className="lg:col-span-5"><SectionHeading index="06" eyebrow="FAQ" title="Retirement questions, answered." /></div>
          <Reveal delay={0.1} className="lg:col-span-7"><Faq items={faqs} /></Reveal>
        </div>
      </section>

      <CtaSection title="Speak to a real person about your retirement, usually within the hour." sub="One hand-picked independent adviser. Free, no obligation." cta="Find my retirement adviser" href="/find-a-financial-adviser/?s=retirement" />

      {/* ================= COMPLIANCE ================= */}
      <section className="bg-charcoal-deep">
        <div className="container-page py-8">
          <p className="flex items-start gap-3 text-xs leading-relaxed text-muted-charcoal">
            <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-stone-dark" />
            IFA Connect introduces you to FCA-regulated independent financial advisers. We are not FCA-regulated and do not provide financial advice ourselves, and there is no charge to you. Where investments are mentioned, the value of investments can fall as well as rise and you may get back less than you invest.
          </p>
        </div>
      </section>
    </>
  );
}
