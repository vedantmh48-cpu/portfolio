import { useEffect, useState, useRef } from "react";

export default function Preloader({ onFinish }) {
    const [progress, setProgress] = useState(0);
    const [leaving, setLeaving] = useState(false);
    const [done, setDone] = useState(false);
    const intervalRef = useRef(null);

    useEffect(() => {
        // Simulate loading progress
        intervalRef.current = setInterval(() => {
            setProgress((prev) => {
                const next = Math.min(prev + Math.random() * 8 + 2, 100);
                if (next >= 100) {
                    clearInterval(intervalRef.current);
                    // Trigger exit animation
                    setTimeout(() => {
                        setLeaving(true);
                        setTimeout(() => {
                            setDone(true);
                            onFinish?.();
                        }, 700);
                    }, 300);
                }
                return next;
            });
        }, 120);

        // Safety: force complete after 4 seconds max
        const safety = setTimeout(() => {
            clearInterval(intervalRef.current);
            setProgress(100);
            setTimeout(() => {
                setLeaving(true);
                setTimeout(() => {
                    setDone(true);
                    onFinish?.();
                }, 700);
            }, 300);
        }, 4000);

        return () => {
            clearInterval(intervalRef.current);
            clearTimeout(safety);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (done) return null;

    return (
        <div className={`preloader${leaving ? " preloader-leave" : ""}`}>
            <div className="preloader-inner">
                {/* Logo with pulsing rings */}
                <div className="preloader-logo-wrap">
                    <div className="preloader-ring"></div>
                    <div className="preloader-ring outer"></div>
                    <img
                        src="logo.png"
                        alt="Vedant logo"
                        className="preloader-logo"
                        draggable="false"
                    />
                </div>

                {/* Animated name */}
                <div className="preloader-name">
                    {"VedantMhatre".split("").map((char, i) => (
                        <span key={i} className="preloader-char" style={{ animationDelay: `${i * 0.08}s` }}>
                            {char}
                        </span>
                    ))}
                    <span className="preloader-dot">.</span>
                </div>

                {/* Tagline */}
                <p className="preloader-tagline">Creative Developer & Designer</p>

                {/* Progress bar */}
                <div className="preloader-bar-wrap">
                    <div className="preloader-bar" style={{ width: `${progress}%` }}></div>
                </div>
                <div className="preloader-percent">{Math.round(progress)}%</div>
            </div>
        </div>
    );
}