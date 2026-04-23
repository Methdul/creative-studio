import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface NavbarProps {
  onBookCall: () => void;
}

const links = [

  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export const Navbar = ({ onBookCall }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);

    // Intersection Observer for sections
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  const getSectionTitle = (id: string | null) => {
    switch (id) {
      case "services": return "Services";
      case "process": return "Process";
      case "contact": return "Contact";
      default: return null;
    }
  };

  const currentTitle = getSectionTitle(activeSection);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-smooth",
        scrolled ? "py-3" : "py-5"
      )}
    >
      <div className="container">
        <div
          className={cn(
            "flex items-center justify-between rounded-full px-5 sm:px-6 py-2.5 transition-smooth",
            scrolled ? "glass shadow-soft" : "bg-transparent"
          )}
        >
          <a href="#" className="flex items-center gap-2 font-display text-base tracking-tight mx-auto sm:mx-0 min-h-[32px]">
            <img src="/logo.png" alt="Creative Studio Logo" className="h-8 w-8 object-contain shrink-0" />
            
            <div className="relative">
              {/* Desktop and Mobile Initial State */}
              <span className={cn(
                "block transition-smooth duration-500",
                currentTitle && scrolled ? "opacity-0 -translate-y-4 pointer-events-none" : "opacity-100 translate-y-0"
              )}>
                Creative Studio
              </span>

              {/* Mobile Dynamic Section Title */}
              {currentTitle && (
                <div className={cn(
                  "absolute inset-0 flex items-center gap-2 transition-smooth duration-500 sm:hidden whitespace-nowrap",
                  scrolled ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                )}>
                  <span className="text-primary/60 text-[10px] uppercase tracking-widest font-sans font-bold">/</span>
                  <span className="font-display">{currentTitle}</span>
                </div>
              )}
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            {links.map((l) => (
              <a 
                key={l.href} 
                href={l.href} 
                className={cn(
                  "transition-smooth hover:text-foreground",
                  activeSection === l.href.replace("#", "") 
                    ? "text-primary opacity-100" 
                    : "text-muted-foreground opacity-70"
                )}
              >
                {l.label}
              </a>
            ))}
          </nav>
          <Button onClick={onBookCall} variant="hero" size="sm" className="hidden sm:inline-flex rounded-full px-5 text-xs">
            Book a Call
          </Button>
        </div>
      </div>
    </header>
  );
};