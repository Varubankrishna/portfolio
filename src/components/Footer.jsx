import { personalInfo } from "../data/portfolio";
import { GitFork, Link2, Mail, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-10 px-6 border-t border-slate-100 dark:border-slate-800">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-sm text-slate-400 dark:text-slate-500">
          <span>© {new Date().getFullYear()} Varuban Krishna</span>
          <span>·</span>
          <span className="flex items-center gap-1">Built with <Heart size={12} className="text-red-400 mx-0.5" /> & React</span>
        </div>
        <div className="flex items-center gap-3">
          {[
            { icon: GitFork, href: personalInfo.github },
            { icon: Link2,   href: personalInfo.linkedin },
            { icon: Mail,    href: `mailto:${personalInfo.email}` },
          ].map(({ icon: Icon, href }, i) => (
            <a key={i} href={href} target="_blank" rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-400 dark:text-slate-500 hover:text-cyan-400 hover:bg-cyan-400/10 transition-all">
              <Icon size={15} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
