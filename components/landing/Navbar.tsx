import Link from 'next/link';

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-black/30 px-4 py-3 backdrop-blur-md md:px-12 md:py-5">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <div className="flex items-center gap-4">
          {/* show a small avatar image if available */}
          <div className="h-10 w-10 flex-none overflow-hidden rounded-full bg-[#072033]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/opengraph-image-bg.png"
              alt="avatar"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="text-left">
            <div className="text-sm font-semibold text-white">Hemanth Kumar</div>
            <div className="text-xs text-slate-300">AI & Voice Automation Engineer</div>
          </div>
        </div>

        <div className="hidden items-center gap-4 md:flex">
          <nav className="text-muted-foreground flex gap-3 text-sm">
            <Link href="#education">Education</Link>
            <Link href="#experience">Experience</Link>
            <Link href="#projects">Projects</Link>
            <Link href="#skills">Skills</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
