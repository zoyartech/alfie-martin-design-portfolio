import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { base44 } from '@/api/base44Client';
import { useQuery } from '@tanstack/react-query';
import { createPageUrl } from '@/utils';
import ReactMarkdown from 'react-markdown';
import { format } from 'date-fns';

export default function InsightDetail() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');

  const { data: insight, isLoading, error } = useQuery({
    queryKey: ['insight', id],
    queryFn: async () => {
      const result = await base44.entities.Insight.filter({ id });
      return result[0] || null;
    },
    enabled: !!id,
  });

  if (isLoading) {
    return <div className="min-h-screen bg-white flex items-center justify-center font-light text-gray-500">Loading insight...</div>;
  }

  if (!insight || error) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center">
        <h2 className="text-2xl font-light mb-4">Insight not found</h2>
        <Link to={createPageUrl('Insights')} className="text-sm tracking-wider uppercase text-gray-500 hover:text-black transition-colors">Return to Insights</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <main className="pt-32 pb-16 px-6 lg:px-12 max-w-3xl mx-auto">
        <Link
          to={createPageUrl('Insights')}
          className="inline-flex items-center gap-2 text-xs tracking-[0.2em] text-gray-500 hover:text-black transition-colors mb-12">
          <ArrowLeft className="w-4 h-4" /> BACK TO INSIGHTS
        </Link>
        
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}>
          
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 text-gray-900 leading-tight">
              {insight.title}
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-500 tracking-wider uppercase font-medium">
              <span>{insight.created_date ? format(new Date(insight.created_date), 'MMMM d, yyyy') : 'Recently'}</span>
            </div>
          </header>

          {insight.cover_image && (
            <div className="w-full aspect-[21/9] mb-12 overflow-hidden bg-gray-100 rounded-lg">
              <img
                src={insight.cover_image}
                alt={insight.title}
                className="w-full h-full object-cover" 
              />
            </div>
          )}

          <div className="max-w-none text-gray-800 leading-relaxed font-light">
            <ReactMarkdown
              components={{
                h1: ({node, ...props}) => <h1 className="text-4xl font-light mt-12 mb-6 text-gray-900" {...props} />,
                h2: ({node, ...props}) => <h2 className="text-3xl font-light mt-10 mb-5 text-gray-900" {...props} />,
                h3: ({node, ...props}) => <h3 className="text-2xl font-light mt-8 mb-4 text-gray-900" {...props} />,
                p: ({node, ...props}) => <p className="mb-6 text-lg leading-relaxed" {...props} />,
                ul: ({node, ...props}) => <ul className="list-disc pl-6 mb-6 text-lg space-y-2" {...props} />,
                ol: ({node, ...props}) => <ol className="list-decimal pl-6 mb-6 text-lg space-y-2" {...props} />,
                li: ({node, ...props}) => <li className="pl-2" {...props} />,
                a: ({node, ...props}) => <a className="text-blue-600 hover:text-blue-800 underline decoration-1 underline-offset-4 transition-colors" {...props} />,
                blockquote: ({node, ...props}) => <blockquote className="border-l-4 border-gray-200 pl-6 italic my-8 text-gray-600 text-xl" {...props} />,
                strong: ({node, ...props}) => <strong className="font-medium text-gray-900" {...props} />,
                img: ({node, ...props}) => <img className="rounded-lg my-8 w-full shadow-sm" {...props} alt={props.alt || ''} />,
              }}
            >
              {insight.content}
            </ReactMarkdown>
          </div>
        </motion.article>
      </main>

      <footer className="py-8 px-6 lg:px-12 border-t border-gray-100 mt-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-400">© 2024 Alfie Martin. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}