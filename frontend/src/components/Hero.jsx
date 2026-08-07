import { useEffect, useState } from "react";
import { profile } from "../data/resumeData";

export default function Hero() {
  const [typedRole, setTypedRole] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const roles = ["Data Analyst", "Full Stack Developer"];

  useEffect(() => {
    const role = roles[roleIndex];
    let delay = isDeleting ? 45 : 85;

    if (!isDeleting && typedRole === role) {
      delay = 1500;
    } else if (isDeleting && typedRole === "") {
      delay = 250;
    }

    const timer = window.setTimeout(() => {
      if (!isDeleting && typedRole === role) {
        setIsDeleting(true);
      } else if (isDeleting && typedRole === "") {
        setRoleIndex((index) => (index + 1) % roles.length);
        setIsDeleting(false);
      } else {
        setTypedRole((text) =>
          isDeleting ? text.slice(0, -1) : role.slice(0, text.length + 1)
        );
      }
    }, delay);

    return () => window.clearTimeout(timer);
  }, [typedRole, roleIndex, isDeleting]);

  return (
    <section id="top" className="hero">
      <div className="container hero-inner">
        <div className="hero-layout">
          <div className="hero-copy">
            <div className="hero-top">
              <span className="status">
                {profile.availability}
              </span>
            </div>

            <p className="hero-profession">
              {typedRole}
              <span className="typing-cursor" aria-hidden="true">|</span>
            </p>
            <h1 className="hero-name">
              {profile.name.split(" ")[0]} <em>{profile.name.split(" ").slice(1).join(" ")}</em>
            </h1>

            <p className="hero-role">{profile.tagline}</p>
            <p className="hero-location">Based in {profile.location}</p>

            <div className="hero-actions">
              <a className="btn btn-primary" href="#contact">
                Start a conversation
              </a>
              <a className="btn btn-ghost" href="#projects">
                See the work
              </a>
            </div>
          </div>

          <div className="hero-photo-frame">
            <img src="/meet-jethawa.jpeg" alt="Meet Jethawa" className="hero-photo" />
          </div>
        </div>
      </div>
    </section>
  );
}
