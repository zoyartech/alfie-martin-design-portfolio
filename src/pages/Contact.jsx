import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";
import { Mail, Linkedin, Instagram, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

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
              <Link to={createPageUrl("PassionProjects")} className="text-xs tracking-[0.2em] text-gray-500 hover:text-black transition-colors">
                PASSION PROJECTS
              </Link>
              <Link to={createPageUrl("Gallery")} className="text-xs tracking-[0.2em] text-gray-500 hover:text-black transition-colors">
                VISUALS
              </Link>
              <Link to={createPageUrl("Contact")} className="text-xs tracking-[0.2em] text-black border-b border-black pb-1">
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
            <p className="text-xs tracking-[0.3em] text-gray-400 mb-4">GET IN TOUCH</p>
            <h1 className="text-4xl md:text-6xl font-light mb-6">Let's Connect</h1>
            <p className="text-gray-500 max-w-2xl">
              I'm always interested in hearing about new projects and opportunities. 
              Whether you have a question or just want to say hi, feel free to reach out.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="px-6 lg:px-12 pb-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-12"
            >
              <div>
                <h2 className="text-2xl font-light mb-8">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Mail className="w-5 h-5 text-gray-400 mt-1" />
                    <div>
                      <p className="text-xs tracking-[0.2em] text-gray-400 mb-1">EMAIL</p>
                      <a 
                        href="mailto:hello@alfiemartin.com" 
                        className="text-lg hover:text-[#8B7355] transition-colors"
                      >
                        hello@alfiemartin.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Linkedin className="w-5 h-5 text-gray-400 mt-1" />
                    <div>
                      <p className="text-xs tracking-[0.2em] text-gray-400 mb-1">LINKEDIN</p>
                      <a 
                        href="#" 
                        className="text-lg hover:text-[#8B7355] transition-colors"
                      >
                        linkedin.com/in/alfiemartin
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Instagram className="w-5 h-5 text-gray-400 mt-1" />
                    <div>
                      <p className="text-xs tracking-[0.2em] text-gray-400 mb-1">INSTAGRAM</p>
                      <a 
                        href="#" 
                        className="text-lg hover:text-[#8B7355] transition-colors"
                      >
                        @alfiemartin.design
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-8">
                <h3 className="text-xl font-light mb-4">Location</h3>
                <p className="text-gray-600">
                  Based in New York City, NY<br />
                  Available for remote projects worldwide
                </p>
              </div>

              <div className="border-t border-gray-200 pt-8">
                <h3 className="text-xl font-light mb-4">Availability</h3>
                <p className="text-gray-600">
                  Currently accepting select projects for Q2 2024.<br />
                  Typical response time: 24-48 hours
                </p>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-2xl font-light mb-8">Send a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="text-xs tracking-[0.2em] text-gray-400 mb-2 block">
                    YOUR NAME
                  </label>
                  <Input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full"
                    required
                  />
                </div>

                <div>
                  <label className="text-xs tracking-[0.2em] text-gray-400 mb-2 block">
                    EMAIL ADDRESS
                  </label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full"
                    required
                  />
                </div>

                <div>
                  <label className="text-xs tracking-[0.2em] text-gray-400 mb-2 block">
                    MESSAGE
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full h-40 resize-none"
                    required
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-black text-white hover:bg-gray-800 h-12 text-xs tracking-[0.15em]"
                >
                  SEND MESSAGE <Send className="w-4 h-4 ml-2" />
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 px-6 lg:px-12 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs tracking-[0.3em] text-gray-400 mb-8">FREQUENTLY ASKED</p>
            <h2 className="text-3xl md:text-4xl font-light mb-12">Common Questions</h2>
            
            <div className="space-y-8">
              {[
                {
                  q: "What is your typical project timeline?",
                  a: "Project timelines vary based on scope and complexity. A typical brand identity project takes 4-6 weeks, while digital product design can range from 6-12 weeks. We'll establish a clear timeline during our initial consultation."
                },
                {
                  q: "What is your design process?",
                  a: "I follow a collaborative, iterative process: Discovery & Research → Strategy & Concept Development → Design Execution → Refinement & Delivery. Throughout each phase, I maintain open communication and incorporate feedback."
                },
                {
                  q: "Do you work with clients remotely?",
                  a: "Yes, I work with clients worldwide. I'm based in New York but am fully set up for remote collaboration using modern tools and communication platforms."
                },
                {
                  q: "What types of projects do you take on?",
                  a: "I focus on brand identity, digital product design, and art direction projects. I'm selective about the projects I take on to ensure I can deliver exceptional results and maintain a manageable workload."
                }
              ].map((faq, i) => (
                <div key={i} className="border-t border-gray-200 pt-6">
                  <h3 className="text-lg font-medium mb-3">{faq.q}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                </div>
              ))}
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