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
            containerRef.current.querySelectorAll("[data-reveal]").forEach((el) => { el.style.opacity = "1"; });
            containerRef.current.querySelectorAll(".bar-fill").forEach((fill) => { fill.style.width = fill.style.getPropertyValue("--w") || "85%"; });
            containerRef.current.querySelectorAll(".line").forEach((line) => { line.style.opacity = "1"; });
            containerRef.current.querySelectorAll(".hero-desc, .hero-badges, .hero-actions").forEach((el) => { el.style.opacity = "1"; });
            return;
        }

        const ctx = gsap.context(() => {
            containerRef.current.querySelectorAll("[data-reveal]").forEach((el) => {
                const isCard = el.matches(".project-card, .client-card, .skill-group, .about-card");
                const cards = el.parentElement?.querySelectorAll(".project-card, .client-card, .skill-group, .about-card");
                const cardIndex = isCard && cards ? Array.from(cards).indexOf(el) : 0;

                gsap.fromTo(el, {
                    opacity: 0,
                    y: isCard ? 42 : 28,
                    scale: isCard ? 0.975 : 1,
                    filter: "blur(8px)",
                }, {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    filter: "blur(0px)",
                    duration: isCard ? 0.85 : 0.72,
                    delay: cardIndex * 0.07,
                    ease: "power3.out",
                    clearProps: "transform,filter",
                    scrollTrigger: { trigger: el, start: "top 86%", once: true },
                });
            });

            containerRef.current.querySelectorAll(".skill-group").forEach((group) => {
                ScrollTrigger.create({
                    trigger: group,
                    start: "top 80%",
                    once: true,
                    onEnter: () => group.querySelectorAll(".bar-fill").forEach((fill) => {
                        gsap.to(fill, { width: fill.style.getPropertyValue("--w") || "85%", duration: 1.4, ease: "expo.out" });
                    }),
                });
            });

        }, containerRef);

        return () => ctx.revert();
    }, [containerRef, reduced]);
}
