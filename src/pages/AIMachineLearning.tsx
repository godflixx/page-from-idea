
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProgrammingLanguages from "@/components/ProgrammingLanguages";
import ToolsTechnologies from "@/components/ToolsTechnologies";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, Users, Settings, Shield, Globe, Zap, Code, Database, Brain } from "lucide-react";

const AIMachineLearning = () => {
  const benefits = [
    "Automated Decision Making: AI systems can analyze data and make decisions faster than humans.",
    "Predictive Analytics: Machine learning models predict future trends and behaviors accurately.",
    "Enhanced Efficiency: Automation of repetitive tasks increases productivity and reduces costs.",
    "Personalized Experiences: AI delivers customized user experiences based on individual preferences.",
    "Data-Driven Insights: Extract valuable insights from large datasets for informed decision-making.",
    "Scalable Solutions: AI systems can handle increasing workloads without proportional cost increases.",
    "24/7 Availability: AI systems operate continuously without breaks or downtime.",
    "Improved Accuracy: Machine learning reduces human errors in data processing and analysis.",
    "Competitive Advantage: AI implementation gives businesses an edge in their respective markets.",
    "Cost Reduction: Automation and optimization lead to significant operational cost savings."
  ];

  const programmingLanguages = [
    { name: "Python", description: "Primary language for AI/ML development with extensive libraries" },
    { name: "R", description: "Statistical computing and data analysis" },
    { name: "JavaScript", description: "AI integration in web applications" },
    { name: "SQL", description: "Database management and data querying" },
    { name: "Scala", description: "Big data processing and distributed computing" }
  ];

  const tools = [
    { name: "TensorFlow", description: "Open-source machine learning framework" },
    { name: "PyTorch", description: "Deep learning research and production" },
    { name: "Scikit-learn", description: "Machine learning library for Python" },
    { name: "Jupyter Notebooks", description: "Interactive development environment" },
    { name: "Apache Spark", description: "Large-scale data processing" },
    { name: "Docker", description: "Containerization for ML model deployment" },
    { name: "Kubernetes", description: "Container orchestration for scalable AI" },
    { name: "AWS SageMaker", description: "Cloud-based machine learning platform" }
  ];

  const whyChoose = [
    {
      icon: Brain,
      title: "AI Expertise",
      description: "Our team specializes in cutting-edge AI and machine learning technologies with proven results."
    },
    {
      icon: Users,
      title: "Experienced Team",
      description: "Skilled data scientists and AI engineers with extensive experience in complex projects."
    },
    {
      icon: Code,
      title: "Latest Technologies",
      description: "We use state-of-the-art AI frameworks and tools for optimal performance and scalability."
    },
    {
      icon: Zap,
      title: "Rapid Implementation",
      description: "Fast deployment of AI solutions with agile methodologies and efficient workflows."
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Enterprise-grade security and reliability in all our AI implementations."
    },
    {
      icon: Globe,
      title: "End-to-End Solutions",
      description: "Complete AI solutions from strategy and development to deployment and maintenance."
    }
  ];

  const faqs = [
    {
      question: "What AI and ML services do you offer?",
      answer: "We offer comprehensive AI/ML services including predictive analytics, natural language processing, computer vision, recommendation systems, chatbots, automated decision-making systems, and custom machine learning model development tailored to your business needs."
    },
    {
      question: "Do I need a large dataset to implement AI solutions?",
      answer: "Not necessarily. While larger datasets generally improve model accuracy, we can work with smaller datasets using techniques like transfer learning, data augmentation, and synthetic data generation. We'll assess your data and recommend the best approach."
    },
    {
      question: "How long does it take to develop an AI solution?",
      answer: "Development time varies based on complexity. Simple AI implementations may take 2-4 months, while complex ML systems can take 6-12 months. This includes data preparation, model development, testing, and deployment phases."
    },
    {
      question: "Can AI solutions integrate with our existing systems?",
      answer: "Yes, we design AI solutions to seamlessly integrate with your existing infrastructure through APIs, cloud platforms, and custom connectors. We ensure minimal disruption to your current operations while maximizing the benefits of AI."
    },
    {
      question: "What kind of ROI can we expect from AI implementation?",
      answer: "ROI varies by use case but typically includes cost reduction through automation, increased efficiency, better decision-making, and new revenue opportunities. We provide detailed ROI projections during the consultation phase based on your specific objectives."
    },
    {
      question: "Do you provide training for our team on AI systems?",
      answer: "Absolutely! We provide comprehensive training programs covering system usage, best practices, and ongoing maintenance. We also offer documentation, workshops, and ongoing support to ensure your team can effectively utilize the AI solutions."
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
                AI & <span className="text-accent">Machine Learning</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Transform your business with intelligent automation and predictive analytics powered by advanced AI technologies.
              </p>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg">
                Get Started
              </Button>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-accent/20 to-accent/5 rounded-lg flex items-center justify-center">
                <Brain className="w-32 h-32 text-accent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programming Languages */}
      <ProgrammingLanguages languages={programmingLanguages} />

      {/* Tools & Technologies */}
      <ToolsTechnologies tools={tools} />

      {/* Key Benefits */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-12 text-center">
            Benefits of <span className="text-accent">AI & Machine Learning</span>
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
            Why Choose Us for <span className="text-accent">AI Solutions</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChoose.map((item, index) => (
              <Card key={index} className="bg-purple-50 dark:bg-purple-950/20 border-purple-200 dark:border-purple-800">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mr-4">
                      <item.icon className="w-6 h-6 text-purple-600" />
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

export default AIMachineLearning;
