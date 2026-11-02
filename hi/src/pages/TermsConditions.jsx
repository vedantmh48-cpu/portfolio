import { Link } from "react-router-dom";

export default function TermsConditions() {
    return (
        <main className="legal-page">
            <div className="legal-container">
                <Link to="/" className="legal-back">
                    ← Back to Home
                </Link>

                <h1>Terms & Conditions</h1>
                <p className="legal-updated">Last updated: August 13, 2026</p>

                <div className="legal-card">
                    <section className="legal-section">
                        <h2>1. Acceptance of Terms</h2>
                        <p>
                            By accessing and using this portfolio website, you agree to be bound by these Terms &
                            Conditions and all applicable laws and regulations. If you do not agree with any of these
                            terms, you are prohibited from using this site.
                        </p>
                    </section>

                    <section className="legal-section">
                        <h2>2. Use of Content</h2>
                        <ul>
                            <li>All content on this website, including text, images, graphics, and code, is the property of Vedant.</li>
                            <li>You may not reproduce, distribute, or use any content for commercial purposes without prior written permission.</li>
                            <li>You may not claim any content as your own or use it in a misleading manner.</li>
                            <li>Educational and personal reference use is permitted with proper attribution.</li>
                        </ul>
                    </section>

                    <section className="legal-section">
                        <h2>3. Intellectual Property</h2>
                        <p>
                            All intellectual property rights in the design, layout, graphics, and original content of this
                            website are owned by Vedant. Your use of this website does not grant you any ownership rights
                            to its content.
                        </p>
                    </section>

                    <section className="legal-section">
                        <h2>4. Project Information</h2>
                        <p>
                            Information about projects showcased on this website is provided "as is" for demonstration
                            purposes. Some projects may be in development or maintenance, and I make no guarantees
                            regarding their availability or performance.
                        </p>
                    </section>

                    <section className="legal-section">
                        <h2>5. External Links</h2>
                        <p>
                            This website may contain links to external websites (GitHub, LinkedIn, Instagram, WhatsApp,
                            client websites). I am not responsible for the content, policies, or practices of any
                            third-party websites.
                        </p>
                    </section>

                    <section className="legal-section">
                        <h2>6. Limitation of Liability</h2>
                        <p>
                            The website and its content are provided without warranties of any kind, either express or
                            implied. I shall not be liable for any damages arising from your use of, or inability to use,
                            this website.
                        </p>
                    </section>

                    <section className="legal-section">
                        <h2>7. Changes to Terms</h2>
                        <p>
                            I reserve the right to modify or replace these Terms & Conditions at any time. Your
                            continued use of the website after changes constitutes acceptance of the revised terms.
                        </p>
                    </section>

                    <section className="legal-section">
                        <h2>8. Contact & Disputes</h2>
                        <p>
                            For any questions or concerns regarding these terms, contact me at{" "}
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