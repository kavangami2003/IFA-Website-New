"use client";

import { useMemo, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { Lock, Check, ShieldCheck, Phone, ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;

type Answers = Record<string, string>;

const SITUATIONS = [
  { value: "retirement", label: "Planning my retirement" },
  { value: "pensions", label: "Reviewing or combining my pensions" },
  { value: "lumpsum", label: "Investing a lump sum or windfall" },
  { value: "estate", label: "Inheritance or estate / reducing inheritance tax" },
  { value: "business", label: "I've sold (or am selling) a business" },
  { value: "adviser", label: "I'm unhappy with my adviser / want a second opinion" },
  { value: "else", label: "Something else" },
];

// One sharp follow-up per situation (spec Screen 2)
const SUBNEED: Record<string, { headline: string; options: string[] }> = {
  retirement: { headline: "How close are you to retiring?", options: ["Already retired", "Within 5 years", "5–10 years", "10+ years"] },
  pensions: { headline: "How many pensions do you have?", options: ["1", "2–3", "4+", "Not sure"] },
  lumpsum: { headline: "Roughly how much are you looking to invest?", options: ["Under £100k", "£100k–£250k", "£250k–£500k", "£500k+"] },
  estate: { headline: "What's the estate roughly worth?", options: ["Under £325k", "£325k–£1m", "£1m+"] },
  business: { headline: "Have the funds landed yet?", options: ["Yes, received", "Completing soon", "Still exploring"] },
  adviser: { headline: "What's prompting the change?", options: ["Fees", "Performance", "Service", "Not independent", "Second opinion"] },
  else: { headline: "What best describes it?", options: ["Protecting my family", "Tax planning", "Getting organised", "Something else"] },
};

// ★ Asset band — the qualifier. `weight` maps to a conversion value for value-based bidding.
const ASSET_BANDS = [
  { label: "Under £100,000", value: "u100", weight: "low" },
  { label: "£100,000 – £250,000", value: "100-250", weight: "low" },
  { label: "£250,000 – £500,000", value: "250-500", weight: "mid" },
  { label: "£500,000 – £1,000,000", value: "500-1m", weight: "high" },
  { label: "Over £1,000,000", value: "1m+", weight: "high" },
];

const ADVISER = ["No, this is my first", "Yes, but I want a second opinion", "Yes, but I'm looking to switch"];
const URGENCY = ["As soon as possible", "This week", "Just researching for now"];

const FIELD =
  "w-full rounded-2xl border border-line bg-white px-4 py-3.5 text-[16px] text-ink placeholder:text-faint focus:border-stone focus:outline-none focus:ring-2 focus:ring-stone/40 sm:px-5";

const TrustLine = () => (
  <div className="flex flex-wrap items-center gap-x-1.5 gap-y-1 text-[11px] leading-tight text-faint sm:text-xs">
    <Lock className="h-3.5 w-3.5 shrink-0 text-stone" /> Secure <span aria-hidden>·</span> No obligation{" "}
    <span aria-hidden>·</span> Independent advisers only
  </div>
);

export function Quiz() {
  const params = useSearchParams();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [contact, setContact] = useState({ first_name: "", phone: "", email: "", best_time: "" });
  const [consent, setConsent] = useState(false);

  // Silently capture click IDs + UTM on entry (spec: carry to CRM / offline conversions)
  const [tracking, setTracking] = useState<Answers>({});
  useEffect(() => {
    const keys = ["gclid", "fbclid", "utm_source", "utm_medium", "utm_campaign"];
    const t: Answers = {};
    keys.forEach((k) => { const v = params.get(k); if (v) t[k] = v; });
    setTracking(t);
    const preset = params.get("s");
    if (preset && SITUATIONS.some((s) => s.value === preset)) {
      setAnswers((a) => ({ ...a, situation: preset }));
      setStep(1);
    }
  }, [params]);

  // Build the ordered screens for the current path
  const screens = useMemo(() => {
    const sub = SUBNEED[answers.situation] ?? SUBNEED.else;
    return [
      { id: "situation", headline: "What are you looking for help with?", sub: "Pick the one that fits best — it helps us match you to the right specialist.", options: SITUATIONS.map((s) => s.label), values: SITUATIONS.map((s) => s.value) },
      { id: "subneed", headline: sub.headline, options: sub.options },
      { id: "asset", headline: "Roughly how much do you have in pensions, investments and savings?", sub: "A rough band is fine — it just helps us match an adviser who specialises at your level. We never ask for account details.", options: ASSET_BANDS.map((b) => b.label), values: ASSET_BANDS.map((b) => b.value) },
      { id: "adviser", headline: "Do you currently work with a financial adviser?", options: ADVISER },
      { id: "postcode", headline: "What's your postcode?", sub: "So we can match you with an adviser who covers your area (many also advise by phone or video).", kind: "postcode" as const },
      { id: "urgency", headline: "How soon would you like to talk?", options: URGENCY },
      { id: "contact", headline: "Great — where should our team reach you?", kind: "contact" as const },
      { id: "thankyou", kind: "thankyou" as const },
    ];
  }, [answers.situation]);

  const total = screens.length - 1; // exclude thank-you from progress
  const current = screens[step];
  const pct = Math.min(100, Math.round((step / total) * 100));

  const choose = (id: string, value: string) => {
    setAnswers((a) => ({ ...a, [id]: value }));
    setStep((s) => Math.min(s + 1, screens.length - 1));
  };
  const back = () => setStep((s) => Math.max(0, s - 1));
  const next = () => setStep((s) => Math.min(s + 1, screens.length - 1));

  const submit = () => {
    const payload = { ...answers, ...contact, consent, ...tracking };
    // TODO: POST to CRM endpoint + fire offline conversion with asset-band weight.
    console.log("IFA Connect enquiry", payload);
    next();
  };

  const isThankYou = current.id === "thankyou";

  return (
    <div className="mx-auto max-w-xl">
      {/* Progress */}
      {!isThankYou && (
        <div className="mb-5 sm:mb-6">
          <div className="mb-2 flex items-center justify-between gap-2 text-[11px] text-faint sm:text-xs">
            <span>Question {step + 1} of {total}</span>
            <span>{pct}%</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-line">
            <motion.div className="h-full rounded-full bg-stone" animate={{ width: `${pct}%` }} transition={{ duration: 0.5, ease: EASE }} />
          </div>
        </div>
      )}

      <AnimatePresence mode="wait">
        <motion.div
          key={current.id + step}
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -24 }}
          transition={{ duration: 0.45, ease: EASE }}
        >
          {/* SINGLE-SELECT SCREENS */}
          {"options" in current && current.options && (
            <div>
              <h2 className="font-display text-[1.35rem] font-extrabold leading-tight tracking-tight text-ink sm:text-2xl">{current.headline}</h2>
              {"sub" in current && current.sub && <p className="mt-2 text-[13px] leading-relaxed text-body sm:text-sm">{current.sub}</p>}
              <div className="mt-5 space-y-2.5 sm:mt-6 sm:space-y-3">
                {current.options.map((opt, i) => (
                  <button
                    key={opt}
                    onClick={() => choose(current.id, ("values" in current && current.values ? current.values[i] : opt) as string)}
                    className="flex w-full min-h-[56px] items-center justify-between gap-3 rounded-2xl border border-line bg-white px-4 py-3.5 text-left text-[14px] font-semibold leading-snug text-ink transition-colors hover:border-stone hover:bg-stone-tint active:bg-stone-tint sm:px-5 sm:py-4 sm:text-[15px]"
                  >
                    <span className="min-w-0">{opt}</span>
                    <span className="h-3 w-6 shrink-0 rounded-[9px] border-2 border-stone" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* POSTCODE */}
          {current.kind === "postcode" && (
            <div>
              <h2 className="font-display text-[1.35rem] font-extrabold leading-tight tracking-tight text-ink sm:text-2xl">{current.headline}</h2>
              <p className="mt-2 text-[13px] leading-relaxed text-body sm:text-sm">{current.sub}</p>
              <input
                autoFocus
                value={answers.postcode ?? ""}
                onChange={(e) => setAnswers((a) => ({ ...a, postcode: e.target.value.toUpperCase() }))}
                placeholder="e.g. S1 or LE11"
                autoComplete="postal-code"
                className={cn(FIELD, "mt-5 font-semibold sm:mt-6")}
              />
              <button
                onClick={next}
                disabled={!answers.postcode}
                className="mt-4 min-h-[54px] w-full rounded-full bg-ink px-6 font-display text-[15px] font-bold text-white transition-colors hover:bg-charcoal-deep disabled:opacity-40 sm:text-base"
              >
                Continue
              </button>
            </div>
          )}

          {/* CONTACT */}
          {current.kind === "contact" && (
            <div>
              <h2 className="font-display text-[1.35rem] font-extrabold leading-tight tracking-tight text-ink sm:text-2xl">{current.headline}</h2>
              <p className="mt-2 text-[13px] leading-relaxed text-body sm:text-sm">
                A real member of our team will call you, usually within the hour (office hours). No obligation, and your details are only ever shared with the one adviser we match you to.
              </p>
              <div className="mt-5 space-y-2.5 sm:mt-6 sm:space-y-3">
                <input value={contact.first_name} onChange={(e) => setContact({ ...contact, first_name: e.target.value })} placeholder="First name" autoComplete="given-name" className={FIELD} />
                <input value={contact.phone} onChange={(e) => setContact({ ...contact, phone: e.target.value })} type="tel" inputMode="tel" autoComplete="tel" placeholder="Phone (we'll call you)" className={FIELD} />
                <input value={contact.email} onChange={(e) => setContact({ ...contact, email: e.target.value })} type="email" inputMode="email" autoComplete="email" placeholder="Email" className={FIELD} />
                <input value={contact.best_time} onChange={(e) => setContact({ ...contact, best_time: e.target.value })} placeholder="Best time to call (optional)" className={FIELD} />
              </div>

              <label className="mt-5 flex cursor-pointer items-start gap-3 text-[12px] leading-relaxed text-body sm:text-xs">
                <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} className="mt-0.5 h-5 w-5 shrink-0 accent-stone" />
                <span>
                  I&apos;m happy for IFA Connect to use these details to match me with a suitable independent financial adviser. See our{" "}
                  <Link href="/privacy-policy/" className="underline hover:text-ink">Privacy Policy</Link>.
                </span>
              </label>

              <div className="mt-4 space-y-2 rounded-2xl bg-cream p-4 text-[12px] leading-relaxed text-body sm:text-xs">
                <p className="flex items-start gap-2"><Lock className="mt-0.5 h-3.5 w-3.5 shrink-0 text-stone" /> Your information is secure and only shared with your matched adviser.</p>
                <p className="flex items-start gap-2"><Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-stone" /> We only work with FCA-regulated, independent advisers.</p>
                <p className="flex items-start gap-2"><Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-stone" /> Free, with no obligation to proceed.</p>
              </div>

              <button
                onClick={submit}
                disabled={!contact.first_name || !contact.phone || !consent}
                className="mt-5 min-h-[54px] w-full rounded-full bg-ink px-6 font-display text-[15px] font-bold text-white transition-colors hover:bg-charcoal-deep disabled:opacity-40 sm:text-base"
              >
                Get matched with an adviser
              </button>
              <p className="mt-3 text-center text-[11px] leading-relaxed text-faint">
                IFA Connect introduces you to FCA-regulated independent advisers. We don&apos;t give advice ourselves and there&apos;s no charge to you.
              </p>
            </div>
          )}

          {/* THANK YOU */}
          {current.kind === "thankyou" && (
            <div className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-stone"><ShieldCheck className="h-7 w-7 text-white" /></div>
              <h2 className="mt-5 font-display text-[1.35rem] font-extrabold leading-tight tracking-tight text-ink sm:text-2xl">
                You&apos;re all set — a real person will call you shortly.
              </h2>
              <p className="mt-3 text-[14px] leading-relaxed text-body sm:text-sm">
                One of our team will call you{contact.phone ? ` on ${contact.phone}` : ""}, usually within the hour during office hours, to understand what you need and introduce you to the right independent adviser. There&apos;s no obligation.
              </p>
              <div className="mx-auto mt-6 max-w-sm space-y-2 text-left text-[14px] text-body sm:text-sm">
                <p className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4 shrink-0 text-stone" /> We call you</p>
                <p className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-stone" /> We match you to an independent adviser</p>
                <p className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-stone" /> Free first conversation, no obligation</p>
              </div>
              <Link
                href="/guides/how-much-do-i-need-to-retire/"
                className="mt-7 inline-flex min-h-[48px] items-center gap-2 rounded-full border border-line px-6 text-[14px] font-semibold text-ink transition-colors hover:border-stone hover:text-stone"
              >
                While you wait: how much do I need to retire? <ArrowRight className="h-4 w-4 shrink-0" />
              </Link>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {!isThankYou && (
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
          <button
            onClick={back}
            disabled={step === 0}
            className={cn("self-start text-sm text-body transition-colors hover:text-ink", step === 0 && "invisible")}
          >
            ← Back
          </button>
          <TrustLine />
        </div>
      )}
    </div>
  );
}
