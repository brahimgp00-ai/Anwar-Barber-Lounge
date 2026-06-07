import React, { useRef, useEffect } from 'react';

const IMAGES = [
  "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1512690459411-b9245aed614b?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1470259078422-826894b933aa?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1519415387722-a1c3bbef716c?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1526045478516-99145907023c?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1200&auto=format&fit=crop"
];

export const MarqueeSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const sectionTop = window.scrollY + rect.top;
      
      // Calculate scroll offset based on scroll position relative to container
      const offset = (window.scrollY - sectionTop + window.innerHeight) * 0.35;
      
      const r1Val = offset - 300;
      const r2Val = -(offset - 300);

      if (row1Ref.current) {
        row1Ref.current.style.transform = `translate3d(${r1Val}px, 0px, 0px)`;
      }
      if (row2Ref.current) {
        row2Ref.current.style.transform = `translate3d(${r2Val}px, 0px, 0px)`;
      }
    };

    // Passive scroll listener for excellent mobile/desktop scroll frame rates
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Run once on load to populate coordinates
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Split images: 11 for Row 1, 10 for Row 2
  const row1Images = IMAGES.slice(0, 11);
  const row2Images = IMAGES.slice(11);

  // Triple images for seamless endless horizontal flow coverage
  const tripledRow1 = [...row1Images, ...row1Images, ...row1Images];
  const tripledRow2 = [...row2Images, ...row2Images, ...row2Images];

  return (
    <section 
      ref={containerRef}
      id="marquee"
      className="relative bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden select-none"
    >
      <div className="flex flex-col gap-3 md:gap-4 w-full">
        {/* Row 1: Left to Right movement */}
        <div className="w-full overflow-hidden flex whitespace-nowrap">
          <div 
            ref={row1Ref} 
            className="flex gap-3 md:gap-4 will-change-transform"
            style={{ 
              transition: 'transform 0.1s ease-out',
              transform: 'translate3d(0,0,0)'
            }}
          >
            {tripledRow1.map((url, i) => (
              <div 
                key={`r1-${i}`}
                className="flex-shrink-0 w-[240px] sm:w-[320px] md:w-[420px] h-[160px] sm:h-[210px] md:h-[270px] rounded-2xl overflow-hidden border border-white/5 shadow-lg bg-[#141414]"
              >
                <img 
                  src={url} 
                  alt="Premium Barber Marquee Asset" 
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Right to Left movement */}
        <div className="w-full overflow-hidden flex whitespace-nowrap">
          <div 
            ref={row2Ref} 
            className="flex gap-3 md:gap-4 will-change-transform"
            style={{ 
              transition: 'transform 0.1s ease-out',
              transform: 'translate3d(0,0,0)'
            }}
          >
            {tripledRow2.map((url, i) => (
              <div 
                key={`r2-${i}`}
                className="flex-shrink-0 w-[240px] sm:w-[320px] md:w-[420px] h-[160px] sm:h-[210px] md:h-[270px] rounded-2xl overflow-hidden border border-white/5 shadow-lg bg-[#141414]"
              >
                <img 
                  src={url} 
                  alt="Premium Barber Marquee Asset" 
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
