"use client";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="w-full pt-32 pb-12 px-6 relative overflow-hidden">
      {/* bg name */}
      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 ">
        <h1 className="text-[15vw] font-black text-white/5 leading-none uppercase">
          Vashisht
        </h1>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center">
        
        {/* main quote*/}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-20 mb-24">
          <div className="space-y-6 text-center md:text-left">
            <h3 className="text-orange-400 text-[11px] font-mono tracking-[0.4em] uppercase animate-pulse">Status_Available</h3>
            <p className="text-white text-3xl md:text-5xl font-light tracking-tighter leading-tight max-w-md">
              Bringing <span className="italic text-zinc-400 hover:text-emerald-400">precision</span> to digital craftsmanship.
            </p>
          </div>

          <div className="flex flex-col justify-end items-center md:items-end gap-8 [@media(min-width:701px)]:flex-col">
             <motion.button 
               onClick={scrollToTop}
               whileHover={{ y: -5 }}
               className="text-white text-[10px] font-mono tracking-[0.3em] sm:flex flex sm:items-center border rounded-full border-zinc-200 animate-bounce hover:text-blue-400 hover:border-blue-400 cursor-none"
             >
               <ArrowUp size={30}/>
             </motion.button>
          </div>
        </div>

        
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2 text-zinc-700">
              <span className="text-[13px] font-mono uppercase tracking-widest">© 2026 <br></br>Made With <span className="animate-pulse text-pink-400">♥</span> by  HARSHIT VASHISHT</span>
           </div>
           <div className="flex justify-center  items-center  gap-y-0">
              <span className="text-[15px] font-mono text-zinc-700 uppercase">Local_Time:</span>
              <span className="text-xs text-emerald-400  font-medium">UTC+5:30</span>
           </div>
        </div>
      </div>
    </footer>
  );
};


export default Footer;