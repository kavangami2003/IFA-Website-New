import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BadgeCheck, PhoneCall, Target, Users } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { Faq, type QA } from "@/components/site/Faq";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "For Advisers | Wealth-Qualified, Human-Verified Enquiries",
  description:
    "Join a network of independent advisers receiving exclusive, human-qualified enquiries. Every lead is spoken to by our team before it reaches you. Membership from £0.",
  alternates: { canonical: "/for-advisers/" },
};

const pillars = [
  { icon: PhoneCall, t: "Qualified by a person, not a form", d: "Our team calls every enquiry before it reaches the platform, to establish what they need, what they hold and what kind of adviser suits them." },
  { icon: Target, t: "Wealth-banded, so you choose", d: "Every profile carries an asset band. You buy the enquiries that fit how you work, rather than paying for whatever comes through." },
  { icon: Users, t: "Sold once, never recycled", d: "Enquiries are exclusive and first come, first served. You are not the fourth adviser to call the same person that week." },
  { icon: BadgeCheck, t: "Independent advisers only", d: "We do not list restricted advisers. That keeps the proposition credible with consumers, which is what makes the enquiries worth having." },
];

const tiers = [
  { name: "Free", price: "£0", leads: "1 lead / month" },
  { name: "Starter", price: "£59", leads: "5 leads / month" },
  { name: "Growth", price: "£89", leads: "10 leads / month", featured: true },
  { name: "Pro", price: "£129", leads: "20 leads / month" },
  { name: "Team", price: "Bespoke", leads: "Unlimited" },
];

const leadPricing: [string, string][] = [
  ["Under £100k", "£160"],
  ["£100k – £200k", "£250"],
  ["£200k – £300k", "£360"],
  ["£300k – £500k", "£460"],
  ["£500k – £750k", "£580"],
  ["£750k – £1m", "£700"],
  ["£1m+", "£800"],
];

const faqs: QA[] = [
  { q: "How are enquiries qualified before I see them?", a: "Every enquiry completes our situation-led form and is then called by one of our business development managers. They establish the client's objectives, roughly what assets are involved and what type of adviser would suit. Only then is the profile published to the platform." },
  { q: "Are enquiries exclusive?", a: "Yes. Each qualified profile is purchased once, on a first come, first served basis. The consumer does not see adviser identities until an adviser buys the enquiry, so you are not competing against three other calls." },
  { q: "How much do advisers typically spend?", a: "It varies widely with appetite — from around £500 a month up to £3,000–£4,000 for firms actively building. The membership tier sets your monthly allocation; individual enquiries are then priced by asset band." },
  { q: "Which regions have capacity?", a: "We work across the UK, and currently have particular consumer demand in Yorkshire, Shropshire and Leicestershire. If you cover those areas there is meaningful volume available." },
  { q: "What do you need from me to join?", a: "An introduction call so we understand how your business runs and what you specialise in, followed by background checks — client reviews, time in the industry and business reviews. We only work with independent, whole-of-market, FCA-regulated advisers." },
  { q: "Can I evidence your process for Consumer Duty?", a: "Yes. We can share how enquiries are sourced, qualified and consented, which is increasingly what firms need to evidence due diligence on lead origin." },
];

