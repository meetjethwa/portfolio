const hobbies = [
  { title: "Swimming", detail: "Level 2 · Proactive Swimming Club, Dubai" },
  { title: "Cricket", detail: "" },
  { title: "Gymnasium", detail: "" },
];

export default function Hobbies() {
  return (
    <section id="hobbies">
      <div className="container">
        <div className="section-head">
          <h2 className="section-title">Hobbies &amp; Interests</h2>
          <span className="section-index mono">08 / Beyond Work</span>
        </div>

        <div className="hobbies-list">
          {hobbies.map((hobby) => (
            <div className="hobby-item" key={hobby.title}>
              <h3>{hobby.title}</h3>
              {hobby.detail && <p>{hobby.detail}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
