
import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, Users, Globe, Calendar } from "lucide-react";

const AboutUsSection = () => {
  const stats = [
    {
      icon: Lightbulb,
      number: "750+",
      label: "Innovative Designs"
    },
    {
      icon: Users,
      number: "500+",
      label: "Satisfied Customers"
    },
    {
      icon: Globe,
      number: "30+",
      label: "Countries Served"
    },
    {
      icon: Calendar,
      number: "14+",
      label: "Years in Business",
      accent: true
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                About <span className="text-accent">Us</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                A.I.WORLD provides comprehensive IT solutions
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex flex-col items-center space-y-3">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      stat.accent ? 'bg-accent/10' : 'bg-muted/50'
                    }`}>
                      <stat.icon className={`w-6 h-6 ${
                        stat.accent ? 'text-accent' : 'text-muted-foreground'
                      }`} />
                    </div>
                    <div className={`text-3xl lg:text-4xl font-bold ${
                      stat.accent ? 'text-accent' : 'text-foreground'
                    }`}>
                      {stat.number}
                    </div>
                    <div className="text-sm text-muted-foreground font-medium">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Description */}
            <div className="space-y-4 text-muted-foreground">
              <p>
                Mobile App Development, Application Development, DevOps and other services. 
                We also offer innovative products such as School Management System, Hospital 
                Management System, College Management System, and University Management System.
              </p>
              <p>
                Our focus is on delivering tailored solutions that enhance business processes, 
                streamline operations, and help businesses remain competitive in the digital space.
              </p>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative">
            <div className="relative">
              {/* Main Image Card */}
              <Card className="bg-accent/10 border-accent/20 overflow-hidden">
                <CardContent className="p-8">
                  <img 
                    src="/lovable-uploads/0191a307-412a-49e4-b593-874d71ac3328.png" 
                    alt="Business team collaboration" 
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </CardContent>
              </Card>

              {/* Floating Success Projects Card */}
              <Card className="absolute -bottom-6 -right-6 bg-accent/10 border-accent/20 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-accent mb-2">
                    1.7K+
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    Successful Projects
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
