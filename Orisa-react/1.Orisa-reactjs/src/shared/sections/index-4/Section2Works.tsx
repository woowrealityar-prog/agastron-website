import { Link } from "react-router-dom";
import RevealText from "@/shared/effects/RevealText";

const ARROW_SVG = (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z"
            fill="currentColor"
        />
    </svg>
);

const ENGINES = [
    {
        link: "#rulerinsights",
        img: "rulerinsights.webp",
        num: "01",
        title: "RulerInsights",
        subtitle: "Political & Governance Intelligence",
        hoverColor: "#0055bc",
        desc: "Transforming how governments operate and citizens engage — through real-time data, transparency, and continuous public interaction.",
        bullets: [
            "Real-Time Government Intelligence & Dashboards",
            "Smart Grievance Redressal & Issue Tracking",
            "Public Voice Engine & Policy Influence",
            "AI Governance Analytics & Ground-Level Monitoring",
        ],
    },
    {
        link: "#aranidhi",
        img: "aranidhi.webp",
        num: "02",
        title: "Aranidhi",
        subtitle: "FinTech & Wealth Intelligence",
        hoverColor: "#ffca10",
        desc: "India's most comprehensive financial intelligence platform — unifying Account Aggregator, NSDL/CDSL, GST, AIS, and banking APIs into one wealth view.",
        bullets: [
            "Income Intelligence & Cashflow Engine",
            "Multi-Asset Wealth & Net Worth Projections",
            "Tax Intelligence & Financial Marketplace",
            "AI Risk Profiling & Advisory Workflows",
        ],
    },
    {
        link: "#neofairs",
        img: "neofairs.webp",
        num: "03",
        title: "NeoFairs",
        subtitle: "Virtual Trade Fairs & MSME Global Export",
        hoverColor: "#ace227",
        desc: "Levelling the playing field for MSMEs — enabling global trade fair participation, virtual showrooms, and B2B marketplace connections without physical exhibitions.",
        bullets: [
            "Virtual Trade Fairs — Global Reach, Low Cost",
            "Living Showrooms — 24×7 Virtual Showroom",
            "B2B Marketplace & Export Advisory",
            "Live Face-to-Face Buyer Meetings Without Travel",
        ],
    },
    {
        link: "#mayvrion",
        img: "mayvrion.webp",
        num: "04",
        title: "Mayvrion",
        subtitle: "AI-Native IT Services & Engineering",
        hoverColor: "#770e89",
        desc: "AI-native cloud solutions for modern enterprises — from agentic systems to scalable infrastructure. Startup agility, enterprise-grade quality.",
        bullets: [
            "AI-Native & Agentic Systems",
            "Intelligent Infra & DevOps",
            "Modern Software & Digital Product Engineering",
            "Rapid MVP & Enterprise Architecture",
        ],
    },
];

export default function Section2Works() {
    return (
        <section className="sec-2-home-12 pt-100 pb-100 bg-neutral-50" id="services" aria-label="What We Offer">
            {/* Custom hover styles for the 4 engine cards */}
            <style>{`
                .engine-card--01:hover .card-home-12-project__title {
                    color: #0055bc !important;
                }
                .engine-card--01:hover .engine-bullet-dot {
                    background-color: #0055bc !important;
                }
                .engine-card--01:hover .at-btn {
                    background-color: #0055bc !important;
                    border-color: #0055bc !important;
                    color: #fff !important;
                }

                .engine-card--02:hover .card-home-12-project__title {
                    color: #ffca10 !important;
                }
                .engine-card--02:hover .engine-bullet-dot {
                    background-color: #ffca10 !important;
                }
                .engine-card--02:hover .at-btn {
                    background-color: #ffca10 !important;
                    border-color: #ffca10 !important;
                    color: #000 !important;
                }

                .engine-card--03:hover .card-home-12-project__title {
                    color: #7ba313 !important;
                }
                .engine-card--03:hover .engine-bullet-dot {
                    background-color: #ace227 !important;
                }
                .engine-card--03:hover .at-btn {
                    background-color: #ace227 !important;
                    border-color: #ace227 !important;
                    color: #000 !important;
                }

                .engine-card--04:hover .card-home-12-project__title {
                    color: #770e89 !important;
                }
                .engine-card--04:hover .engine-bullet-dot {
                    background-color: #770e89 !important;
                }
                .engine-card--04:hover .at-btn {
                    background-color: #770e89 !important;
                    border-color: #770e89 !important;
                    color: #fff !important;
                }

                .engine-bullets-list {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                }
                .engine-bullet-item {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    font-size: 14px;
                    font-weight: 500;
                    color: var(--at-neutral-700);
                }
                .engine-bullet-dot {
                    width: 7px;
                    height: 7px;
                    border-radius: 50%;
                    background-color: var(--at-neutral-400);
                    flex-shrink: 0;
                    transition: background-color 0.3s ease;
                }
            `}</style>

            <div className="container">
                <header className="mb-60">
                    <div className="row align-items-end g-4">
                        <div className="col-lg-8 col-md-10">
                            {/* Page style eyebrow pill */}
                            <span className="at-btn common-black text-uppercase bg-transparent mb-10 rounded-0 p-0">
                                <span className="text-uppercase">
                                    <span className="text-1">WHAT WE OFFER</span>
                                    <span className="text-2">WHAT WE OFFER</span>
                                </span>
                                <i>
                                    {ARROW_SVG}
                                    {ARROW_SVG}
                                </i>
                            </span>
                            {/* Page style section title */}
                            <h3 className="reveal-text mb-0">
                                <RevealText>Four engines. One group. Infinite possibilities.</RevealText>
                            </h3>
                        </div>
                        <div className="col-lg-4 col-md-8">
                            <p className="fz-font-lg neutral-600 fw-500 mb-0">
                                Each engine is a focused, independent business — together they form Agastron Group's unified ecosystem of technology, finance, governance, and trade.
                            </p>
                        </div>
                    </div>
                </header>

                <div className="sec-2-home-12__cards">
                    {ENGINES.map((p) => (
                        <div key={p.num} className={`card-home-12-project engine-card--${p.num}`} aria-label={`${p.title} — view business`}>
                            <div className="card-home-12-project__image anim-zoomin-wrap">
                                <img
                                    className="card-home-12-project__img anim-zoomin"
                                    src={`/assets/imgs/pages/agastron/${p.img}`}
                                    alt={p.title}
                                    loading="lazy"
                                />
                            </div>
                            <div className="card-home-12-project__content">
                                <div className="card-home-12-project__top">
                                    <span className="card-home-12-project__dot" aria-hidden="true"></span>
                                    <span className="card-home-12-project__label">{p.subtitle}</span>
                                </div>
                                <h3 className="card-home-12-project__title">{p.title}</h3>
                                <p className="card-home-12-project__desc">{p.desc}</p>

                                {/* Unfilled bullet points instead of filled background pills */}
                                <ul className="engine-bullets-list" aria-label="Engine Capabilities">
                                    {p.bullets.map((b) => (
                                        <li key={b} className="engine-bullet-item">
                                            <span className="engine-bullet-dot" />
                                            <span>{b}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* at-service-btn with Explore label */}
                                <div className="at-service-btn pt-10">
                                    <Link to={p.link} className="at-btn">
                                        <span>
                                            <span className="text-1">EXPLORE</span>
                                            <span className="text-2">EXPLORE</span>
                                        </span>
                                        <i>
                                            {ARROW_SVG}
                                            {ARROW_SVG}
                                        </i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
