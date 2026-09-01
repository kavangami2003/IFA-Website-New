import Image from "next/image";
import Link from "next/link";
import { ArrowRight, PiggyBank, TrendingUp, Wallet, Landmark, Briefcase, ShieldCheck, Map } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { TrustpilotStrip } from "@/components/site/TrustpilotStrip";
import { Faq, type QA } from "@/components/site/Faq";

const steps = [
  { n: "01", t: "Tell us your goals", d: "Share what you're looking to achieve, whether it's planning for retirement, investing, or protecting your family's future." },
  { n: "02", t: "Get matched", d: "We'll pair you with a vetted, independent adviser who specialises in your specific needs and location." },
  { n: "03", t: "Secure your future", d: "Have a free initial consultation and start building a clear, actionable plan for your financial wellbeing." },
];

const trust = [
  { t: "FCA Regulated", d: "All advisers are fully authorised and regulated by the Financial Conduct Authority." },
  { t: "Truly Independent", d: "Unbiased advice across the whole market, not restricted to specific products." },
  { t: "Verified Reviews", d: "Read genuine feedback from clients who have used our matching service." },
];

const expertise = [
  { icon: PiggyBank, t: "Retirement\nPlanning", d: "Build a strategy to ensure a comfortable and secure retirement.", bg: "bg-paleblue", ic: "text-ink", href: "/retirement/" },
  { icon: TrendingUp, t: "Investments &\nWealth", d: "Grow your wealth with tailored, risk-adjusted investment portfolios.", bg: "bg-[#E8F3F3]", ic: "text-stone", href: "/investments/" },
  { icon: Wallet, t: "Pension\nOptimisation", d: "Consolidate and optimise your existing pension pots for maximum return.", bg: "bg-[#FDF8F5]", ic: "text-[#D47C5B]", href: "/pensions/" },
  { icon: Landmark, t: "Estate\nPlanning", d: "Manage inheritance tax effectively and pass on wealth efficiently.", bg: "bg-[#F0EEF6]", ic: "text-[#7A64A0]", href: "/inheritance/" },
  { icon: Briefcase, t: "Selling a\nBusiness", d: "Plan what happens to the proceeds, before and after completion.", bg: "bg-[#F0F4E3]", ic: "text-[#7B9542]", href: "/selling-your-business/" },
  { icon: ShieldCheck, t: "Switching\nAdvisers", d: "Move to a better independent adviser — simpler than you think.", bg: "bg-cream", ic: "text-[#A69777]", href: "/switching/" },
];

const faqs: QA[] = [
  { q: "How much does it cost to use IFA Connect?", a: "Our matching service is completely free for you to use. We charge advisers a fee to be on our platform, but this does not affect the advice you receive or the fees they charge you." },
  { q: "Are all advisers independent?", a: "Yes, we only work with Independent Financial Advisers (IFAs) who can offer products from across the whole market, ensuring unbiased advice." },
  { q: "What happens after I get matched?", a: "Your matched adviser will contact you to arrange a free, no-obligation initial consultation to discuss your needs in more detail." },
];

