
import { Button } from "@/components/ui/button";
import { Search, Menu } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="flex items-center justify-between p-6 lg:px-12">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/30">
          <div className="w-4 h-4 bg-white rounded-full"></div>
        </div>
        <span className="text-white text-xl font-bold">A.I.WORLD</span>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center space-x-8">
        <a href="#" className="text-white/80 hover:text-blue-300 transition-colors">About</a>
        <a href="#" className="text-white/80 hover:text-blue-300 transition-colors">Purpose</a>
        <a href="#" className="text-white/80 hover:text-blue-300 transition-colors">Faq</a>
        <a href="#" className="text-white/80 hover:text-blue-300 transition-colors">Press</a>
      </div>

      {/* Search and Menu */}
      <div className="flex items-center space-x-4">
        <div className="hidden md:flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
          <Search className="w-5 h-5 text-white/60 mr-2" />
          <input 
            type="text" 
            placeholder="Search..." 
            className="bg-transparent text-white placeholder-white/60 outline-none"
          />
        </div>
        <Button variant="ghost" size="icon" className="text-white lg:hidden hover:bg-white/10">
          <Menu className="w-6 h-6" />
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;