export default function ForAdvisersPage() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="container-page pb-10 pt-10 sm:pb-16 sm:pt-16 md:pb-24 md:pt-24">
        <div className="grid grid-cols-1 items-center gap-9 sm:gap-12 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-7 lg:pr-8">
            <span className="mb-3 block text-[12px] font-bold uppercase tracking-[0.2em] text-stone sm:mb-4 sm:text-[14px]">For advisers</span>
            <h1 className="txt-hero text-ink">Enquiries that have already spoken to a human.</h1>
            <p className="mt-5 max-w-2xl txt-lead text-body sm:mt-8">
              We introduce consumers to independent advisers — one adviser per enquiry, qualified by
              our team before it reaches you, and banded by assets so you only buy what fits your firm.
            </p>
            <div className="cta-stack mt-7 sm:mt-10">
              <a
                href={`mailto:${site.email}?subject=Joining%20the%20IFA%20Connect%20adviser%20network`}
                className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-ink px-7 text-[15px] font-semibold text-white transition-colors hover:bg-charcoal-deep sm:px-8 sm:text-base"
              >
                Apply to join <ArrowRight className="h-4 w-4 shrink-0" />
              </a>
              <Link
                href="#pricing"
                className="inline-flex min-h-[52px] items-center justify-center rounded-full border-2 border-ink px-7 text-[15px] font-semibold text-ink transition-all hover:bg-ink hover:text-white sm:px-8 sm:text-base"
              >
                See pricing
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.12} className="lg:col-span-5">
            <div className="organic-shape relative h-[320px] w-full overflow-hidden sm:h-[440px] md:h-[560px] lg:h-[640px]">
              <Image src="/hq-advisers.jpg" alt="An independent financial adviser at work" fill priority sizes="(max-width:1024px) 100vw, 42vw" className="object-cover" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= NUMBERS ================= */}
      <section className="border-y border-line bg-cream py-9 sm:py-12">
        <div className="container-page grid grid-cols-2 gap-6 sm:gap-8 md:grid-cols-4">
          {[
            ["130+", "Independent advisers in the network"],
            ["~200", "Qualified enquiries a month, UK-wide"],
            ["100%", "Spoken to by our team first"],
            ["1", "Adviser introduced per enquiry"],
          ].map(([n, l]) => (
            <div key={l} className="min-w-0">
              <div className="text-2xl font-bold leading-none text-stone sm:text-4xl">{n}</div>
              <p className="mt-2 text-[13px] leading-snug text-body sm:text-[15px]">{l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= PILLARS ================= */}
      <section className="container-page py-14 sm:py-20 md:py-28">
        <Reveal className="mb-9 max-w-3xl sm:mb-14">
          <h2 className="txt-section text-ink">Why our enquiries convert differently.</h2>
          <p className="mt-4 txt-lead text-body sm:mt-6">
            The difference is not volume. It is that somebody has already had the conversation.
          </p>
        </Reveal>
        <div className="grid grid-cols-1 gap-x-10 gap-y-9 md:grid-cols-2 md:gap-x-16 md:gap-y-12">
          {pillars.map((p, i) => (
            <Reveal key={p.t} delay={(i % 2) * 0.08}>
              <div className="border-t border-line pt-6 sm:pt-8">
                <p.icon className="h-8 w-8 text-stone sm:h-9 sm:w-9" strokeWidth={1.6} />
                <h3 className="mt-4 text-xl font-semibold text-ink sm:mt-6 sm:text-2xl">{p.t}</h3>
                <p className="mt-3 txt-body text-body">{p.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ================= PRICING ================= */}
      <section id="pricing" className="scroll-mt-24 bg-charcoal py-14 text-white sm:py-20 md:py-28">
        <div className="container-page">
          <Reveal className="max-w-3xl">
            <h2 className="txt-section text-white">Membership, then credits.</h2>
            <p className="mt-4 txt-body text-on-charcoal sm:mt-6">
              A low monthly subscription sets your allocation. You then buy individual enquiries at a
              price set by the client&apos;s asset band, so a small enquiry never costs you what a
              large one does. All prices exclude VAT.
            </p>
          </Reveal>

          <div className="mt-9 grid grid-cols-1 gap-3 sm:mt-14 sm:grid-cols-2 sm:gap-4 lg:grid-cols-5">
            {tiers.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.06}>
                <div
                  className={`flex h-full flex-col rounded-2xl border p-5 sm:p-6 ${
                    t.featured ? "border-stone bg-white/10" : "border-white/15 bg-white/[0.04]"
                  }`}
                >
                  <span className="text-[12px] font-bold uppercase tracking-[0.14em] text-on-charcoal">{t.name}</span>
                  <span className="mt-3 text-2xl font-bold text-white sm:text-3xl">
                    {t.price}
                    {t.price !== "Bespoke" && t.price !== "£0" && <span className="text-base font-medium text-on-charcoal">/mo</span>}
                  </span>
                  <span className="mt-2 text-[14px] text-on-charcoal">{t.leads}</span>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-9 sm:mt-14">
            <h3 className="text-lg font-semibold text-white sm:text-xl">Enquiry price by asset band</h3>
            <div className="mt-4 overflow-x-auto rounded-2xl border border-white/15">
              <table className="w-full min-w-[20rem] border-collapse text-left text-[14px]">
                <thead>
                  <tr className="bg-white/[0.06]">
                    <th className="whitespace-nowrap px-4 py-3 font-semibold text-white">Client assets</th>
                    <th className="whitespace-nowrap px-4 py-3 font-semibold text-white">Per enquiry</th>
                  </tr>
                </thead>
                <tbody>
                  {leadPricing.map(([band, price]) => (
                    <tr key={band} className="border-t border-white/10">
                      <td className="whitespace-nowrap px-4 py-3 text-on-charcoal">{band}</td>
                      <td className="whitespace-nowrap px-4 py-3 font-semibold text-white">{price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-[13px] text-muted-charcoal">
              Typical adviser spend runs from around £500 to £3,000–£4,000 a month depending on appetite.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="container-page py-14 sm:py-20 md:py-28">
        <Reveal><h2 className="txt-section max-w-3xl text-ink">How an enquiry reaches you.</h2></Reveal>
        <div className="mt-10 grid grid-cols-1 gap-10 sm:mt-16 md:grid-cols-4 md:gap-8">
          {[
            ["01", "The enquiry arrives", "A consumer completes our situation-led form after a search or an ad."],
            ["02", "We call them", "A business development manager establishes objectives, assets and what kind of adviser fits."],
            ["03", "The profile is published", "The qualified profile goes live on the platform with its asset band."],
            ["04", "You buy and call", "You review, purchase and contact the client directly. Sold once, to one adviser."],
          ].map(([n, t, d], i) => (
            <Reveal key={n} delay={i * 0.08}>
              <span className="block text-4xl font-light text-stone opacity-70 sm:text-5xl">{n}</span>
              <h3 className="mt-4 text-lg font-semibold text-ink sm:mt-5 sm:text-xl">{t}</h3>
              <p className="mt-2 txt-body text-body">{d}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="border-t border-line py-14 sm:py-20 md:py-24">
        <div className="container-page mx-auto max-w-[800px]">
          <h2 className="txt-section mb-8 text-center text-ink sm:mb-12">Adviser questions</h2>
          <Faq items={faqs} />
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-[#0a0d1b] py-16 text-center text-white sm:py-24">
        <div className="container-page">
          <Reveal>
            <h2 className="txt-section mx-auto max-w-2xl text-white">Want to see the enquiries before you commit?</h2>
            <p className="mx-auto mt-5 max-w-xl txt-body text-white/70">
              Start on the free tier, take a look at what comes through, and move up when it is working.
            </p>
            <div className="cta-stack mt-8 justify-center">
              <a
                href={`mailto:${site.email}?subject=Joining%20the%20IFA%20Connect%20adviser%20network`}
                className="inline-flex min-h-[52px] items-center gap-2 rounded-full bg-stone px-7 text-[15px] font-semibold text-white transition-colors hover:bg-champagne-deep sm:px-8 sm:text-base"
              >
                Apply to join <ArrowRight className="h-4 w-4 shrink-0" />
              </a>
              <a
                href={`tel:${site.phone.replace(/\s/g, "")}`}
                className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full border border-white/30 px-7 text-[15px] font-semibold text-white transition-colors hover:bg-white hover:text-ink sm:px-8 sm:text-base"
              >
                {site.phone}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
