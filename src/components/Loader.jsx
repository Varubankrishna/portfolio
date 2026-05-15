import { useEffect, useState } from "react";

export default function Loader({ onDone }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) { clearInterval(timer); setTimeout(onDone, 200); return 100; }
        return Math.min(p + Math.random() * 15, 100);
      });
    }, 100);
    return () => clearInterval(timer);
  }, [onDone]);

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#07070f]">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="relative z-10 text-center">
        <div className="font-display text-6xl font-bold text-white mb-2">
          VK<span className="text-cyan-400">.</span>
        </div>
        <p className="font-mono text-xs text-slate-500 mb-10 tracking-widest uppercase">Initializing portfolio...</p>
        <div className="w-48 h-0.5 bg-slate-800 rounded-full overflow-hidden mx-auto">
          <div className="h-full bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full transition-all duration-200"
            style={{ width: `${Math.min(progress, 100)}%` }} />
        </div>
        <div className="font-mono text-xs text-cyan-400 mt-3">{Math.min(Math.round(progress), 100)}%</div>
      </div>
    </div>
  );
}
