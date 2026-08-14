import { education, certificates } from "../data/resumeData";

export default function Education() {
  return (
    <>
      <section id="education">
        <div className="container">
          <div className="section-head">
            <h2 className="section-title">Education</h2>
            <span className="section-index mono">05 / Record</span>
          </div>

          <div className="record-list">
            {education.map((e) => (
              <div className="stack-item" key={e.title}>
                <div className="stack-item-title">{e.title}</div>
                <div className="stack-item-sub">{e.sub}</div>
                {e.percentage && (
                  <div className="stack-item-percentage">Percentage: {e.percentage}</div>
                )}
                <div className="stack-item-date">{e.date}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="certifications">
        <div className="container">
          <div className="section-head">
            <h2 className="section-title">Certifications</h2>
            <span className="section-index mono">06 / Credentials</span>
          </div>

          <div className="record-list">
            {certificates.map((c) => (
              <div className="stack-item" key={c.title}>
                <div className="stack-item-title">{c.title}</div>
                <div className="stack-item-sub">{c.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
