import React, { useState, useCallback, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const steps = [
  { id: 1, title: 'Diagnose', desc: 'Utterance harvesting, stakeholder interviews, behavior audit', artifact: 'Deficiency map' },
  { id: 2, title: 'Define', desc: 'Intent taxonomy across Sales, HR, and Finance', artifact: '452 labeled utterances' },
  { id: 3, title: 'Decide', desc: 'Four-outcome routing model and confidence thresholds', artifact: 'Behavior rationale doc' },
  { id: 4, title: 'Design', desc: 'Journey, chat UI, repair and escalation states', artifact: 'Flows and prototypes' },
  { id: 5, title: 'Evaluate', desc: 'Scored rubric, stress tests, handoff spec', artifact: 'Evaluation worksheet' },
];

export default function ProcessCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: 'start', slidesToScroll: 1 });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollTo = useCallback((index) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);
  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-12"
    >
      <p className="text-slate-400 mb-3 text-xs font-bold tracking-[0.3em] uppercase">Process</p>
      <h2 className="text-3xl font-wexley text-slate-900 mb-4">Five moves, in order</h2>
      <p className="text-slate-600 mb-10 text-lg leading-relaxed max-w-3xl">
        Each phase produced an artifact the next phase depended on. Nothing here was a deliverable for its own sake.
      </p>

      <div className="relative">
        <div className="overflow-hidden -ml-3" ref={emblaRef}>
          <div className="flex">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className="flex-[0_0_85%] sm:flex-[0_0_45%] lg:flex-[0_0_31%] min-w-0 pl-3"
              >
                <div className="h-full bg-[#F7F8F9] border border-slate-200 rounded-lg p-6 flex flex-col transition-shadow duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="w-10 h-10 bg-[#4A7BD4] rounded flex items-center justify-center mb-5">
                    <span className="text-white font-bold text-lg">{step.id}</span>
                  </div>
                  <h3 className="text-xl font-wexley text-slate-900 mb-3">{step.title}</h3>
                  <p className="text-slate-700 leading-relaxed mb-6 flex-1">{step.desc}</p>
                  <p className="text-[#1D9A87] font-medium text-sm pt-4 border-t border-slate-200">
                    {step.artifact}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between mt-8">
          <div className="flex gap-2">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === selectedIndex ? 'w-8 bg-slate-900' : 'w-2 bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <button
              onClick={scrollPrev}
              disabled={selectedIndex === 0}
              aria-label="Previous"
              className="w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center text-slate-700 hover:bg-slate-900 hover:text-white hover:border-slate-900 disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-slate-700 disabled:hover:border-slate-300 transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollNext}
              disabled={selectedIndex === scrollSnaps.length - 1}
              aria-label="Next"
              className="w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center text-slate-700 hover:bg-slate-900 hover:text-white hover:border-slate-900 disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-slate-700 disabled:hover:border-slate-300 transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}