const marqueeItems = ["React", "Next.js", "TypeScript", "GSAP Motion", "UI / UX", "Figma", "Node.js", "Vite", "Tailwind CSS", "Creative Coding"];

export default function Clients() {
    const track = marqueeItems.map((item, i) => <span className="marquee-chip" key={`${item}-${i}`}>{item}</span>);

    return (
        <section className="clients" id="clients" data-section="03">
            <div className="container">
                <p className="section-label" data-reveal><span className="label-index">03</span>Trusted By</p>
                <h2 className="section-title" data-reveal>My <em className="accent-gradient">Clients</em></h2>

                <div className="clients-marquee" aria-hidden="true">
                    <div className="marquee-track">{track}{track}</div>
                </div>

                <div className="clients-grid">
                    <article className="client-card" data-reveal data-cursor="view">
                        <div className="client-media">
                            <div className="client-logo"><span className="client-logo-icon">✈</span><span className="client-logo-text">Vedant Travels</span></div>
                            <span className="status status-active">● Active</span>
                        </div>
                        <div className="client-body"><h3>Vedant Travels</h3><p>Travel & tour company website — booking experiences, destination guides and seamless trip planning.</p><a href="https://vedantgo.in" target="_blank" rel="noopener" className="client-link">Visit Website <span className="link-arrow">↗</span></a></div>
                    </article>
                    <article className="client-card is-upcoming" data-reveal>
                        <div className="client-media">
                            <div className="client-logo"><span className="client-logo-icon">◈</span><span className="client-logo-text">KinesePro</span></div>
                            <span className="status status-soon">◉ Upcoming</span>
                        </div>
                        <div className="client-body"><h3>KinesePro</h3><p>High-performance professional platform — currently in development. Stay tuned for the launch.</p><span className="client-link muted">Coming Soon</span></div>
                    </article>
                </div>
            </div>
        </section>
    );
}
