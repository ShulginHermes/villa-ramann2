import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';

export default function InquireSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [form, setForm] = useState({ name: '', arrival: '', departure: '', guests: '', email: '', notes: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass = `
    bg-transparent border-0 border-b border-outline-variant/60 focus:border-primary 
    text-foreground font-serif text-xl lg:text-2xl placeholder:text-muted-foreground/50 
    placeholder:font-serif outline-none transition-all duration-300 pb-2 w-full
    focus:ring-0
  `;

  return (
    <section id="inquire" className="min-h-screen py-section bg-surface section-rule flex items-center">
      <div className="max-w-7xl mx-auto px-8 lg:px-16 w-full" ref={ref}>
        <div className="grid lg:grid-cols-[1fr,420px] gap-24 items-start">
          {/* Left: form */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="text-[11px] font-sans font-semibold tracking-widest-label uppercase text-primary mb-6"
            >
              Begin Your Journey
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-display text-foreground mb-14"
            >
              Reserve your<br /><em>private sanctuary.</em>
            </motion.h2>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="flex flex-col items-start gap-6"
              >
                <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: '#0046A7' }}>
                  <Check className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl text-foreground mb-3">Thank you, {form.name || 'Dear Guest'}.</h3>
                  <p className="font-sans text-body-lg text-foreground/70 max-w-md leading-relaxed">
                    Your enquiry has been received. Our villa manager will be in touch within 4 hours to confirm availability and discuss your bespoke itinerary.
                  </p>
                </div>
              </motion.div>
            ) : (
              <motion.form
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.25 }}
                onSubmit={handleSubmit}
                className="space-y-10"
              >
                {/* Sentence-style inputs */}
                <div>
                  <label className="font-sans text-[11px] font-semibold tracking-widest-label uppercase text-muted-foreground block mb-3">Your Name</label>
                  <input
                    type="text"
                    placeholder="e.g. Victoria Hamilton"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={inputClass}
                    required
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-10">
                  <div>
                    <label className="font-sans text-[11px] font-semibold tracking-widest-label uppercase text-muted-foreground block mb-3">Arrival Date</label>
                    <input
                      type="date"
                      value={form.arrival}
                      onChange={(e) => setForm({ ...form, arrival: e.target.value })}
                      className={inputClass}
                      required
                    />
                  </div>
                  <div>
                    <label className="font-sans text-[11px] font-semibold tracking-widest-label uppercase text-muted-foreground block mb-3">Departure Date</label>
                    <input
                      type="date"
                      value={form.departure}
                      onChange={(e) => setForm({ ...form, departure: e.target.value })}
                      className={inputClass}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="font-sans text-[11px] font-semibold tracking-widest-label uppercase text-muted-foreground block mb-3">Number of Guests</label>
                  <select
                    value={form.guests}
                    onChange={(e) => setForm({ ...form, guests: e.target.value })}
                    className={`${inputClass} cursor-pointer`}
                    required
                  >
                    <option value="" disabled>Select number of guests</option>
                    {[...Array(12)].map((_, i) => (
                      <option key={i + 1} value={i + 1}>{i + 1} {i === 0 ? 'Guest' : 'Guests'}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="font-sans text-[11px] font-semibold tracking-widest-label uppercase text-muted-foreground block mb-3">Email Address</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={inputClass}
                    required
                  />
                </div>

                <div>
                  <label className="font-sans text-[11px] font-semibold tracking-widest-label uppercase text-muted-foreground block mb-3">Special Requests (Optional)</label>
                  <textarea
                    placeholder="Chef preferences, occasion, transfer needs…"
                    value={form.notes}
                    onChange={(e) => setForm({ ...form, notes: e.target.value })}
                    rows={3}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="group inline-flex items-center gap-3 px-10 py-4 bg-primary text-white font-sans font-semibold text-[13px] tracking-label uppercase rounded magnetic-btn"
                  >
                    Send Enquiry
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                  <p className="mt-4 font-sans text-xs text-muted-foreground">
                    We respond within 4 hours. No payment required at this stage.
                  </p>
                </div>
              </motion.form>
            )}
          </div>

          {/* Right: info panel */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.0, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="sticky top-24 space-y-6"
          >
            {/* Hero image */}
            <div className="img-zoom rounded-xl overflow-hidden aspect-[3/4]">
              <img
                src="https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?w=700&q=85&auto=format&fit=crop"
                alt="Villa at golden hour"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Quick info */}
            <div className="glass-card rounded-xl p-6 space-y-4">
              {[
                { label: 'Nightly Rate', value: 'From €4,800' },
                { label: 'Minimum Stay', value: '3 nights (peak: 7)' },
                { label: 'Security Deposit', value: '€5,000 (refundable)' },
                { label: 'Included', value: 'Concierge, Housekeeper' },
              ].map((item) => (
                <div key={item.label} className="flex justify-between items-center text-sm border-b border-outline-variant/30 pb-3 last:border-0 last:pb-0">
                  <span className="font-sans text-muted-foreground">{item.label}</span>
                  <span className="font-sans font-medium text-foreground">{item.value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
