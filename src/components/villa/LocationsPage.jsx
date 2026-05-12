import React from 'react';
import { motion } from 'framer-motion';
import { Utensils, MapPin, ShoppingBag, Car, Clock } from 'lucide-react';

const categories = [
  {
    title: 'Gourmet Dining',
    icon: Utensils,
    items: [
      {
        name: 'Nobu Limassol',
        description: 'World-renowned Japanese-Peruvian cuisine in a sophisticated beachfront setting. A signature culinary experience.',
        access: 'Short drive via the coastal road.',
        distance: '12 min drive',
        tags: ['Fine Dining', 'Sea View']
      },
      {
        name: 'Pralina Experience',
        description: 'An architectural and gastronomic gem on Makarios Avenue, famous for its exquisite desserts and international fusion menu.',
        access: 'Easy access via the city center.',
        distance: '15 min drive',
        tags: ['Fusion', 'Patisserie']
      },
      {
        name: 'Columbia Beach',
        description: 'The ultimate beach bar and restaurant. Perfect for sushi, fresh fish, and premium cocktails by the Mediterranean.',
        access: 'Direct coastal road access.',
        distance: '10 min drive',
        tags: ['Beach Club', 'Sushi']
      }
    ]
  },
  {
    title: 'Attractions & Culture',
    icon: MapPin,
    items: [
      {
        name: 'Kourion Ancient Amphitheatre',
        description: 'One of the island\'s most spectacular archaeological sites, featuring a magnificent Greco-Roman theater and mosaics.',
        access: 'Western highway route.',
        distance: '20 min drive',
        tags: ['History', 'Panoramic Views']
      },
      {
        name: 'Limassol Marina',
        description: 'A world-class marina combining luxury residences, fine dining, and boutique shopping on the water.',
        access: 'Direct coastal road access towards the Old Port.',
        distance: '8 min drive',
        tags: ['Marina', 'Lifestyle']
      },
      {
        name: 'Aphrodite Hills',
        description: 'The premier golf and spa resort in Cyprus, named after the Greek goddess of love.',
        access: 'Main highway (A6) towards Paphos.',
        distance: '35 min drive',
        tags: ['Golf', 'Wellness']
      }
    ]
  },
  {
    title: 'Luxury Shopping',
    icon: ShoppingBag,
    items: [
      {
        name: 'My Mall Limassol',
        description: 'The largest shopping mall in Cyprus, featuring international brands, an ice rink, and a premium bowling alley.',
        access: 'Western Limassol, easily reached by highway or coastal road.',
        distance: '15 min drive',
        tags: ['Retail', 'Family']
      },
      {
        name: 'Anexartisias Street',
        description: 'The historic heart of Limassol shopping. A vibrant street filled with local boutiques and global fashion houses.',
        access: 'Located in the Old Town center.',
        distance: '10 min drive',
        tags: ['Boutique', 'Old Town']
      },
      {
        name: 'Limassol Del Mar Plaza',
        description: 'A new seafront destination offering world-class luxury brands and high-end retail experiences.',
        access: 'Situated on the main Germasogeia coastal road.',
        distance: '5 min drive',
        tags: ['Luxury', 'Fashion']
      }
    ]
  }
];

export default function LocationsPage() {
  return (
    <div className="bg-surface min-h-screen pt-40 pb-24">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        {/* Header */}
        <header className="mb-24 text-center max-w-3xl mx-auto">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[11px] font-sans font-semibold tracking-widest-label uppercase text-primary mb-4"
          >
            Explore the Vicinity
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-hero text-foreground mb-8"
          >
            Villa Ramann & <em>Beyond.</em>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-sans text-body-lg text-muted-foreground leading-relaxed"
          >
            Perfectly positioned to offer both absolute privacy and seamless access to the very best of Limassol's lifestyle, from Michelin-star dining to ancient archaeological treasures.
          </motion.p>
        </header>

        {/* Category Sections */}
        <div className="space-y-32">
          {categories.map((category, catIdx) => (
            <section key={category.title}>
              <div className="flex items-center gap-4 mb-12 border-b border-outline-variant/30 pb-6">
                <category.icon className="w-6 h-6 text-primary" />
                <h2 className="font-serif text-3xl text-foreground">{category.title}</h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.items.map((item, idx) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-white rounded-2xl p-8 shadow-sm border border-outline-variant/20 hover:shadow-md transition-shadow duration-500 flex flex-col h-full"
                  >
                    <div className="flex flex-wrap gap-2 mb-6">
                      {item.tags.map(tag => (
                        <span key={tag} className="text-[10px] font-sans font-bold tracking-widest-label uppercase bg-secondary/30 text-primary px-2.5 py-1 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="font-serif text-2xl text-foreground mb-4">{item.name}</h3>
                    <p className="font-sans text-body-md text-muted-foreground leading-relaxed mb-8 flex-1">
                      {item.description}
                    </p>

                    <div className="space-y-4 pt-6 border-t border-outline-variant/10">
                      <div className="flex items-start gap-3">
                        <Car className="w-4 h-4 text-primary mt-1 shrink-0" />
                        <div>
                          <p className="text-[11px] font-sans font-bold tracking-label uppercase text-foreground/40 mb-1">How to reach</p>
                          <p className="text-sm font-sans text-foreground/70 leading-snug">{item.access}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <Clock className="w-4 h-4 text-primary shrink-0" />
                        <div className="flex items-center gap-2">
                          <p className="text-[11px] font-sans font-bold tracking-label uppercase text-foreground/40">Distance:</p>
                          <p className="text-sm font-sans font-semibold text-primary">{item.distance}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
