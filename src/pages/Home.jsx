import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";
import { ArrowDownRight, ArrowRight } from "lucide-react";

export default function Home() {
  const [selectedImage, setSelectedImage] = React.useState(null);

  const scrollToSection = () => {
    document.getElementById('domains')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            <Link
              to={createPageUrl("Home")}
              className="text-sm tracking-[0.3em] font-semibold hover:text-[#8B7355] transition-colors duration-300">

              ALFIE MARTIN
            </Link>
            <div className="hidden md:flex items-center gap-10">
              <Link
                to={createPageUrl("Home")}
                className="relative text-xs tracking-[0.15em] font-medium text-black group">

                HOME
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-black"></span>
              </Link>
              <Link
                to={createPageUrl("About")}
                className="relative text-xs tracking-[0.15em] font-medium text-gray-600 hover:text-black transition-colors group">

                ABOUT
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                to={createPageUrl("Design")}
                className="relative text-xs tracking-[0.15em] font-medium text-gray-600 hover:text-black transition-colors group">

                DESIGN
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                to={createPageUrl("Gallery")}
                className="relative text-xs tracking-[0.15em] font-medium text-gray-600 hover:text-black transition-colors group">

                VISUALS
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                to={createPageUrl("Contact")}
                className="relative text-xs tracking-[0.15em] font-medium px-6 py-2 border border-black hover:bg-black hover:text-white transition-all duration-300">

                CONTACT
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-start px-6 lg:px-12 pt-32 relative">
        <div className="max-w-7xl mx-auto w-full flex flex-row items-start gap-12">
          {/* Left: Text Content */}
          <div className="flex-1">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-xs tracking-[0.3em] text-gray-400 mb-8">
              CREATIVE DESIGNER
            </motion.p>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-light leading-[1.1] tracking-tight max-w-4xl">
              Building at the
              <br />
              intersection of business,
              <br />
              <span className="text-[#C4B5A0]">design & vision.</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-gray-500 mt-12 max-w-md text-sm leading-relaxed">
              Multi-disciplinary designer working across Product, digital experiences, and data informed decisions.. Based in New York City. Focused on creating things that matter.
            </motion.p>

            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              onClick={scrollToSection}
              className="absolute bottom-12 right-12 hidden lg:flex items-center gap-2 text-xs tracking-[0.2em] text-gray-500 hover:text-black transition-colors">
              EXPLORE <ArrowDownRight className="w-4 h-4" />
            </motion.button>
          </div>

          {/* Right: Carnation Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:flex flex-shrink-0 w-72 xl:w-96 items-start justify-center">
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6974e154f708f4918a2b8d02/a2d7e9768_Carnationlinedrawing.png"
              alt="Carnation line drawing"
              className="w-full opacity-75" />

          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto w-full mt-24">
          {/* Logo Wall */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-24 pt-12 border-t border-gray-100">
            <p className="text-xs tracking-[0.3em] text-gray-400 mb-8">PREVIOUSLY </p>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center">
              {[
              { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6974e154f708f4918a2b8d02/1190401ad_grammarlylogo.png", alt: "Grammarly" },
              { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6974e154f708f4918a2b8d02/df08903cb_Group1.png", alt: "Polaroid" },
              { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6974e154f708f4918a2b8d02/a8abeb8cd_microsoftlogo.png", alt: "Microsoft" },
              { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6974e154f708f4918a2b8d02/6153e0dca_McKinsey_and_Company_Logo_1logo.png", alt: "McKinsey & Company" },
              { src: null, alt: "Rockefeller Capital" },
              { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6974e154f708f4918a2b8d02/d491508f1_Logo_of_Deloittelogo.png", alt: "Deloitte" }].
              map((logo, i) =>
              <div key={i} className="flex items-center justify-center opacity-40 hover:opacity-80 transition-all duration-300">
                  {logo.src ?
                <img src={logo.src} alt={logo.alt} className="h-8 w-auto object-contain grayscale" /> :

                <span className="text-sm font-semibold tracking-wide text-gray-800 whitespace-nowrap">{logo.alt}</span>
                }
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 px-6 lg:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs tracking-[0.3em] text-gray-400 mb-12">DESIGN PROCESS</p>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
            {
              step: "01",
              title: "Discovery",
              description: "Understanding business goals, user needs, and market landscape"
            },
            {
              step: "02",
              title: "Strategy",
              description: "Defining design principles, positioning, and visual direction"
            },
            {
              step: "03",
              title: "Execution",
              description: "Creating comprehensive design systems and assets"
            },
            {
              step: "04",
              title: "Refinement",
              description: "Testing, iterating, and optimizing based on feedback"
            }].
            map((item, i) =>
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="border-t border-gray-300 pt-6">

                <span className="text-xs text-gray-400 tracking-wider">{item.step}</span>
                <h3 className="text-xl font-medium mt-4 mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-32 px-6 lg:px-12 bg-white">
        <div className="max-w-4xl mx-auto text-left">
          <motion.blockquote
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-2xl md:text-3xl font-light leading-relaxed text-gray-800">

            "We need to stop worrying about proving the value of design & just focus on outcomes that provide value." – Denis Weil
          </motion.blockquote>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-32 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-xs tracking-[0.3em] text-gray-400 mb-4">VISUALS</p>
              <h2 className="text-3xl md:text-4xl font-light">Gallery</h2>
            </div>
            <Link
              to={createPageUrl("Gallery")}
              className="hidden md:flex items-center gap-2 text-sm hover:text-[#8B7355] transition-colors">

              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
            "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6974e154f708f4918a2b8d02/4f158f252_msft.png",
            "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6974e154f708f4918a2b8d02/232dbcf99_1ee9e8c17cb91a48c23de9dfea5ce431.png",
            "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6974e154f708f4918a2b8d02/abc94bcb0_263737c32d0e1e076ac84aed6761a15d.png",
            "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=600&q=80"].
            map((img, i) =>
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="aspect-square overflow-hidden cursor-pointer"
              onClick={() => setSelectedImage(selectedImage === i ? null : i)}>

                <motion.img
                src={img}
                alt={`Work ${i + 1}`}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                animate={{ scale: selectedImage === i ? 1.2 : 1 }}
                transition={{ duration: 0.3 }} />

              </motion.div>
            )}
          </div>

          <Link
            to={createPageUrl("Gallery")}
            className="md:hidden flex items-center justify-center gap-2 text-sm mt-8 hover:text-[#8B7355] transition-colors">

            View All Works <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-32 px-6 lg:px-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-xs tracking-[0.3em] text-gray-400 mb-4">READY TO CONNECT?</p>
          <h2 className="text-4xl md:text-5xl font-light mb-12">Let's create something.</h2>
          <a
            href="mailto:hello@alfiemartin.com"
            className="inline-flex items-center gap-3 text-sm tracking-[0.15em] border border-black px-8 py-4 hover:bg-black hover:text-white transition-all duration-300">

            GET IN TOUCH <ArrowRight className="w-4 h-4" />
          </a>
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