
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

        {/* Right Content - AI Brain Illustration */}
        <div className="relative">
          <div className="relative w-full h-96 lg:h-[500px]">
            {/* Main brain silhouette with glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-full blur-2xl"></div>
            
            {/* Central AI brain structure */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-80 h-80">
                {/* Core brain shape */}
                <div className="absolute inset-8 bg-gradient-to-br from-cyan-500/30 to-purple-500/30 rounded-full"></div>
                <div className="absolute inset-12 bg-gradient-to-br from-cyan-400/40 to-purple-400/40 rounded-full animate-pulse"></div>
                
                {/* Neural network connections */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 320 320">
                  <defs>
                    <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8" />
                      <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="#ec4899" stopOpacity="0.8" />
                    </linearGradient>
                  </defs>
                  
                  {/* Interconnected neural pathways */}
                  <path d="M80 80 Q160 120 240 80" 
                        stroke="url(#connectionGradient)" 
                        strokeWidth="2" 
                        fill="none" 
                        className="animate-pulse" />
                  <path d="M60 160 Q160 100 260 160" 
                        stroke="url(#connectionGradient)" 
                        strokeWidth="1.5" 
                        fill="none" 
                        className="animate-pulse" />
                  <path d="M80 240 Q160 180 240 240" 
                        stroke="url(#connectionGradient)" 
                        strokeWidth="2" 
                        fill="none" 
                        className="animate-pulse" />
                  <path d="M120 60 L200 100 L280 140 L200 220 L120 260 L40 140 Z" 
                        stroke="url(#connectionGradient)" 
                        strokeWidth="1" 
                        fill="none" 
                        opacity="0.5" />
                </svg>
                
                {/* Floating neural nodes */}
                <div className="absolute top-8 left-16 w-4 h-4 bg-cyan-400 rounded-full opacity-80 animate-bounce shadow-lg shadow-cyan-400/50"></div>
                <div className="absolute top-16 right-12 w-3 h-3 bg-purple-400 rounded-full opacity-90 animate-pulse shadow-lg shadow-purple-400/50"></div>
                <div className="absolute top-32 left-8 w-5 h-5 bg-pink-400 rounded-full opacity-70 animate-bounce shadow-lg shadow-pink-400/50" style={{animationDelay: '0.5s'}}></div>
                <div className="absolute top-48 right-20 w-4 h-4 bg-cyan-300 rounded-full opacity-85 animate-pulse shadow-lg shadow-cyan-300/50" style={{animationDelay: '1s'}}></div>
                <div className="absolute bottom-20 left-20 w-6 h-6 bg-purple-500 rounded-full opacity-60 animate-bounce shadow-lg shadow-purple-500/50" style={{animationDelay: '1.5s'}}></div>
                <div className="absolute bottom-12 right-16 w-3 h-3 bg-pink-300 rounded-full opacity-95 animate-pulse shadow-lg shadow-pink-300/50"></div>
                
                {/* Data streams */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
                </div>
                <div className="absolute top-1/3 left-1/3 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-1 h-1 bg-cyan-200 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
                </div>
                <div className="absolute bottom-1/3 right-1/3 transform translate-x-1/2 translate-y-1/2">
                  <div className="w-1 h-1 bg-purple-200 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
                </div>
              </div>
            </div>
            
            {/* Orbiting elements */}
            <div className="absolute inset-0 animate-spin" style={{animationDuration: '20s'}}>
              <div className="absolute top-0 left-1/2 w-2 h-2 bg-cyan-400 rounded-full transform -translate-x-1/2"></div>
              <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-purple-400 rounded-full transform -translate-x-1/2"></div>
            </div>
            <div className="absolute inset-4 animate-spin" style={{animationDuration: '15s', animationDirection: 'reverse'}}>
              <div className="absolute right-0 top-1/2 w-1 h-1 bg-pink-300 rounded-full transform -translate-y-1/2"></div>
              <div className="absolute left-0 top-1/2 w-1 h-1 bg-cyan-300 rounded-full transform -translate-y-1/2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
