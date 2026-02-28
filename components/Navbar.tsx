"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Linkedin, Music, Instagram } from "lucide-react";

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <nav className="flex w-full items-baseline justify-between p-4 sm:px-8 sm:py-6 bg-black">
      <div 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="flex cursor-pointer items-center gap-2"
      >
        <motion.span 
          animate={isHovered ? { rotate: 12, scale: 1.2 } : { rotate: 0, scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
          className="text-3xl sm:text-5xl inline-block origin-bottom-right"
        >
          👋
        </motion.span>
        <div className="hidden text-2xl font-bold tracking-tight text-[#FBC138] sm:flex items-center">
          <span>Hello</span>
          
          <motion.span
            initial={false}
            animate={isHovered ? { width: "auto", opacity: 1 } : { width: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="overflow-hidden whitespace-nowrap inline-block"
          >
            ooooooo
          </motion.span>
          
          <span>!</span>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <button className="p-2 border border-white/10 rounded-full hover:bg-white/5 transition-all group">
          <Music size={18} className="text-gray-400 group-hover:text-[#FBC138] transition-colors" />
        </button>

        <div className="flex gap-4 text-gray-400">
          <Link href="https://github.com/IamHV856156" target="_blank" className="hover:text-white transition-all hover:-translate-y-1">
            <Github size={20} />
          </Link>
          <Link href="https://linkedin.com/in/harshit-vashisht" target="_blank" className="hover:text-white transition-all hover:-translate-y-1">
            <Linkedin size={20} />
          </Link>
          <Link href="https://instagram.com/vashisht7685" target="_blank" className="hover:text-white transition-all hover:-translate-y-1">
            <Instagram size={20} />
          </Link>
        </div>
      </div>
      {/* <div className="group relative flex cursor-default items-baseline gap-2">
        <p className="text-3xl transition-all duration-300 group-hover:rotate-[-12deg] group-hover:scale-110 sm:text-5xl">👋</p>
        <motion.span className="hidden text-2xl font-bold tracking-wider text-[#FBC138] transition-all duration-300 group-hover:tracking-widest sm:flex">
          Hello
          <p className="w-0 overflow-hidden transition-all duration-300 group-hover:w-[7.5rem] whitespace-nowrap">
            ooooooo
          </p>
          !
        </motion.span>
      </div>
      
      <div className="flex items-center gap-6">
        <button className="p-2 border border-white/10 rounded-full hover:bg-white/5 transition-all">
          <Music size={18} className="text-gray-400" />
        </button>
        <div className="flex gap-4 text-gray-400">
          <Link href="https://github.com/IamHV856156" target="_blank" className="hover:text-white transition-colors">
            <Github size={20} />
          </Link>
          <Link href="https://linkedin.com/in/harshit-vashisht" target="_blank" className="hover:text-white transition-colors">
            <Linkedin size={20} />
          </Link>
          <Link href="https://twitter.com/vashisht7685" target="_blank" className="hover:text-white transition-colors">
            <Instagram size={20} />
          </Link>
        </div>
      </div> */}
    </nav>
  );
};

export default Navbar;