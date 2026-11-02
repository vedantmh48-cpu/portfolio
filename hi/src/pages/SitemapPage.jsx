import { Link } from "react-router-dom";

const mainLinks = [
    { label: "Home", to: "/#home" },
    { label: "Projects", to: "/#projects" },
    { label: "Clients", to: "/#clients" },
    { label: "About", to: "/#about" },
    { label: "Skills", to: "/#skills" },
    { label: "Contact", to: "/#contact" },
];

const legalLinks = [
    { label: "Privacy Policy", to: "/privacy-policy" },
    { label: "Terms & Conditions", to: "/terms-conditions" },
    { label: "Sitemap", to: "/sitemap" },
];

const externalLinks = [
    { label: "GitHub", href: "https://github.com/vedantmh48-cpu" },
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "Instagram", href: "https://instagram.com" },
    { label: "WhatsApp", href: "https://wa.me/919999999999" },
    { label: "Vedant Travels", href: "https://vedantgo.in" },
];

export default function SitemapPage() {
    return (
        <main className="sitemap-page">
            <div className="sitemap-container">
                <Link to="/" className="legal-back">
                    ← Back to Home
                </Link>

                <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.4rem, 5vw, 3.8rem)", fontWeight: 800, textTransform: "uppercase", letterSpacing: "-0.02em" }}>
                    Sitemap
                </h1>
                <p className="legal-updated">A complete overview of all pages and navigation links on this website.</p>

                <div className="sitemap-grid">
                    <div className="sitemap-card">
                        <h3><span>◆</span> Main Sections</h3>
                        <ul>
                            {mainLinks.map((link) => (
                                <li key={link.to}>
                                    <Link to={link.to}>{link.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="sitemap-card">
                        <h3><span>◆</span> Legal Pages</h3>
                        <ul>
                            {legalLinks.map((link) => (
                                <li key={link.to}>
                                    <Link to={link.to}>{link.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="sitemap-card">
                        <h3><span>↗</span> External Links</h3>
                        <ul>
                            {externalLinks.map((link) => (
                                <li key={link.label}>
                                    <a href={link.href} target="_blank" rel="noopener noreferrer">
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="sitemap-card">
                        <h3><span>✉</span> Contact</h3>
                        <ul>
                            <li>
                                <a href="mailto:vedantmh48@gmail.com">vedantmh48@gmail.com</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    );
}
