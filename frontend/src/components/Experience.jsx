import { experience } from "../data/resumeData";

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <div className="section-head">
          <h2 className="section-title">Experience</h2>
        </div>

        <div className="ledger">
          {experience.map((job) => (
            <div className="ledger-row" key={job.role}>
              <div className="ledger-date mono">{job.date}</div>
              <div>
                <h3 className="ledger-role">{job.role}</h3>
                <div className="ledger-org">{job.org}</div>
                <ul className="ledger-list">
                  {job.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
