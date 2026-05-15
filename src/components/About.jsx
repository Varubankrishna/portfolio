import { personalInfo } from "../data/portfolio";
import { Sparkles, Code2, Gamepad2, Brain } from "lucide-react";

const highlights = [
  { icon: Brain, label: "AI / LLM Engineering", color: "text-cyan-400" },
  { icon: Code2, label: "Python & Full-Stack", color: "text-blue-400" },
  { icon: Gamepad2, label: "Unity Game Dev", color: "text-amber-400" },
  { icon: Sparkles, label: "Data Science", color: "text-violet-400" },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="reveal grid md:grid-cols-5 gap-12 items-start">
          <div className="md:col-span-3">
            <span className="font-mono text-xs text-cyan-400 uppercase tracking-widest mb-3 block">01 / About</span>
            <h2 className="font-display text-4xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
              Building at the <span className="text-cyan-400">edge</span> of AI & creativity
            </h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base mb-4">{personalInfo.about}</p>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm">
              Currently pursuing my B.Tech in AI & Data Science at Dhanalakshmi College of Engineering (2022–2026), I'm always seeking new challenges — whether it's engineering a production-grade LLM pipeline or crafting a polished mobile experience in Flutter.
            </p>
          </div>
          <div className="md:col-span-2 flex flex-col gap-3">
            {highlights.map(({ icon: Icon, label, color }) => (
              <div key={label} className="flex items-center gap-4 p-4 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 hover:border-cyan-400/30 transition-all">
                <div className={`${color} opacity-90`}><Icon size={22} /></div>
                <span className="font-medium text-slate-800 dark:text-slate-200 text-sm">{label}</span>
              </div>
            ))}
            <div className="mt-3 p-4 rounded-xl border border-cyan-400/20 bg-cyan-400/5">
              <p className="font-mono text-xs text-cyan-400 mb-3">quick_facts.json</p>
              <div className="font-mono text-xs text-slate-500 dark:text-slate-400 space-y-1">
                <p><span className="text-cyan-400">"location"</span>: "Chennai, Tamil Nadu"</p>
                <p><span className="text-cyan-400">"status"</span>: "Open to opportunities"</p>
                <p><span className="text-cyan-400">"focus"</span>: "AI × Dev × Games"</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
