import RevealText from "@/shared/effects/RevealText";

// About 1 Section 2 - Who We Are (Index-8 sec-3-home-8 style)

const ARROW_SVG = (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z"
            fill="currentColor"
        />
    </svg>
);

const TAGS = [
    "AI-Driven IT Services",
    "Financial Intelligence",
    "Governance Intelligence",
    "MSME Global Trade",
    "Centralised Capital",
    "Brand Governance",
];

export default function SectionWhoWeAre() {
    return (
        <section className="sec-3-home-8 pt-100 pb-100">
            <div className="container-fluid sec-3-home-8__container">
                <div className="row align-items-start justify-content-between g-5 g-xxl-0">
                    {/* LEFT: typography + tags */}
                    <div className="col-xxl-5 col-xl-5 col-lg-6 col-12">
                        <span className="at-btn common-black bg-transparent mb-15 rounded-0 p-0">
                            <span className="text-uppercase">
                                <span className="text-1">Who We Are</span>
                                <span className="text-2">Who We Are</span>
                            </span>
                            <i>
                                {ARROW_SVG}
                                {ARROW_SVG}
                            </i>
                        </span>
                        <h2 className="sec-3-home-8__title at_fade_anim reveal-text mb-25" data-start="100%" data-delay=".1" data-fade-from="bottom">
                            <RevealText>
                                A unified holding enterprise building <span className="sec-3-home-8__title-accent">institutions of scale</span>
                            </RevealText>
                        </h2>
                        <p className="sec-3-home-8__lead at_fade_anim fz-font-lg lh-base mb-35" data-start="100%" data-delay=".2" data-fade-from="bottom">
                            Agastron Group LLC is a unified holding enterprise that owns and governs four high-growth subsidiary businesses spanning AI-driven IT services, financial intelligence, governance intelligence, and MSME global trade. Founded to build institutions of scale, Agastron provides centralised capital, strategic direction, compliance, and brand governance to its subsidiaries while protecting the group&apos;s intellectual property and ensuring structural integrity across verticals.
                        </p>
                        <div className="sec-3-home-8__tags d-flex flex-wrap at_fade_anim" data-start="100%" data-delay=".3" data-fade-from="bottom">
                            {TAGS.map((tag, i) => (
                                <span key={i} className="sec-3-home-8__tag">{tag}</span>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT: two staggered photos */}
                    <div className="col-xxl-6 col-xl-7 col-lg-6 col-12 mt-lg-0 mt-4">
                        <div className="sec-3-home-8__media d-flex justify-content-xxl-end justify-content-lg-end justify-content-center align-items-start">
                            <div className="sec-3-home-8__photo sec-3-home-8__photo--narrow anim-zoomin-wrap at_fade_anim" data-start="100%" data-delay=".15" data-fade-from="right">
                                <img className="anim-zoomin" data-speed=".8" src="/assets/imgs/pages/agastron/about1.webp" alt="Agastron Group" width={400} height={500} loading="lazy" />
                            </div>
                            <div className="sec-3-home-8__photo sec-3-home-8__photo--wide anim-zoomin-wrap at_fade_anim" data-start="100%" data-delay=".25" data-fade-from="right">
                                <img className="anim-zoomin" data-speed=".9" src="/assets/imgs/pages/agastron/about2.webp" alt="Agastron Holding" width={500} height={400} loading="lazy" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
