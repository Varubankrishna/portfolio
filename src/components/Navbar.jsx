import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";

const navLinks = ["About", "Internships", "Projects", "Skills", "Education", "Contact"];

export default function Navbar({ dark, toggleDark }) {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      navLinks.forEach((n) => {
        const sec = document.getElementById(n.toLowerCase());
        if (!sec) return;
        const rect = sec.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) setActive(n.toLowerCase());
      });
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-white/80 dark:bg-[#07070f]/80 backdrop-blur-md shadow-lg shadow-black/10" : "bg-transparent"
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-display font-bold text-lg text-slate-900 dark:text-white">
          VK<span className="text-cyan-400">.</span>
        </button>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <button key={link} onClick={() => scrollTo(link)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                active === link.toLowerCase()
                  ? "text-cyan-400 bg-cyan-400/10"
                  : "text-slate-500 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800"
              }`}>
              {link}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button onClick={toggleDark} aria-label="Toggle dark mode"
            className="p-2 rounded-lg text-slate-500 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all">
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button className="md:hidden p-2 rounded-lg text-slate-500 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
            onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 shadow-xl">
          <div className="flex flex-col p-4 gap-1">
            {navLinks.map((link) => (
              <button key={link} onClick={() => scrollTo(link)}
                className={`px-4 py-2.5 rounded-lg text-sm font-medium text-left transition-all ${
                  active === link.toLowerCase()
                    ? "text-cyan-400 bg-cyan-400/10"
                    : "text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800"
                }`}>
                {link}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
