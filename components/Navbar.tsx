import { Github, Linkedin, Mail } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-10">
      <div className="flex items-center gap-4 rounded-[2rem] border border-white/10 bg-white/5 px-4 py-3 shadow-xl shadow-slate-950/10 backdrop-blur-xl">
        <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-gradient-to-br from-cyan-400 to-blue-500 text-lg font-bold text-black">
          HK
        </div>
        <div>
          <h1 className="text-lg font-semibold text-white">Hemanth Kumar</h1>
          <p className="text-sm text-slate-300">
            AI & Voice Automation Engineer
          </p>
        </div>
      </div>

      <div className="hidden items-center gap-4 text-slate-300 md:flex">
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/arhemanthkumar"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transition hover:text-cyan-400"
          >
            <Github className="h-5 w-5" />
          </a>

          <a
            href="https://www.linkedin.com/in/arhemanthkumar/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transition hover:text-cyan-400"
          >
            <Linkedin className="h-5 w-5" />
          </a>

          <a
            href="mailto:hemanthar95@gmail.com"
            aria-label="Email"
            className="transition hover:text-cyan-400"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </nav>
  );
}