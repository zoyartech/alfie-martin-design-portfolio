import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

const stats = [
  { value: "487,113", label: "App Downloads", sub: "Across 150+ countries" },
  { value: "1,940,777", label: "Runner Tracking Instances", sub: "On race day" },
  { value: "16", label: "Average Tracks per Finisher", sub: "Families weren't missing their runners anymore" },
  { value: "324,668", label: "Course Camera Views", sub: "Map helping spectators navigate to optimal viewing positions" },
];

const solutions = [
  {
    number: "1.",
    title: "Progressive Disclosure on the Map",
    body: "I designed the map to intelligently zoom and pan based on your tracked runners' locations. If all your runners were clustered in Manhattan, you'd see detailed street-level context. If they were spread across boroughs, the map pulled back to show the full route with clear proximity indicators.",
  },
  {
    number: "2.",
    title: "Visual Hierarchy for Multi-Runner Tracking",
    body: "Each runner got a distinct color-coded pin that persisted throughout the race. The map showed their current pace, estimated arrival times at upcoming mile markers, and—critically—whether you could physically reach the next viewing spot before they arrived.",
  },
  {
    number: "3.",
    title: "Course Camera Integration",
    body: "I embedded five live camera feeds directly into the map at strategic points: the start, Mile 8 (4th Avenue, Brooklyn), Mile 17 (1st Avenue, Manhattan), Mile 20 (Bronx), and the finish. Tapping a camera icon showed you exactly what that section looked like in real-time, helping spectators decide where to position themselves.",
  },
  {
    number: "4.",
    title: "The Spectator Guide Flow",
    body: "This became my favorite feature. The app calculated personalized viewing itineraries based on who you were tracking. The map showed transit routes, walking times, and recommended spots with subway directions overlaid directly on the race route.",
  },
];

