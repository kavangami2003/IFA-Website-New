import { Reveal } from "./Reveal";
import { Button } from "@/components/ui/Button";

const steps = [
  { n: "01", t: "Answer a few questions", d: "Two minutes. Confidential and secure." },
  { n: "02", t: "A real person calls you", d: "Usually within the hour, in office hours." },
  { n: "03", t: "Meet your adviser", d: "Introduced to a vetted independent adviser for a free, no-obligation chat." },
];

export function Steps({ cta = "Find my adviser", href = "/find-a-financial-adviser/", invert = false }: { cta?: string; href?: string; invert?: boolean }) {
  return (
    <div>
      <div className="grid gap-px md:grid-cols-3">
        {steps.map((s, i) => (
          <Reveal key={s.n} delay={i * 0.12} className={invert ? "border-t border-white/15 pt-6" : "border-t border-line pt-6"}>
            <div className="numeral text-stone/80">{s.n}</div>
            <h3 className={`mt-4 display-3 ${invert ? "text-white" : ""}`}>{s.t}</h3>
            <p className={`mt-2 max-w-xs text-[15px] ${invert ? "text-on-charcoal" : "text-body"}`}>{s.d}</p>
          </Reveal>
        ))}
      </div>
      <Reveal delay={0.24} className="mt-10">
        <Button href={href} variant={invert ? "onDark" : "primary"} size="lg">{cta}</Button>
      </Reveal>
    </div>
  );
}
