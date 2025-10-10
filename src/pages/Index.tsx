import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustedBy } from "@/components/TrustedBy";
import { UseCases } from "@/components/UseCases";
import { WorkflowPreview } from "@/components/WorkflowPreview";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <TrustedBy />
      <UseCases />
      <WorkflowPreview />
      <Features />
      <Footer />
    </div>
  );
};

export default Index;
