function FilePreview() {
    return (
        <div className="media-preview file-preview">
            <div className="file-row"><span className="file-badge">PDF</span><span className="file-arrow">→</span><span className="file-badge">JPG</span></div>
            <div className="file-row"><span className="file-badge">PNG</span><span className="file-arrow">→</span><span className="file-badge">WEBP</span></div>
            <div className="file-progress"><span className="progress-fill"></span></div>
        </div>
    );
}

function TrackerPreview() {
    return (
        <div className="media-preview tracker-preview">
            <div className="tracker-bar"><span style={{ width: "78%" }}></span></div>
            <div className="tracker-bar amber"><span style={{ width: "45%" }}></span></div>
            <div className="tracker-bar red"><span style={{ width: "62%" }}></span></div>
        </div>
    );
}

function ProcelyaPreview() {
    return (
        <div className="media-preview procelya-preview">
            <svg className="procelya-svg" viewBox="0 0 220 150" aria-hidden="true">
                <line x1="45" y1="42" x2="128" y2="34" stroke="#c75bff" strokeWidth="2" strokeLinecap="round" />
                <line x1="128" y1="34" x2="100" y2="106" stroke="#ff5d8f" strokeWidth="2" strokeLinecap="round" />
                <line x1="45" y1="42" x2="100" y2="106" stroke="#7c5bff" strokeWidth="1.5" strokeDasharray="6 8" strokeLinecap="round" opacity="0.6" />
                <circle cx="45" cy="42" r="8" fill="#7c5bff" />
                <circle cx="128" cy="34" r="8" fill="#c75bff" />
                <circle cx="100" cy="106" r="8" fill="#ff5d8f" />
                <circle cx="45" cy="42" r="14" fill="none" stroke="#7c5bff" strokeWidth="1.5" opacity="0.4">
                    <animate attributeName="r" values="9;16;9" dur="2.6s" repeatCount="indefinite" />
                </circle>
            </svg>
            <span className="node-label">AI Workflow</span>
        </div>
    );
}

function PortfolioPreview() {
    return (
        <div className="media-preview portfolio-preview">
            <div className="browser-bar">
                <span className="browser-dot r"></span><span className="browser-dot y"></span><span className="browser-dot g"></span>
                <span className="browser-url"></span>
            </div>
            <div className="browser-hero"></div>
            <div className="browser-lines"><i></i><i></i><i></i></div>
        </div>
    );
}

function F1Preview() {
    return (
        <div className="media-preview f1-preview" role="img" aria-label="Formula One race circuit and telemetry illustration">
            <span className="f1-preview-label">RACE / 2026</span>
            <svg className="f1-track" viewBox="0 0 360 180" aria-hidden="true">
                <path d="M75 132 C48 119 50 89 80 82 L116 74 C137 69 143 53 130 40 C115 25 128 14 150 20 L191 31 C214 37 220 54 205 70 L190 87 C179 100 188 118 209 117 L259 113 C286 111 302 127 286 144 C273 157 248 157 226 153 L165 143 C139 139 112 149 96 147 Z" fill="none" stroke="rgba(255,224,160,.12)" strokeWidth="17" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M75 132 C48 119 50 89 80 82 L116 74 C137 69 143 53 130 40 C115 25 128 14 150 20 L191 31 C214 37 220 54 205 70 L190 87 C179 100 188 118 209 117 L259 113 C286 111 302 127 286 144 C273 157 248 157 226 153 L165 143 C139 139 112 149 96 147 Z" fill="none" stroke="#f2b447" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="75" cy="132" r="6" fill="#ffe0a0" />
                <path d="M177 83h33l13 8-5 8h-49l-6-5 7-8z" fill="#ffe0a0" />
                <circle cx="177" cy="101" r="5" fill="#111" stroke="#f2b447" strokeWidth="2" />
                <circle cx="210" cy="101" r="5" fill="#111" stroke="#f2b447" strokeWidth="2" />
            </svg>
            <div className="f1-preview-stats"><span><b>01</b> CIRCUIT</span><span><b>F1</b> RACE DAY</span></div>
        </div>
    );
}

function BUStudioPreview() {
    return (
        <div className="media-preview bu-studio-preview" role="img" aria-label="BU Studio visual identity illustration">
            <div className="bu-studio-grid" aria-hidden="true"></div>
            <span className="bu-studio-kicker">INDEPENDENT CREATIVE STUDIO</span>
            <div className="bu-studio-wordmark"><span>BU</span><i></i><span>STUDIO</span></div>
            <span className="bu-studio-caption">IDENTITY / DIGITAL / DIRECTION</span>
        </div>
    );
}

