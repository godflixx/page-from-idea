
import { Card, CardContent } from "@/components/ui/card";

interface Tool {
  name: string;
  description: string;
}

interface ToolsTechnologiesProps {
  tools: Tool[];
}

const ToolsTechnologies = ({ tools }: ToolsTechnologiesProps) => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-12 text-center">
          Tools & <span className="text-accent">Technologies</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((tool, index) => (
            <Card key={index} className="bg-card">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-2">{tool.name}</h3>
                <p className="text-muted-foreground text-sm">{tool.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsTechnologies;
