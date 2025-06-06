
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutUsSection from "@/components/AboutUsSection";
import ServicesPreview from "@/components/ServicesPreview";
import StatsSection from "@/components/StatsSection";
import PartnershipSection from "@/components/PartnershipSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <div className="-mt-4">
        <AboutUsSection />
      </div>
      <div className="-mt-4">
        <ServicesPreview />
      </div>
      <div className="-mt-4">
        <StatsSection />
      </div>
      <div className="-mt-4">
        <PartnershipSection />
      </div>
      <div className="-mt-4">
        <CaseStudiesSection />
      </div>
      <div className="-mt-4">
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
