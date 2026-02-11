import { Home, Crown, MapPin } from "lucide-react";

const highlights = [
  {
    icon: Home,
    title: "Affordable Housing Projects",
    description: "Quality homes designed for modern families, delivering comfort and value in every detail.",
  },
  {
    icon: Crown,
    title: "Premium Luxury Residences",
    description: "Exquisite living spaces that set new standards in elegance, craftsmanship, and prestige.",
  },
  {
    icon: MapPin,
    title: "Strategic Prime Locations",
    description: "Thoughtfully chosen addresses that connect you to opportunity, culture, and lifestyle.",
  },
];

const HighlightsSection = () => {
  return (
    <section className="py-24 md:py-32 bg-navy-gradient">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-cream mb-4">
            What We Offer
          </h2>
          <div className="w-16 h-[2px] bg-accent mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {highlights.map((item, index) => (
            <div
              key={item.title}
              className={`group text-center p-8 rounded-lg border border-gold/10 bg-navy-light/30 backdrop-blur-sm transition-all duration-500 hover:border-gold/30 hover:bg-navy-light/50 hover:gold-glow animate-fade-in-up-delay-${index + 1}`}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-gold/20 mb-6 transition-all duration-500 group-hover:border-gold/50 group-hover:shadow-[0_0_20px_hsl(43_72%_52%/0.15)]">
                <item.icon className="w-7 h-7 text-gold" strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-xl font-semibold text-cream mb-3">
                {item.title}
              </h3>
              <p className="font-body text-sm text-cream/50 leading-relaxed font-light">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;
