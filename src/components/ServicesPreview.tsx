
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Code, Database, Globe, Smartphone, Shield } from "lucide-react";

const ServicesPreview = () => {
  const services = [
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Custom AI solutions and intelligent automation to transform your business processes.",
      color: "bg-accent"
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Modern, responsive web applications built with cutting-edge technologies.",
      color: "bg-accent-700"
    },
    {
      icon: Smartphone,
      title: "Mobile Applications",
      description: "Native and cross-platform mobile apps that deliver exceptional experiences.",
      color: "bg-green-500"
    },
    {
      icon: Database,
      title: "Data Analytics",
      description: "Transform raw data into actionable insights with advanced analytics.",
      color: "bg-yellow-500"
    },
    {
      icon: Globe,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services for modern businesses.",
      color: "bg-purple-500"
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets.",
      color: "bg-red-500"
    }
  ];

  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent text-sm font-medium mb-6">
            <span>OUR SERVICES</span>
          </div>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-6">
            Comprehensive Technology
            <span className="text-accent block">Solutions</span>
          </h2>
          <p className="text-muted-foreground text-lg lg:text-xl max-w-3xl mx-auto">
            We offer end-to-end technology services to accelerate your digital transformation 
            and drive sustainable business growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-background border-border hover:shadow-xl transition-all duration-300 group cursor-pointer">
              <CardHeader className="pb-4">
                <div className={`w-14 h-14 ${service.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground text-base mb-6 leading-relaxed">
                  {service.description}
                </CardDescription>
                <Button variant="ghost" className="text-accent hover:text-accent-700 hover:bg-accent/10 p-0 h-auto font-semibold group/btn">
                  Learn More 
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button className="bg-accent hover:bg-accent-700 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
            View All Services
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
