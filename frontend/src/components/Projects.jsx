import { projects } from "../data/resumeData";

export default function Projects() {
  const dataProjects = projects.filter((project) => project.category === "data");
  const developmentProjects = projects.filter((project) => project.category === "development");

  const projectCard = (p) => (
    <div className="project-card" key={p.name}>
      <div className="project-top">
        <h3 className="project-name">{p.name}</h3>
        <span className="project-tag mono">{p.tag}</span>
      </div>
      <span className="project-tag mono">{p.period}</span>
      <p className="project-desc">{p.desc}</p>
      {p.link && (
        <a className="project-link" href={p.link} target="_blank" rel="noreferrer">
          View project →
        </a>
      )}
    </div>
  );

  return (
    <section id="projects">
      <div className="container">
        <div className="section-head">
          <h2 className="section-title">Projects</h2>
        </div>

        <div className="project-group">
          <div className="project-group-head">
            <span className="project-group-number mono">01</span>
            <div>
              <h3>Data Analysis</h3>
              <p>Dashboards, reporting, and decision-focused data work.</p>
            </div>
          </div>
          <div className="project-grid">{dataProjects.map(projectCard)}</div>
        </div>

        <div className="project-group">
          <div className="project-group-head">
            <span className="project-group-number mono">02</span>
            <div>
              <h3> Web Development</h3>
              <p>Full-stack applications, responsive interfaces, and web builds.</p>
            </div>
          </div>
          <div className="project-grid">{developmentProjects.map(projectCard)}</div>
        </div>
      </div>
    </section>
  );
}
