import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface NavbarProps {
  onBookCall: () => void;
}

const links = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export const Navbar = ({ onBookCall }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
          <a href="#" className="flex items-center gap-2 font-display text-base">
            <span className="h-2 w-2 rounded-full bg-primary shadow-glow" />
            Creative Studio
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-foreground transition-smooth">
                {l.label}
              </a>
            ))}
          </nav>
          <Button onClick={onBookCall} variant="hero" size="sm" className="rounded-full">
            Book a Call
          </Button>
        </div>
      </div>
    </header>
  );
};