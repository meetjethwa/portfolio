import { summary, facts } from "../data/resumeData";

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="section-head">
          <h2 className="section-title">About</h2>
          <span className="section-index mono">01 / Profile</span>
        </div>

        <div className="about-grid">
          <p className="about-text">{summary}</p>

          <dl className="fact-sheet">
            {facts.map((f) => (
              <div className="fact-row" key={f.label}>
                <dt>{f.label}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
