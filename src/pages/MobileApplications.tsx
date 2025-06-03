
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
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

  const programmingLanguages = [
    { name: "Swift", description: "Native iOS development for optimal performance" },
    { name: "Kotlin", description: "Modern Android development with enhanced safety" },
    { name: "Dart", description: "Flutter framework for cross-platform development" },
    { name: "JavaScript", description: "React Native for hybrid mobile applications" },
    { name: "Java", description: "Traditional Android development and enterprise apps" },
    { name: "Objective-C", description: "Legacy iOS development and framework integration" }
  ];

  const tools = [
    { name: "React Native", description: "Cross-platform mobile app development framework" },
    { name: "Flutter", description: "Google's UI toolkit for native mobile apps" },
    { name: "Xcode", description: "Apple's integrated development environment for iOS" },
    { name: "Android Studio", description: "Official IDE for Android app development" },
    { name: "Firebase", description: "Backend services and real-time database" },
    { name: "TestFlight", description: "Beta testing platform for iOS applications" },
    { name: "Fastlane", description: "Automated deployment and testing tools" },
    { name: "Expo", description: "Platform for universal React applications" }
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

  const faqs = [
    {
      question: "Do you develop for both iOS and Android?",
      answer: "Yes, we develop for both iOS and Android platforms. We offer native development for platform-specific features and performance, as well as cross-platform solutions using React Native and Flutter for cost-effective multi-platform deployment."
    },
    {
      question: "What's the difference between native and cross-platform development?",
      answer: "Native apps are built specifically for one platform (iOS or Android) offering optimal performance and platform-specific features. Cross-platform apps use shared code for multiple platforms, reducing development time and cost while maintaining good performance."
    },
    {
      question: "How long does mobile app development take?",
      answer: "Development time varies by complexity. Simple apps take 2-4 months, while complex applications with advanced features can take 6-12 months. We provide detailed timelines after analyzing your requirements and feature specifications."
    },
    {
      question: "Do you help with app store submission and approval?",
      answer: "Absolutely! We handle the entire app store submission process for both Apple App Store and Google Play Store, including preparing app descriptions, screenshots, compliance with store guidelines, and addressing any approval issues."
    },
    {
      question: "Can you add new features to our existing mobile app?",
      answer: "Yes, we can enhance existing mobile applications by adding new features, improving performance, updating UI/UX, integrating third-party services, and ensuring compatibility with latest OS versions."
    },
    {
      question: "What about app security and data protection?",
      answer: "We implement robust security measures including data encryption, secure authentication, API security, secure data storage, and compliance with privacy regulations like GDPR. Security is integrated throughout the development process."
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

      {/* Programming Languages */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-12 text-center">
            Core <span className="text-accent">Programming Languages</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programmingLanguages.map((lang, index) => (
              <Card key={index} className="bg-card">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-2">{lang.name}</h3>
                  <p className="text-muted-foreground text-sm">{lang.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Technologies */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-12 text-center">
            Tools & <span className="text-accent">Technologies</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tools.map((tool, index) => (
              <Card key={index} className="bg-card">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-2">{tool.name}</h3>
                  <p className="text-muted-foreground text-sm">{tool.description}</p>
                </CardContent>
              </Card>
            ))}
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

      {/* FAQ Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-12 text-center">
            Frequently Asked <span className="text-accent">Questions</span>
          </h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-card border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-accent">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MobileApplications;
