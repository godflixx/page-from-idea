
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Users, Settings, Shield, Globe, Zap, Code, Database, Lock } from "lucide-react";

const Cybersecurity = () => {
  const benefits = [
    "Threat Protection: Advanced security measures to protect against cyber threats and attacks.",
    "Data Encryption: End-to-end encryption to secure sensitive data and communications.",
    "Compliance: Meet industry standards and regulatory requirements for data protection.",
    "Incident Response: Rapid response to security incidents with expert remediation.",
    "Vulnerability Assessment: Regular security audits to identify and fix vulnerabilities.",
    "Employee Training: Security awareness training to prevent human error incidents.",
    "Network Security: Comprehensive network protection with firewalls and monitoring.",
    "Identity Management: Secure identity and access management solutions.",
    "Backup & Recovery: Secure backup solutions for business continuity planning.",
    "24/7 Monitoring: Continuous security monitoring and threat detection services."
  ];

  const whyChoose = [
    {
      icon: Shield,
      title: "Security Experts",
      description: "Certified cybersecurity professionals with extensive industry experience."
    },
    {
      icon: Users,
      title: "Comprehensive Protection",
      description: "End-to-end security solutions covering all aspects of cybersecurity."
    },
    {
      icon: Lock,
      title: "Advanced Technologies",
      description: "Latest security technologies and tools for maximum protection."
    },
    {
      icon: Zap,
      title: "Rapid Response",
      description: "Quick incident response and threat mitigation capabilities."
    },
    {
      icon: Settings,
      title: "Custom Security",
      description: "Tailored security solutions designed for your specific risk profile."
    },
    {
      icon: Globe,
      title: "Industry Compliance",
      description: "Expertise in various compliance frameworks and industry standards."
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
                <span className="text-accent">Cybersecurity</span> Solutions
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Protect your business with comprehensive cybersecurity solutions and expert threat management.
              </p>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg">
                Secure Your Business
              </Button>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-accent/20 to-accent/5 rounded-lg flex items-center justify-center">
                <Shield className="w-32 h-32 text-accent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-12 text-center">
            Benefits of <span className="text-accent">Cybersecurity</span>
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
            Why Choose Us for <span className="text-accent">Cybersecurity</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChoose.map((item, index) => (
              <Card key={index} className="bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-800">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center mr-4">
                      <item.icon className="w-6 h-6 text-red-600" />
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

export default Cybersecurity;
