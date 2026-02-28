"use client";
import { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
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

const surName = ["VASHISHT", "वशिष्ठ", "ヴァシシュト", "ВАШИШТ",];

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [langIndex, setLangIndex] = useState(0); 
  const containerRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(useSpring(y, { stiffness: 100, damping: 20 }), [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(useSpring(x, { stiffness: 100, damping: 20 }), [-0.5, 0.5], ["-10deg", "10deg"]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (x) {
      interval = setInterval(() => {
        setLangIndex((prev) => (prev + 1) % surName.length);
      }, 1500);
    } else {
      setLangIndex(0); 
    }
    return () => clearInterval(interval);
  }, [x]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <section className="relative flex min-h-screen pb-50 w-full items-center justify-center bg-black overflow-hidden perspective-1000 px-4">
      
      <motion.div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => { setIsHovered(false); x.set(0); y.set(0); }}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative flex flex-col items-center justify-center text-white cursor-default"
      >
        
         <div className="flex flex-row text-4xl font-black uppercase tracking-tighter sm:text-7xl lg:text-[10rem] leading-none">
           {firstNameData.map((item, idx) => (
            <Magnetic>
              <motion.span
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ color: item.color }}
                transition={{ 
                  y: { delay: idx * 0.1 }, 
                  opacity: { delay: idx * 0.1 },
                  color: { duration: 0.2 } 
                }}
                className="relative inline-block z-10 px-1 cursor-pointer"
              >
                {item.char}
              <motion.span>
              </motion.span>
            </motion.span>
          </Magnetic>
         ))}
       </div>
       <div className="text-4xl font-black uppercase tracking-tighter sm:text-7xl lg:text-[10rem] leading-[0.75]">
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
                 style={{ color: langIndex !== 0 ? "white" : "" }}
               >
                 {surName[langIndex]}
               </motion.span>
             </AnimatePresence>
           </div>
         </Magnetic>
       </div>

      </motion.div>
    </section>
  );
};

 export default Hero;
