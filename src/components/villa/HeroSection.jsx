import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function HeroSection() {
  const scrollToOverview = () => {
    document.getElementById('overview')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden">
      {/* Background image with Ken Burns */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1920&q=90&auto=format&fit=crop"
          alt="Azure Serenity Villa — Cyprus"
          className="w-full h-full object-cover ken-burns"
        />
        {/* Multi-layer gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="text-white/70 text-[11px] font-sans font-semibold tracking-widest-label uppercase mb-8 lg:mb-10"
        >
          Limassol, Cyprus — Mediterranean Private Estate
        </motion.p>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-white text-hero mb-6 max-w-4xl"
          style={{ fontWeight: 300 }}
        >
          Azure Serenity
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="text-white/80 font-sans font-light text-lg lg:text-xl max-w-xl leading-relaxed mb-12"
        >
          A private sanctuary where the Levantine sky meets the sea — designed for those who collect extraordinary moments.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row gap-4 items-center"
        >
          <button
            onClick={() => document.getElementById('inquire')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-10 py-4 bg-primary text-white text-[13px] font-sans font-semibold tracking-label uppercase rounded magnetic-btn min-w-[180px]"
          >
            Inquire Now
          </button>
          <button
            onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-10 py-4 border border-white/60 text-white text-[13px] font-sans font-semibold tracking-label uppercase rounded hover:bg-white/10 transition-colors duration-300 min-w-[180px]"
          >
            View Gallery
          </button>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 1.0 }}
          className="absolute bottom-28 left-1/2 -translate-x-1/2 flex gap-12 sm:gap-20"
        >
          {[
            { value: '6', label: 'Bedrooms' },
            { value: '850m²', label: 'Living Area' },
            { value: '∞', label: 'Pool & Sea' },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-serif text-white text-2xl lg:text-3xl" style={{ fontWeight: 300 }}>{s.value}</p>
              <p className="text-white/60 text-[11px] font-sans font-semibold tracking-widest-label uppercase mt-1">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        onClick={scrollToOverview}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white/50 hover:text-white/90 transition-colors duration-300"
      >
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </motion.button>
    </section>
  );
}
