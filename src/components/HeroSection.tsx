
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

        {/* Right Content - Realistic Robot Illustration */}
        <div className="relative">
          <div className="relative w-full h-96 lg:h-[500px] flex items-center justify-center">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-full blur-2xl"></div>
            
            {/* Robot Container */}
            <div className="relative w-80 h-80">
              {/* Robot Head */}
              <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-32 h-32">
                <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-500 rounded-lg shadow-2xl">
                  {/* Eyes */}
                  <div className="flex justify-between items-center pt-6 px-6">
                    <div className="w-6 h-6 bg-cyan-400 rounded-full animate-pulse shadow-lg shadow-cyan-400/50"></div>
                    <div className="w-6 h-6 bg-cyan-400 rounded-full animate-pulse shadow-lg shadow-cyan-400/50"></div>
                  </div>
                  {/* Mouth/Speaker */}
                  <div className="mt-4 mx-auto w-16 h-3 bg-gray-600 rounded-full"></div>
                  <div className="mt-1 mx-auto w-12 h-2 bg-gray-700 rounded-full"></div>
                </div>
                {/* Antenna */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-1 h-8 bg-gradient-to-t from-gray-400 to-purple-400"></div>
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-purple-400 rounded-full animate-ping"></div>
              </div>

              {/* Robot Body */}
              <div className="absolute top-32 left-1/2 transform -translate-x-1/2 w-40 h-48">
                <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-500 rounded-lg shadow-2xl">
                  {/* Chest Panel */}
                  <div className="pt-4 px-4">
                    <div className="w-full h-8 bg-gray-600 rounded mb-2 flex items-center justify-center">
                      <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
                    </div>
                    {/* Control buttons */}
                    <div className="grid grid-cols-3 gap-2 mb-4">
                      <div className="w-6 h-6 bg-red-400 rounded-full animate-pulse"></div>
                      <div className="w-6 h-6 bg-yellow-400 rounded-full animate-pulse"></div>
                      <div className="w-6 h-6 bg-blue-400 rounded-full animate-pulse"></div>
                    </div>
                    {/* Display screen */}
                    <div className="w-full h-12 bg-black rounded border-2 border-cyan-400 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 animate-pulse"></div>
                      <div className="absolute top-2 left-2 text-xs text-cyan-400 font-mono">AI_STATUS: ACTIVE</div>
                      <div className="absolute bottom-1 right-1 w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Robot Arms */}
              <div className="absolute top-36 -left-8 w-16 h-32">
                <div className="w-8 h-full bg-gradient-to-b from-gray-400 to-gray-600 rounded-full shadow-lg"></div>
                {/* Left hand */}
                <div className="absolute -bottom-2 left-1 w-6 h-6 bg-gray-500 rounded-full">
                  <div className="absolute top-1 left-1 w-1 h-4 bg-gray-700 rounded"></div>
                  <div className="absolute top-1 right-1 w-1 h-4 bg-gray-700 rounded"></div>
                </div>
              </div>
              
              <div className="absolute top-36 -right-8 w-16 h-32">
                <div className="w-8 h-full bg-gradient-to-b from-gray-400 to-gray-600 rounded-full shadow-lg ml-8"></div>
                {/* Right hand */}
                <div className="absolute -bottom-2 right-1 w-6 h-6 bg-gray-500 rounded-full">
                  <div className="absolute top-1 left-1 w-1 h-4 bg-gray-700 rounded"></div>
                  <div className="absolute top-1 right-1 w-1 h-4 bg-gray-700 rounded"></div>
                </div>
              </div>

              {/* Robot Base/Legs */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-16">
                <div className="w-full h-full bg-gradient-to-br from-gray-400 to-gray-600 rounded-lg shadow-xl">
                  {/* Wheels/Tracks */}
                  <div className="absolute -bottom-2 left-2 w-6 h-6 bg-gray-700 rounded-full border-2 border-gray-500"></div>
                  <div className="absolute -bottom-2 right-2 w-6 h-6 bg-gray-700 rounded-full border-2 border-gray-500"></div>
                </div>
              </div>

              {/* Floating UI Elements */}
              <div className="absolute top-4 -left-12 animate-bounce">
                <div className="bg-cyan-400/20 backdrop-blur-sm rounded-lg p-2 border border-cyan-400/30">
                  <div className="text-xs text-cyan-400 font-mono">NEURAL NET</div>
                  <div className="w-8 h-1 bg-cyan-400 rounded mt-1"></div>
                </div>
              </div>

              <div className="absolute top-16 -right-16 animate-bounce" style={{animationDelay: '1s'}}>
                <div className="bg-purple-400/20 backdrop-blur-sm rounded-lg p-2 border border-purple-400/30">
                  <div className="text-xs text-purple-400 font-mono">ML CORE</div>
                  <div className="w-8 h-1 bg-purple-400 rounded mt-1"></div>
                </div>
              </div>

              <div className="absolute bottom-8 -left-8 animate-bounce" style={{animationDelay: '2s'}}>
                <div className="bg-pink-400/20 backdrop-blur-sm rounded-lg p-2 border border-pink-400/30">
                  <div className="text-xs text-pink-400 font-mono">AGI</div>
                  <div className="w-6 h-1 bg-pink-400 rounded mt-1"></div>
                </div>
              </div>

              {/* Energy particles */}
              <div className="absolute top-12 left-8 w-2 h-2 bg-cyan-300 rounded-full animate-ping opacity-75"></div>
              <div className="absolute top-24 right-12 w-1 h-1 bg-purple-300 rounded-full animate-ping opacity-60" style={{animationDelay: '0.7s'}}></div>
              <div className="absolute bottom-16 left-16 w-1 h-1 bg-pink-300 rounded-full animate-ping opacity-80" style={{animationDelay: '1.4s'}}></div>
              <div className="absolute bottom-24 right-8 w-2 h-2 bg-yellow-300 rounded-full animate-ping opacity-50" style={{animationDelay: '2.1s'}}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
