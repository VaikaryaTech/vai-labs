import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Careers = () => {
  const openings = [
    {
      title: "Senior AI/ML Engineer",
      location: "Bangalore, India",
      type: "Full-time",
      description: "Work on cutting-edge GenAI systems and help build the next generation of intelligent applications."
    },
    {
      title: "Backend Engineer",
      location: "Remote",
      type: "Full-time",
      description: "Design and develop scalable backend systems to support our enterprise AI platform."
    },
    {
      title: "Product Manager",
      location: "Bangalore, India",
      type: "Full-time",
      description: "Drive product strategy and roadmap for KOGNIX, working closely with customers and engineering teams."
    },
    {
      title: "Customer Success Manager",
      location: "Bangalore, India / Remote",
      type: "Full-time",
      description: "Help enterprise customers succeed with KOGNIX and drive adoption across their organizations."
    }
  ];

  const benefits = [
    "Competitive salary and equity",
    "Flexible work arrangements",
    "Health insurance",
    "Learning & development budget",
    "Latest tech equipment",
    "Team events and outings"
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
                Join Our Team
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Build the future of enterprise AI with a team of passionate innovators and problem solvers.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-6">Why VAI LABS?</h2>
            <p className="text-muted-foreground mb-8">
              At VAI LABS, you'll work on challenging problems that matter. We're building AI solutions that 
              transform how businesses operate, and we need talented people who share our vision.
            </p>
            
            <Card className="p-8 border-border">
              <h3 className="text-xl font-bold mb-4">Benefits & Perks</h3>
              <ul className="grid md:grid-cols-2 gap-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-2 text-muted-foreground">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Open Positions</h2>
            
            <div className="space-y-6">
              {openings.map((job, index) => (
                <Card key={index} className="p-6 border-border hover:border-primary/50 transition-all">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">{job.title}</h3>
                      <p className="text-muted-foreground mb-4">{job.description}</p>
                      
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          {job.location}
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          {job.type}
                        </div>
                      </div>
                    </div>
                    
                    <Link to="/contact">
                      <Button variant="outline">
                        Apply Now
                      </Button>
                    </Link>
                  </div>
                </Card>
              ))}
            </div>

            <Card className="p-8 border-border mt-12 text-center">
              <Briefcase className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Don't see a role that fits?</h3>
              <p className="text-muted-foreground mb-6">
                We're always looking for talented people. Send us your resume and let's chat!
              </p>
              <Link to="/contact">
                <Button variant="hero">
                  Get in Touch
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;
