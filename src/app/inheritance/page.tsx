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
  pain: {
    title: "Most families only find out what it costs once it is too late to plan.",
    body:
      "Inheritance tax is one of the few bills you can meaningfully change the size of — but almost entirely in advance. Gifting, trusts, allowances and the rules on pensions all take time to put in place. Leaving it means your family inherits the decision as well as the estate.",
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
  faqs: [
    { q: "Is this free — what's the catch?", a: "There is no charge to you at any point. Advisers pay us to be introduced to people looking for advice, which is how the service is funded. It does not change the fees your adviser charges you, and you are under no obligation to proceed after the first conversation." },
    { q: "Will my adviser be genuinely independent?", a: "Yes. We only work with independent, whole-of-market, FCA-regulated advisers. A restricted adviser can only recommend from a limited product range; we never introduce one." },
    { q: "What is changing for pensions and inheritance tax in 2027?", a: "From 6 April 2027, most unused pension funds are expected to be counted as part of the estate for inheritance tax. Whether that affects you depends entirely on your circumstances, the allowances available to you and the size of the estate — which is why it is worth a conversation rather than a rule of thumb." },
    { q: "Is my estate large enough to need planning?", a: "Property values mean a lot of estates sit closer to the threshold than people expect, particularly once pensions are counted. An adviser can tell you where you stand before you decide whether to do anything about it." },
    { q: "Will the adviser be local to me?", a: "We match on area wherever we can, and we ask for your postcode for that reason. Many advisers also work by phone and video, so you are not limited to your immediate area if the right specialist is further afield." },
    { q: "What happens after I enquire?", a: "A member of our team calls you, usually within the hour in office hours, to understand your situation. We then introduce you to one hand-picked independent adviser for a free, no-obligation conversation." },
  ],
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
