import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export default function PassionProjects() {
  const projects = [
    {
      title: "Design for Good Initiative",
      category: "Social Impact",
      description: "Pro-bono design work for non-profit organizations focused on education and environmental conservation. Creating brand identities and marketing materials that amplify their missions.",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1200&q=80",
      link: "#"
    },
    {
      title: "Type Exploration Series",
      category: "Typography",
      description: "An ongoing collection of experimental typefaces and typographic posters exploring the intersection of legibility and artistic expression.",
      image: "https://images.unsplash.com/photo-1524578271613-d550eacf6090?w=1200&q=80",
      link: "#"
    },
    {
      title: "Daily Creative Challenge",
      category: "Design Practice",
      description: "365-day project creating one piece of visual content daily. Exploring different mediums, styles, and constraints to push creative boundaries.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
      link: "#"
    },
    {
      title: "Design Mentorship Program",
      category: "Education",
      description: "Mentoring emerging designers through portfolio reviews, career guidance, and skill development workshops. Building the next generation of creative talent.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80",
      link: "#"
    },
    {
      title: "Open Source Design System",
      category: "Community",
      description: "Contributing to and maintaining an open-source design system for startups and small businesses. Making quality design accessible to all.",
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=1200&q=80",
      link: "#"
    },
    {
      title: "Photography Documentation",
      category: "Visual Stories",
      description: "Long-form documentary photography project capturing the evolving urban landscape of New York City and the stories of its communities.",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200&q=80",
      link: "#"
    }
  ];

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
              <Link to={createPageUrl("About")} className="text-xs tracking-[0.2em] text-gray-500 hover:text-black transition-colors">
                ABOUT
              </Link>
              <Link to={createPageUrl("Design")} className="text-xs tracking-[0.2em] text-gray-500 hover:text-black transition-colors">
                DESIGN
              </Link>
              <Link to={createPageUrl("MixedMedia")} className="text-xs tracking-[0.2em] text-gray-500 hover:text-black transition-colors">
                MIXED MEDIA
              </Link>
              <Link to={createPageUrl("PassionProjects")} className="text-xs tracking-[0.2em] text-black border-b border-black pb-1">
                PASSION PROJECTS
              </Link>
              <Link to={createPageUrl("Gallery")} className="text-xs tracking-[0.2em] text-gray-500 hover:text-black transition-colors">
                VISUALS
              </Link>
              <Link to={createPageUrl("Contact")} className="text-xs tracking-[0.2em] text-gray-500 hover:text-black transition-colors">
                CONTACT
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-32 pb-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs tracking-[0.3em] text-gray-400 mb-4">SIDE PROJECTS</p>
            <h1 className="text-4xl md:text-6xl font-light mb-6">Passion Projects</h1>
            <p className="text-gray-500 max-w-2xl">
              Personal initiatives, community contributions, and creative explorations 
              that go beyond client work. Design driven by curiosity and purpose.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <section className="px-6 lg:px-12 pb-32">
        <div className="max-w-7xl mx-auto space-y-24">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group"
            >
              <div className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${i % 2 === 1 ? 'md:direction-rtl' : ''}`}>
                <div className={i % 2 === 1 ? "md:order-2" : ""}>
                  <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    />
                  </div>
                </div>
                <div className={i % 2 === 1 ? "md:order-1" : ""}>
                  <span className="text-xs tracking-[0.2em] text-gray-400">{project.category}</span>
                  <h2 className="text-3xl md:text-4xl font-light mt-4 mb-4">
                    {project.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {project.description}
                  </p>
                  <a 
                    href={project.link}
                    className="inline-flex items-center gap-2 text-sm hover:text-[#8B7355] transition-colors"
                  >
                    Learn More <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 px-6 lg:px-12 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs tracking-[0.3em] text-gray-400 mb-6">WHY PASSION PROJECTS</p>
            <h2 className="text-3xl md:text-4xl font-light mb-8">
              Creating with purpose
            </h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Passion projects are where I explore ideas without commercial constraints, 
                experiment with new techniques, and contribute to causes I care about.
              </p>
              <p>
                These projects keep my practice fresh, allow me to give back to the design 
                community, and remind me why I fell in love with design in the first place.
              </p>
              <p>
                Whether it's mentoring emerging designers, contributing to open source, or 
                creating work for social good, these projects fuel my creative spirit and 
                shape my perspective as a designer.
              </p>
            </div>
          </motion.div>
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
    </div>
  );
}