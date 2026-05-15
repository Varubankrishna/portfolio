import { skills } from "../data/portfolio";
import { Code2, Brain, Wrench, Globe } from "lucide-react";

const iconMap = { Code2, Brain, Wrench, Globe };

const tagColors = [
  "bg-cyan-400/10 border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/20",
  "bg-blue-400/10 border-blue-400/30 text-blue-400 hover:bg-blue-400/20",
  "bg-violet-400/10 border-violet-400/30 text-violet-400 hover:bg-violet-400/20",
  "bg-emerald-400/10 border-emerald-400/30 text-emerald-400 hover:bg-emerald-400/20",
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-5xl mx-auto">
        <div className="reveal mb-12 text-center">
          <span className="font-mono text-xs text-cyan-400 uppercase tracking-widest mb-3 block">04 / Capabilities</span>
          <h2 className="font-display text-4xl font-bold text-slate-900 dark:text-white">Skills</h2>
        </div>

        <div className="reveal grid sm:grid-cols-2 gap-6">
          {skills.map((cat, ci) => {
            const Icon = iconMap[cat.icon];
            const color = tagColors[ci % tagColors.length];
            return (
              <div key={cat.category}
                className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0d0d1a] hover:border-cyan-400/30 transition-all">
                <div className="flex items-center gap-2.5 mb-5">
                  {Icon && <Icon size={18} className="text-cyan-400" />}
                  <h3 className="font-display font-semibold text-base text-slate-900 dark:text-white">
                    {cat.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((skill) => (
                    <span key={skill}
                      className={`px-3 py-1.5 rounded-lg border text-sm font-medium font-mono cursor-default transition-all duration-200 ${color}`}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
