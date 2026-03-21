import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { blogPosts } from '@/components/blog/blogData';
import { createPageUrl } from '@/utils';

export default function BlogPost() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');

  const post = blogPosts.find((p) => p.id === id) || blogPosts[0];

  return (
    <div className="min-h-screen bg-white">
      <main className="pt-32 pb-16 px-6 lg:px-12 max-w-4xl mx-auto">
        <Link
          to={createPageUrl('Blog')}
          className="inline-flex items-center gap-2 text-xs tracking-[0.2em] text-gray-500 hover:text-black transition-colors mb-12">
          
          <ArrowLeft className="w-4 h-4" /> BACK TO BLOG
        </Link>
        
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}>
          
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 text-gray-900 leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-500 border-b border-gray-100 pb-8">
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
              <span>•</span>
              <span>{post.category}</span>
            </div>
          </header>

          {post.image &&
          <div className="w-full aspect-video mb-12 overflow-hidden bg-gray-100 rounded-sm">
              <img
              src="https://media.base44.com/images/public/6974e154f708f4918a2b8d02/50ee6d844_BurgundyandTealModernMusicAlbumInstagramPost-2.png"
              alt={post.title}
              className="w-full h-full object-cover" />
            
            </div>
          }

          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed font-light">
            {post.content.map((block, index) => {
              if (block.type === 'paragraph') {
                return null;
              }
              if (block.type === 'heading') {
                return null;
              }
              return null;
            })}
          </div>
        </motion.article>
      </main>

      <footer className="py-8 px-6 lg:px-12 border-t border-gray-100 mt-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-400">© 2024 Alfie Martin. All rights reserved.</p>
        </div>
      </footer>
    </div>);

}