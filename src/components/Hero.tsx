import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-lightning.png";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(260_60%_25%/0.3),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(12_100%_50%/0.2),transparent_50%)]" />
      
      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8 animate-slide-in">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              Forge Your Future:{" "}
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                What You'll Engineer
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Unleash the potential of hyper-automation and cognitive AI to fundamentally reshape your enterprise.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg">
                Get started for free
              </Button>
              <Button variant="glass" size="lg">
                Talk to sales
              </Button>
            </div>
          </div>

          {/* Right visual */}
          <div className="relative">
            <div className="relative animate-float">
              <img 
                src={heroImage} 
                alt="AI Automation Visualization" 
                className="w-full h-auto drop-shadow-[0_0_50px_rgba(255,109,90,0.5)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
