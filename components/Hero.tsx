import AboutCard from "./AboutCard";
import VoiceSection from "./VoiceSection";

export default function Hero() {
  return (
    <section className="relative z-10 mx-auto mt-10 flex w-full max-w-7xl flex-col gap-10 px-6 md:flex-row md:gap-16 md:px-10">
      <AboutCard />
      <VoiceSection />
    </section>
  );
}