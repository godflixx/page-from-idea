
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
    <section className="py-16 bg-gradient-to-r from-slate-900/50 to-blue-900/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Case Studies & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Insights</span>
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Explore our successful projects and the cutting-edge technologies we use to deliver exceptional results.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <Card key={index} className="bg-white/10 dark:bg-white/5 backdrop-blur-sm border-blue-800/30 hover:bg-white/15 dark:hover:bg-white/10 transition-all duration-300 group overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={study.image} 
                  alt={study.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-500/80 text-white text-xs px-3 py-1 rounded-full">
                    {study.category}
                  </span>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-white text-xl group-hover:text-cyan-300 transition-colors">
                  {study.title}
                </CardTitle>
                <CardDescription className="text-white/70">
                  {study.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {study.technologies.map((tech, idx) => (
                      <span key={idx} className="bg-cyan-500/20 text-cyan-300 text-xs px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-2">Results:</h4>
                  <p className="text-white/70 text-sm">{study.results}</p>
                </div>
                
                <Button variant="outline" className="w-full border-cyan-400/50 text-cyan-300 hover:bg-cyan-400/10">
                  View Case Study <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold">
            View All Case Studies <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
