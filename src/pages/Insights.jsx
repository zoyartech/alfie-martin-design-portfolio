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
            
            <p className="text-xs tracking-[0.3em] text-gray-400 mb-4 uppercase">Thoughts & Process</p>
            <h1 className="text-4xl font-medium md:text-6xl">Blog</h1>
            

            
          </motion.div>

          {isLoading ?
          <div className="text-center py-20 text-gray-500 font-light">Loading insights...</div> :

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
              {insights.map((insight, i) =>
            <motion.div
              key={insight.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}>
              
                  






















              
                </motion.div>
            )}
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