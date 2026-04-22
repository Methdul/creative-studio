import { Film, Sparkles, Monitor, TrendingUp } from "lucide-react";

const services = [
  {
    icon: Film,
    title: "Video Editing",
    desc: "Short-form, long-form, and ads engineered to hold attention from frame one.",
    tags: ["Reels", "YouTube", "Ads"],
  },
  {
    icon: Sparkles,
    title: "AI Content Creation",
    desc: "Production pipelines that turn one idea into a week of polished, on-brand content.",
    tags: ["Pipelines", "Avatars", "Voice"],
  },
  {
    icon: Monitor,
    title: "SaaS Explainers",
    desc: "Product-led videos that make complex software feel obvious in 60 seconds.",
    tags: ["Motion", "UI", "Voiceover"],
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    desc: "Creative + paid working as one system. We measure what matters: revenue.",
    tags: ["Meta", "TikTok", "CRO"],
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-28 sm:py-36 relative">
      <div className="container">
        <div className="max-w-2xl mb-16">
          <div className="text-xs uppercase tracking-[0.3em] text-primary/80 mb-3">/ 01 Services</div>
          <h2 className="font-display text-4xl sm:text-5xl leading-[1.05]">
            A small studio.<br />
            <span className="text-muted-foreground">Built for high-leverage creative.</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {services.map((s) => (
            <div
              key={s.title}
              className="group relative rounded-3xl border border-border/60 bg-card p-8 transition-smooth hover:-translate-y-1 hover:border-primary/50 overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-smooth pointer-events-none"
                   style={{ background: "radial-gradient(400px circle at 50% 0%, hsl(var(--primary) / 0.12), transparent 60%)" }} />
              <div className="relative">
                <div className="flex items-center justify-between mb-12">
                  <div className="h-12 w-12 rounded-2xl bg-surface-elevated border border-border flex items-center justify-center text-primary">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <span className="text-xs text-muted-foreground">0{services.indexOf(s) + 1}</span>
                </div>
                <h3 className="font-display text-2xl mb-3">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{s.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span key={t} className="text-xs px-3 py-1 rounded-full bg-surface-elevated border border-border/60 text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};