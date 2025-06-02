
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutUsSection from "@/components/AboutUsSection";
import ServicesPreview from "@/components/ServicesPreview";
import StatsSection from "@/components/StatsSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <AboutUsSection />
      <ServicesPreview />
      <StatsSection />
      <CaseStudiesSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
