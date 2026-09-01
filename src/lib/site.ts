export const site = {
  name: "IFA Connect",
  url: "https://www.ifaconnect.co.uk",
  phone: "+44 204 652 2263",
  email: "hello@ifaconnect.co.uk",
  tagline: "Independent financial advice, matched by a person — not an algorithm.",
  trustpilot: "4.6",
  advisers: "130+",
} as const;

/**
 * The six "money pages" from the landing-page spec. Each keyword-led slug in
 * the spec resolves to the live page below (see the redirect routes), so there
 * is exactly one canonical page per situation.
 */
export const nav = [
  { label: "Retirement", href: "/retirement/" },
  { label: "Pensions", href: "/pensions/" },
  { label: "Investments", href: "/investments/" },
  { label: "Inheritance", href: "/inheritance/" },
  { label: "Business Sale", href: "/selling-your-business/" },
  { label: "Switching", href: "/switching/" },
  { label: "Guides", href: "/guides/" },
] as const;

export const footerNav = [
  {
    title: "Advice",
    links: [
      { label: "Retirement", href: "/retirement/" },
      { label: "Pensions", href: "/pensions/" },
      { label: "Investments", href: "/investments/" },
      { label: "Inheritance", href: "/inheritance/" },
      { label: "Selling a Business", href: "/selling-your-business/" },
      { label: "Switching Advisers", href: "/switching/" },
    ],
  },
  {
    title: "Explore",
    links: [
      { label: "Find an Adviser", href: "/find-a-financial-adviser/" },
      { label: "Guides & Resources", href: "/guides/" },
      { label: "How much do I need to retire?", href: "/guides/how-much-do-i-need-to-retire/" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about/" },
      { label: "For Advisers", href: "/for-advisers/" },
      { label: "Contact", href: `mailto:${site.email}` },
    ],
  },
] as const;

/** The introducer line. Required on every page that mentions advice (compliance brief). */
export const COMPLIANCE =
  "IFA Connect introduces you to FCA-regulated independent financial advisers. We are not FCA-regulated and do not provide financial advice ourselves, and there is no charge to you.";

export const COMPLIANCE_INVEST =
  `${COMPLIANCE} The value of investments and any income from them can fall as well as rise, and you may get back less than you invest. Tax treatment depends on your individual circumstances and may change.`;
