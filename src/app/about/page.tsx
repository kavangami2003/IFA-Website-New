import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/site/PageShell";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About IFA Connect | Independent Advisers, Matched by a Person",
  description:
    "Why IFA Connect exists, how we vet advisers, and what makes an introduction from us different from a directory listing. Independent advisers only, matched by a real person.",
  alternates: { canonical: "/about/" },
};

export default function AboutPage() {
  return (
    <PageShell
      eyebrow="About us"
      title="We find the best independent advisers in the UK, and make sure people can reach them."
      intro="IFA Connect is not a directory. Every enquiry is spoken to by a real person, and every introduction is to a single, hand-picked adviser who is genuinely independent."
    >
      <h2>Why we exist</h2>
      <p>
        Our founder, Sam, spent nearly a decade at a large restricted firm — a good business with an
        interesting strategy, but one that could only ever offer a single fund. Two things became
        obvious from the inside. Plenty of clients wanted a more diversified portfolio than that model
        allowed. And the quality of advisers across the UK varies enormously.
      </p>
      <p>
        There are excellent advisers in this country, and there are lazy ones who overcharge and
        under-serve. From the outside, clients usually have no way of telling the difference. IFA
        Connect was built to close that gap: to find the good ones, and to make sure people looking
        for advice can actually get to them.
      </p>

      <h2>Two things make us different</h2>
      <h3>1. We only work with genuinely independent advisers</h3>
      <p>
        A restricted adviser can only recommend from a limited range of products. An independent,
        whole-of-market adviser can recommend from everything available, and is free to choose what
        genuinely suits you. We never introduce restricted advisers — not as a policy we bend, as the
        thing the business is built on.
      </p>
      <h3>2. Every enquiry speaks to a human</h3>
      <p>
        There is no algorithm making the match. A member of our team calls you, usually within the
        hour during office hours, to understand your situation, your timescale and roughly what level
        of assets an adviser would be working with. Only then do we introduce you — to one adviser,
        chosen for you.
      </p>

      <h2>How we vet advisers</h2>
      <p>
        Every adviser starts with an introduction call, so we understand how their business runs and
        what they genuinely specialise in. That is followed by background checks: previous client
        reviews, time in the industry, business reviews and more.
      </p>
      <p>
        Financial advice is fundamentally about people and relationships, and a conversation reveals
        a great deal about quality very quickly. We would rather have a smaller network of advisers
        we would send our own family to than a long list of everyone who applied.
      </p>

      <h2>What it costs you</h2>
      <p>
        Nothing. Advisers pay us to be introduced to people looking for advice — that is how the
        service is funded. It does not change the fees your adviser charges you, and you are never
        under any obligation to proceed after the introductory conversation.
      </p>

      <h2>What we are not</h2>
      <p>
        IFA Connect is not authorised or regulated by the Financial Conduct Authority, and we do not
        give financial advice. We collect information from people looking for an adviser and
        introduce them to FCA-regulated independent advisers. We do not recommend products, we do not
        tell anyone what to do with their money, and we never ask you to move or transfer funds.
      </p>
      <p>
        If you would like to talk to us directly, call{" "}
        <a href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a> or email{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>. If you are an adviser, our{" "}
        <Link href="/for-advisers/">network page</Link> has the detail.
      </p>
    </PageShell>
  );
}
