import RevealText from "@/shared/effects/RevealText";

// Careers Section 1 - Hero (Join Agastron)

const ARROW_SVG = (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z"
            fill="currentColor"
        />
    </svg>
);

export default function SectionHero() {
    return (
        <section className="sec-1-services overflow-hidden">
            <div className="bg-neutral-50">
                <div className="container">
                    <div className="row align-items-center p-relative">
                        <div className="col-xxl-6 col-lg-6 pt-lg-0 pt-100">
                            <span className="at-btn common-black bg-transparent mb-30 rounded-0 p-0">
                                <span className="text-uppercase">
                                    <span className="text-1">Careers</span>
                                    <span className="text-2">Careers</span>
                                </span>
                                <i>
                                    {ARROW_SVG}
                                    {ARROW_SVG}
                                </i>
                            </span>
                            <h1
                                className="section-title fw-600 fz-180 reveal-text mb-0"
                                style={{
                                    letterSpacing: "-0.04em",
                                }}
                            >
                                <span className="d-block" style={{ lineHeight: 0.85 }}>
                                    <RevealText>Join</RevealText>
                                </span>
                                <span
                                    className="d-block"
                                    style={{
                                        lineHeight: 0.85,
                                        marginTop: "-0.08em",
                                    }}
                                >
                                    <RevealText>Agastron</RevealText>
                                </span>
                            </h1>
                            <div className="col-lg-11 pt-40">
                                <h6 className="fw-500 fz-font-lg reveal-text mb-30">
                                    <RevealText>
                                        At Agastron Group LLC, we are building the governance and infrastructure layer for high-growth businesses. Join our group leadership team and shape the future of a multi-vertical enterprise.
                                    </RevealText>
                                </h6>
                                <div className="at-service-btn pt-10">
                                    <a
                                        href="mailto:contact@agastron.com"
                                        className="at-btn"
                                    >
                                        <span>
                                            <span className="text-1">Send Your CV</span>
                                            <span className="text-2">Send Your CV</span>
                                        </span>
                                        <i>
                                            {ARROW_SVG}
                                            {ARROW_SVG}
                                        </i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-xxl-6 col-lg-6 scene at_fade_anim"
                            data-speed=".8"
                            data-delay=".4"
                            data-fade-from="bottom"
                            data-ease="bounce"
                        >
                            <div data-speed=".8" className="pt-lg-0 pt-50 text-center">
                                <img
                                    src="/assets/imgs/pages/img-155.webp"
                                    alt="Join Agastron"
                                    width={1900}
                                    height={800}
                                    style={{ width: "100%", height: "auto", objectFit: "contain" }}
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
