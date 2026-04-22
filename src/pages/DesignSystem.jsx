import React from 'react';
import { motion } from 'framer-motion';

export default function DesignSystem() {
  return (
    <div className="w-full min-h-screen pt-[56px] bg-white">
      <iframe 
        src="/design-system.html" 
        title="Design System" 
        className="w-full h-[calc(100vh-56px)] border-0" 
        allow="clipboard-write" 
        allowFullScreen
      ></iframe>
    </div>
  );
}