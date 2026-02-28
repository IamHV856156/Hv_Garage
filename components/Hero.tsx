"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { EarthIcon } from "lucide-react";
import Magnetic from "./magnetic";

const nameChars = [
  { char: "H", color: "#ca8a04" }, 
  { char: "A", color: "#16a34a" }, 
  { char: "R", color: "#dc2626" }, 
  { char: "S", color: "#c026d3" }, 
  { char: "H", color: "#059669" }, 
  { char: "I", color: "#7c3aed" }, 
  { char: "T", color: "#db2777" }, 
];


const SingleChar = ({ item, idx }: { item: any; idx: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
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

        <AnimatePresence>
          {isHovered && (
            <motion.span
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: -60 }}
              exit={{ opacity: 0, y: 0 }}
              style={{ color: item.color }}
              className="absolute left-1/2 -translate-x-1/2 pointer-events-none z-50"
            >
              <EarthIcon size={50} strokeWidth={1.5} className="animate-spin" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.span>
    </Magnetic>
  );
};

const Hero = () => {
  return (
    <section className="relative flex min-h-[calc(100vh-146px)] w-full flex-col items-center justify-center bg-black text-white overflow-visible">
      <div className="z-10 flex flex-col items-center">
        <h1 className="relative flex cursor-default select-none items-center text-7xl font-bold uppercase tracking-tight sm:text-8xl md:text-9xl">
          {nameChars.map((item, idx) => (
            <SingleChar key={idx} item={item} idx={idx} />
          ))}
        </h1>
      </div>
    </section>
  );
};
export default Hero;