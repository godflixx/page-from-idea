
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="container mx-auto px-6 lg:px-12 py-20">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="inline-block px-4 py-2 bg-blue-500/20 border border-blue-400/30 rounded-full text-blue-300 text-sm font-medium backdrop-blur-sm">
              TAILORED AI SOLUTIONS
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
              Empowering<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                Business with AI
              </span>
            </h1>
          </div>
          
          <p className="text-white/70 text-lg leading-relaxed max-w-md">
            Discover AI solutions that improve operations and drive growth. Join us in building a 
            smarter future with Axiona for informed choices.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400">18M+</div>
              <div className="text-sm text-white/60">Total Revenue</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400">92%</div>
              <div className="text-sm text-white/60">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400">20+</div>
              <div className="text-sm text-white/60">Languages Used</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400">24/7</div>
              <div className="text-sm text-white/60">Customer Support</div>
            </div>
          </div>
          
          <Button className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg shadow-blue-500/30">
            Get Started
          </Button>
        </div>

        {/* Right Content - AI Robot Head */}
        <div className="relative">
          <div className="relative w-full h-96 lg:h-[500px] flex items-center justify-center">
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl"></div>
            
            {/* Robot Head Container */}
            <div className="relative w-80 h-80">
              {/* Main Head Structure */}
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Head silhouette */}
                <div className="relative w-64 h-80">
                  {/* Head outline */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-300 to-indigo-600 opacity-90 shadow-2xl shadow-blue-500/30" 
                       style={{
                         clipPath: 'polygon(30% 0%, 70% 0%, 85% 30%, 85% 70%, 70% 100%, 30% 100%, 15% 70%, 15% 30%)'
                       }}>
                  </div>
                  
                  {/* Inner head details */}
                  <div className="absolute inset-4 bg-gradient-to-br from-blue-400 to-indigo-700 opacity-80"
                       style={{
                         clipPath: 'polygon(30% 0%, 70% 0%, 85% 30%, 85% 70%, 70% 100%, 30% 100%, 15% 70%, 15% 30%)'
                       }}>
                  </div>

                  {/* Eye area */}
                  <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-32 h-20">
                    {/* Main eye */}
                    <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-blue-300 to-indigo-500 rounded-full shadow-2xl shadow-blue-400/50">
                      {/* Eye rings */}
                      <div className="absolute inset-2 border-2 border-blue-200 rounded-full animate-spin" style={{animationDuration: '4s'}}></div>
                      <div className="absolute inset-4 border border-indigo-300 rounded-full animate-spin" style={{animationDuration: '2s', animationDirection: 'reverse'}}></div>
                      <div className="absolute inset-6 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full animate-pulse"></div>
                    </div>
                  </div>

                  {/* Neck/Connection */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-8 bg-gradient-to-b from-blue-500 to-indigo-700"></div>
                </div>
              </div>

              {/* Floating Tech Elements */}
              <div className="absolute top-8 -left-16 animate-bounce">
                <div className="bg-blue-500/20 backdrop-blur-sm rounded-lg p-3 border border-blue-400/30">
                  <div className="w-6 h-6 bg-blue-400 rounded-sm mb-2"></div>
                  <div className="w-8 h-1 bg-blue-400 rounded"></div>
                </div>
              </div>

              <div className="absolute top-16 -right-20 animate-bounce" style={{animationDelay: '0.7s'}}>
                <div className="bg-indigo-500/20 backdrop-blur-sm rounded-lg p-3 border border-indigo-400/30">
                  <div className="w-4 h-4 bg-indigo-400 rounded-full mb-2"></div>
                  <div className="w-6 h-1 bg-indigo-400 rounded"></div>
                </div>
              </div>

              <div className="absolute bottom-12 -left-12 animate-bounce" style={{animationDelay: '1.4s'}}>
                <div className="bg-blue-600/20 backdrop-blur-sm rounded-lg p-3 border border-blue-500/30">
                  <div className="grid grid-cols-2 gap-1 mb-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  </div>
                  <div className="w-6 h-1 bg-blue-400 rounded"></div>
                </div>
              </div>

              <div className="absolute bottom-8 -right-16 animate-bounce" style={{animationDelay: '2.1s'}}>
                <div className="bg-indigo-600/20 backdrop-blur-sm rounded-lg p-3 border border-indigo-500/30">
                  <div className="w-8 h-2 bg-indigo-400 rounded mb-1"></div>
                  <div className="w-6 h-1 bg-indigo-400 rounded mb-1"></div>
                  <div className="w-4 h-1 bg-indigo-400 rounded"></div>
                </div>
              </div>

              {/* Floating particles */}
              <div className="absolute top-12 left-8 w-2 h-2 bg-blue-300 rounded-full animate-ping opacity-75"></div>
              <div className="absolute top-24 right-12 w-1 h-1 bg-indigo-300 rounded-full animate-ping opacity-60" style={{animationDelay: '0.5s'}}></div>
              <div className="absolute bottom-20 left-16 w-1 h-1 bg-blue-400 rounded-full animate-ping opacity-80" style={{animationDelay: '1s'}}></div>
              <div className="absolute bottom-32 right-8 w-2 h-2 bg-indigo-400 rounded-full animate-ping opacity-50" style={{animationDelay: '1.5s'}}></div>

              {/* Circuit lines */}
              <div className="absolute top-1/3 left-0 w-16 h-px bg-gradient-to-r from-transparent to-blue-400 opacity-60 animate-pulse"></div>
              <div className="absolute top-1/2 right-0 w-20 h-px bg-gradient-to-l from-transparent to-indigo-400 opacity-60 animate-pulse" style={{animationDelay: '1s'}}></div>
              <div className="absolute bottom-1/3 left-0 w-12 h-px bg-gradient-to-r from-transparent to-blue-500 opacity-60 animate-pulse" style={{animationDelay: '2s'}}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
