import RevealText from "@/shared/effects/RevealText";

export default function SectionCookieContent() {
  return (
    <section className="sec-cookies pt-150 pb-120 bg-neutral-0">
      <div className="container">
        {/* Header / Intro */}
        <div className="row mb-60">
          <div className="col-lg-10 col-xl-8">
            <span className="at-btn common-black bg-transparent mb-15 rounded-0 p-0 text-uppercase fz-font-sm fw-600">
              Legal &amp; Compliance
            </span>
            <h1 className="section-title fw-600 lh-1 reveal-text mb-20">
              <RevealText>Cookie Policy</RevealText>
            </h1>
            <p className="neutral-500 fz-font-md mb-0">
              Last updated: March 2026
            </p>
          </div>
        </div>

        {/* Content Body */}
        <div className="row">
          <div className="col-lg-10 col-xl-9">
            <div className="cookie-content d-flex flex-column gap-5">

              {/* What Are Cookies? */}
              <div className="cookie-block">
                <h3 className="fw-600 fz-24 mb-3 text-neutral-900">What Are Cookies?</h3>
                <p className="neutral-700 fz-font-lg lh-base mb-0">
                  Cookies are small text files stored on your device when you visit a website. They help the website work properly and help the owner understand how it is used. Similar technologies, such as local storage, work in the same way.
                </p>
              </div>

              {/* How We Use Cookies */}
              <div className="cookie-block">
                <h3 className="fw-600 fz-24 mb-3 text-neutral-900">How We Use Cookies</h3>
                <p className="neutral-700 fz-font-lg lh-base mb-3">
                  This website uses a small number of cookies and similar technologies:
                </p>
                <div className="d-flex flex-column gap-3 mb-3 ps-2">
                  <div className="border-start border-2 border-neutral-300 ps-3">
                    <h6 className="fw-600 fz-font-lg text-neutral-900 mb-1">Essential</h6>
                    <p className="neutral-700 fz-font-md lh-base mb-0">
                      These are needed for the website to work and to keep it secure. You cannot switch them off.
                    </p>
                  </div>
                  <div className="border-start border-2 border-neutral-300 ps-3">
                    <h6 className="fw-600 fz-font-lg text-neutral-900 mb-1">Preferences</h6>
                    <p className="neutral-700 fz-font-md lh-base mb-0">
                      These remember choices you make, such as your light, dark or auto display setting.
                    </p>
                  </div>
                  <div className="border-start border-2 border-neutral-300 ps-3">
                    <h6 className="fw-600 fz-font-lg text-neutral-900 mb-1">Analytics</h6>
                    <p className="neutral-700 fz-font-md lh-base mb-0">
                      These help us understand how visitors use the website, such as which pages are viewed most, so we can improve it. The information is collected in aggregate.
                    </p>
                  </div>
                </div>
                <p className="neutral-700 fz-font-lg lh-base mb-0">
                  We do not use advertising or tracking cookies.
                </p>
              </div>

              {/* Managing Cookies */}
              <div className="cookie-block">
                <h3 className="fw-600 fz-24 mb-3 text-neutral-900">Managing Cookies</h3>
                <p className="neutral-700 fz-font-lg lh-base mb-0">
                  You can block or delete cookies through your browser settings. Blocking essential cookies may affect how the website works. To learn how, check the help section of your browser.
                </p>
              </div>

              {/* Changes to This Policy */}
              <div className="cookie-block">
                <h3 className="fw-600 fz-24 mb-3 text-neutral-900">Changes to This Policy</h3>
                <p className="neutral-700 fz-font-lg lh-base mb-0">
                  We may update this policy if the cookies we use change. The &ldquo;Last updated&rdquo; date at the top shows when it was last changed.
                </p>
              </div>

              {/* Contact Us */}
              <div className="cookie-block p-4 p-md-5 rounded-4 bg-neutral-50 border border-neutral-200">
                <h3 className="fw-600 fz-24 mb-2 text-neutral-900">Contact Us</h3>
                <p className="neutral-700 fz-font-lg mb-3">
                  For questions about this policy:
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
