const services = [
  {
    title: "Video Editing",
    desc: "Short-form, long-form, and ads engineered to hold attention from frame one.",
    tags: ["Reels", "YouTube", "Ads"],
    image: "/assets/services/video-editing.png",
  },
  {
    title: "AI Content Creation",
    desc: "Production pipelines that turn one idea into a week of polished, on-brand content.",
    tags: ["Pipelines", "Avatars", "Voice"],
    image: "/assets/services/ai-creation.png",
  },
  {
    title: "SaaS Explainers",
    desc: "Product-led videos that make complex software feel obvious in 60 seconds.",
    tags: ["Motion", "UI", "Voiceover"],
    image: "/assets/services/saas-explainers.png",
  },
  {
    title: "Digital Marketing",
    desc: "Creative + paid working as one system. We measure what matters: revenue.",
    tags: ["Meta", "TikTok", "CRO"],
    image: "/assets/services/digital-marketing.png",
  },
];

interface ServicesProps {
  onBookCall?: () => void;
}

export const Services = ({ onBookCall }: ServicesProps) => {
  return (
    <section id="services" className="py-20 sm:py-36 relative overflow-hidden">
      <div className="container">
        <div className="max-w-2xl mb-20">
          <div className="text-xs uppercase tracking-[0.4em] text-primary/80 mb-4">/ 01 Services</div>
          <h2 className="font-display text-4xl sm:text-6xl leading-[1.05] tracking-tight">
            A small studio.<br />
            <span className="text-muted-foreground/60">Built for high-leverage creative.</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {services.map((s, index) => (
            <div
              key={s.title}
              onClick={onBookCall}
              className="group relative aspect-[16/10] rounded-[2rem] bg-card transition-smooth overflow-hidden cursor-pointer border border-white/5"
            >
              {/* Background Image with Zoom Effect */}
              <div className="absolute inset-0 transition-transform duration-1000 ease-out group-hover:scale-105">
                <img 
                  src={s.image} 
                  alt={s.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
                />
              </div>

              {/* Sophisticated Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

              {/* Main Content Area */}
              <div className="absolute inset-0 p-10 flex flex-col justify-between z-10">
                <div className="flex justify-between items-start">
                  <span className="text-[10px] font-medium text-white/40 tracking-[0.3em]">0{index + 1}</span>
                </div>

                <div className="space-y-4">
                  <h3 className="font-display text-3xl sm:text-4xl text-white transition-transform duration-500 group-hover:-translate-y-2">
                    {s.title}
                  </h3>
                  
                  {/* Hidden by default, slides up on hover */}
                  <div className="max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100 transition-all duration-700 ease-in-out overflow-hidden">
                    <p className="text-white/70 leading-relaxed mb-6 max-w-sm text-sm sm:text-base">
                      {s.desc}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {s.tags.map((t) => (
                        <span key={t} className="text-[9px] uppercase tracking-[0.2em] px-4 py-1.5 rounded-full bg-white/10 border border-white/10 text-white/90 backdrop-blur-md">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Subtle Border Glow on Hover */}
              <div className="absolute inset-0 border border-primary/0 group-hover:border-primary/30 rounded-[2rem] transition-colors duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};