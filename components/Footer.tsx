import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative z-10 mt-24 border-t border-white/10 px-6 py-10 text-slate-400 md:px-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
        <p>© 2026 Hemanth Kumar</p>

        <div className="flex items-center gap-5 text-slate-300">

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
    </footer>
  );
}