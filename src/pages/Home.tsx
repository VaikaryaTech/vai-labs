import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/Footer";
import { Shield, Server, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(260_60%_25%/0.3),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(12_100%_50%/0.2),transparent_50%)]" />
        
        <div className="container mx-auto px-6 py-32 relative z-10">
          <div className="max-w-5xl mx-auto text-center space-y-8 animate-slide-in">
            <h1 className="text-6xl lg:text-8xl font-bold leading-tight">
              Unlock Tomorrow's Potential —{" "}
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                Securely, Locally, Intelligently
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              VAI LABS delivers enterprise-grade Generative AI engineered for on-premises deployment.
              Our AI engine runs entirely within your infrastructure — no cloud, no data leakage, no dependency on the internet.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Experience the next generation of secure, compliant, and scalable AI that enhances innovation, 
              automates complex workflows, and accelerates decision intelligence — all within your trusted environment.
            </p>

            <div className="flex flex-wrap gap-4 justify-center pt-8">
              <Button variant="hero" size="lg">
                → Request a Demo
              </Button>
              <Link to="/product">
                <Button variant="glass" size="lg">
                  → Explore the GenAI Engine
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="group p-8 bg-gradient-card backdrop-blur-sm border border-border rounded-xl hover:scale-105 transition-all duration-300 hover:shadow-glow-primary hover:border-primary/50">
              <div className="inline-flex p-4 rounded-lg bg-gradient-to-br from-orange-500/20 to-orange-700/20 mb-6 group-hover:from-orange-500/30 group-hover:to-orange-700/30 transition-all">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Secure by Design</h3>
              <p className="text-muted-foreground leading-relaxed">
                Your data never leaves your infrastructure. Complete control and compliance with zero cloud dependency.
              </p>
            </div>

            <div className="group p-8 bg-gradient-card backdrop-blur-sm border border-border rounded-xl hover:scale-105 transition-all duration-300 hover:shadow-glow-secondary hover:border-secondary/50">
              <div className="inline-flex p-4 rounded-lg bg-gradient-to-br from-purple-500/20 to-purple-700/20 mb-6 group-hover:from-purple-500/30 group-hover:to-purple-700/30 transition-all">
                <Server className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">On-Premises Power</h3>
              <p className="text-muted-foreground leading-relaxed">
                Enterprise-grade AI that runs entirely within your infrastructure for maximum data sovereignty.
              </p>
            </div>

            <div className="group p-8 bg-gradient-card backdrop-blur-sm border border-border rounded-xl hover:scale-105 transition-all duration-300 hover:shadow-glow-primary hover:border-cyan-500/50">
              <div className="inline-flex p-4 rounded-lg bg-gradient-to-br from-cyan-500/20 to-cyan-700/20 mb-6 group-hover:from-cyan-500/30 group-hover:to-cyan-700/30 transition-all">
                <Zap className="h-8 w-8 text-cyan-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Intelligent Automation</h3>
              <p className="text-muted-foreground leading-relaxed">
                Accelerate decision intelligence and automate complex workflows with next-gen AI capabilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
