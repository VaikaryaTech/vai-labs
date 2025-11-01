import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";

export const Navbar = () => {
  const location = useLocation();
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="VAI LABS" className="h-10 w-10" />
            <span className="text-xl font-bold text-foreground">VAI LABS</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <Link 
              to="/" 
              className={`text-sm transition-colors ${
                location.pathname === '/' 
                  ? 'text-foreground font-semibold' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/product" 
              className={`text-sm transition-colors ${
                location.pathname === '/product' 
                  ? 'text-foreground font-semibold' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              GenAI Engine
            </Link>
            <Link 
              to="/workflow-automation" 
              className={`text-sm transition-colors ${
                location.pathname === '/workflow-automation' 
                  ? 'text-foreground font-semibold' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Intelligent Workflows
            </Link>
            <Link 
              to="/business-applications" 
              className={`text-sm transition-colors ${
                location.pathname === '/business-applications' 
                  ? 'text-foreground font-semibold' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Business Applications
            </Link>
            <Link 
              to="/assessment" 
              className={`text-sm transition-colors ${
                location.pathname === '/assessment' 
                  ? 'text-foreground font-semibold' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              AI Readiness
            </Link>
            <Link 
              to="/book-demo" 
              className={`text-sm transition-colors ${
                location.pathname === '/book-demo' 
                  ? 'text-foreground font-semibold' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Book Demo
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm">
              Sign in
            </Button>
            <Button variant="hero" size="sm">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
