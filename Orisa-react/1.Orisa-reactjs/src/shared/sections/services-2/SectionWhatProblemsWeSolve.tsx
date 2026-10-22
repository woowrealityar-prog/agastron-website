import RevealText from "@/shared/effects/RevealText";

const ARROW_SVG = (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z"
            fill="currentColor"
        />
    </svg>
);

const PROBLEMS_SOLVED = [
    {
        title: "Intelligent Process Automation",
        description:
            "End-to-end RPA + AI to eliminate manual workflows and reduce operational costs by 60%+.",
        listLeft: ["End-to-End RPA", "Workflow Intelligence", "Exception Handling"],
        listRight: ["Human-in-the-Loop", "Legacy Integration", "60%+ Cost Reduction"],
        image: "/assets/imgs/pages/agastron/intelligent.webp",
        itemClass: "pb-40",
    },
    {
        title: "ML Pipeline Orchestration",
        description:
            "Build, deploy, and monitor production ML pipelines that learn and adapt continuously.",
        listLeft: ["Feature Stores & CI/CD", "Model Drift Detection", "Automated Retraining"],
        listRight: ["Real-time Inference", "Batch Data Pipelines", "Scale Monitoring"],
        image: "/assets/imgs/pages/agastron/pipeline.webp",
        itemClass: "pb-40",
    },
    {
        title: "AI Copilots & Assistants",
        description:
            "Custom AI copilots embedded into your products that enhance user productivity and workflow velocity.",
        listLeft: ["Context-Aware Prompting", "RAG & Vector Memory", "Enterprise Data Guardrails"],
        listRight: ["Multi-Agent Execution", "Role-Based Permissions", "Instant Productivity"],
        image: "/assets/imgs/pages/agastron/aipilot.webp",
        itemClass: "pb-40",
    },
    {
        title: "Computer Vision",
        description:
            "Image recognition, defect detection, and video analytics for manufacturing, retail, and security.",
        listLeft: ["Automated Defect Detection", "Visual Quality Inspection", "Real-time Video Feeds"],
        listRight: ["Spatial Intelligence", "Safety & Perimeter Analytics", "Edge Deployment"],
        image: "/assets/imgs/pages/agastron/com-vision.webp",
        itemClass: "pb-40",
    },
    {
        title: "Forecasting & Prediction",
        description:
            "Demand forecasting, churn prediction, pricing optimization and supply chain intelligence.",
        listLeft: ["Demand Sensing", "Customer Churn Mitigation", "Dynamic Pricing Models"],
        listRight: ["Supply Chain Forecasting", "Anomaly Detection", "Revenue Maximization"],
        image: "/assets/imgs/pages/agastron/forecast.webp",
        itemClass: "pb-40",
    },
    {
        title: "Language AI",
        description:
            "Multilingual NLP, document intelligence and knowledge extraction at enterprise scale.",
        listLeft: ["Document Understanding", "Contract Intelligence", "Multilingual NLP"],
        listRight: ["Semantic Search", "Sentiment & Intent Analysis", "Knowledge Graphs"],
        image: "/assets/imgs/pages/agastron/language.webp",
        itemClass: "pb-50",
    },
];

type SectionWhatProblemsWeSolveProps = {
    className?: string;
};

export default function SectionWhatProblemsWeSolve({ className }: SectionWhatProblemsWeSolveProps) {
    return (
        <div className={`container-2200 ${className ?? ""}`.trim()}>
            <style>{`
                .at-service-area .fz-ds-1 {
                    font-size: 88px !important;
                    line-height: 1.05 !important;
                    letter-spacing: -0.03em !important;
                }
                @media (min-width: 1600px) {
                    .at-service-area .fz-ds-1 {
                        font-size: 96px !important;
                    }
                }
                @media (max-width: 1440px) and (min-width: 992px) {
                    .at-service-area .fz-ds-1 {
                        font-size: 72px !important;
                    }
                }
                @media (max-width: 991px) {
                    .at-service-area .fz-ds-1 {
                        font-size: 48px !important;
                    }
                }
                .at-service-area .scroll-section .item {
                    background-color: var(--at-neutral-50, #f7f7f7) !important;
                    width: 100% !important;
                }
                .at-service-area .scroll-section .item .container {
                    background-color: var(--at-neutral-50, #f7f7f7) !important;
                }
                @media (max-width: 991px) {
                    .at-service-area .scroll-section .item {
                        min-height: auto !important;
                        position: relative !important;
                        margin-bottom: 40px !important;
                    }
                    .at-service-area .scroll-section .item:last-child {
                        margin-bottom: 0 !important;
                    }
                }
            `}</style>
            <section className="at-service-area bg-neutral-50 rounded-5 mx-lg-3 mx-2 pt-120 pb-80">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="at-service-subtitle-wrap at-about-border d-flex flex-wrap justify-content-between align-items-end gap-3 mb-50">
                                <div>
                                    <span className="at-btn common-black text-uppercase bg-transparent mb-10 rounded-0 p-0">
                                        <span className="text-uppercase">
                                            <span className="text-1">What Problems We Solve</span>
                                            <span className="text-2">What Problems We Solve</span>
                                        </span>
                                        <i>
                                            {ARROW_SVG}
                                            {ARROW_SVG}
                                        </i>
                                    </span>
                                    <h3 className="reveal-text mb-0">
                                        <RevealText>
                                            Manual, repetitive, costly — we automate what slows you down and intelligentise what drives you forward.
                                        </RevealText>
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="scroll-section vertical-section position-relative">
                    <div className="wrapper">
                        {PROBLEMS_SOLVED.map((service, index) => (
                            <div key={index} className="item">
                                <div
                                    className={`container bg-neutral-50 pt-20 ${service.itemClass}`}
                                >
                                    <div className="row align-items-center">
                                        <div className="col-lg-6 col-12">
                                            <div className="d-flex flex-column justify-content-between h-100 py-4 px-2">
                                                <h1 className="fz-ds-1 fw-500 text-scale-anim-2 pb-xxl-5 pb-4">
                                                    {service.title}
                                                </h1>
                                                <div className="d-xxl-flex align-items-end">
                                                    <p className="fz-font-2xl neutral-950 reveal-text pe-xxl-5 mb-0">
                                                        <RevealText>{service.description}</RevealText>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-5 offset-lg-1">
                                            <div className="rounded-4 overflow-hidden">
                                                <img
                                                    src={service.image}
                                                    alt={service.title}
                                                    width={600}
                                                    height={400}
                                                    className="img-cover" loading="lazy" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
