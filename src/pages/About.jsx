import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import MobileNav from "@/components/MobileNav";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            <Link to={createPageUrl("Home")} className="text-sm tracking-[0.3em] font-medium">
              ALFIE MARTIN
            </Link>
            <div className="hidden md:flex items-center space-x-10">
              <Link to={createPageUrl("Home")} className="text-xs tracking-[0.2em] text-gray-500 hover:text-black transition-colors">
                HOME
              </Link>
              <Link to={createPageUrl("About")} className="text-xs tracking-[0.2em] text-black border-b border-black pb-1">
                ABOUT
              </Link>
              <Link to={createPageUrl("CaseStudies")} className="text-xs tracking-[0.2em] text-gray-500 hover:text-black transition-colors">
                CASE STUDIES
              </Link>
              <Link to={createPageUrl("Contact")} className="text-xs tracking-[0.2em] text-gray-500 hover:text-black transition-colors">
                CONTACT
              </Link>
            </div>
            <MobileNav activePage="About" />
          </div>
        </div>
      </nav>

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

            <p className="text-lg leading-relaxed text-gray-700">I'm a multidisciplinary technologist.  based in New York City, working at the intersection of business strategy, brand differentiation, and mass adoption.  With over 8 years of experience, I love working in product design and growth. I am a huge nerd so I am always taking a class on something. I believe in being a life long continuous learner. So you could say I am a forever work in progress.



            </p>
            



            
            <p className="text-lg leading-relaxed text-gray-700">



            </p>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 md:py-32 px-6 lg:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-slate-950 mb-12 text-lg font-extrabold tracking-[0.3em]">EXPERIENCE</p>
          
          <div className="space-y-12">
            {[
            {
              role: "UX Content Strategist",
              company: "Grammarly",
              period: "2022 - 2024",
              description: "Led growth design initiatives for DTC mobile and web applications, focusing on user activation and retention strategies."
            },
            {
              role: "Senior Designer",
              company: "Polaroid",
              period: "2020 - Present",
              description: "Providing brand strategy, visual identity, and digital design services for startups and established brands."
            },
            {
              role: "Brand Designer",
              company: "Creative Agency NYC",
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
                  <span className="text-sm text-gray-400 mt-2 md:mt-0">{job.period}</span>
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
              skills: ["Art Direction", "Photography", "Visual Storytelling", "Content Strategy"]
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
            <a href="#" className="text-xs text-gray-400 hover:text-black transition-colors">Instagram</a>
            <a href="#" className="text-xs text-gray-400 hover:text-black transition-colors">LinkedIn</a>
            <a href="#" className="text-xs text-gray-400 hover:text-black transition-colors">Dribbble</a>
          </div>
        </div>
      </footer>
    </div>);

}