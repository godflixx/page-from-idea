
import { Card, CardContent } from "@/components/ui/card";

interface Language {
  name: string;
  description: string;
}

interface ProgrammingLanguagesProps {
  languages: Language[];
}

const ProgrammingLanguages = ({ languages }: ProgrammingLanguagesProps) => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-12 text-center">
          Core <span className="text-accent">Programming Languages</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {languages.map((lang, index) => (
            <Card key={index} className="bg-card">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-2">{lang.name}</h3>
                <p className="text-muted-foreground text-sm">{lang.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgrammingLanguages;
