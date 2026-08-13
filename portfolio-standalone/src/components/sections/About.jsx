export default function About() {
    return (
        <section className="about" id="about">
            <div className="container">
                <p className="section-label" data-reveal>About Me</p>

                <h2 className="section-title" data-reveal>
                    I don't just build websites.
                    <em className="accent-gradient">I create digital experiences.</em>
                </h2>

                <div className="about-grid">
                    <div className="about-card" data-reveal>
                        <span className="card-index">01</span>
                        <h3>Design Philosophy</h3>
                        <p>Every pixel has a purpose. I design with restraint, build with precision, and obsess over the details
                            most people never notice — until they feel them.</p>
                    </div>
                    <div className="about-card" data-reveal>
                        <span className="card-index">02</span>
                        <h3>My Approach</h3>
                        <p>I bridge the gap between design and engineering — from visual direction to production code, ensuring
                            what's imagined becomes real in the browser.</p>
                    </div>
                    <div className="about-card" data-reveal>
                        <span className="card-index">03</span>
                        <h3>Why I Create</h3>
                        <p>Digital products should feel human. My passion is crafting experiences that blend emotion and technology
                            long after you scroll away.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}