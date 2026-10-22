import { Link } from "react-router-dom";
import ArticleCard2 from "@/shared/cards/ArticleCard2";
import RevealText from "@/shared/effects/RevealText";

const ARROW_SVG = (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z"
            fill="currentColor"
        />
    </svg>
);

const ARTICLES = [
    {
        classList: "blog-card-2-wrap scroll-move-up",
        categoryFilter: "",
        linkPost: "/blog-details",
        linkAuthor: "#",
        img: "/assets/imgs/pages/agastron/blog1.webp",
        category: "Mayvrion",
        title: "Mayvrion Launches AI-Native Engineering Platform for Enterprise Clients",
        excerpt:
            "Delivering AI-native cloud solutions and autonomous agentic engineering systems with startup agility and enterprise quality.",
        author: "Mayvrion",
        date: "Apr 2026",
    },
    {
        classList: "blog-card-2-wrap scroll-move-up",
        categoryFilter: "",
        linkPost: "/blog-details",
        linkAuthor: "#",
        img: "/assets/imgs/pages/agastron/blog2.webp",
        category: "Aranidhi",
        title: "Aranidhi Integrates Account Aggregator Framework for Unified Wealth Intelligence",
        excerpt:
            "Unifying Account Aggregator, NSDL/CDSL, GST, and banking APIs into India's most comprehensive financial intelligence platform.",
        author: "Aranidhi",
        date: "Mar 2026",
    },
    {
        classList: "blog-card-2-wrap scroll-move-up",
        categoryFilter: "",
        linkPost: "/blog-details",
        linkAuthor: "#",
        img: "/assets/imgs/pages/agastron/blog3.webp",
        category: "RulerInsights",
        title: "RulerInsights Introduces Real-Time Governance Intelligence for Governments and Citizens",
        excerpt:
            "Transforming how governments operate and citizens engage through real-time data, transparency, and public issue tracking.",
        author: "RulerInsights",
        date: "Sep 2026",
    },
    {
        classList: "blog-card-2-wrap scroll-move-up",
        categoryFilter: "",
        linkPost: "/blog-details",
        linkAuthor: "#",
        img: "/assets/imgs/pages/agastron/blog4.webp",
        category: "NeoFairs",
        title: "NeoFairs Virtual Trade Fairs Cross 1,500 Buyer Meetings Across 21 Countries",
        excerpt:
            "Enabling global trade fair participation, virtual living showrooms, and international B2B buyer connections without travel.",
        author: "NeoFairs",
        date: "Aug 2026",
    },
];

export default function Section8() {
    return (
        <section className="home-2-section-13 pb-100 bg-neutral-0">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="d-flex flex-wrap gap-4 align-items-end justify-content-between border-bottom border-neutral-100 pb-4 bg-neutral-0 at-header-pin p-relative z-index-3 pt-100">
                            <div>
                                <span className="at-btn common-black bg-transparent mb-10 rounded-0 p-0">
                                    <span className="text-uppercase">
                                        <span className="text-1">Article &amp; blogs</span>
                                        <span className="text-2">Article &amp; blogs</span>
                                    </span>
                                    <i>
                                        {ARROW_SVG}
                                        {ARROW_SVG}
                                    </i>
                                </span>
                                <h3 className="reveal-text mb-0">
                                    <RevealText>Insights & Announcements from the Agastron Group</RevealText>
                                </h3>
                            </div>
                            <div>
                                <Link className="at-btn px-5" to="/archive-2">
                                    <span>
                                        <span className="text-1 text-capitalize">ALL ARTICLES</span>
                                        <span className="text-2 text-capitalize">ALL ARTICLES</span>
                                    </span>
                                    <i>
                                        {ARROW_SVG}
                                        {ARROW_SVG}
                                    </i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row p-relative z-1">
                    <div className="col-xxl-9 ms-auto mt-70 d-flex flex-column gap-4">
                        {ARTICLES.map((item, index) => (
                            <ArticleCard2
                                key={index}
                                classList={item.classList}
                                categoryFilter={item.categoryFilter}
                                linkPost={item.linkPost}
                                linkAuthor={item.linkAuthor}
                                img={item.img}
                                category={item.category}
                                title={item.title}
                                excerpt={item.excerpt}
                                author={item.author}
                                date={item.date}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
