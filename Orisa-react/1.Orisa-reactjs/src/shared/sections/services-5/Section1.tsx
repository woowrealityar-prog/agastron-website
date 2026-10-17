import RevealText from "@/shared/effects/RevealText";

// Services 5 Section 1 - Native Capability Hero

const ARROW_SVG = (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z"
            fill="currentColor"
        />
    </svg>
);

export default function Section1() {
    return (
        <section className="svc5-hero pt-150 pb-80" aria-label="Services overview" data-svc5-hero="">
            <div className="container">
                <div className="svc5-hero__grid">
                    <div className="svc5-hero__main">
                        <div>
                            <span className="at-btn common-black bg-transparent mb-15 rounded-0 p-0 at_fade_anim" data-fade-from="bottom" data-delay=".05">
                                <span className="text-uppercase">
                                    <span className="text-1">Digital Transformation</span>
                                    <span className="text-2">Digital Transformation</span>
                                </span>
                                <i>
                                    {ARROW_SVG}
                                    {ARROW_SVG}
                                </i>
                            </span>
                        </div>
                        <h1 className="svc5-hero__title reveal-text mb-0">
                            <RevealText>Digital</RevealText>{" "}
                            <span className="svc5-hero__title-line">
                                <RevealText>Transformation</RevealText>
                            </span>
                        </h1>
                    </div>
                    <div className="svc5-hero__aside at_fade_anim" data-fade-from="bottom" data-delay=".15">
                        <p className="svc5-hero__lead mb-0">
                            We help organisations shed legacy constraints and embrace the digital future — faster, smarter, and future-proof.
                        </p>
                    </div>
                </div>

                <div
                    className="svc5-hero__media at_fade_anim"
                    data-fade-from="bottom"
                    data-delay=".25"
                    data-svc5-hero-media=""
                >
                    <img
                        className="anim-zoomin"
                        src="/assets/imgs/pages/img-153.webp"
                        alt="Agastron Digital Transformation"
                        width={1920}
                        height={570}
                        loading="lazy"
                    />
                    <div className="svc5-hero__media-tag">
                        <span>Enterprise · Digital-First</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
