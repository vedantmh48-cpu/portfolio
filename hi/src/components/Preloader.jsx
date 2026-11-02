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
                <div className="preloader-art-frame">
                    <img
                        src={`${import.meta.env.BASE_URL}loadingpage1.png`}
                        alt="Vedant Mhatre — Crafting something amazing"
                        className="preloader-artwork"
                        draggable="false"
                    />
                    <div
                        className="preloader-bar-wrap"
                        role="progressbar"
                        aria-label="Loading portfolio"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        aria-valuenow={Math.round(progress)}
                    >
                        <div className="preloader-bar" style={{ width: `${progress}%` }} />
                    </div>
                    <span className="preloader-status" role="status" aria-live="polite">
                        {Math.round(progress)}% loaded
                    </span>
                </div>
            </div>
        </div>
    );
}
