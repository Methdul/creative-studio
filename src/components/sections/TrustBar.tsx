const brands = ["NORTHWIND", "Lumen", "OBSCURA", "atlas/fm", "PALOMA", "Kyō", "VANTA"];

export const TrustBar = () => {
  return (
    <section className="py-12 border-y border-border/60 bg-surface/30">
      <div className="container">
        <div className="text-center text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">
          Trusted by founders & creators
        </div>
        <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
          <div className="flex gap-16 animate-marquee whitespace-nowrap">
            {[...brands, ...brands].map((b, i) => (
              <span
                key={i}
                className="font-display text-2xl text-muted-foreground/60 hover:text-foreground transition-smooth"
              >
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};