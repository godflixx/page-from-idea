
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AIVisualization from "@/components/AIVisualization";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary/10 dark:from-primary/5 dark:to-primary/10"></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 dark:bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary/10 dark:bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/5 to-primary/10 dark:from-primary/3 dark:to-primary/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10">
        <Header />
        <HeroSection />
        <AIVisualization />
        <CaseStudiesSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
