export const TrustedBy = () => {
  const companies = [
    "Wayfair",
    "Vodafone", 
    "Unbabel",
    "Onfleet",
    "Mistral AI",
    "Dedatech"
  ];

  return (
    <section className="py-16 bg-background/50">
      <div className="container mx-auto px-6">
        <p className="text-center text-muted-foreground mb-8 text-sm">
          The world's most popular workflow automation platform for technical teams including
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-12">
          {companies.map((company, index) => (
            <div 
              key={index} 
              className="text-2xl font-semibold text-muted-foreground/60 hover:text-foreground transition-colors cursor-pointer"
            >
              {company}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
