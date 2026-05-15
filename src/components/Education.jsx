import { education } from "../data/portfolio";
import { MapPin, Calendar } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="reveal mb-12 text-center">
          <span className="font-mono text-xs text-cyan-400 uppercase tracking-widest mb-3 block">05 / Background</span>
          <h2 className="font-display text-4xl font-bold text-slate-900 dark:text-white">Education</h2>
        </div>

        <div className="reveal relative">
          <div className="absolute left-6 top-3 bottom-3 w-px bg-gradient-to-b from-cyan-400/60 via-cyan-400/20 to-transparent" />

          <div className="space-y-6 pl-16">
            {education.map((edu, i) => (
              <div key={i} className="relative group">
                <div className="absolute -left-10 top-5 w-8 h-8 flex items-center justify-center rounded-full bg-cyan-400/10 border-2 border-cyan-400/40 text-base group-hover:border-cyan-400 group-hover:bg-cyan-400/20 transition-all">
                  {edu.icon}
                </div>
                <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0d0d1a] hover:border-cyan-400/30 transition-all hover:shadow-lg hover:shadow-cyan-400/5">
                  <div className="flex items-start justify-between flex-wrap gap-2 mb-1">
                    <h3 className="font-display font-semibold text-base text-slate-900 dark:text-white leading-tight">
                      {edu.degree}
                    </h3>
                    <span className="flex items-center gap-1.5 font-mono text-xs text-cyan-400 shrink-0">
                      <Calendar size={11} />
                      {edu.year}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 text-sm">
                    <MapPin size={12} />
                    {edu.institution}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
