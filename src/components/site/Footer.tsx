import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

const cols = [
  { title: "Advice", links: [["Retirement", "/retirement/"], ["Pensions", "/pensions/"], ["Investments", "/investments/"], ["Inheritance", "/inheritance/"], ["Switching", "/switching/"]] },
  { title: "Explore", links: [["Find an Adviser", "/find-a-financial-adviser/"], ["Guides & Resources", "/guides/"]] },
  { title: "Company", links: [["About Us", "#"], ["Contact", `mailto:${site.email}`]] },
];

export function Footer() {
  return (
    <footer className="border-t border-line bg-bone pb-10 pt-20">
      <div className="container-page">
        <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Image src="/logo-transparent.png" alt="IFA Connect" width={400} height={80} className="mb-6 h-8 w-auto" />
            <p className="max-w-sm text-body">Connecting you with the right independent financial expertise to secure your tomorrow.</p>
            <div className="mt-6 flex flex-col gap-1.5 text-sm">
              <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="font-semibold text-ink hover:text-stone">{site.phone}</a>
              <a href={`mailto:${site.email}`} className="text-body hover:text-ink">{site.email}</a>
            </div>
          </div>
          {cols.map((c, i) => (
            <div key={c.title} className={i === 0 ? "md:col-span-2 md:col-start-7" : "md:col-span-2"}>
              <span className="mb-6 block text-[13px] font-semibold uppercase tracking-wider text-ink">{c.title}</span>
              <ul className="space-y-4">
                {c.links.map(([label, href]) => (
                  <li key={label}><Link href={href} className="text-body transition-colors hover:text-ink">{label}</Link></li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-line pt-8 text-[14px] text-body md:flex-row">
          <p>© {new Date().getFullYear()} {site.name}. Introductions to FCA-regulated independent advisers — we do not give advice, and there is no charge to you.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-ink">Privacy Policy</Link>
            <Link href="#" className="hover:text-ink">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
