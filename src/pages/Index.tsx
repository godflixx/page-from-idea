
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AIVisualization from "@/components/AIVisualization";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 dark:from-slate-950 dark:via-blue-950 dark:to-indigo-950 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 dark:from-blue-600/5 dark:to-indigo-600/5"></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/10 dark:bg-blue-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-600/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-400/5 to-indigo-400/5 dark:from-blue-500/3 dark:to-indigo-500/3 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10">
        <Header />
        <HeroSection />
        <AIVisualization />
      </div>
    </div>
  );
};

export default Index;
