import Link from "next/link";
import { ArrowUpRight, Phone, Star, Clock } from "lucide-react";
import { Reveal } from "./Reveal";
import { site } from "@/lib/site";

export function CtaSection({
  title = "Speak to a real person about your situation, usually within the hour.",
  sub = "One hand-picked independent adviser. Free, no obligation.",
  cta = "Find my adviser",
  href = "/find-a-financial-adviser/",
}) {
  const phoneHref = `tel:${site.phone.replace(/\s/g, "")}`;
  return (
    <section className="bg-bone py-[60px] sm:py-20 lg:py-28">
      <div className="container-page">
        <Reveal>
          <div className="relative overflow-hidden rounded-[1.25rem] border border-white/10 bg-gradient-to-br from-charcoal-card via-charcoal to-charcoal-deep p-6 text-center shadow-[0_30px_80px_-24px_rgba(11,18,32,0.45)] sm:rounded-3xl sm:p-10 lg:p-14">
            {/* internal gold glow + capsule motifs */}
            <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-stone/15 blur-3xl" />
            <span className="pointer-events-none absolute -right-10 -top-10 hidden h-28 w-52 rounded-full border-2 border-stone/10 sm:block" />
            <span className="pointer-events-none absolute -bottom-12 -left-12 hidden h-24 w-44 rounded-full border-2 border-stone/[0.07] sm:block" />

            <div className="relative">
              <div className="index-label mx-auto flex w-fit items-center gap-3 text-stone">
                <span className="h-px w-8 bg-stone/40" /><span>Get started</span><span className="h-px w-8 bg-stone/40" />
              </div>

              <h2 className="display-1 mx-auto mt-6 max-w-3xl text-white">{title}</h2>
              <p className="mx-auto mt-5 max-w-xl text-base text-on-charcoal">{sub}</p>

              <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
                <Link href={href} className="inline-flex items-center gap-2 rounded-full bg-stone px-7 py-3.5 font-display text-sm font-bold text-charcoal transition-colors hover:bg-champagne-deep">
                  {cta} <ArrowUpRight className="h-4 w-4" />
                </Link>
                <a href={phoneHref} className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-3.5 font-display text-sm font-bold text-white transition-colors hover:bg-white hover:text-charcoal">
                  <Phone className="h-4 w-4 text-stone" /> {site.phone}
                </a>
              </div>

              <div className="mx-auto mt-10 flex max-w-2xl flex-wrap items-center justify-center gap-x-6 gap-y-2 border-t border-white/10 pt-6">
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-white"><Star className="h-4 w-4 fill-tp-green text-tp-green" />Trustpilot {site.trustpilot}</span>
                <span className="index-label text-on-charcoal">{site.advisers} advisers</span>
                <span className="index-label inline-flex items-center gap-1.5 text-on-charcoal"><Clock className="h-3.5 w-3.5 text-stone" />Within the hour</span>
                <span className="index-label text-on-charcoal">FCA-regulated</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
