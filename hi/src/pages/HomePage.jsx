import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hero from "../components/sections/Hero.jsx";
import About from "../components/sections/About.jsx";
import Projects from "../components/sections/Projects.jsx";
import Clients from "../components/sections/Clients.jsx";
import Skills from "../components/sections/Skills.jsx";
import Contact from "../components/sections/Contact.jsx";
import useScrollReveal from "../hooks/useScrollReveal.js";

gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {
    const revealContainerRef = useRef(null);
    useScrollReveal(revealContainerRef);

    useEffect(() => {
        const id = requestAnimationFrame(() => {
            ScrollTrigger.refresh();
        });
        return () => cancelAnimationFrame(id);
    }, []);

    return (
        <main ref={revealContainerRef}>
            <Hero />
            <About />
            <Projects />
            <Clients />
            <Skills />
            <Contact />
        </main>
    );
}
