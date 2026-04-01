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
    initialData: []
  });

  return (
    <div className="min-h-screen bg-white">
      <section className="pt-32 pb-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16">
            
            <p className="text-slate-950 mb-4 text-xs font-bold uppercase tracking-[0.3em]">THOUGHTS & PROCESS</p>
            <h1 className="text-4xl font-medium md:text-6xl">Blog</h1>
            

            
          </motion.div>

          {isLoading ?
          <div className="text-center py-20 text-gray-500 font-light">Loading insights...</div> :

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
              {insights.map((insight, i) => (
                <motion.div
                  key={insight.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <Link to={createPageUrl('InsightDetail') + `?id=${insight.id}`} className="group block h-full flex flex-col">
                    {insight.cover_image ? (
                      <div className="w-full aspect-[4/3] bg-gray-100 rounded-xl mb-6 overflow-hidden">
                        <img src={insight.cover_image} alt={insight.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                      </div>
                    ) : (
                      <div className="w-full aspect-[4/3] bg-gray-50 border border-gray-100 rounded-xl mb-6 flex items-center justify-center overflow-hidden transition-colors group-hover:border-gray-200">
                        <span className="text-gray-300 font-serif text-4xl italic">Insight</span>
                      </div>
                    )}
                    <div className="flex-1 flex flex-col">
                      <div className="text-xs font-bold tracking-wider text-slate-500 uppercase mb-3">
                        {insight.created_date ? format(new Date(insight.created_date), 'MMMM d, yyyy') : 'Recently'}
                      </div>
                      <h2 className="text-2xl font-serif font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">{insight.title}</h2>
                      <p className="text-slate-600 font-sans line-clamp-3">
                        {insight.seo_description || (insight.content ? insight.content.substring(0, 150).replace(/[#*`_]/g, '') + '...' : '')}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          }
          {insights.length === 0 && !isLoading &&
          <div className="text-center py-20 text-gray-500 font-light text-lg border border-dashed border-gray-200 rounded-xl">
              Check back later for new insights and articles.
            </div>
          }
        </div>
      </section>

      



      
    </div>);

}