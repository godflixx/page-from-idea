
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
    <header className="w-full bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 dark:from-slate-950 dark:via-blue-950 dark:to-indigo-950 border-b border-blue-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/30">
              <div className="w-5 h-5 bg-white rounded-full"></div>
            </div>
            <span className="text-white text-xl lg:text-2xl font-bold">A.I.WORLD</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-white/90 hover:text-cyan-300 transition-colors font-medium">
              Home
            </Link>
            <Link to="/about" className="text-white/90 hover:text-cyan-300 transition-colors font-medium">
              About
            </Link>
            <Link to="/services" className="text-white/90 hover:text-cyan-300 transition-colors font-medium">
              Services
            </Link>
            <div className="relative group">
              <a href="/blog" className="text-white/90 hover:text-cyan-300 transition-colors font-medium flex items-center">
                Blog
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              <div className="absolute top-full left-0 mt-2 w-64 bg-slate-800/95 dark:bg-slate-900/95 backdrop-blur-sm rounded-lg shadow-xl border border-blue-800/30 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="p-4">
                  <h3 className="text-white font-semibold mb-3">Insights & Technology</h3>
                  <a href="/blog/generative-ai" className="block text-white/80 hover:text-cyan-300 transition-colors mb-2 text-sm">
                    Generative AI Documentation
                  </a>
                  <a href="/blog/ai-insights" className="block text-white/80 hover:text-cyan-300 transition-colors text-sm">
                    AI Technology Insights
                  </a>
                </div>
              </div>
            </div>
          </nav>

          {/* CTA Buttons and Theme Toggle */}
          <div className="hidden lg:flex items-center space-x-4">
            <ThemeToggle />
            <Button 
              variant="outline" 
              className="border-cyan-400/50 text-cyan-300 hover:bg-cyan-400/10 hover:border-cyan-300 transition-all"
            >
              Estimate Your Project
            </Button>
            <Button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold shadow-lg shadow-blue-500/30">
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/10"
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-800/50 dark:bg-slate-900/50 backdrop-blur-sm rounded-lg mt-2 border border-blue-800/30">
              <Link to="/" className="block px-3 py-2 text-white/90 hover:text-cyan-300 hover:bg-white/5 rounded-md transition-colors">
                Home
              </Link>
              <Link to="/about" className="block px-3 py-2 text-white/90 hover:text-cyan-300 hover:bg-white/5 rounded-md transition-colors">
                About
              </Link>
              <Link to="/services" className="block px-3 py-2 text-white/90 hover:text-cyan-300 hover:bg-white/5 rounded-md transition-colors">
                Services
              </Link>
              <a href="/blog" className="block px-3 py-2 text-white/90 hover:text-cyan-300 hover:bg-white/5 rounded-md transition-colors">
                Blog
              </a>
              <a href="/blog/generative-ai" className="block px-6 py-2 text-sm text-white/70 hover:text-cyan-300 hover:bg-white/5 rounded-md transition-colors">
                Generative AI Documentation
              </a>
              <div className="pt-4 space-y-2">
                <Button 
                  variant="outline" 
                  className="w-full border-cyan-400/50 text-cyan-300 hover:bg-cyan-400/10 hover:border-cyan-300"
                >
                  Estimate Your Project
                </Button>
                <Button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold">
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
