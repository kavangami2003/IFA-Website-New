import Script from "next/script";

/** Trustpilot "Micro Combo" TrustBox — renders "Excellent · 4.6 out of 5 · ★ Trustpilot". */
const TRUSTBOX = {
  templateId: "5419b637fa0340045cd0c936",
  businessunitId: "67bd8b8c3abf0d2eed0ebd69",
  token: "728df255-111a-499b-ba11-14c58c88bfb9",
};

export const reviews = [
  { q: "Professional but informal: after a ten minute chat I was set up with a financial adviser. Really easy and friendly.", name: "Graham" },
  { q: "They took time to assess my specific needs and match me up with a financial adviser with appropriate expertise.", name: "David" },
  { q: "A personal, tailored service like this is invaluable and very reassuring.", name: "Louise" },
  { q: "Asked the right questions, no pushing particular products, and put me in touch with an independent FCA adviser in my area.", name: "Lucie" },
  { q: "I was quickly assigned to an IFA who helped me more with my pension than I've received elsewhere.", name: "Natalie" },
  { q: "Kya took the worry out of finding the right company to work with, and it was all done within 24 hours.", name: "Ruth" },
  { q: "Communication with IFA Connect was first class at all stages, and the local IFA is of high calibre.", name: "Firghil" },
  { q: "Luke put me in touch with a financial adviser who met my needs. Excellent, quick and friendly service.", name: "Adrian" },
  { q: "A great experience. I got connected with the adviser very quickly, thanks!", name: "Paulina" },
  { q: "Luke responded within the day and proposed an IFA. The introductory call went well and we are exploring further.", name: "Mr Makin" },
  { q: "I was put in touch with a local financial adviser and his help has been great thus far.", name: "Mrs Mclean" },
  { q: "Luke was very understanding as I am hard of hearing, and I have a home visit arranged with a financial adviser.", name: "Arwyn" },
  { q: "Great way to find an independent adviser. Highly recommended.", name: "Glenn" },
  { q: "Early days but it seems you have matched me with a suitable IFA. Thanks.", name: "Margaret" },
];

/**
 * Trustpilot proof rail. Sits immediately under the hero so the first scroll is
 * social proof rather than another headline.
 *
 * The rating line is Trustpilot's own TrustBox — it needs their bootstrap script
 * to hydrate the placeholder div into the "Excellent · 4.6 out of 5" widget, so
 * the script loads alongside it. The review cards below are our own markup; the
 * row is duplicated so the -50% keyframe loops seamlessly, and the duplicate is
 * hidden from assistive tech.
 */
export function TrustpilotStrip() {
  return (
    <section className="tp-strip" aria-label="Trustpilot reviews">
      <Script
        src="https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
        strategy="afterInteractive"
      />

      <div className="tp-head-widget">
        <div
          className="trustpilot-widget"
          data-locale="en-GB"
          data-template-id={TRUSTBOX.templateId}
          data-businessunit-id={TRUSTBOX.businessunitId}
          data-style-height="24px"
          data-style-width="100%"
          data-theme="light"
          data-token={TRUSTBOX.token}
        >
          <a
            href="https://uk.trustpilot.com/review/ifaconnect.co.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="tp-fallback"
          >
            Trustpilot
          </a>
        </div>
      </div>

      <div className="tp-marquee">
        <div className="tp-track">
          {[...reviews, ...reviews].map((r, i) => (
            <figure className="tp-card" key={i} aria-hidden={i >= reviews.length}>
              <span className="stars" aria-hidden>★★★★★</span>
              <blockquote className="quote">
                &ldquo;{r.q}&rdquo; <span className="name">· {r.name}</span>
              </blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
