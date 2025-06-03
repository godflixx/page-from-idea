
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Users, Settings, Shield, Globe, Zap, Code, Smartphone } from "lucide-react";

const MobileApplications = () => {
  const benefits = [
    "Cross-Platform Development: Single codebase for both iOS and Android platforms.",
    "Native Performance: Optimized performance that feels native on each platform.",
    "Offline Functionality: Apps that work seamlessly even without internet connection.",
    "Push Notifications: Real-time engagement through targeted push notifications.",
    "App Store Optimization: Designed for better visibility and downloads on app stores.",
    "User Analytics: Built-in analytics to track user behavior and app performance.",
    "Secure Data Handling: Enterprise-level security for user data protection.",
    "Regular Updates: Easy deployment of updates and new features.",
    "Responsive UI/UX: Intuitive interfaces designed for mobile-first experience.",
    "Third-Party Integrations: Seamless integration with popular services and APIs."
  ];

  const whyChoose = [
    {
      icon: Smartphone,
      title: "Mobile Expertise",
      description: "Specialized team with extensive experience in mobile app development across platforms."
    },
    {
      icon: Users,
      title: "User-Centric Design",
      description: "Focus on creating intuitive and engaging user experiences for mobile users."
    },
    {
      icon: Code,
      title: "Latest Frameworks",
      description: "Using React Native, Flutter, and native development for optimal results."
    },
    {
      icon: Zap,
      title: "Fast Development",
      description: "Rapid prototyping and development with agile methodologies."
    },
    {
      icon: Shield,
      title: "App Security",
      description: "Implementation of robust security measures for mobile applications."
    },
    {
      icon: Globe,
      title: "Cross-Platform",
      description: "Efficient development for multiple platforms with shared codebase."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-background via-accent/5 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Mobile <span className="text-accent">Applications</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Build powerful, user-friendly mobile apps that engage your audience and drive business success across all platforms.
              </p>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg">
                Build Your App
              </Button>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-accent/20 to-accent/5 rounded-lg flex items-center justify-center">
                <Smartphone className="w-32 h-32 text-accent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-12 text-center">
            Benefits of <span className="text-accent">Mobile Applications</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-muted-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-12 text-center">
            Why Choose Us for <span className="text-accent">Mobile Development</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChoose.map((item, index) => (
              <Card key={index} className="bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mr-4">
                      <item.icon className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MobileApplications;
