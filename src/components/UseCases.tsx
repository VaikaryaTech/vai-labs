import { Card } from "@/components/ui/card";
import { Zap } from "lucide-react";

const useCases = [
  {
    team: "IT Ops",
    action: "On-board new employees",
    gradient: "from-purple-500/20 to-purple-700/20"
  },
  {
    team: "Sec Ops",
    action: "Enrich security incident tickets",
    gradient: "from-blue-500/20 to-blue-700/20"
  },
  {
    team: "Dev Ops",
    action: "Convert natural language into API calls",
    gradient: "from-cyan-500/20 to-cyan-700/20"
  },
  {
    team: "Sales",
    action: "Generate customer insights from reviews",
    gradient: "from-orange-500/20 to-orange-700/20"
  },
  {
    team: "Marketing",
    action: "Automate content distribution workflows",
    gradient: "from-pink-500/20 to-pink-700/20"
  }
];

export const UseCases = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Powerful automation for every team
          </h2>
          <p className="text-xl text-muted-foreground">
            Transform your workflows with AI-powered automation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {useCases.map((useCase, index) => (
            <Card 
              key={index}
              className={`p-6 bg-gradient-card backdrop-blur-sm border-border hover:scale-105 transition-all duration-300 hover:shadow-glow-primary group cursor-pointer animate-slide-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-4">
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${useCase.gradient}`}>
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                
                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    {useCase.team} <span className="text-muted-foreground">can</span>
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {useCase.action}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
