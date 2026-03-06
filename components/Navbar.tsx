"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Github, Linkedin, Music, Instagram } from "lucide-react";

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [time, setTime] = useState("");
  const [dateInfo, setDateInfo] = useState({ day: "", month: "", period: "" });

  useEffect(() => {
    setMounted(true);
    const updateClock = () => {
      const now = new Date();
      const timeStr = now.toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });
      const [onlyTime, period] = timeStr.split(/\s/);
      setTime(onlyTime);

      setDateInfo({
        day: now.getDate().toString().padStart(2, '0'),
        month: now.toLocaleString("default", { month: "long" }),
        period: period?.toLowerCase() || ""
      });
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <nav className="flex w-full items-center justify-between p-4 sm:px-8 sm:py-6 top-0 z-50">
      
      {/* LEFT SIDE: HELLO */}
      <div 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="flex items-center gap-2"
      >
        <motion.span 
          animate={isHovered ? { rotate: 12, scale: 1.1 } : { rotate: 0, scale: 1 }}
          className="text-3xl sm:text-5xl inline-block origin-bottom-right"
        >
          👋
        </motion.span>
        <div className="hidden sm:flex text-2xl font-bold tracking-tight text-[#FBC138] items-center">
          <span>Hello</span>
          <motion.span
            animate={{ width: isHovered ? "auto" : 0, opacity: isHovered ? 1 : 0 }}
            className="overflow-hidden whitespace-nowrap inline-block"
          >
            oooooo
          </motion.span>
          <span>!</span>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-6">

        <div className="flex items-center gap-4">
          <button className="p-2 border border-white/10 rounded-full hover:bg-white/5 transition-all group cursor-none">
            <Music size={24} className="text-gray-400 group-hover:text-[#FBC138] transition-colors" />
          </button>

          <div className="flex gap-4 text-gray-400 border-none border-white sm:border-r pr-6 mr-2 ">
            <Link href="https://github.com/IamHV856156" target="_blank" className="hover:text-white transition-all hover:-translate-y-1 cursor-none">
              <Github size={24} />
            </Link>
            <Link href="https://linkedin.com/in/harshit-vashisht" target="_blank" className="hover:text-white transition-all hover:-translate-y-1 cursor-none">
              <Linkedin size={24} />
            </Link>
            <Link href="https://instagram.com/vashisht7685" target="_blank" className="hover:text-white transition-all hover:-translate-y-1 cursor-none">
              <Instagram size={24} />
            </Link>
          </div>
                  <div className="hidden [@media(min-width:701px)]:flex items-center gap-4 ">
          <AnimatePresence mode="wait">
            <motion.span
              key={time}
              initial={{ opacity: 0.8 }}
              animate={{ opacity: 1 }}
              className="text-4xl font-mono text-zinc-100 tracking-tighter tabular-nums"
            >
              {time}
            </motion.span>
          </AnimatePresence>
        </div>
         <div className="hidden [@media(min-width:701px)]:flex flex-col uppercase tracking-[0.15rem] text-zinc-500 font-medium leading-none ">
            <span className="text-xs font-semibold text-[#FBC138] mb-1">{dateInfo.period}</span>
            <span className="text-[14px] whitespace-nowrap">
               {dateInfo.month}  {dateInfo.day}
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;