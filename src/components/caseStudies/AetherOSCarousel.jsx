import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel';

const slides = [
  {
    src: 'https://media.base44.com/images/public/6974e154f708f4918a2b8d02/b4912d391_Screenshot2026-07-23at90520PM.png',
    alt: 'AetherOS logo lockups on light and dark backgrounds',
  },
  {
    src: 'https://media.base44.com/images/public/6974e154f708f4918a2b8d02/a26205c7f_Screenshot2026-07-23at90539PM.png',
    alt: 'AetherOS typography specimens and color palette',
  },
  {
    src: 'https://media.base44.com/images/public/6974e154f708f4918a2b8d02/1d010f13a_Screenshot2026-07-23at90558PM.png',
    alt: 'AetherOS brand mark variations, patterns, and application mockups',
  },
];

export default function AetherOSCarousel() {
  return (
    <div className="w-full rounded-xl overflow-hidden shadow-sm border border-slate-200 bg-white">
      <Carousel opts={{ loop: true, align: 'center' }} className="w-full">
        <CarouselContent>
          {slides.map((slide, i) => (
            <CarouselItem key={i}>
              <div className="flex items-center justify-center p-2">
                <img
                  src={slide.src}
                  alt={slide.alt}
                  className="max-w-full h-auto object-contain"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}