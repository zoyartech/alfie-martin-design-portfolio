import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { RotateCcw } from 'lucide-react';
import { cn } from "@/lib/utils";

const defaultScript = [
  { role: "user", content: "I need to reset my password", delay: 600 },
  { role: "assistant", content: "I can help with that. What's the email on your account?", delay: 400, typingDuration: 1200 },
  { role: "user", content: "alex@company.com", delay: 1800 },
  { role: "assistant", content: "Got it. I just sent a reset link to alex@company.com. It should arrive within a minute.", delay: 400, typingDuration: 1600 }
];

export default function ChatbotSimulator({ script = defaultScript, title = "AI Assistant" }) {
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [stepIndex, setStepIndex] = useState(0);
  
  const containerRef = useRef(null);
  const scrollRef = useRef(null);
  const timerRef = useRef(null);
  
  const prefersReducedMotion = useReducedMotion();

  // Handle visibility change to pause sequence when tab is hidden
  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsPaused(document.hidden);
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, []);

  // Intersection Observer to start the sequence
  useEffect(() => {
    if (prefersReducedMotion) {
      setHasStarted(true);
      setMessages(script);
      setIsComplete(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.4 }
    );
    
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    
    return () => observer.disconnect();
  }, [hasStarted, prefersReducedMotion, script]);

  // Sequence Engine
  useEffect(() => {
    if (!hasStarted || isPaused || isComplete || prefersReducedMotion) return;

    if (stepIndex >= script.length) {
      setIsComplete(true);
      return;
    }

    const currentMsg = script[stepIndex];

    const delayTimer = setTimeout(() => {
      if (currentMsg.role === 'assistant') {
        setIsTyping(true);
        
        const typingTimer = setTimeout(() => {
          setIsTyping(false);
          setMessages(prev => [...prev, currentMsg]);
          setStepIndex(prev => prev + 1);
        }, currentMsg.typingDuration || 1000);
        
        timerRef.current = typingTimer;
      } else {
        setMessages(prev => [...prev, currentMsg]);
        setStepIndex(prev => prev + 1);
      }
    }, currentMsg.delay || 500);

    timerRef.current = delayTimer;

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [hasStarted, isPaused, isComplete, stepIndex, script, prefersReducedMotion]);

  // Auto-scroll to bottom
  useEffect(() => {
    if (scrollRef.current) {
      const { scrollHeight, clientHeight } = scrollRef.current;
      scrollRef.current.scrollTo({
        top: scrollHeight - clientHeight,
        behavior: prefersReducedMotion ? 'auto' : 'smooth'
      });
    }
  }, [messages, isTyping, prefersReducedMotion]);

  const handleReplay = () => {
    setMessages([]);
    setIsTyping(false);
    setIsComplete(false);
    setStepIndex(0);
    
    if (prefersReducedMotion) {
      setMessages(script);
      setIsComplete(true);
    }
  };

  const bubbleVariants = {
    hidden: { opacity: 0, y: 8, scale: 0.96 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <div 
      ref={containerRef}
      className="w-full max-w-[480px] bg-white rounded-[16px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 flex flex-col overflow-hidden relative mx-auto"
    >
      {/* Header */}
      <div className="px-4 py-3 border-b border-slate-100 flex items-center gap-2 bg-white/80 backdrop-blur-sm z-10">
        <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
        <span className="font-medium text-sm text-slate-800">{title}</span>
      </div>

      {/* Messages Area */}
      <div 
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-4 space-y-4 max-h-[600px] min-h-[300px] flex flex-col"
        aria-live="polite"
      >
        <AnimatePresence initial={false}>
          {messages.map((msg, idx) => (
            <motion.div
              key={idx}
              variants={prefersReducedMotion ? {} : bubbleVariants}
              initial="hidden"
              animate="visible"
              className={cn(
                "flex w-full",
                msg.role === "user" ? "justify-end" : "justify-start"
              )}
            >
              <div
                className={cn(
                  "px-4 py-2.5 max-w-[75%] text-sm leading-relaxed",
                  msg.role === "user" 
                    ? "bg-slate-900 text-white rounded-2xl rounded-br-[4px]" 
                    : "bg-[#F4F4F5] text-slate-800 rounded-2xl rounded-bl-[4px]"
                )}
              >
                {msg.content}
              </div>
            </motion.div>
          ))}

          {isTyping && !prefersReducedMotion && (
            <motion.div
              key="typing"
              variants={bubbleVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="flex w-full justify-start"
            >
              <div className="bg-[#F4F4F5] px-4 py-3.5 rounded-2xl rounded-bl-[4px] flex items-center gap-1">
                {[0, 1, 2].map((dot) => (
                  <motion.div
                    key={dot}
                    className="w-1.5 h-1.5 bg-slate-400 rounded-full"
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{
                      duration: 1.4,
                      repeat: Infinity,
                      ease: [0.4, 0, 0.6, 1],
                      delay: dot * 0.2
                    }}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Replay Button Overlay */}
      <AnimatePresence>
        {isComplete && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute bottom-4 right-4"
          >
            <button
              onClick={handleReplay}
              className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 shadow-sm rounded-full text-xs font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-200"
              aria-label="Replay conversation"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Replay conversation
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}