"use client";
import { motion, useSpring, useMotionValue, useTransform } from "framer-motion";
import { useState, useRef, memo } from "react";
import Magnetic from "./magneticEffect";

const magicHeading = ({ text }: { text: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative py-24 flex items-center justify-center overflow-visible cursor-none"
    >
      <div className="flex gap-x-1 sm:gap-x-3">
        {text.split("").map((char, i) => (
          <GlassCharacter key={i} char={char === " " ? " " : char} mouseX={mouseX} mouseY={mouseY} />
        ))}
      </div>
    </div>
  );
};

const GlassCharacter = memo(({ char, mouseX, mouseY }: any) => {
  const [isHovered, setIsHovered] = useState(false);

  const refactorX = useTransform(mouseX, [0, 1200], [8, -8]);
  const refactorY = useTransform(mouseY, [0, 800], [8, -8]);

  return (
    <Magnetic>
      <motion.div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        animate={{ 
          scale: isHovered ? 1.15 : 1,
          z: isHovered ? 50 : 0 
        }}
        className="relative group"
      >
        <motion.span
          style={{ x: refactorX, y: refactorY }}
          className="absolute inset-0 text-7xl sm:text-9xl  uppercase tracking-tighter text-white/30 will-change-transform pointer-events-none"
        >
          {char}
        </motion.span>
  
        <span className={`
          relative block text-7xl sm:text-9xl font-black uppercase tracking-tighter transition-all duration-500
          ${isHovered 
            ? "text-zinc-400/15 drop-shadow-[0_0_25px_rgba(255,255,255,0.2)]" 
            : "text-transparent [-webkit-text-stroke:1px_rgba(161, 161, 170, 0.15)]"
          }
        `}>
          {char}
        </span>
      </motion.div>
    </Magnetic>
  );
});

export default magicHeading;