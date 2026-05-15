import { useEffect, useState, useCallback } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Internships from "./components/Internships";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

export default function App() {
  const [dark, setDark] = useState(true);
  const [loading, setLoading] = useState(true);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  useEffect(() => {
    const onScroll = () => {
      const pct = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
      document.documentElement.style.setProperty("--scroll-progress", `${pct}%`);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (loading) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [loading]);

  const handleLoaderDone = useCallback(() => {
    setLoading(false);
    requestAnimationFrame(() => setFadeIn(true));
  }, []);

  return (
    <>
      {loading && <Loader onDone={handleLoaderDone} />}
      {!loading && (
        <div className={`min-h-screen bg-white dark:bg-[#07070f] text-slate-900 dark:text-slate-50 transition-opacity duration-500 ${fadeIn ? "opacity-100" : "opacity-0"}`}>
          <div id="scroll-progress" />
          <Navbar dark={dark} toggleDark={() => setDark((d) => !d)} />
          <Hero />
          <About />
          <Internships />
          <Projects />
          <Skills />
          <Education />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
}
