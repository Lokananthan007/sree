import React from "react";
import "./GetInTouch.css";

function GetInTouch() {
    return (
        <div id="GetInTouch">
            <section className="contact-header" data-animate="fade-in" data-delay="0.2s">
                <h2 data-animate="fade-in" data-delay="0.2s">Let’s Build Something Amazing Together</h2>
                <p data-animate="fade-in" data-delay="0.2s">
                    We specialize in Software Development, Mobile Apps, Websites and Digital Marketing.
                    Reach out and let’s make your vision real.
                </p>
            </section>

            <section className="contact-options" data-animate="fade-in" data-delay="0.2s">
                <div className="Getcard" data-animate="fade-in" data-delay="0.2s">
                    <div className="Getcontent-container" data-animate="fade-in" data-delay="0.2s">
                        <div className="Getimage-container" data-animate="fade-in" data-delay="0.2s">
                            <img src="https://img.icons8.com/fluency/48/email.png" alt="Email" />
                        </div>
                        <div className="Gettext-container" data-animate="fade-in" data-delay="0.2s">
                            <h3 data-animate="fade-in" data-delay="0.2s">📧 Email Us</h3>
                            <p data-animate="fade-in" data-delay="0.2s">Drop us a line anytime. We usually respond within a few hours.</p>
                            <a href="mailto:sreeinfinitytech@gmail.com" className="contact-link" data-animate="fade-in" data-delay="0.2s">
                                sreeinfinitytech@gmail.com
                            </a>
                        </div>
                    </div>
                </div>

                <div className="Getcard" data-animate="fade-in" data-delay="0.2s">
                    <div className="Getcontent-container" data-animate="fade-in" data-delay="0.2s">
                        <div className="Getimage-container" data-animate="fade-in" data-delay="0.2s">
                            <img src="https://img.icons8.com/fluency/48/phone.png" alt="Phone" />
                        </div>
                        <div className="Gettext-container" data-animate="fade-in" data-delay="0.2s">
                            <h3 data-animate="fade-in" data-delay="0.2s">📞 Call or WhatsApp</h3>
                            <p data-animate="fade-in" data-delay="0.2s">Have a quick question? Call or message us directly.</p>
                            <a href="tel:+917200447570" className="contact-link" data-animate="fade-in" data-delay="0.2s">
                                +91 72004 47570
                            </a>
                        </div>
                    </div>
                </div>

                <div className="Getcard" data-animate="fade-in" data-delay="0.2s">
                    <div className="Getcontent-container" data-animate="fade-in" data-delay="0.2s">
                        <div className="Getimage-container" data-animate="fade-in" data-delay="0.2s">
                            <img src="https://img.icons8.com/fluency/48/chat.png" alt="Chat" />
                        </div>
                        <div className="Gettext-container" data-animate="fade-in" data-delay="0.2s">
                            <h3 data-animate="fade-in" data-delay="0.2s">🌐 Connect With Us Online</h3>
                            <p data-animate="fade-in" data-delay="0.2s">We're always just a click away. Let's collaborate virtually!</p>
                            <p className="contact-link" data-animate="fade-in" data-delay="0.2s">
                                Email us at <a href="mailto:sreeinfinitytech@gmail.com">sreeinfinitytech@gmail.com</a> or chat with us on our website.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="contact-cta" data-animate="fade-in" data-delay="0.2s">
                <h3 data-animate="fade-in" data-delay="0.2s">💬 Schedule a Free Consultation</h3>
                <p data-animate="fade-in" data-delay="0.2s">We’ll review your requirements and share a roadmap with timelines and pricing.</p>
                <a href="https://calendly.com/d/cryk-5dp-wdm/one-off-meeting" target="_blank" rel="noreferrer">
                    <button className="cta-button" data-animate="fade-in" data-delay="0.2s">Book a Call</button>
                </a>
            </section>

            <section className="contact-faq" data-animate="fade-in" data-delay="0.2s">
                <h3 data-animate="fade-in" data-delay="0.2s">🤔 Frequently Asked Questions</h3>
                <ul>
                    <li data-animate="fade-in" data-delay="0.2s"><strong>Q:</strong> How long does it take to complete a project?</li>
                    <li data-animate="fade-in" data-delay="0.2s"><strong>A:</strong> It depends on the complexity. Small projects take 1-2 weeks, full systems may take 1-3 months.</li>

                    <li data-animate="fade-in" data-delay="0.2s"><strong>Q:</strong> Do you offer post-launch support?</li>
                    <li data-animate="fade-in" data-delay="0.2s"><strong>A:</strong> Yes, we offer maintenance and scaling support plans.</li>
                </ul>
            </section>
        </div>
    );
}

export default GetInTouch;
