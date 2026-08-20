import type { Metadata } from "next";
import { Landmark, LineChart, Briefcase, Percent, BadgeCheck, ReceiptText, Globe } from "lucide-react";
import { ServiceLayout, type ServiceData } from "@/components/site/ServiceLayout";

export const metadata: Metadata = {
  title: "Pension Advice | Matched to an Independent, FCA-Regulated Adviser",
  description:
    "Old workplace pensions, SIPPs and lost pots — brought together and optimised by a vetted, independent FCA-regulated adviser. Free, no obligation.",
};

const data: ServiceData = {
  hero: {
    title: "Pensions: Make every pot work harder.",
    intro: "Old workplace pensions, SIPPs and forgotten pots — brought together and optimised. We match you with an independent, FCA-regulated adviser who makes your pensions simple to understand and easy to control.",
    primary: "Review my pensions",
    secondary: "Explore Options",
    image: "/social-proof.jpg",
    alt: "A client reviewing pensions with an adviser",
  },
  grid: {
    title: "Pension Solutions",
    intro: "Whether you have one pension or ten, an independent adviser helps you see the whole picture and make sure every pound is invested with purpose.",
    items: [
      { icon: Landmark, t: "Consolidation", d: "Combine scattered and old workplace pensions into one clear, manageable plan — after checking you won't lose valuable guarantees by moving." },
      { icon: LineChart, t: "SIPPs", d: "Self-invested personal pensions that give you and your adviser wider investment choice and greater control over how your money grows." },
      { icon: Briefcase, t: "Workplace Pensions", d: "Understand what your current and previous employer schemes are really worth, and how they fit your wider retirement plan." },
      { icon: Percent, t: "Tax Relief", d: "Make full use of contribution allowances and tax relief, so the government tops up your pension as efficiently as possible." },
    ],
  },
  split: {
    title: "Small changes, decades of difference.",
    body: "A percentage point of hidden charges, an old pension left in a poorly-performing fund, or an unused allowance can quietly cost you tens of thousands over a working life. The advisers we introduce strip out unnecessary cost, tidy up the mess and put your pensions on the most efficient footing for the years ahead.",
    link: "Explore Pension Insights",
    image: "/pillar-independent.jpg",
    alt: "An adviser comparing pension options",
  },
  steps: {
    title: "Our Pension Philosophy",
    items: [
      { n: "01", t: "Find every pot", d: "We start by tracking down and valuing all of your pensions, including the ones you may have lost sight of." },
      { n: "02", t: "Cut hidden costs", d: "Your adviser reviews charges and fund performance, removing drag that quietly erodes your savings." },
      { n: "03", t: "Match to your retirement", d: "Everything is aligned to when and how you want to retire, with a plan you can actually follow." },
    ],
  },
  statement: "A pension you understand is a pension you can plan around.",
  dark: {
    title: "Value & Trust",
    intro: "We only connect you with professionals who meet stringent criteria for regulation, transparency and genuine whole-of-market independence.",
    cards: [
      { icon: BadgeCheck, t: "FCA-Regulated Advice", d: "Every adviser is authorised and regulated by the Financial Conduct Authority, with their standing continuously monitored." },
      { icon: ReceiptText, t: "Fee Transparency", d: "A clear, upfront view of what you pay across products and platforms, with no hidden surprises." },
      { icon: Globe, t: "Whole-of-Market", d: "Independent advisers recommend from across the entire market, never a restricted panel of products." },
    ],
  },
  experts: {
    title: "Meet the Experts",
    body: "Pensions are full of jargon, guarantees and small print that can cost you dearly if they're misread. Our curated network of independent advisers untangles all of it — explaining your options in plain English and taking care of the paperwork on your behalf.",
    link: "View Adviser Profiles",
    image: "/adviser-portrait.jpg",
    alt: "An independent pension adviser",
  },
  cta: {
    title: "Ready to take control of your pensions?",
    body: "Take the first step towards pensions that are consolidated, low-cost and working towards your retirement.",
    button: "Review my pensions",
    compliance: "IFA Connect introduces you to FCA-regulated independent financial advisers. We do not provide financial advice, and there is no charge to you. Transferring or consolidating pensions is not right for everyone and you could lose valuable guarantees — always take regulated advice first. The value of investments can fall as well as rise.",
  },
};

export default function PensionsPage() {
  return <ServiceLayout data={data} />;
}
