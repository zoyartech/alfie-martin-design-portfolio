import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import MobileNav from "@/components/MobileNav";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Alfie Martin",
          "jobTitle": "Product Designer",
          "description": "Product Designer specializing in Brand Strategy, Digital Design, and Creative Direction.",
          "url": "https://alfiealfie.com/About"
        }) }} />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}>

            <p className="text-xs tracking-[0.3em] text-gray-400 mb-8">ABOUT ME</p>
            <h1 className="text-4xl md:text-6xl font-light mb-12 max-w-4xl">Multi-disciplinary professional  focused on creating meaningful experiences

            </h1>
            
            <div className="w-full mt-12 mb-8 overflow-hidden rounded-sm">
              <img
                loading="lazy"
                src="https://media.base44.com/images/public/6974e154f708f4918a2b8d02/f75e609c1_IMG_3538.png"
                alt="Alfie Martin Portrait"
                className="w-full h-auto object-cover" />
              
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 max-w-4xl">

            <p className="text-lg leading-relaxed text-gray-700">HI im a Product designer specializing in growth and AI and I live in NYC. 8+ years making things people use, want, and come back to. Chronic class-taker. Aggressively curious. Forever a work in progress and not even a little sorry about it.
            </p>

            <motion.div
              className="flex flex-wrap gap-3 pt-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.04
                  }
                }
              }}>
              
              {["Product Design", "Growth Strategy", "AI Integration", "User Research", "Prototyping", "Design Systems", "Visual Identity", "Conversational Design"].map((tag, index) =>
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, scale: 0.9, y: 8 },
                  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
                }}
                whileHover={{ y: -2, transition: { duration: 0.2, ease: "easeOut" } }}
                className="px-4 py-2 bg-gray-100 text-gray-800 text-sm font-medium rounded-full cursor-default inline-flex">
                
                  {tag}
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 md:py-32 px-6 lg:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-24 max-w-4xl">
            
            <img
              src="https://media.base44.com/images/public/6974e154f708f4918a2b8d02/1b76f0523_logoss.png"
              alt="Client Logos"
              className="w-full h-auto object-contain mix-blend-multiply" />
            
          </motion.div>
          <p className="text-slate-950 mb-12 text-lg font-extrabold tracking-[0.3em]">EXPERIENCE</p>
          
          <div className="space-y-12">
            {[
            {
              role: "Product Growth Designer",
              company: "Grammarly",
              period: "2022 - 2024",
              description: "Led growth design initiatives for DTC mobile and web applications, focusing on user activation and retention strategies."
            },
            {
              role: "Brand Identity & Growth Strategist",
              company: "Polaroid",
              period: "2020 - Present",
              description: "Providing brand strategy, visual identity, and digital design services for startups and established brands."
            },
            {
              role: "Product Designer CRO",
              company: "Microsoft",
              period: "2018 - 2020",
              description: "Developed comprehensive brand identities and marketing materials for diverse clients across industries."
            }].
            map((job, i) =>
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="border-t border-gray-200 pt-8">

                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-light mb-2">{job.role}</h3>
                    <p className="text-gray-500">{job.company}</p>
                  </div>
                  
                </div>
                <p className="text-gray-600 leading-relaxed max-w-2xl">
                  {job.description}
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 md:py-32 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs tracking-[0.3em] text-gray-400 mb-12">CAPABILITIES</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
            {
              title: "Brand Strategy",
              skills: ["Brand Identity", "Visual Systems", "Brand Guidelines", "Positioning"]
            },
            {
              title: "Digital Design",
              skills: ["UI/UX Design", "Product Design", "Web Design", "Prototyping"]
            },
            {
              title: "Creative Direction",
              skills: ["Art Direction", "Illustration", "Visual Storytelling", "Content Strategy"]
            }].
            map((category, i) =>
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}>

                <h3 className="text-xl font-medium mb-6">{category.title}</h3>
                <ul className="space-y-3">
                  {category.skills.map((skill, j) =>
                <li key={j} className="text-gray-600 text-sm">
                      {skill}
                    </li>
                )}
                </ul>
              </motion.div>
            )}
          </div>

          <div className="mt-32">
            <p className="text-xs tracking-[0.3em] text-gray-400 mb-12">TOOLS</p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl">
              
              <img
                src="https://media.base44.com/images/public/6974e154f708f4918a2b8d02/f494d2ace_tools.png"
                alt="Tools I use"
                className="w-full h-auto object-contain" />
              
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-32 px-6 lg:px-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-8">Let's work together</h2>
          <Link
            to={createPageUrl("Contact")}
            className="inline-flex items-center gap-3 text-sm tracking-[0.15em] border border-black px-8 py-4 hover:bg-black hover:text-white transition-all duration-300">

            GET IN TOUCH <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 lg:px-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-400">© 2024 Alfie Martin. All rights reserved.</p>
          <div className="flex items-center gap-6">
            
            
            
          </div>
        </div>
      </footer>
    </div>);

}