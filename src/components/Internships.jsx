import { internships } from "../data/portfolio";
import { Briefcase, Calendar, CheckCircle2 } from "lucide-react";

export default function Internships() {
  return (
    <section id="internships" className="py-24 px-6 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-5xl mx-auto">
        <div className="reveal mb-12 text-center">
          <span className="font-mono text-xs text-cyan-400 uppercase tracking-widest mb-3 block">02 / Experience</span>
          <h2 className="font-display text-4xl font-bold text-slate-900 dark:text-white">Internships</h2>
        </div>

        <div className="reveal relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400/50 via-cyan-400/20 to-transparent -translate-x-1/2" />

          <div className="space-y-8 md:space-y-0">
            {internships.map((intern, i) => (
              <div key={intern.company}
                className={`md:flex items-start gap-8 mb-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                <div className="flex-1 md:max-w-[45%]">
                  <div className="group p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0d0d1a] hover:border-cyan-400/40 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-400/5">
                    <div className="flex items-center gap-2 mb-1">
                      <Briefcase size={14} className="text-cyan-400" />
                      <span className="font-mono text-xs text-cyan-400">{intern.company}</span>
                    </div>
                    <h3 className="font-display font-semibold text-lg text-slate-900 dark:text-white mb-3">{intern.role}</h3>
                    <div className="flex items-center gap-1.5 text-slate-400 dark:text-slate-500 text-xs mb-4">
                      <Calendar size={12} />
                      <span className="font-mono">{intern.duration}</span>
                    </div>
                    <ul className="space-y-2.5">
                      {intern.points.map((point, j) => (
                        <li key={j} className="flex gap-2.5 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                          <CheckCircle2 size={15} className="text-cyan-400 mt-0.5 shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="hidden md:flex items-center justify-center flex-shrink-0 w-10 h-10 rounded-full bg-cyan-400/10 border-2 border-cyan-400/40 text-cyan-400 z-10 mt-4">
                  <span className="font-mono text-xs font-bold">{String(i + 1).padStart(2, "0")}</span>
                </div>

                <div className="flex-1 md:max-w-[45%] hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
