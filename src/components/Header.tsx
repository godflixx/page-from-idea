
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLogoClick = () => {
    window.location.reload();
  };

  const services = [
    { name: "AI & Machine Learning", href: "/services/ai-machine-learning" },
    { name: "Web Development", href: "/services/web-development" },
    { name: "Mobile Applications", href: "/services/mobile-applications" },
    { name: "Data Analytics", href: "/services/data-analytics" },
    { name: "Cloud Solutions", href: "/services/cloud-solutions" },
    { name: "Cybersecurity", href: "/services/cybersecurity" },
  ];

  return (
    <header className="w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <button onClick={handleLogoClick} className="flex items-center space-x-3 cursor-pointer">
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
              <div className="w-5 h-5 bg-white rounded-full"></div>
            </div>
            <span className="text-gray-900 dark:text-gray-100 text-xl lg:text-2xl font-bold">A.I.WORLD</span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/about" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors font-medium">
              About
            </Link>
            
            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors font-medium">
                Services
                <ChevronDown className="w-4 h-4 ml-1" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-64 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
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

            <Link to="/case-studies" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors font-medium">
              Case Studies
            </Link>
          </nav>

          {/* CTA Buttons and Theme Toggle */}
          <div className="hidden lg:flex items-center space-x-4">
            <ThemeToggle />
            <Button 
              variant="outline" 
              className="border-blue-500/50 text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950 hover:border-blue-500 transition-all"
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
              className="text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg mt-2 border border-gray-200 dark:border-gray-700">
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
