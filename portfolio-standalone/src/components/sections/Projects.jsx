function FilePreview() {
    return (
        <div className="media-preview file-preview">
            <div className="file-row">
                <span className="file-badge">PDF</span>
                <span className="file-arrow">→</span>
                <span className="file-badge">JPG</span>
            </div>
            <div className="file-row">
                <span className="file-badge">PNG</span>
                <span className="file-arrow">→</span>
                <span className="file-badge">WEBP</span>
            </div>
            <div className="file-progress">
                <span className="progress-fill"></span>
            </div>
        </div>
    );
}

function TrackerPreview() {
    return (
        <div className="media-preview tracker-preview">
            <div className="tracker-bar">
                <span style={{ width: "78%" }}></span>
            </div>
            <div className="tracker-bar amber">
                <span style={{ width: "45%" }}></span>
            </div>
            <div className="tracker-bar red">
                <span style={{ width: "62%" }}></span>
            </div>
        </div>
    );
}

function LockedPreview() {
    return (
        <div className="media-preview locked-preview">
            <div className="locked-icon">🔒</div>
            <div className="locked-shimmer"></div>
        </div>
    );
}

function WeatherPreview() {
    return (
        <div className="media-preview weather-preview">
            <div className="weather-sun">☀</div>
            <div className="weather-cloud">☁</div>
            <div className="weather-temp">24°</div>
        </div>
    );
}

export default function Projects() {
    return (
        <section className="projects" id="projects">
            <div className="container">
                <p className="section-label" data-reveal>Selected Work</p>
                <h2 className="section-title" data-reveal>
                    Things I've <em className="accent-gradient">Built</em>
                </h2>

                <div className="projects-grid">
                    {/* File Converter */}
                    <article className="project-card" data-reveal data-cursor="view">
                        <div className="card-media">
                            <FilePreview />
                            <span className="status status-active">● Active</span>
                        </div>
                        <div className="card-body">
                            <div className="card-top">
                                <h3>File Converter</h3>
                                <a href="https://vedantmh48-cpu.github.io/file-converter/"><span className="card-link">View Project →</span></a>
                            </div>
                            <p>Fast browser-based file conversion tool with drag-and-drop support and instant format switching.</p>
                            <div className="tech-stack">
                                <span>Next.js</span><span>TypeScript</span><span>Tailwind</span>
                            </div>
                        </div>
                    </article>

                    {/* Expense Tracker */}
                    <article className="project-card" data-reveal data-cursor="view">
                        <div className="card-media">
                            <TrackerPreview />
                            <span className="status status-active">● Active</span>
                        </div>
                        <div className="card-body">
                            <div className="card-top">
                                <h3>Expense Tracker</h3>
                                <a href="https://vedantmh48-cpu.github.io/Expense-tracker/"><span className="card-link">View Project →</span></a>
                            </div>
                            <p>Personal finance dashboard with visual insights, category management and smooth interactions.</p>
                            <div className="tech-stack">
                                <span>React</span><span>Charts</span><span>TypeScript</span>
                            </div>
                        </div>
                    </article>

                    {/* E-Commerce (Coming Soon) */}
                    <article className="project-card is-locked" data-reveal>
                        <div className="card-media">
                            <LockedPreview />
                            <span className="status status-soon">◎ Coming Soon</span>
                        </div>
                        <div className="card-body">
                            <div className="card-top">
                                <h3>E-Commerce</h3>
                                <span className="card-link muted">Locked</span>
                            </div>
                            <p>A full-featured storefront experience — currently in development.</p>
                            <div className="tech-stack">
                                <span>Next.js</span><span>Stripe</span><span>Supabase</span>
                            </div>
                        </div>
                    </article>

                    {/* Weather Forecast (Maintenance) */}
                    <article className="project-card is-maintenance" data-reveal>
                        <div className="card-media">
                            <WeatherPreview />
                            <span className="status status-maint">⚠ In Maintenance</span>
                        </div>
                        <div className="card-body">
                            <div className="card-top">
                                <h3>Weather Forecast</h3>
                                <span className="card-link muted">Maintenance</span>
                            </div>
                            <p>Real-time weather forecasting app — currently undergoing upgrades.</p>
                            <div className="tech-stack">
                                <span>React</span><span>API</span><span>Leaflet</span>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
}