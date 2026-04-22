import { useEffect, useState } from "react";
import { Quote } from "lucide-react";

const items = [
  {
    quote: "Turn attention into revenue, not just vanity metrics.",
    name: "Studio Goal 01",
    role: "Conversion focus",
  },
  {
    quote: "Build brand systems for founders who want to look — and perform — like the best.",
    name: "Studio Goal 02",
    role: "Visual excellence",
  },
  {
    quote: "Deliver outcomes that drive measurable growth and long-term value.",
    name: "Studio Goal 03",
    role: "Strategic impact",
  },
];

export const Testimonials = () => {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % items.length), 5500);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="py-28 sm:py-36 bg-surface/30 border-y border-border/60">
      <div className="container max-w-4xl">
        <div className="flex flex-col items-center mb-12">
          <img src="/logo.png" alt="Creative Studio Logo" className="h-12 w-12 object-contain mb-6 opacity-80" />
          <div className="text-xs uppercase tracking-[0.3em] text-primary/80">Our Goals</div>
        </div>
        <div className="relative min-h-[200px]">
          {items.map((t, idx) => (
            <div
              key={idx}
              className="absolute inset-0 transition-smooth text-center"
              style={{ opacity: i === idx ? 1 : 0, transform: i === idx ? "translateY(0)" : "translateY(12px)" }}
            >
              <p className="font-display text-2xl sm:text-4xl leading-tight mb-8">"{t.quote}"</p>
              <div className="flex flex-col items-center">
                <div className="h-px w-8 bg-primary/30 mb-4" />
                <div className="font-medium uppercase tracking-widest text-xs">{t.name}</div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-2 mt-12">
          {items.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              className={`h-1 rounded-full transition-smooth ${i === idx ? "w-12 bg-primary" : "w-2 bg-border"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};