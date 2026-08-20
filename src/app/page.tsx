import Image from "next/image";
import Link from "next/link";
import { ArrowRight, PiggyBank, TrendingUp, Wallet, Landmark, Home, ShieldCheck, Map } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
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
  { icon: Home, t: "Switching\nAdvisers", d: "Move to a better independent adviser — simpler than you think.", bg: "bg-cream", ic: "text-[#A69777]", href: "/switching/" },
  { icon: ShieldCheck, t: "Family\nProtection", d: "Life insurance, income protection, and critical illness cover.", bg: "bg-[#F0F4E3]", ic: "text-[#7B9542]", href: "/find-a-financial-adviser/" },
];

const faqs: QA[] = [
  { q: "How much does it cost to use IFA Connect?", a: "Our matching service is completely free for you to use. We charge advisers a fee to be on our platform, but this does not affect the advice you receive or the fees they charge you." },
  { q: "Are all advisers independent?", a: "Yes, we only work with Independent Financial Advisers (IFAs) who can offer products from across the whole market, ensuring unbiased advice." },
  { q: "What happens after I get matched?", a: "Your matched adviser will contact you to arrange a free, no-obligation initial consultation to discuss your needs in more detail." },
];

const ORGANIC = { borderRadius: "240px 240px 40px 240px" } as const;

