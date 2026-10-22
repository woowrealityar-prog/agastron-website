import RevealText from "@/shared/effects/RevealText";

// Careers Section 3 - Open Positions (Now Hiring) based on services-3 SectionStepByStep

const ARROW_SVG = (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z"
            fill="currentColor"
        />
    </svg>
);

const OPEN_POSITIONS = [
    {
        num: "01",
        title: "Group Strategy & Investments",
        location: "Hyderabad (Remote-Friendly)",
        type: "Open Position",
        img: "/assets/imgs/pages/agastron/position1.webp",
        subject: "Application: Group Strategy & Investments",
    },
    {
        num: "02",
        title: "Corporate Governance & Compliance",
        location: "Hyderabad (Remote-Friendly)",
        type: "Open Position",
        img: "/assets/imgs/pages/agastron/position2.webp",
        subject: "Application: Corporate Governance & Compliance",
    },
    {
        num: "03",
        title: "Group Finance & Investor Relations",
        location: "Hyderabad (Remote-Friendly)",
        type: "Open Position",
        img: "/assets/imgs/pages/agastron/position3.webp",
        subject: "Application: Group Finance & Investor Relations",
    },
    {
        num: "04",
        title: "Technology & IP Management",
        location: "Hyderabad (Remote-Friendly)",
        type: "Open Position",
        img: "/assets/imgs/pages/agastron/position4.webp",
        subject: "Application: Technology & IP Management",
    },
    {
        num: "05",
        title: "Corporate Communications",
        location: "Hyderabad (Remote-Friendly)",
        type: "Open Position",
        img: "/assets/imgs/pages/agastron/position5.webp",
        subject: "Application: Corporate Communications",
    },
];

const GRID_COLS = 7;
const CENTER_COL_INDEX = 3;

export default function SectionOpenPositions() {
    return (
        <section className="sec-2-about pt-120 p-relative bg-neutral-50">
            {/* Background grid */}
            <div className="position-absolute w-100 h-100 d-grid top-0 md:grid-cols-7 gap-0 z-0 opacity-10">
                {Array.from({ length: GRID_COLS }, (_, i) => (
                    <div
                        key={i}
                        className={
                            i === CENTER_COL_INDEX
                                ? "position-relative h-100 border-r border-dark/01 md:border-none"
                                : "position-relative h-100 overflow-hidden d-md-block border-dark/01"
                        }
                    >
                        <div className="absolute bottom-0 left-0 right-0 border-white/10" />
                        {i === CENTER_COL_INDEX && (
                            <div
                                className="absolute top-[20%] left-0 right-0 h-[30%] bg-gradient-to-b from-white/5 to-transparent pointer-events-none"
                                aria-hidden
                            />
                        )}
                    </div>
                ))}
            </div>

            <div className="container p-relative z-1">
                <div className="row pb-50 align-items-end">
                    <div className="col-lg-6 col-md-6">
                        <span className="at-btn common-black bg-transparent mb-10 rounded-0 p-0">
                            <span className="text-uppercase">
                                <span className="text-1">Now Hiring</span>
                                <span className="text-2">Now Hiring</span>
                            </span>
                            <i>
                                {ARROW_SVG}
                                {ARROW_SVG}
                            </i>
                        </span>
                        <h2 className="sec-3-home-8__title at_fade_anim reveal-text mb-0">
                            <RevealText>Open Positions</RevealText>
                        </h2>
                    </div>
                    <div className="col-xxl-5 col-lg-6 text-lg-end ms-auto">
                        <p className="fz-font-lg neutral-700 mb-0">
                            Explore opportunities to join Agastron Group leadership. All positions offer flexible hybrid or remote work arrangements from Hyderabad.
                        </p>
                    </div>
                </div>
            </div>

            <div className="container p-relative z-1 pb-120">
                <div className="row">
                    <div className="col-12">
                        <div className="scroll-section process-scroll">
                            <div className="wrapper">
                                {OPEN_POSITIONS.map((item, i) => (
                                    <div key={i} className="item">
                                        <div className="process-card">
                                            <div className="row g-xxl-5 align-items-center">
                                                <div className="col-xxl-4 col-lg-5 order-lg-1 order-2">
                                                    <div className="process-card__img-wrap">
                                                        <img
                                                            src={item.img}
                                                            alt={item.title}
                                                            width={500}
                                                            height={350}
                                                            className="img-cover"
                                                            loading="lazy"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-xxl-8 col-lg-7 order-lg-2 order-1 mb-lg-0 mb-4">
                                                    <div className="process-card__content">
                                                        <div className="process-card__header flex-xxl-row flex-column align-items-start justify-content-between">
                                                            <div>
                                                                <h4 className="process-card__title mb-1 fw-600">
                                                                    {item.num}. {item.title}
                                                                </h4>
                                                            </div>
                                                            <div className="at-service-btn pt-0">
                                                                <a
                                                                    href={`mailto:contact@agastron.com?subject=${encodeURIComponent(item.subject)}`}
                                                                    className="at-btn"
                                                                >
                                                                    <span>
                                                                        <span className="text-1">Apply</span>
                                                                        <span className="text-2">Apply</span>
                                                                    </span>
                                                                    <i>
                                                                        {ARROW_SVG}
                                                                        {ARROW_SVG}
                                                                    </i>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <p className="process-card__desc text-truncate-3 mb-0 mt-3 fz-font-md text-secondary">
                                                            <span className="fw-semibold text-dark d-block mb-1">
                                                                {item.type} · {item.location}
                                                            </span>
                                                            {item.desc}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
