import React from 'react';
import { FadeIn, AnimatedText, ContactButton } from './CoreComponents';
import { Scissors, Sparkles, Award, ShieldCheck } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section 
      id="about" 
      className="relative min-h-screen w-full flex flex-col justify-center items-center px-5 sm:px-8 md:px-10 py-20 bg-[#0C0C0C] overflow-hidden"
    >
      {/* DECORATIVE PORTRAITS CORNERS */}
      
      {/* 1. Top-Left Floating Portrait: delay 0.1, x: -80, y: 0 */}
      <FadeIn 
        x={-80} 
        y={0} 
        delay={0.1} 
        duration={0.9}
        className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] z-10 pointer-events-none hidden xs:block"
      >
        <div className="relative group">
          <div className="absolute inset-0 bg-indigo-500/10 rounded-3xl blur-xl opacity-50 group-hover:opacity-80 transition-opacity" />
          <div className="w-[120px] sm:w-[160px] md:w-[210px] aspect-[4/5] rounded-[24px] sm:rounded-[30px] overflow-hidden border border-white/10 shadow-2xl relative">
            <img 
              src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=600&auto=format&fit=crop" 
              alt="Premium Lounge Atmosphere" 
              className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            {/* Soft overlay label for organic creative style */}
            <div className="absolute bottom-2 left-3 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded text-[8px] sm:text-[10px] tracking-wider uppercase text-[#D7E2EA] flex items-center gap-1">
              <Sparkles className="w-2 h-2 text-yellow-500" /> CASABLANCA
            </div>
          </div>
        </div>
      </FadeIn>

      {/* 2. Bottom-Left Floating Portrait: delay 0.25, x: -80, y: 0 */}
      <FadeIn 
        x={-80} 
        y={0} 
        delay={0.25} 
        duration={0.9}
        className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] z-10 pointer-events-none hidden sm:block"
      >
        <div className="relative group">
          <div className="absolute inset-0 bg-purple-500/5 rounded-3xl blur-lg" />
          <div className="w-[100px] sm:w-[140px] md:w-[180px] aspect-[1/1] rounded-[20px] sm:rounded-[24px] overflow-hidden border border-white/10 shadow-2xl relative">
            <img 
              src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=600&auto=format&fit=crop" 
              alt="Barbering Precision Tools" 
              className="w-full h-full object-cover grayscale brightness-95 group-hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-md p-1 rounded-full text-white">
              <Scissors className="w-3 h-3" />
            </div>
          </div>
        </div>
      </FadeIn>

      {/* 3. Top-Right Floating Portrait: delay 0.15, x: 80, y: 0 */}
      <FadeIn 
        x={80} 
        y={0} 
        delay={0.15} 
        duration={0.9}
        className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] z-10 pointer-events-none hidden xs:block"
      >
        <div className="relative group">
          <div className="absolute inset-0 bg-red-500/10 rounded-3xl blur-xl opacity-50" />
          <div className="w-[120px] sm:w-[160px] md:w-[210px] aspect-[3/4] rounded-[24px] sm:rounded-[30px] overflow-hidden border border-white/10 shadow-2xl relative">
            <img 
              src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=600&auto=format&fit=crop" 
              alt="Sharp Client Portrait" 
              className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-2 right-3 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded text-[8px] sm:text-[10px] tracking-wider uppercase text-[#D7E2EA] flex items-center gap-1">
              <Award className="w-2.5 h-2.5 text-orange-500" /> PREMIUM CUT
            </div>
          </div>
        </div>
      </FadeIn>

      {/* 4. Bottom-Right Floating Portrait: delay 0.3, x: 80, y: 0 */}
      <FadeIn 
        x={80} 
        y={0} 
        delay={0.3} 
        duration={0.9}
        className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] z-10 pointer-events-none hidden sm:block"
      >
        <div className="relative group">
          <div className="absolute inset-0 bg-[#BE4C00]/10 rounded-3xl blur-xl opacity-40 animate-pulse" />
          <div className="w-[130px] sm:w-[170px] md:w-[220px] aspect-[4/5] rounded-[24px] sm:rounded-[30px] overflow-hidden border border-white/10 shadow-2xl relative">
            <img 
              src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=600&auto=format&fit=crop" 
              alt="Vintage Parlor Experience" 
              className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-2 left-3 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded text-[8px] sm:text-[10px] tracking-wider uppercase text-[#D7E2EA] flex items-center gap-1">
              <ShieldCheck className="w-3 h-3 text-emerald-500" /> CERTIFIED
            </div>
          </div>
        </div>
      </FadeIn>

      {/* MIDDLE EDITORIAL BLOCK */}
      <div className="z-20 max-w-4xl text-center flex flex-col items-center gap-8 sm:gap-11 md:gap-14">
        {/* Title FadeIn: delay 0, y: 40 */}
        <FadeIn y={40} delay={0} duration={0.8}>
          <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-center text-[2.8rem] sm:text-[5vw] md:text-[6vw] lg:text-[7.5vw]">
            About us
          </h2>
        </FadeIn>

        {/* Dynamic Opacity Character scroll-based paragraph reader */}
        <div className="px-4 max-w-2xl text-center select-none">
          <AnimatedText 
            text="Le Barberon Star is a premium barber lounge in Casablanca focused on sharp cuts, clean fades, refined grooming, and a confident client experience. From modern hairstyles to beard styling, every detail is crafted to help you look fresh, polished, and ready for the day."
            className="text-[#D7E2EA]/90 font-medium centered leading-relaxed text-base sm:text-[1.2rem] md:text-[1.35rem]"
          />
        </div>

        {/* Contact Book Now Button with space padding */}
        <FadeIn y={20} delay={0.4} duration={0.8} className="pt-4">
          <ContactButton label="Book Now" />
        </FadeIn>
      </div>
    </section>
  );
};
