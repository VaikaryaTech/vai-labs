import { Card } from "@/components/ui/card";
import { Code2, Cloud, Lock, Zap, GitBranch, Workflow } from "lucide-react";

const features = [
  {
    icon: Code2,
    title: "Code or No-Code",
    description: "Build workflows with a visual editor or write custom JavaScript/Python code for complex logic.",
    color: "text-orange-500"
  },
  {
    icon: Cloud,
    title: "Self-Host or Cloud",
    description: "Deploy on your infrastructure for full control or use our cloud for instant setup.",
    color: "text-purple-500"
  },
  {
    icon: Lock,
    title: "Enterprise Security",
    description: "SOC 2 compliant with advanced encryption, SSO, and granular access controls.",
    color: "text-blue-500"
  },
  {
    icon: Zap,
    title: "AI-Powered",
    description: "Integrate with GPT-4, Claude, and other AI models to build intelligent workflows.",
    color: "text-cyan-500"
  },
  {
    icon: GitBranch,
    title: "Advanced Logic",
    description: "Conditional branching, loops, error handling, and complex data transformations.",
    color: "text-green-500"
  },
  {
    icon: Workflow,
    title: "400+ Integrations",
    description: "Connect to all your favorite tools with pre-built nodes and custom API integrations.",
    color: "text-pink-500"
  }
];

export const Features = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Everything you need to automate{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">anything</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powerful features that give you complete control over your automation workflows
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-6 bg-gradient-card backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 group"
            >
              <feature.icon className={`h-10 w-10 ${feature.color} mb-4 group-hover:scale-110 transition-transform`} />
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
