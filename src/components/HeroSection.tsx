import React from 'react';
import { FadeIn, Magnet, ContactButton } from './CoreComponents';

export const HeroSection: React.FC = () => {
  const handleNavClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative w-full h-screen flex flex-col justify-between overflow-x-clip bg-[#0C0C0C]"
    >
      {/* 1. NAVBAR - FadeIn y: -20, delay: 0 */}
      <FadeIn y={-20} delay={0} duration={0.8} className="w-full">
        <nav className="w-full flex justify-between items-center px-6 md:px-10 pt-6 md:pt-8">
          <div className="flex items-center gap-1 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            {/* Elegant luxury branding insignia */}
            <span className="font-extrabold tracking-wider text-sm md:text-lg lg:text-[1.4rem] uppercase text-[#D7E2EA] hover:opacity-75 transition-opacity duration-200">
              L.B.S★
            </span>
          </div>
          
          <div className="flex items-center gap-4 sm:gap-6 md:gap-10 lg:gap-16">
            <button 
              onClick={() => handleNavClick('about')}
              className="text-xs sm:text-sm md:text-lg lg:text-[1.4rem] font-medium uppercase tracking-wider text-[#D7E2EA] hover:opacity-70 transition-opacity duration-200 cursor-pointer"
            >
              About
            </button>
            <button 
              onClick={() => handleNavClick('services')}
              className="text-xs sm:text-sm md:text-lg lg:text-[1.4rem] font-medium uppercase tracking-wider text-[#D7E2EA] hover:opacity-70 transition-opacity duration-200 cursor-pointer"
            >
              Services
            </button>
            <button 
              onClick={() => handleNavClick('gallery')}
              className="text-xs sm:text-sm md:text-lg lg:text-[1.4rem] font-medium uppercase tracking-wider text-[#D7E2EA] hover:opacity-70 transition-opacity duration-200 cursor-pointer"
            >
              Gallery
            </button>
            <button 
              onClick={() => handleNavClick('contact')}
              className="text-xs sm:text-sm md:text-lg lg:text-[1.4rem] font-medium uppercase tracking-wider text-[#D7E2EA] hover:opacity-70 transition-opacity duration-200 cursor-pointer"
            >
              Contact
            </button>
          </div>
        </nav>
      </FadeIn>

      {/* 3. HERO PORTRAIT / MAIN VISUAL - Magnet & FadeIn delay: 0.6, y: 30 */}
      <div className="absolute left-1/2 -translate-x-1/2 z-10 top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 pointer-events-none sm:pointer-events-auto">
        <FadeIn y={30} delay={0.6} duration={1.2}>
          <Magnet 
            padding={150} 
            strength={3.5}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
            className="w-[280px] sm:w-[360px] md:w-[440px] lg:w-[500px] xl:w-[520px] h-[360px] sm:h-[460px] md:h-[560px] lg:h-[620px] xl:h-[640px]"
          >
            <img 
              src="https://images.unsplash.com/photo-1622287162716-f311baa1a2b8?q=80&w=1200&auto=format&fit=crop" 
              alt="Le Barberon Star Premium Portrait" 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px] shadow-2xl border border-[#D7E2EA]/20 select-none pointer-events-auto"
            />
          </Magnet>
        </FadeIn>
      </div>

      {/* 2. HERO HEADING - FadeIn delay: 0.15, y: 40 */}
      <div className="flex-1 flex items-center justify-center -mt-6 sm:-mt-10 md:-mt-16 z-20 pointer-events-none">
        <div className="w-full overflow-hidden text-center py-2">
          <FadeIn y={40} delay={0.15} duration={1.0} className="w-full">
            <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[13vw] sm:text-[13.5vw] md:text-[14vw] lg:text-[14.5vw] select-none">
              Le Barberon Star
            </h1>
          </FadeIn>
        </div>
      </div>

      {/* BOTTOM INFO BAR */}
      <div className="w-full px-6 md:px-10 pb-7 sm:pb-8 md:pb-10 flex justify-between items-end z-20 pointer-events-none">
        {/* Left Informative Column - FadeIn delay: 0.35, y: 20 */}
        <div className="pointer-events-auto">
          <FadeIn y={20} delay={0.35} duration={0.8}>
            <p className="text-left text-[#D7E2EA] font-light uppercase tracking-wide leading-snug w-[170px] sm:w-[230px] md:w-[290px] text-xs sm:text-sm md:text-base" style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}>
              premium barber lounge in casablanca crafted for sharp cuts, clean style, and confident first impressions
            </p>
          </FadeIn>
        </div>

        {/* Right CTA Button - FadeIn delay: 0.5, y: 20 */}
        <div className="pointer-events-auto">
          <FadeIn y={20} delay={0.5} duration={0.8}>
            <ContactButton label="Book Now" />
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
