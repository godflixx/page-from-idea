import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, Users, Settings, Shield, Globe, Zap, Code, Database } from "lucide-react";

const ApplicationDevelopment = () => {
  const benefits = [
    "Custom Solutions: Tailored applications to meet specific business needs and goals.",
    "Improved Efficiency: Streamlined processes and automation enhance productivity.",
    "Scalability: Easily adaptable solutions to support business growth and changing needs.",
    "Enhanced User Experience: Intuitive designs and functionalities improve customer satisfaction.",
    "Cost-Effective: Reduces manual tasks and operational costs through automation.",
    "Increased Security: Robust security measures protect sensitive data and application integrity.",
    "Competitive Advantage: Innovative features help differentiate your business in the market.",
    "Better Data Management: Centralized data access for more informed decision-making.",
    "Integration Capabilities: Seamless integration with existing systems and third-party tools.",
    "Rapid Deployment: Accelerated development cycles for quicker time-to-market."
  ];

  const whyChoose = [
    {
      icon: Settings,
      title: "Tailored Solutions",
      description: "We deliver custom applications designed to meet your specific business needs and objectives"
    },
    {
      icon: Users,
      title: "Experienced Team",
      description: "Our skilled developers have a proven track record in building high-performance applications."
    },
    {
      icon: Code,
      title: "Cutting-Edge Technology",
      description: "We use the latest tools and technologies to ensure modern, scalable, and secure solutions."
    },
    {
      icon: Zap,
      title: "Agile Methodology",
      description: "Our flexible approach allows for rapid iterations and adaptability throughout the development process"
    },
    {
      icon: Shield,
      title: "Focus on Quality",
      description: "Rigorous testing and quality assurance ensure your application performs optimally and securely."
    },
    {
      icon: Globe,
      title: "Client-Centric Approach",
      description: "We prioritize understanding your goals and provide solutions that align with your vision and drive success."
    }
  ];

  const tools = [
    { name: "Git", description: "We use Git for version control, enabling efficient management of code changes and collaboration. Its distributed nature and branching capabilities streamline development workflows, ensuring seamless integration and tracking of project progress." },
    { name: "Docker", description: "We use Docker to streamline application deployment and management. Its containerization technology ensures consistent environments across development and production, improving scalability, security, and efficiency in deploying and managing applications." },
    { name: "Jenkins", description: "We use Jenkins for continuous integration and delivery, automating the build and deployment processes. Its extensive plugin ecosystem and flexible pipeline configuration enhance development efficiency and ensure reliable, repeatable builds." }
  ];

  const technologies = [
    { name: "Python", description: "We use Python for its simplicity and versatility in developing web applications, data analysis, and automation. Its robust libraries and frameworks enable efficient coding, making it ideal for innovative, scalable solutions." },
    { name: "React Native", description: "We use React Native to develop cross-platform mobile apps with a single codebase. Its component-based architecture ensures fast development and a consistent user experience across iOS and Android devices." },
    { name: "Flutter", description: "We use Flutter to create visually stunning, high-performance mobile apps for both iOS and Android. Its single codebase and rich set of widgets ensure consistent, smooth user experiences across platforms." },
    { name: "Angular", description: "We use Angular to build dynamic, scalable web applications. Its powerful framework offers two-way data binding, modular development, and a robust CLI, enhancing efficiency and ensuring high-performance user interfaces." },
    { name: "Django", description: "We use Django to develop secure, high-performance web applications quickly. Its robust framework offers built-in features like authentication and ORM, facilitating rapid development and ensuring scalable, maintainable solutions." }
  ];

  const developmentProcess = [
    {
      title: "Consultation and Planning",
      description: "In the Consultation and Planning phase, we prioritize understanding your business goals and challenges to develop a clear, detailed project roadmap. By collaborating closely with you, we ensure that every objective is aligned with your vision and specific requirements. This structured approach helps us design custom solutions tailored to your needs, while also providing a clear timeline for each phase of the project. Our goal is to set the foundation for a smooth, timely, and successful development process, ensuring that the final product effectively supports your business objectives and long-term success."
    },
    {
      title: "Design and Prototyping",
      description: "During the Design and Prototyping phase, we transform your vision into tangible designs and interactive prototypes. Our team creates user-centered designs that prioritize functionality and aesthetics, ensuring an optimal user experience. We develop wireframes, mockups, and clickable prototypes that allow you to visualize the final product and provide feedback early in the process."
    },
    {
      title: "Development and Testing",
      description: "In the Development and Testing phase, our experienced developers bring your application to life using industry best practices and cutting-edge technologies. We follow agile development methodologies to ensure flexibility and continuous improvement. Rigorous testing procedures, including unit testing, integration testing, and user acceptance testing, guarantee that your application meets the highest quality standards."
    },
    {
      title: "Deployment and Maintenance",
      description: "The Deployment and Maintenance phase ensures your application goes live smoothly and continues to perform optimally. We handle the complete deployment process, including server setup, configuration, and monitoring. Our ongoing maintenance services include regular updates, security patches, performance optimization, and technical support to keep your application running efficiently."
    }
  ];

  const faqs = [
    {
      question: "What types of applications do you develop?",
      answer: "We develop various types of applications including web applications, mobile apps (iOS and Android), desktop applications, and enterprise software solutions. Our expertise covers both native and cross-platform development using modern frameworks and technologies."
    },
    {
      question: "How long does it take to develop a custom application?",
      answer: "Development time varies based on complexity, features, and requirements. Simple applications may take 2-3 months, while complex enterprise solutions can take 6-12 months or more. We provide detailed timelines during the consultation phase after understanding your specific needs."
    },
    {
      question: "Do you provide ongoing support and maintenance?",
      answer: "Yes, we offer comprehensive post-launch support including bug fixes, updates, performance monitoring, security patches, and feature enhancements. We provide different maintenance packages to suit your needs and budget."
    },
    {
      question: "Can you integrate with existing systems?",
      answer: "Absolutely! We specialize in seamless integration with existing systems, databases, APIs, and third-party services. We ensure your new application works harmoniously with your current technology stack and business processes."
    },
    {
      question: "What technologies do you use for development?",
      answer: "We use cutting-edge technologies including React, Angular, Python, Django, React Native, Flutter, Node.js, and cloud platforms like AWS and Azure. We select the best technology stack based on your specific requirements and goals."
    },
    {
      question: "How do you ensure application security?",
      answer: "Security is built into every stage of development. We implement encryption, secure authentication, regular security audits, OWASP guidelines, and follow industry best practices. We also conduct penetration testing and vulnerability assessments."
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
                Application <span className="text-accent">Development</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Maximize your business's potential with our bespoke application development services.
              </p>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg">
                Speak to Us
              </Button>
            </div>
            <div className="relative">
              <img 
                src="/lovable-uploads/1bb6b6ca-cca8-4de5-befd-3391fb9851fe.png" 
                alt="Application Development" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quality Focus Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="bg-purple-50 dark:bg-purple-950/20 border-purple-200 dark:border-purple-800">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mr-4">
                    <CheckCircle className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Focus on Quality</h3>
                </div>
                <p className="text-muted-foreground">
                  Rigorous testing and quality assurance ensure your application performs optimally and securely.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-4">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Client-Centric Approach</h3>
                </div>
                <p className="text-muted-foreground">
                  We prioritize understanding your goals and provide solutions that align with your vision and drive success.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-12 text-center">
            Key Benefits of <span className="text-accent">Application Development</span>
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
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-center">
            Why Choose Chipsy Services for
          </h2>
          <h3 className="text-2xl lg:text-3xl font-bold text-accent mb-12 text-center">
            Application Development ?
          </h3>
          
          <div className="mb-12">
            <p className="text-muted-foreground text-lg leading-relaxed text-center max-w-6xl mx-auto">
              Choose Chipsy Services for your application development needs because we offer customized, high-performance solutions built with cutting-edge technology, backed by an experienced team, and designed to align with your unique business goals; our agile development methodology ensures flexibility and rapid iteration, while our commitment to quality guarantees rigorous testing for functionality, security, and performance at every stage; we provide comprehensive support from initial consultation through deployment and ongoing maintenance, ensuring a seamless experience and long-term success; with a client-centric approach, we prioritize understanding your vision and delivering applications that drive efficiency, growth, and lasting value for your business.
            </p>
          </div>

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

      {/* Tools and Software */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-12 text-center">
            Tools <span className="text-accent">and Software</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {tools.map((tool, index) => (
              <Card key={index} className="bg-card border-border">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                    <Database className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">{tool.name}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{tool.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-center">
            Technologies <span className="text-accent">We Use</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-12 text-center">Core Programming Languages</p>
          
          <div className="space-y-6">
            {technologies.map((tech, index) => (
              <Card key={index} className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <Code className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">{tech.name}</h3>
                      <p className="text-muted-foreground">{tech.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-center">
            Development <span className="text-accent">Process</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-12 text-center">
            Step-by-Step Development Process for Tailored Solutions
          </p>
          
          <div className="grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-4">
              <div className="space-y-4">
                {developmentProcess.map((step, index) => (
                  <div key={index} className="flex items-center p-4 bg-accent/10 rounded-lg">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    <span className="font-medium text-foreground">{step.title}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:col-span-8">
              <Card className="bg-card border-border h-full">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mr-4">
                      <Settings className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">
                      {developmentProcess[0].title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {developmentProcess[0].description}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Overview <span className="text-accent">Application Development</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Custom application development for scalable, secure, and high-performance solutions.
              </p>
              
              <div className="grid grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">750+</div>
                  <div className="text-sm text-muted-foreground">Innovative Designs</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">Satisfied Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">30+</div>
                  <div className="text-sm text-muted-foreground">Countries Served</div>
                </div>
              </div>
              
              <p className="text-muted-foreground">
                Our <span className="text-accent">application development</span> services focus on creating tailored solutions to meet your business needs. We specialize in building scalable, secure, and high-performance mobile, web, and enterprise applications. From concept to deployment, we ensure seamless integration, user-friendly design, and optimal functionality for success.
              </p>
            </div>
            
            <div className="relative">
              <img 
                src="/lovable-uploads/6f92270d-b52a-4fbc-bd6e-cd472e435d84.png" 
                alt="Overview Application Development" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
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

export default ApplicationDevelopment;
