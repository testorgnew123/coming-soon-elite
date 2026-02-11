import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroBg}
        alt="Luxury city skyline at twilight with modern residential towers"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-hero-overlay" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="animate-fade-in-up">
          <div className="inline-block mb-6">
            <span className="text-sm font-body uppercase tracking-[0.3em] text-gold-light/80 border gold-border border-gold-light/20 px-6 py-2 rounded-full">
              Coming Soon
            </span>
          </div>
        </div>

        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up-delay-1 leading-tight">
          <span className="block text-cream">Something Exceptional</span>
          <span className="block text-gold-gradient">is Coming Soon</span>
        </h1>

        <p className="font-body text-lg md:text-xl text-cream/70 mb-10 max-w-2xl mx-auto animate-fade-in-up-delay-2 font-light tracking-wide">
          Redefining Affordable &amp; Premium Living
        </p>

        <div className="animate-fade-in-up-delay-3">
          <a
            href="#notify"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-body font-semibold px-8 py-4 rounded text-sm uppercase tracking-[0.15em] transition-all duration-300 hover:shadow-[0_0_30px_hsl(43_72%_52%/0.3)] hover:scale-105"
          >
            Get Notified
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in-up-delay-3">
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-gold/50 to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
