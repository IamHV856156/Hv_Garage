"use client";
import { motion } from "framer-motion";
import { EarthIcon } from "lucide-react";

const nameChars = [
  { char: "H", color: "hover:text-yellow-600", accent: "text-yellow-600" },
  { char: "A", color: "hover:text-green-600", accent: "text-green-600" },
  { char: "R", color: "hover:text-red-600", accent: "text-red-600" },
  { char: "S", color: "hover:text-fuchsia-600", accent: "text-fuchsia-600" },
  { char: "H", color: "hover:text-emerald-600", accent: "text-emerald-600" },
  { char: "I", color: "hover:text-violet-600", accent: "text-violet-600 " },
  { char: "T", color: "hover:text-pink-600", accent: "text-pink-600" },
];

const Hero = () => {
  return (
    <section className="relative flex min-h-[calc(100vh-146px)] w-full flex-col items-center justify-center overflow-hidden bg-black text-white">
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-10 select-none pointer-events-none">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 30, ease:"backInOut" }}
          className="whitespace-nowrap text-8xl font-black uppercase tracking-widest text-white "
        >
          JavaScript — Next.js — React — Tailwind CSS — TypeScript — Node.js — Framer Motion — MongoDB —
        </motion.div>
      </div>

      <div className="z-10 flex flex-col items-center">
        <h1 className="relative flex cursor-default select-none items-center text-7xl font-bold uppercase tracking-tight sm:text-8xl md:text-9xl">
          {nameChars.map((item, idx) => (
            <motion.span
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className={`group relative transition-all duration-500 ${item.color}`}
            >
              {item.char}
              <span className={`absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:rotate-180 transition-all duration-300 group-hover:opacity-100 ${item.accent}`}>
                <EarthIcon width={40} height={40}/>
              </span>
            </motion.span>
          ))}
        </h1>
      </div>
    </section>
  );
};

export default Hero;