const skillGroups = [
    { index: "01", title: "Design", skills: [{ name: "UI/UX Design", width: "92%" }, { name: "Visual Design", width: "88%" }, { name: "Branding", width: "85%" }, { name: "Motion Design", width: "90%" }] },
    { index: "02", title: "Development", skills: [{ name: "HTML / CSS", width: "95%" }, { name: "JavaScript", width: "90%" }, { name: "React", width: "88%" }, { name: "Next.js", width: "86%" }] },
    { index: "03", title: "Creative Tech", skills: [{ name: "Creative Coding", width: "85%" }, { name: "Interactive Experiences", width: "89%" }, { name: "Generative Design", width: "78%" }, { name: "AI Integration", width: "82%" }] },
];

export default function Skills() {
    return (
        <section className="skills" id="skills" data-section="04">
            <div className="container">
                <p className="section-label" data-reveal><span className="label-index">04</span>Capabilities</p>
                <h2 className="section-title" data-reveal>What I <em className="accent-gradient">Do</em></h2>
                <div className="skills-grid">
                    {skillGroups.map((group) => (
                        <div className="skill-group" data-reveal key={group.title}>
                            <span className="group-index">{group.index}</span>
                            <h3>{group.title}</h3>
                            <ul>{group.skills.map((skill) => (
                                <li key={skill.name}>
                                    <span>{skill.name}</span>
                                    <span className="bar"><span className="bar-fill" style={{ "--w": skill.width }}></span></span>
                                    <span className="pct">{skill.width}</span>
                                </li>
                            ))}</ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
