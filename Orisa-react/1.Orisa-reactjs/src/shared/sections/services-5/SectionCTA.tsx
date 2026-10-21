import { Link } from "react-router-dom";
import RevealText from "@/shared/effects/RevealText";

export default function SectionCTA() {
    return (
        <section className="sec-9-home-8">
            <div className="sec-9-home-8__bg" aria-hidden="true">
                <img
                    src="/assets/imgs/pages/agastron/cta.webp"
                    alt="Agastron Digital Transformation"
                    width={1920}
                    height={1080}
                    style={{ width: "auto", height: "auto" }}
                    loading="lazy"
                />
            </div>

            <div className="container-fluid sec-9-home-8__container">
                <div className="row align-items-center justify-content-between g-5">
                    {/* Left copy */}
                    <div className="col-xl-6">
                        <div className="sec-9-home-8__content">
                            <h2 className="sec-9-home-8__title at_fade_anim reveal-text">
                                <RevealText>Accelerate Your Digital Evolution</RevealText>
                            </h2>
                            <p className="sec-9-home-8__lead at_fade_anim reveal-text">
                                <RevealText>
                                    Partner with our digital transformation strategists to modernise legacy stacks and launch high-impact digital products.
                                </RevealText>
                            </p>

                            <div className="sec-9-home-8__cta at_fade_anim">
                                <Link className="sec-9-home-8__cta-btn" to="/contact-1">
                                    <span>Start Transformation Journey</span>
                                </Link>
                                <Link className="sec-9-home-8__cta-icon" to="/contact-1" aria-label="Start Transformation Journey">
                                    <img src="/assets/imgs/pages/home-8/sec9-btn-icon.svg" alt="arrow" width={48} height={48} loading="lazy" />
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Right card */}
                    <div className="col-xl-5">
                        <Link className="sec-9-home-8__card" to="/contact-1" aria-label="Start Transformation Journey">
                            <div className="sec-9-home-8__card-media">
                                <img
                                    className="sec-9-home-8__card-visors w-100 scale-img-from-to"
                                    data-value-1="1.5"
                                    data-value-2="1"
                                    src="/assets/imgs/pages/agastron/cta1.webp"
                                    alt="Digital Transformation Journey"
                                    width={500}
                                    height={350}
                                    loading="lazy"
                                />
                            </div>
                            <div className="sec-9-home-8__card-overlay">
                                <span className="sec-9-home-8__card-kicker">
                                    <span>Start Transformation Journey</span>
                                    <img src="/assets/imgs/pages/home-8/sec9-arrow.svg" alt="arrow" width={16} height={16} loading="lazy" />
                                </span>
                                <p className="sec-9-home-8__card-text mb-0">
                                    Assess legacy bottlenecks, plan modern microservices, and build high-velocity digital capabilities.
                                </p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
