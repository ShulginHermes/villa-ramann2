import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  {
    src: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1200&q=85&auto=format&fit=crop',
    alt: 'Infinity pool at dusk',
    label: 'Infinity Pool — West Terrace',
    span: 'col-span-2 row-span-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1613545325278-f24b0cae1224?w=800&q=85&auto=format&fit=crop',
    alt: 'Master bedroom suite',
    label: 'Master Suite — Upper Level',
    span: 'col-span-1 row-span-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=85&auto=format&fit=crop',
    alt: 'Living area with sea view',
    label: 'Grand Salon — Ground Floor',
    span: 'col-span-1 row-span-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1586105251261-72a756497a11?w=900&q=85&auto=format&fit=crop',
    alt: 'Private outdoor dining',
    label: 'Al Fresco Dining — East Veranda',
    span: 'col-span-1 row-span-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&q=85&auto=format&fit=crop',
    alt: 'Bathroom with sea view',
    label: 'En-Suite — Guest Room 3',
    span: 'col-span-1 row-span-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1000&q=85&auto=format&fit=crop',
    alt: 'Villa aerial view',
    label: 'Estate — Aerial Perspective',
    span: 'col-span-2 row-span-1',
  },
];

function Lightbox({ images, index, onClose, onPrev, onNext }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="fixed inset-0 z-[100] flex items-center justify-center"
        onClick={onClose}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-foreground/90 backdrop-blur-xl" />

        {/* Image */}
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 max-w-5xl w-full mx-6"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={images[index].src}
            alt={images[index].alt}
            className="w-full max-h-[80vh] object-contain rounded-lg"
          />
          <p className="text-center mt-4 text-white/60 text-[11px] font-sans font-semibold tracking-widest-label uppercase">
            {images[index].label}
          </p>
        </motion.div>

        {/* Controls */}
        <button onClick={onClose} className="absolute top-6 right-6 z-20 text-white/70 hover:text-white transition-colors p-2">
          <X className="w-6 h-6" />
        </button>
        {index > 0 && (
          <button onClick={(e) => { e.stopPropagation(); onPrev(); }}
            className="absolute left-6 top-1/2 -translate-y-1/2 z-20 text-white/70 hover:text-white transition-colors p-3 glass-card rounded-full">
            <ChevronLeft className="w-5 h-5" />
          </button>
        )}
        {index < images.length - 1 && (
          <button onClick={(e) => { e.stopPropagation(); onNext(); }}
            className="absolute right-6 top-1/2 -translate-y-1/2 z-20 text-white/70 hover:text-white transition-colors p-3 glass-card rounded-full">
            <ChevronRight className="w-5 h-5" />
          </button>
        )}
        {/* Counter */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {images.map((_, i) => (
            <div key={i} className={`h-0.5 transition-all duration-300 rounded-full ${i === index ? 'w-6 bg-white' : 'w-2 bg-white/30'}`} />
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function GallerySection() {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="gallery" className="py-section bg-surface section-rule">
      <div className="max-w-7xl mx-auto px-8 lg:px-16" ref={ref}>
        {/* Header */}
        <div className="flex items-end justify-between mb-16">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="text-[11px] font-sans font-semibold tracking-widest-label uppercase text-primary mb-4"
            >
              Visual Story
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-title text-foreground"
            >
              The Villa in Light
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden md:block font-sans text-sm text-muted-foreground text-right max-w-[220px] leading-relaxed"
          >
            Click any image to explore the full gallery
          </motion.p>
        </div>

        {/* Staggered Grid */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] md:auto-rows-[220px] gap-3"
        >
          {images.map((img, i) => (
            <div
              key={i}
              className={`${img.span} img-zoom rounded-lg overflow-hidden cursor-pointer relative group`}
              onClick={() => setLightboxIndex(i)}
            >
              <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
              {/* Hover overlay with label */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-4">
                <p className="text-white text-[11px] font-sans font-semibold tracking-widest-label uppercase translate-y-2 group-hover:translate-y-0 transition-transform duration-400">
                  {img.label}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          images={images}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={() => setLightboxIndex((p) => Math.max(0, p - 1))}
          onNext={() => setLightboxIndex((p) => Math.min(images.length - 1, p + 1))}
        />
      )}
    </section>
  );
}
