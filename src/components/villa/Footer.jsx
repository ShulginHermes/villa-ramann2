export default function Footer() {
  return (
    <footer className="py-16 border-t border-outline-variant/40 bg-surface">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <p className="font-serif text-lg text-foreground tracking-wide mb-1">Azure Serenity</p>
            <p className="font-sans text-xs tracking-widest-label uppercase text-muted-foreground">Limassol, Cyprus — Private Estate</p>
          </div>
          <div className="flex flex-col md:flex-row gap-4 md:gap-10">
            {['Privacy Policy', 'Terms of Stay', 'Contact'].map((link) => (
              <button key={link} className="font-sans text-xs tracking-label uppercase text-muted-foreground hover:text-primary transition-colors duration-300 text-left">
                {link}
              </button>
            ))}
          </div>
          <p className="font-sans text-xs text-muted-foreground">
            © 2024 Azure Serenity. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
