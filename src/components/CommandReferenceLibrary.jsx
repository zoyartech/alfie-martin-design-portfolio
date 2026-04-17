import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Mic, FileText, Navigation, Stethoscope, ChevronDown, ChevronUp } from "lucide-react";

const categories = [
  {
    id: "clinical",
    label: "Clinical",
    icon: Stethoscope,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    border: "border-emerald-200",
    commands: [
      { phrase: "Impact, set motor threshold to [value]", description: "Updates the motor threshold parameter. Requires voice read-back confirmation.", tier: 2 },
      { phrase: "Impact, update stimulation intensity to [value]", description: "Changes stimulation intensity. Requires physical screen confirmation.", tier: 3 },
      { phrase: "Impact, set protocol to [protocol name]", description: "Switches the active treatment protocol. Requires screen confirmation.", tier: 3 },
      { phrase: "Impact, start session", description: "Initiates a new treatment session.", tier: 1 },
      { phrase: "Impact, end session", description: "Closes the current session and triggers summary generation.", tier: 2 },
      { phrase: "Impact, mark response at [location]", description: "Logs a patient motor response at the specified site.", tier: 1 },
    ],
  },
  {
    id: "documentation",
    label: "Documentation",
    icon: FileText,
    color: "text-blue-600",
    bg: "bg-blue-50",
    border: "border-blue-200",
    commands: [
      { phrase: "Impact, log [symptom or observation]", description: "Appends a free-text note to the session record. Executes immediately.", tier: 1 },
      { phrase: "Impact, log patient reported [symptom]", description: "Logs a patient-reported symptom with a timestamp.", tier: 1 },
      { phrase: "Impact, add note [note text]", description: "Adds a clinician note to the session log.", tier: 1 },
      { phrase: "Impact, flag for review", description: "Marks the current session event for post-session clinician review.", tier: 1 },
      { phrase: "Impact, timestamp now", description: "Inserts a manual timestamp at the current moment in the session log.", tier: 1 },
    ],
  },
  {
    id: "navigation",
    label: "Navigation",
    icon: Navigation,
    color: "text-violet-600",
    bg: "bg-violet-50",
    border: "border-violet-200",
    commands: [
      { phrase: "Impact, show patient history", description: "Opens the patient's prior session records on the secondary display.", tier: 1 },
      { phrase: "Impact, show protocol details", description: "Displays the parameters of the currently loaded treatment protocol.", tier: 1 },
      { phrase: "Impact, go to dashboard", description: "Returns the main display to the primary session dashboard view.", tier: 1 },
      { phrase: "Impact, show session summary", description: "Opens the live session summary panel.", tier: 1 },
      { phrase: "Impact, open command reference", description: "Displays this command reference overlay on screen.", tier: 1 },
    ],
  },
];

const tierConfig = {
  1: { label: "Tier 1", color: "text-slate-600", bg: "bg-slate-100" },
  2: { label: "Tier 2", color: "text-amber-700", bg: "bg-amber-100" },
  3: { label: "Tier 3", color: "text-blue-700", bg: "bg-blue-100" },
};

function CategorySection({ category }) {
  const [open, setOpen] = useState(true);
  const Icon = category.icon;

  return (
    <div className={`rounded-xl border ${category.border} overflow-hidden`}>
      <button
        onClick={() => setOpen(!open)}
        className={`w-full flex items-center justify-between px-5 py-4 ${category.bg} transition-colors`}
      >
        <div className="flex items-center gap-3">
          <Icon className={`w-4 h-4 ${category.color}`} />
          <span className={`font-semibold text-sm tracking-wide ${category.color}`}>{category.label}</span>
          <span className="text-xs text-slate-400">{category.commands.length} commands</span>
        </div>
        {open ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="divide-y divide-slate-100">
              {category.commands.map((cmd, i) => {
                const tier = tierConfig[cmd.tier];
                return (
                  <div key={i} className="px-5 py-4 bg-white hover:bg-slate-50 transition-colors">
                    <div className="flex items-start justify-between gap-3 mb-1">
                      <code className="text-sm font-mono text-slate-800 leading-snug">"{cmd.phrase}"</code>
                      <span className={`shrink-0 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${tier.bg} ${tier.color}`}>
                        {tier.label}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed">{cmd.description}</p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function CommandReferenceLibrary({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/40 z-40"
        />
      )}

      {isOpen && (
        <motion.div
          key="panel"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", damping: 30, stiffness: 300 }}
          className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-50 flex flex-col"
        >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="bg-slate-900 p-2 rounded-lg">
                  <Mic className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h2 className="text-slate-900 font-semibold text-base">Command Reference</h2>
                  <p className="text-slate-400 text-xs">Impact TMS™ Voice Library</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-all"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Wake word note */}
            <div className="mx-6 mt-5 mb-4 bg-amber-50 border border-amber-200 rounded-xl px-4 py-3">
              <p className="text-xs text-amber-800 font-medium mb-0.5">Wake word</p>
              <p className="text-sm text-amber-900">
                All commands begin with <code className="font-mono font-bold">"Impact, …"</code> to activate the system.
              </p>
            </div>

            {/* Tier legend */}
            <div className="mx-6 mb-5 flex gap-2 flex-wrap">
              {Object.values(tierConfig).map((t) => (
                <span key={t.label} className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${t.bg} ${t.color}`}>
                  {t.label}
                </span>
              ))}
              <span className="text-[10px] text-slate-400 self-center">= confirmation required</span>
            </div>

            {/* Scrollable command list */}
            <div className="flex-1 overflow-y-auto px-6 pb-8 space-y-3">
              {categories.map((cat) => (
                <CategorySection key={cat.id} category={cat} />
              ))}
            </div>
          </motion.div>
      )}
    </AnimatePresence>
  );
}