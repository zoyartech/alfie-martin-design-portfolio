import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowLeft } from "lucide-react";

export default function SystemsThinkingPoem() {
  return (
    <div className="min-h-screen bg-[#faf9f6] text-slate-900 font-sans selection:bg-pink-100 selection:text-pink-900 pb-20 pt-32">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=PT+Serif:ital,wght@0,400;0,700;1,400;1,700&display=swap');
        
        .font-serif {
          font-family: "PT Serif", ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
        }
        .font-sans {
          font-family: "DM Sans", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
        }
      `}</style>
      <div className="max-w-3xl mx-auto px-6 lg:px-12">
        <Link
          to={createPageUrl("Writing")}
          className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors mb-12">
          
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Writing
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center">
          
          <img
            src="https://media.base44.com/images/public/6974e154f708f4918a2b8d02/30c534b97_Screenshot2026-03-21at93233PM.png"
            alt="Systems Thinking"
            className="w-full max-w-2xl mx-auto rounded-xl shadow-sm mb-12" />
          
          <p className="text-xs tracking-[0.3em] text-gray-400 mb-6 font-sans uppercase">A Poem</p>
          <h1 className="text-4xl md:text-5xl font-light mb-12 font-serif text-slate-900">
            Systems Thinking
          </h1>
          
          <div className="prose prose-lg prose-slate mx-auto font-serif md:text-center text-slate-700 leading-relaxed space-y-6">
            




            
            




            
            <p>I refuse to inherit your assumptions. ...When everyone else is busy rearranging the furniture
Me? well... I'm in the basement asking whether we need a house at all & then immediately wondering what happens to Ikea if nobody builds houses anymore, and then what happens to the suburbs, and then what kind of person I become when I've thought myself so far down this rabbit hole that I'm standing in amazon, (the rain forest) arguing with a theoretical lumber baron about the ontological status of a chair. That's just a Tuesday for me. 

First principles throws a pebble. Second-order thinking watches the ripple hit the other side of the pond. Systems thinking realizes the pond is inside a bigger pond & something upstream changed the pH three months ago and that's why the fish are weird now. 

I am probably annoying at dinner parties BUT I am rarely, surprised.</p>
          </div>
        </motion.div>
      </div>
    </div>);

}