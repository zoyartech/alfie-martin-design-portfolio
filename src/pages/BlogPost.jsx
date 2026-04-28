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
            
            
            
            
            
            
            
            
            <div className="space-y-6">
              
              
              
              <p className="mb-6 text-xl">Wittgenstein is oddly relevant. His claim that “meaning” is use, that we don't grasp meaning by pointing to referents but by mastering language games. This is basically what a transformer does. Imagine learning all the moves without ever touching the worl?. The fact that LLMs work at all is partial vindication of his view; the fact that they “hallucinate” is am excellentt defemse on the part where he mentions language games are embedded in forms of life, that is a huge thing however that LLMs lack.
Walter Benjamin would have said that generative AI is "The Work of Art in the Age of Mechanical Reproduction" basically wrote the viral post thirty years before the technology existed. Pair him with Baudrillard on simulacra: AI output is the limit case of his fourth-order simulation, where signs refer to nothing but other signs. Things like deepfakes, synthetic media, training data eating its own tail like the weird ouraboras symbol.
</p>
              
              <p className="mb-6 text-lg font-normal">Walter Benjamin would have said that generative AI is "The Work of Art in the Age of Mechanical Reproduction" basically wrote the viral post thirty years before the technology existed. Pair him with Baudrillard on simulacra: AI output is the limit case of his fourth-order simulation, where signs refer to nothing but other signs. Things like deepfakes, synthetic media, training data eating its own tail like the weird ouraboras symbol.

Walter Benjamin and Ludwig Wittgenstein never met. They wouldn’t have gotten along. Benjamin wrote sentences that go on for entire pages and feel like they have just punched you in the head.  Wittgenstein wrote in bullet lists, like a guy trying to debug language itself. They came from opposite land. Benjamin out of German Marxism and the Frankfurt School, Wittgenstein out of the icy logic of Cambridge analytic philosophy. They had almost nothing in common.
Exept one topic they both revisted often.
They were both trying to name what gets lost when you strip a practice from its surroundings. Wittgenstein called it the form of life or the embodied, historical, biological substrate that language games rest on top of. Benjamin called it aura , the unique presence of a work in its place and time, its embeddedness in tradition and ritual. Different vocabulary. Same shape. And between the two of them, they gave us the cleanest framework anyone has for what is actually missing from a language model.</p>
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
            </div>
          </div>
        </motion.article>
      </main>

      <footer className="py-8 px-6 lg:px-12 border-t border-gray-100 mt-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-400">© 2024 Alfie Martin. All rights reserved.</p>
        </div>
      </footer>
    </div>);}