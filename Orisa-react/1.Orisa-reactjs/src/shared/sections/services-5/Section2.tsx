import RevealText from "@/shared/effects/RevealText";

// Services 5 Section 2 - Capability map. The `.scroll-section > .wrapper > .item`
// structure is picked up by the global ScrollSectionEffects card stacking.

type Capability = {
    index: string;
    name: string;
    desc: string;
    tags: string[];
    img: { src: string; alt: string; width: number; height: number };
    span: string;
};

const CAPABILITIES: Capability[] = [
    {
        index: "01",
        name: "Legacy Modernisation",
        desc: "Assess, re-architect and migrate legacy monoliths to modern, scalable microservices.",
        tags: ["Architecture", "Migration", "Microservices"],
        img: {
            src: "/assets/imgs/pages/home-15/sec-4-project-1.webp",
            alt: "Legacy Modernisation",
            width: 1800,
            height: 1013,
        },
        span: "8–16 weeks",
    },
    {
        index: "02",
        name: "Digital Product Design",
        desc: "End-to-end digital product design — from UX strategy to high-fidelity prototypes.",
        tags: ["UX Strategy", "UI Design", "Prototypes"],
        img: {
            src: "/assets/imgs/pages/home-15/sec-4-project-2.webp",
            alt: "Digital Product Design",
            width: 1800,
            height: 1013,
        },
        span: "4–12 weeks",
    },
    {
        index: "03",
        name: "Process Intelligence",
        desc: "Mine, analyse, and redesign business processes using process mining and simulation.",
        tags: ["Process Mining", "Simulation", "Analytics"],
        img: {
            src: "/assets/imgs/pages/home-11/img-8.webp",
            alt: "Process Intelligence",
            width: 2400,
            height: 1600,
        },
        span: "6–12 weeks",
    },
    {
        index: "04",
        name: "DevOps & Agile",
        desc: "CI/CD pipelines, platform engineering, and agile delivery frameworks at enterprise scale.",
        tags: ["CI/CD", "Platform Eng", "Automation"],
        img: {
            src: "/assets/imgs/pages/home-15/sec-4-project-3.webp",
            alt: "DevOps & Agile",
            width: 1800,
            height: 1013,
        },
        span: "4–10 weeks",
    },
    {
        index: "05",
        name: "Change Management",
        desc: "We partner with your teams through every stage of transformation to drive adoption.",
        tags: ["Adoption", "Enablement", "Culture"],
        img: {
            src: "/assets/imgs/pages/home-15/sec-4-project-4.webp",
            alt: "Change Management",
            width: 1800,
            height: 1013,
        },
        span: "Ongoing · Sprints",
    },
    {
        index: "06",
        name: "Digital Strategy",
        desc: "Comprehensive digital transformation roadmaps anchored to business outcomes and ROI.",
        tags: ["Roadmaps", "Business ROI", "Governance"],
        img: {
            src: "/assets/imgs/pages/home-15/sec-4-project-1.webp",
            alt: "Digital Strategy",
            width: 1800,
            height: 1013,
        },
        span: "4–8 weeks",
    },
];

const ARROW_SVG = (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z"
            fill="currentColor"
        />
    </svg>
);

export default function Section2() {
    return (
        <section className="svc5-map pt-40 pb-100" aria-label="Capability map" data-svc5-map="">
            <style>{`
                .svc5-map .svc5-cap {
                    display: block !important;
                    padding: clamp(32px, 4vw, 56px) !important;
                    background: var(--at-neutral-0, #fff);
                    border: 1px solid var(--at-neutral-100, #e7e7e7);
                    border-radius: 24px;
                    box-shadow: 0 18px 48px rgba(0, 0, 0, 0.05);
                }
                .svc5-map .svc5-cap__body {
                    display: grid !important;
                    grid-template-columns: minmax(0, 1.15fr) minmax(280px, 0.85fr) !important;
                    gap: 36px 48px !important;
                    align-items: center !important;
                    min-width: 0 !important;
                }
                .svc5-map .svc5-cap__copy {
                    min-width: 0 !important;
                }
                .svc5-map .svc5-cap__name {
                    font-size: clamp(28px, 3.2vw, 44px) !important;
                    font-weight: 600 !important;
                    letter-spacing: -0.03em !important;
                    line-height: 1.15 !important;
                    margin-bottom: 20px !important;
                    color: var(--at-neutral-900, #111) !important;
                }
                .svc5-map .svc5-cap__desc {
                    font-size: clamp(16px, 1.2vw, 19px) !important;
                    font-weight: 400 !important;
                    line-height: 1.6 !important;
                    max-width: 48ch !important;
                    margin-bottom: 0 !important;
                    color: var(--at-neutral-600, #555) !important;
                }
                .svc5-map .svc5-cap__media {
                    border-radius: 16px !important;
                    overflow: hidden !important;
                    aspect-ratio: 16/10 !important;
                    background: var(--at-neutral-50, #f7f7f7) !important;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);
                }
                .svc5-map .svc5-cap__media img {
                    width: 100% !important;
                    height: 100% !important;
                    object-fit: cover !important;
                    display: block !important;
                    transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) !important;
                }
                .svc5-map .svc5-cap:hover .svc5-cap__media img {
                    transform: scale(1.04) !important;
                }
                .svc5-map .svc5-section-title {
                    font-family: var(--at-ff-heading);
                    font-size: clamp(36px, 3.75vw, 72px) !important;
                    font-weight: 600 !important;
                    line-height: 1.05 !important;
                    letter-spacing: -0.05em !important;
                    color: var(--at-neutral-900, #111) !important;
                }
                @media (max-width: 991px) {
                    .svc5-map .svc5-cap__body {
                        grid-template-columns: 1fr !important;
                        gap: 28px !important;
                    }
                    .svc5-map .svc5-cap__media {
                        order: 2 !important;
                        max-width: 100% !important;
                    }
                }
            `}</style>
            <div className="container p-relative z-1">
                <div className="row pb-50 align-items-end g-4">
                    <div className="col-lg-6 col-md-6">
                        <span className="at-btn common-black bg-transparent mb-10 rounded-0 p-0">
                            <span className="text-uppercase">
                                <span className="text-1">Transformation Capabilities</span>
                                <span className="text-2">Transformation Capabilities</span>
                            </span>
                            <i>
                                {ARROW_SVG}
                                {ARROW_SVG}
                            </i>
                        </span>
                        <h2 className="svc5-section-title reveal-text mb-0">
                            <RevealText>Transformation Capabilities</RevealText>
                        </h2>
                    </div>
                    <div className="col-xxl-6 col-lg-7 text-lg-end ms-auto">
                        <h6 className="fw-600 fz-font-lg mb-0">
                            Modular solutions designed to accelerate modernisation and deliver sustainable business ROI.
                        </h6>
                    </div>
                </div>
            </div>

            <div className="scroll-section vertical-section position-relative svc5-map__stack">
                <div className="wrapper">
                    {CAPABILITIES.map((cap) => (
                        <div className="item svc5-item" key={cap.name}>
                            <div className="container">
                                <article className="svc5-cap" data-svc5-cap="">
                                    <div className="svc5-cap__body">
                                        <div className="svc5-cap__copy">
                                            <h3 className="svc5-cap__name">{cap.name}</h3>
                                            <p className="svc5-cap__desc">{cap.desc}</p>
                                        </div>
                                        <div className="svc5-cap__media">
                                            <img
                                                src={cap.img.src}
                                                alt={cap.img.alt}
                                                width={cap.img.width}
                                                height={cap.img.height}
                                                loading="lazy"
                                            />
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
