import type { Metadata } from "next";
import { TrendingUp, Leaf, Landmark, ShieldCheck, LineChart, ReceiptText, BadgeCheck } from "lucide-react";
import { ServiceLayout, type ServiceData } from "@/components/site/ServiceLayout";

export const metadata: Metadata = {
  title: "Investments & Wealth | Matched to an Independent, FCA-Regulated Adviser",
  description:
    "Grow your wealth with tailored, risk-adjusted portfolios managed by vetted, independent FCA-regulated advisers. We connect you with the right wealth manager. Free, no obligation.",
};

const data: ServiceData = {
  hero: {
    title: "Investments & Wealth: Growing your future.",
    intro: "Grow your wealth with tailored, risk-adjusted investment portfolios managed by vetted professionals. We connect you with top-tier independent financial advisers to secure your financial legacy.",
    primary: "Connect with a wealth manager",
    secondary: "Explore Strategies",
    image: "/adviser-portrait.jpg",
    alt: "A wealth manager at their desk",
  },
  grid: {
    title: "Investment Strategies",
    intro: "Our network of IFAs offer sophisticated approaches to market participation, designed to align with your personal values, risk tolerance, and long-term objectives.",
    items: [
      { icon: TrendingUp, t: "Capital Growth", d: "Strategies focused on maximising long-term capital appreciation through diversified exposure to global equities and emerging markets. Ideal for clients with a longer investment horizon." },
      { icon: Leaf, t: "ESG & Sustainable", d: "Align your wealth with your values. Portfolios rigorously screened for Environmental, Social, and Governance criteria." },
      { icon: Landmark, t: "Income Generation", d: "Yield-focused portfolios designed to provide a steady, reliable stream of income through dividends, fixed interest, and alternative yielding assets." },
      { icon: ShieldCheck, t: "Wealth Preservation", d: "Risk-averse strategies aimed at protecting capital against inflation and market volatility, ensuring legacy stability." },
    ],
  },
  split: {
    title: "Strategies built for the long term.",
    body: "Market analysis requires more than just reacting to the present. It demands a sophisticated understanding of global trends, economic indicators, and future trajectories. Our network of experts leverages deep institutional knowledge to build resilient portfolios designed to weather volatility and capture sustainable growth.",
    link: "Explore Market Insights",
    image: "/pillar-human.jpg",
    alt: "A modern investment office",
  },
  steps: {
    title: "Our Investment Philosophy",
    items: [
      { n: "01", t: "Transparency", d: "Complete clarity on fees, performance, and strategy. You should always know exactly where and how your wealth is working." },
      { n: "02", t: "Rigorous Research", d: "Evidence-based approaches driven by deep market analysis. We rely on data and proven methodologies over market timing." },
      { n: "03", t: "Client Alignment", d: "Your goals dictate the strategy. Every portfolio is tailored to your specific risk tolerance, horizon, and personal values." },
    ],
  },
  statement: "Expertise is not just about knowledge; it's about structure.",
  dark: {
    title: "Performance & Trust",
    intro: "The way we match you ensures you are only connected with professionals who meet stringent criteria for performance, transparency, and fiduciary responsibility.",
    cards: [
      { icon: BadgeCheck, t: "Rigorous FCA Verification", d: "Every adviser's regulatory standing is continuously monitored to ensure absolute compliance and safety." },
      { icon: ReceiptText, t: "Fee Transparency", d: "Clear, upfront understanding of management costs and structures, eliminating any hidden surprises." },
      { icon: LineChart, t: "Track Record Analysis", d: "Detailed review of historical portfolio performance under varying market conditions for consistency." },
    ],
  },
  experts: {
    title: "Meet the Experts",
    body: "Behind every strong portfolio is a dedicated professional. Our curated network includes top-tier independent financial advisers who bring years of experience, analytical rigour, and personal commitment to securing your financial legacy. We believe true wealth management is built on human relationships, not just algorithms.",
    link: "View Adviser Profiles",
    image: "/retirement-adviser.jpg",
    alt: "An independent financial adviser",
  },
  cta: {
    title: "Ready to elevate your financial strategy?",
    body: "Take the first step towards a structured, professional approach to your wealth management.",
    button: "Connect with a wealth manager",
    compliance: "IFA Connect introduces you to FCA-regulated independent financial advisers. We do not provide financial advice, and there is no charge to you. The value of investments can fall as well as rise and you may get back less than you invest.",
  },
};

export default function InvestmentsPage() {
  return <ServiceLayout data={data} />;
}
