import { Briefcase, Code2, MapPin } from 'lucide-react';

export default function AboutCard() {
  return (
    <div className="relative mx-auto w-full max-w-[480px] overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#07111f]/90 p-6 shadow-2xl shadow-cyan-500/10 backdrop-blur-xl md:p-8">
      <div className="aspect-[4/5] w-full rounded-[2.5rem] bg-[url('/profile_pic.JPG')] bg-cover bg-center shadow-[0_45px_120px_rgba(0,115,255,0.18)]" />

      <div className="absolute inset-x-6 bottom-6 rounded-[2rem] border border-white/10 bg-slate-950/75 p-6 shadow-2xl shadow-slate-950/40 backdrop-blur-xl">
        <p className="text-xs tracking-[0.35em] text-cyan-300 uppercase">About me</p>
        <p className="mt-3 text-sm leading-7 text-slate-300">
          I build intelligent voice AI solutions that help businesses automate conversations and
          deliver better customer experiences.
        </p>

        <div className="mt-6 space-y-3 text-slate-300">
          <div className="flex items-center gap-3 text-sm">
            <MapPin className="h-4 w-4 text-cyan-300" />
            Bangalore, India
          </div>
          {/*<div className="flex items-center gap-3 text-sm">*/}
          {/*  <Briefcase className="h-4 w-4 text-cyan-300" />*/}
          {/*  Associate Solution Delivery Engineer*/}
          {/*</div>*/}
          <div className="flex items-center gap-3 text-sm">
            <Code2 className="h-4 w-4 text-cyan-300" />
            AI · Voice AI · Backend · Automation
          </div>
        </div>
      </div>
    </div>
  );
}
