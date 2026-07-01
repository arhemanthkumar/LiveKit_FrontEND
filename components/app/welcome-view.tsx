import { FeatureCards } from '@/components/landing/FeatureCards';
import { ProfileCard } from '@/components/landing/ProfileCard';
import { SocialLinks } from '@/components/landing/SocialLinks';
import { VoiceOrb } from '@/components/landing/VoiceOrb';
import { Button } from '@/components/ui/button';

interface WelcomeViewProps {
  startButtonText: string;
  onStartCall: () => void;
}

export const WelcomeView = ({
  startButtonText,
  onStartCall,
  ref,
}: React.ComponentProps<'div'> & WelcomeViewProps) => {
  return (
    <div
      ref={ref}
      className="min-h-screen bg-gradient-to-b from-[#051021] via-[#04121a] to-[#000000] text-white"
    >
      <main className="container mx-auto px-4 pt-20 pb-20">
        <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-4">
          <div className="order-2 md:order-1">
            <ProfileCard />
          </div>

          <div className="order-1 flex flex-col gap-6 md:order-2 md:col-span-2">
            <div>
              <p className="text-sm tracking-widest text-cyan-300 uppercase">Meet Sarah</p>
              <h1 className="mt-4 text-4xl leading-tight font-extrabold md:text-6xl">
                Talk to my AI Assistant <span className="text-cyan-400">about me.</span>
              </h1>

              <p className="text-muted-foreground mt-6 max-w-3xl text-lg">
                Hi! I&apos;m Sarah, Hemanth Kumar&apos;s personal AI assistant. Ask me anything
                about his education, experience, projects, skills, and journey.
              </p>
            </div>

            <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-8">
              <div className="order-2 flex items-center md:order-1">
                <Button
                  size="lg"
                  onClick={onStartCall}
                  className="flex items-center gap-3 rounded-full bg-cyan-400 px-8 py-4 text-black shadow-xl"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 3v18"
                      stroke="#000"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M19 8a7 7 0 0 0-14 0v4a7 7 0 0 0 14 0V8z"
                      stroke="#000"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="font-semibold">{startButtonText}</span>
                </Button>
                <div className="text-muted-foreground mt-2 text-sm">
                  Click to start a voice conversation
                </div>
              </div>

              <div className="order-1 flex items-center justify-center md:order-2 md:justify-end">
                <VoiceOrb className="flex-shrink-0" />
              </div>
            </div>

            <FeatureCards />
            <SocialLinks />
          </div>
        </div>
      </main>
    </div>
  );
};
