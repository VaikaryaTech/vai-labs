import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Footer } from "@/components/Footer";
import { Shield, Link2, Boxes, DollarSign, TrendingDown, Code2, ImageIcon, Database, FileText, Lightbulb, Settings } from "lucide-react";
import { Link } from "react-router-dom";

const Product = () => {
  const capabilities = [
    {
      icon: Code2,
      title: "Text Generation",
      description: "From compelling marketing copy to complex code, generate high-quality text in an instant.",
      color: "text-orange-500"
    },
    {
      icon: ImageIcon,
      title: "Image & Media Creation",
      description: "Produce stunning visuals, graphics, and even video concepts from simple prompts.",
      color: "text-purple-500"
    },
    {
      icon: Database,
      title: "Data Synthesis & Analysis",
      description: "Identify patterns, predict trends, and synthesize insights from vast amounts of data.",
      color: "text-blue-500"
    },
    {
      icon: FileText,
      title: "Automated Content Creation",
      description: "Efficiently produce diverse content formats for various platforms.",
      color: "text-cyan-500"
    },
    {
      icon: Lightbulb,
      title: "Problem Solving & Optimization",
      description: "Apply intelligent algorithms to solve complex business challenges and optimize processes.",
      color: "text-green-500"
    },
    {
      icon: Settings,
      title: "Customization & Adaptability",
      description: "Designed to learn and adapt to your specific business needs and data.",
      color: "text-pink-500"
    }
  ];

  const features = [
    {
      icon: Shield,
      title: "Isolated Environments",
      description: "Deploy in completely isolated environments for maximum data security and compliance."
    },
    {
      icon: Link2,
      title: "Secure Connectivity",
      description: "Optional secure connectivity to external systems when required, with full control."
    },
    {
      icon: Boxes,
      title: "Native API Gateway",
      description: "Seamless integration with existing business applications through our secure API gateway."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(260_60%_25%/0.2),transparent_70%)]" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-slide-in">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                GenAI Engine
              </span>
            </h1>
            
            <p className="text-2xl lg:text-3xl font-semibold text-foreground">
              Powered by KOGNIX - Your Secure and Flexible Generative AI Framework
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Engineered with paramount focus on data security and flexibility, KOGNIX is a versatile solution 
              designed for seamless integration across diverse business domains, empowering organizations to 
              leverage the transformative power of AI while retaining absolute control over their data.
            </p>
          </div>
        </div>
      </section>

      {/* Security & Integration */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Unmatched Security and Integration
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              KOGNIX's unique architecture offers unparalleled deployment options with continuous innovation 
              and regular updates to keep your business at the forefront of AI advancements.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="p-8 bg-gradient-card backdrop-blur-sm border-border hover:scale-105 transition-all duration-300 hover:shadow-glow-primary"
              >
                <feature.icon className="h-12 w-12 text-primary mb-6" />
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cost-Effectiveness */}
      <section className="py-24 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(260_60%_25%/0.3),transparent_70%)]" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Cost-Effectiveness and Rapid ROI
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-border">
              <DollarSign className="h-12 w-12 text-primary mb-6" />
              <h3 className="text-2xl font-bold mb-4">Lower Implementation Costs</h3>
              <p className="text-muted-foreground leading-relaxed">
                KOGNIX can be implemented at significantly lower costs compared to similar market solutions, 
                making advanced AI accessible to organizations of all sizes.
              </p>
            </Card>

            <Card className="p-8 bg-card/50 backdrop-blur-sm border-border">
              <TrendingDown className="h-12 w-12 text-secondary mb-6" />
              <h3 className="text-2xl font-bold mb-4">Reduced Maintenance</h3>
              <p className="text-muted-foreground leading-relaxed">
                Lower maintenance costs reduce the total cost of ownership, enabling businesses to allocate 
                resources more efficiently while driving innovation.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Core Capabilities</h2>
            <p className="text-xl text-muted-foreground">
              Powerful AI capabilities designed for modern business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((capability, index) => (
              <Card 
                key={index}
                className="p-6 bg-gradient-card backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 group"
              >
                <capability.icon className={`h-10 w-10 ${capability.color} mb-4 group-hover:scale-110 transition-transform`} />
                <h3 className="text-xl font-semibold mb-3">{capability.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {capability.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(12_100%_50%/0.2),transparent_70%)]" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl font-bold mb-4">How KOGNIX Works</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              KOGNIX leverages advanced deep learning models, including large language models (LLMs) and 
              diffusion models, to understand context, generate novel outputs, and continually refine its 
              capabilities. With its secure architecture and flexible deployment options, it's more than 
              just automation; it's intelligent creation with complete data sovereignty.
            </p>
          </div>
        </div>
      </section>

      {/* What Sets Apart */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What Sets KOGNIX Apart</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-8 bg-gradient-card backdrop-blur-sm border-border text-center hover:scale-105 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4 text-primary">Security by Design</h3>
              <p className="text-muted-foreground leading-relaxed">
                Built with robust safeguards and isolation capabilities to ensure complete data protection.
              </p>
            </Card>

            <Card className="p-8 bg-gradient-card backdrop-blur-sm border-border text-center hover:scale-105 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4 text-secondary">Cost-Effective Solution</h3>
              <p className="text-muted-foreground leading-relaxed">
                Significantly lower implementation and maintenance costs compared to market alternatives.
              </p>
            </Card>

            <Card className="p-8 bg-gradient-card backdrop-blur-sm border-border text-center hover:scale-105 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4 text-cyan-500">Rapid ROI</h3>
              <p className="text-muted-foreground leading-relaxed">
                Quick return on investment with lower total cost of ownership for sustainable growth.
              </p>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link to="/business-applications">
              <Button variant="hero" size="lg">
                Explore Business Applications
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Product;
