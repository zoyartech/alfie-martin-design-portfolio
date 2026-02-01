import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

const caseStudies = [
  {
    id: 1,
    title: "polaroid rebrand and market strategy",
    subtitle: "Consumer Products",
    category: "Branding & Identity",
    year: "2021",
    heroImage: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6974e154f708f4918a2b8d02/b6e509280_Screenshot2026-02-01at114552AM.png",
    overview: "Polaroid is an analog photography brand that manufactures instant cameras, film, and printers. The company focuses on capturing the 'beautifully imperfect' moments of real life through physical media, blending its historic legacy with modern technology and creative collaborations to encourage tangible connections in a digital world.",
    problem: "The beauty market is oversaturated with brands that either focus on luxury or sustainability, but rarely both. Lumière needed a distinctive visual identity that could communicate premium quality while emphasizing their commitment to clean, sustainable beauty.",
    approach: "I conducted extensive market research and competitor analysis to identify white space in the market. Through stakeholder interviews and mood boarding sessions, we established a visual language that merged minimalist luxury with organic, nature-inspired elements. The design strategy focused on creating timeless sophistication with subtle environmental cues.",
    solution: "The final brand identity featured a custom wordmark with refined serif typography, a color palette of warm neutrals and soft earth tones, and a photographic style emphasizing natural light and raw textures. The packaging design utilized recyclable materials with elegant, minimal graphics. I created comprehensive brand guidelines covering all touchpoints from product packaging to digital presence.",
    results: "The rebrand led to a 145% increase in social media engagement within the first three months. Lumière successfully launched in 12 premium retailers and saw a 200% increase in direct-to-consumer sales. The brand was featured in Vogue, Allure, and received a Dieline Award for packaging design.",
    images: [
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=800&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&q=80",
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&q=80"
    ],
    tags: ["Brand Strategy", "Visual Identity", "Packaging Design", "Art Direction"]
  },
  {
    id: 2,
    title: "Haven",
    subtitle: "Wellness App Experience",
    category: "UI/UX Design",
    year: "2023",
    heroImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=80",
    overview: "Haven is a mental wellness app designed to help users manage stress and anxiety through guided meditation, mood tracking, and personalized wellness plans. I was brought in to redesign the entire user experience and create a calming, intuitive interface.",
    problem: "The existing app had poor user retention rates and received feedback that it felt clinical and overwhelming. Users found it difficult to navigate and the visual design was contributing to stress rather than alleviating it. The meditation features were buried in complex menus.",
    approach: "I started with user research, conducting interviews with 25 current and former users to understand pain points. Through user journey mapping and usability testing, I identified key areas for improvement. The design philosophy centered on creating a serene, breathing space within the digital realm.",
    solution: "I redesigned the entire app with a focus on simplicity and calm. The new interface featured a gentle color palette of soft blues and warm whites, generous white space, and smooth micro-interactions. The home screen was reimagined as a personalized wellness hub with quick access to daily practices. I introduced a daily check-in flow that felt like a conversation rather than a survey.",
    results: "Post-launch metrics showed a 180% increase in daily active users and user session time increased by 240%. App Store ratings improved from 3.2 to 4.8 stars. The redesign contributed to Haven securing $5M in Series A funding and the app was featured as 'App of the Day' on both iOS and Android platforms.",
    images: [
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80",
      "https://images.unsplash.com/photo-1563203369-26f2e4a5ccf7?w=800&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
    ],
    tags: ["UX Research", "UI Design", "Mobile App", "User Testing"]
  },
  {
    id: 3,
    title: "Artisan Collective",
    subtitle: "E-commerce Platform Redesign",
    category: "Digital Experience",
    year: "2023",
    heroImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=80",
    overview: "Artisan Collective is an online marketplace connecting independent makers with conscious consumers. They needed a complete platform redesign to better showcase their artisans' stories and streamline the shopping experience.",
    problem: "The existing platform had a 65% cart abandonment rate and low conversion rates. The checkout process was confusing, product discovery was difficult, and the site didn't effectively communicate the unique stories behind each artisan and their work.",
    approach: "Through analytics review and user testing sessions, I identified friction points throughout the customer journey. I developed a content strategy that put artisan stories at the forefront while simplifying the path to purchase. The design system was built to scale with the growing marketplace.",
    solution: "The redesigned platform featured immersive artisan profile pages with rich storytelling, an intuitive product filtering system, and a streamlined three-step checkout. I introduced a 'Meet the Maker' video series integration and implemented a wishlist and gift registry feature. The visual design celebrated craftsmanship through high-quality photography and careful typography.",
    results: "Cart abandonment dropped to 32%, and conversion rates increased by 156%. Average order value grew by 45% due to improved product discovery. The platform won a Webby Award for Best Shopping Website and monthly revenue increased by 220% within six months of launch.",
    images: [
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&q=80",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
      "https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=800&q=80"
    ],
    tags: ["Web Design", "E-commerce", "Content Strategy", "Design Systems"]
  }
];

