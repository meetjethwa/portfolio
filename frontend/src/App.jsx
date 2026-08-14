import { useEffect } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Achievements from "./components/achievements/Achievements";
import Hobbies from "./components/hobbies/Hobbies";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  useEffect(() => {
    const buttons = document.querySelectorAll(".btn, .tag");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("button-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.45 }
    );

    buttons.forEach((button) => observer.observe(button));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Achievements />
      <Hobbies />
      <Contact />
      <Footer />
    </>
  );
}
