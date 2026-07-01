import Background from '@/components/Background';
// import FeatureCards from '@/components/FeatureCards';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';

export default function LiveKitLanding() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#05070C] text-white">
      <Background />
      <Navbar />

      <main className="relative z-10">
        <Hero />
        {/*<FeatureCards />*/}
        <Footer />
      </main>
    </div>
  );
}