export default function LightHome() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="container-page pb-16 pt-16 md:pb-20 md:pt-24">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-7 lg:pr-8">
            <h1 className="font-display text-[3rem] font-extrabold leading-[1.05] tracking-[-0.02em] text-ink sm:text-6xl md:text-[5.25rem]">
              Find the right financial adviser for you.
            </h1>
            <p className="mt-8 max-w-2xl text-xl leading-relaxed text-body md:text-[22px]">
              Connect with thoroughly vetted, independent financial professionals tailored to your unique goals and life stage.
            </p>
            <Link href="/find-a-financial-adviser/" className="mt-10 inline-flex w-fit items-center gap-2 rounded-full bg-stone px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-champagne-deep">
              Find an Adviser <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
          <Reveal delay={0.12} className="lg:col-span-5">
            <div className="relative h-[500px] w-full overflow-hidden md:h-[700px]" style={ORGANIC}>
              <Image src="/hq-hero.jpg" alt="A couple talking to their financial adviser" fill priority sizes="(max-width:1024px) 100vw, 42vw" className="object-cover" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= TRUST STRIP ================= */}
      <section className="border-y border-line bg-cream py-8">
        <div className="container-page grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-0">
          {["Trusted advisers", "Independent expertise", "Personalised matching", "UK-wide network"].map((t, i) => (
            <div key={t} className={`md:text-center ${i < 3 ? "md:border-r md:border-black/10 md:px-8" : "md:pl-8"} ${i < 3 ? "pr-8" : ""}`}>
              <span className="text-[16px] font-semibold tracking-wide text-ink">{t}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ================= TEAL — HOW IT STARTS ================= */}
      <section id="how" className="bg-charcoal py-20 text-white md:py-28">
        <div className="container-page">
          <Reveal><h2 className="max-w-3xl font-display text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-[3.5rem]">Financial advice should start with you.</h2></Reveal>
          <div className="mt-16 grid grid-cols-1 gap-14 md:mt-20 md:grid-cols-3 md:gap-8">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.1}>
                <span className="block text-5xl font-light text-white opacity-50">{s.n}</span>
                <h3 className="mt-6 text-2xl font-semibold text-white">{s.t}</h3>
                <p className="mt-4 text-lg leading-relaxed text-on-charcoal">{s.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= EXPERTISE YOU CAN TRUST ================= */}
      <section className="container-page py-20 md:py-28">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-24">
          <Reveal>
            <div className="relative h-[420px] w-full overflow-hidden rounded-[40px] md:h-[600px]">
              <Image src="/hq-story.jpg" alt="An independent financial adviser" fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl md:text-[3.5rem]">Expertise you can trust.</h2>
            <p className="mt-8 text-xl text-body">Every adviser on our platform is strictly vetted, FCA-regulated, and independent. We ensure you only speak to qualified professionals who have your best interests at heart.</p>
            <div className="mt-12 space-y-8">
              {trust.map((t) => (
                <div key={t.t} className="border-l-2 border-line pl-6 transition-colors hover:border-stone">
                  <h4 className="text-xl font-semibold text-ink">{t.t}</h4>
                  <p className="mt-2 text-body">{t.d}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= AREAS OF EXPERTISE ================= */}
      <section id="expertise" className="container-page py-20 md:py-28">
        <Reveal className="mb-16">
          <span className="mb-4 block text-[14px] font-bold uppercase tracking-[0.2em] text-stone">Areas of Expertise</span>
          <h2 className="max-w-3xl font-display text-4xl font-bold leading-[1.1] tracking-tight text-ink sm:text-5xl md:text-[3.5rem]">Comprehensive guidance for every stage of your financial life.</h2>
        </Reveal>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {expertise.map((e, i) => (
            <Reveal key={e.t} delay={(i % 3) * 0.08}>
              <Link href={e.href} className={`group flex min-h-[300px] flex-col justify-between rounded-[32px] p-10 transition-transform hover:-translate-y-1 ${e.bg}`}>
                <div className="flex items-start justify-between">
                  <e.icon className={`h-10 w-10 ${e.ic}`} strokeWidth={1.6} />
                  <ArrowRight className="h-5 w-5 text-ink opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
                <div>
                  <h3 className="whitespace-pre-line text-[28px] font-bold leading-tight text-ink">{e.t}</h3>
                  <p className="mt-3 text-[16px] leading-relaxed text-ink/80">{e.d}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ================= STATEMENT ================= */}
      <section className="container-page py-24 md:py-40">
        <Reveal>
          <div className="flex flex-col items-end justify-between gap-12 md:flex-row">
            <h2 className="max-w-4xl font-display text-4xl font-bold leading-[1.1] tracking-[-0.02em] text-ink sm:text-5xl md:text-[4rem]">The right advice can make a big difference to what comes next.</h2>
            <Link href="/find-a-financial-adviser/" aria-label="Get matched" className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-stone transition-transform hover:scale-105">
              <ArrowRight className="h-7 w-7 text-white" />
            </Link>
          </div>
        </Reveal>
      </section>

      {/* ================= ADVISERS ================= */}
      <section id="advisers" className="bg-paleblue py-20 md:py-28">
        <div className="container-page grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-24">
          <Reveal>
            <h2 className="font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl md:text-[3.5rem]">Are you an independent financial adviser?</h2>
            <p className="mt-8 max-w-lg text-xl text-ink/80">Join our network of trusted professionals and connect with clients who are actively seeking your expertise.</p>
            <Link href="#advisers" className="mt-10 inline-block rounded-full border-2 border-ink px-8 py-4 text-base font-semibold text-ink transition-all hover:bg-ink hover:text-white">
              Join our network
            </Link>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative h-[420px] w-full overflow-hidden rounded-tl-[120px] rounded-br-[120px] md:h-[500px]">
              <Image src="/hq-advisers.jpg" alt="A professional financial adviser" fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= CLIENT STORIES ================= */}
      <section className="container-page py-20 md:py-28">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12 lg:gap-24">
          <Reveal className="lg:col-span-7">
            <div className="relative h-[440px] w-full overflow-hidden shadow-xl md:h-[600px]" style={ORGANIC}>
              <Image src="/hq-clientstory.jpg" alt="David and Sarah smiling in their home" fill sizes="(max-width:1024px) 100vw, 55vw" className="object-cover" />
            </div>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-5">
            <span className="mb-6 block text-[14px] font-bold uppercase tracking-[0.2em] text-stone">Client Stories</span>
            <h2 className="font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl md:text-[3.5rem]">Real peace of mind, for the life you&apos;ve built.</h2>
            <p className="mt-8 text-2xl font-medium italic leading-relaxed text-ink">&ldquo;Finding an adviser who actually listened to our long-term goals changed everything. We finally feel in control of our retirement.&rdquo;</p>
            <p className="mt-6 text-lg font-bold text-stone">— David &amp; Sarah, Surrey</p>
            <div className="mt-10 border-t border-line pt-8">
              <p className="font-medium text-body">Over 10,000 matches made this year.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= INSIGHTS STRIP (dark) ================= */}
      <section className="bg-[#202331] py-20 text-white">
        <div className="container-page grid grid-cols-1 gap-12 md:grid-cols-3">
          <div className="flex flex-col gap-4">
            <span className="text-5xl font-bold leading-none text-stone">85%</span>
            <p className="text-lg leading-relaxed opacity-90">of people feel more confident after their first consultation.</p>
          </div>
          <div className="flex flex-col gap-4 border-t border-white/10 pt-8 md:border-l md:border-t-0 md:pl-12 md:pt-0">
            <Map className="h-9 w-9 text-stone" strokeWidth={1.6} />
            <p className="text-lg leading-relaxed opacity-90">Independent advice across the whole of the UK.</p>
          </div>
          <div className="flex flex-col gap-4 border-t border-white/10 pt-8 md:border-l md:border-t-0 md:pl-12 md:pt-0">
            <ShieldCheck className="h-9 w-9 text-stone" strokeWidth={1.6} />
            <p className="text-lg leading-relaxed opacity-90">FCA regulated professionals only.</p>
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[800px] px-6">
          <h2 className="mb-14 text-center font-display text-[32px] font-bold text-ink sm:text-[40px]">Frequently asked questions</h2>
          <Faq items={faqs} />
        </div>
      </section>
    </>
  );
}
