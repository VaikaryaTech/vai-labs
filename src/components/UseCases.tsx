import { Card } from "@/components/ui/card";
import { Bot, Workflow, Database, Link2 } from "lucide-react";

const useCases = [
  {
    icon: Bot,
    title: "Intelligent Digital Workforce",
    description: "Architect sophisticated AI Assistants and Chatbots—agents that fluidly bridge the gap between web search, calendar management, outbound communication, and your proprietary business platforms.",
    gradient: "from-purple-500/20 to-purple-700/20"
  },
  {
    icon: Workflow,
    title: "Precision Process Alchemy",
    description: "Instantly transform monotonous operational chores—from ledger entry and executive reporting to customer ticket resolution and generative content production—into seamless, automated workflows.",
    gradient: "from-blue-500/20 to-blue-700/20"
  },
  {
    icon: Database,
    title: "Cognitive Data Synthesis",
    description: "Move beyond spreadsheets. Drive deeper understanding by enabling AI to extract, analyze, and synthesize insights from massive datasets and documents, ensuring flawless synchronization across all critical systems.",
    gradient: "from-cyan-500/20 to-cyan-700/20"
  },
  {
    icon: Link2,
    title: "Unified API Orchestration",
    description: "Eliminate integration sprawl. We enable you to weave disparate services into singular, powerful endpoints, mastering intricate business logic and event-driven automation for maximum agility.",
    gradient: "from-orange-500/20 to-orange-700/20"
  }
];

export const UseCases = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">
          What You'll Engineer
        </h2>
        <p className="text-xl text-muted-foreground">
          Unleash the potential of hyper-automation and cognitive AI
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {useCases.map((useCase, index) => (
          <Card 
            key={index}
            className={`p-8 bg-gradient-card backdrop-blur-sm border-border hover:scale-105 transition-all duration-300 hover:shadow-glow-primary group cursor-pointer animate-slide-in`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="space-y-4">
              <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${useCase.gradient}`}>
                <useCase.icon className="h-8 w-8 text-primary" />
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-3">
                  {useCase.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {useCase.description}
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
