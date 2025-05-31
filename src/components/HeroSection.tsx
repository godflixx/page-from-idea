
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="container mx-auto px-6 lg:px-12 py-20">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="inline-block px-4 py-2 bg-primary/20 border border-primary/30 rounded-full text-primary text-sm font-medium backdrop-blur-sm">
              TAILORED AI SOLUTIONS
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Empowering<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80">
                Business with AI
              </span>
            </h1>
          </div>
          
          <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
            Discover AI solutions that improve operations and drive growth. Join us in building a 
            smarter future with Axiona for informed choices.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">18M+</div>
              <div className="text-sm text-muted-foreground">Total Revenue</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">92%</div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">20+</div>
              <div className="text-sm text-muted-foreground">Languages Used</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground">Customer Support</div>
            </div>
          </div>
          
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg">
            Get Started
          </Button>
        </div>

        {/* Right Content - AI Brain Gear Image */}
        <div className="relative">
          <div className="relative w-full h-96 lg:h-[500px] flex items-center justify-center">
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-full blur-3xl"></div>
            
            {/* AI Brain Gear Image */}
            <div className="relative z-10">
              <img 
                src="/lovable-uploads/3fd65315-57fa-44d6-bfe1-6a4e394c1c24.png" 
                alt="AI Brain Gear Technology" 
                className="w-full max-w-md h-auto object-contain animate-pulse rounded-full"
              />
            </div>

            {/* Floating Tech Elements */}
            <div className="absolute top-8 -left-16 animate-bounce">
              <div className="bg-card/80 backdrop-blur-sm rounded-lg p-3 border border-border">
                <div className="w-6 h-6 bg-primary rounded-sm mb-2"></div>
                <div className="w-8 h-1 bg-primary rounded"></div>
              </div>
            </div>

            <div className="absolute top-16 -right-20 animate-bounce" style={{animationDelay: '0.7s'}}>
              <div className="bg-card/80 backdrop-blur-sm rounded-lg p-3 border border-border">
                <div className="w-4 h-4 bg-primary rounded-full mb-2"></div>
                <div className="w-6 h-1 bg-primary rounded"></div>
              </div>
            </div>

            <div className="absolute bottom-12 -left-12 animate-bounce" style={{animationDelay: '1.4s'}}>
              <div className="bg-card/80 backdrop-blur-sm rounded-lg p-3 border border-border">
                <div className="grid grid-cols-2 gap-1 mb-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>
                <div className="w-6 h-1 bg-primary rounded"></div>
              </div>
            </div>

            <div className="absolute bottom-8 -right-16 animate-bounce" style={{animationDelay: '2.1s'}}>
              <div className="bg-card/80 backdrop-blur-sm rounded-lg p-3 border border-border">
                <div className="w-8 h-2 bg-primary rounded mb-1"></div>
                <div className="w-6 h-1 bg-primary rounded mb-1"></div>
                <div className="w-4 h-1 bg-primary rounded"></div>
              </div>
            </div>

            {/* Floating particles */}
            <div className="absolute top-12 left-8 w-2 h-2 bg-primary/80 rounded-full animate-ping opacity-75"></div>
            <div className="absolute top-24 right-12 w-1 h-1 bg-primary/60 rounded-full animate-ping opacity-60" style={{animationDelay: '0.5s'}}></div>
            <div className="absolute bottom-20 left-16 w-1 h-1 bg-primary/80 rounded-full animate-ping opacity-80" style={{animationDelay: '1s'}}></div>
            <div className="absolute bottom-32 right-8 w-2 h-2 bg-primary/50 rounded-full animate-ping opacity-50" style={{animationDelay: '1.5s'}}></div>

            {/* Circuit lines */}
            <div className="absolute top-1/3 left-0 w-16 h-px bg-gradient-to-r from-transparent to-primary opacity-60 animate-pulse"></div>
            <div className="absolute top-1/2 right-0 w-20 h-px bg-gradient-to-l from-transparent to-primary opacity-60 animate-pulse" style={{animationDelay: '1s'}}></div>
            <div className="absolute bottom-1/3 left-0 w-12 h-px bg-gradient-to-r from-transparent to-primary opacity-60 animate-pulse" style={{animationDelay: '2s'}}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
