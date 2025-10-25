import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Calendar, Clock, User } from "lucide-react";

const Blog = () => {
  const posts = [
    {
      title: "The Future of Enterprise AI: Trends to Watch in 2025",
      excerpt: "Explore the key trends shaping enterprise AI adoption, from on-premises solutions to advanced RAG systems.",
      author: "VAI LABS Team",
      date: "Jan 15, 2025",
      readTime: "5 min read",
      category: "AI Trends"
    },
    {
      title: "Implementing Secure GenAI: A Comprehensive Guide",
      excerpt: "Learn best practices for deploying GenAI solutions while maintaining enterprise security and compliance standards.",
      author: "Security Team",
      date: "Jan 10, 2025",
      readTime: "8 min read",
      category: "Security"
    },
    {
      title: "How RAG Technology is Transforming Document Intelligence",
      excerpt: "Deep dive into Retrieval-Augmented Generation and its applications in enterprise knowledge management.",
      author: "AI Research Team",
      date: "Jan 5, 2025",
      readTime: "6 min read",
      category: "Technology"
    },
    {
      title: "Case Study: Reducing Compliance Time by 70% with AI",
      excerpt: "Real-world example of how a financial institution streamlined regulatory compliance using KOGNIX.",
      author: "Product Team",
      date: "Dec 28, 2024",
      readTime: "7 min read",
      category: "Case Study"
    },
    {
      title: "Building Trust in AI: The Importance of Grounded Responses",
      excerpt: "Why hallucination-free AI responses are crucial for enterprise applications and how to achieve them.",
      author: "AI Research Team",
      date: "Dec 20, 2024",
      readTime: "5 min read",
      category: "Best Practices"
    },
    {
      title: "The ROI of Enterprise GenAI Implementation",
      excerpt: "Quantifying the business impact of GenAI adoption across different industries and use cases.",
      author: "Business Team",
      date: "Dec 15, 2024",
      readTime: "6 min read",
      category: "Business"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(260_60%_25%/0.2),transparent_70%)]" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-slide-in">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                Blog
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Insights, updates, and best practices from the VAI LABS team
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {posts.map((post, index) => (
              <Card key={index} className="p-6 border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-glow-primary cursor-pointer">
                <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-4">
                  {post.category}
                </div>
                
                <h3 className="text-xl font-bold mb-3 line-clamp-2">{post.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                
                <div className="flex items-center gap-4 text-xs text-muted-foreground pt-4 border-t border-border/50">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {post.readTime}
                  </div>
                </div>
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
