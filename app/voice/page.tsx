'use client';

import { useEffect, useMemo } from 'react';
import { TokenSource } from 'livekit-client';
import { useSession } from '@livekit/components-react';

import { APP_CONFIG_DEFAULTS } from '@/app-config';
import { AgentSessionProvider } from '@/components/agents-ui/agent-session-provider';
import { AgentSessionView_01 } from '@/components/agents-ui/blocks/agent-session-view-01';

export default function VoicePage() {
  const tokenSource = useMemo(
    () => TokenSource.endpoint('/api/token'),
    []
  );

  const session = useSession(tokenSource, {
    agentName: APP_CONFIG_DEFAULTS.agentName,
  });

  useEffect(() => {
    let mounted = true;

    async function connect() {
      if (!mounted) return;

      try {
        await session.start();
        console.log("CONNECTED");
      } catch (err) {
        console.error("START FAILED", err);
      }
    }

    connect();

    return () => {
      mounted = false;
      session.end();
    };
  }, []);

  return (
    <AgentSessionProvider session={session}>
      <main className="h-screen w-screen bg-black">
        <AgentSessionView_01 audioVisualizerType="aura" />
      </main>
    </AgentSessionProvider>
  );
}