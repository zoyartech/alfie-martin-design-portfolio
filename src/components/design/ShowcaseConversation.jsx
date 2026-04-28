import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RotateCcw, ShieldAlert, Activity, CheckCircle2 } from 'lucide-react';

const MESSAGES = [
  {
    id: 1,
    role: 'ai',
    content: "I'm reviewing your recent lab results from March 12th. What would you like to know?",
    metadata: {
      confidence: 0.98,
      model: 'clinical-v4.2',
      latency: '240ms'
    }
  },
  {
    id: 2,
    role: 'user',
    content: "Is my cholesterol still high?"
  },
  {
    id: 3,
    role: 'ai',
    content: "Your total cholesterol is 195 mg/dL, which is within the normal range. However, your LDL is slightly elevated at 112 mg/dL. Dr. Chen typically recommends keeping this under 100.",
    metadata: {
      confidence: 0.85,
      model: 'clinical-v4.2',
      latency: '850ms',
      sources: ['labs/03-12', 'notes/dr-chen']
    }
  },
  {
    id: 4,
    role: 'user',
    content: "Should I start taking statins?"
  },
  {
    id: 5,
    role: 'ai',
    content: "I cannot prescribe medication or give definitive medical advice. Elevated LDL is often managed with diet and exercise first, but Dr. Chen can discuss whether statins are appropriate for your specific cardiovascular risk profile. Shall I message her office to schedule a follow-up?",
    metadata: {
      confidence: 0.62,
      model: 'clinical-v4.2',
      latency: '1120ms',
      flags: ['medical_advice_request', 'escalation_triggered']
    }
  },
  {
    id: 6,
    role: 'user',
    content: "Yeah, let's do that."
  },
  {
    id: 7,
    role: 'ai',
    content: "I've sent a message to Dr. Chen's care team. They typically respond within 1 business day.",
    metadata: {
      confidence: 0.95,
      model: 'action-router',
      latency: '450ms',
      action: 'message_sent'
    }
  }
];

