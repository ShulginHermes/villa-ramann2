import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Clock, Plane, Anchor, ShoppingBag, UtensilsCrossed } from 'lucide-react';

const places = [
  { icon: Anchor, name: 'Limassol Marina', dist: '8 min drive', cat: 'Waterfront' },
  { icon: UtensilsCrossed, name: 'Nobu Limassol', dist: '12 min', cat: 'Fine Dining' },
  { icon: ShoppingBag, name: 'My Mall Limassol', dist: '15 min', cat: 'Retail' },
  { icon: Plane, name: 'Larnaca International', dist: '45 min', cat: 'Airport' },
  { icon: MapPin, name: 'Old Town Limassol', dist: '10 min', cat: 'Culture' },
  { icon: Anchor, name: 'Aphrodite Hills Resort', dist: '35 min', cat: 'Golf & Spa' },
];

const experienceImages = [
  {
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80&auto=format&fit=crop',
    label: 'Limassol Marina',
  },
  {
    src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80&auto=format&fit=crop',
    label: 'Local Cuisine',
  },
  {
    src: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80&auto=format&fit=crop',
    label: 'Mediterranean Sea',
  },
];

export default function NearbySection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="location" className="py-section bg-surface section-rule">
      <div className="max-w-7xl mx-auto px-8 lg:px-16" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Left */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="text-[11px] font-sans font-semibold tracking-widest-label uppercase text-primary mb-4"
            >
              Location
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-title text-foreground mb-6"
            >
              At the heart of<br /><em>Cyprus' riviéra.</em>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-sans text-body-lg text-foreground/70 leading-relaxed mb-12 max-w-md"
            >
              Positioned on Limassol's exclusive coastal strip — minutes from the marina, world-class restaurants, and Cyprus' most celebrated vineyards — with the island's archaeological treasures within reach.
            </motion.p>

            {/* Places list */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-px"
            >
              {places.map((p, i) => (
                <div
                  key={p.name}
                  className="flex items-center justify-between py-4 border-b border-outline-variant/40 group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded flex items-center justify-center" style={{ backgroundColor: 'rgba(0,70,167,0.07)' }}>
                      <p.icon className="w-4 h-4" style={{ color: '#0046A7' }} />
                    </div>
                    <div>
                      <p className="font-sans font-medium text-foreground text-sm">{p.name}</p>
                      <p className="font-sans text-xs text-muted-foreground tracking-label uppercase">{p.cat}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 text-muted-foreground">
                    <Clock className="w-3.5 h-3.5" />
                    <span className="font-sans text-sm">{p.dist}</span>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: imagery */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.0, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-2 gap-3"
          >
            {/* Map placeholder — styled to brand */}
            <div
              className="col-span-2 rounded-xl overflow-hidden h-56 relative flex items-center justify-center mb-0"
              style={{ backgroundColor: '#DBE3EF' }}
            >
              <img
                src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=900&q=80&auto=format&fit=crop&sat=-60"
                alt="Aerial view of Limassol coast"
                className="w-full h-full object-cover opacity-60"
                style={{ filter: 'saturate(0.4) brightness(1.05)' }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="glass-card rounded-xl px-5 py-3 flex items-center gap-2">
                  <MapPin className="w-4 h-4" style={{ color: '#0046A7' }} />
                  <span className="font-sans text-sm font-medium text-foreground">Limassol, Cyprus</span>
                </div>
              </div>
            </div>

            {experienceImages.map((img, i) => (
              <div key={i} className={`img-zoom rounded-lg overflow-hidden ${i === 0 ? 'col-span-2' : 'col-span-1'} ${i === 0 ? 'h-40' : 'h-36'}`}>
                <img src={img.src} alt={img.label} className="w-full h-full object-cover" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
