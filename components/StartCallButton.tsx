'use client';

import { useRouter } from 'next/navigation';

export default function StartCallButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push('/voice')}
      className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-10 py-4 text-base font-semibold text-black transition hover:scale-[1.02] hover:bg-cyan-300"
    >
      Start Conversation
    </button>
  );
}