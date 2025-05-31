
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";

const CaseStudiesSection = () => {
  const caseStudies = [
    {
      title: "AI-Powered Healthcare Platform",
      category: "Healthcare & AI",
      description: "Developed a machine learning platform that analyzes medical data to predict patient outcomes and optimize treatment plans.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["Python", "TensorFlow", "React", "AWS"],
      results: "40% improvement in diagnosis accuracy, 30% reduction in treatment time"
    },
    {
      title: "E-commerce Mobile App",
      category: "Mobile Development",
      description: "Built a cross-platform mobile application with AI-powered product recommendations and seamless payment integration.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["React Native", "Node.js", "MongoDB", "Stripe"],
      results: "250% increase in mobile sales, 4.8/5 app store rating"
    },
    {
      title: "Smart City IoT Platform",
      category: "IoT & Smart Systems",
      description: "Created an intelligent city management system using IoT sensors and real-time data analytics for traffic optimization.",
      image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["Python", "Azure IoT", "React", "PostgreSQL"],
      results: "35% reduction in traffic congestion, 50% improvement in response times"
    }
  ];

  return (
    <section className="py-16 bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Case Studies & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80">Insights</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our successful projects and the cutting-edge technologies we use to deliver exceptional results.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-lg transition-all duration-300 group overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={study.image} 
                  alt={study.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary/80 text-primary-foreground text-xs px-3 py-1 rounded-full">
                    {study.category}
                  </span>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-foreground text-xl group-hover:text-primary transition-colors">
                  {study.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {study.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="mb-4">
                  <h4 className="text-foreground font-semibold mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {study.technologies.map((tech, idx) => (
                      <span key={idx} className="bg-primary/20 text-primary text-xs px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-foreground font-semibold mb-2">Results:</h4>
                  <p className="text-muted-foreground text-sm">{study.results}</p>
                </div>
                
                <Button variant="outline" className="w-full border-primary/50 text-primary hover:bg-primary/10">
                  View Case Study <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
            View All Case Studies <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
