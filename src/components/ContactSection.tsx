import React from 'react';
import { FadeIn, ContactButton, LiveProjectButton } from './CoreComponents';
import { Phone, Instagram, MapPin, Clock, CalendarDays, ExternalLink, Globe } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const phone1 = "+212 6 15 70 78 92";
  const phone2 = "+212 6 36 47 77 73";
  const phone1Clean = "+212615707892";
  const phone2Clean = "+212636477773";
  const instagramUrl = "https://www.instagram.com/le_barberon_star/";

  return (
    <section 
      id="contact" 
      className="relative z-20 w-full min-h-screen bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-24 sm:py-32 flex flex-col justify-between"
    >
      <div className="max-w-4xl mx-auto w-full text-center my-auto flex flex-col items-center gap-10">
        {/* Contact Category Header */}
        <FadeIn y={30} delay={0} duration={0.8} className="w-full text-center">
          <h2 className="hero-heading font-black uppercase text-center text-[2.8rem] sm:text-[6vw] md:text-[8vw] lg:text-[9vw] leading-none select-none">
            Contact
          </h2>
        </FadeIn>

        {/* Informative description & address panel */}
        <FadeIn y={25} delay={0.15} duration={0.8} className="max-w-2xl text-center flex flex-col items-center gap-6">
          <p className="text-[#D7E2EA]/90 font-light centered leading-relaxed text-base sm:text-lg md:text-[1.35rem]">
            Ready for a fresh look? Contact Le Barberon Star in Casablanca and book your next grooming session.
          </p>

          {/* Quick Stats Grid columns (Hours / Map / Safe) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mt-6 text-left">
            <div className="p-4 sm:p-5 rounded-3xl bg-white/[0.03] border border-white/5 flex gap-4 items-start">
              <MapPin className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-widest text-[#D7E2EA]/40 font-mono">Location</span>
                <span className="text-sm sm:text-base text-[#D7E2EA] font-medium">Bvd Ghandi / Gauthier, Casablanca, Morocco</span>
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-3xl bg-white/[0.03] border border-white/5 flex gap-4 items-start">
              <Clock className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-widest text-[#D7E2EA]/40 font-mono">Lounge Hours</span>
                <span className="text-sm sm:text-base text-[#D7E2EA] font-medium">Monday — Sunday: 09:00 - 22:00</span>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* High-end contact glassmorphic card */}
        <FadeIn y={30} delay={0.3} duration={0.8} className="w-full max-w-xl">
          <div className="relative p-6 sm:p-10 rounded-[40px] bg-white/[0.02] border border-white/10 shadow-3xl backdrop-blur-md flex flex-col gap-6 sm:gap-8 hover:border-white/20 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-purple-500/5 rounded-[40px] pointer-events-none" />
            
            <div className="flex flex-col gap-4 sm:gap-5 relative z-10">
              <h3 className="text-sm font-mono tracking-widest text-amber-500 uppercase">DIRECT BOOKINGS & SOCIALS</h3>
              
              <div className="flex flex-col gap-4">
                <a 
                  href={`tel:${phone1Clean}`}
                  className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/5 hover:border-white/10 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-[#D7E2EA]/40 group-hover:text-amber-500 transition-colors" />
                    <span className="text-sm sm:text-lg font-medium text-[#D7E2EA] font-mono">{phone1}</span>
                  </div>
                  <span className="text-[10px] font-mono tracking-wider text-amber-500 bg-amber-500/10 px-2.5 py-1 rounded-full group-hover:bg-amber-500 group-hover:text-black transition-all">Line 1</span>
                </a>

                <a 
                  href={`tel:${phone2Clean}`}
                  className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/5 hover:border-white/10 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-[#D7E2EA]/40 group-hover:text-amber-500 transition-colors" />
                    <span className="text-sm sm:text-lg font-medium text-[#D7E2EA] font-mono">{phone2}</span>
                  </div>
                  <span className="text-[10px] font-mono tracking-wider text-purple-400 bg-purple-400/10 px-2.5 py-1 rounded-full group-hover:bg-purple-500 group-hover:text-black transition-all">Line 2</span>
                </a>
              </div>
            </div>

            {/* CTA button pairing rows */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 relative z-10 w-full mt-2">
              <ContactButton 
                label="Call Now" 
                onClick={() => window.open(`tel:${phone1Clean}`)} 
                className="w-full sm:w-auto"
              />
              <LiveProjectButton 
                label="Instagram" 
                href={instagramUrl}
                className="w-full sm:w-auto text-center"
              />
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Editorial aesthetic footer row */}
      <div className="w-full text-center mt-12 sm:mt-16 md:mt-24 pt-6 border-t border-white/5 select-none text-[#D7E2EA]/30 text-xs sm:text-sm font-mono flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-1">
          <Globe className="w-3.5 h-3.5" />
          <span>LE BARBERON STAR — CASABLANCA</span>
        </div>
        <span>&copy; {new Date().getFullYear()} ALL RIGHTS RESERVED. DESIGN CONCEPT INC.</span>
        <span>SHARP STYLE & DISTINCT CREATIVITY</span>
      </div>
    </section>
  );
};
