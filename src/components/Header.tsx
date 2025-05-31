
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="w-full bg-card/80 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-lg">
              <div className="w-5 h-5 bg-primary-foreground rounded-full"></div>
            </div>
            <span className="text-foreground text-xl lg:text-2xl font-bold">A.I.WORLD</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-foreground/90 hover:text-primary transition-colors font-medium">
              Home
            </Link>
            <Link to="/about" className="text-foreground/90 hover:text-primary transition-colors font-medium">
              About
            </Link>
            <Link to="/services" className="text-foreground/90 hover:text-primary transition-colors font-medium">
              Services
            </Link>
            <div className="relative group">
              <Link to="/blog" className="text-foreground/90 hover:text-primary transition-colors font-medium flex items-center">
                Blog
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              <div className="absolute top-full left-0 mt-2 w-64 bg-card/95 backdrop-blur-sm rounded-lg shadow-xl border border-border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="p-4">
                  <h3 className="text-foreground font-semibold mb-3">Insights & Technology</h3>
                  <Link to="/blog/generative-ai" className="block text-muted-foreground hover:text-primary transition-colors mb-2 text-sm">
                    Generative AI Documentation
                  </Link>
                  <Link to="/blog/ai-insights" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                    AI Technology Insights
                  </Link>
                </div>
              </div>
            </div>
          </nav>

          {/* CTA Buttons and Theme Toggle */}
          <div className="hidden lg:flex items-center space-x-4">
            <ThemeToggle />
            <Button 
              variant="outline" 
              className="border-primary/50 text-primary hover:bg-primary/10 hover:border-primary transition-all"
            >
              Estimate Your Project
            </Button>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg">
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              className="text-foreground hover:bg-muted"
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-card/50 backdrop-blur-sm rounded-lg mt-2 border border-border">
              <Link to="/" className="block px-3 py-2 text-foreground/90 hover:text-primary hover:bg-muted rounded-md transition-colors">
                Home
              </Link>
              <Link to="/about" className="block px-3 py-2 text-foreground/90 hover:text-primary hover:bg-muted rounded-md transition-colors">
                About
              </Link>
              <Link to="/services" className="block px-3 py-2 text-foreground/90 hover:text-primary hover:bg-muted rounded-md transition-colors">
                Services
              </Link>
              <Link to="/blog" className="block px-3 py-2 text-foreground/90 hover:text-primary hover:bg-muted rounded-md transition-colors">
                Blog
              </Link>
              <Link to="/blog/generative-ai" className="block px-6 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-muted rounded-md transition-colors">
                Generative AI Documentation
              </Link>
              <div className="pt-4 space-y-2">
                <Button 
                  variant="outline" 
                  className="w-full border-primary/50 text-primary hover:bg-primary/10 hover:border-primary"
                >
                  Estimate Your Project
                </Button>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
