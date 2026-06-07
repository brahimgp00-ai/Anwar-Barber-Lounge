/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { HeroSection } from './components/HeroSection';
import { MarqueeSection } from './components/MarqueeSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { GallerySection } from './components/GallerySection';
import { ContactSection } from './components/ContactSection';

export default function App() {
  return (
    <div className="w-full relative min-h-screen bg-[#0C0C0C] text-[#D7E2EA] font-sans selection:bg-amber-500 selection:text-black">
      {/* Cinematic grid structure layout for "Le Barberon Star" */}
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <GallerySection />
      <ContactSection />
    </div>
  );
}

