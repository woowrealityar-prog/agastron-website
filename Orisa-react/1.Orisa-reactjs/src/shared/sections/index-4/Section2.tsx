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

const AVATARS = [
    "/assets/imgs/pages/agastron/ruler.jpg",
    "/assets/imgs/pages/agastron/arani.jpg",
    "/assets/imgs/pages/agastron/neo.jpg",
    "/assets/imgs/pages/agastron/mayvi.jpg",
];

const QUOTE_SVG = (
    <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M27 13.5V0H13.5H0V13.5V27H13.5L27 13.5ZM27 13.5H13.5V27L0 13.5L13.5 0L27 13.5Z"
            fill="currentColor"
        />
    </svg>
);

const ICON_OWNERSHIP = (
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
        <path
            d="M7.5 15C11.6421 15 15 11.6421 15 7.5C15 11.6412 18.3563 14.9984 22.4971 15C18.3563 15.0016 15 18.3588 15 22.5C15 18.3579 11.6421 15 7.5 15C3.35786 15 5.08894e-07 18.3579 3.27835e-07 22.5L0 30L7.5 30C11.6421 30 15 26.6421 15 22.5C15 26.6421 18.3579 30 22.5 30L30 30L30 22.5C30 18.3588 26.6437 15.0016 22.5029 15C26.6437 14.9984 30 11.6412 30 7.5L30 6.31805e-06L22.5 6.64589e-06C18.3579 6.82695e-06 15 3.35787 15 7.5C15 3.35787 11.6421 5.21315e-06 7.5 5.39421e-06L2.62268e-06 3.8147e-06L1.63918e-06 7.5C1.096e-06 11.6421 3.35786 15 7.5 15Z"
            fill="currentColor"
        />
    </svg>
);

