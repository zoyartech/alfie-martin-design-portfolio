import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

export default function BlogCard({ post }) {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-2xl font-light text-gray-900">{post.title}</h3>
      <div className="aspect-[16/9] w-full overflow-hidden bg-gray-100 rounded-sm">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <Link 
        to={`${createPageUrl('BlogPost')}?id=${post.id}`} 
        className="inline-flex text-sm tracking-[0.15em] border-b border-black w-fit pb-1 text-black hover:text-gray-600 hover:border-gray-600 transition-colors mt-2"
      >
        READ MORE
      </Link>
    </div>
  );
}