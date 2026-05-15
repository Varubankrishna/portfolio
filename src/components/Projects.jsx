import { useState } from "react";
import { projects, categoryColors, categoryBadge } from "../data/portfolio";
import { GitFork, Link2, ArrowUpRight, Clock } from "lucide-react";

const FILTERS = ["All", "AI/ML", "Web", "Mobile", "Game"];

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="reveal mb-10 text-center">
          <span className="font-mono text-xs text-cyan-400 uppercase tracking-widest mb-3 block">03 / Work</span>
          <h2 className="font-display text-4xl font-bold text-slate-900 dark:text-white mb-8">Projects</h2>
          <div className="flex flex-wrap justify-center gap-2">
            {FILTERS.map((f) => (
              <button key={f} onClick={() => setFilter(f)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  filter === f
                    ? "bg-cyan-400 text-[#07070f]"
                    : "border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:border-cyan-400/50 hover:text-cyan-400"
                }`}>
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="reveal grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((project) => (
            <div key={project.title}
              className={`project-card group relative flex flex-col rounded-2xl border bg-gradient-to-br overflow-hidden ${categoryColors[project.category]}`}>

              {/* Coming soon ribbon */}
              {project.comingSoon && (
                <div className="absolute top-3 right-3 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-400/15 border border-amber-400/40 text-amber-400 text-xs font-mono">
                  <Clock size={10} />
                  Launching on Play Store Soon
                </div>
              )}

              <div className="p-5 pb-0">
                <span className={`inline-block text-xs font-mono px-2 py-0.5 rounded-md border ${categoryBadge[project.category]} mb-3`}>
                  {project.category}
                </span>
                <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white mb-2 group-hover:text-cyan-400 transition-colors pr-2">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                  {project.description}
                </p>
              </div>

              {/* Tech stack */}
              <div className="px-5 flex flex-wrap gap-1.5 mb-4">
                {project.stack.map((tech) => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>

              {/* Links */}
              <div className="mt-auto px-5 pb-5 flex items-center gap-3 flex-wrap">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-slate-400 hover:text-cyan-400 transition-colors">
                    <GitFork size={13} />
                    GitHub
                  </a>
                )}
                {project.linkedin && (
                  <a href={project.linkedin} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-slate-400 hover:text-cyan-400 transition-colors">
                    <Link2 size={13} />
                    LinkedIn Post
                  </a>
                )}
                {project.comingSoon && (
                  <span className="text-xs font-medium text-slate-400 dark:text-slate-500 italic">
                    Links coming soon...
                  </span>
                )}
                {(project.github || project.linkedin) && (
                  <a href={project.github || project.linkedin} target="_blank" rel="noopener noreferrer"
                    className="ml-auto w-8 h-8 flex items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:bg-cyan-400/10 hover:text-cyan-400 transition-all">
                    <ArrowUpRight size={14} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
