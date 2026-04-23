const steps = [
  { n: "01", title: "Discovery Call", desc: "30-minute call to understand goals, audience and constraints. No pitch." },
  { n: "02", title: "Strategy", desc: "We map the creative system: angles, formats, distribution and metrics that matter." },
  { n: "03", title: "Execution", desc: "Tight production sprints. Daily updates. You see work as it's built, not at the end." },
  { n: "04", title: "Delivery", desc: "Final assets, source files, performance review — and a clear plan for what's next." },
];

export const Process = () => {
  return (
    <section id="process" className="py-28 sm:py-36">
      <div className="container">
        <div className="max-w-2xl mb-16">
          <div className="text-xs uppercase tracking-[0.3em] text-primary/80 mb-3">/ 02 Process</div>
          <h2 className="font-display text-4xl sm:text-5xl leading-[1.05]">
            Everything starts<br />
            <span className="text-muted-foreground">with a call.</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border/60 rounded-3xl overflow-hidden border border-border/60">
          {steps.map((s) => (
            <div key={s.n} className="bg-background p-8 group hover:bg-card transition-smooth">
              <div className="font-display text-5xl text-primary/40 group-hover:text-primary transition-smooth mb-8">
                {s.n}
              </div>
              <div className="font-display text-xl mb-3">{s.title}</div>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};