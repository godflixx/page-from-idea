
import { Button } from "@/components/ui/button";
import { Play, Star, Code, Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/lovable-uploads/017c8ec5-0d18-4e08-8fc6-3b6a9cec44a0.png" 
          alt="Professional business meeting" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/50"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-12 py-12 lg:py-20 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 border border-accent/30 rounded-full text-accent text-sm font-medium backdrop-blur-sm">
              <Star className="w-4 h-4 fill-current" />
              <span>GROW YOUR BUSINESS WITH US</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
                We craft unique{" "}
                <span className="text-accent relative">
                  ideas and
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-accent/30 rounded-full"></div>
                </span>
                {" "}products.
              </h1>
            </div>
            
            <p className="text-gray-300 text-lg lg:text-xl leading-relaxed max-w-lg">
              We're a fully dedicated IT service agency collaborating with brands all over the world.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="bg-accent hover:bg-accent/90 text-white px-8 py-3 text-lg font-semibold transition-all duration-300 group rounded-full">
                <Code className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                About A.I.WORLD
              </Button>
              <Button variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-3 text-lg font-semibold transition-all duration-300 group rounded-full backdrop-blur-sm">
                <Mail className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Contact Us
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-8 pt-8 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 bg-accent rounded-full border-2 border-gray-900"></div>
                  <div className="w-8 h-8 bg-accent/70 rounded-full border-2 border-gray-900"></div>
                  <div className="w-8 h-8 bg-accent/50 rounded-full border-2 border-gray-900"></div>
                </div>
                <span className="text-white">500+ Happy Clients</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-white">4.9/5 Rating</span>
              </div>
            </div>
          </div>

          {/* Right Content - Optional floating elements */}
          <div className="relative hidden lg:block">
            <div className="relative w-full h-96 lg:h-[500px] flex items-center justify-center">
              {/* Floating Cards */}
              <div className="absolute top-12 left-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/20 animate-bounce">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium text-white">92% Success Rate</span>
                </div>
              </div>

              <div className="absolute bottom-16 right-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/20 animate-bounce" style={{animationDelay: '1s'}}>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-accent rounded-full"></div>
                  <span className="text-sm font-medium text-white">24/7 Support</span>
                </div>
              </div>

              <div className="absolute top-1/2 -left-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/20 animate-bounce" style={{animationDelay: '2s'}}>
                <div className="text-center">
                  <div className="text-lg font-bold text-accent">18M+</div>
                  <div className="text-xs text-gray-300">Revenue</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
