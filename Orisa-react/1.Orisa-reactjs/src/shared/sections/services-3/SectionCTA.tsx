import { Link } from "react-router-dom";
import RevealText from "@/shared/effects/RevealText";

export default function SectionCTA() {
    return (
        <section className="sec-9-home-8">
            <div className="sec-9-home-8__bg" aria-hidden="true">
                <img
                    src="/assets/imgs/pages/agastron/cta.webp"
                    alt="Agastron Enterprise Platforms"
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
                                <RevealText>Build a Platform That Scales With You</RevealText>
                            </h2>
                            <p className="sec-9-home-8__lead at_fade_anim reveal-text">
                                <RevealText>
                                    Talk to our enterprise architects and design the platform your business deserves.
                                </RevealText>
                            </p>

                            <div className="sec-9-home-8__cta at_fade_anim">
                                <Link className="sec-9-home-8__cta-btn" to="/contact-1">
                                    <span>Schedule Architecture Review</span>
                                </Link>
                                <Link className="sec-9-home-8__cta-icon" to="/contact-1" aria-label="Schedule Architecture Review">
                                    <img src="/assets/imgs/pages/home-8/sec9-btn-icon.svg" alt="arrow" width={48} height={48} loading="lazy" />
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Right card */}
                    <div className="col-xl-5">
                        <Link className="sec-9-home-8__card" to="/contact-1" aria-label="Schedule Architecture Review">
                            <div className="sec-9-home-8__card-media">
                                <img
                                    className="sec-9-home-8__card-visors w-100 scale-img-from-to"
                                    data-value-1="1.5"
                                    data-value-2="1"
                                    src="/assets/imgs/pages/agastron/cta1.webp"
                                    alt="Enterprise Architecture Review"
                                    width={500}
                                    height={350}
                                    loading="lazy"
                                />
                            </div>
                            <div className="sec-9-home-8__card-overlay">
                                <span className="sec-9-home-8__card-kicker">
                                    <span>Schedule Architecture Review</span>
                                    <img src="/assets/imgs/pages/home-8/sec9-arrow.svg" alt="arrow" width={16} height={16} loading="lazy" />
                                </span>
                                <p className="sec-9-home-8__card-text mb-0">
                                    Design resilient, mission-critical infrastructure with our certified cloud architects.
                                </p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
