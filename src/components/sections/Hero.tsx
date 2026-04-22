import heroImg from "@/assets/hero-shape.jpg";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Play } from "lucide-react";

interface HeroProps {
  onBookCall: () => void;
}

export const Hero = ({ onBookCall }: HeroProps) => {
  return (
    <section className="relative overflow-hidden pt-36 pb-24 sm:pt-44 sm:pb-32 bg-hero">
      <div className="absolute inset-0 grid-pattern opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="absolute -top-32 -left-32 h-[480px] w-[480px] rounded-full bg-primary/15 blur-3xl animate-float-slow" />
      <div className="absolute -bottom-40 right-0 h-[520px] w-[520px] rounded-full bg-accent/10 blur-3xl animate-float-slow" style={{ animationDelay: "4s" }} />

      <div className="container relative">
        <div className="grid lg:grid-cols-[1.2fr,1fr] gap-12 lg:gap-16 items-center">
          <div className="space-y-8 animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-surface/40 px-3 py-1 text-xs text-muted-foreground glass">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              Booking 3 client slots for May
            </div>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.02]">
              Creative that{" "}
              <span className="italic text-gradient-primary">actually</span>
              <br />
              converts.
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              We're a small, sharp studio building video, AI content and brand
              systems for founders who want attention to turn into revenue —
              not vanity metrics.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Button onClick={onBookCall} variant="hero" size="xl">
                Book a Call
                <ArrowUpRight className="h-5 w-5" />
              </Button>
              <Button asChild variant="ghost" size="xl" className="rounded-full hover:bg-surface-elevated">
                <a href="#work">
                  <Play className="h-4 w-4" />
                  View Work
                </a>
              </Button>
            </div>
            <div className="flex items-center gap-6 pt-4 text-sm text-muted-foreground">
              <div>
                <div className="font-display text-2xl text-foreground">120+</div>
                projects shipped
              </div>
              <div className="h-8 w-px bg-border" />
              <div>
                <div className="font-display text-2xl text-foreground">38M</div>
                views generated
              </div>
              <div className="h-8 w-px bg-border hidden sm:block" />
              <div className="hidden sm:block">
                <div className="font-display text-2xl text-foreground">4.9</div>
                client rating
              </div>
            </div>
          </div>

          <div className="relative animate-fade-up" style={{ animationDelay: "0.15s" }}>
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-border/60 shadow-card">
              <img
                src={heroImg}
                alt="Editorial abstract creative composition"
                width={1024}
                height={1280}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/0 to-background/0" />
              <div className="absolute bottom-5 left-5 right-5 glass rounded-2xl p-4 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <Play className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <div className="text-sm font-medium">Reel 2025</div>
                  <div className="text-xs text-muted-foreground">Selected work · 1:24</div>
                </div>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 hidden md:block glass rounded-2xl p-4 w-44 animate-float-slow">
              <div className="text-xs text-muted-foreground mb-1">Avg. lift</div>
              <div className="font-display text-2xl">+218%</div>
              <div className="text-xs text-primary">conversion</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};