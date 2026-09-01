import type { Metadata } from "next";
import { Briefcase, Percent, Landmark, Wallet, BadgeCheck, ShieldCheck, Clock } from "lucide-react";
import { ServiceLayout, type ServiceData } from "@/components/site/ServiceLayout";
import { COMPLIANCE_INVEST } from "@/lib/site";

export const metadata: Metadata = {
  title: "Selling Your Business | Matched to an Independent, FCA-Regulated Adviser",
  description:
    "Sold, or selling, your business? Speak to a real person and get introduced to a hand-picked independent adviser who plans what happens to the proceeds. Free, no obligation.",
  alternates: { canonical: "/selling-your-business/" },
};

const data: ServiceData = {
  hero: {
    title: "You built it, then sold it. Now what?",
    intro:
      "A business sale turns years of work into a single number in your account — and a set of decisions you have never had to make before. We introduce you to one hand-picked, FCA-regulated independent adviser who works with business owners at exactly this point. Free, and no obligation.",
    primary: "Plan for the proceeds",
    secondary: "What an adviser covers",
    image: "/inv-hero.jpg",
    alt: "A business owner after completing the sale of their company",
  },
  pain: {
    title: "The hardest financial decisions arrive the week after completion.",
    body:
      "Before the sale, everything was in the business. After it, the money is liquid, visible and unfamiliar — and the tax position, the timing and the sheer size of the sum make it easy to freeze, or to act too quickly. Business owners are used to being the expert in the room. This is the one decision where that is rarely true, and it is worth having someone independent alongside you for it.",
  },
  grid: {
    title: "What an adviser helps you with after a sale",
    intro:
      "An independent adviser works from the whole of the market, so the plan is shaped around your position and timeline rather than any one firm's product range.",
    items: [
      { icon: Percent, t: "Tax on the sale", d: "How the proceeds are treated, which reliefs and allowances apply to your circumstances, and the order in which things are best done." },
      { icon: Wallet, t: "Where the money sits meanwhile", d: "Options for holding a large cash sum while you decide, and what protection limits mean for a balance of this size." },
      { icon: Landmark, t: "Replacing your income", d: "Turning a one-off lump sum into a dependable income, whether you are stopping altogether or starting something else." },
      { icon: Briefcase, t: "Pension headroom", d: "Whether carry-forward and remaining annual allowance give you room to shelter part of the proceeds." },
      { icon: ShieldCheck, t: "Estate and family", d: "What the sale changes about inheritance tax, gifting and passing wealth on — including the April 2027 pension rule change." },
      { icon: Clock, t: "Timing and phasing", d: "Investing a large sum all at once versus in stages, and how that interacts with your appetite for risk." },
    ],
  },
  split: {
    title: "The proceeds only land once.",
    body:
      "Business owners often tell us the sale itself was well advised and the months afterwards were not. Corporate finance advisers do the deal; far fewer help with what the money should then do for the next thirty years. The independent advisers we introduce specialise in exactly that handover — the point where a business asset becomes a personal financial plan.",
    link: "Get introduced to an adviser",
    image: "/inv-story.jpg",
    alt: "A former business owner reviewing plans at home",
  },
  steps: {
    title: "How it works",
    items: [
      { n: "01", t: "Answer a few questions", d: "Two minutes, confidential and secure. We ask for a rough asset band, never account details." },
      { n: "02", t: "A real person calls you", d: "Usually within the hour, in office hours, to understand where you are in the sale process." },
      { n: "03", t: "Meet your adviser", d: "Introduced to one vetted independent adviser who works with business owners, for a free, no-obligation conversation." },
    ],
  },
  statement: "A good exit is only half of it. What the money does next is the other half.",
  dark: {
    title: "Why independent matters here",
    intro:
      "A restricted adviser can only recommend from a limited range of firms. With a sum this size, that limitation is expensive. Every adviser we introduce you to is independent and whole-of-market.",
    cards: [
      { icon: BadgeCheck, t: "Whole-of-market only", d: "We never introduce restricted advisers. Yours can recommend from across the market, not from one firm's shelf." },
      { icon: ShieldCheck, t: "Vetted before we introduce", d: "Background checks, time in industry and real client reviews — before any adviser joins the network." },
      { icon: Briefcase, t: "Experienced with exits", d: "We match you to advisers who regularly work with owners through and after a sale, not generalists." },
    ],
  },
  experts: {
    title: "Meet the kind of adviser we match you with",
    body:
      "Every introduction is to one adviser, chosen for your situation by a member of our team after speaking to you. Your details are only ever shared with that adviser — never sold on to a panel, and never passed to anyone you have not agreed to.",
    link: "Start the two-minute form",
    image: "/adviser-portrait.jpg",
    alt: "An independent financial adviser who works with business owners",
  },
  faqs: [
    { q: "Is this free — what's the catch?", a: "There is no charge to you at any point. Advisers pay us to be introduced to people looking for advice, which is how the service is funded. It does not change the fees your adviser charges you, and you are under no obligation to proceed after the introductory conversation." },
    { q: "Should I speak to someone before or after completion?", a: "Both are common, and earlier is usually more useful. Speaking to an adviser while the sale is still in progress means the planning conversation can happen before the proceeds land, rather than after. If the funds have already arrived, that is equally workable." },
    { q: "Will the adviser be genuinely independent?", a: "Yes. We only work with independent, whole-of-market, FCA-regulated advisers. We never introduce restricted advisers, who can only recommend from a limited product range." },
    { q: "Do you need to know how much the business sold for?", a: "No. We ask for a rough band so we can match you with an adviser who works at that level. We never ask for account numbers, and we never ask you to move or transfer money." },
    { q: "I already have an accountant — is an adviser worth it too?", a: "They cover different ground. An accountant deals with the tax position of the transaction; an independent financial adviser deals with what the proceeds then do — income, investment, pensions and estate planning. Most business owners end up working with both." },
    { q: "What happens after I enquire?", a: "A member of our team calls you, usually within the hour in office hours, to understand your situation. We then introduce you to one hand-picked independent adviser for a free, no-obligation conversation." },
  ],
  cta: {
    title: "Speak to a real person about the proceeds, usually within the hour.",
    body: "One hand-picked independent adviser. Free, and no obligation.",
    button: "Find my adviser",
    compliance: COMPLIANCE_INVEST,
  },
};

export default function SellingYourBusinessPage() {
  return <ServiceLayout data={data} />;
}
