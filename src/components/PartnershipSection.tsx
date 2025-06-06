
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Users, Award, TrendingUp, Shield, Lightbulb } from "lucide-react";

const PartnershipSection = () => {
  const benefits = [
    {
      icon: <Users className="w-8 h-8 text-accent" />,
      title: "Expert Team",
      description: "Work with seasoned professionals who bring years of industry experience to your projects."
    },
    {
      icon: <Award className="w-8 h-8 text-accent" />,
      title: "Proven Track Record",
      description: "Join our portfolio of successful partnerships with companies across various industries."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-accent" />,
      title: "Scalable Solutions",
      description: "Our solutions grow with your business, ensuring long-term success and adaptability."
    },
    {
      icon: <Shield className="w-8 h-8 text-accent" />,
      title: "Reliable Support",
      description: "24/7 support and maintenance to keep your systems running smoothly."
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-accent" />,
      title: "Innovation Focus",
      description: "Stay ahead with cutting-edge technologies and innovative solutions."
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-accent" />,
      title: "Quality Assurance",
      description: "Rigorous testing and quality control processes ensure exceptional results."
    }
  ];

  const stats = [
    { number: "500+", label: "Successful Projects" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "50+", label: "Industry Partners" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-background via-accent/5 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Partnership Excellence
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Why <span className="text-accent">Partner</span> With Us?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're not just a service provider – we're your strategic technology partner committed to your success.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-accent mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="group hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <CardTitle className="text-xl mb-2">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {benefit.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Start Your Partnership Journey?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who have transformed their businesses with our expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors">
                Start Partnership
              </button>
              <button className="border border-border px-8 py-3 rounded-lg font-semibold hover:bg-accent/10 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipSection;
