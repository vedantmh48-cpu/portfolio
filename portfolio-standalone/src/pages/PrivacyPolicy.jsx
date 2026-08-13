import { Link } from "react-router-dom";

export default function PrivacyPolicy() {
    return (
        <main className="legal-page">
            <div className="legal-container">
                <Link to="/" className="legal-back">
                    ← Back to Home
                </Link>

                <h1>Privacy Policy</h1>
                <p className="legal-updated">Last updated: August 13, 2026</p>

                <div className="legal-card">
                    <section className="legal-section">
                        <h2>1. Introduction</h2>
                        <p>
                            This Privacy Policy explains how Vedant ("I", "me", "my") collects, uses, and protects
                            information when you visit my portfolio website. By using this site, you agree to the
                            practices described in this policy.
                        </p>
                    </section>

                    <section className="legal-section">
                        <h2>2. Information I Collect</h2>
                        <p>I collect the following types of information:</p>
                        <ul>
                            <li>
                                <strong>Contact Form Data:</strong> When you submit the contact form, I receive your
                                name, email address, subject, and message.
                            </li>
                            <li>
                                <strong>Analytics Data:</strong> Anonymous usage data such as pages visited, time spent,
                                and device type may be collected to improve the site experience.
                            </li>
                            <li>
                                <strong>Cookies:</strong> Basic cookies may be used to enhance functionality and remember
                                preferences.
                            </li>
                        </ul>
                    </section>

                    <section className="legal-section">
                        <h2>3. How I Use Your Information</h2>
                        <p>The information collected is used to:</p>
                        <ul>
                            <li>Respond to inquiries and messages sent through the contact form.</li>
                            <li>Improve and optimize the website's content and user experience.</li>
                            <li>Analyze site traffic and performance anonymously.</li>
                            <li>Communicate about potential project collaborations or opportunities.</li>
                        </ul>
                    </section>

                    <section className="legal-section">
                        <h2>4. Data Storage & Security</h2>
                        <p>
                            Your contact information is processed through your email client when you use the contact form
                            — no personal data is stored on this server. The website is hosted on secure infrastructure,
                            and reasonable measures are taken to protect any data transmitted.
                        </p>
                    </section>

                    <section className="legal-section">
                        <h2>5. Third-Party Services</h2>
                        <p>The website may include links to third-party services including:</p>
                        <ul>
                            <li>GitHub</li>
                            <li>LinkedIn</li>
                            <li>Instagram</li>
                            <li>WhatsApp</li>
                            <li>Google Fonts (for typography)</li>
                        </ul>
                        <p>
                            These services have their own privacy policies. I encourage you to review them when visiting
                            external links.
                        </p>
                    </section>

                    <section className="legal-section">
                        <h2>6. Your Rights</h2>
                        <p>You have the right to:</p>
                        <ul>
                            <li>Request access to any personal data I may hold about you.</li>
                            <li>Request correction of inaccurate data.</li>
                            <li>Request deletion of your data.</li>
                            <li>Opt out of any future communications.</li>
                        </ul>
                        <p>
                            To exercise any of these rights, contact me at{" "}
                            <a href="mailto:vedantmh48@gmail.com" style={{ color: "var(--accent)" }}>
                                vedantmh48@gmail.com
                            </a>
                            .
                        </p>
                    </section>

                    <section className="legal-section">
                        <h2>7. Changes to This Policy</h2>
                        <p>
                            I may update this Privacy Policy from time to time. Any changes will be posted on this page
                            with an updated revision date.
                        </p>
                    </section>

                    <section className="legal-section">
                        <h2>8. Contact</h2>
                        <p>
                            If you have any questions about this Privacy Policy, please reach out via email at{" "}
                            <a href="mailto:vedantmh48@gmail.com" style={{ color: "var(--accent)" }}>
                                vedantmh48@gmail.com
                            </a>
                            .
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
}