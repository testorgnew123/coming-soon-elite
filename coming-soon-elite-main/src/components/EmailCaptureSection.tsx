import { useState } from "react";
import { Mail } from "lucide-react";

const EmailCaptureSection = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section id="notify" className="py-24 md:py-32 bg-background">
      <div className="max-w-xl mx-auto px-6 text-center">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full border border-accent/30 mb-8">
          <Mail className="w-6 h-6 text-accent" strokeWidth={1.5} />
        </div>

        <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
          Stay in the Loop
        </h2>
        <p className="font-body text-muted-foreground mb-10 font-light">
          Be the first to know when we launch. Enter your email below.
        </p>

        {submitted ? (
          <div className="py-6 px-8 rounded-lg border border-accent/20 bg-accent/5">
            <p className="font-body text-foreground font-medium">Thank you! We'll be in touch.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              required
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-5 py-4 rounded bg-card border border-border text-foreground font-body text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent/40 transition-all"
            />
            <button
              type="submit"
              className="px-8 py-4 rounded bg-accent text-accent-foreground font-body font-semibold text-sm uppercase tracking-[0.15em] transition-all duration-300 hover:shadow-[0_0_20px_hsl(43_72%_52%/0.25)] hover:scale-[1.02] shrink-0"
            >
              Notify Me
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailCaptureSection;
