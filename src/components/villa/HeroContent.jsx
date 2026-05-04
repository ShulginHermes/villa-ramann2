import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function HeroContent() {
  const scrollToOverview = () => {
    document.getElementById('overview')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToInquire = () => {
    document.getElementById('inquire')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToGallery = () => {
    document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
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
          Villa Ramann
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
            onClick={scrollToInquire}
            className="px-10 py-4 bg-primary text-white text-[13px] font-sans font-semibold tracking-label uppercase rounded magnetic-btn min-w-[180px]"
          >
            Inquire Now
          </button>
          <button
            onClick={scrollToGallery}
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
    </>
  );
}