export default function CaseStudies() {
  const [selectedStudy, setSelectedStudy] = useState(null);

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
              <Link to={createPageUrl("CaseStudies")} className="text-xs tracking-[0.2em] text-black border-b border-black pb-1">
                CASE STUDIES
              </Link>
              <Link to={createPageUrl("Gallery")} className="text-xs tracking-[0.2em] text-gray-500 hover:text-black transition-colors">
                GALLERY
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {!selectedStudy ? (
        <>
          {/* Header */}
          <section className="pt-32 pb-16 px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">
              <Link 
                to={createPageUrl("Home")} 
                className="inline-flex items-center gap-2 text-xs tracking-[0.2em] text-gray-500 hover:text-black transition-colors mb-8"
              >
                <ArrowLeft className="w-4 h-4" /> BACK TO HOME
              </Link>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-xs tracking-[0.3em] text-gray-400 mb-4">SELECTED WORK</p>
                <h1 className="text-4xl md:text-6xl font-light mb-6">Case Studies</h1>
                <p className="text-gray-500 max-w-2xl">
                  In-depth explorations of recent projects showcasing strategy, process, 
                  and measurable results across branding, digital design, and creative direction.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Case Studies Grid */}
          <section className="px-6 lg:px-12 pb-32">
            <div className="max-w-7xl mx-auto space-y-24">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedStudy(study)}
                >
                  <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                    <div className={index % 2 === 0 ? "order-1" : "order-1 md:order-2"}>
                      <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                        <img
                          src={study.id === 1 ? "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6974e154f708f4918a2b8d02/3687cf42b_aW1-UrLkSTRcKQof9MUk8U.png" : study.heroImage}
                          alt={study.title}
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                        />
                      </div>
                    </div>
                    <div className={index % 2 === 0 ? "order-2" : "order-2 md:order-1"}>
                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-xs tracking-[0.2em] text-gray-400">{study.category}</span>
                        <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                        <span className="text-xs text-gray-400">{study.year}</span>
                      </div>
                      <h2 className="text-3xl md:text-4xl font-light mb-3 group-hover:text-[#8B7355] transition-colors">
                        {study.title}
                      </h2>
                      <p className="text-lg text-gray-400 mb-4">{study.subtitle}</p>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {study.overview.substring(0, 200)}...
                      </p>
                      <div className="flex items-center gap-2 text-sm group-hover:gap-3 transition-all">
                        <span>Read Case Study</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </>
      ) : (
        <>
          {/* Detailed Case Study View */}
          <section className="pt-32 pb-16 px-6 lg:px-12">
            <div className="max-w-4xl mx-auto">
              <button 
                onClick={() => setSelectedStudy(null)}
                className="inline-flex items-center gap-2 text-xs tracking-[0.2em] text-gray-500 hover:text-black transition-colors mb-12"
              >
                <ArrowLeft className="w-4 h-4" /> BACK TO ALL CASE STUDIES
              </button>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-xs tracking-[0.2em] text-gray-400">{selectedStudy.category}</span>
                  <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                  <span className="text-xs text-gray-400">{selectedStudy.year}</span>
                </div>
                
                <h1 className="text-4xl md:text-6xl font-light mb-4">{selectedStudy.title}</h1>
                <p className="text-2xl text-gray-400 mb-12">{selectedStudy.subtitle}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-12">
                  {selectedStudy.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="text-xs px-3 py-1 border border-gray-200 text-gray-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Hero Image */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="aspect-video overflow-hidden bg-gray-100 mb-16"
              >
                <img
                  src={selectedStudy.heroImage}
                  alt={selectedStudy.title}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Content Sections */}
              <div className="space-y-16">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <h2 className="text-xs tracking-[0.3em] text-gray-400 mb-4">OVERVIEW</h2>
                  <p className="text-lg leading-relaxed text-gray-700">{selectedStudy.overview}</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <h2 className="text-xs tracking-[0.3em] text-gray-400 mb-4">THE CHALLENGE</h2>
                  <p className="text-lg leading-relaxed text-gray-700">{selectedStudy.problem}</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <h2 className="text-xs tracking-[0.3em] text-gray-400 mb-4">MY APPROACH</h2>
                  <p className="text-lg leading-relaxed text-gray-700">{selectedStudy.approach}</p>
                </motion.div>

                {/* Image Grid */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="grid md:grid-cols-3 gap-4 my-16"
                >
                  {selectedStudy.images.map((img, i) => (
                    <div key={i} className="aspect-square overflow-hidden bg-gray-100">
                      <img
                        src={img}
                        alt={`${selectedStudy.title} detail ${i + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  <h2 className="text-xs tracking-[0.3em] text-gray-400 mb-4">THE SOLUTION</h2>
                  <p className="text-lg leading-relaxed text-gray-700">{selectedStudy.solution}</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="bg-gray-50 p-8 md:p-12"
                >
                  <h2 className="text-xs tracking-[0.3em] text-gray-400 mb-6">RESULTS & IMPACT</h2>
                  <p className="text-lg leading-relaxed text-gray-700">{selectedStudy.results}</p>
                </motion.div>
              </div>

              {/* Next Project */}
              <div className="mt-24 pt-12 border-t border-gray-100">
                <p className="text-xs tracking-[0.2em] text-gray-400 mb-6">NEXT PROJECT</p>
                {(() => {
                  const currentIndex = caseStudies.findIndex(s => s.id === selectedStudy.id);
                  const nextStudy = caseStudies[(currentIndex + 1) % caseStudies.length];
                  return (
                    <div
                      onClick={() => setSelectedStudy(nextStudy)}
                      className="group cursor-pointer flex items-center justify-between"
                    >
                      <div>
                        <h3 className="text-2xl md:text-3xl font-light mb-2 group-hover:text-[#8B7355] transition-colors">
                          {nextStudy.title}
                        </h3>
                        <p className="text-gray-500">{nextStudy.subtitle}</p>
                      </div>
                      <ArrowUpRight className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </div>
                  );
                })()}
              </div>
            </div>
          </section>
        </>
      )}

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
    </div>
  );
}