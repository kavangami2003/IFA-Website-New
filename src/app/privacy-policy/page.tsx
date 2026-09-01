import type { Metadata } from "next";
import { PageShell } from "@/components/site/PageShell";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How IFA Connect collects, uses and shares the information you give us when you ask to be introduced to an independent financial adviser.",
  alternates: { canonical: "/privacy-policy/" },
};

export default function PrivacyPolicyPage() {
  return (
    <PageShell
      eyebrow="Legal"
      title="Privacy Policy"
      intro="What we collect when you enquire, why we collect it, who we share it with, and how to get it removed."
      updated="September 2026"
      cta={false}
    >
      <p>
        This policy explains how {site.name} handles personal information. It applies to this website
        and to enquiries made through it.
      </p>
      <p className="text-[13px] text-faint">
        This is a working draft for the staging site. It must be reviewed and completed by the
        business — including the registered company details, ICO registration number and the named
        data controller — before launch.
      </p>

      <h2>Who we are</h2>
      <p>
        {site.name} introduces people looking for financial advice to FCA-regulated independent
        financial advisers. We are not authorised or regulated by the Financial Conduct Authority and
        we do not provide financial advice ourselves. We are the data controller for the information
        you give us through this site.
      </p>

      <h2>What we collect</h2>
      <ul>
        <li>
          <strong>What you tell us in the enquiry form:</strong> your first name, phone number, email
          address, the first part of your postcode, your situation, how soon you want to speak to
          someone, whether you already have an adviser, and a broad band describing your level of
          pensions, investments and savings.
        </li>
        <li>
          <strong>What we learn on the call:</strong> notes taken by our team when we call you to
          understand what you need.
        </li>
        <li>
          <strong>Technical information:</strong> advertising click identifiers and campaign
          parameters carried in the link you arrived on, plus standard server and device information.
        </li>
      </ul>
      <p>
        <strong>We never ask for account numbers, bank details, card details or copies of
        documents</strong>, and we will never ask you to move or transfer money. If anyone contacts
        you claiming to be from {site.name} and asks for any of those things, please do not respond
        and let us know at <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>

      <h2>Why we collect it, and our lawful basis</h2>
      <ul>
        <li>
          <strong>To introduce you to an adviser</strong> — on the basis of your consent, given when
          you submit the enquiry form.
        </li>
        <li>
          <strong>To call you about your enquiry</strong> — on the basis of that same consent. We only
          ever call people who have asked us to.
        </li>
        <li>
          <strong>To measure which of our advertising works</strong> — on the basis of our legitimate
          interest in running the business efficiently.
        </li>
        <li>
          <strong>To send you occasional guides</strong> — only if you separately opt in. That box is
          never pre-ticked, and you can unsubscribe at any time.
        </li>
      </ul>

      <h2>Who we share it with</h2>
      <p>
        Your details are shared with <strong>the one independent adviser we match you to</strong>, and
        only once that adviser has taken on your enquiry. We do not sell your details to a panel of
        advisers, and we do not pass them to anyone else for their own marketing.
      </p>
      <p>
        We also use service providers who process data on our behalf — for example our customer
        relationship management system, our website hosting, and the advertising platforms we use to
        measure campaign performance. They act on our instructions and cannot use your data for their
        own purposes.
      </p>

      <h2>How long we keep it</h2>
      <p>
        We keep enquiry records for as long as needed to provide the introduction and to meet our
        record-keeping obligations, and then delete them. If you ask us to delete your data sooner, we
        will, unless we are required to keep a limited record.
      </p>

      <h2>Your rights</h2>
      <p>
        Under UK data protection law you can ask us for a copy of the personal data we hold about you,
        ask us to correct it, ask us to delete it, object to how we use it, or withdraw a consent you
        have given. Withdrawing consent does not affect anything done before you withdrew it.
      </p>
      <p>
        To exercise any of these, email <a href={`mailto:${site.email}`}>{site.email}</a> or call{" "}
        <a href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a>. If you are unhappy with how
        we have handled your information you can complain to the Information Commissioner&apos;s
        Office at ico.org.uk.
      </p>

      <h2>Cookies and tracking</h2>
      <p>
        We use cookies and similar technologies to make the site work, to understand how it is used,
        and to measure our advertising. Where cookies are not strictly necessary we ask for your
        consent first, and you can change your mind at any time.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        We may update this policy from time to time. The date at the top shows when it was last
        changed.
      </p>
    </PageShell>
  );
}
