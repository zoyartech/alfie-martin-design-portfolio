import React from 'react';

export default function RCM2() {
  const images = [
    "https://media.base44.com/images/public/6974e154f708f4918a2b8d02/df332dcad_1.png",
    "https://media.base44.com/images/public/6974e154f708f4918a2b8d02/6057ab5d5_2.png",
    "https://media.base44.com/images/public/6974e154f708f4918a2b8d02/a1b26db8c_3.png",
    "https://media.base44.com/images/public/6974e154f708f4918a2b8d02/56a998723_4.png",
    "https://media.base44.com/images/public/6974e154f708f4918a2b8d02/6473632f7_5.png",
    "https://media.base44.com/images/public/6974e154f708f4918a2b8d02/fc6de0d2e_6.png",
    "https://media.base44.com/images/public/6974e154f708f4918a2b8d02/4ce8d50ab_Screenshot2026-03-29at34750PM.png",
    "https://media.base44.com/images/public/6974e154f708f4918a2b8d02/aabe20d14_top-view-iphone-13-pro-with-an-app-logo-detail-mockup-template-69c98c7c882c70c8e3d349c4-2x.png",
    "https://media.base44.com/images/public/6974e154f708f4918a2b8d02/327038fc5_Screenshot2026-03-29at35314PM.png"
  ];

  return (
    <div className="min-h-screen bg-[#e4e3dc] pt-20 pb-12 flex flex-col items-center gap-12 px-4 md:px-8">
      <div className="w-full max-w-7xl mx-auto flex flex-col gap-8 md:gap-16">
        {images.map((src, index) => (
          <img 
            key={index} 
            src={src} 
            alt={`Rockefeller Capital Management Presentation Slide ${index + 1}`} 
            className={`h-auto shadow-2xl ${index === images.length - 2 ? 'w-1/2 mx-auto' : 'w-full'}`}
          />
        ))}
      </div>
    </div>
  );
}