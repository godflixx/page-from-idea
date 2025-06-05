import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isMainPage = location.pathname === "/";

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLogoClick = () => {
    navigate("/");
  };

  const services = [
    { name: "AI & Machine Learning", href: "/services/ai-machine-learning" },
    { name: "Web Development", href: "/services/web-development" },
    { name: "Mobile Applications", href: "/services/mobile-applications" },
    { name: "Data Analytics", href: "/services/data-analytics" },
    { name: "Cloud Solutions", href: "/services/cloud-solutions" },
    { name: "Cybersecurity", href: "/services/cybersecurity" },
  ];

  // Different styles for main page vs other pages
  const getHeaderStyles = () => {
    if (isMainPage) {
      return "absolute top-0 left-0 right-0 z-50 w-full bg-transparent backdrop-blur-sm";
    }
    return "absolute top-0 left-0 right-0 z-50 w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-200/50 dark:border-gray-700/50";
  };

  const getLogoStyles = () => {
    if (isMainPage) {
      return "text-white text-xl lg:text-2xl font-bold";
    }
    return "text-gray-900 dark:text-white text-xl lg:text-2xl font-bold";
  };

  const getNavLinkStyles = () => {
    if (isMainPage) {
      return "text-white/90 hover:text-white transition-colors font-medium";
    }
    return "text-gray-700 dark:text-white/90 hover:text-gray-900 dark:hover:text-white transition-colors font-medium";
  };

  const getEstimateButtonStyles = () => {
    if (isMainPage) {
      return "border-2 border-white/60 text-white hover:bg-white/20 hover:border-white/80 transition-all backdrop-blur-sm bg-white/10";
    }
    return "border-2 border-gray-400 dark:border-white/60 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-white/20 hover:border-gray-600 dark:hover:border-white/80 transition-all backdrop-blur-sm bg-gray-50 dark:bg-white/10";
  };

  const getMobileButtonStyles = () => {
    if (isMainPage) {
      return "text-white hover:bg-white/10";
    }
    return "text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-white/10";
  };

  return (
    <header className={getHeaderStyles()}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <button onClick={handleLogoClick} className="flex items-center space-x-3 cursor-pointer">
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
              <div className="w-5 h-5 bg-white rounded-full"></div>
            </div>
            <span className={getLogoStyles()}>A.I.WORLD</span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/about" className={getNavLinkStyles()}>
              About
            </Link>
            
            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className={`flex items-center ${getNavLinkStyles()}`}>
                Services
                <ChevronDown className="w-4 h-4 ml-1" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-64 bg-white/95 dark:bg-gray-800/95 border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm">
                {services.map((service, index) => (
                  <DropdownMenuItem key={index} asChild>
                    <Link 
                      to={service.href} 
                      className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 px-4 py-2 block"
                    >
                      {service.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link to="/case-studies" className={getNavLinkStyles()}>
              Case Studies
            </Link>
          </nav>

          {/* CTA Buttons and Theme Toggle */}
          <div className="hidden lg:flex items-center space-x-4">
            <ThemeToggle />
            <Button 
              variant="outline" 
              className={getEstimateButtonStyles()}
            >
              Estimate Your Project
            </Button>
            <Button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold shadow-lg">
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              className={getMobileButtonStyles()}
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg mt-2 border border-white/20">
              <Link to="/about" className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors">
                About
              </Link>
              
              {/* Mobile Services Menu */}
              <div className="px-3 py-2">
                <div className="text-gray-700 dark:text-gray-300 font-medium mb-2">Services</div>
                {services.map((service, index) => (
                  <Link 
                    key={index}
                    to={service.href} 
                    className="block px-3 py-1 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
              
              <Link to="/case-studies" className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors">
                Case Studies
              </Link>
              
              <div className="pt-4 space-y-2">
                <Button 
                  variant="outline" 
                  className="w-full border-blue-500/50 text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950 hover:border-blue-500"
                >
                  Estimate Your Project
                </Button>
                <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold">
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
