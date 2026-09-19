import { skills } from "../data/resumeData";

const skillHoverColors = {
  Excel: { background: "#217346", color: "#FFFFFF" },
  SQL: { background: "#2D74DA", color: "#FFFFFF" },
  "Power BI": { background: "#F2C811", color: "#151515" },
  "Data Cleaning": { background: "#7C3AED", color: "#FFFFFF" },
  "Data Validation": { background: "#0E7490", color: "#FFFFFF" },
  "Python (automation)": { background: "#3776AB", color: "#FFFFFF" },
  HTML: { background: "#E34F26", color: "#FFFFFF" },
  CSS: { background: "#1572B6", color: "#FFFFFF" },
  JavaScript: { background: "#6D5BD0", color: "#FFFFFF" },
  "React.js": { background: "#149ECA", color: "#FFFFFF" },
  "Node.js": { background: "#339933", color: "#FFFFFF" },
  MongoDB: { background: "#13AA52", color: "#FFFFFF" },
  MySQL: { background: "#4479A1", color: "#FFFFFF" },
  
};

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <div className="section-head">
          <h2 className="section-title">Skills</h2>
        </div>

        <div className="skills-grid">
          {skills.map((group) => (
            <div className="skill-cell" key={group.group}>
              <h3>{group.group}</h3>
              <div className="tag-row">
                {group.items.map((item) => (
                  <span
                    className="tag"
                    key={item}
                    style={{
                      "--tag-hover-bg": skillHoverColors[item]?.background,
                      "--tag-hover-color": skillHoverColors[item]?.color,
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
