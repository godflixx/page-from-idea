
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Users, Settings, Shield, Globe, Zap, Code, Database } from "lucide-react";

const WebDevelopment = () => {
  const benefits = [
    "Responsive Design: Websites that work perfectly on all devices and screen sizes.",
    "Fast Loading: Optimized performance for better user experience and SEO rankings.",
    "Modern Technologies: Built with latest frameworks and best practices for scalability.",
    "SEO Optimized: Search engine friendly structure to improve online visibility.",
    "User-Friendly Interface: Intuitive navigation and design for enhanced user experience.",
    "Cross-Browser Compatibility: Consistent functionality across all major web browsers.",
    "Secure Development: Implementation of security best practices to protect user data.",
    "Scalable Architecture: Built to handle growth and increasing traffic demands.",
    "Content Management: Easy-to-use CMS for effortless content updates and management.",
    "Analytics Integration: Built-in tracking and analytics for data-driven decisions."
  ];

  const whyChoose = [
    {
      icon: Code,
      title: "Modern Technologies",
      description: "We use cutting-edge frameworks like React, Next.js, and TypeScript for optimal performance."
    },
    {
      icon: Users,
      title: "Expert Developers",
      description: "Skilled full-stack developers with extensive experience in web technologies."
    },
    {
      icon: Zap,
      title: "Fast Delivery",
      description: "Agile development process ensures quick turnaround without compromising quality."
    },
    {
      icon: Shield,
      title: "Security First",
      description: "Implementation of robust security measures to protect your web applications."
    },
    {
      icon: Globe,
      title: "Global Standards",
      description: "Development following international web standards and accessibility guidelines."
    },
    {
      icon: Settings,
      title: "Custom Solutions",
      description: "Tailored web solutions designed specifically for your business requirements."
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
                Web <span className="text-accent">Development</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Create stunning, high-performance websites and web applications that drive engagement and business growth.
              </p>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg">
                Start Your Project
              </Button>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-accent/20 to-accent/5 rounded-lg flex items-center justify-center">
                <Globe className="w-32 h-32 text-accent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-12 text-center">
            Benefits of Professional <span className="text-accent">Web Development</span>
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
            Why Choose Us for <span className="text-accent">Web Development</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChoose.map((item, index) => (
              <Card key={index} className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-4">
                      <item.icon className="w-6 h-6 text-blue-600" />
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

export default WebDevelopment;
