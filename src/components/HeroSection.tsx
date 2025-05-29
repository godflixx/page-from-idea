
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="container mx-auto px-6 lg:px-12 py-20">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="w-1 h-20 bg-gradient-to-b from-pink-500 to-purple-500"></div>
            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
              Artificial<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                General
              </span><br />
              Intelligence
            </h1>
          </div>
          
          <p className="text-white/70 text-lg leading-relaxed max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at sollicitudin magna. 
            Quisque lacus tellus, aliquam quis leo eu, finibus feugiat libero. Duis a ex nisl.
          </p>
          
          <Button className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105">
            Find out more
          </Button>
        </div>

        {/* Right Content - AI Brain Visualization */}
        <div className="relative">
          <div className="relative w-full h-96 lg:h-[500px]">
            {/* Brain silhouette */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/30 to-purple-400/30 rounded-full blur-xl"></div>
            
            {/* Geometric patterns */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-80 h-80">
                {/* Animated geometric shapes */}
                <div className="absolute top-10 left-10 w-6 h-6 bg-cyan-400 rounded-full opacity-60 animate-pulse"></div>
                <div className="absolute top-20 right-20 w-4 h-4 bg-purple-400 rounded-full opacity-80 animate-bounce"></div>
                <div className="absolute bottom-20 left-20 w-5 h-5 bg-pink-400 rounded-full opacity-70 animate-pulse"></div>
                <div className="absolute bottom-10 right-10 w-3 h-3 bg-cyan-300 rounded-full opacity-90 animate-bounce"></div>
                
                {/* Neural network lines */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 320 320">
                  <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.6" />
                    </linearGradient>
                  </defs>
                  <path d="M50 50 L150 100 L250 50 L200 150 L100 200 L50 150 Z" 
                        stroke="url(#lineGradient)" 
                        strokeWidth="2" 
                        fill="none" 
                        className="animate-pulse" />
                  <path d="M100 80 L220 120 L180 180 L80 140 Z" 
                        stroke="url(#lineGradient)" 
                        strokeWidth="1.5" 
                        fill="none" 
                        className="animate-pulse" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
