
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const ServicesPreview = () => {
  const [selectedService, setSelectedService] = useState(0);

  const services = [
    {
      title: "Mobile App Development",
      content: {
        title: "Mobile App Development",
        description: "We create innovative mobile applications that deliver exceptional user experiences across iOS and Android platforms. Our team specializes in native and cross-platform development using cutting-edge technologies like React Native and Flutter. From concept to deployment, we ensure your mobile app stands out in the competitive marketplace with intuitive design, robust functionality, and seamless performance."
      },
      link: "/services/mobile-applications"
    },
    {
      title: "Application Development",
      content: {
        title: "Application Development", 
        description: "Our comprehensive application development services cover everything from web applications to enterprise software solutions. We leverage modern frameworks and best practices to build scalable, secure, and maintainable applications that drive business growth. Whether you need a simple web app or a complex enterprise system, our experienced developers deliver solutions tailored to your specific requirements."
      },
      link: "/services/application-development"
    },
    {
      title: "DevOps",
      content: {
        title: "DevOps",
        description: "Streamline your development and deployment processes with our DevOps expertise. We implement continuous integration and continuous deployment (CI/CD) pipelines, infrastructure automation, and monitoring solutions that enhance collaboration between development and operations teams. Our DevOps practices reduce deployment time, improve reliability, and enable faster time-to-market for your applications."
      },
      link: "/services/devops"
    },
    {
      title: "Certified Google Cloud Partner",
      content: {
        title: "Certified Google Cloud Partner",
        description: "As a certified Google Cloud Partner, we provide expert cloud solutions and migration services. Our team helps businesses leverage Google Cloud Platform's powerful infrastructure, machine learning capabilities, and data analytics tools. From cloud architecture design to implementation and optimization, we ensure your cloud journey is smooth, secure, and cost-effective."
      },
      link: "/services/cloud-solutions"
    },
    {
      title: "Managed Services",
      content: {
        title: "Managed Services",
        description: "Focus on your core business while we handle your IT infrastructure. Our managed services include 24/7 monitoring, maintenance, security management, and technical support. We proactively identify and resolve issues before they impact your business, ensuring optimal performance, security, and reliability of your IT systems with predictable monthly costs."
      },
      link: "/services/managed-services"
    },
    {
      title: "IT Staffing",
      content: {
        title: "IT Staffing",
        description: "We provide a wide range of IT Staffing services to help companies efficiently source top-tier technology professionals across various specialties and industries. Whether you need a temporary, contract, or permanent position filled, we offer access to a deep pool of highly experienced and vetted IT experts. We specialize in connecting businesses with skilled professionals in software development, network engineering, cybersecurity, data analytics, cloud computing, and project management. Our personalized approach ensures we understand your specific needs and provide candidates who perfectly align with your goals, culture, and long-term vision. Chipsy's IT Staffing solutions make accessing talent seamless and cost-effective."
      },
      link: "/services/it-staffing"
    }
  ];

  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-6">
            Services <span className="text-accent">We offer</span>
          </h2>
          <p className="text-muted-foreground text-lg lg:text-xl max-w-3xl mx-auto">
            Transform Your Business with Our End-to-End IT Solutions
          </p>
        </div>

        {/* Services Content */}
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Left Sidebar - Services List */}
          <div className="lg:col-span-4">
            <Card className="bg-background border-border overflow-hidden">
              <CardContent className="p-0">
                <div className="border-l-4 border-accent pl-6 py-6">
                  {services.map((service, index) => (
                    <div
                      key={index}
                      className={`py-3 px-4 cursor-pointer transition-all duration-300 rounded-lg mb-2 ${
                        selectedService === index
                          ? 'bg-accent/10 text-accent border-l-2 border-accent'
                          : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                      }`}
                      onClick={() => setSelectedService(index)}
                    >
                      <div className="flex items-center">
                        <span className="text-accent mr-2">■</span>
                        <span className="font-medium">{service.title}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Content - Service Details */}
          <div className="lg:col-span-8">
            <Card className="bg-background border-border h-full">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mr-4">
                    <Users className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">
                    {services[selectedService].content.title}
                  </h3>
                </div>
                
                <div className="space-y-6">
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {services[selectedService].content.description}
                  </p>
                  
                  <Link to={services[selectedService].link}>
                    <Button className="bg-accent hover:bg-accent-700 text-white px-6 py-3 font-semibold transition-all duration-300">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link to="/services">
            <Button className="bg-accent hover:bg-accent-700 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
              View All Services
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