const ICON_CAPITAL = (
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

const ICON_RISK = (
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M30 0L20 10L10 0L0 10V30L10 20L20 30L30 20V0ZM10 20V10H20V20H10Z"
            fill="currentColor"
        />
    </svg>
);

const ICON_PLATFORM = (
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
        <path d="M10 10L20 0H30V10L20 20V10H10Z" fill="currentColor" />
        <path d="M20 20H30V30H20V20Z" fill="currentColor" />
        <path d="M10 10L0 20V30H10L20 20H10V10Z" fill="currentColor" />
        <path d="M10 10H0V0H10V10Z" fill="currentColor" />
    </svg>
);

const WHO_WE_ARE_PILLARS = [
    {
        type: "card-1",
        background: "/assets/imgs/pages/agastron/majority.webp",
        icon: ICON_OWNERSHIP,
        title: "Majority Ownership",
        description: "Controlling stakes in all subsidiaries with full strategic decision-making authority across every vertical.",
        textWhite: true,
    },
    {
        type: "card-2",
        img: "/assets/imgs/pages/agastron/capital.webp",
        imgPosition: "bottom",
        icon: ICON_CAPITAL,
        title: "Capital & Governance",
        description: "Centralised group-level strategy, finance, and compliance. Capital raised at the holding level and deployed efficiently across all subsidiaries.",
        textWhite: false,
    },
    {
        type: "card-3",
        img: "/assets/imgs/pages/agastron/ip&risk.webp",
        icon: ICON_RISK,
        title: "IP & Risk Isolation",
        description: "Core brand, IP, and technology assets owned at holding level. Risk-isolated multi-entity structure protects the group at scale.",
        textWhite: true,
    },
    {
        type: "card-4",
        img: "/assets/imgs/pages/agastron/ecosystem.webp",
        imgPosition: "bottom",
        contentPosition: "top-50",
        icon: ICON_PLATFORM,
        title: "Enterprise Ecosystem",
        description: "A integrated platform bringing together high-growth businesses across technology, finance, analytics & digital ecosystems.",
        textWhite: false,
    },
];

export default function Section2() {
    return (
        <div className="bg-neutral-50" id="who-we-are">
            <section className="sec-2-home-4 portfolio-area pt-80 pb-80 fix">
                <div className="container">
                    <div className="row pb-60">
                        <div className="col-lg-2 col-md-3">
                            <span className="at-btn common-black bg-transparent mb-10 rounded-0 p-0">
                                <span className="text-uppercase">
                                    <span className="text-1">WHO WE ARE</span>
                                    <span className="text-2">WHO WE ARE</span>
                                </span>
                                <i>
                                    {ARROW_SVG}
                                    {ARROW_SVG}
                                </i>
                            </span>
                            <div className="pt-40 ps-5 d-none d-md-block">
                                <img
                                    src="/assets/imgs/pages/agastron/agai.webp"
                                    alt="Agastron"
                                    width={78}
                                    height={110}
                                    className="portfolio-text"
                                    style={{ width: "auto", height: "auto" }}
                                    loading="lazy"
                                />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-9">
                            <h3 className="reveal-text lh-1">
                                <RevealText>
                                    A unified enterprise platform bringing together high-growth businesses.
                                </RevealText>
                            </h3>
                        </div>
                        <div className="col-lg-3 col-md-6 ms-auto mt-md-0 mt-4">
                            <ul className="list-unstyled navigation-section-10">
                                {AVATARS.map((src, i) => (
                                    <li key={i}>
                                        <div className="icon-shape size-60 rounded-2 fix">
                                            <img
                                                src={src}
                                                alt="Agastron"
                                                width={60}
                                                height={60}
                                                className="img-cover w-100 h-100"
                                                loading="lazy"
                                            />
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            <div className="d-flex gap-3 pt-30">
                                <div>{QUOTE_SVG}</div>
                                <span className="neutral-900">
                                    A group holding structure that separates risk, centralises IP, and enables multi-vertical growth simultaneously.
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="row g-3">
                        {WHO_WE_ARE_PILLARS.map((pillar, index) => (
                            <div key={index} className="col-lg-3 col-md-6">
                                {pillar.type === "card-1" ? (
                                    <div
                                        className="at-service-card card-1 rounded-4 overflow-hidden p-relative bg-cover"
                                        data-background={pillar.background}
                                        style={{
                                            backgroundImage: `url(${pillar.background})`,
                                            backgroundSize: "cover",
                                        }}
                                    >
                                        <Link to="#" className="p-absolute top-0 left-0 w-100 h-100" aria-hidden />
                                        <div className="at-service-card-content text-white p-absolute bottom-0 start-0 end-0 m-xxl-5 m-4">
                                            <div className="at-service-card-icon">{pillar.icon}</div>
                                            <h5 className="text-white mt-1">
                                                <Link to="#">{pillar.title}</Link>
                                            </h5>
                                            <div className="at-service-card-description">
                                                <p className="text-white mb-0">{pillar.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ) : pillar.type === "card-3" ? (
                                    <div className="at-service-card card-3 rounded-4 overflow-hidden p-relative">
                                        <Link to="#" className="p-absolute top-0 left-0">
                                            <img
                                                src={pillar.img!}
                                                alt="Agastron"
                                                className="img-cover w-100 h-100"
                                                loading="lazy"
                                            />
                                        </Link>
                                        <Link to="#" className="p-absolute bottom-0 start-0 end-0">
                                            <img
                                                src={pillar.img!}
                                                alt="Agastron"
                                                className="img-cover w-100 h-100"
                                                loading="lazy"
                                            />
                                        </Link>
                                        <div className="at-service-card-content text-white p-absolute top-0 left-0 m-xxl-5 m-4">
                                            <div className="at-service-card-icon">{pillar.icon}</div>
                                            <h5 className="text-white mt-1">
                                                <Link to="#">{pillar.title}</Link>
                                            </h5>
                                            <div className="at-service-card-description">
                                                <p className="mb-0 text-white">{pillar.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="at-service-card card-2 rounded-4 overflow-hidden p-relative bg-neutral-0">
                                        <Link to="#" className="p-absolute bottom-0 start-0 end-0">
                                            <img
                                                src={pillar.img!}
                                                alt="Agastron"
                                                width={400}
                                                height={300}
                                                className="img-cover w-100 h-100"
                                                loading="lazy"
                                            />
                                        </Link>
                                        <div
                                            className={
                                                (pillar as { contentPosition?: string }).contentPosition
                                                    ? "at-service-card-content p-absolute top-50 left-0 mx-xxl-5 mx-4 translate-middle-y"
                                                    : "at-service-card-content p-absolute top-0 left-0 m-xxl-5 m-4"
                                            }
                                            style={index === 1 ? { color: "#1d1d1d" } : undefined}
                                        >
                                            <div className="at-service-card-icon" style={index === 1 ? { color: "#1d1d1d" } : undefined}>
                                                {pillar.icon}
                                            </div>
                                            <span className="d-block fz-font-sm text-uppercase text-muted mt-2">{pillar.category}</span>
                                            <h5 className="mt-1" style={index === 1 ? { color: "#1d1d1d" } : undefined}>
                                                <Link to="#" style={index === 1 ? { color: "#1d1d1d" } : undefined}>
                                                    {pillar.title}
                                                </Link>
                                            </h5>
                                            <div className="at-service-card-description">
                                                <p className="mb-0" style={index === 1 ? { color: "#444444" } : undefined}>
                                                    {pillar.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
