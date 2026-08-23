import type { Metadata } from "next";
import { Landmark, ShieldCheck, Gift, FileText, BadgeCheck, Percent, RefreshCw } from "lucide-react";
import { ServiceLayout, type ServiceData } from "@/components/site/ServiceLayout";

export const metadata: Metadata = {
  title: "Inheritance & Estate Planning | Matched to an Independent, FCA-Regulated Adviser",
  description:
    "Protect what you've built and reduce the tax your family pays. We connect you with vetted, independent FCA-regulated advisers for estate and inheritance planning. Free, no obligation.",
};

const data: ServiceData = {
  hero: {
    title: "Inheritance & Estate Planning: Pass on more.",
    intro: "Protect what you've built and reduce the tax your family will pay. We connect you with independent, FCA-regulated advisers who plan your estate carefully, so more of your legacy reaches the people you love.",
    primary: "Protect my estate",
    secondary: "Explore Options",
    image: "/home-hero-1.jpg",
    alt: "A family enjoying time together",
  },
  grid: {
    title: "Estate Solutions",
    intro: "Independent advisers structure your estate so that your wishes are honoured and your family keeps as much of your wealth as the rules allow.",
    items: [
      { icon: Landmark, t: "Inheritance Tax Planning", d: "Understand your potential inheritance tax bill and the legitimate ways to reduce it, from allowances to reliefs and beyond." },
      { icon: ShieldCheck, t: "Trusts", d: "Use trusts to control how and when your wealth passes on, protect vulnerable beneficiaries and keep assets outside your taxable estate." },
      { icon: Gift, t: "Gifting Strategies", d: "Pass wealth to family during your lifetime in a planned, tax-efficient way, using annual exemptions and gifting rules correctly." },
      { icon: FileText, t: "Will & Legacy", d: "Make sure your wishes are properly documented and coordinated with your financial plan, so nothing is left to chance." },
    ],
  },
  split: {
    title: "Plan today, protect tomorrow.",
    body: "Inheritance tax is often described as voluntary — with the right planning, started early enough, much of it can be legitimately avoided. The advisers we introduce look at your whole estate, use allowances and trusts appropriately, and coordinate with your solicitor so your family is spared an avoidable bill and an administrative headache.",
    link: "Explore Estate Insights",
    image: "/hq-story.jpg",
    alt: "An adviser discussing estate plans",
  },
  steps: {
    title: "Our Planning Philosophy",
    items: [
      { n: "01", t: "Understand your estate", d: "We map out everything you own and owe, and estimate the inheritance tax your family would currently face." },
      { n: "02", t: "Use allowances & trusts", d: "Your adviser puts the right structures in place — gifts, trusts and reliefs — to reduce that liability appropriately." },
      { n: "03", t: "Keep it current", d: "As your estate and the tax rules change, your plan is reviewed so it always reflects your wishes and the latest allowances." },
    ],
  },
  statement: "The best legacy is one your family receives without a tax bill they never expected.",
  dark: {
    title: "Care & Trust",
    intro: "We only connect you with professionals who meet stringent criteria for regulation, discretion and putting your family's long-term interests first.",
    cards: [
      { icon: BadgeCheck, t: "FCA-Regulated Advice", d: "Every adviser is authorised and regulated by the Financial Conduct Authority, with their standing continuously monitored." },
      { icon: Percent, t: "Tax-Efficient Structures", d: "Trusts, gifts and reliefs used correctly and legitimately to reduce the inheritance tax your estate would otherwise pay." },
      { icon: RefreshCw, t: "Ongoing Reviews", d: "Estate plans are revisited as your circumstances, family and the tax rules change over time." },
    ],
  },
  experts: {
    title: "Meet the Experts",
    body: "Estate planning is deeply personal, and it works best when it's handled with real care. Our curated network of independent advisers takes the time to understand your family and your intentions, then builds a plan — alongside your solicitor and accountant — that protects both.",
    link: "View Adviser Profiles",
    image: "/pillar-human.jpg",
    alt: "An independent estate planning adviser",
  },
  cta: {
    title: "Ready to protect your family's future?",
    body: "Take the first step towards an estate plan that honours your wishes and reduces the tax your family pays.",
    button: "Protect my estate",
    compliance: "IFA Connect introduces you to FCA-regulated independent financial advisers. We are not FCA-regulated and do not provide financial, tax or legal advice ourselves, and there is no charge to you. Inheritance tax and estate planning involve tax and legal considerations; some trust and estate services may not be regulated by the FCA. Tax treatment depends on your individual circumstances and may change.",
  },
};

export default function InheritancePage() {
  return <ServiceLayout data={data} />;
}
