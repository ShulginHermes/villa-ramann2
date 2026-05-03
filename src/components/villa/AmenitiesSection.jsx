import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Waves, ChefHat, Car, Wifi, Dumbbell, Wind, Shield, Coffee } from 'lucide-react';

const amenities = [
  { icon: Waves, label: 'Infinity Pool', desc: '18-metre heated infinity pool aligned to the sunset horizon' },
  { icon: ChefHat, label: 'Private Chef', desc: 'In-residence culinary team serving Mediterranean & international cuisine' },
  { icon: Car, label: 'Chauffeured Transfer', desc: 'S-Class Mercedes fleet; airport, marina, and city transfers included' },
  { icon: Wifi, label: 'Fibre Connectivity', desc: '1Gbps symmetric fibre with mesh Wi-Fi throughout the estate' },
  { icon: Dumbbell, label: 'Wellness Studio', desc: 'Equipped gym, yoga deck, and private spa with hammam' },
  { icon: Wind, label: 'Climate Control', desc: 'Zoned HVAC with geothermal cooling for year-round comfort' },
  { icon: Shield, label: '24/7 Concierge', desc: 'Dedicated villa manager available around the clock' },
  { icon: Coffee, label: 'Daily Housekeeping', desc: 'Twice-daily housekeeping service with turn-down ritual' },
];

const tags = [
  'Private Pool', 'Sea View', 'Beachfront', 'Air Conditioning',
  'Pet Friendly', 'Private Parking', 'Helipad Access', 'Wine Cellar',
  'Home Cinema', 'Smart Home', 'BBQ Terrace', 'Outdoor Shower',
];

export default function AmenitiesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="amenities" className="py-section" style={{ backgroundColor: '#F3F4F5' }}>
      <div className="max-w-7xl mx-auto px-8 lg:px-16" ref={ref}>
        {/* Header */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-[11px] font-sans font-semibold tracking-widest-label uppercase text-primary mb-4"
        >
          Inclusions
        </motion.p>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-title text-foreground max-w-md"
          >
            Every detail,<br />considered.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="font-sans text-body-md text-muted-foreground max-w-sm leading-relaxed"
          >
            From helipad to home cinema, every amenity is curated to eliminate every friction point of a luxury stay.
          </motion.p>
        </div>

        {/* Amenity Grid */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-outline-variant/25 rounded-xl overflow-hidden border border-outline-variant/25 mb-16"
        >
          {amenities.map((a, i) => (
            <motion.div
              key={a.label}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.06 }}
              className="bg-surface-low p-8 flex flex-col gap-4 group hover:bg-white transition-colors duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/8 flex items-center justify-center" style={{ backgroundColor: 'rgba(0,70,167,0.08)' }}>
                <a.icon className="w-5 h-5" style={{ color: '#0046A7' }} />
              </div>
              <div>
                <p className="font-sans font-semibold text-foreground mb-2">{a.label}</p>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Feature tags */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-[10px] font-sans font-semibold tracking-widest-label uppercase text-muted-foreground mb-5">
            Property Features
          </p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 text-[12px] font-sans font-medium rounded-full"
                style={{
                  backgroundColor: '#DBE3EF',
                  color: '#0046A7',
                  border: '1px solid rgba(0,70,167,0.15)',
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
