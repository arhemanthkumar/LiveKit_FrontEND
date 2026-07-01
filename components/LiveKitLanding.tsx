import Navbar from "@/components/Navbar";
import Background from "@/components/Background";
import Hero from "@/components/Hero";
// import FeatureCards from "@/components/FeatureCards";
import Footer from "@/components/Footer";

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