import { Link } from "react-router-dom";
import { FaEnvelope, FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";

const quickLinks = [
    { label: "Home", to: "/#home" },
    { label: "Projects", to: "/#projects" },
    { label: "Clients", to: "/#clients" },
    { label: "About", to: "/#about" },
    { label: "Skills", to: "/#skills" },
    { label: "Contact", to: "/#contact" },
];

const siteLinks = [
    { label: "Home", to: "/#home" },
    { label: "Projects", to: "/#projects" },
    { label: "Clients", to: "/#clients" },
    { label: "About", to: "/#about" },
    { label: "Skills", to: "/#skills" },
    { label: "Contact", to: "/#contact" },
    { label: "Privacy Policy", to: "/privacy-policy" },
    { label: "Terms & Conditions", to: "/terms-conditions" },
    { label: "Sitemap", to: "/sitemap" },
];

const contactLinks = [
    { label: "Email", href: "mailto:vedantmh48@gmail.com", icon: <FaEnvelope /> },
    { label: "GitHub", href: "https://github.com/vedantmh48-cpu", icon: <FaGithub /> },
    { label: "LinkedIn", href: "https://linkedin.com", icon: <FaLinkedin /> },
    { label: "Instagram", href: "https://www.instagram.com/v1dant_14/", icon: <FaInstagram /> },
    { label: "WhatsApp", href: "https://wa.me/919028076580?text=Hi%20Vedant!%20I'd%20love%20to%20work%20with%20you.", icon: <FaWhatsapp /> },
];

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    {/* Brand / About */}
                    <div className="footer-col footer-brand">
                        <Link to="/#home" className="logo" data-cursor="button">
                            <img src={`${import.meta.env.BASE_URL}Logo1.png`} alt="Vedant logo" className="logo-img" draggable="false" />
                            <span className="logo-text">VedantMhatre<span className="dot">.</span></span>
                        </Link>
                        <p>
                            Psychologist? No — a creative developer and designer building digital
                            experiences that blend design, motion, and technology into
                            things people actually remember.
                        </p>
                        <div className="footer-socials">
                            {contactLinks.slice(0, 4).map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="footer-social"
                                    aria-label={link.label}
                                >
                                    {link.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-col">
                        <h4>Quick Links</h4>
                        <ul>
                            {quickLinks.map((link) => (
                                <li key={link.to}>
                                    <Link to={link.to} className="footer-link">{link.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Sitemap & Legal */}
                    <div className="footer-col">
                        <h4>Navigate</h4>
                        <ul>
                            {siteLinks.slice(0, 4).map((link) => (
                                <li key={link.to}>
                                    <Link to={link.to} className="footer-link">{link.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="footer-col footer-contact-col">
                        <h4>Get In Touch</h4>
                        <ul className="footer-contact-list">
                            <li>
                                <a href="mailto:vedantmh48@gmail.com" className="footer-contact-link">
                                    <span className="footer-contact-icon"><FaEnvelope /></span>
                                    vedantmh48@gmail.com
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/vedantmh48-cpu" target="_blank" rel="noopener noreferrer" className="footer-contact-link">
                                    <span className="footer-contact-icon"><FaGithub /></span>
                                    GitHub
                                </a>
                            </li>
                            <li>
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-contact-link">
                                    <span className="footer-contact-icon"><FaLinkedin /></span>
                                    LinkedIn
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="footer-watermark" aria-hidden="true" data-watermark="Vedant">Vedant</div>

                <div className="footer-bottom">
                    <p className="copyright">
                        © {year} Vedant. Designed & built with intention.
                    </p>
                    <div className="footer-legal">
                        <Link to="/privacy-policy" className="footer-legal-link">Privacy Policy</Link>
                        <span className="divider">•</span>
                        <Link to="/terms-conditions" className="footer-legal-link">Terms & Conditions</Link>
                        <span className="divider">•</span>
                        <Link to="/sitemap" className="footer-legal-link">Sitemap</Link>
                    </div>
                    <p className="availability">
                        <span className="pulse-dot"></span>
                        Available for freelance & full-time
                    </p>
                </div>
            </div>
        </footer>
    );
}
