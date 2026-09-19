import { useEffect, useState } from "react";
import { profile } from "../data/resumeData";

export default function Hero() {
  const [typedRole, setTypedRole] = useState("");
  const [typedTagline, setTypedTagline] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const roles = [
    {
      title: "Data Analyst",
      tagline: "Turning raw data into clear decisions.",
    },
    {
      title: "Full Stack Developer",
      tagline: "Building reliable web experiences, end to end.",
    },
  ];

  useEffect(() => {
    const role = roles[roleIndex].title;
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

  useEffect(() => {
    const tagline = roles[roleIndex].tagline;
    let characterIndex = 0;
    setTypedTagline("");

    const timer = window.setInterval(() => {
      characterIndex += 1;
      setTypedTagline(tagline.slice(0, characterIndex));
      if (characterIndex === tagline.length) window.clearInterval(timer);
    }, 42);

    return () => window.clearInterval(timer);
  }, [roleIndex]);

  return (
    <section id="top" className="hero">
      <div className="container hero-inner">
        <div className="hero-layout">
          <div className="hero-copy">
            <p className="hero-profession">
              {typedRole}
              <span className="typing-cursor" aria-hidden="true">|</span>
            </p>
            <h1 className="hero-name">
              {profile.name.split(" ")[0]} <em>{profile.name.split(" ").slice(1).join(" ")}</em>
            </h1>

            <p className="hero-role">
              {typedTagline}
              <span className="typing-cursor" aria-hidden="true">|</span>
            </p>
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
