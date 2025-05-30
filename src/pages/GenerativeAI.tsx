
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Brain, Code, Database, Zap, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const GenerativeAI = () => {
  const sections = [
    {
      icon: Brain,
      title: "What is Generative AI?",
      content: "Generative AI refers to artificial intelligence systems that can create new content, including text, images, code, and more. These systems learn patterns from existing data to generate novel outputs that are similar to but distinct from their training data."
    },
    {
      icon: Code,
      title: "Core Technologies",
      content: "Generative AI is built on advanced neural networks including Transformers, GANs (Generative Adversarial Networks), and Diffusion Models. These architectures enable machines to understand and generate human-like content across various modalities."
    },
    {
      icon: Database,
      title: "Training Process",
      content: "The training involves feeding massive datasets to neural networks, allowing them to learn patterns, relationships, and structures in the data. This process enables the AI to generate coherent and contextually relevant content."
    },
    {
      icon: Zap,
      title: "Applications",
      content: "Generative AI powers chatbots, content creation tools, code generators, image synthesizers, and more. It's revolutionizing industries from software development to creative arts and scientific research."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 dark:from-slate-950 dark:via-blue-950 dark:to-indigo-950">
      <Header />
      
      {/* Breadcrumb and Back Navigation */}
      <section className="pt-20 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/blog">
            <Button variant="ghost" className="text-cyan-300 hover:text-cyan-400 hover:bg-cyan-400/10 mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </section>

      {/* Article Header */}
      <section className="pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-cyan-300 text-sm rounded-full border border-cyan-400/30 mb-4 inline-block">
              Technology Documentation
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Generative AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Documentation</span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              A comprehensive guide to understanding generative artificial intelligence, its technologies, and practical applications.
            </p>
            <div className="flex items-center justify-center mt-6 text-white/60">
              <span>Published January 15, 2024</span>
              <Separator orientation="vertical" className="mx-4 h-4" />
              <span>8 min read</span>
            </div>
          </div>

          {/* Article Content */}
          <div className="prose prose-invert max-w-none">
            <Card className="bg-white/10 dark:bg-white/5 backdrop-blur-sm border-blue-800/30 mb-8">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Introduction</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80 leading-relaxed">
                  Generative Artificial Intelligence represents one of the most significant technological breakthroughs of our time. 
                  Unlike traditional AI systems that classify or predict, generative AI creates entirely new content, opening up 
                  unprecedented possibilities for automation, creativity, and problem-solving across industries.
                </p>
              </CardContent>
            </Card>

            {/* Technical Sections */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {sections.map((section, index) => (
                <Card key={index} className="bg-white/10 dark:bg-white/5 backdrop-blur-sm border-blue-800/30">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                      <section.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-white text-xl">{section.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white/70 leading-relaxed">
                      {section.content}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Implementation Guide */}
            <Card className="bg-white/10 dark:bg-white/5 backdrop-blur-sm border-blue-800/30 mb-8">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Implementation Considerations</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="text-cyan-300 text-lg font-semibold mb-2">Data Requirements</h3>
                  <p className="text-white/70">
                    Successful generative AI implementation requires high-quality, diverse datasets. The quality and 
                    quantity of training data directly impact the model's ability to generate relevant and accurate content.
                  </p>
                </div>
                <div>
                  <h3 className="text-cyan-300 text-lg font-semibold mb-2">Computational Resources</h3>
                  <p className="text-white/70">
                    Training generative AI models demands significant computational power, typically requiring GPUs 
                    or specialized hardware for efficient processing and model training.
                  </p>
                </div>
                <div>
                  <h3 className="text-cyan-300 text-lg font-semibold mb-2">Ethical Considerations</h3>
                  <p className="text-white/70">
                    Implementing generative AI requires careful consideration of bias, fairness, and responsible 
                    AI practices to ensure the technology benefits society while minimizing potential risks.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Conclusion */}
            <Card className="bg-white/10 dark:bg-white/5 backdrop-blur-sm border-blue-800/30">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Future Outlook</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80 leading-relaxed">
                  Generative AI continues to evolve rapidly, with new models and applications emerging regularly. 
                  As the technology matures, we can expect to see more sophisticated, efficient, and accessible 
                  generative AI systems that will further transform how we work, create, and solve complex problems.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GenerativeAI;
