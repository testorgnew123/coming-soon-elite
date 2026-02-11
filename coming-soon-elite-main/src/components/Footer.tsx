const Footer = () => {
  return (
    <footer className="py-8 bg-primary border-t border-gold/10">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="font-body text-xs text-cream/40 tracking-wide">
          Designed &amp; Maintained by{" "}
          <a
            href="https://www.kyleinnovate.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold/60 hover:text-gold transition-colors duration-300 underline underline-offset-2"
          >
            Kyle Innovate
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
