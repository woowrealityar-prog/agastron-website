import RevealText from "@/shared/effects/RevealText";

export default function SectionTermsContent() {
  return (
    <section className="sec-terms pt-150 pb-120 bg-neutral-0">
      <div className="container">
        {/* Header / Intro */}
        <div className="row mb-60">
          <div className="col-lg-10 col-xl-8">
            <span className="at-btn common-black bg-transparent mb-15 rounded-0 p-0 text-uppercase fz-font-sm fw-600">
              Legal &amp; Compliance
            </span>
            <h1 className="section-title fw-600 lh-1 reveal-text mb-20">
              <RevealText>Terms of Service</RevealText>
            </h1>
            <p className="neutral-500 fz-font-md mb-0">
              Last updated: March 2026
            </p>
          </div>
        </div>

        {/* Terms Body */}
        <div className="row">
          <div className="col-lg-10 col-xl-9">
            <div className="terms-content d-flex flex-column gap-5">

              {/* About These Terms */}
              <div className="terms-block">
                <h3 className="fw-600 fz-24 mb-3 text-neutral-900">About These Terms</h3>
                <p className="neutral-700 fz-font-lg lh-base mb-0">
                  These terms govern your use of <a href="https://www.agastron.com" className="text-decoration-underline text-neutral-900" target="_blank" rel="noopener noreferrer">www.agastron.com</a>, operated by Agastron Group LLC (&ldquo;Agastron&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;). By using this website, you agree to these terms. If you do not agree, please do not use the website.
                </p>
              </div>

              {/* Purpose of This Website */}
              <div className="terms-block">
                <h3 className="fw-600 fz-24 mb-3 text-neutral-900">Purpose of This Website</h3>
                <p className="neutral-700 fz-font-lg lh-base mb-0">
                  This website provides general information about Agastron and its group businesses. It is for information only. Nothing on it is professional, legal, financial or investment advice.
                </p>
              </div>

              {/* Not an Offer of Securities */}
              <div className="terms-block">
                <h3 className="fw-600 fz-24 mb-3 text-neutral-900">Not an Offer of Securities</h3>
                <p className="neutral-700 fz-font-lg lh-base mb-0">
                  Nothing on this website is an offer to sell, or a solicitation of an offer to buy, any shares, securities or investment in Agastron or any of its group businesses. Any investment opportunity will be made only through formal documentation and in compliance with applicable law.
                </p>
              </div>

              {/* Group Businesses and Linked Websites */}
              <div className="terms-block">
                <h3 className="fw-600 fz-24 mb-3 text-neutral-900">Group Businesses and Linked Websites</h3>
                <p className="neutral-700 fz-font-lg lh-base mb-0">
                  This website links to the websites of our group businesses and to third-party sites. Each group business operates its own platform under its own terms and policies. We are not responsible for the content or practices of third-party websites.
                </p>
              </div>

              {/* Intellectual Property */}
              <div className="terms-block">
                <h3 className="fw-600 fz-24 mb-3 text-neutral-900">Intellectual Property</h3>
                <p className="neutral-700 fz-font-lg lh-base mb-0">
                  All content on this website, including text, graphics, logos, brand names and design, is owned by or licensed to Agastron or its group businesses. You may view and share pages for personal or internal business reference. You may not copy, modify, republish or use our content or brand names for any other purpose without our written permission.
                </p>
              </div>

              {/* Acceptable Use */}
              <div className="terms-block">
                <h3 className="fw-600 fz-24 mb-3 text-neutral-900">Acceptable Use</h3>
                <p className="neutral-700 fz-font-lg lh-base mb-3">
                  You agree not to:
                </p>
                <ul className="neutral-700 fz-font-lg lh-base ps-4 mb-0 d-flex flex-column gap-2">
                  <li>Use the website for any unlawful purpose</li>
                  <li>Attempt to gain unauthorised access to the website or its systems</li>
                  <li>Introduce viruses or other harmful code</li>
                  <li>Scrape, copy or harvest content or data from the website by automated means without our permission</li>
                  <li>Misrepresent your identity or affiliation when contacting us</li>
                </ul>
              </div>

              {/* Accuracy of Information */}
              <div className="terms-block">
                <h3 className="fw-600 fz-24 mb-3 text-neutral-900">Accuracy of Information</h3>
                <p className="neutral-700 fz-font-lg lh-base mb-0">
                  We aim to keep the information on this website accurate and up to date, but we make no guarantee that it is complete, current or error-free. Descriptions of products, services and capabilities are general and may change without notice.
                </p>
              </div>

              {/* Limitation of Liability */}
              <div className="terms-block">
                <h3 className="fw-600 fz-24 mb-3 text-neutral-900">Limitation of Liability</h3>
                <p className="neutral-700 fz-font-lg lh-base mb-0">
                  The website is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo;. To the fullest extent permitted by law, Agastron is not liable for any loss or damage arising from your use of, or reliance on, this website or any linked website.
                </p>
              </div>

              {/* Changes to These Terms */}
              <div className="terms-block">
                <h3 className="fw-600 fz-24 mb-3 text-neutral-900">Changes to These Terms</h3>
                <p className="neutral-700 fz-font-lg lh-base mb-0">
                  We may update these terms at any time. The &ldquo;Last updated&rdquo; date at the top shows when they were last changed. Continued use of the website means you accept the updated terms.
                </p>
              </div>

              {/* Governing Law */}
              <div className="terms-block">
                <h3 className="fw-600 fz-24 mb-3 text-neutral-900">Governing Law</h3>
                <p className="neutral-700 fz-font-lg lh-base mb-0">
                  These terms are governed by the laws of India. Any disputes will be subject to the exclusive jurisdiction of the courts at Hyderabad.
                </p>
              </div>

              {/* Contact Us */}
              <div className="terms-block p-4 p-md-5 rounded-4 bg-neutral-50 border border-neutral-200">
                <h3 className="fw-600 fz-24 mb-2 text-neutral-900">Contact Us</h3>
                <p className="neutral-700 fz-font-lg mb-3">
                  For questions about these terms of service:
                </p>
                <p className="mb-0 fz-font-lg">
                  <span className="fw-600 text-neutral-900">Email: </span>
                  <a href="mailto:contact@agastron.com" className="text-decoration-underline text-neutral-900">
                    contact@agastron.com
                  </a>
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