const ConfidenceBadge = ({ confidence }) => {
  if (confidence >= 0.9) {
    return (
      <div className="flex items-center gap-1.5 text-slate-400">
        <CheckCircle2 className="w-3 h-3" />
        <span>CONF {Math.round(confidence * 100)}%</span>
      </div>
    );
  }
  
  if (confidence >= 0.7) {
    return (
      <div className="flex items-center gap-1.5 text-amber-600/80 bg-amber-50/50 px-1.5 py-0.5 rounded-sm border border-amber-100/50">
        <Activity className="w-3 h-3" />
        <span>CONF {Math.round(confidence * 100)}%</span>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-1.5 text-red-600 bg-red-50 px-2 py-0.5 rounded-sm border border-red-200">
      <ShieldAlert className="w-3 h-3" />
      <span className="font-semibold">LOW CONFIDENCE ({Math.round(confidence * 100)}%)</span>
    </div>
  );
};

const TypingIndicator = () => (
  <div className="flex items-center gap-1.5 py-2 px-1">
    <motion.div
      animate={{ opacity: [0.2, 1, 0.2] }}
      transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
      className="w-1.5 h-1.5 bg-slate-400 rounded-full"
    />
    <motion.div
      animate={{ opacity: [0.2, 1, 0.2] }}
      transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
      className="w-1.5 h-1.5 bg-slate-400 rounded-full"
    />
    <motion.div
      animate={{ opacity: [0.2, 1, 0.2] }}
      transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
      className="w-1.5 h-1.5 bg-slate-400 rounded-full"
    />
  </div>
);

export default function ShowcaseConversation() {
  const [visibleMessages, setVisibleMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const timeoutsRef = useRef([]);
  const containerRef = useRef(null);

  const clearAllTimeouts = () => {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
  };

  const playSequence = (index = 0, currentVisible = []) => {
    if (index >= MESSAGES.length) {
      setIsTyping(false);
      return;
    }

    const msg = MESSAGES[index];

    if (msg.role === 'ai') {
      setIsTyping(true);
      
      // Calculate dynamic typing duration based on message length, bounded between 800ms and 2000ms
      const typingDuration = Math.min(Math.max(msg.content.length * 15, 800), 2000);

      const typeTimeout = setTimeout(() => {
        setIsTyping(false);
        const newVisible = [...currentVisible, msg];
        setVisibleMessages(newVisible);

        const nextTimeout = setTimeout(() => {
          playSequence(index + 1, newVisible);
        }, 800);
        
        timeoutsRef.current.push(nextTimeout);
      }, typingDuration);
      
      timeoutsRef.current.push(typeTimeout);
    } else {
      const newVisible = [...currentVisible, msg];
      setVisibleMessages(newVisible);

      const nextTimeout = setTimeout(() => {
        playSequence(index + 1, newVisible);
      }, 600);
      
      timeoutsRef.current.push(nextTimeout);
    }
  };

  const startReplay = () => {
    clearAllTimeouts();
    setVisibleMessages([]);
    setIsTyping(false);
    
    // Small delay before starting to make the reset feel intentional
    const startTimeout = setTimeout(() => {
      playSequence(0, []);
    }, 400);
    timeoutsRef.current.push(startTimeout);
  };

  useEffect(() => {
    startReplay();
    return clearAllTimeouts;
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [visibleMessages, isTyping]);

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden flex flex-col h-[600px] font-sans">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/50">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-emerald-500" />
          <span className="text-sm font-medium text-slate-700 tracking-wide">Clinical Assistant</span>
          <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider px-2 py-0.5 bg-slate-100 rounded-sm">Secure Session</span>
        </div>
        <button
          onClick={startReplay}
          className="flex items-center gap-1.5 text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors py-1 px-2 rounded-md hover:bg-slate-100"
        >
          <RotateCcw className="w-3 h-3" />
          Replay
        </button>
      </div>

      {/* Messages Area */}
      <div 
        ref={containerRef}
        className="flex-1 overflow-y-auto p-6 md:p-8 space-y-8 scroll-smooth"
      >
        <AnimatePresence initial={false}>
          {visibleMessages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
              className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}
            >
              {msg.role === 'ai' ? (
                <div className="flex flex-col gap-2 max-w-[85%]">
                  {/* AI Metadata Row */}
                  <div className="flex items-center gap-3 text-[10px] font-mono tracking-wider uppercase">
                    <span className="text-slate-400">{msg.metadata.model}</span>
                    <span className="text-slate-300">•</span>
                    <span className="text-slate-400">{msg.metadata.latency}</span>
                    <span className="text-slate-300">•</span>
                    <ConfidenceBadge confidence={msg.metadata.confidence} />
                  </div>
                  
                  {/* AI Content - No bubble, editorial text block with a subtle left border */}
                  <div className="pl-4 py-1 border-l-2 border-slate-200 text-slate-800 leading-relaxed">
                    {msg.content}
                  </div>
                  
                  {/* Additional Flags/Sources */}
                  {(msg.metadata.flags || msg.metadata.sources) && (
                    <div className="flex flex-wrap gap-2 pl-4 mt-1">
                      {msg.metadata.flags?.map(flag => (
                        <span key={flag} className="text-[9px] font-mono bg-slate-50 text-slate-400 px-1.5 py-0.5 rounded-sm border border-slate-100">
                          flag: {flag}
                        </span>
                      ))}
                      {msg.metadata.sources?.map(source => (
                        <span key={source} className="text-[9px] font-mono bg-slate-50 text-slate-400 px-1.5 py-0.5 rounded-sm border border-slate-100">
                          src: {source}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <div className="flex flex-col gap-1 max-w-[75%]">
                  {/* User Bubble - Sharp and structured */}
                  <div className="bg-slate-900 text-white px-5 py-3 rounded-2xl rounded-tr-sm text-sm leading-relaxed shadow-sm">
                    {msg.content}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
          
          {isTyping && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-start max-w-[85%]"
            >
              <div className="flex items-center gap-3 text-[10px] font-mono tracking-wider uppercase mb-2">
                <span className="text-slate-400">processing</span>
              </div>
              <div className="pl-4 border-l-2 border-slate-100">
                <TypingIndicator />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}