import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { base44 } from '@/api/base44Client';
import { useQuery } from '@tanstack/react-query';
import { createPageUrl } from '@/utils';
import { format } from 'date-fns';

export default function Insights() {
  const { data: insights, isLoading } = useQuery({
    queryKey: ['insights'],
    queryFn: () => base44.entities.Insight.list('-created_date', 50),
    initialData: [],
  });

  return (
    <div className="min-h-screen bg-white">
      <section className="pt-32 pb-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <p className="text-xs tracking-[0.3em] text-gray-400 mb-4 uppercase">Thoughts & Process</p>
            <h1 className="text-4xl md:text-6xl font-light">Insights</h1>
            <p className="mt-6 text-gray-500 max-w-2xl text-lg font-light leading-relaxed">
              Long-form articles and deep dives into my design process, methodology, and the challenges I've tackled in product design and UX strategy.
            </p>
          </motion.div>

          {isLoading ? (
            <div className="text-center py-20 text-gray-500 font-light">Loading insights...</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
              {insights.map((insight, i) => (
                <motion.div
                  key={insight.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <Link to={createPageUrl(`InsightDetail?id=${insight.id}`)} className="group block">
                    <div className="aspect-[4/3] mb-6 overflow-hidden bg-gray-100 rounded-lg">
                      {insight.cover_image ? (
                        <img 
                          src={insight.cover_image} 
                          alt={insight.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                      ) : (
                        <div className="w-full h-full bg-slate-200 flex items-center justify-center text-slate-400 group-hover:scale-105 transition-transform duration-700 font-light">
                          No Cover Image
                        </div>
                      )}
                    </div>
                    <div className="text-xs tracking-wider text-gray-500 mb-3 uppercase">
                      {insight.created_date ? format(new Date(insight.created_date), 'MMMM d, yyyy') : 'Recently'}
                    </div>
                    <h3 className="text-2xl font-light text-gray-900 mb-3 group-hover:text-gray-600 transition-colors">
                      {insight.title}
                    </h3>
                    <p className="text-gray-600 font-light leading-relaxed">
                      {insight.seo_description}
                    </p>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
          {insights.length === 0 && !isLoading && (
            <div className="text-center py-20 text-gray-500 font-light text-lg border border-dashed border-gray-200 rounded-xl">
              Check back later for new insights and articles.
            </div>
          )}
        </div>
      </section>

      <footer className="py-8 px-6 lg:px-12 border-t border-gray-100 mt-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-400">© 2024 Alfie Martin. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}