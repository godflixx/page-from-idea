
import { Button } from "@/components/ui/button";
import { Code, Mail, Star } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen bg-gray-900 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/lovable-uploads/e6c86ed8-fd8d-4051-93f0-f570c140fc89.png" 
          alt="Team collaboration workspace" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/60 to-gray-900/70"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-12 pt-32 pb-20 min-h-screen flex items-center">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-400 text-sm font-medium backdrop-blur-sm mb-8">
            <Star className="w-4 h-4 fill-current" />
            <span>GROW YOUR BUSINESS WITH US</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6">
            We craft unique{" "}
            <span className="text-blue-400 relative">
              ideas and
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-blue-400/30 rounded-full"></div>
            </span>
            {" "}products.
          </h1>
          
          <p className="text-gray-300 text-xl lg:text-2xl leading-relaxed mb-10 max-w-2xl">
            We're a fully dedicated IT service agency collaborating with brands all over the world.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6">
            <Button className="bg-blue-500 hover:bg-blue-600 text-white px-10 py-4 text-lg font-semibold transition-all duration-300 group rounded-full">
              <Code className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
              About A.I.WORLD
            </Button>
            <Button variant="outline" className="border-2 border-white/60 text-white hover:bg-white/20 hover:border-white/80 px-10 py-4 text-lg font-semibold transition-all duration-300 group rounded-full backdrop-blur-sm bg-white/10">
              <Mail className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
              Contact Us
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center gap-8 mt-12 text-sm text-gray-400">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 bg-blue-500 rounded-full border-2 border-gray-900"></div>
                <div className="w-10 h-10 bg-blue-400 rounded-full border-2 border-gray-900"></div>
                <div className="w-10 h-10 bg-blue-300 rounded-full border-2 border-gray-900"></div>
              </div>
              <span className="text-white font-medium">500+ Happy Clients</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <span className="text-white font-medium">4.9/5 Rating</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
