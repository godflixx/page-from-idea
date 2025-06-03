import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, Users, Settings, Shield, Globe, Zap, Code, Database, BarChart } from "lucide-react";

const DataAnalytics = () => {
  const benefits = [
    "Data-Driven Decisions: Make informed business decisions based on accurate data insights.",
    "Performance Tracking: Monitor key metrics and KPIs in real-time dashboards.",
    "Trend Analysis: Identify patterns and trends to predict future business outcomes.",
    "Customer Insights: Understand customer behavior and preferences for better targeting.",
    "Cost Optimization: Identify areas for cost reduction and efficiency improvements.",
    "Revenue Growth: Discover new revenue opportunities through data analysis.",
    "Risk Management: Identify and mitigate potential risks before they impact business.",
    "Competitive Analysis: Gain insights into market position and competitor performance.",
    "Automated Reporting: Generate comprehensive reports automatically and regularly.",
    "Scalable Solutions: Analytics systems that grow with your business needs."
  ];

  const whyChoose = [
    {
      icon: BarChart,
      title: "Advanced Analytics",
      description: "Sophisticated analytical techniques and statistical models for deep insights."
    },
    {
      icon: Users,
      title: "Expert Data Scientists",
      description: "Experienced team of data scientists and analysts with proven track records."
    },
    {
      icon: Database,
      title: "Big Data Expertise",
      description: "Handle large datasets with modern big data technologies and frameworks."
    },
    {
      icon: Zap,
      title: "Real-Time Processing",
      description: "Fast data processing and real-time analytics for immediate insights."
    },
    {
      icon: Shield,
      title: "Data Security",
      description: "Robust security measures to protect sensitive business data."
    },
    {
      icon: Globe,
      title: "Custom Solutions",
      description: "Tailored analytics solutions designed for your specific business needs."
    }
  ];

  const faqs = [
    {
      question: "What types of data can you analyze?",
      answer: "We can analyze various types of data including customer data, sales data, financial records, website analytics, social media metrics, operational data, and IoT sensor data. We work with structured and unstructured data from multiple sources."
    },
    {
      question: "How do you ensure data privacy and security?",
      answer: "We implement strict data security measures including encryption, access controls, compliance with GDPR and other regulations, secure data transfer protocols, and anonymization techniques. Your data privacy and security are our top priorities."
    },
    {
      question: "What tools and technologies do you use for analytics?",
      answer: "We use industry-leading tools including Python, R, SQL, Tableau, Power BI, Apache Spark, TensorFlow, and cloud platforms like AWS, Azure, and Google Cloud. We select the best tools based on your specific requirements and data volume."
    },
    {
      question: "How long does a typical analytics project take?",
      answer: "Project duration varies based on scope and complexity. Simple analytics dashboards take 2-4 weeks, while comprehensive analytics systems can take 2-6 months. We provide detailed timelines during the initial consultation."
    },
    {
      question: "Can you integrate analytics with our existing systems?",
      answer: "Yes, we specialize in seamless integration with existing systems, databases, CRM platforms, ERP systems, and third-party applications. We ensure your analytics solution works harmoniously with your current technology stack."
    },
    {
      question: "Do you provide training on analytics tools and dashboards?",
      answer: "Absolutely! We provide comprehensive training for your team including dashboard usage, report interpretation, best practices, and ongoing support. We ensure your team can effectively utilize the analytics solutions we deliver."
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
                Data <span className="text-accent">Analytics</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Transform raw data into actionable insights that drive strategic decisions and business growth.
              </p>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg">
                Analyze Your Data
              </Button>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-accent/20 to-accent/5 rounded-lg flex items-center justify-center">
                <BarChart className="w-32 h-32 text-accent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-12 text-center">
            Benefits of <span className="text-accent">Data Analytics</span>
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
            Why Choose Us for <span className="text-accent">Data Analytics</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChoose.map((item, index) => (
              <Card key={index} className="bg-orange-50 dark:bg-orange-950/20 border-orange-200 dark:border-orange-800">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mr-4">
                      <item.icon className="w-6 h-6 text-orange-600" />
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

export default DataAnalytics;
