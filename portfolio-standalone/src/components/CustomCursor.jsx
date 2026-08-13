import { useEffect, useRef } from "react";
import useTouchDevice from "../hooks/useTouchDevice.js";

export default function CustomCursor() {
    const isTouch = useTouchDevice();
    const dotRef = useRef(null);
    const ringRef = useRef(null);
    const labelRef = useRef(null);

    useEffect(() => {
        if (isTouch) return;

        const dot = dotRef.current;
        const ring = ringRef.current;
        const label = labelRef.current;

        let mouseX = window.innerWidth / 2;
        let mouseY = window.innerHeight / 2;
        let ringX = mouseX;
        let ringY = mouseY;
        let rafId;

        dot.style.left = mouseX + "px";
        dot.style.top = mouseY + "px";
        ring.style.left = ringX + "px";
        ring.style.top = ringY + "px";

        const onMouseMove = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            dot.style.left = mouseX + "px";
            dot.style.top = mouseY + "px";
        };

        const onMouseOver = (e) => {
            const target = e.target.closest(
                "[data-cursor='view'] , [data-cursor='button'], a, button, .btn"
            );
            if (target) {
                ring.classList.add("is-hovering");
                label.textContent = target.hasAttribute("data-cursor")
                    ? target.getAttribute("data-cursor") === "view"
                        ? "View"
                        : "Open"
                    : "";
            } else {
                ring.classList.remove("is-hovering");
                label.textContent = "";
            }
        };

        function loop() {
            ringX += (mouseX - ringX) * 0.18;
            ringY += (mouseY - ringY) * 0.18;
            ring.style.left = ringX + "px";
            ring.style.top = ringY + "px";
            rafId = requestAnimationFrame(loop);
        }
        loop();

        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseover", onMouseOver);

        return () => {
            cancelAnimationFrame(rafId);
            document.removeEventListener("mousemove", onMouseMove);
            document.removeEventListener("mouseover", onMouseOver);
        };
    }, [isTouch]);

    return (
        <>
            <div className="cursor-dot" id="cursorDot" ref={dotRef}></div>
            <div className="cursor-ring" id="cursorRing" ref={ringRef}>
                <span className="cursor-label" id="cursorLabel" ref={labelRef}>
                    View
                </span>
            </div>
        </>
    );
}