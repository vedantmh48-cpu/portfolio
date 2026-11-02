import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import {
    FaBriefcase,
    FaCode,
    FaGithub,
    FaGraduationCap,
    FaInstagram,
    FaLightbulb,
    FaLinkedin,
} from "react-icons/fa";
import gsap from "gsap";
import useReducedMotion from "../../hooks/useReducedMotion.js";

const socialLinks = [
    { label: "GitHub", href: "https://github.com/vedantmh48-cpu", icon: <FaGithub /> },
    { label: "LinkedIn", href: "https://linkedin.com", icon: <FaLinkedin /> },
    { label: "Instagram", href: "https://www.instagram.com/v1dant_14/", icon: <FaInstagram /> },
];

const heroFeatures = [
    { icon: <FaCode />, value: "10+", title: "Projects", detail: "Delivered" },
    { icon: <FaBriefcase />, value: "4+", title: "Active", detail: "Clients" },
    { icon: <FaGraduationCap />, value: "2+", title: "Years", detail: "Crafting" },
    { icon: <FaLightbulb />, value: "∞", title: "Curious", detail: "Ideas" },
];

export default function Hero() {
    const heroRef = useRef(null);
    const reduced = useReducedMotion();

    useEffect(() => {
        if (reduced || typeof gsap === "undefined") {
            const els = heroRef.current.querySelectorAll(
                ".reveal-1, .reveal-2, .reveal-3, .reveal-4, .reveal-5, .hero-art-wrap, .hero-bg-text"
            );
            els.forEach((el) => (el.style.opacity = "1"));
            return;
        }

        const tl = gsap.timeline({ delay: 0.15 });
        tl.fromTo(".hero-bg-text", { opacity: 0, y: 28 }, { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" }, 0)
            .fromTo(".reveal-1", { yPercent: 115, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 0.82, ease: "power3.out" }, 0.2)
            .fromTo(".reveal-2", { yPercent: 115, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 0.82, ease: "power3.out" }, 0.34)
            .fromTo(".reveal-3", { yPercent: 115, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 0.82, ease: "power3.out" }, 0.48)
            .fromTo(".reveal-4", { y: 22, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: "power3.out", stagger: 0.12 }, 0.75)
            .fromTo(".reveal-5", { y: 18, opacity: 0 }, { y: 0, opacity: 1, duration: 0.65, ease: "power3.out" }, 0.95)
            .fromTo(".hero-art-wrap", { opacity: 0, scale: 0.94, y: 18 }, { opacity: 1, scale: 1, y: 0, duration: 1.15, ease: "power3.out" }, 0.2);

        return () => tl.kill();
    }, [reduced]);

    useEffect(() => {
        if (reduced) return;
        const hero = heroRef.current;
        gsap.to(".hero-bg-text", {
            yPercent: 35,
            ease: "none",
            scrollTrigger: { trigger: hero, start: "top top", end: "bottom top", scrub: true },
        });
        return () => gsap.killTweensOf(".hero-bg-text");
    }, [reduced]);

    return (
        <section className="hero" id="home" ref={heroRef}>
            <div className="hero-bg-text" aria-hidden="true" data-hero-text="Vedant">Vedant</div>

            <div className="hero-inner">
                <aside className="hero-sidebar" aria-label="Social links">
                    {socialLinks.map((social) => (
                        <a
                            key={social.label}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hero-social-link"
                            aria-label={social.label}
                        >
                            {social.icon}
                        </a>
                    ))}
                </aside>

                <div className="hero-left">
                    <h1 className="hero-title">
                        <span className="line-mask"><span className="line reveal-1">Vedant</span></span>
                        <span className="line-mask"><span className="line reveal-2">Mhatre</span></span>
                    </h1>
                    <h2 className="hero-subtitle reveal-3">Full-Stack Developer &amp; Creative Designer</h2>
                    <p className="hero-desc reveal-4">I craft digital experiences that blend design, motion, and technology into something people actually remember.</p>
                    <div className="hero-actions reveal-5">
                        <Link to="/#projects" className="btn btn-primary" data-cursor="button">
                            Explore Projects <span className="btn-arrow" aria-hidden="true">→</span>
                        </Link>
                        <Link to="/#contact" className="btn btn-ghost" data-cursor="button">Contact Me</Link>
                        <a href="https://github.com/vedantmh48-cpu" target="_blank" rel="noopener noreferrer" className="btn btn-ghost" data-cursor="button">
                            GitHub <FaGithub aria-hidden="true" />
                        </a>
                    </div>
                </div>

                <div className="hero-art-wrap">
                    <img
                        src={`${import.meta.env.BASE_URL}images/image.png`}
                        alt="Vedant"
                        className="hero-image"
                    />
                </div>

                <div className="hero-features" aria-label="Portfolio highlights">
                    {heroFeatures.map((feature) => (
                        <div className="hero-feature" key={feature.title}>
                            <span className="hero-feature-icon" aria-hidden="true">{feature.icon}</span>
                            <span className="hero-feature-copy">
                                <span className="hero-feature-value">{feature.value} {feature.title}</span>
                                <span className="hero-feature-detail">{feature.detail}</span>
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            <a href="#projects" className="scroll-hint" data-cursor="button"><span>Scroll</span><span className="scroll-line"></span></a>
        </section>
    );
}
