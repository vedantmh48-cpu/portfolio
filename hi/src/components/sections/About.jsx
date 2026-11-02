import { useRef, useState } from "react";

const stories = [
    {
        id: "design",
        label: "Design",
        eyebrow: "01 / Visual direction",
        title: "Make it feel as good as it works.",
        description: "I start with the feeling an experience should leave behind, then shape a clear visual language around it. Thoughtful typography, considered color and small details turn a useful interface into a memorable one.",
        skills: ["UI / UX", "Visual systems", "Motion"],
    },
    {
        id: "engineering",
        label: "Engineering",
        eyebrow: "02 / Thoughtful build",
        title: "Turn ambitious ideas into real things.",
        description: "I bring design and development together, building responsive interfaces that feel considered on every screen. I care about clean structure, purposeful interactions and the craft behind the final polish.",
        skills: ["React", "Frontend", "Interaction"],
    },
    {
        id: "curiosity",
        label: "Curiosity",
        eyebrow: "03 / Always exploring",
        title: "Keep asking what could be better.",
        description: "The best work comes from exploring beyond the obvious. I experiment with new tools, follow the details that spark curiosity and keep learning so every project has room to become something more.",
        skills: ["Creative code", "New ideas", "Learning"],
    },
];

export default function About() {
    const [activeStory, setActiveStory] = useState(0);
    const tabRefs = useRef([]);
    const selected = stories[activeStory];

    const handleTabKeyDown = (event) => {
        let nextIndex = activeStory;
        if (event.key === "ArrowRight") nextIndex = (activeStory + 1) % stories.length;
        else if (event.key === "ArrowLeft") nextIndex = (activeStory - 1 + stories.length) % stories.length;
        else if (event.key === "Home") nextIndex = 0;
        else if (event.key === "End") nextIndex = stories.length - 1;
        else return;

        event.preventDefault();
        setActiveStory(nextIndex);
        tabRefs.current[nextIndex]?.focus();
    };

    return (
        <section className="about" id="about" data-section="01">
            <div className="container">
                <p className="section-label" data-reveal><span className="label-index">01</span>About Me</p>
                <h2 className="section-title" data-reveal>
                    A little about <em className="accent-gradient">how I create.</em>
                </h2>
                <div className="about-story" data-reveal>
                    <figure className="about-portrait">
                        <img
                            src={`${import.meta.env.BASE_URL}images/1000043778.png`}
                            alt="Illustration of Vedant looking out over a city at sunset"
                            loading="lazy"
                        />
                        <span className="about-portrait-shade" aria-hidden="true"></span>
                        <figcaption className="about-portrait-caption">
                            <span className="about-portrait-mark">VM</span>
                            <span><strong>Vedant Mhatre</strong><small>Developer with a designer's eye</small></span>
                        </figcaption>
                        <span className="about-portrait-index" aria-hidden="true">01—03</span>
                    </figure>

                    <div className="about-story-panel">
                        <p className="about-intro">Hi, I'm Vedant — a creative developer who enjoys bringing thoughtful ideas to life through design and code.</p>
                        <div className="about-tabs" role="tablist" aria-label="How I create" onKeyDown={handleTabKeyDown}>
                            {stories.map((story, index) => (
                                <button
                                    key={story.id}
                                    id={`about-tab-${story.id}`}
                                    ref={(element) => { tabRefs.current[index] = element; }}
                                    className={`about-tab${activeStory === index ? " is-active" : ""}`}
                                    type="button"
                                    role="tab"
                                    aria-selected={activeStory === index}
                                    aria-controls="about-story-panel"
                                    tabIndex={activeStory === index ? 0 : -1}
                                    onClick={() => setActiveStory(index)}
                                >
                                    <span className="about-tab-index">0{index + 1}</span>{story.label}
                                </button>
                            ))}
                        </div>
                        <div
                            className="about-story-content"
                            id="about-story-panel"
                            role="tabpanel"
                            aria-labelledby={`about-tab-${selected.id}`}
                            key={selected.id}
                        >
                            <span className="about-story-eyebrow">{selected.eyebrow}</span>
                            <h3>{selected.title}</h3>
                            <p>{selected.description}</p>
                            <ul className="about-skill-list" aria-label={`${selected.label} areas`}>
                                {selected.skills.map((skill) => <li key={skill}>{skill}</li>)}
                            </ul>
                        </div>
                        <div className="about-story-footer">
                            <span><i aria-hidden="true"></i> Design-minded. Detail-driven.</span>
                            <span>{String(activeStory + 1).padStart(2, "0")} <b>/</b> {String(stories.length).padStart(2, "0")}</span>
                        </div>
                    </div>
                </div>
                <div className="stats-row" data-reveal>
                    <div className="stat"><span className="stat-value">10+</span><span className="stat-label">Projects Delivered</span></div>
                    <div className="stat"><span className="stat-value">4+</span><span className="stat-label">Active Clients</span></div>
                    <div className="stat"><span className="stat-value">2+</span><span className="stat-label">Years Crafting</span></div>
                    <div className="stat"><span className="stat-value">∞</span><span className="stat-label">Curious Ideas</span></div>
                </div>
            </div>
        </section>
    );
}
