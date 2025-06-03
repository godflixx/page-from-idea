import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, Users, Settings, Shield, Globe, Zap, Code, Database, Cloud } from "lucide-react";

const CloudSolutions = () => {
  const benefits = [
    "Scalability: Easily scale resources up or down based on demand and business needs.",
    "Cost Efficiency: Pay only for resources used, reducing infrastructure costs significantly.",
    "Accessibility: Access applications and data from anywhere with internet connectivity.",
    "Automatic Updates: Receive latest features and security updates automatically.",
    "Disaster Recovery: Built-in backup and recovery solutions for business continuity.",
    "Enhanced Security: Enterprise-grade security with advanced threat protection.",
    "Collaboration: Improved team collaboration with cloud-based tools and platforms.",
    "Performance: High-performance infrastructure with global content delivery networks.",
    "Flexibility: Choose from various deployment models to fit business requirements.",
    "Innovation: Access to cutting-edge technologies like AI, ML, and IoT services."
  ];

  const whyChoose = [
    {
      icon: Cloud,
      title: "Cloud Expertise",
      description: "Certified cloud architects with expertise in major cloud platforms."
    },
    {
      icon: Users,
      title: "Migration Specialists",
      description: "Experienced team specializing in seamless cloud migration strategies."
    },
    {
      icon: Shield,
      title: "Security First",
      description: "Implementation of robust security frameworks and compliance standards."
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Optimize cloud resources for maximum performance and cost efficiency."
    },
    {
      icon: Settings,
      title: "Custom Architecture",
      description: "Tailored cloud architectures designed for your specific business needs."
    },
    {
      icon: Globe,
      title: "Multi-Cloud Support",
      description: "Expertise across AWS, Azure, Google Cloud, and hybrid environments."
    }
  ];

  const faqs = [
    {
      question: "Which cloud platforms do you work with?",
      answer: "We work with all major cloud platforms including Amazon Web Services (AWS), Microsoft Azure, Google Cloud Platform (GCP), and hybrid cloud solutions. We help you choose the best platform based on your specific needs, budget, and technical requirements."
    },
    {
      question: "How do you handle data migration to the cloud?",
      answer: "We follow a comprehensive migration strategy including data assessment, migration planning, testing, and gradual transition to minimize downtime. We ensure data integrity, security, and compliance throughout the entire migration process."
    },
    {
      question: "What are the cost implications of moving to the cloud?",
      answer: "Cloud costs vary based on usage, storage, and services required. Generally, cloud solutions offer cost savings through reduced infrastructure maintenance, scalability, and pay-as-you-use models. We provide detailed cost analysis and optimization strategies."
    },
    {
      question: "How do you ensure cloud security and compliance?",
      answer: "We implement multi-layered security including encryption, access controls, network security, regular audits, and compliance with industry standards like SOC 2, HIPAA, and GDPR. Security is built into every aspect of our cloud solutions."
    },
    {
      question: "Can you help with cloud optimization and cost reduction?",
      answer: "Yes, we provide ongoing cloud optimization services including resource rightsizing, cost monitoring, performance tuning, and automated scaling. We help you maximize efficiency while minimizing costs through continuous optimization."
    },
    {
      question: "What support do you provide after cloud migration?",
      answer: "We offer comprehensive post-migration support including 24/7 monitoring, maintenance, troubleshooting, performance optimization, security updates, and ongoing consultation to ensure your cloud infrastructure operates smoothly."
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
                Cloud <span className="text-accent">Solutions</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Modernize your infrastructure with scalable, secure, and cost-effective cloud solutions.
              </p>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg">
                Migrate to Cloud
              </Button>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-accent/20 to-accent/5 rounded-lg flex items-center justify-center">
                <Cloud className="w-32 h-32 text-accent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-12 text-center">
            Benefits of <span className="text-accent">Cloud Solutions</span>
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
            Why Choose Us for <span className="text-accent">Cloud Solutions</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChoose.map((item, index) => (
              <Card key={index} className="bg-cyan-50 dark:bg-cyan-950/20 border-cyan-200 dark:border-cyan-800">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-cyan-100 dark:bg-cyan-900 rounded-lg flex items-center justify-center mr-4">
                      <item.icon className="w-6 h-6 text-cyan-600" />
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

export default CloudSolutions;
