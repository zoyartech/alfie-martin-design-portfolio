import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import MobileNav from "@/components/MobileNav";

export default function TCSMarathon() {
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
              <Link to={createPageUrl("Home")} className="text-xs tracking-[0.2em] text-gray-500 hover:text-black transition-colors">HOME</Link>
              <Link to={createPageUrl("About")} className="text-xs tracking-[0.2em] text-gray-500 hover:text-black transition-colors">ABOUT</Link>
              <Link to={createPageUrl("Design")} className="text-xs tracking-[0.2em] text-black border-b border-black pb-1">DESIGN</Link>
              <Link to={createPageUrl("Contact")} className="text-xs tracking-[0.2em] text-gray-500 hover:text-black transition-colors">CONTACT</Link>
            </div>
            <MobileNav activePage="Design" />
          </div>
        </div>
      </nav>

      {/* Back Button */}
      <div className="pt-28 pb-4 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <Link to={createPageUrl("Design")} className="inline-flex items-center gap-2 text-xs tracking-[0.2em] text-gray-500 hover:text-black transition-colors">
            <ArrowLeft className="w-4 h-4" /> BACK TO DESIGN
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="relative h-[85vh] flex items-end overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1513593771513-7b58b6c4af38?w=1600&q=80"
          alt="TCS NYC Marathon"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-16 w-full">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="text-xs tracking-[0.3em] text-white/70 mb-4">TCS WORLDWIDE / NORTH AMERICA</p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white leading-tight max-w-4xl">
              TCS NYC Marathon: Bringing the world to streets of New York
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Project Meta */}
      <section className="py-16 px-6 lg:px-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "ROLE", value: "Lead Designer, Interactive Map & Live Tracking" },
              { label: "CLIENT", value: "TCS / NYRR" },
              { label: "CATEGORY", value: "Product Design" },
              { label: "YEAR", value: "2022" },
            ].map((item, i) => (
              <div key={i}>
                <p className="text-xs tracking-[0.2em] text-gray-400 mb-1">{item.label}</p>
                <p className="text-gray-800 text-sm">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className="text-xs tracking-[0.3em] text-gray-400 mb-6">THE CHALLENGE</p>
            <h2 className="text-3xl md:text-4xl font-light mb-8">Tracking 50,000 Runners in Real Time</h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-6">
              When I joined the team designing the TCS New York City Marathon app, I inherited a massive challenge: how do you help 500,000 spectators track their loved ones across 26.2 miles, five boroughs, and six hours of continuous racing?
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              Traditional marathon tracking relied on scattered timing mats and static checkpoints. Families missed their runners. Spectators guessed when to leave one viewing spot for another. The experience felt fragmented and stressful—the opposite of what a celebration should be.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Research Image */}
      <section className="px-6 lg:px-12 pb-16">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <img
              src="https://static.readdy.ai/image/1004722815b8cf9b36abe71f66e1ee66/f8e620895d05cdd63c580c0e8082e500.png"
              alt="TCS NYC Marathon route planning and research"
              className="w-full object-cover"
            />
            <p className="text-xs text-gray-400 tracking-wider mt-3">Route planning and early research phase</p>
          </motion.div>
        </div>
      </section>

      {/* The Map Design Problem */}
      <section className="py-20 px-6 lg:px-12 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className="text-xs tracking-[0.3em] text-gray-400 mb-6">THE PROBLEM</p>
            <h2 className="text-3xl md:text-4xl font-light mb-8">The Map Design Problem</h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-8">The technical constraints were brutal:</p>
            <ul className="space-y-4 mb-8">
              {[
                "47,839 finishers generating millions of GPS pings",
                "Spectators tracking 5–10 runners simultaneously on small mobile screens",
                "Real-time updates needed across unreliable cellular networks",
                "A 26.2-mile route winding through dense urban environments",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-600">
                  <span className="text-black font-medium mt-0.5">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-600 leading-relaxed text-lg">
              I needed to design a map that worked when your friend was at Mile 8 in Brooklyn, your mom was approaching Mile 20 in the Bronx, and your colleague just crossed the finish—all at the same time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Map Image */}
      <section className="px-6 lg:px-12 py-16">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/698e5adb6017e5371f08300f/c6a6a3211_Screenshot2026-02-12at125302AM.png"
              alt="Marathon route map showing facilities and spectator locations"
              className="w-full object-cover"
            />
            <p className="text-xs text-gray-400 tracking-wider mt-3">Mapping runner density and spectator facilities across the 26.2-mile route</p>
          </motion.div>
        </div>
      </section>

      {/* Design Solutions */}
      <section className="py-20 px-6 lg:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className="text-xs tracking-[0.3em] text-gray-400 mb-12">DESIGN SOLUTIONS</p>
            <h2 className="text-3xl md:text-4xl font-light mb-12">Four Key Design Decisions</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                num: "01",
                title: "Progressive Disclosure on the Map",
                desc: "I designed the map to intelligently zoom and pan based on your tracked runners' locations. If all your runners were clustered in Manhattan, you'd see detailed street-level context. If they were spread across boroughs, the map pulled back to show the full route with clear proximity indicators.",
              },
              {
                num: "02",
                title: "Visual Hierarchy for Multi-Runner Tracking",
                desc: "Each runner got a distinct color-coded pin that persisted throughout the race. The map showed their current pace, estimated arrival times at upcoming mile markers, and—critically—whether you could physically reach the next viewing spot before they arrived.",
              },
              {
                num: "03",
                title: "Course Camera Integration",
                desc: "I embedded five live camera feeds directly into the map at strategic points: the start, Mile 8 (Brooklyn), Mile 17 (Manhattan), Mile 20 (Bronx), and the finish. Tapping a camera icon showed you exactly what that section looked like in real-time.",
              },
              {
                num: "04",
                title: "The Spectator Guide Flow",
                desc: "This became my favorite feature. The app calculated personalized viewing itineraries based on who you were tracking. The map showed transit routes, walking times, and recommended spots with subway directions overlaid directly on the race route.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="border-t-2 border-black pt-8"
              >
                <span className="text-xs text-gray-400 tracking-wider">{item.num}</span>
                <h3 className="text-xl font-medium mt-4 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* App Screenshots */}
      <section className="py-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/698e5adb6017e5371f08300f/4f4e31cba_Screenshot2026-02-12at120603AM.png"
              alt="Download the Official App of New York Road Runners"
              className="w-full object-cover"
            />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }} className="flex flex-col justify-center">
            <img
              src="https://static.readdy.ai/image/1004722815b8cf9b36abe71f66e1ee66/775fcd632a1536f806f8597bb6627a8f.png"
              alt="TCS Marathon Map Visualization"
              className="w-full object-cover"
            />
            <p className="text-xs text-gray-400 tracking-wider mt-3">Final map visualization with multi-runner tracking</p>
          </motion.div>
        </div>
      </section>

      {/* iPhone Mockup */}
      <section className="py-16 px-6 lg:px-12 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.img
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/698e5adb6017e5371f08300f/29f280118_shadow-overlay-isometric-two-iphone-12-pro-pacific-blue-mockup-template-698e041a51576f15de4f37b3-2x.png"
            alt="TCS Marathon App on iPhone devices"
            className="w-full max-w-2xl mx-auto"
          />
        </div>
      </section>

      {/* Impact / Results */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className="text-xs tracking-[0.3em] text-gray-400 mb-10">THE 2022 LAUNCH RESULTS</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { stat: "4.2M", label: "App Downloads across 150+ countries" },
                { stat: "1,940,777", label: "Runner Tracking Instances on race day" },
                { stat: "16", label: "Average Tracks per Finisher" },
                { stat: "324,668", label: "Course Camera Views" },
              ].map((r, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="border-t-2 border-black pt-6"
                >
                  <p className="text-4xl font-light mb-2">{r.stat}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{r.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 lg:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className="text-xs tracking-[0.3em] text-gray-400 mb-12">WHAT SPECTATORS ARE SAYING</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { quote: "This app completely transformed our marathon experience. We tracked three family members and never missed them once. The estimated arrival times were spot-on!", name: "Sarah Chen", title: "Marathon Spectator, 2023" },
              { quote: "As someone who's spectated the NYC Marathon for 10 years, this was the first time I felt like I had a real plan. The subway directions were a lifesaver.", name: "Michael Rodriguez", title: "Annual Spectator" },
              { quote: "The live camera feeds helped me know exactly when to get to each viewing spot. I saw my wife at three different locations thanks to this app.", name: "David Kim", title: "First-Time Spectator" },
            ].map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="border-t border-gray-300 pt-8"
              >
                <p className="text-gray-700 leading-relaxed mb-6 text-sm">"{t.quote}"</p>
                <p className="font-medium text-sm">{t.name}</p>
                <p className="text-gray-400 text-xs tracking-wider">{t.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Webby Recognition */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className="text-xs tracking-[0.3em] text-gray-400 mb-8">RECOGNITION</p>
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/698e5adb6017e5371f08300f/f12fda9cd_Screenshot2026-02-12at121328AM.png"
              alt="The Webby Awards"
              className="mx-auto max-w-xs"
            />
            <p className="text-gray-500 mt-4 text-sm">People's Choice Winner of a Webby</p>
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