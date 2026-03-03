import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";

export default function ConsultationForm() {
  const [form, setForm] = useState({ name: "", email: "", company: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-16 md:py-24 px-6 lg:px-12 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs tracking-[0.3em] text-gray-400 mb-3">WORK TOGETHER</p>
            <h2 className="text-3xl md:text-4xl font-light mb-6">Request a Consultation</h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              Whether you're looking to improve an existing product, build a new design system, or explore AI-driven UX — I'd love to hear about your project.
            </p>
            <div className="space-y-4">
              {["Brand & Visual Identity", "Product & UX Design", "AI Interface Design", "Design Systems", "UX Strategy & Research"].map((s, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-gray-600">
                  <div className="w-1 h-1 bg-black rounded-full" />
                  {s}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-16 text-center">
                <CheckCircle className="w-12 h-12 text-black mb-4" />
                <h3 className="text-xl font-medium mb-2">Message Received</h3>
                <p className="text-gray-500 text-sm">I'll be in touch within 24–48 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs tracking-[0.15em] text-gray-400 block mb-2">NAME</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-xs tracking-[0.15em] text-gray-400 block mb-2">EMAIL</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs tracking-[0.15em] text-gray-400 block mb-2">COMPANY (OPTIONAL)</label>
                  <input
                    type="text"
                    value={form.company}
                    onChange={e => setForm({ ...form, company: e.target.value })}
                    className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs tracking-[0.15em] text-gray-400 block mb-2">SERVICE NEEDED</label>
                  <select
                    required
                    value={form.service}
                    onChange={e => setForm({ ...form, service: e.target.value })}
                    className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors bg-white"
                  >
                    <option value="">Select a service...</option>
                    <option>Brand & Visual Identity</option>
                    <option>Product & UX Design</option>
                    <option>AI Interface Design</option>
                    <option>Design Systems</option>
                    <option>UX Strategy & Research</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs tracking-[0.15em] text-gray-400 block mb-2">TELL ME ABOUT YOUR PROJECT</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-black text-white py-4 text-xs tracking-[0.2em] hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
                >
                  SEND REQUEST <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}