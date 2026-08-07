import { education, certificates } from "../data/resumeData";

export default function Education() {
  return (
    <section id="education">
      <div className="container">
        <div className="section-head">
          <h2 className="section-title">Education &amp; Certificates</h2>
          <span className="section-index mono">05 / Record</span>
        </div>

        <div className="two-col">
          <div>
            <h3 style={{ fontSize: 15, marginBottom: 8, color: "var(--ink-faint)", fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              Education
            </h3>
            {education.map((e) => (
              <div className="stack-item" key={e.title}>
                <div className="stack-item-title">{e.title}</div>
                <div className="stack-item-sub">{e.sub}</div>
                <div className="stack-item-date">{e.date}</div>
              </div>
            ))}
          </div>

          <div>
            <h3 style={{ fontSize: 15, marginBottom: 8, color: "var(--ink-faint)", fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              Certificates
            </h3>
            {certificates.map((c) => (
              <div className="stack-item" key={c.title}>
                <div className="stack-item-title">{c.title}</div>
                <div className="stack-item-sub">{c.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
