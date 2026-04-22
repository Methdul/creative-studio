import { useEffect, useState } from "react";
import { Quote } from "lucide-react";

const items = [
  {
    quote: "They don't just deliver assets — they deliver outcomes. Our paid CAC dropped 41% in two months.",
    name: "Mara Lin",
    role: "Founder, Paloma",
  },
  {
    quote: "The most calm, organized creative team we've worked with. Felt like a senior in-house function from day one.",
    name: "Daniel Reeves",
    role: "Head of Growth, Northwind",
  },
  {
    quote: "They turned a messy product story into a 60-second film our entire sales team now uses.",
    name: "Hana Okafor",
    role: "CEO, Atlas",
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
        <div className="text-xs uppercase tracking-[0.3em] text-primary/80 mb-3 text-center">/ 04 Words</div>
        <Quote className="h-10 w-10 text-primary/40 mx-auto mb-8" />
        <div className="relative min-h-[200px]">
          {items.map((t, idx) => (
            <div
              key={idx}
              className="absolute inset-0 transition-smooth text-center"
              style={{ opacity: i === idx ? 1 : 0, transform: i === idx ? "translateY(0)" : "translateY(12px)" }}
            >
              <p className="font-display text-2xl sm:text-3xl leading-snug mb-8">"{t.quote}"</p>
              <div>
                <div className="font-medium">{t.name}</div>
                <div className="text-sm text-muted-foreground">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-2 mt-8">
          {items.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              className={`h-1.5 rounded-full transition-smooth ${i === idx ? "w-8 bg-primary" : "w-1.5 bg-border"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};