import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const navLinks = ['Overview', 'Gallery', 'Amenities', 'Location', 'Testimonials'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 lg:px-16 flex items-center justify-between h-20">
        {/* Logo */}
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex flex-col items-start gap-0.5 group">
          <span className="font-serif text-lg tracking-wide text-white group-hover:text-primary-light transition-colors duration-300"
            style={{ color: scrolled ? '#0046A7' : 'white' }}>
            Azure Serenity
          </span>
          <span className="text-[10px] tracking-widest-label uppercase font-sans font-semibold"
            style={{ color: scrolled ? '#737784' : 'rgba(255,255,255,0.7)' }}>
            Cyprus · Private Villa
          </span>
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="text-[13px] font-sans font-medium tracking-label uppercase transition-colors duration-300"
              style={{ color: scrolled ? '#434653' : 'rgba(255,255,255,0.85)' }}
            >
              {link}
            </button>
          ))}
        </div>

        {/* CTA */}
        <button
          onClick={() => scrollTo('inquire')}
          className={`hidden md:block px-6 py-2.5 text-[13px] font-sans font-semibold tracking-label uppercase rounded transition-all duration-300 magnetic-btn ${
            scrolled
              ? 'bg-primary text-white border border-primary/80'
              : 'border border-white/70 text-white hover:bg-white/10'
          }`}
        >
          Inquire
        </button>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          style={{ color: scrolled ? '#0046A7' : 'white' }}
        >
          <span className={`block w-5 h-px transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}
            style={{ backgroundColor: scrolled ? '#0046A7' : 'white' }} />
          <span className={`block w-5 h-px transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}
            style={{ backgroundColor: scrolled ? '#0046A7' : 'white' }} />
          <span className={`block w-5 h-px transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}
            style={{ backgroundColor: scrolled ? '#0046A7' : 'white' }} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden glass border-t border-outline-variant/30 px-8 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <button key={link} onClick={() => scrollTo(link)}
              className="text-[13px] font-sans font-medium tracking-label uppercase text-left text-foreground/80 hover:text-primary transition-colors">
              {link}
            </button>
          ))}
          <button onClick={() => scrollTo('inquire')}
            className="mt-2 px-6 py-3 text-[13px] font-sans font-semibold tracking-label uppercase bg-primary text-white rounded magnetic-btn w-full">
            Inquire Now
          </button>
        </div>
      )}
    </motion.nav>
  );
}
