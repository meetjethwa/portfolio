import { useState } from "react";
import { profile } from "../data/resumeData";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:4000";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null); // null | "sending" | "ok" | "err"

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("ok");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("err");
    }
  }

  return (
    <section id="contact">
      <div className="container">
        <div className="section-head">
          <h2 className="section-title">Contact</h2>
          <span className="section-index mono">06 / Reach out</span>
        </div>

        <div className="contact-wrap">
          <div>
            <p className="contact-lead">
              Have a dataset that needs a story, or an app that needs building? I'd like to hear about it.
            </p>
            <ul className="contact-info">
              <li>
                Email — <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </li>
              <li>
                Phone — <a href={`tel:${profile.phone}`}>{profile.phone}</a>
              </li>
              <li>
                LinkedIn —{" "}
                <a href={profile.linkedinUrl} target="_blank" rel="noreferrer">
                  {profile.linkedin}
                </a>
              </li>
              <li>
                GitHub —{" "}
                <a href={profile.githubUrl} target="_blank" rel="noreferrer">
                  {profile.github}
                </a>
              </li>
              <li>Location — {profile.location}</li>
            </ul>
          </div>

          <form className="form" onSubmit={handleSubmit}>
            <div className="field">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
              />
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
              />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                value={form.message}
                onChange={handleChange}
                placeholder="What are you working on?"
              />
            </div>
            <button className="btn btn-primary" type="submit" disabled={status === "sending"}>
              {status === "sending" ? "Sending…" : "Send message"}
            </button>

            {status === "ok" && (
              <p className="form-status ok">Message sent — thanks, I'll reply soon.</p>
            )}
            {status === "err" && (
              <p className="form-status err">
                Couldn't send that. Make sure the backend server is running, or email me directly.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
