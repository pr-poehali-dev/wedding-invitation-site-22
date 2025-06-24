import WeddingNavigation from "@/components/WeddingNavigation";
import HeroSection from "@/components/HeroSection";
import ProgramSection from "@/components/ProgramSection";
import LocationSection from "@/components/LocationSection";
import DirectionsSection from "@/components/DirectionsSection";
import DressCodeSection from "@/components/DressCodeSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <WeddingNavigation />
      <HeroSection />
      <ProgramSection />
      <LocationSection />
      <DirectionsSection />
      <DressCodeSection />
      <Footer />
    </div>
  );
};

export default Index;