export default function Projects() {
    return (
        <section className="projects" id="projects" data-section="02">
            <div className="container">
                <p className="section-label" data-reveal><span className="label-index">02</span>Selected Work</p>
                <h2 className="section-title" data-reveal>Things I've <em className="accent-gradient">Built</em></h2>
                <div className="projects-grid">
                    <article className="project-card" data-reveal data-cursor="view">
                        <div className="card-media">
                            <span className="card-index">01</span>
                            <FilePreview />
                            <span className="status status-active">● Active</span>
                        </div>
                        <div className="card-body">
                            <div className="card-top"><h3>File Converter</h3><a href="https://vedantmh48-cpu.github.io/file-converter/" className="card-link" target="_blank" rel="noopener">View Project <span className="link-arrow">↗</span></a></div>
                            <p>Fast browser-based file conversion tool with drag-and-drop support and instant format switching.</p>
                            <div className="tech-stack"><span>Next.js</span><span>TypeScript</span><span>Tailwind</span></div>
                        </div>
                    </article>
                    <article className="project-card" data-reveal data-cursor="view">
                        <div className="card-media">
                            <span className="card-index">02</span>
                            <TrackerPreview />
                            <span className="status status-active">● Active</span>
                        </div>
                        <div className="card-body">
                            <div className="card-top"><h3>Expense Tracker</h3><a href="https://vedantmh48-cpu.github.io/Expense-tracker/" className="card-link" target="_blank" rel="noopener">View Project <span className="link-arrow">↗</span></a></div>
                            <p>Personal finance dashboard with visual insights, category management and smooth interactions.</p>
                            <div className="tech-stack"><span>React</span><span>Charts</span><span>TypeScript</span></div>
                        </div>
                    </article>
                    <article className="project-card" data-reveal>
                        <div className="card-media">
                            <span className="card-index">03</span>
                            <ProcelyaPreview />
                            <span className="status status-soon">◉ In Development</span>
                        </div>
                        <div className="card-body">
                            <div className="card-top"><h3>Procelya AI</h3><span className="card-link muted">In Development</span></div>
                            <p>Intelligent workflow platform — automating repetitive tasks with AI-powered pipelines and clean interfaces.</p>
                            <div className="tech-stack"><span>Next.js</span><span>AI / LLM</span><span>Supabase</span></div>
                        </div>
                    </article>
                    <article className="project-card is-locked" data-reveal>
                        <div className="card-media">
                            <span className="card-index">04</span>
                            <F1Preview />
                            <span className="status status-soon">◉ Concept</span>
                        </div>
                        <div className="card-body">
                            <div className="card-top"><h3>F1 Race Experience</h3><span className="card-link muted">Concept</span></div>
                            <p>A motorsport-inspired digital experience exploring circuit visuals, race-day stats and the energy of Formula One.</p>
                            <div className="tech-stack"><span>Sports UI</span><span>Data Visuals</span><span>Motion</span></div>
                        </div>
                    </article>
                    <article className="project-card is-maintenance" data-reveal>
                        <div className="card-media">
                            <span className="card-index">05</span>
                            <BUStudioPreview />
                            <span className="status status-maint">◉ Design Study</span>
                        </div>
                        <div className="card-body">
                            <div className="card-top"><h3>BU Studio</h3><span className="card-link muted">Design Study</span></div>
                            <p>A considered visual identity and digital direction concept for a contemporary creative studio.</p>
                            <div className="tech-stack"><span>Brand Identity</span><span>Art Direction</span><span>Web Design</span></div>
                        </div>
                    </article>
                    <article className="project-card" data-reveal data-cursor="view">
                        <div className="card-media">
                            <span className="card-index">06</span>
                            <PortfolioPreview />
                            <span className="status status-active">● Active</span>
                        </div>
                        <div className="card-body">
                            <div className="card-top"><h3>Portfolio Website</h3><a href="https://vedantmh48-cpu.github.io/portfolio/" className="card-link" target="_blank" rel="noopener">View Project <span className="link-arrow">↗</span></a></div>
                            <p>The site you're looking at — a custom-built playground for design, motion and micro-interactions.</p>
                            <div className="tech-stack"><span>React</span><span>Vite</span><span>GSAP</span></div>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
}
