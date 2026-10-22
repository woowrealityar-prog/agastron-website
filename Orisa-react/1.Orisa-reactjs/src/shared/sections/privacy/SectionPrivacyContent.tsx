import RevealText from "@/shared/effects/RevealText";

export default function SectionPrivacyContent() {
  return (
    <section className="sec-privacy pt-150 pb-120 bg-neutral-0">
      <div className="container">
        {/* Header / Intro */}
        <div className="row mb-60">
          <div className="col-lg-10 col-xl-8">
            <span className="at-btn common-black bg-transparent mb-15 rounded-0 p-0 text-uppercase fz-font-sm fw-600">
              Legal &amp; Compliance
            </span>
            <h1 className="section-title fw-600 lh-1 reveal-text mb-20">
              <RevealText>Privacy Policy</RevealText>
            </h1>
            <p className="neutral-500 fz-font-md mb-0">
              Last updated: March 2026
            </p>
          </div>
        </div>

        {/* Policy Body */}
        <div className="row">
          <div className="col-lg-10 col-xl-9">
            <div className="policy-content d-flex flex-column gap-5">
              
              {/* Who We Are */}
              <div className="policy-block">
                <h3 className="fw-600 fz-24 mb-3 text-neutral-900">Who We Are</h3>
                <p className="neutral-700 fz-font-lg lh-base mb-3">
                  This website, <a href="https://www.agastron.com" className="text-decoration-underline text-neutral-900" target="_blank" rel="noopener noreferrer">www.agastron.com</a>, is operated by Agastron Group LLC (&ldquo;Agastron&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;).
                </p>
                <p className="neutral-700 fz-font-lg lh-base mb-0">
                  This policy explains what personal information we collect through this website, how we use it, and the choices you have. It applies only to agastron.com. Our group businesses (RulerInsights, Aranidhi, NeoFairs and Mayvrion) operate their own websites and platforms, each with its own privacy policy.
                </p>
              </div>

              {/* Information We Collect */}
              <div className="policy-block">
                <h3 className="fw-600 fz-24 mb-3 text-neutral-900">Information We Collect</h3>
                <div className="mb-3">
                  <h6 className="fw-600 fz-font-lg text-neutral-900 mb-2">Information you send us</h6>
                  <p className="neutral-700 fz-font-lg lh-base mb-0">
                    When you email us, call us, request a demo or apply for a role, we receive what you choose to share. This may include your name, email address, phone number, company, job title, the content of your message, and, for job applications, your CV and any details in it.
                  </p>
                </div>
                <div className="mb-3">
                  <h6 className="fw-600 fz-font-lg text-neutral-900 mb-2">Information collected automatically</h6>
                  <p className="neutral-700 fz-font-lg lh-base mb-0">
                    When you visit the website, we may collect basic technical information such as your IP address, browser type, device type, pages visited and time spent on the site. We collect this through cookies and similar technologies. See our Cookie Policy for details.
                  </p>
                </div>
                <p className="neutral-700 fz-font-lg lh-base mb-0">
                  We do not knowingly collect information from anyone under 18.
                </p>
              </div>

              {/* How We Use Your Information */}
              <div className="policy-block">
                <h3 className="fw-600 fz-24 mb-3 text-neutral-900">How We Use Your Information</h3>
                <p className="neutral-700 fz-font-lg lh-base mb-3">
                  We use your information to:
                </p>
                <ul className="neutral-700 fz-font-lg lh-base ps-4 mb-3 d-flex flex-column gap-2">
                  <li>Respond to your enquiries and requests</li>
                  <li>Arrange demos, meetings and business discussions</li>
                  <li>Assess job applications and contact candidates</li>
                  <li>Understand how visitors use the website and improve it</li>
                  <li>Keep the website secure and prevent misuse</li>
                  <li>Meet our legal and regulatory obligations</li>
                </ul>
                <p className="neutral-700 fz-font-lg lh-base mb-0">
                  We do not sell your personal information. We do not use it for automated decision-making that has legal or similarly significant effects on you.
                </p>
              </div>

              {/* Sharing Your Information */}
              <div className="policy-block">
                <h3 className="fw-600 fz-24 mb-3 text-neutral-900">Sharing Your Information</h3>
                <p className="neutral-700 fz-font-lg lh-base mb-3">
                  We may share your information with:
                </p>
                <ul className="neutral-700 fz-font-lg lh-base ps-4 mb-0 d-flex flex-column gap-2">
                  <li>Our group businesses, where your enquiry relates to one of them (for example, a question about NeoFairs passed to the NeoFairs team)</li>
                  <li>Service providers who support us, such as email, hosting and analytics providers, who may use your information only to provide services to us</li>
                  <li>Authorities or advisers, where required by law or needed to protect our legal rights</li>
                </ul>
              </div>

              {/* International Transfers */}
              <div className="policy-block">
                <h3 className="fw-600 fz-24 mb-3 text-neutral-900">International Transfers</h3>
                <p className="neutral-700 fz-font-lg lh-base mb-0">
                  We are based in India. Some of our service providers, such as email and hosting providers, may process information outside India. Where this happens, we take reasonable steps to ensure your information remains protected, as required by applicable law.
                </p>
              </div>

              {/* How Long We Keep Information */}
              <div className="policy-block">
                <h3 className="fw-600 fz-24 mb-3 text-neutral-900">How Long We Keep Information</h3>
                <p className="neutral-700 fz-font-lg lh-base mb-0">
                  We keep enquiry and business correspondence for as long as needed to respond and maintain our business relationship. We keep job applications for up to 12 months after the role is filled, unless you ask us to delete them sooner. After that, we delete or anonymise the information.
                </p>
              </div>

              {/* Your Rights */}
              <div className="policy-block">
                <h3 className="fw-600 fz-24 mb-3 text-neutral-900">Your Rights</h3>
                <p className="neutral-700 fz-font-lg lh-base mb-3">
                  You may have the right to:
                </p>
                <ul className="neutral-700 fz-font-lg lh-base ps-4 mb-3 d-flex flex-column gap-2">
                  <li>Access the personal information we hold about you</li>
                  <li>Correct inaccurate or incomplete information</li>
                  <li>Ask us to delete your information</li>
                  <li>Withdraw consent where we rely on it</li>
                  <li>Object to or restrict certain processing</li>
                  <li>Raise a grievance or complaint with us or with the relevant data protection authority</li>
                </ul>
                <p className="neutral-700 fz-font-lg lh-base mb-0">
                  To exercise any of these rights, email <a href="mailto:contact@agastron.com" className="text-decoration-underline text-neutral-900 fw-600">contact@agastron.com</a>. We will respond within 30 days.
                </p>
              </div>

              {/* Security */}
              <div className="policy-block">
                <h3 className="fw-600 fz-24 mb-3 text-neutral-900">Security</h3>
                <p className="neutral-700 fz-font-lg lh-base mb-0">
                  We use reasonable technical and organisational measures to protect your information. No method of transmission or storage is completely secure, so we cannot guarantee absolute security.
                </p>
              </div>

              {/* Changes to This Policy */}
              <div className="policy-block">
                <h3 className="fw-600 fz-24 mb-3 text-neutral-900">Changes to This Policy</h3>
                <p className="neutral-700 fz-font-lg lh-base mb-0">
                  We may update this policy from time to time. The &ldquo;Last updated&rdquo; date at the top shows when it was last changed.
                </p>
              </div>

              {/* Contact Us */}
              <div className="policy-block p-4 p-md-5 rounded-4 bg-neutral-50 border border-neutral-200">
                <h3 className="fw-600 fz-24 mb-2 text-neutral-900">Contact Us</h3>
                <p className="neutral-700 fz-font-lg mb-3">
                  For questions about this policy or your personal information:
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
