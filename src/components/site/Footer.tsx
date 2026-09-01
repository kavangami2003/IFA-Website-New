import Image from "next/image";
import Link from "next/link";
import { footerNav, site, COMPLIANCE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-line bg-bone pb-8 pt-14 sm:pb-10 sm:pt-20">
      <div className="container-page">
        <div className="mb-10 grid grid-cols-1 gap-9 sm:grid-cols-2 sm:gap-10 md:grid-cols-12 md:gap-12 lg:mb-16">
          <div className="md:col-span-5 lg:col-span-4">
            <Image src="/logo-transparent.png" alt="IFA Connect" width={400} height={80} className="mb-5 h-7 w-auto sm:h-8" />
            <p className="max-w-sm txt-body text-body">
              Connecting you with the right independent financial expertise to secure your tomorrow.
            </p>
            <div className="mt-5 flex flex-col gap-1.5 text-sm">
              <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="inline-flex min-h-[32px] w-fit items-center font-semibold text-ink hover:text-stone">{site.phone}</a>
              <a href={`mailto:${site.email}`} className="inline-flex min-h-[32px] w-fit items-center break-all text-body hover:text-ink">{site.email}</a>
            </div>
          </div>

          {footerNav.map((c, i) => (
            <div
              key={c.title}
              className={i === 0 ? "md:col-span-3 md:col-start-7 lg:col-start-7" : "md:col-span-3 lg:col-span-2"}
            >
              <span className="mb-4 block text-[12px] font-bold uppercase tracking-[0.14em] text-ink sm:mb-6 sm:text-[13px]">
                {c.title}
              </span>
              <ul className="space-y-1 sm:space-y-1.5">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="inline-flex min-h-[32px] w-fit items-center text-[15px] leading-snug text-body transition-colors hover:text-ink">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4 border-t border-line pt-6 text-[13px] leading-relaxed text-body sm:pt-8 sm:text-[14px] md:flex-row md:items-start md:justify-between md:gap-8">
          <p className="max-w-2xl">
            © {new Date().getFullYear()} {site.name}. {COMPLIANCE}
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link href="/privacy-policy/" className="inline-flex min-h-[32px] items-center hover:text-ink">Privacy Policy</Link>
            <Link href="/terms/" className="inline-flex min-h-[32px] items-center hover:text-ink">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
