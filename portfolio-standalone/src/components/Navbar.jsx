import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
    { label: "Home", to: "/#home" },
    { label: "Projects", to: "/#projects" },
    { label: "Clients", to: "/#clients" },
    { label: "About", to: "/#about" },
    { label: "Skills", to: "/#skills" },
    { label: "Contact", to: "/#contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        setMenuOpen(false);
        document.body.classList.remove("menu-open");
    }, [location.pathname]);

    useEffect(() => {
        document.body.classList.toggle("menu-open", menuOpen);
        return () => document.body.classList.remove("menu-open");
    }, [menuOpen]);

    const handleNavClick = (e, to) => {
        setMenuOpen(false);
        document.body.classList.remove("menu-open");
        const hash = to.split("#")[1];
        if (hash) {
            e.preventDefault();
            if (location.pathname !== "/") {
                window.location.href = to;
            } else {
                document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
            }
        }
    };

    return (
        <>
            <header className={`nav${scrolled ? " scrolled" : ""}`} id="navbar">
                <nav className="nav-inner">
                    <Link to="/#home" className="logo" data-cursor="button" onClick={(e) => handleNavClick(e, "/#home")}>
                        <img src="/portfolio/logo.png" alt="Vedant logo" className="logo-img" draggable="false" />
                        <span className="logo-text">VedantMhatre<span className="dot">.</span></span>
                    </Link>

                    <ul className="nav-links">
                        {navLinks.map((link) => (
                            <li key={link.to}>
                                <Link
                                    to={link.to}
                                    className="nav-link"
                                    data-cursor="button"
                                    onClick={(e) => handleNavClick(e, link.to)}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <Link to="/#contact" className="nav-cta" data-cursor="button" onClick={(e) => handleNavClick(e, "/#contact")}>
                        Let's Talk
                    </Link>

                    <button
                        className={`hamburger${menuOpen ? " active" : ""}`}
                        id="hamburger"
                        aria-label="Toggle menu"
                        data-cursor="button"
                        onClick={() => setMenuOpen((o) => !o)}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </nav>
            </header>

            <div className={`mobile-menu${menuOpen ? " open" : ""}`} id="mobileMenu">
                <ul>
                    {navLinks.map((link) => (
                        <li key={link.to}>
                            <Link
                                to={link.to}
                                className="mobile-link"
                                onClick={(e) => handleNavClick(e, link.to)}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}