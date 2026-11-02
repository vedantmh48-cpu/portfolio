import { useEffect, useRef } from "react";

export default function ScrollProgress() {
    const progressRef = useRef(null);

    useEffect(() => {
        const onScroll = () => {
            const y = window.scrollY;
            const total = document.documentElement.scrollHeight - window.innerHeight;
            const progress = total > 0 ? y / total : 0;
            if (progressRef.current) {
                progressRef.current.style.transform = `scaleX(${progress})`;
            }
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return <div className="scroll-progress" id="scrollProgress" ref={progressRef}></div>;
}