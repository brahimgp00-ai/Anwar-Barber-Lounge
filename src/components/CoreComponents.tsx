import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

interface ContactButtonProps {
  label?: string;
  onClick?: () => void;
  className?: string;
}

export const ContactButton: React.FC<ContactButtonProps> = ({
  label = "Book Now",
  onClick,
  className = ""
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <button
      onClick={handleClick}
      id="cta-book-btn"
      className={`relative rounded-full select-none text-white font-medium uppercase tracking-widest border-2 border-white/20 hover:scale-105 active:scale-95 transition-all duration-300 overflow-hidden cursor-pointer ${className} px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base`}
      style={{
        background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
        boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), inset 4px 4px 12px #7721B1',
      }}
    >
      <span className="absolute inset-[3px] rounded-full border border-white pointer-events-none opacity-80" />
      <span className="relative z-10">{label}</span>
    </button>
  );
};

interface LiveProjectButtonProps {
  label?: string;
  href?: string;
  className?: string;
}

export const LiveProjectButton: React.FC<LiveProjectButtonProps> = ({
  label = "Instagram",
  href = "https://www.instagram.com/le_barberon_star/",
  className = ""
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      id="cta-instagram-btn"
      className={`inline-block rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base hover:bg-[#D7E2EA]/10 hover:scale-105 active:scale-95 transition-all duration-300 text-center select-none cursor-pointer ${className}`}
    >
      {label}
    </a>
  );
};

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  className?: string;
  id?: string;
}

export const FadeIn: React.FC<FadeInProps> = ({
  children,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  className = "",
  id
}) => {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "50px", amount: 0 }}
      transition={{
        delay,
        duration,
        ease: [0.25, 0.1, 0.25, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface MagnetProps {
  children: React.ReactNode;
  padding?: number;
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  className?: string;
  id?: string;
}

export const Magnet: React.FC<MagnetProps> = ({
  children,
  padding = 150,
  strength = 3,
  activeTransition = "transform 0.3s ease-out",
  inactiveTransition = "transform 0.6s ease-in-out",
  className = "",
  id
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;
      const distance = Math.hypot(distanceX, distanceY);
      
      if (distance < padding) {
        setIsHovered(true);
        setPosition({
          x: distanceX / strength,
          y: distanceY / strength
        });
      } else {
        setIsHovered(false);
        setPosition({ x: 0, y: 0 });
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [padding, strength]);

  const style = {
    transform: `translate3d(${position.x}px, ${position.y}px, 0px)`,
    transition: isHovered ? activeTransition : inactiveTransition,
    willChange: 'transform',
  };

  return (
    <div id={id} ref={ref} className={`relative ${className}`} style={style}>
      {children}
    </div>
  );
};

interface AnimatedTextProps {
  text: string;
  className?: string;
  id?: string;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = "", id }) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2']
  });

  const chars = text.split("");

  return (
    <p id={id} ref={containerRef} className={`flex flex-wrap justify-center ${className}`}>
      {chars.map((char, index) => {
        const total = chars.length;
        const start = index / total;
        const end = Math.min(1, start + 0.12); // Slightly tighter overlay for smoother readability
        
        const opacity = useTransform(scrollYProgress, [start, end], [0.15, 1]);

        return (
          <span key={index} className="relative inline-block whitespace-pre">
            <span className="opacity-0">{char}</span>
            <motion.span
              style={{ opacity }}
              className="absolute inset-0 select-none text-center"
            >
              {char}
            </motion.span>
          </span>
        );
      })}
    </p>
  );
};
