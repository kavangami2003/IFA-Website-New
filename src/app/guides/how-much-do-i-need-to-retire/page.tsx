import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/site/PageShell";

export const metadata: Metadata = {
  title: "How Much Do I Need to Retire? | A Plain-English Guide",
  description:
    "A jargon-free walk through the question everyone asks first: how much you need to retire, what actually drives the number, and the questions worth taking to an independent adviser.",
  alternates: { canonical: "/guides/how-much-do-i-need-to-retire/" },
};

const faqs = [
  {
    q: "Is there a single figure that answers this?",
    a: "No. The number depends almost entirely on what you plan to spend, when you stop, and what other income you will have. Two people with identical pots can need very different amounts.",
  },
  {
    q: "Does the State Pension count towards it?",
    a: "Yes, and it is often underestimated. For most people it forms a meaningful base layer of guaranteed, inflation-linked income, which reduces how much the rest of the plan has to produce.",
  },
  {
    q: "What is the biggest mistake people make with this calculation?",
    a: "Working from the size of the pot rather than the shape of the spending. Retirement spending is rarely flat — it is usually higher in the early years, lower in the middle, and can rise again later.",
  },
];

export default function HowMuchGuide() {
  return (
    <>
      <PageShell
        eyebrow="Guide"
        title="How much do I need to retire?"
        intro="It is the first question almost everyone asks, and the one with the least satisfying answer: it depends. This guide explains what it actually depends on, so the conversation with an adviser starts further along."
        updated="September 2026"
      >
        <p>
          You will find plenty of headline figures online — a multiple of your salary, a round number,
          a rule of thumb. They are useful as a sanity check and almost useless as a plan, because
          they answer a question about averages rather than a question about you.
        </p>
        <p>
          The number that matters is the one that comes out of four things: what you intend to spend,
          when you intend to stop, what income you already have coming, and how long the money needs
          to last. Everything else is detail hanging off those four.
        </p>

        <h2>1. Start with spending, not with the pot</h2>
        <p>
          The single most useful thing you can do before speaking to anyone is work out roughly what
          your life costs. Not what you earn — what you spend. Split it into two buckets:
        </p>
        <ul>
          <li>
            <strong>Essential spending.</strong> Housing, bills, food, insurance, transport, health.
            The things that do not stop if markets fall.
          </li>
          <li>
            <strong>Everything else.</strong> Travel, hobbies, helping family, the things that make
            retirement worth having, and which you could flex in a bad year.
          </li>
        </ul>
        <p>
          That split matters more than the total, because it tends to shape how a plan is built:
          guaranteed income covering the essentials, and a flexible, invested layer covering the rest.
        </p>

        <h2>2. Retirement spending is not flat</h2>
        <p>
          People often model retirement as one constant number for thirty years. In practice it
          usually has a shape. The early years — while health and appetite are strongest — tend to be
          the most expensive. Spending often settles in the middle years, and can rise again later if
          care is needed.
        </p>
        <p>
          Planning for an average across all three phases can leave you underspending in the years you
          would most enjoy the money, or short in the years you most need it.
        </p>

        <h2>3. Count the income you already have</h2>
        <p>
          Before working out what your savings need to produce, add up what is already coming. That
          typically includes:
        </p>
        <ul>
          <li>The State Pension, and the age at which you will receive it</li>
          <li>Any defined benefit or final salary pension</li>
          <li>Rental income, or income from a business you retain an interest in</li>
          <li>A partner&apos;s pensions and income, if you are planning jointly</li>
        </ul>
        <p>
          Whatever is left over after that is the gap your pensions, ISAs and other savings actually
          have to fill — and it is usually smaller than the total spending figure people start with.
        </p>

        <h2>4. The gap between stopping and the State Pension</h2>
        <p>
          If you plan to stop before State Pension age, those years are funded entirely by your own
          savings, at your highest spending, with no base layer underneath. That bridging period is
          frequently the part that gets missed, and it can be the most demanding stretch of the whole
          plan.
        </p>

        <h2>5. How long the money has to last</h2>
        <p>
          A modern retirement can run for thirty years or more, which introduces two things a
          spreadsheet handles badly. Inflation quietly erodes what a fixed income buys. And the
          <em> order</em> of investment returns matters: a poor run in the first few years, while you
          are drawing an income, does considerably more damage than the same run later on.
        </p>
        <p>
          This is the point at which most people stop being able to do the maths on the back of an
          envelope, and where an independent adviser genuinely earns their fee.
        </p>

        <h2>6. Tax changes the answer</h2>
        <p>
          Two people with identical pots and identical spending can need materially different amounts,
          purely because of the order in which they draw from pensions, ISAs and other savings, and
          how tax-free cash is used. It is one of the few levers that improves the outcome without
          taking any additional investment risk.
        </p>

        <h2>Questions worth taking to an adviser</h2>
        <ul>
          <li>Given what I actually spend, am I on track — and if not, by how much?</li>
          <li>How much of my essential spending is covered by guaranteed income?</li>
          <li>What does the gap between stopping work and my State Pension look like?</li>
          <li>In what order should I draw from my pensions, ISAs and savings?</li>
          <li>What happens to this plan if markets fall badly in my first five years?</li>
          <li>What would need to change for me to retire two years earlier?</li>
        </ul>

        <h2>Where to go next</h2>
        <p>
          If you want these worked through against your own numbers, that is a conversation with an
          independent, whole-of-market adviser rather than a calculator. We can introduce you to one —
          see <Link href="/retirement/">retirement planning</Link>, or{" "}
          <Link href="/pensions/">pensions</Link> if the first job is working out what you already
          have.
        </p>

        <h2>Common questions</h2>
        {faqs.map((f) => (
          <div key={f.q}>
            <h3>{f.q}</h3>
            <p>{f.a}</p>
          </div>
        ))}

        <p className="text-[13px] text-faint">
          This guide is general information, not financial advice. IFA Connect is not authorised or
          regulated by the FCA and does not provide financial advice. The value of investments can
          fall as well as rise, and tax treatment depends on your individual circumstances and may
          change.
        </p>
      </PageShell>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />
    </>
  );
}
