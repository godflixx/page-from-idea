
const StatsSection = () => {
  const stats = [
    {
      number: "500+",
      label: "Projects Completed",
      description: "Successfully delivered across various industries"
    },
    {
      number: "98%",
      label: "Client Satisfaction",
      description: "Consistently exceeding client expectations"
    },
    {
      number: "50+",
      label: "Team Members",
      description: "Experienced professionals and AI specialists"
    },
    {
      number: "24/7",
      label: "Support Available",
      description: "Round-the-clock assistance and maintenance"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Trusted by <span className="text-accent">Industry Leaders</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our track record speaks for itself. Here are the numbers that showcase our commitment to excellence.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-background rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-border group-hover:border-accent/20">
                <div className="text-4xl lg:text-5xl font-bold text-accent mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-foreground mb-2">
                  {stat.label}
                </div>
                <div className="text-sm text-muted-foreground leading-relaxed">
                  {stat.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
