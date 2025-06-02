
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Star } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="container mx-auto px-6 lg:px-12 py-12 lg:py-20">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Content */}
        <div className="space-y-6 lg:space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent text-sm font-medium">
            <Star className="w-4 h-4 fill-current" />
            <span>TAILORED AI SOLUTIONS</span>
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight">
              Empowering Business with{" "}
              <span className="text-accent relative">
                AI Solutions
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-accent/30 rounded-full"></div>
              </span>
            </h1>
          </div>
          
          <p className="text-muted-foreground text-lg lg:text-xl leading-relaxed max-w-lg">
            Discover AI solutions that improve operations and drive growth. Join us in building a 
            smarter future with intelligent technology for informed business decisions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button className="bg-accent hover:bg-accent-700 text-white px-8 py-3 text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl group">
              Get Started
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" className="border-2 border-muted-foreground/20 text-foreground hover:bg-muted/50 px-8 py-3 text-lg font-semibold transition-all duration-300 group">
              <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Watch Demo
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center gap-8 pt-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 bg-accent rounded-full border-2 border-background"></div>
                <div className="w-8 h-8 bg-accent-700 rounded-full border-2 border-background"></div>
                <div className="w-8 h-8 bg-muted-foreground rounded-full border-2 border-background"></div>
              </div>
              <span>500+ Happy Clients</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span>4.9/5 Rating</span>
            </div>
          </div>
        </div>

        {/* Right Content - Hero Image */}
        <div className="relative">
          <div className="relative w-full h-96 lg:h-[500px] flex items-center justify-center">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-accent-700/10 rounded-3xl"></div>
            <div className="absolute top-8 right-8 w-32 h-32 bg-accent/20 rounded-full blur-2xl"></div>
            <div className="absolute bottom-8 left-8 w-24 h-24 bg-accent-700/20 rounded-full blur-xl"></div>
            
            {/* Main Image */}
            <div className="relative z-10 p-8">
              <img 
                src="/lovable-uploads/3fd65315-57fa-44d6-bfe1-6a4e394c1c24.png" 
                alt="AI Brain Gear Technology" 
                className="w-full max-w-sm h-auto object-contain drop-shadow-2xl rounded-full"
              />
            </div>

            {/* Floating Cards */}
            <div className="absolute top-12 left-4 bg-background/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-border animate-bounce">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium text-foreground">92% Success Rate</span>
              </div>
            </div>

            <div className="absolute bottom-16 right-4 bg-background/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-border animate-bounce" style={{animationDelay: '1s'}}>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-accent rounded-full"></div>
                <span className="text-sm font-medium text-foreground">24/7 Support</span>
              </div>
            </div>

            <div className="absolute top-1/2 -left-4 bg-background/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-border animate-bounce" style={{animationDelay: '2s'}}>
              <div className="text-center">
                <div className="text-lg font-bold text-accent">18M+</div>
                <div className="text-xs text-muted-foreground">Revenue</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
