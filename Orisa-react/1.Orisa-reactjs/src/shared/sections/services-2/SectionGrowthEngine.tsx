import { Link } from "react-router-dom";
import RevealText from "@/shared/effects/RevealText";

{/* Services 2 Section - Growth Engine (4 Pillars of AI & Automation) */ }

const ARROW_SVG = (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z"
            fill="currentColor"
        />
    </svg>
);

const CHIPS = [

];

// Orisa template geometric icons
const ICON_1 = (
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
        <path
            d="M7.5 15C11.6421 15 15 11.6421 15 7.5C15 11.6412 18.3563 14.9984 22.4971 15C18.3563 15.0016 15 18.3588 15 22.5C15 18.3579 11.6421 15 7.5 15C3.35786 15 5.08894e-07 18.3579 3.27835e-07 22.5L0 30L7.5 30C11.6421 30 15 26.6421 15 22.5C15 26.6421 18.3579 30 22.5 30L30 30L30 22.5C30 18.3588 26.6437 15.0016 22.5029 15C26.6437 14.9984 30 11.6412 30 7.5L30 6.31805e-06L22.5 6.64589e-06C18.3579 6.82695e-06 15 3.35787 15 7.5C15 3.35787 11.6421 5.21315e-06 7.5 5.39421e-06L2.62268e-06 3.8147e-06L1.63918e-06 7.5C1.096e-06 11.6421 3.35786 15 7.5 15Z"
            fill="currentColor"
        />
    </svg>
);

const ICON_2 = (
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
        <path d="M15 0H30V15L15 0Z" fill="currentColor" />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15 15V0H7.5L0 7.5V15V30H15H22.5L30 22.5V15H15ZM15 15V30L0 15H15Z"
            fill="currentColor"
        />
    </svg>
);

const ICON_3 = (
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M30 0L20 10L10 0L0 10V30L10 20L20 30L30 20V0ZM10 20V10H20V20H10Z"
            fill="currentColor"
        />
    </svg>
);

const ICON_4 = (
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
        <path d="M10 10L20 0H30V10L20 20V10H10Z" fill="currentColor" />
        <path d="M20 20H30V30H20V20Z" fill="currentColor" />
        <path d="M10 10L0 20V30H10L20 20H10V10Z" fill="currentColor" />
        <path d="M10 10H0V0H10V10Z" fill="currentColor" />
    </svg>
);

const CARDS = [
    {
        icon: ICON_1,
        title: "AI-Native",
        desc: "LLMs, RAG & autonomous agents embedded directly into enterprise workflows to amplify operational velocity.",
        alt: "AI-Native",
        delay: "0.1",
    },
    {
        icon: ICON_2,
        title: "Automation",
        desc: "End-to-end RPA & workflow intelligence eliminating repetitive manual tasks across your business footprint.",
        alt: "Automation",
        delay: "0.3",
    },
    {
        icon: ICON_3,
        title: "ML Pipelines",
        desc: "Build, deploy & monitor production machine learning models at scale that learn and adapt continuously.",
        alt: "ML Pipelines",
        delay: "0.5",
    },
    {
        icon: ICON_4,
        title: "60% Cost Cut",
        desc: "Average operational savings achieved through intelligent automation, high-speed routing, and autonomous processing.",
        alt: "60% Cost Cut",
        delay: "0.7",
    },
];

export default function SectionGrowthEngine() {
    return (
        <div className="sec-6-home-7 p-relative bg-neutral-0">
            <div className="container-2200 px-lg-5 px-3">
                {/* Header row: eyebrow + big title + description */}
                <div className="sec-6-home-7__header row g-0 pt-100 pb-50">
                    <div className="col-lg-7 col-12">
                        <span className="at-btn common-black text-uppercase bg-transparent mb-10 rounded-0 p-0">
                            <span className="text-uppercase">
                                <span className="text-1">The Growth Engine</span>
                                <span className="text-2">The Growth Engine</span>
                            </span>
                            <i>
                                {ARROW_SVG}
                                {ARROW_SVG}
                            </i>
                        </span>
                        <h2 className="sec-6-home-7__title mb-0 reveal-text">
                            <RevealText>Intelligent Automation, Built AI-First</RevealText>
                        </h2>
                    </div>
                    <div className="col-lg-5 col-12 mt-4 mt-lg-0 d-flex align-items-end justify-content-lg-end">
                        <p className="sec-6-home-7__desc text-lg-end mb-0 at_fade_anim">
                            From the latest LLMs and RAG to autonomous agents, we engineer AI-native systems that automate end-to-end workflows.
                        </p>
                    </div>
                </div>

                <style>{`
                    .sec-6-home-7 .sec-6-home-7__card {
                        min-height: 290px !important;
                        height: 100% !important;
                        padding: 44px 38px !important;
                        display: flex !important;
                        flex-direction: column !important;
                        justify-content: flex-start !important;
                        border-radius: 10px !important;
                        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04) !important;
                    }
                    .sec-6-home-7 .sec-6-home-7__card-body {
                        margin-bottom: 0 !important;
                        gap: 16px !important;
                    }
                    .sec-6-home-7 .at-service-card-icon {
                        display: inline-flex !important;
                        align-items: center !important;
                        justify-content: flex-start !important;
                        background: transparent !important;
                        color: var(--at-neutral-900, currentColor) !important;
                        margin-bottom: 4px !important;
                    }
                    .sec-6-home-7 .sec-6-home-7__card:hover .at-service-card-icon {
                        background: transparent !important;
                        color: var(--at-neutral-900, currentColor) !important;
                    }
                    [data-bs-theme="dark"] .sec-6-home-7 .at-service-card-icon {
                        color: #ffffff !important;
                    }
                    .sec-6-home-7 .sec-6-home-7__card-title {
                        font-size: 22px !important;
                        font-weight: 600 !important;
                        line-height: 1.3 !important;
                        letter-spacing: -0.02em !important;
                    }
                    .sec-6-home-7 .sec-6-home-7__card-desc {
                        font-size: 14.5px !important;
                        line-height: 1.65 !important;
                        color: var(--at-neutral-600, #555) !important;
                    }
                `}</style>

                {/* 4 process cards */}
                <div className="sec-6-home-7__cards pb-120">
                    {CARDS.map((card, i) => (
                        <div key={i} className="sec-6-home-7__card-wrap h-100 at_fade_anim" data-delay={card.delay}>
                            <div className="sec-6-home-7__card">
                                <div className="sec-6-home-7__card-body w-100">
                                    <div className="at-service-card-icon">
                                        {card.icon}
                                    </div>
                                    <h3 className="sec-6-home-7__card-title mb-0">{card.title}</h3>
                                    <p className="sec-6-home-7__card-desc mb-0">{card.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
