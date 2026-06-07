import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { FadeIn } from './CoreComponents';
import { GalleryProject } from '../types';

const GALLERY_DATA: GalleryProject[] = [
  {
    id: 'g-1',
    number: '01',
    name: 'Sharp Fade',
    category: 'Signature Cut',
    images: [
      "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512690459411-b9245aed614b?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1000&auto=format&fit=crop"
    ]
  },
  {
    id: 'g-2',
    number: '02',
    name: 'Beard Detail',
    category: 'Grooming',
    images: [
      "https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=1000&auto=format&fit=crop"
    ]
  },
  {
    id: 'g-3',
    number: '03',
    name: 'Lounge Experience',
    category: 'Atmosphere',
    images: [
      "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=1000&auto=format&fit=crop"
    ]
  }
];

export const GallerySection: React.FC = () => {
  return (
    <section 
      id="gallery" 
      className="relative z-10 w-full bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 px-5 sm:px-8 md:px-10 py-24 sm:py-32"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Gallery Heading */}
        <FadeIn y={30} delay={0} duration={0.8} className="w-full text-center">
          <h2 className="hero-heading font-black uppercase text-center text-[2.8rem] sm:text-[6vw] md:text-[8vw] lg:text-[9vw] leading-none mb-16 sm:mb-20 md:mb-28 select-none">
            Gallery
          </h2>
        </FadeIn>

        {/* Sticky Cards Stacking Loop */}
        <div className="w-full flex flex-col items-center gap-12 sm:gap-20 md:gap-24 relative">
          {GALLERY_DATA.map((card, index) => {
            return (
              <StickyCard 
                key={card.id}
                card={card}
                index={index}
                totalCards={GALLERY_DATA.length}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

interface StickyCardProps {
  card: GalleryProject;
  index: number;
  totalCards: number;
}

const StickyCard: React.FC<StickyCardProps> = ({ card, index, totalCards }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll details of individual card block
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start start"]
  });

  // Scale down card slightly when subsequent cards are active above it
  // This satisfies: targetScale = 1 - (totalCards - 1 - index) * 0.03
  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [0.95, targetScale]);

  const handleBookClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div 
      ref={containerRef}
      className="sticky w-full max-w-6xl h-[85vh] sm:h-[80vh] flex items-center justify-center pointer-events-none"
      style={{
        top: `calc(96px + ${index * 28}px)`, // top-24 with dynamic cascading index offsets
        zIndex: index + 10,
      }}
    >
      <motion.div 
        style={{ scale }}
        className="relative w-full h-[80vh] sm:h-full bg-[#0C0C0C] rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA]/40 px-4 py-6 sm:p-6 md:p-8 flex flex-col justify-between overflow-hidden shadow-2xl pointer-events-auto"
      >
        {/* Card Header row */}
        <div className="w-full flex justify-between items-center pb-4 border-b border-[#D7E2EA]/10">
          <div className="flex items-center gap-2 sm:gap-6">
            <span className="font-black text-lg sm:text-[1.8rem] text-amber-500 font-mono">
              {card.number}
            </span>
            <div className="flex flex-col text-left">
              <span className="text-[10px] sm:text-[12px] font-mono tracking-widest text-[#D7E2EA]/55 uppercase">
                {card.category}
              </span>
              <h3 className="font-extrabold uppercase text-sm sm:text-base md:text-lg lg:text-[1.6rem] text-[#D7E2EA] tracking-wide leading-tight">
                {card.name}
              </h3>
            </div>
          </div>

          <button 
            onClick={handleBookClick}
            className="rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest text-[10px] sm:text-xs md:text-sm px-4 py-1.5 sm:px-8 sm:py-2.5 md:px-10 md:py-3.5 hover:bg-[#D7E2EA]/10 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
          >
            Book Now
          </button>
        </div>

        {/* Card Body - Dual-column responsive layout */}
        <div className="flex-1 w-full grid grid-cols-1 md:grid-cols-10 gap-3 sm:gap-4 md:gap-5 mt-4 sm:mt-6 overflow-hidden">
          {/* Left Side: 40% Width stacked images */}
          <div className="md:col-span-4 flex flex-row md:flex-col gap-3 sm:gap-4 h-full">
            <div className="flex-1 w-full" style={{ height: 'clamp(130px, 16vw, 230px)' }}>
              <img 
                src={card.images[0]} 
                alt={`${card.name} style detail`}
                className="w-full h-full object-cover rounded-[20px] sm:rounded-[40px] md:rounded-[45px] hover:scale-102 transition-transform duration-500 border border-white/5"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex-1 w-full" style={{ height: 'clamp(160px, 22vw, 340px)' }}>
              <img 
                src={card.images[1]} 
                alt={`${card.name} precision angle`}
                className="w-full h-full object-cover rounded-[20px] sm:rounded-[40px] md:rounded-[45px] hover:scale-102 transition-transform duration-500 border border-white/5"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Right Side: 60% Width tall image */}
          <div className="md:col-span-6 h-full min-h-[220px] md:min-h-0">
            <img 
              src={card.images[2]} 
              alt={`${card.name} master look`}
              className="w-full h-full object-cover rounded-[30px] sm:rounded-[50px] md:rounded-[60px] hover:scale-102 transition-transform duration-500 border border-white/5"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};
