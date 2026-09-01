import type { Metadata } from "next";
import { Wallet, ShieldCheck, Landmark, Percent, BadgeCheck, RefreshCw } from "lucide-react";
import { ServiceLayout, type ServiceData } from "@/components/site/ServiceLayout";

export const metadata: Metadata = {
  title: "Retirement Planning | Matched to an Independent, FCA-Regulated Adviser",
  description:
    "Turn a lifetime of saving into a secure, tax-efficient retirement income. We connect you with vetted, independent FCA-regulated advisers. Free, no obligation.",
};

const data: ServiceData = {
  hero: {
    title: "Retirement Planning: Your future, on your terms.",
    intro: "Turn a lifetime of saving into a secure, tax-efficient income. We connect you with vetted, independent advisers who build a retirement plan around the life you actually want to live.",
    primary: "Plan my retirement",
    secondary: "Explore Options",
    image: "/retirement-hero.jpg",
    alt: "A couple enjoying a relaxed retirement",
  },
  pain: {
    title: "Retirement is the one financial decision you cannot redo.",
    body:
      "Get it wrong and you either run out of money too soon, or live smaller than you needed to. Pensions, tax, drawdown, the State Pension, how much is genuinely enough — it is a lot to get right once, with no second attempt. The right independent adviser turns that guesswork into a plan built around your numbers.",
  },
  grid: {
    title: "Retirement Solutions",
    intro: "Independent advisers shape your pensions and savings into a dependable income, matched to your timeline, your tax position and how much certainty you want.",
    items: [
      { icon: Wallet, t: "Income Drawdown", d: "Flexible income while your pension stays invested, so your money can keep working through retirement — with the level of risk you're comfortable with." },
      { icon: ShieldCheck, t: "Annuities", d: "A guaranteed income for life, giving you certainty over your essential spending no matter how markets move." },
      { icon: Landmark, t: "Pension Consolidation", d: "Bring scattered and forgotten pots into one clear plan, so you can see and control your whole retirement in one place." },
      { icon: Percent, t: "Tax-Efficient Withdrawal", d: "Use your allowances and tax-free cash in the right order, so more of what you saved stays with you." },
    ],
  },
  split: {
    title: "Built for the decades ahead.",
    body: "A modern retirement can last thirty years or more. Planning for it means accounting for inflation, longevity and the order in which you draw your income. The advisers we introduce build resilient, flexible plans designed to keep paying you a comfortable income for the whole of your retirement — not just the first few years.",
    link: "Explore Retirement Insights",
    image: "/retirement-proof.jpg",
    alt: "A retired client relaxing at home",
  },
  steps: {
    title: "Our Planning Philosophy",
    items: [
      { n: "01", t: "Clarity on your number", d: "First we work out what income you'll actually need, and whether your pensions and savings are on track to deliver it." },
      { n: "02", t: "A sustainable income", d: "Your adviser builds a withdrawal strategy that balances income today with security for the years ahead." },
      { n: "03", t: "Reviewed every year", d: "Life and markets change. Regular reviews keep your plan on course and adapt it as your circumstances evolve." },
    ],
  },
  statement: "A good retirement isn't about how much you saved; it's about how well it's structured.",
  dark: {
    title: "Security & Trust",
    intro: "We only connect you with professionals who meet stringent criteria for regulation, transparency and putting your long-term interests first.",
    cards: [
      { icon: BadgeCheck, t: "FCA-Regulated Advice", d: "Every adviser is authorised and regulated by the Financial Conduct Authority, with their standing continuously monitored." },
      { icon: ShieldCheck, t: "Guaranteed-Income Options", d: "Where certainty matters most, your adviser can secure a guaranteed income to cover your essential costs for life." },
      { icon: RefreshCw, t: "Ongoing Reviews", d: "Your plan is revisited regularly so it stays aligned to your spending, your health and the tax rules of the day." },
    ],
  },
  experts: {
    title: "Meet the Experts",
    body: "Retirement is one of the biggest financial decisions you'll make, and it deserves a real conversation. Our curated network of independent advisers brings decades of experience helping people retire with confidence — treating your plan as a relationship, not a transaction.",
    link: "View Adviser Profiles",
    image: "/retirement-adviser.jpg",
    alt: "An independent retirement adviser",
  },
  faqs: [
    { q: "Is this free — what's the catch?", a: "There is no charge to you at any point. Advisers pay us to be introduced to people looking for advice, which is how the service is funded. It does not change the fees your adviser charges you, and you are under no obligation to proceed after the first conversation." },
    { q: "Will my adviser be genuinely independent?", a: "Yes. We only work with independent, whole-of-market, FCA-regulated advisers. A restricted adviser can only recommend from a limited product range; we never introduce one." },
    { q: "I already have an adviser — is it worth a second opinion?", a: "Plenty of people come to us for exactly that. There is no obligation to move, and an introductory conversation with an independent adviser is a straightforward way to sense-check what you already have." },
    { q: "How much do I need to retire?", a: "It depends far more on your spending than on a headline figure. The honest answer is that it is worth working through your own numbers rather than a rule of thumb — our guide walks through how that calculation is usually approached." },
    { q: "Will the adviser be local to me?", a: "We match on area wherever we can, and we ask for your postcode for that reason. Many advisers also work by phone and video, so you are not limited to your immediate area if the right specialist is further afield." },
    { q: "What happens after I enquire?", a: "A member of our team calls you, usually within the hour in office hours, to understand your situation. We then introduce you to one hand-picked independent adviser for a free, no-obligation conversation." },
  ],
  cta: {
    title: "Ready to plan the retirement you've earned?",
    body: "Take the first step towards a clear, secure and tax-efficient retirement income.",
    button: "Plan my retirement",
    compliance: "IFA Connect introduces you to FCA-regulated independent financial advisers. We are not FCA-regulated and do not provide financial advice ourselves, and there is no charge to you. The value of investments and any income from them can fall as well as rise. Tax treatment depends on your individual circumstances and may change.",
  },
};

export default function RetirementPage() {
  return <ServiceLayout data={data} />;
}
