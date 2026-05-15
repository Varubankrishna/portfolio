import { useEffect, useState } from "react";
import { ArrowDown, GitFork, Link2, Mail, Download, ExternalLink } from "lucide-react";
import { personalInfo } from "../data/portfolio";

const TYPED_STRINGS = [
  "AI & Data Science Student",
  "Software Developer",
  "LLM Engineer",
  "Unity Game Developer",
  "Python Enthusiast",
];

function TypedText() {
  const [textIndex, setTextIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const target = TYPED_STRINGS[textIndex];
    let timer;
    if (typing) {
      if (displayed.length < target.length) {
        timer = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 65);
      } else {
        timer = setTimeout(() => setTyping(false), 1800);
      }
    } else {
      if (displayed.length > 0) {
        timer = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
      } else {
        setTextIndex((i) => (i + 1) % TYPED_STRINGS.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timer);
  }, [displayed, typing, textIndex]);

  return <span className="text-cyan-400 typing-cursor font-display">{displayed}</span>;
}

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-amber-400/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-24 pb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-400/30 bg-cyan-400/5 text-cyan-400 text-xs font-mono mb-8 fade-up">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          Available for Internship & Projects
        </div>

        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">
          Varuban{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
            Krishna
          </span>
        </h1>

        <div className="text-xl sm:text-2xl font-medium text-slate-600 dark:text-slate-300 mb-6 h-10">
          <TypedText />
        </div>

        <p className="text-slate-500 dark:text-slate-400 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          {personalInfo.tagline}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
          <button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="group flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-400 text-[#07070f] font-semibold text-sm hover:bg-cyan-300 transition-all shadow-lg shadow-cyan-400/20">
            View Projects
            <ExternalLink size={15} className="group-hover:translate-x-0.5 transition-transform" />
          </button>
          <a href="/resume.pdf" download
            className="group flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-semibold text-sm hover:border-cyan-400/50 hover:text-cyan-400 transition-all">
            <Download size={15} />
            Download Resume
          </a>
        </div>

        <div className="flex items-center justify-center gap-4 mb-16">
          {[
            { icon: GitFork, href: personalInfo.github, label: "GitHub" },
            { icon: Link2, href: personalInfo.linkedin, label: "LinkedIn" },
            { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
              className="w-10 h-10 flex items-center justify-center rounded-xl border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:border-cyan-400/50 hover:text-cyan-400 hover:bg-cyan-400/5 transition-all">
              <Icon size={17} />
            </a>
          ))}
        </div>

        <button onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
          className="inline-flex flex-col items-center gap-2 text-slate-400 dark:text-slate-500 text-xs font-mono hover:text-cyan-400 transition-colors">
          <span>scroll</span>
          <ArrowDown size={14} className="animate-bounce" />
        </button>
      </div>
    </section>
  );
}
