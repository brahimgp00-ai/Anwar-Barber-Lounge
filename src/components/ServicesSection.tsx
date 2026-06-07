import React from 'react';
import { FadeIn } from './CoreComponents';
import { ServiceItem } from '../types';

const SERVICES_DATA: ServiceItem[] = [
  {
    id: 's-haircut',
    number: '01',
    name: 'Haircut',
    description: 'Clean, modern haircuts shaped to your face, style, and lifestyle, with attention to detail from consultation to finish.'
  },
  {
    id: 's-fade',
    number: '02',
    name: 'Skin Fade',
    description: 'Sharp fades and blended transitions designed for a fresh, polished look with precise lines and smooth finishing.'
  },
  {
    id: 's-beard',
    number: '03',
    name: 'Beard Styling',
    description: 'Beard trimming, shaping, and grooming that defines your features and keeps your look clean, structured, and confident.'
  },
  {
    id: 's-style',
    number: '04',
    name: 'Hair Styling',
    description: 'Premium styling for everyday looks, special occasions, and polished finishes using the right products and techniques.'
  },
  {
    id: 's-groom',
    number: '05',
    name: 'Grooming Experience',
    description: 'A complete barber lounge experience built around comfort, precision, hygiene, and a premium atmosphere.'
  }
];

export const ServicesSection: React.FC = () => {
  return (
    <section 
      id="services" 
      className="relative z-10 w-full bg-[#FFFFFF] text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Section Heading with scale transition */}
        <FadeIn y={30} delay={0} duration={0.8} className="w-full text-center">
          <h2 className="font-black uppercase tracking-tight text-center text-[#0C0C0C] text-[2.8rem] sm:text-[6vw] md:text-[8vw] lg:text-[9vw] leading-none mb-16 sm:mb-20 md:mb-28 select-none">
            Services
          </h2>
        </FadeIn>

        {/* Services List Column */}
        <div className="w-full max-w-5xl flex flex-col">
          {SERVICES_DATA.map((item, index) => {
            return (
              <FadeIn 
                key={item.id} 
                y={40} 
                delay={index * 0.12} 
                duration={0.75}
                className="w-full border-t border-[#0C0C0C]/15 last:border-b py-8 sm:py-10 md:py-12 group transition-all duration-300 hover:bg-[#0C0C0C]/[0.02]"
              >
                <div className="w-full flex flex-col md:flex-row md:items-center justify-between gap-4 sm:gap-6 md:gap-12 lg:gap-16">
                  {/* Left row cell: massive layout number */}
                  <div className="flex-shrink-0 flex items-baseline md:items-center md:justify-center md:w-[160px]">
                    <span className="font-black tracking-tighter text-[#000000] text-[3.2rem] xs:text-[4rem] sm:text-[6vw] md:text-[8vw] lg:text-[140px] leading-none select-none opacity-80 group-hover:scale-105 group-hover:text-amber-900/10 transition-all duration-500">
                      {item.number}
                    </span>
                  </div>

                  {/* Right stacked text column */}
                  <div className="flex-grow flex flex-col text-left gap-1 sm:gap-2">
                    <h3 className="font-extrabold uppercase text-[#0C0C0C] text-lg sm:text-[1.5rem] md:text-[1.8rem] lg:text-[2.1rem] tracking-normal leading-snug group-hover:translate-x-2 transition-transform duration-500">
                      {item.name}
                    </h3>
                    <p className="font-light text-[#0C0C0C]/75 leading-relaxed max-w-2xl text-sm sm:text-base md:text-[1.1rem] lg:text-[1.25rem]">
                      {item.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};
