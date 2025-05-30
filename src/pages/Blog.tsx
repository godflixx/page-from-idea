
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 dark:from-slate-950 dark:via-blue-950 dark:to-indigo-950">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Insights</span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Explore the latest insights, documentation, and technology trends in artificial intelligence and machine learning.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="bg-white/10 dark:bg-white/5 backdrop-blur-sm border-blue-800/30 hover:bg-white/15 dark:hover:bg-white/10 transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-cyan-300 text-sm rounded-full border border-cyan-400/30">
                      {post.category}
                    </span>
                    <div className="flex items-center text-white/60 text-sm">
                      <Calendar className="w-4 h-4 mr-2" />
                      {post.date}
                    </div>
                  </div>
                  <CardTitle className="text-white text-xl group-hover:text-cyan-300 transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-white/70">
                    {post.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-white/60 mb-6">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-white/60 text-sm">
                      <User className="w-4 h-4 mr-2" />
                      {post.author}
                    </div>
                    <span className="text-white/60 text-sm">{post.readTime}</span>
                  </div>
                  <Link to={`/blog/${post.id}`}>
                    <Button variant="outline" className="w-full mt-4 border-cyan-400/50 text-cyan-300 hover:bg-cyan-400/10">
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
