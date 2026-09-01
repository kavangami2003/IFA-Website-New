import type { Metadata } from "next";
import { PageShell } from "@/components/site/PageShell";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms on which you may use the IFA Connect website and our introduction service, including our regulatory position and the limits of what we do.",
  alternates: { canonical: "/terms/" },
};

export default function TermsPage() {
  return (
    <PageShell
      eyebrow="Legal"
      title="Terms of Service"
      intro="The terms on which you use this website and our introduction service."
      updated="September 2026"
      cta={false}
    >
      <p>
        These terms apply to your use of the {site.name} website and to any enquiry you make through
        it. By using the site you accept them.
      </p>
      <p className="text-[13px] text-faint">
        This is a working draft for the staging site. It must be reviewed and completed by the
        business — including registered company details and governing-law provisions — and signed off
        by an authorised firm before launch.
      </p>

      <h2>What we do, and what we do not do</h2>
      <p>
        {site.name} is an introduction service. We collect information from people looking for
        financial advice and introduce them to independent financial advisers who are authorised and
        regulated by the Financial Conduct Authority.
      </p>
      <p>
        <strong>
          We are not authorised or regulated by the Financial Conduct Authority, and we do not provide
          financial advice.
        </strong>{" "}
        Nothing on this website is a personal recommendation, and nothing here should be relied on as
        advice about what to do with your money. We do not recommend products, we do not advise on
        investments, and we are not a party to any agreement you go on to make with an adviser.
      </p>

      <h2>The introduction</h2>
      <p>
        Where we can, we introduce you to one independent adviser we consider suitable for your
        situation. We cannot guarantee that an introduction will be available in every case, that any
        particular adviser will take you on, or that the introduction will lead to any particular
        outcome.
      </p>
      <p>
        Any advice you receive is given by the adviser, not by us. Your relationship, your agreement
        and any fees are between you and that adviser. Their regulatory protections — including access
        to the Financial Ombudsman Service and the Financial Services Compensation Scheme, where
        applicable — apply to their advice, not to our introduction.
      </p>

      <h2>What it costs you</h2>
      <p>
        There is no charge to you for using this service. Advisers pay us to receive introductions.
        This does not change the fees an adviser charges you, and you are under no obligation to
        proceed after an introductory conversation.
      </p>

      <h2>Your responsibilities</h2>
      <ul>
        <li>The information you give us must be accurate and your own.</li>
        <li>You must be at least 18 and resident in the United Kingdom.</li>
        <li>
          You must not use the site unlawfully, attempt to interfere with it, or submit enquiries on
          someone else&apos;s behalf without their permission.
        </li>
      </ul>

      <h2>Information on this site</h2>
      <p>
        The content here is general information about financial topics, published in good faith and
        believed accurate at the time of writing. Tax rules, allowances and regulations change. It is
        not tailored to your circumstances and should not be treated as a substitute for advice from a
        regulated adviser.
      </p>
      <p>
        Where investments are mentioned: the value of investments and any income from them can fall as
        well as rise, and you may get back less than you invest. Past performance is not a guide to
        future performance. Tax treatment depends on your individual circumstances and may change.
      </p>

      <h2>Liability</h2>
      <p>
        We do not exclude liability for death or personal injury caused by our negligence, for fraud,
        or for anything else that cannot lawfully be excluded. Subject to that, we are not liable for
        the advice, acts or omissions of any adviser we introduce you to, or for any loss arising from
        decisions you take about your money.
      </p>

      <h2>Intellectual property</h2>
      <p>
        The content, branding and design of this site belong to {site.name} or our licensors, and may
        not be reproduced without permission.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about these terms: <a href={`mailto:${site.email}`}>{site.email}</a> or{" "}
        <a href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a>.
      </p>
    </PageShell>
  );
}
