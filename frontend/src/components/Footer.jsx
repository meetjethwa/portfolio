import { profile } from "../data/resumeData";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer container">
      <span>© {year} {profile.name} — built with React</span>
      <div className="footer-links">
        <a href={`mailto:${profile.email}`}>Email</a>
        <a href={profile.linkedinUrl} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a href={profile.githubUrl} target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href="#top">Back to top</a>
      </div>
    </footer>
  );
}
