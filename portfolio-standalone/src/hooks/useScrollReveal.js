import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useReducedMotion from "./useReducedMotion.js";

gsap.registerPlugin(ScrollTrigger);

export default function useScrollReveal(containerRef) {
    const reduced = useReducedMotion();

    useEffect(() => {
        if (!containerRef.current) return;

        if (reduced) {
            // Ensure all reveal elements are visible
            containerRef.current.querySelectorAll("[data-reveal]").forEach((el) => {
                el.style.opacity = "1";
            });
            containerRef.current.querySelectorAll(".bar-fill").forEach((fill) => {
                fill.style.width = fill.style.getPropertyValue("--w") || "85%";
            });
            containerRef.current.querySelectorAll(".line").forEach((line) => {
                line.style.opacity = "1";
            });
            containerRef.current.querySelectorAll(".hero-desc, .hero-badges, .hero-actions").forEach((el) => {
                el.style.opacity = "1";
            });
            return;
        }

        const ctx = gsap.context(() => {
            // Generic scroll reveals
            containerRef.current.querySelectorAll("[data-reveal]").forEach((el) => {
                if (el.classList.contains("project-card")) return;
                gsap.set(el, { y: 50 });
                gsap.to(el, {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: el,
                        start: "top 85%",
                        once: true,
                    },
                });
            });

            // Skill bars
            containerRef.current.querySelectorAll(".skill-group").forEach((group) => {
                ScrollTrigger.create({
                    trigger: group,
                    start: "top 80%",
                    once: true,
                    onEnter: () => {
                        group.querySelectorAll(".bar-fill").forEach((fill) => {
                            gsap.to(fill, {
                                width: fill.style.getPropertyValue("--w") || "85%",
                                duration: 1.4,
                                ease: "expo.out",
                            });
                        });
                    },
                });
            });

            // Project cards stagger
            containerRef.current.querySelectorAll(".project-card").forEach((card, i) => {
                gsap.fromTo(
                    card,
                    { opacity: 0, y: 60 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.9,
                        delay: i * 0.08,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: card,
                            start: "top 85%",
                            once: true,
                        },
                    }
                );
            });

            // Client cards stagger
            containerRef.current.querySelectorAll(".client-card").forEach((card, i) => {
                gsap.fromTo(
                    card,
                    { opacity: 0, y: 60 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.9,
                        delay: i * 0.08,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: card,
                            start: "top 85%",
                            once: true,
                        },
                    }
                );
            });
        }, containerRef);

        return () => ctx.revert();
    }, [containerRef, reduced]);
}