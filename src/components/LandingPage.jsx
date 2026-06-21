import "./LandingPageTheme.css";

export default function LandingPage({ onStart }) {
    return (
        <div className="landing-page">

            <div className="hero-card">

                <div className="hero-icon">
                    ☁️
                </div>

                <h1>Panic to Plan</h1>

                <p>
                    Helping make life simpler, step by step.
                </p>

                <button className="start-btn" onClick={onStart}>
                    Get Started
                </button>

            </div>

        </div>
    )
}