import { ArrowUpRight } from "lucide-react";

const projects = [
  { tag: "SaaS", title: "Northwind — Launch film", meta: "Brand · Motion", span: "lg:col-span-2", hue: "from-primary/30" },
  { tag: "Creator", title: "Obscura — 14-part series", meta: "Editing · Strategy", span: "lg:col-span-1", hue: "from-accent/25" },
  { tag: "DTC", title: "Paloma — Always-on ads", meta: "Performance creative", span: "lg:col-span-1", hue: "from-primary/20" },
  { tag: "Tech", title: "Atlas — Product explainer", meta: "Motion · Voiceover", span: "lg:col-span-2", hue: "from-accent/20" },
];

export const Work = () => {
  return (
    <section id="work" className="py-28 sm:py-36 bg-surface/30 border-y border-border/60">
      <div className="container">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-6">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-primary/80 mb-3">/ 02 Selected Work</div>
            <h2 className="font-display text-4xl sm:text-5xl leading-[1.05] max-w-xl">
              Less portfolio.<br />
              <span className="text-muted-foreground">More results.</span>
            </h2>
          </div>
          <a href="#contact" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-smooth">
            View archive <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid lg:grid-cols-3 gap-4">
          {projects.map((p, i) => (
            <a
              href="#"
              key={i}
              className={`${p.span} group relative aspect-[4/3] lg:aspect-auto lg:min-h-[340px] rounded-3xl overflow-hidden border border-border/60 bg-card transition-smooth hover:border-primary/50`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${p.hue} via-transparent to-transparent`} />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-smooth"
                   style={{ background: "radial-gradient(600px circle at var(--mx,50%) var(--my,50%), hsl(var(--primary)/0.15), transparent 50%)" }} />
              <div className="absolute inset-0 grid-pattern opacity-30" />
              <div className="relative h-full p-6 sm:p-8 flex flex-col justify-between">
                <span className="self-start text-xs px-3 py-1 rounded-full glass text-muted-foreground">{p.tag}</span>
                <div>
                  <div className="font-display text-2xl sm:text-3xl mb-2 group-hover:translate-x-1 transition-smooth">{p.title}</div>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{p.meta}</span>
                    <ArrowUpRight className="h-5 w-5 group-hover:text-primary transition-smooth" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};