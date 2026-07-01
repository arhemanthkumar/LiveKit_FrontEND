import { useEffect, useRef } from 'react';

export function VoiceOrb({ className = '' }: { className?: string }) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    let t = 0;
    const anim = () => {
      t += 0.02;
      const scale = 1 + Math.sin(t) * 0.03;
      el.style.transform = `scale(${scale})`;
      raf = requestAnimationFrame(anim);
    };
    raf = requestAnimationFrame(anim);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div ref={ref} className={`relative flex items-center justify-center ${className}`}>
      <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 shadow-[0_15px_50px_rgba(3,105,161,0.25)] md:h-28 md:w-28 lg:h-36 lg:w-36">
        <svg
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 12h2"
            stroke="#022"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="pointer-events-none absolute inset-0 rounded-full ring-4 ring-cyan-500/8 blur-sm" />
    </div>
  );
}
