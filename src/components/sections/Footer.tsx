import { Button } from "@/components/ui/button";
import { Instagram, Twitter, Youtube, Linkedin } from "lucide-react";

interface FooterProps { onBookCall: () => void; }

export const Footer = ({ onBookCall }: FooterProps) => {
  return (
    <footer className="border-t border-border/60 bg-surface/30">
      <div className="container py-16">
        <div className="grid md:grid-cols-[1.4fr,1fr,1fr] gap-12 mb-12">
          <div>
            <a href="#" className="flex items-center gap-2 font-display text-lg mb-4 tracking-tight">
              <img src="/logo.png" alt="Creative Studio Logo" className="h-6 w-6 object-contain" />
              Creative Studio
            </a>
            <p className="text-sm text-muted-foreground max-w-sm mb-6">
              An independent creative studio for founders who want their brand to look — and perform — like the best in their category.
            </p>
            <Button onClick={onBookCall} variant="hero" size="sm" className="rounded-full">
              Start a Project
            </Button>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Studio</div>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#work" className="hover:text-primary transition-smooth">Work</a></li>
              <li><a href="#services" className="hover:text-primary transition-smooth">Services</a></li>
              <li><a href="#process" className="hover:text-primary transition-smooth">Process</a></li>
              <li><a href="#contact" className="hover:text-primary transition-smooth">Contact</a></li>
            </ul>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Elsewhere</div>
            <div className="flex gap-3">
              {[Instagram, Twitter, Youtube, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="h-10 w-10 rounded-full border border-border/60 bg-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-smooth">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-border/60 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Creative Studio · trycreativestudio.com. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition-smooth">Privacy</a>
            <a href="#" className="hover:text-foreground transition-smooth">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};