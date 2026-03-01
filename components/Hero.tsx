"use client";
import { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence, m } from "framer-motion";
import Magnetic from "./magneticEffect";

const firstNameData = [
  { char: "H", color: "#ca8a04" }, 
  { char: "A", color: "#16a34a" },
  { char: "R", color: "#dc2626" }, 
  { char: "S", color: "#c026d3" },
  { char: "H", color: "#059669" }, 
  { char: "I", color: "#7c3aed" },
  { char: "T", color: "#db2777" },
];

const surName = [
  "VASHISHT",      // English
  "वशिष्ठ",        // Hindi
  "ヴァシシュト",     // Japanese (Katakana)
  "ВАШИШТ",        // Russian (Cyrillic)
  "华希什特",        // Chinese (Mandarin - Phonetic)
  "바시슈트",        // Korean (Hangul)
  "VASHIŠT",       // Czech/Slovak
  "فاشيشت",        // Arabic
  "וואשישט",       // Hebrew
  "ΒΑΣΙΣΤ",        // Greek
  ];

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [langIndex, setLangIndex] = useState(0); 
  const containerRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mX = useMotionValue(0);
  const mY = useMotionValue(0);

   const shineWebkit = useTransform(
      [mX, mY],
      ([pixelX, pixelY]) => `radial-gradient(400px circle at ${mX}px ${mY}px, rgba(255,255,255,0.2), transparent 80%)`
    );

  const springConfig = { damping: 30, stiffness: 100, mass: 1 };
    const rotateX = useSpring(useTransform(y, [-0.5, 0.5], ["12deg", "-12deg"]), springConfig);
    const rotateY = useSpring(useTransform(x, [-0.5, 0.5], ["-12deg", "12deg"]), springConfig);

  useEffect(() => {
    const interval = setInterval(() => {
      setLangIndex((prev) => (prev + 1) % surName.length);
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
    mX.set(e.clientX - rect.left);
    mY.set(e.clientY - rect.top);
  };

  return (
    <section className="relative flex min-h-screen pb-50 w-full items-center justify-center bg-black overflow-hidden perspective-1000 px-4">
      <motion.div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => { setIsHovered(false); x.set(0); y.set(0); }}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d",background: shineWebkit}}
        className="relative flex flex-col items-center justify-center py-20 sm:px-25 px-10 text-white/90 rounded-[3rem] border border-white/5 bg-white/[0.03] backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.4)] transition-colors duration-500"
      >
         <div className="flex flex-row text-4xl font-black uppercase  tracking-tighter sm:text-7xl lg:text-[10rem] leading-none text-orange-50/90">
           {firstNameData.map((item, idx) => (
            <Magnetic key={idx}>
              <motion.span
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ color: item.color,scale:1.05 }}
                transition={{ 
                  y: { delay: idx * 0.08 }, 
                  opacity: { delay: idx * 0.08 },
                  color: { duration: 0.2 } 
                }}
                className="relative inline-block z-10 px-1 drop-shadow-sm"
              >
                {item.char}
              </motion.span>
          </Magnetic>
         ))}
       </div>
       <div className="text-4xl font-black uppercase tracking-tighter sm:text-6xl lg:text-[8rem] leading-[0.75] text-zinc-400/80">
          <Magnetic>
           <div className="relative h-[1.2em] flex items-center justify-center px-4">
             <AnimatePresence mode="wait">
               <motion.span
                 key={surName[langIndex]}
                 initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                 animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                 exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                 transition={{ duration: 0.5, ease: "circOut" }}
                 className="whitespace-nowrap inline-block"
               >
                 {surName[langIndex]}
               </motion.span>
             </AnimatePresence>
           </div>
          </Magnetic>
       </div>
       <div className="absolute inset-0 rounded-[3.5rem] border border-white/10 pointer-events-none" />
      </motion.div>
    </section>
  );
};

 export default Hero;
