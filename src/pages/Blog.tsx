
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, User } from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
  const blogPosts = [
    {
      id: "generative-ai",
      title: "Generative AI Documentation",
      description: "Complete guide to understanding and implementing generative AI technologies in modern applications.",
      excerpt: "Explore the fundamentals of generative AI, from neural networks to practical implementation strategies that are transforming industries.",
      author: "AI World Team",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "Technology"
    },
    {
      id: "ai-insights",
      title: "AI Technology Insights",
      description: "Latest insights and trends in artificial intelligence technology and its applications across various industries.",
      excerpt: "Discover how AI is revolutionizing business processes and creating new opportunities for innovation and growth.",
      author: "AI World Team", 
      date: "2024-01-10",
      readTime: "6 min read",
      category: "Insights"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
            AI <span className="text-accent">Insights</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore the latest insights, documentation, and technology trends in artificial intelligence and machine learning.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="bg-card border-border hover:shadow-lg transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-accent/20 text-accent text-sm rounded-full border border-accent/30">
                      {post.category}
                    </span>
                    <div className="flex items-center text-muted-foreground text-sm">
                      <Calendar className="w-4 h-4 mr-2" />
                      {post.date}
                    </div>
                  </div>
                  <CardTitle className="text-foreground text-xl group-hover:text-accent transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {post.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-muted-foreground text-sm">
                      <User className="w-4 h-4 mr-2" />
                      {post.author}
                    </div>
                    <span className="text-muted-foreground text-sm">{post.readTime}</span>
                  </div>
                  <Link to={`/blog/${post.id}`}>
                    <Button variant="outline" className="w-full mt-4 border-accent/50 text-accent hover:bg-accent/10">
                      Read More <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
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

export default Blog;
