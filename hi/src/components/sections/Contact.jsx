import { useRef, useState } from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";

const EMAIL = "vedantmh48@gmail.com";

export default function Contact() {
    const formRef = useRef(null);
    const [formStatus, setFormStatus] = useState({ type: "", text: "" });
    const [copied, setCopied] = useState(false);

    const handleCopyEmail = async () => {
        try {
            await navigator.clipboard.writeText(EMAIL);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = formRef.current;
        const name = form.contactName.value.trim();
        const email = form.contactEmail.value.trim();
        const subject = form.contactSubject.value.trim();
        const message = form.contactMessage.value.trim();

        if (!name || !email || !subject || !message) {
            setFormStatus({ type: "error", text: "Please fill in all fields." });
            return;
        }

        const mailtoLink = `mailto:${EMAIL}?subject=${encodeURIComponent(
            subject
        )}&body=${encodeURIComponent(
            `Name: ${name}\nEmail: ${email}\n\n${message}`
        )}`;

        window.location.href = mailtoLink;

        setFormStatus({ type: "success", text: "Opening your email client..." });
        form.reset();

        setTimeout(() => {
            setFormStatus({ type: "", text: "" });
        }, 5000);
    };

    return (
        <section className="contact" id="contact" data-section="05">
            <div className="container">
                <p className="section-label center" data-reveal><span className="label-index">05</span>Let's Connect</p>
                <h2 className="section-title center" data-reveal>
                    Let's Make Something
                    <em className="accent-gradient">Awesome Together.</em>
                </h2>

                <div className="contact-grid" data-reveal>
                    <div className="contact-form-wrap">
                        <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="contactName">Name</label>
                                    <input type="text" id="contactName" name="contactName" placeholder="Your name" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="contactEmail">Email</label>
                                    <input type="email" id="contactEmail" name="contactEmail" placeholder="you@email.com" required />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="contactSubject">Subject</label>
                                <input type="text" id="contactSubject" name="contactSubject" placeholder="What's this about?" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="contactMessage">Message</label>
                                <textarea id="contactMessage" name="contactMessage" rows="5" placeholder="Tell me about your project..." required></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary btn-full" data-cursor="button">Send Message</button>
                            <p className={`form-status${formStatus.type ? ` ${formStatus.type}` : ""}`}>
                                {formStatus.text}
                            </p>
                        </form>
                    </div>

                    <div className="contact-image-wrap">
                        <div className="contact-image" data-cursor="view">
                            <img src={`${import.meta.env.BASE_URL}images/profile-art-1.png`} alt="Vedant contact artwork" className="contact-img" />
                            <div className="contact-image-ring"></div>
                        </div>
                        <div className="contact-image-caption">
                            <span className="pulse-dot"></span>
                            <span>Available for new projects</span>
                        </div>
                    </div>
                </div>

                <div className="contact-links" data-reveal>
                    <button
                        className={`contact-link copy-email${copied ? " copied" : ""}`}
                        id="copyEmail"
                        data-cursor="button"
                        onClick={handleCopyEmail}
                    >
                        <span className="contact-icon" aria-hidden="true"><FaEnvelope /></span>
                        <span className="contact-text">{EMAIL}</span>
                        <span className="copy-hint">{copied ? "Copied!" : "Copy"}</span>
                    </button>

                    <a href="https://github.com/vedantmh48-cpu" target="_blank" rel="noopener" className="contact-link" data-cursor="button">
                        <span className="contact-icon" aria-hidden="true"><FaGithub /></span>
                        <span className="contact-text">GitHub</span>
                        <span className="link-arrow">↗</span>
                    </a>

                    <a href="https://linkedin.com" target="_blank" rel="noopener" className="contact-link" data-cursor="button">
                        <span className="contact-icon" aria-hidden="true"><FaLinkedin /></span>
                        <span className="contact-text">LinkedIn</span>
                        <span className="link-arrow">↗</span>
                    </a>

                    <a href="https://instagram.com" target="_blank" rel="noopener" className="contact-link" data-cursor="button">
                        <span className="contact-icon" aria-hidden="true"><FaInstagram /></span>
                        <span className="contact-text">Instagram</span>
                        <span className="link-arrow">↗</span>
                    </a>

                    <a href={`https://wa.me/?text=Hi%20Vedant!%20I'd%20love%20to%20work%20with%20you.`} target="_blank" rel="noopener" className="contact-link" data-cursor="button">
                        <span className="contact-icon" aria-hidden="true"><FaWhatsapp /></span>
                        <span className="contact-text">WhatsApp</span>
                        <span className="link-arrow">↗</span>
                    </a>
                </div>

            </div>
        </section>
    );
}
