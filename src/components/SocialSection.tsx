import { Linkedin, Instagram, Facebook } from "lucide-react";

const socials = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
];

const SocialSection = () => {
  return (
    <section className="py-16 bg-navy-gradient">
      <div className="max-w-xl mx-auto px-6 text-center">
        <p className="font-body text-sm uppercase tracking-[0.2em] text-cream/40 mb-8">
          Follow Us
        </p>
        <div className="flex items-center justify-center gap-6">
          {socials.map((item) => (
            <a
              key={item.label}
              href={item.href}
              aria-label={item.label}
              className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-gold/20 text-gold/60 transition-all duration-300 hover:border-gold/60 hover:text-gold hover:shadow-[0_0_15px_hsl(43_72%_52%/0.15)]"
            >
              <item.icon className="w-5 h-5" strokeWidth={1.5} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialSection;
