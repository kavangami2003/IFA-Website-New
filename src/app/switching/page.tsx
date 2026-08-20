import type { Metadata } from "next";
import { Percent, MessageSquare, Lock, TrendingDown, BadgeCheck, Globe, HandCoins } from "lucide-react";
import { ServiceLayout, type ServiceData } from "@/components/site/ServiceLayout";

export const metadata: Metadata = {
  title: "Switching Advisers | Move to an Independent, FCA-Regulated Adviser",
  description:
    "Paying too much or hearing too little from your current adviser? We match you with an independent, FCA-regulated adviser who puts you first. Free, no obligation.",
};

const data: ServiceData = {
  hero: {
    title: "Switching Advisers: Better advice, less cost.",
    intro: "Paying too much, or hearing too little from your current adviser? We'll match you with an independent, FCA-regulated adviser who puts you first — and moving is simpler than you think.",
    primary: "Find a better adviser",
    secondary: "How It Works",
    image: "/hq-hero.jpg",
    alt: "A client meeting a new adviser",
  },
  grid: {
    title: "Why People Switch",
    intro: "You're never locked in to an adviser. These are the reasons people most often come to us looking for something better.",
    items: [
      { icon: Percent, t: "High Fees", d: "Layers of platform, fund and adviser charges quietly eating into returns — often without a clear explanation of what you're paying for." },
      { icon: MessageSquare, t: "Poor Communication", d: "An adviser you rarely hear from, annual reviews that never happen, and questions that take weeks to answer." },
      { icon: Lock, t: "Restricted Advice", d: "A 'restricted' adviser who can only recommend a limited panel of products, rather than the whole of the market." },
      { icon: TrendingDown, t: "Underperformance", d: "Returns that consistently lag the market, with no clear strategy or rationale behind how your money is invested." },
    ],
  },
  split: {
    title: "Switching is simpler than you think.",
    body: "Most people put off changing adviser because they assume it will be complicated. In reality, your new independent adviser handles the heavy lifting — reviewing your existing arrangements, checking for any exit penalties or valuable guarantees, and managing the transfers on your behalf. You stay in control and simply approve each step.",
    link: "See How Switching Works",
    image: "/pillar-callback.jpg",
    alt: "An adviser handling a client's transfer",
  },
  steps: {
    title: "How Switching Works",
    items: [
      { n: "01", t: "Free review", d: "Tell us about your current setup. We'll help you see clearly what you're paying and what you're getting." },
      { n: "02", t: "We match you", d: "We introduce you to an independent, FCA-regulated adviser suited to your goals, location and portfolio." },
      { n: "03", t: "Your adviser handles the move", d: "Once you're happy, your new adviser manages the transfers and paperwork, checking nothing valuable is lost." },
    ],
  },
  statement: "You're not locked in. Better advice is one conversation away.",
  dark: {
    title: "Confidence & Trust",
    intro: "We only connect you with professionals who meet stringent criteria for regulation, transparency and genuine whole-of-market independence.",
    cards: [
      { icon: BadgeCheck, t: "FCA-Regulated Advice", d: "Every adviser is authorised and regulated by the Financial Conduct Authority, with their standing continuously monitored." },
      { icon: HandCoins, t: "No Cost to Be Matched", d: "Our introduction service is completely free to you — you'll always know any fees before you agree to anything." },
      { icon: Globe, t: "Whole-of-Market", d: "Independent advisers recommend from across the entire market, so your advice is based on what suits you." },
    ],
  },
  experts: {
    title: "Meet the Experts",
    body: "Changing adviser should feel like an upgrade, not a hassle. Our curated network of independent advisers is used to welcoming clients from other firms — reviewing what's already in place, keeping what works, and improving what doesn't, all at a pace you're comfortable with.",
    link: "View Adviser Profiles",
    image: "/retirement-adviser.jpg",
    alt: "An independent financial adviser",
  },
  cta: {
    title: "Ready for an adviser who works for you?",
    body: "Take the first step towards clearer advice, fairer fees and a professional who actually keeps in touch.",
    button: "Find a better adviser",
    compliance: "IFA Connect introduces you to FCA-regulated independent financial advisers. We do not provide financial advice, and there is no charge to you. Switching or transferring investments and pensions is not right for everyone and may involve costs or the loss of valuable guarantees — always take regulated advice first. The value of investments can fall as well as rise.",
  },
};

export default function SwitchingPage() {
  return <ServiceLayout data={data} />;
}
