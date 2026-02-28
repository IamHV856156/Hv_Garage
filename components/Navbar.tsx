"use client";
import Link from "next/link";
import { Github, Linkedin, Music, Instagram } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="flex w-full items-baseline justify-between p-4 sm:px-8 sm:py-6 bg-black">
      <div className="group relative flex cursor-default items-baseline gap-2">
        <p className="text-3xl transition-all duration-300 group-hover:rotate-12 group-hover:scale-90 sm:text-5xl">👋</p>
        <div className="hidden text-2xl font-bold tracking-wider text-[#FBC138] transition-all duration-300 group-hover:tracking-widest sm:flex">
          Hello
          <p className="w-0 overflow-hidden transition-all duration-300 group-hover:w-[7.5rem]">
            ooooooo
          </p>
          !
        </div>
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
      </div>
    </nav>
  );
};

export default Navbar;