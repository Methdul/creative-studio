import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

interface CTAProps { onBookCall: () => void; }

export const CTA = ({ onBookCall }: CTAProps) => {
  return (
    <section className="py-28 sm:py-40 relative overflow-hidden">
      <div className="absolute inset-0 bg-hero" />
      <div className="absolute inset-0 grid-pattern opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
      <div className="container relative text-center max-w-3xl">
        <div className="text-xs uppercase tracking-[0.3em] text-primary/80 mb-5">/ Ready when you are</div>
        <h2 className="font-display text-5xl sm:text-7xl leading-[1.02] mb-6">
          Let's build something<br />
          that <span className="italic text-gradient-primary">stands out.</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10">
          A 30-minute call is the fastest way to find out if we're the right team for what you're building.
        </p>
        <Button onClick={onBookCall} variant="glow" size="xl" className="rounded-full">
          Book a Call <ArrowUpRight className="h-5 w-5" />
        </Button>
        <div className="mt-6 text-xs text-muted-foreground">
          Limited to 3 new clients per month · Replies in &lt; 24h
        </div>
      </div>
    </section>
  );
};