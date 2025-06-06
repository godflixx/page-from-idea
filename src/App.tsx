
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import Index from "./pages/Index";
import Services from "./pages/Services";
import About from "./pages/About";
import CaseStudies from "./pages/CaseStudies";
import Blog from "./pages/Blog";
import Admin from "./pages/Admin";
import ApplicationDevelopment from "./pages/ApplicationDevelopment";
import AIMachineLearning from "./pages/AIMachineLearning";
import WebDevelopment from "./pages/WebDevelopment";
import MobileApplications from "./pages/MobileApplications";
import DataAnalytics from "./pages/DataAnalytics";
import CloudSolutions from "./pages/CloudSolutions";
import Cybersecurity from "./pages/Cybersecurity";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/services/application-development" element={<ApplicationDevelopment />} />
            <Route path="/services/ai-machine-learning" element={<AIMachineLearning />} />
            <Route path="/services/web-development" element={<WebDevelopment />} />
            <Route path="/services/mobile-applications" element={<MobileApplications />} />
            <Route path="/services/data-analytics" element={<DataAnalytics />} />
            <Route path="/services/cloud-solutions" element={<CloudSolutions />} />
            <Route path="/services/cybersecurity" element={<Cybersecurity />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
