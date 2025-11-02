import { Database, FileText, Workflow, Settings, MessageSquare } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function Features() {
  const featureCategories = [
    {
      icon: Database,
      title: "Data Processing & Retrieval",
      color: "from-blue-500/20 to-blue-600/20",
      features: [
        {
          name: "Deep Document Understanding",
          description: "Utilizes models for intelligent information extraction from unstructured data with complex formats (tables, images, mixed content), ensuring 'Quality in, quality out.'"
        },
        {
          name: "Grounded Citations & Reduced Hallucinations",
          description: "Provides traceable citations and references from source documents to support generated answers, significantly enhancing truthfulness and reliability."
        },
        {
          name: "Hybrid Search Techniques",
          description: "Converged context engine using Vector Search (semantic similarity), Full-Text/Keyword Search (Elasticsearch/Infinity), and Fused Re-ranking for optimal relevance."
        },
        {
          name: "Document Engines",
          description: "Supports Infinity (fast vector retrieval), Elasticsearch (full-text indexing), and OpenSearch for vector storage and indexing."
        },
        {
          name: "Tiered Knowledge Base / Page Rank",
          description: "Prioritize higher-quality datasets or documents by setting a 'Page Rank' to influence retrieval."
        }
      ]
    },
    {
      icon: FileText,
      title: "Data Ingestion & Processing",
      color: "from-purple-500/20 to-purple-600/20",
      features: [
        {
          name: "Heterogeneous Data Source Compatibility",
          description: "Supports PDF, DOC, DOCX, TXT, MD, MDX, CSV, XLSX, XLS, Images (JPEG, PNG, TIF, GIF), Slides (PPT, PPTX), Audio files, and Web Pages/HTML."
        },
        {
          name: "Intelligent & Template-Based Chunking",
          description: "Templates for different document layouts (Q&A, Resume, Paper, Law, Table). Includes DeepDoc model for advanced PDF parsing, Document Layout Analysis (DLA), OCR, and TSR."
        },
        {
          name: "RAPTOR Method",
          description: "Recursive Abstractive Processing for Tree-structured Organization to maintain semantic integrity."
        },
        {
          name: "Human Intervention & Transparency",
          description: "Visualization of text chunking results, allowing users to view processed chunks, locate original text, and manually add keywords or corrections."
        },
        {
          name: "Data Pre-processing Enhancements",
          description: "Knowledge Graph Construction, Auto-Keyword Extraction, Auto-Question Generation (similar to HyDE), and Long-Context RAG support."
        }
      ]
    },
    {
      icon: Workflow,
      title: "Agent & Workflow Capabilities",
      color: "from-green-500/20 to-green-600/20",
      features: [
        {
          name: "Agentic Workflow / Agent Builder",
          description: "No-code workflow editing interface (similar to an IDE) to orchestrate complex RAG and business scenarios."
        },
        {
          name: "Multi-Agent Deep Research",
          description: "Supports advanced reasoning and multi-step processes like Deep Research."
        },
        {
          name: "Tool Calling",
          description: "Agents can execute tools within workflows: Web Search (Tavily integration), Execute SQL, and Generate Component for LLM-based generation."
        },
        {
          name: "Pre-built Agent Templates",
          description: "Starter templates for E-Commerce Customer Support, Resume Analysis, SEO-optimized Blog Writing, Three-step Translation, and more."
        },
        {
          name: "Debugging",
          description: "Step-run debugging features for Agents to streamline development."
        }
      ]
    },
    {
      icon: Settings,
      title: "System & Model Management",
      color: "from-orange-500/20 to-orange-600/20",
      features: [
        {
          name: "Model Provider Flexibility",
          description: "Supports mainstream LLMs and embedding models including OpenAI-compatible APIs, Tongyi-Qianwen (Qwen), DeepSeek, and ModelScope."
        },
        {
          name: "Architecture",
          description: "Clear client-server architecture with deployment options via Docker or from source; supports x86 CPU and NVIDIA GPU devices."
        },
        {
          name: "Data Storage Flexibility",
          description: "Metadata Storage (MySQL, PostgreSQL) and Object Storage (MinIO, S3, Azure Blob)."
        },
        {
          name: "Comprehensive APIs",
          description: "HTTP/RESTful and Python APIs for dataset management, conversation/chat completion, and stream output support."
        },
        {
          name: "Admin CLI",
          description: "Backend system management tools including User Lifecycle Management, service monitoring, and fine-grained control over Datasets and Agents."
        }
      ]
    },
    {
      icon: MessageSquare,
      title: "Chat & User Experience",
      color: "from-pink-500/20 to-pink-600/20",
      features: [
        {
          name: "AI Chat Assistants",
          description: "Create multi-turn chat assistants with customizable configurations, system prompts, and model selection."
        },
        {
          name: "Multi-turn Optimization",
          description: "Enhances user queries based on ongoing conversation context."
        },
        {
          name: "Empty Response Configuration",
          description: "Option to confine answers strictly to provided datasets to prevent improvisation."
        },
        {
          name: "Deep Research",
          description: "Agentic reasoning capabilities for complex query handling."
        },
        {
          name: "AI Search Interface",
          description: "Single-turn AI conversation mode utilizing hybrid search strategy."
        },
        {
          name: "Multilingual Support",
          description: "Cross-language search and localization (e.g., German UI)."
        },
        {
          name: "Audio Output",
          description: "Text-to-Speech (TTS) via FishAudio or Tongyi Qwen TTS."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Comprehensive GenAI Features
          </h1>
          <p className="text-xl text-muted-foreground">
            Enterprise-grade capabilities designed for sophisticated AI applications, from advanced retrieval to intelligent workflows
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-7xl space-y-24">
          {featureCategories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <div key={idx} className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className={`p-4 rounded-xl bg-gradient-to-br ${category.color} backdrop-blur-sm`}>
                    <Icon className="h-8 w-8 text-foreground" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold">{category.title}</h2>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {category.features.map((feature, featureIdx) => (
                    <div 
                      key={featureIdx}
                      className="group p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
                    >
                      <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                        {feature.name}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="p-12 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Experience These Features?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              See how KOGNIX's comprehensive capabilities can transform your enterprise AI applications
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/book-demo"
                className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Book a Demo
              </a>
              <a 
                href="/product"
                className="px-8 py-4 border border-border rounded-lg font-semibold hover:border-primary transition-colors"
              >
                Explore KOGNIX
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
