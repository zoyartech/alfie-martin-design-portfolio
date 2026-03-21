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
            <p className="mb-6 text-lg"><strong className="font-bold">Step 1:</strong> Write a real hypothesis. Not "I think the new flow is better." Try: "Reducing onboarding from 5 steps to 3 will increase completion rate by 10%." Specific. Measurable. Falsifiable. If you can't be wrong, you're not testing anything.</p>
            <p className="mb-6 text-lg"><strong className="font-bold">Step 2:</strong> Pick one variable to change. One. The button copy. The layout. The flow length. Not all three at once. If you change multiple things and metrics move, you won't know which change did it and you'll ship a bundle of assumptions disguised as a "win."</p>
            <p className="mb-6 text-lg"><strong className="font-bold">Step 3:</strong> Define your success metric before you launch. Decide what "working" looks like in advance. Is it activation rate? Retention at day 7? Revenue per user? Lock this in now, because if you wait until after, you will unconsciously pick whichever metric flatters your design.</p>
            <p className="mb-6 text-lg"><strong>Step 4:</strong> Set up a proper A/B test with a control. Your control group sees the current experience. Your test group sees the new one. Users are randomly assigned no cherry-picking, no "let's just test it on the engaged cohort." Random assignment is the whole game. Without it, you're measuring who your users already were, not what your design did.</p>
            <p className="mb-6 text-lg"><strong>Step 5:</strong> Calculate your sample size in advance. Use an online calculator (Evan Miller's is solid). Plug in your current baseline metric, the minimum effect you'd care about, and your desired confidence level (usually 95%). This tells you how many users you need before results mean anything. Running a test on 200 users when you needed 5,000 is just expensive guessing.</p>
            <p className="mb-6 text-lg"><strong>Step 6:</strong> Let it run. Stop peeking. Set your runtime or sample target and walk away. Checking daily and stopping the moment things look good inflates your false positive rate. You're not watching a horse race —you're collecting data. Let it finish.</p>
            <p className="mb-6 text-lg"><strong>Step 7:</strong> Analyze what you planned to analyze. Look at your pre-defined metric. Did it move? Is it statistically significant? Great or not great, but either way you learned something. Do not start slicing by random segments hoping to find a win buried in left-handed users who signed up on Thursdays. If you explore, label those findings as hypotheses for the next test, not conclusions from this one.</p>
            <p className="mb-6 text-lg"><strong>Step 8:</strong> Document and share wins and losses. The experiments that don't work are just as valuable as the ones that do, because they prevent your team from re-testing the same bad idea six months later. A null result isn't a failure; it's one less wrong direction to waste time on.</p>
            <p className="mb-6 text-lg"><strong>Common traps to avoid:</strong> launching without a control group and just comparing before/after (seasonality and external factors will fool you every time), testing on a biased segment, changing the experiment mid-flight because "it felt off," and treating directional-but-not-significant results as green lights to ship.</p>
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