export default function LightHome() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="container-page pb-10 pt-10 sm:pb-14 sm:pt-16 md:pb-20 md:pt-24">
        <div className="grid grid-cols-1 items-center gap-9 sm:gap-12 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-7 lg:pr-8">
            <h1 className="txt-hero text-ink">Find the right financial adviser for you.</h1>
            <p className="mt-5 max-w-2xl txt-lead text-body sm:mt-8">
              Connect with thoroughly vetted, independent financial professionals tailored to your unique goals and life stage.
            </p>
            <div className="cta-stack mt-7 sm:mt-10">
              <Link
                href="/find-a-financial-adviser/"
                className="inline-flex min-h-[52px] items-center gap-2 rounded-full bg-stone px-7 text-[15px] font-semibold text-white transition-colors hover:bg-champagne-deep sm:px-8 sm:text-base"
              >
                Find an Adviser <ArrowRight className="h-4 w-4 shrink-0" />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.12} className="lg:col-span-5">
            <div className="organic-shape relative h-[320px] w-full overflow-hidden sm:h-[440px] md:h-[560px] lg:h-[700px]">
              <Image
                src="/hq-hero.jpg"
                alt="A couple talking to their financial adviser"
                fill
                priority
                sizes="(max-width:1024px) 100vw, 42vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ========= TRUSTPILOT — proof rail, directly under the hero ========= */}
      <TrustpilotStrip />

      {/* ================= TRUST STRIP ================= */}
      <section className="border-b border-line bg-bone py-7 sm:py-8">
        <div className="container-page grid grid-cols-2 gap-x-4 gap-y-4 sm:gap-x-6 md:grid-cols-4 md:gap-0">
          {["Trusted advisers", "Independent expertise", "Personalised matching", "UK-wide network"].map((t, i) => (
            <div key={t} className={`min-w-0 md:px-6 md:text-center ${i < 3 ? "md:border-r md:border-line" : ""}`}>
              <span className="text-[14px] font-semibold leading-snug tracking-wide text-ink sm:text-[16px]">{t}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ================= TEAL — HOW IT STARTS ================= */}
      <section id="how" className="bg-charcoal py-14 text-white sm:py-20 md:py-28">
        <div className="container-page">
          <Reveal>
            <h2 className="txt-section max-w-3xl text-white">Financial advice should start with you.</h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-10 sm:mt-16 md:mt-20 md:grid-cols-3 md:gap-8">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.1}>
                <span className="block text-4xl font-light text-white opacity-50 sm:text-5xl">{s.n}</span>
                <h3 className="mt-4 text-xl font-semibold text-white sm:mt-6 sm:text-2xl">{s.t}</h3>
                <p className="mt-3 txt-body text-on-charcoal sm:mt-4">{s.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= EXPERTISE YOU CAN TRUST ================= */}
      <section className="container-page py-14 sm:py-20 md:py-28">
        <div className="grid grid-cols-1 items-center gap-10 sm:gap-16 lg:grid-cols-2 lg:gap-24">
          <Reveal>
            <div className="organic-shape-sm relative h-[280px] w-full overflow-hidden sm:h-[420px] md:h-[600px]">
              <Image src="/hq-story.jpg" alt="An independent financial adviser" fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="txt-section text-ink">Expertise you can trust.</h2>
            <p className="mt-5 txt-lead text-body sm:mt-8">
              Every adviser on our platform is strictly vetted, FCA-regulated, and independent. We ensure you only speak to qualified professionals who have your best interests at heart.
            </p>
            <div className="mt-8 space-y-6 sm:mt-12 sm:space-y-8">
              {trust.map((t) => (
                <div key={t.t} className="border-l-2 border-line pl-5 transition-colors hover:border-stone sm:pl-6">
                  <h4 className="text-lg font-semibold text-ink sm:text-xl">{t.t}</h4>
                  <p className="mt-2 txt-body text-body">{t.d}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= AREAS OF EXPERTISE ================= */}
      <section id="expertise" className="container-page py-14 sm:py-20 md:py-28">
        <Reveal className="mb-9 sm:mb-16">
          <span className="mb-3 block text-[12px] font-bold uppercase tracking-[0.2em] text-stone sm:mb-4 sm:text-[14px]">Areas of Expertise</span>
          <h2 className="txt-section max-w-3xl text-ink">Comprehensive guidance for every stage of your financial life.</h2>
        </Reveal>
        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {expertise.map((e, i) => (
            <Reveal key={e.t} delay={(i % 3) * 0.08}>
              <Link
                href={e.href}
                className={`group flex min-h-[210px] flex-col justify-between gap-8 rounded-[24px] p-6 transition-transform hover:-translate-y-1 sm:min-h-[280px] sm:rounded-[32px] sm:p-8 lg:min-h-[300px] lg:p-10 ${e.bg}`}
              >
                <div className="flex items-start justify-between">
                  <e.icon className={`h-8 w-8 shrink-0 sm:h-10 sm:w-10 ${e.ic}`} strokeWidth={1.6} />
                  <ArrowRight className="h-5 w-5 shrink-0 text-ink opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
                <div className="min-w-0">
                  <h3 className="txt-card whitespace-pre-line text-ink">{e.t}</h3>
                  <p className="mt-2 txt-body text-ink/80 sm:mt-3">{e.d}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ================= STATEMENT ================= */}
      <section className="container-page py-16 sm:py-24 md:py-40">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end md:gap-12">
            <h2 className="txt-statement max-w-4xl text-ink">The right advice can make a big difference to what comes next.</h2>
            <Link
              href="/find-a-financial-adviser/"
              aria-label="Get matched with an adviser"
              className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-stone transition-transform hover:scale-105 sm:h-16 sm:w-16"
            >
              <ArrowRight className="h-6 w-6 text-white sm:h-7 sm:w-7" />
            </Link>
          </div>
        </Reveal>
      </section>

      {/* ================= ADVISERS ================= */}
      <section id="advisers" className="bg-paleblue py-14 sm:py-20 md:py-28">
        <div className="container-page grid grid-cols-1 items-center gap-10 sm:gap-16 lg:grid-cols-2 lg:gap-24">
          <Reveal>
            <h2 className="txt-section text-ink">Are you an independent financial adviser?</h2>
            <p className="mt-5 max-w-lg txt-lead text-ink/80 sm:mt-8">
              Join our network of trusted professionals and connect with clients who are actively seeking your expertise.
            </p>
            <div className="cta-stack mt-7 sm:mt-10">
              <Link
                href="/for-advisers/"
                className="inline-flex min-h-[52px] items-center rounded-full border-2 border-ink px-7 text-[15px] font-semibold text-ink transition-all hover:bg-ink hover:text-white sm:px-8 sm:text-base"
              >
                Join our network
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative h-[280px] w-full overflow-hidden rounded-tl-[64px] rounded-br-[64px] sm:h-[420px] sm:rounded-tl-[120px] sm:rounded-br-[120px] md:h-[500px]">
              <Image src="/hq-advisers.jpg" alt="A professional financial adviser" fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= CLIENT STORIES ================= */}
      <section className="container-page py-14 sm:py-20 md:py-28">
        <div className="grid grid-cols-1 items-center gap-10 sm:gap-16 lg:grid-cols-12 lg:gap-24">
          <Reveal className="lg:col-span-7">
            <div className="organic-shape relative h-[300px] w-full overflow-hidden shadow-xl sm:h-[440px] md:h-[600px]">
              <Image src="/hq-clientstory.jpg" alt="David and Sarah smiling in their home" fill sizes="(max-width:1024px) 100vw, 55vw" className="object-cover" />
            </div>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-5">
            <span className="mb-4 block text-[12px] font-bold uppercase tracking-[0.2em] text-stone sm:mb-6 sm:text-[14px]">Client Stories</span>
            <h2 className="txt-section text-ink">Real peace of mind, for the life you&apos;ve built.</h2>
            <p className="mt-5 text-lg font-medium italic leading-relaxed text-ink sm:mt-8 sm:text-2xl">
              &ldquo;Finding an adviser who actually listened to our long-term goals changed everything. We finally feel in control of our retirement.&rdquo;
            </p>
            <p className="mt-4 text-base font-bold text-stone sm:mt-6 sm:text-lg">— David &amp; Sarah, Surrey</p>
            <div className="mt-8 border-t border-line pt-6 sm:mt-10 sm:pt-8">
              <p className="txt-body font-medium text-body">Over 10,000 matches made this year.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= INSIGHTS STRIP (dark) ================= */}
      <section className="bg-[#202331] py-14 text-white sm:py-20">
        <div className="container-page grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12">
          <div className="flex flex-col gap-3 sm:gap-4">
            <span className="text-4xl font-bold leading-none text-stone sm:text-5xl">85%</span>
            <p className="txt-body opacity-90">of people feel more confident after their first consultation.</p>
          </div>
          <div className="flex flex-col gap-3 border-t border-white/10 pt-7 sm:gap-4 md:border-l md:border-t-0 md:pl-12 md:pt-0">
            <Map className="h-8 w-8 text-stone sm:h-9 sm:w-9" strokeWidth={1.6} />
            <p className="txt-body opacity-90">Independent advice across the whole of the UK.</p>
          </div>
          <div className="flex flex-col gap-3 border-t border-white/10 pt-7 sm:gap-4 md:border-l md:border-t-0 md:pl-12 md:pt-0">
            <ShieldCheck className="h-8 w-8 text-stone sm:h-9 sm:w-9" strokeWidth={1.6} />
            <p className="txt-body opacity-90">FCA regulated professionals only.</p>
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="py-14 sm:py-20 md:py-28">
        <div className="container-page mx-auto max-w-[800px]">
          <h2 className="txt-section mb-9 text-center text-ink sm:mb-14">Frequently asked questions</h2>
          <Faq items={faqs} />
        </div>
      </section>
    </>
  );
}
