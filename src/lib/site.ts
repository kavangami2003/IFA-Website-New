export const site = {
  name: "IFA Connect",
  url: "https://www.ifaconnect.co.uk",
  phone: "+44 204 652 2263",
  email: "hello@ifaconnect.co.uk",
  tagline: "Independent financial advice, matched by a person — not an algorithm.",
  trustpilot: "4.6",
  advisers: "130+",
} as const;

export const nav = [
  { label: "Retirement", href: "/retirement-advice/" },
  { label: "Pensions", href: "/pension-review/" },
  { label: "Investments", href: "/investment-portfolio-review/" },
  { label: "Inheritance", href: "/inheritance-tax-planning/" },
  { label: "Switching", href: "/unhappy-with-your-wealth-manager/" },
  { label: "Guides", href: "/guides/" },
] as const;
