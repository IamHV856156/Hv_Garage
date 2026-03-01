"use client";
import { motion, useSpring, useMotionValue, useTransform } from "framer-motion";
import { useState, useRef } from "react";

const magicHeading = ({ text }: { text: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 20 });

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
      className="relative py-24 flex items-center justify-center bg-black overflow-visible cursor-none"
    >
      <motion.div 
        className="absolute w-64 h-64 bg-white/10 blur-[100px] rounded-full pointer-events-none"
        style={{ x: springX, y: springY, translateX: "-50%", translateY: "-50%" }}
      />

      <div className="flex gap-x-1 sm:gap-x-3">
        {text.split("").map((char, i) => (
          <GlassCharacter key={i} char={char === " " ? "\u00A0" : char} mouseX={mouseX} mouseY={mouseY} />
        ))}
      </div>
    </div>
  );
};

const GlassCharacter = ({ char, mouseX, mouseY }: any) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const refactorX = useTransform(mouseX, [0, 1000], [5, -5]);
  const refactorY = useTransform(mouseY, [0, 500], [5, -5]);

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      animate={{ 
        scale: isHovered ? 1.15 : 1,
        z: isHovered ? 50 : 0 
      }}
      transition={{ type: "spring", stiffness: 100, damping: 15 }}
      className="relative group"
    >
      <motion.span
        style={{ x: refactorX, y: refactorY }}
        className="absolute inset-0 text-7xl sm:text-9xl font-black uppercase tracking-tighter text-white/30 blur-[4px]"
      >
        {char}
      </motion.span>

      <span className={`
        relative block text-7xl sm:text-9xl font-black uppercase tracking-tighter
        transition-all duration-500
        ${isHovered 
          ? "text-zinc-400/15 drop-shadow-[0_0_25px_rgba(255,255,255,0.2)]" 
          : "text-transparent [-webkit-text-stroke:1px_rgba(161, 161, 170, 0.15)]"
        }
      `}>
        {char}
      </span>

      <motion.div
        className="absolute inset-0 z-20 pointer-events-none overflow-hidden opacity-0 group-hover:opacity-100"
        style={{
          background: useTransform(
            [mouseX, mouseY],
            ([x, y]) => `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.4) 0%, transparent 60%)`
          ),
          WebkitMaskImage: "linear-gradient(black, black)",
          WebkitBackgroundClip: "text",
        }}
      >
        <span className="text-7xl sm:text-9xl font-black uppercase tracking-tighter text-transparent">
          {char}
        </span>
      </motion.div>
    </motion.div>
  );
};

export default magicHeading;