import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    quote: "The most transcendent week of our lives. Azure Serenity doesn't just offer a holiday — it offers a complete recalibration of what luxury means. We've stayed in properties across Mykonos, Ibiza, and St Barths. Nothing compares.",
    author: 'Victoria H.',
    origin: 'London, UK',
    stay: 'July 2024 — 7 nights',
    rating: 5,
  },
  {
    quote: "We chose Azure Serenity for our anniversary and it surpassed every expectation. The private chef's tasting menu on the terrace, watching the sun dissolve into the Levantine horizon — that image will stay with us forever.",
    author: 'Marc & Élise D.',
    origin: 'Paris, France',
    stay: 'September 2024 — 5 nights',
    rating: 5,
  },
  {
    quote: "As a hospitality architect, I am rarely impressed by design. Azure Serenity's interplay of indoor and outdoor — the materiality, the proportions, the stillness — is a genuine architectural achievement. And the team is extraordinary.",
    author: 'Kenji T.',
    origin: 'Tokyo, Japan',
    stay: 'August 2024 — 10 nights',
    rating: 5,
  },
  {
    quote: "We hosted a private board retreat here for eight colleagues. The villa handled everything: transfers, catering, presentation setup. The result was our most productive — and most beautiful — offsite in twelve years.",
    author: 'Sarah M.',
    origin: 'Dubai, UAE',
    stay: 'October 2024 — 4 nights',
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  const prev = () => setActive((p) => Math.max(0, p - 1));
  const next = () => setActive((p) => Math.min(testimonials.length - 1, p + 1));

  const t = testimonials[active];

  return (
    <section id="testimonials" className="py-section section-rule overflow-hidden" style={{ backgroundColor: '#F3F4F5' }}>
      <div className="max-w-7xl mx-auto px-8 lg:px-16" ref={ref}>
        {/* Header */}
        <div className="flex items-end justify-between mb-20">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="text-[11px] font-sans font-semibold tracking-widest-label uppercase text-primary mb-4"
            >
              Guest Voices
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-title text-foreground"
            >
              Words that remain.
            </motion.h2>
          </div>

          {/* Nav arrows */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden md:flex gap-3"
          >
            <button
              onClick={prev}
              disabled={active === 0}
              className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center text-foreground/50 hover:text-primary hover:border-primary transition-all duration-300 disabled:opacity-30"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={next}
              disabled={active === testimonials.length - 1}
              className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center text-foreground/50 hover:text-primary hover:border-primary transition-all duration-300 disabled:opacity-30"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>

        {/* Testimonial */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="grid lg:grid-cols-[1fr,320px] gap-16 items-start"
          >
            {/* Quote */}
            <div>
              {/* Stars */}
              <div className="flex gap-1 mb-8">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" style={{ color: '#0046A7' }} />
                ))}
              </div>
              <blockquote className="font-serif text-2xl lg:text-3xl text-foreground leading-relaxed mb-10" style={{ fontWeight: 300, fontStyle: 'italic' }}>
                "{t.quote}"
              </blockquote>
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-sans font-semibold" style={{ backgroundColor: '#0046A7' }}>
                  {t.author.charAt(0)}
                </div>
                <div>
                  <p className="font-sans font-semibold text-foreground">{t.author}</p>
                  <p className="font-sans text-sm text-muted-foreground">{t.origin} · {t.stay}</p>
                </div>
              </div>
            </div>

            {/* Side card */}
            <div className="glass-card rounded-xl p-8 flex flex-col gap-6">
              <p className="font-sans text-[10px] font-semibold tracking-widest-label uppercase text-muted-foreground">Our Guests Say</p>
              <div className="flex flex-col gap-3">
                {[
                  { label: 'Overall Experience', val: 98 },
                  { label: 'Staff & Service', val: 100 },
                  { label: 'Location & Views', val: 100 },
                  { label: 'Cleanliness', val: 99 },
                ].map((r) => (
                  <div key={r.label}>
                    <div className="flex justify-between mb-1.5">
                      <span className="font-sans text-xs text-foreground/70">{r.label}</span>
                      <span className="font-sans text-xs font-semibold text-primary">{r.val}%</span>
                    </div>
                    <div className="h-0.5 rounded-full bg-outline-variant/50">
                      <div className="h-full rounded-full" style={{ width: `${r.val}%`, backgroundColor: '#0046A7' }} />
                    </div>
                  </div>
                ))}
              </div>
              <p className="font-sans text-xs text-muted-foreground pt-2 border-t border-outline-variant/40">
                Based on 47 verified stays, 2022–2024
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Mobile nav */}
        <div className="flex gap-3 mt-12 md:hidden">
          <button onClick={prev} disabled={active === 0}
            className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center disabled:opacity-30">
            <ChevronLeft className="w-4 h-4 text-foreground" />
          </button>
          <button onClick={next} disabled={active === testimonials.length - 1}
            className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center disabled:opacity-30">
            <ChevronRight className="w-4 h-4 text-foreground" />
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex gap-2 mt-10">
          {testimonials.map((_, i) => (
            <button key={i} onClick={() => setActive(i)}
              className="h-0.5 rounded-full transition-all duration-400"
              style={{ width: i === active ? '24px' : '8px', backgroundColor: i === active ? '#0046A7' : '#C3C6D5' }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
