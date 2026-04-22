import React from 'react';
import { motion } from 'framer-motion';

export default function DesignSystem() {
  return (
    <div className="w-full min-h-screen pt-[56px] bg-white">
      <iframe 
        src="https://claude.site/public/artifacts/b8b7d1c4-b50e-474a-9a2c-4f102be723d0/embed" 
        title="Design System" 
        className="w-full h-[calc(100vh-56px)] border-0" 
        allow="clipboard-write" 
        allowFullScreen
      ></iframe>
    </div>
  );
}