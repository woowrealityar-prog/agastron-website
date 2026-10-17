import { Link } from "react-router-dom";
import RevealText from "@/shared/effects/RevealText";

export default function SectionCTA() {
    return (
        <section className="sec-9-home-8">
            <div className="sec-9-home-8__bg" aria-hidden="true">
                <img
                    src="/assets/imgs/pages/home-8/sec9-bg-blur.webp"
                    alt="Agastron AI"
                    width={1920}
                    height={1080}
                    style={{ width: "auto", height: "auto" }} loading="lazy" />
            </div>

            <div className="container-fluid sec-9-home-8__container">
                <div className="row align-items-center justify-content-between g-5">
                    {/* Left copy */}
                    <div className="col-xl-6">
                        <div className="sec-9-home-8__content">
                            <h2 className="sec-9-home-8__title at_fade_anim reveal-text">
                                <RevealText>Automate the Ordinary. Focus on the Extraordinary.</RevealText>
                            </h2>
                            <p className="sec-9-home-8__lead at_fade_anim reveal-text">
                                <RevealText>Speak with an AI specialist and discover your automation potential in a free 30-minute session.</RevealText>
                            </p>

                            <div className="sec-9-home-8__cta at_fade_anim">
                                <Link className="sec-9-home-8__cta-btn" to="/contact-1">
                                    <span>Talk to an Expert</span>
                                </Link>
                                <Link className="sec-9-home-8__cta-icon" to="/contact-1" aria-label="Talk to an Expert">
                                    <img src="/assets/imgs/pages/home-8/sec9-btn-icon.svg" alt="arrow" width={48} height={48} loading="lazy" />
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Right card */}
                    <div className="col-xl-5">
                        <Link className="sec-9-home-8__card" to="/contact-1" aria-label="Talk to an Expert">
                            <div className="sec-9-home-8__card-media">
                                <img className="sec-9-home-8__card-visors w-100 scale-img-from-to" data-value-1="1.5" data-value-2="1" src="/assets/imgs/pages/home-8/sec9-card-visors.webp" alt="Agastron AI Consultation" width={500} height={350} loading="lazy" />
                            </div>
                            <div className="sec-9-home-8__card-overlay">
                                <span className="sec-9-home-8__card-kicker">
                                    <span>Talk to an Expert</span>
                                    <img src="/assets/imgs/pages/home-8/sec9-arrow.svg" alt="arrow" width={16} height={16} loading="lazy" />
                                </span>
                                <p className="sec-9-home-8__card-text mb-0">
                                    Discover your automation potential with our enterprise AI engineering team.
                                </p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
