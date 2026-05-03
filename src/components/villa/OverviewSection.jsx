import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const features = [
  { label: 'Arrival', value: '3 PM' },
  { label: 'Departure', value: '12 PM' },
  { label: 'Guests', value: 'Up to 12' },
  { label: 'From', value: '€4,800 / night' },
];

const highlights = [
  'Private infinity pool overlooking the sea',
  'Dedicated concierge & personal chef available',
  'Direct beach access via private pathway',
  'Helipad & private marina berth on request',
  'Smart home automation throughout',
  '850m² of indoor-outdoor living',
];

export default function OverviewSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="overview" className="py-section bg-surface">
      <div className="max-w-7xl mx-auto px-8 lg:px-16" ref={ref}>
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-[11px] font-sans font-semibold tracking-widest-label uppercase text-primary mb-6"
        >
          The Estate
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Left: narrative */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-display text-foreground mb-8"
            >
              Where the sea
              <br />
              <em>becomes home.</em>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-sans text-body-lg text-foreground/70 leading-relaxed mb-6 max-w-lg"
            >
              Perched on the sun-bleached cliffs of Limassol, Azure Serenity is a masterwork of contemporary Mediterranean architecture. Conceived by Nicosia-based studio Atelier Blanc, the estate dissolves the boundary between its limestone interiors and the Levantine horizon.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-sans text-body-lg text-foreground/70 leading-relaxed mb-12 max-w-lg"
            >
              Six bedroom suites, each with an unobstructed sea panorama. An 18-metre infinity pool aligned to the summer solstice sunset. A dedicated team of staff, invisible yet ever-present.
            </motion.p>

            {/* Highlights */}
            <motion.ul
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-4"
            >
              {highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-4 group">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span className="font-sans text-body-md text-foreground/80">{h}</span>
                </li>
              ))}
            </motion.ul>
          </div>

          {/* Right: image + stat cards */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1.0, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="img-zoom rounded-lg overflow-hidden mb-8 aspect-[4/3]"
            >
              <img
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=900&q=85&auto=format&fit=crop"
                alt="Villa exterior with infinity pool"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Quick facts grid */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-px bg-outline-variant/30 rounded-lg overflow-hidden border border-outline-variant/30"
            >
              {features.map((f) => (
                <div key={f.label} className="bg-surface-container/60 px-5 py-5 flex flex-col gap-1">
                  <p className="text-[10px] font-sans font-semibold tracking-widest-label uppercase text-muted-foreground">
                    {f.label}
                  </p>
                  <p className="font-serif text-lg text-foreground">{f.value}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
