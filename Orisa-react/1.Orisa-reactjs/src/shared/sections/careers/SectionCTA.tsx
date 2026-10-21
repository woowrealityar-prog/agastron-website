import RevealText from "@/shared/effects/RevealText";

// Careers Section 4 - CTA: Open Application ("Don't see your role?")

const MAIL_ICON = (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
);

export default function SectionCTA() {
    return (
        <section className="sec-9-home-8">
            <div className="sec-9-home-8__bg" aria-hidden="true">
                <img
                    src="/assets/imgs/pages/agastron/cta.webp"
                    alt="Careers at Agastron"
                    width={1920}
                    height={1080}
                    style={{ width: "auto", height: "auto" }}
                    loading="lazy"
                />
            </div>

            <div className="container-fluid sec-9-home-8__container">
                <div className="row align-items-center justify-content-between g-5">
                    {/* Left copy */}
                    <div className="col-xl-6">
                        <div className="sec-9-home-8__content">
                            <h2 className="sec-9-home-8__title at_fade_anim reveal-text">
                                <RevealText>Don&apos;t see your role?</RevealText>
                            </h2>
                            <p className="sec-9-home-8__lead at_fade_anim reveal-text mb-4">
                                <RevealText>
                                    We always welcome talented people. Send us your resume and tell us how you can contribute to our growing multi-vertical enterprise.
                                </RevealText>
                            </p>

                            <div className="sec-9-home-8__cta at_fade_anim">
                                <a
                                    className="sec-9-home-8__cta-btn d-inline-flex align-items-center gap-2"
                                    href="mailto:contact@agastron.com?subject=Open%20Application%20-%20Agastron%20Group"
                                >
                                    <span>Send Open Application</span>
                                </a>
                                <a
                                    className="sec-9-home-8__cta-icon"
                                    href="mailto:contact@agastron.com?subject=Open%20Application%20-%20Agastron%20Group"
                                    aria-label="Send Open Application"
                                >
                                    <img src="/assets/imgs/pages/home-8/sec9-btn-icon.svg" alt="arrow" width={48} height={48} loading="lazy" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right card */}
                    <div className="col-xl-5">
                        <a
                            className="sec-9-home-8__card d-block"
                            href="mailto:contact@agastron.com?subject=Open%20Application%20-%20Agastron%20Group"
                            aria-label="Send Open Application"
                        >
                            <div className="sec-9-home-8__card-media">
                                <img
                                    className="sec-9-home-8__card-visors w-100 scale-img-from-to"
                                    data-value-1="1.5"
                                    data-value-2="1"
                                    src="/assets/imgs/pages/agastron/cta1.webp"
                                    alt="Agastron Open Application"
                                    width={500}
                                    height={350}
                                    loading="lazy"
                                />
                            </div>
                            <div className="sec-9-home-8__card-overlay">
                                <span className="sec-9-home-8__card-kicker">
                                    <span>General Inquiries &amp; Talent</span>
                                    <img src="/assets/imgs/pages/home-8/sec9-arrow.svg" alt="arrow" width={16} height={16} loading="lazy" />
                                </span>
                                <p className="sec-9-home-8__card-text mb-0">
                                    We review every portfolio and CV sent to contact@agastron.com.
                                </p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
