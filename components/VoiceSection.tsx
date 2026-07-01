import StartCallButton from './StartCallButton';

interface VoiceSectionProps {
  onStart: () => void;
}

export default function VoiceSection() {
  return (
    <div className="flex flex-col items-center gap-8 text-center">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm tracking-[0.4em] text-cyan-300 uppercase">Meet Sarah</p>
        <h1 className="mt-6 text-4xl leading-tight font-semibold text-white md:text-6xl">
          Talk to my AI Assistant
          <span className="block text-cyan-400">about me.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
          Hi! I am Sarah, Hemanth Kumar is personal AI assistant. Ask me anything about his
          education, experience, projects, skills, and journey.
        </p>
      </div>

      <div className="mx-auto flex w-full max-w-xl flex-col items-center gap-6">
        <div className="rounded-[2rem] border border-cyan-400/20 bg-white/5 px-6 py-5 shadow-2xl shadow-cyan-500/10 backdrop-blur-xl">
          <div className="flex items-center justify-center gap-3 text-cyan-300">
            <span className="grid h-10 w-10 place-items-center rounded-3xl bg-cyan-400/10">
              <span className="h-3 w-3 animate-pulse rounded-full bg-cyan-400" />
            </span>
            <div className="text-sm tracking-[0.35em] uppercase">LiveKit voice agent</div>
          </div>
          <p className="mt-3 text-sm text-slate-300">Ready to connect and answer your questions.</p>
        </div>

        <div className="flex flex-col items-center gap-4">
          <StartCallButton />
          <p className="text-sm text-slate-300">Click to start a voice conversation</p>
        </div>
      </div>
    </div>
  );
}
