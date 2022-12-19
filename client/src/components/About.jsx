import React from 'react'
// import "./Style.css";

const
    About
        = () => {
            return (
                <div>
                    <section className="about">
                        <div className="container">
                            <h2 className="lg-header text-black about-heading">About Us</h2>
                            <p>Lorem ipsum dolor, sit amer consectetur adipisicing elit. Ipsum enim quaerat nisi fugiat odio mollitia accusamus aspernatur est, asperiores illo?</p>
                            <div className="about-wrapper">
                                <div className="left">
                                    <ul>
                                        <li>Lorem ipsum dolor sit.</li>
                                        <li>Lorem ipsum dolor sit.</li>
                                        <li>Lorem ipsum dolor sit.</li>
                                    </ul>
                                </div>
                                <div className="right">
                                    <ul>
                                        <li>Lorem ipsum dolor sit.</li>
                                        <li>Lorem ipsum dolor sit.</li>
                                        <li>Lorem ipsum dolor sit.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="counts container">
                            <div className="count-item count-item1">
                                <span className="md-heading text-red text-bold">2500</span>
                                <p className="text-bold text-bold text-black">Travelled</p>
                            </div>
                            <div className="count-item count-item2">
                                <span className="md-heading text-red text-bold">500</span>
                                <p className="text-bold text-bold text-black">Places</p>
                            </div>
                            <div className="count-item count-item3">
                                <span className="md-heading text-red text-bold">400</span>
                                <p className="text-bold text-bold text-black">Guide</p>
                            </div>
                            <div className="count-item count-item4">
                                <span className="md-heading text-red text-bold">20</span>
                                <p className="text-bold text-bold text-black">Support</p>
                            </div>
                        </div>
                        <div className="cta-banner container">
                            <div className="cta-banner-left">
                                <p className="cta-banner-line">
                                    What are you waiting for, reach us right now.
                                </p>
                            </div>
                            <div className="cta-banner-right">
                                <a href="contact.html" className="btn-cta md-heading">Contact Us</a>
                            </div>
                        </div>
                    </section>
                </div>
            )
        }

export default About
