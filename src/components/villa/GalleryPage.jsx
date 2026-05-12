import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1200&q=85&auto=format&fit=crop', alt: 'Infinity pool at dusk', label: 'Infinity Pool — West Terrace' },
  { src: 'https://images.unsplash.com/photo-1613545325278-f24b0cae1224?w=800&q=85&auto=format&fit=crop', alt: 'Master bedroom suite', label: 'Master Suite — Upper Level' },
  { src: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=85&auto=format&fit=crop', alt: 'Living area with sea view', label: 'Grand Salon — Ground Floor' },
  { src: 'https://images.unsplash.com/photo-1586105251261-72a756497a11?w=900&q=85&auto=format&fit=crop', alt: 'Private outdoor dining', label: 'Al Fresco Dining — East Veranda' },
  { src: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&q=85&auto=format&fit=crop', alt: 'Bathroom with sea view', label: 'En-Suite — Guest Room 3' },
  { src: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1000&q=85&auto=format&fit=crop', alt: 'Villa aerial view', label: 'Estate — Aerial Perspective' },
  { src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1000&q=85&auto=format&fit=crop', alt: 'Villa garden', label: 'Mediterranean Gardens' },
  { src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1000&q=85&auto=format&fit=crop', alt: 'Kitchen', label: 'Gourmet Kitchen' },
  { src: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1000&q=85&auto=format&fit=crop', alt: 'Dining room', label: 'Indoor Dining Hall' },
  { src: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1000&q=85&auto=format&fit=crop', alt: 'Spa area', label: 'Wellness Center' },
  { src: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1000&q=85&auto=format&fit=crop', alt: 'Guest room', label: 'Luxury Guest Suite' },
  { src: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1000&q=85&auto=format&fit=crop', alt: 'Outdoor lounge', label: 'Poolside Lounge' },
  { src: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1000&q=85&auto=format&fit=crop', alt: 'Study room', label: 'Private Library' },
  { src: 'https://images.unsplash.com/photo-1600570997533-f89ba0171e48?w=1000&q=85&auto=format&fit=crop', alt: 'Entrance hall', label: 'Grand Entrance' },
  { src: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1000&q=85&auto=format&fit=crop', alt: 'Sea view terrace', label: 'Sunset Deck' },
  { src: 'https://images.unsplash.com/photo-1600566753086-00f18fb6f3ea?w=1000&q=85&auto=format&fit=crop', alt: 'Walk-in closet', label: 'Master Wardrobe' },
  { src: 'https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=1000&q=85&auto=format&fit=crop', alt: 'Garden path', label: 'Evening Walkway' },
  { src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1000&q=85&auto=format&fit=crop', alt: 'Laundry area', label: 'Utility Room' },
  { src: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1000&q=85&auto=format&fit=crop', alt: 'Gym', label: 'Fitness Suite' },
  { src: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=1000&q=85&auto=format&fit=crop', alt: 'Patio', label: 'Courtyard' }
];

function Lightbox({ images, index, onClose, onPrev, onNext }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        onClick={onClose}
      >
        <div className="absolute inset-0 bg-foreground/95 backdrop-blur-2xl" />
        
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-full max-w-6xl h-full flex flex-col items-center justify-center"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={images[index].src}
            alt={images[index].alt}
            className="w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
          />
          <div className="mt-6 text-center">
            <p className="text-white text-[11px] font-sans font-semibold tracking-widest-label uppercase opacity-80 mb-1">
              {images[index].label}
            </p>
            <p className="text-white/40 text-[10px] font-sans font-medium uppercase">
              {index + 1} / {images.length}
            </p>
          </div>
        </motion.div>

        {/* Controls */}
        <button onClick={onClose} className="absolute top-8 right-8 z-20 text-white/50 hover:text-white transition-colors">
          <X className="w-8 h-8" />
        </button>
        
        <button onClick={(e) => { e.stopPropagation(); onPrev(); }}
          className="absolute left-8 top-1/2 -translate-y-1/2 z-20 text-white/50 hover:text-white transition-colors p-4 glass-card rounded-full hidden md:block">
          <ChevronLeft className="w-6 h-6" />
        </button>
        
        <button onClick={(e) => { e.stopPropagation(); onNext(); }}
          className="absolute right-8 top-1/2 -translate-y-1/2 z-20 text-white/50 hover:text-white transition-colors p-4 glass-card rounded-full hidden md:block">
          <ChevronRight className="w-6 h-6" />
        </button>
      </motion.div>
    </AnimatePresence>
  );
}

export default function GalleryPage() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  return (
    <div className="bg-surface py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <header className="mb-20">
          <p className="text-[11px] font-sans font-semibold tracking-widest-label uppercase text-primary mb-4">The Estate Gallery</p>
          <h1 className="font-serif text-hero text-foreground mb-8">Capturing Serenity.</h1>
          <p className="font-sans text-body-lg text-muted-foreground max-w-2xl leading-relaxed">
            Every corner of Villa Ramann is a testament to the art of luxury living. Explore the private sanctuary where contemporary architecture meets the timeless beauty of the Mediterranean.
          </p>
        </header>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="img-zoom rounded-xl overflow-hidden cursor-pointer relative group break-inside-avoid"
              onClick={() => setLightboxIndex(i)}
            >
              <img src={img.src} alt={img.alt} className="w-full h-auto object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-6">
                <p className="text-white text-[11px] font-sans font-semibold tracking-widest-label uppercase translate-y-2 group-hover:translate-y-0 transition-transform duration-400">
                  {img.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={galleryImages}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={() => setLightboxIndex((p) => Math.max(0, p - 1))}
          onNext={() => setLightboxIndex((p) => Math.min(galleryImages.length - 1, p + 1))}
        />
      )}
    </div>
  );
}
