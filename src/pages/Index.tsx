
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AIVisualization from "@/components/AIVisualization";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-purple-800 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-cyan-400/20"></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10">
        <Navigation />
        <HeroSection />
        <AIVisualization />
      </div>
    </div>
  );
};

export default Index;
