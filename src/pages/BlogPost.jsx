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
              we don't grasp meaning by pointing to referents but by mastering language games
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
              <h2 className="text-3xl font-light mb-8 text-gray-900">Cohort based Programs are far more effective than asynchronous classes</h2>
              <h3 className="text-2xl font-light mb-4 text-gray-900">Designing Learning Programs</h3>
              
              <p className="mb-6 text-lg">Traditional education was created for one type of learning in classrooms led by the same types of exhausted and underpaid staff. High schools in America for the most part do not prepare students for the educational journeys they choose next.</p>
              
              <p className="mb-6 text-lg">This can lead to failure time and time again. with how they allocate the funds they get from overpriced tuition to vague use of endowment funds and overpaid administrative roles. most classes end up being taught by adjunct professors making little per semester thus leading to exhaustion & little emotional investment.</p>
              
              <p className="mb-6 text-lg">Tenure roles seem to be few and far between these days. and even if you happen to be so lucky. they are typically taught by a Ph.D. student teaching assistant & very few lectures are given by the professors themselves. On the alternative, free courses are available all over the internet. Asynchronous courses are preferred by colleges due to their flexibility but this is not enough when students need support from actual professors or they are not that type of learner, to begin with</p>
              
              <p className="mb-6 text-lg">Asynchronous courses are very popular in online education. They rely on students to schedule class around their work and can be a great option for this reason. However, if you don't have a cohort or support system to help you along the way, it can be difficult to keep up with the pace of the coursework and assignments.</p>
              
              <p className="mb-6 text-lg">The cohort model is more effective. A cohort program means that students are grouped together based on when they start a program. Students all move through the class together, at the same pace, and with each other's support. The instructor is more of a facilitator of collaborative activities than a lecturer, helping guide each member of a cohort through the learning process in ways that are tailored to their unique needs and interests.</p>
              
              <p className="mb-6 text-lg">The result is individualized attention for each student, allowing them all to learn at their own pace while also supporting one another along the way.</p>
              
              <p className="mb-6 text-lg">Cohort-based programs help build accountability and support for each member of the cohort leading to higher rates of course completion and student engagement.</p>
              
              <p className="mb-6 text-lg">In a cohort-based program, the instructor becomes a facilitator and mentor rather than just a lecturer.</p>
              
              <p className="mb-6 text-lg">This is an important distinction because it allows the instructor to help each student have more insight into their learning process and identify areas where they need improvement.</p>
              
              <p className="mb-6 text-lg">It also creates a better environment for learning by fostering active participation and collaboration between students.</p>
              
              <p className="mb-6 text-lg">Cohort-based programs are often more successful even though they may be less flexible. Being part of a cohort provides a sense of community, accountability, and support.</p>
              
              <p className="mb-6 text-lg">In the job market today, high rates of involuntary attrition and low employee retention can be avoided if employers want to keep their best employees, The answers aren't as simple as throwing them a bonus or raise.</p>
              
              <p className="mb-6 text-lg">A lot of people left their jobs these past two years due to a lack of career advancement. Encouraging career development and letting your internal employees change positions within your company even if it is bilaterally might be easier said than done. But employee programs are a long-term investment. The cost of replacing employees once they leave eventually surpasses the cost of implementing successfully designed programs for your employees.</p>
              
              <p className="mb-6 text-lg">When you weigh the costs of losing employees and hiring new ones, versus a well-designed learning program with an overarching theme of critical thinking and continuous self-learning, student accountability, collaboration, and mentorship. It's easy to see the second choice pays off in the long term.</p>
            </div>
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