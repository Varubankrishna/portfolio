import { useState, useRef } from "react";
import { personalInfo } from "../data/portfolio";
import { Mail, Phone, GitFork, Link2, Send, CheckCircle2, AlertCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

// ─── EMAILJS SETUP ────────────────────────────────────────────────────────────
// 1. Go to https://emailjs.com and create a FREE account
// 2. Add a service (Gmail recommended) → copy your Service ID
// 3. Create an email template → copy your Template ID
// 4. Go to Account → API Keys → copy your Public Key
// 5. Paste all three below:
const EMAILJS_SERVICE_ID  = "service_o9kaasu";   // e.g. "service_abc123"
const EMAILJS_TEMPLATE_ID = "template_h5weqrn";  // e.g. "template_xyz789"
const EMAILJS_PUBLIC_KEY  = "xc-DCxinc8Ce60ZnT";   // e.g. "AbCdEfGhIjKlMnOp"
// ─────────────────────────────────────────────────────────────────────────────

const contactLinks = [
  { icon: Mail,    label: "Email",    value: personalInfo.email,  href: `mailto:${personalInfo.email}` },
  { icon: Phone,   label: "Phone",   value: personalInfo.phone,  href: `tel:${personalInfo.phone}` },
  { icon: GitFork, label: "GitHub",  value: "github.com/Varubankrishna", href: personalInfo.github },
  { icon: Link2,   label: "LinkedIn",value: "linkedin.com/in/varuban-krishna", href: personalInfo.linkedin },
];

export default function Contact() {
  const formRef = useRef(null);
  const [form, setForm]     = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errMsg, setErrMsg] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus("loading");
    setErrMsg("");

    // Check if EmailJS is configured
    if (
      EMAILJS_SERVICE_ID  === "YOUR_SERVICE_ID" ||
      EMAILJS_TEMPLATE_ID === "YOUR_TEMPLATE_ID" ||
      EMAILJS_PUBLIC_KEY  === "YOUR_PUBLIC_KEY"
    ) {
      // Demo mode — show success without actually sending
      setTimeout(() => {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 4000);
      }, 1200);
      return;
    }

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name:  form.name,
          from_email: form.email,
          message:    form.message,
          to_name:    "Varuban Krishna",
          reply_to:   form.email,
        },
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      setErrMsg("Something went wrong. Please try emailing directly.");
      setStatus("error");
    }

    setTimeout(() => setStatus("idle"), 5000);
  };

  return (
    <section id="contact" className="py-24 px-6 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-5xl mx-auto">
        <div className="reveal mb-12 text-center">
          <span className="font-mono text-xs text-cyan-400 uppercase tracking-widest mb-3 block">06 / Get In Touch</span>
          <h2 className="font-display text-4xl font-bold text-slate-900 dark:text-white mb-3">Contact</h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-md mx-auto text-sm">
            Have a project, internship opportunity, or just want to connect? I'd love to hear from you.
          </p>
        </div>

        <div className="reveal grid md:grid-cols-5 gap-8">
          {/* Left: contact links */}
          <div className="md:col-span-2 space-y-3">
            {contactLinks.map(({ icon: Icon, label, value, href }) => (
              <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0d0d1a] hover:border-cyan-400/40 transition-all group">
                <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-400 group-hover:bg-cyan-400/20 transition-colors shrink-0">
                  <Icon size={16} />
                </div>
                <div className="min-w-0">
                  <div className="text-xs text-slate-400 dark:text-slate-500 mb-0.5">{label}</div>
                  <div className="text-sm font-medium text-slate-700 dark:text-slate-200 group-hover:text-cyan-400 transition-colors truncate">
                    {value}
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Right: form */}
          <form ref={formRef} onSubmit={handleSubmit} className="md:col-span-3 space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1.5">Name</label>
                <input type="text" name="name" value={form.name} onChange={handleChange} required
                  placeholder="Your name"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#0d0d1a] text-slate-900 dark:text-white text-sm placeholder:text-slate-400 focus:outline-none focus:border-cyan-400/60 focus:ring-1 focus:ring-cyan-400/30 transition-all" />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1.5">Email</label>
                <input type="email" name="email" value={form.email} onChange={handleChange} required
                  placeholder="your@email.com"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#0d0d1a] text-slate-900 dark:text-white text-sm placeholder:text-slate-400 focus:outline-none focus:border-cyan-400/60 focus:ring-1 focus:ring-cyan-400/30 transition-all" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1.5">Message</label>
              <textarea name="message" value={form.message} onChange={handleChange} required rows={5}
                placeholder="Tell me about your project or opportunity..."
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#0d0d1a] text-slate-900 dark:text-white text-sm placeholder:text-slate-400 focus:outline-none focus:border-cyan-400/60 focus:ring-1 focus:ring-cyan-400/30 transition-all resize-none" />
            </div>

            {errMsg && (
              <p className="text-red-400 text-xs flex items-center gap-1.5">
                <AlertCircle size={13} /> {errMsg}
              </p>
            )}

            <button type="submit" disabled={status === "loading" || status === "success"}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-cyan-400 text-[#07070f] font-semibold text-sm hover:bg-cyan-300 disabled:opacity-60 disabled:cursor-not-allowed transition-all shadow-lg shadow-cyan-400/20">
              {status === "loading" ? (
                <><span className="w-4 h-4 border-2 border-[#07070f]/30 border-t-[#07070f] rounded-full animate-spin" />Sending...</>
              ) : status === "success" ? (
                <><CheckCircle2 size={16} />Message Sent! I'll get back to you soon.</>
              ) : status === "error" ? (
                <><AlertCircle size={16} />Failed — try again</>
              ) : (
                <><Send size={15} />Send Message</>
              )}
            </button>

            <p className="text-xs text-slate-400 dark:text-slate-500 text-center">
              📧 Or email me directly at{" "}
              <a href={`mailto:${personalInfo.email}`} className="text-cyan-400 hover:underline">
                {personalInfo.email}
              </a>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