export default function DesignMarathon() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            <Link to={createPageUrl("Home")} className="text-sm tracking-[0.3em] font-semibold hover:text-[#8B7355] transition-colors duration-300">
              ALFIE MARTIN
            </Link>
            <div className="hidden md:flex items-center gap-10">
              <Link to={createPageUrl("Home")} className="text-xs tracking-[0.15em] font-medium text-gray-600 hover:text-black transition-colors">HOME</Link>
              <Link to={createPageUrl("About")} className="text-xs tracking-[0.15em] font-medium text-gray-600 hover:text-black transition-colors">ABOUT</Link>
              <Link to={createPageUrl("Design")} className="text-xs tracking-[0.15em] font-medium text-gray-600 hover:text-black transition-colors">DESIGN</Link>
              <Link to={createPageUrl("DesignStrategyAI")} className="text-xs tracking-[0.15em] font-medium text-gray-600 hover:text-black transition-colors">AI DESIGN</Link>
              <Link to={createPageUrl("Contact")} className="text-xs tracking-[0.15em] font-medium px-6 py-2 border border-black hover:bg-black hover:text-white transition-all duration-300">CONTACT</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-0 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <Link to={createPageUrl("Design")} className="inline-flex items-center gap-2 text-xs tracking-[0.2em] text-gray-500 hover:text-black transition-colors mb-10">
            <ArrowLeft className="w-4 h-4" /> BACK TO DESIGN
          </Link>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-xs tracking-[0.3em] text-gray-400 mb-4">CASE STUDY · PRODUCT DESIGN</p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light leading-tight mb-6 max-w-4xl">
              Design Marathon
            </h1>
            <p className="text-xl md:text-2xl font-light text-gray-500 mb-8">Designing Live Tracking Maps for 50,000 Runners: A TCS NYC Marathon Case Study</p>

            <div className="flex flex-wrap gap-8 text-sm text-gray-500 border-t border-gray-100 pt-8 mt-8">
              <div><p className="text-xs tracking-[0.2em] text-gray-400 mb-1">ROLE</p><p>Lead Designer</p></div>
              <div><p className="text-xs tracking-[0.2em] text-gray-400 mb-1">FOCUS</p><p>Map UX · Live Tracking · Spectator Experience</p></div>
              <div><p className="text-xs tracking-[0.2em] text-gray-400 mb-1">YEAR</p><p>2022</p></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-12 w-full overflow-hidden bg-[#c8dff0]"
        style={{ maxHeight: "600px" }}>
        <img
          src="https://static.readdy.ai/image/1004722815b8cf9b36abe71f66e1ee66/e2f4a94f0a60c495ca7edb90336fdc7c.png"
          alt="TCS NYC Marathon App - Live Tracking Maps"
          className="w-full object-cover object-top" />
      </motion.div>

      {/* Challenge */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className="text-xs tracking-[0.3em] text-gray-400 mb-6">THE CHALLENGE</p>
            <p className="text-lg md:text-xl leading-relaxed text-gray-700">
              When I joined the team designing the TCS New York City Marathon app, I inherited a massive challenge: how do you help 500,000 spectators track their loved ones across 26.2 miles, five boroughs, and six hours of continuous racing?
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-gray-700 mt-6">
              Traditional marathon tracking relied on scattered timing mats and static checkpoints. Families missed their runners. Spectators guessed when to leave one viewing spot for another. The experience felt fragmented and stressful—the opposite of what a celebration should be.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Research Image */}
      <div className="px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <img
            src="https://static.readdy.ai/image/1004722815b8cf9b36abe71f66e1ee66/f8e620895d05cdd63c580c0e8082e500.png"
            alt="TCS NYC Marathon route planning and research on laptop"
            className="w-full object-cover rounded-sm" />
        </div>
      </div>

      {/* Map Design Problem */}
      <section className="py-24 px-6 lg:px-12 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className="text-xs tracking-[0.3em] text-gray-400 mb-6">THE MAP DESIGN PROBLEM</p>
            <p className="text-lg leading-relaxed text-gray-700 mb-8">The technical constraints were brutal:</p>
            <ul className="space-y-3 text-gray-700">
              {[
                "47,839 finishers generating millions of GPS pings",
                "Spectators tracking 5–10 runners simultaneously on small mobile screens",
                "Real-time updates needed across unreliable cellular networks",
                "A 26.2-mile route winding through dense urban environments",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-lg leading-relaxed text-gray-700 mt-8">
              I needed to design a map that worked when your friend was at Mile 8 in Brooklyn, your mom was approaching Mile 20 in the Bronx, and your colleague just crossed the finish—all at the same time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs tracking-[0.3em] text-gray-400 mb-12">DESIGN SOLUTIONS</p>
          <div className="grid md:grid-cols-2 gap-12">
            {solutions.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="border-t border-gray-200 pt-8">
                <span className="text-xs text-gray-400 tracking-wider">{s.number}</span>
                <h3 className="text-xl font-medium mt-3 mb-4">{s.title}</h3>
                <p className="text-gray-600 leading-relaxed">{s.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Grid */}
      <section className="px-6 lg:px-12 pb-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { src: "https://static.readdy.ai/image/1004722815b8cf9b36abe71f66e1ee66/f7f8f19099cf1da63741a03467be5359.jpeg", alt: "Runner tracking map interface" },
            { src: "https://static.readdy.ai/image/1004722815b8cf9b36abe71f66e1ee66/65fff375a06e963fe2740e0cf3f6e942.jpeg", alt: "Live camera feed integration" },
            { src: "https://static.readdy.ai/image/1004722815b8cf9b36abe71f66e1ee66/f2082ffab9220917ecfa0241b45fd31e.jpeg", alt: "Runner pace and arrival time display" },
            { src: "https://static.readdy.ai/image/1004722815b8cf9b36abe71f66e1ee66/9e786e3a991ac0a1f0567101ca479e6f.png", alt: "Route visualization with transit" },
            { src: "https://static.readdy.ai/image/1004722815b8cf9b36abe71f66e1ee66/e9aa6d8651ba6669d72c8a42dc4f80cd.png", alt: "Personalized viewing itinerary" },
            { src: "https://static.readdy.ai/image/1004722815b8cf9b36abe71f66e1ee66/5b28e7c612f3fbad3926e6d5e7b0841e.png", alt: "Personalized viewing itinerary 2" },
            { src: "https://static.readdy.ai/image/1004722815b8cf9b36abe71f66e1ee66/e13aa778c0406015931e6cd78b8954bf.jpeg", alt: "Finish line camera view" },
            { src: "https://static.readdy.ai/image/1004722815b8cf9b36abe71f66e1ee66/399abe6a4264fa6e49a9ed44edfca33a.png", alt: "Runner milestone notifications" },
            { src: "https://static.readdy.ai/image/1004722815b8cf9b36abe71f66e1ee66/61101eb70adf39495952b2e376843139.jpeg", alt: "Runner milestone notifications 2" },
          ].map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
              className={i === 8 ? "md:col-span-2" : ""}>
              <img src={img.src} alt={img.alt} className="w-full object-cover rounded-sm" />
              <p className="text-xs text-gray-400 mt-2 tracking-wider">{img.alt}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Crowding Map */}
      <section className="py-16 px-6 lg:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-xl font-light text-gray-700 mb-8">We mapped areas of the race that our research indicated would be most crowded.</p>
          <img
            src="https://static.readdy.ai/image/1004722815b8cf9b36abe71f66e1ee66/adcd5c8ff6ea4e0f904cdd0ce40f37df.png"
            alt="TCS Marathon Map Visualization"
            className="w-full object-cover rounded-sm" />
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-32 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs tracking-[0.3em] text-gray-400 mb-12">IMPACT · 2022 LAUNCH</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="border-t border-gray-200 pt-6">
                <p className="text-3xl md:text-4xl font-light mb-2">{stat.value}</p>
                <p className="text-sm font-medium mb-1">{stat.label}</p>
                <p className="text-xs text-gray-500 leading-relaxed">{stat.sub}</p>
              </motion.div>
            ))}
          </div>
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