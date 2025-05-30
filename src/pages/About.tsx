
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Award, Globe } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Users, value: "50+", label: "Team Members" },
    { icon: Target, value: "200+", label: "Projects Completed" },
    { icon: Award, value: "5+", label: "Years Experience" },
    { icon: Globe, value: "30+", label: "Countries Served" }
  ];

  const values = [
    {
      title: "Innovation",
      description: "We embrace cutting-edge technologies and innovative approaches to solve complex business challenges."
    },
    {
      title: "Excellence",
      description: "We strive for excellence in every project, delivering high-quality solutions that exceed expectations."
    },
    {
      title: "Collaboration",
      description: "We believe in the power of collaboration, working closely with our clients to achieve shared success."
    },
    {
      title: "Integrity",
      description: "We conduct business with the highest standards of integrity, transparency, and ethical practices."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 dark:from-slate-950 dark:via-blue-950 dark:to-indigo-950">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">A.I.WORLD</span>
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Pioneering the future of technology with innovative AI solutions and cutting-edge development services.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-white/10 dark:bg-white/5 backdrop-blur-sm border-blue-800/30 text-center">
                <CardContent className="p-6">
                  <stat.icon className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-white/70">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Our Story</h2>
              <p className="text-white/80 mb-6">
                Founded with a vision to democratize artificial intelligence and advanced technology solutions, 
                A.I.WORLD has grown from a small startup to a leading technology partner for businesses worldwide.
              </p>
              <p className="text-white/80 mb-6">
                Our journey began with a simple belief: that every organization, regardless of size, should have 
                access to cutting-edge technology solutions that drive growth and innovation.
              </p>
              <p className="text-white/80">
                Today, we continue to push the boundaries of what's possible, delivering transformative solutions 
                that help our clients stay ahead in an ever-evolving digital landscape.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1527576539890-dfa815648363?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Modern office building" 
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Our Values</h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              The principles that guide everything we do and shape our culture.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="bg-white/10 dark:bg-white/5 backdrop-blur-sm border-blue-800/30">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-white mb-4">{value.title}</h3>
                  <p className="text-white/70">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
