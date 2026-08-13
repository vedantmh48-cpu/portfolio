import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import useReducedMotion from "../../hooks/useReducedMotion.js";
import useTouchDevice from "../../hooks/useTouchDevice.js";

export default function Hero() {
    const heroRef = useRef(null);
    const reduced = useReducedMotion();
    const isTouch = useTouchDevice();

    useEffect(() => {
        if (reduced || typeof gsap === "undefined") {
            // Ensure everything visible without GSAP
            const els = heroRef.current.querySelectorAll(
                ".reveal-1, .reveal-2, .reveal-3, .reveal-4, .reveal-5, .hero-art-wrap, .hero-bg-text"
            );
            els.forEach((el) => (el.style.opacity = "1"));
            return;
        }

        const tl = gsap.timeline({ delay: 0.3 });
        tl.fromTo(
            ".reveal-1",
            { yPercent: 120, opacity: 0 },
            { yPercent: 0, opacity: 1, duration: 1.1, ease: "expo.out" }
        )
            .fromTo(
                ".reveal-2",
                { yPercent: 120, opacity: 0 },
                { yPercent: 0, opacity: 1, duration: 1.1, ease: "expo.out" },
                "-=0.9"
            )
            .fromTo(
                ".reveal-3",
                { yPercent: 120, opacity: 0 },
                { yPercent: 0, opacity: 1, duration: 1.1, ease: "expo.out" },
                "-=0.9"
            )
            .fromTo(
                ".reveal-4",
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.9, ease: "power3.out", stagger: 0.1 },
                "-=0.6"
            )
            .fromTo(
                ".reveal-5",
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.9, ease: "power3.out" },
                "-=0.4"
            )
            .fromTo(
                ".hero-art-wrap",
                { opacity: 0, scale: 0.9 },
                { opacity: 1, scale: 1, duration: 1.4, ease: "expo.out" },
                "-=1.4"
            )
            .fromTo(
                ".hero-bg-text",
                { opacity: 0, y: 40 },
                { opacity: 1, y: 0, duration: 2, ease: "power2.out" },
                0
            );

        return () => {
            tl.kill();
        };
    }, [reduced]);

    useEffect(() => {
        if (isTouch || reduced) return;

        const hero = heroRef.current;
        const artWrap = hero.querySelector(".hero-art-wrap");

        const onMouseMove = (e) => {
            const rect = hero.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;

            gsap.to(artWrap, {
                x: x * 30,
                y: y * 30,
                duration: 1.2,
                ease: "power2.out",
            });

            gsap.to(".float-tag", {
                x: x * 45,
                y: y * 45,
                duration: 1.2,
                ease: "power2.out",
                stagger: 0.05,
            });
        };

        hero.addEventListener("mousemove", onMouseMove);
        return () => hero.removeEventListener("mousemove", onMouseMove);
    }, [isTouch, reduced]);

    useEffect(() => {
        if (reduced) return;
        const hero = heroRef.current;
        gsap.to(".hero-bg-text", {
            yPercent: 35,
            ease: "none",
            scrollTrigger: {
                trigger: hero,
                start: "top top",
                end: "bottom top",
                scrub: true,
            },
        });
        return () => {
            gsap.killTweensOf(".hero-bg-text");
        };
    }, [reduced]);

    return (
        <section className="hero" id="home" ref={heroRef}>
            <div className="hero-bg-text" aria-hidden="true" data-hero-text>
                Vedant
            </div>

            <div className="hero-inner">
                <div className="hero-left">
                    <p className="hero-eyebrow">
                        Full-Stack Developer <span className="sep">•</span> Creative Designer
                    </p>

                    <h1 className="hero-title">
                        <span className="line-mask">
                            <span className="line reveal-1">Proof that I</span>
                        </span>
                        <span className="line-mask">
                            <span className="line reveal-2">do more than</span>
                        </span>
                        <span className="line-mask">
                            <span className="line reveal-3">
                                just <em className="accent-gradient">code.</em>
                            </span>
                        </span>
                    </h1>

                    <p className="hero-desc reveal-4">
                        I craft digital experiences that blend design, motion, and technology
                        into something people actually remember.
                    </p>

                    <div className="hero-badges reveal-4">
                        <span className="badge">▲ Creative Developer</span>
                        <span className="badge">● UI / UX Design</span>
                        <span className="badge">✦ Interactive Experiences</span>
                    </div>

                    <div className="hero-actions reveal-5">
                        <Link to="/#projects" className="btn btn-primary" data-cursor="button">
                            View My Work
                        </Link>
                        <Link to="/#contact" className="btn btn-ghost" data-cursor="button">
                            Let's Talk
                        </Link>
                    </div>
                </div>

                <div className="hero-art-wrap" data-parallax-wrap>
                    <span className="float-tag tag-1">✦ Ghibli Spirit</span>
                    <span className="float-tag tag-2">◉ Motion Magic</span>
                    <span className="float-tag tag-3">◆ Pixel Perfect</span>

                    <div className="hero-art" data-cursor="view">
                        <img src="/portfolio/images/profile-art-1.png" alt="Vedant creative artwork" id="heroArt" className="hero-art-img" />
                        <div className="art-ring"></div>
                    </div>

                    <div className="particles" aria-hidden="true">
                        <span className="particle p1"></span>
                        <span className="particle p2"></span>
                        <span className="particle p3"></span>
                        <span className="particle p4"></span>
                        <span className="particle p5"></span>
                        <span className="particle p6"></span>
                    </div>
                </div>
            </div>

            <a href="#projects" className="scroll-hint" data-cursor="button">
                <span>Scroll</span>
                <span className="scroll-line"></span>
            </a>
        </section>
    );
}