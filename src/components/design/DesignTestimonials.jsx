import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Alfie has an exceptional ability to translate complex AI interactions into intuitive, human-centered designs. The system she built for us reduced user confusion by 60%.",
    name: "Sarah Chen",
    title: "Head of Product, Grammarly",
    initials: "SC"
  },
  {
    quote: "Working with Alfie on our design system was transformative. She brought clarity and consistency across 12 product teams — something we'd been struggling with for years.",
    name: "James Okafor",
    title: "Design Director, Microsoft",
    initials: "JO"
  },
  {
    quote: "The marathon app redesign was a masterclass in balancing real-time data complexity with emotional user experience. Spectators loved it.",
    name: "Priya Mehta",
    title: "VP of Digital, NYRR",
    initials: "PM"
  }
];

export default function DesignTestimonials() {
  return (
    <section className="py-16 md:py-24 px-6 lg:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <p className="text-xs tracking-[0.3em] text-gray-400 mb-3">TESTIMONIALS</p>
        <h2 className="text-3xl md:text-4xl font-light mb-12">What Clients Say</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white p-8 border border-gray-100"
            >
              <p className="text-gray-700 leading-relaxed text-sm mb-8 italic">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center text-xs font-medium tracking-wider">
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-medium">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}