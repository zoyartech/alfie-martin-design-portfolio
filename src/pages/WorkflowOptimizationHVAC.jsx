import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export default function WorkflowOptimizationHVAC() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            <Link to={createPageUrl("Home")} className="text-sm tracking-[0.3em] font-medium">
              ALFIE MARTIN
            </Link>
            <div className="hidden md:flex items-center space-x-10">
              <Link to={createPageUrl("Home")} className="text-xs tracking-[0.2em] text-gray-500 hover:text-black transition-colors">
                HOME
              </Link>
              <Link to={createPageUrl("Design")} className="text-xs tracking-[0.2em] text-gray-500 hover:text-black transition-colors">
                DESIGN
              </Link>
              <Link to={createPageUrl("Contact")} className="text-xs tracking-[0.2em] text-gray-500 hover:text-black transition-colors">
                CONTACT
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Back Button */}
      <section className="pt-32 pb-8 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <Link
            to={createPageUrl("Design")}
            className="inline-flex items-center gap-2 text-xs tracking-[0.2em] text-gray-500 hover:text-black transition-colors">
            <ArrowLeft className="w-4 h-4" /> BACK TO DESIGN
          </Link>
        </div>
      </section>

      {/* Hero Section */}
      <section className="pb-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}>
            <p className="text-xs tracking-[0.3em] text-gray-400 mb-4">PRODUCT DESIGN</p>
            <h1 className="text-4xl md:text-6xl font-light mb-6">Workflow Optimization for Commercial HVAC Systems</h1>
            <p className="text-gray-500 max-w-3xl text-lg leading-relaxed">
              Redesigning field technician workflows to reduce service time by 40% and improve 
              customer satisfaction across 500+ commercial installations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mt-12 pt-12 border-t border-gray-200">
            <div>
              <p className="text-xs tracking-[0.2em] text-gray-400 mb-2">ROLE</p>
              <p className="text-gray-700">Product Designer, UX Research</p>
            </div>
            <div>
              <p className="text-xs tracking-[0.2em] text-gray-400 mb-2">TIMELINE</p>
              <p className="text-gray-700">6 months (2023)</p>
            </div>
            <div>
              <p className="text-xs tracking-[0.2em] text-gray-400 mb-2">CLIENT</p>
              <p className="text-gray-700">Commercial HVAC Solutions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="pb-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="aspect-video bg-gray-100 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1600&q=80"
              alt="HVAC system dashboard"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-16 px-6 lg:px-12 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}>
            <p className="text-xs tracking-[0.3em] text-gray-400 mb-6">THE CHALLENGE</p>
            <h2 className="text-3xl font-light mb-6">Streamlining Complex Field Operations</h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-6">
              Field technicians were spending excessive time navigating fragmented systems, 
              resulting in longer service calls, frustrated customers, and decreased efficiency. 
              The existing workflow required switching between multiple apps, paper forms, 
              and phone calls to dispatch.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              Our goal was to create a unified mobile experience that would enable technicians 
              to complete service calls faster while maintaining high-quality standards and 
              improving data accuracy for the operations team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Research Section */}
      <section className="py-16 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}>
            <p className="text-xs tracking-[0.3em] text-gray-400 mb-6">DISCOVERY</p>
            <h2 className="text-3xl font-light mb-8">Understanding Technician Needs</h2>
            
            <div className="space-y-6">
              <div className="border-l-2 border-gray-300 pl-6">
                <h3 className="text-xl font-medium mb-3">Field Observations</h3>
                <p className="text-gray-600 leading-relaxed">
                  Spent 40+ hours shadowing technicians on service calls, documenting pain points, 
                  workarounds, and moments of friction in their daily workflows.
                </p>
              </div>
              
              <div className="border-l-2 border-gray-300 pl-6">
                <h3 className="text-xl font-medium mb-3">Stakeholder Interviews</h3>
                <p className="text-gray-600 leading-relaxed">
                  Conducted interviews with operations managers, dispatchers, and customers to 
                  understand the full ecosystem and identify key metrics for success.
                </p>
              </div>
              
              <div className="border-l-2 border-gray-300 pl-6">
                <h3 className="text-xl font-medium mb-3">Data Analysis</h3>
                <p className="text-gray-600 leading-relaxed">
                  Analyzed 6 months of service data to identify patterns, common delays, 
                  and opportunities for automation and workflow optimization.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solution Images */}
      <section className="py-16 px-6 lg:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="aspect-[4/5] bg-gray-100 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
                alt="Mobile interface design"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="aspect-[4/5] bg-gray-100 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
                alt="Dashboard analytics"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}>
            <p className="text-xs tracking-[0.3em] text-gray-400 mb-6">THE SOLUTION</p>
            <h2 className="text-3xl font-light mb-8">Unified Mobile Platform</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-medium mb-3">Smart Task Prioritization</h3>
                <p className="text-gray-600 leading-relaxed">
                  Designed an intelligent dashboard that automatically prioritizes service calls 
                  based on urgency, location, and technician skillset, reducing decision fatigue 
                  and optimizing route efficiency.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-3">Digital Checklists & Diagnostics</h3>
                <p className="text-gray-600 leading-relaxed">
                  Created guided workflows with contextual prompts and built-in diagnostics tools, 
                  ensuring consistent service quality while reducing the time spent on paperwork 
                  and manual data entry.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-3">Real-time Communication</h3>
                <p className="text-gray-600 leading-relaxed">
                  Integrated direct messaging with dispatch, parts ordering, and customer 
                  notifications into a single interface, eliminating the need to switch between 
                  apps or make phone calls during service.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-3">Offline-First Design</h3>
                <p className="text-gray-600 leading-relaxed">
                  Built for reliability in areas with poor connectivity, with automatic sync 
                  when back online, ensuring technicians can always complete their work 
                  regardless of network conditions.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 px-6 lg:px-12 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}>
            <p className="text-xs tracking-[0.3em] text-gray-400 mb-6">IMPACT</p>
            <h2 className="text-3xl font-light mb-12">Measurable Results</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="border-t-2 border-black pt-6">
                <p className="text-4xl font-light mb-2">40%</p>
                <p className="text-gray-600">Reduction in average service call time</p>
              </div>
              
              <div className="border-t-2 border-black pt-6">
                <p className="text-4xl font-light mb-2">92%</p>
                <p className="text-gray-600">Technician adoption rate within 3 months</p>
              </div>
              
              <div className="border-t-2 border-black pt-6">
                <p className="text-4xl font-light mb-2">35%</p>
                <p className="text-gray-600">Increase in daily service capacity</p>
              </div>
              
              <div className="border-t-2 border-black pt-6">
                <p className="text-4xl font-light mb-2">98%</p>
                <p className="text-gray-600">Data accuracy improvement</p>
              </div>
            </div>

            <div className="mt-12 p-8 bg-white rounded-lg">
              <p className="text-gray-700 italic text-lg leading-relaxed">
                "This platform has completely transformed how we operate. Our technicians love it, 
                and we're seeing the impact in both efficiency and customer satisfaction scores."
              </p>
              <p className="text-sm text-gray-500 mt-4">
                — Director of Operations, Commercial HVAC Solutions
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Learnings Section */}
      <section className="py-16 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}>
            <p className="text-xs tracking-[0.3em] text-gray-400 mb-6">KEY TAKEAWAYS</p>
            <h2 className="text-3xl font-light mb-6">What I Learned</h2>
            
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                <strong className="text-black">Design for the environment:</strong> Field work presents 
                unique constraints like gloves, sunlight, and time pressure. Testing in real conditions 
                was essential to creating a truly usable product.
              </p>
              
              <p>
                <strong className="text-black">Trust the technicians:</strong> The best insights came 
                from observing experienced technicians' workarounds and shortcuts. They knew what they 
                needed; our job was to formalize and streamline those solutions.
              </p>
              
              <p>
                <strong className="text-black">Phased rollout matters:</strong> Starting with a small 
                pilot group allowed us to iterate quickly based on real feedback before full deployment, 
                dramatically improving the final product.
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