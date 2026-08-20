import { Reveal } from "./Reveal";
import { Counter } from "./Counter";

const items = [
  { n: <Counter to={130} suffix="+" />, l: "Independent, whole-of-market advisers" },
  { n: "< 1hr", l: "A real person calls you back" },
  { n: <Counter prefix="£" to={250} suffix="k+" />, l: "Portfolios matched with a specialist" },
];

export function TrustBar() {
  return (
    <section className="bg-charcoal text-white">
      <div className="container-page grid grid-cols-1 divide-y divide-white/12 md:grid-cols-3 md:divide-x md:divide-y-0">
        {items.map((s, i) => (
          <Reveal key={i} delay={i * 0.12} className="px-2 py-12 md:px-8">
            <div className="numeral text-white">{s.n}</div>
            <div className="index-label mt-4 text-on-charcoal">{s.l}</div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
