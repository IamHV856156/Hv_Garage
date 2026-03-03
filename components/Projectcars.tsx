"use client";
import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { GithubIcon, ExternalLink } from "lucide-react";
import chip from "@/public/chip.svg";
import Link from "next/link";
import Image from "next/image";

interface ProjectProps {
  title: string;
  link: string;
  github: string;
  color: string;
  iconName: string;
  description:string;
  // tags:string;
  iconSrc: string;
  Role: string;
}

const ProjectCard = ({ title, github, link, color, iconName, iconSrc,Role }: ProjectProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);

  const springConfig = { damping: 30, stiffness: 100, mass: 1 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], ["12deg", "-12deg"]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], ["-12deg", "12deg"]), springConfig);

  const shineWebkit = useTransform(
    [mouseX, mouseY],
    ([mX, mY]) => `radial-gradient(400px circle at ${mX}px ${mY}px, rgba(255,255,255,0.2), transparent 80%)`
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const currX = e.clientX - rect.left;
    const currY = e.clientY - rect.top;

    x.set(currX / width - 0.5);
    y.set(currY / height - 0.5);

    mouseX.set(currX);
    mouseY.set(currY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    mouseX.set(-1000);
    mouseY.set(-1000);
  };

  return (
    <div className="w-full flex  justify-center py-10 px-4">
      <motion.div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ 
          rotateX, 
          rotateY, 
          transformStyle: "preserve-3d" 
        }}
        className={`group relative h-64 w-xl m-1 p-5 max-w-100 rounded-4xl border border-white/10 bg-linear-to-br ${color} p-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-colors duration-500 hover:border-white/30`}
      >
        <motion.div 
          className="pointer-events-none absolute inset-0 z-0 rounded-4xl"
          style={{ background: shineWebkit }}
        />
        <div 
          style={{ transform: "translateZ(80px)", transformStyle: "preserve-3d" }} 
          className="flex justify-between items-start relative z-10"
        >
          <Image src={chip} alt="chip" className="h-10 w-14 rounded-md brightness-110 shadow-lg" />
          <div className="rounded-full overflow-hidden border-2 border-white/20 shadow-2xl">
             <Image src={iconSrc} alt={iconName} width={42} height={42} className="object-cover" />
          </div>
        </div>

        <div style={{ transform: "translateZ(50px)" }} className="mt-10 relative z-10">
          <p className="font-mono text-2xl font-black tracking-[0.2em] text-white drop-shadow-2xl">
            {title.toUpperCase().padEnd(16, " ").substring(0, 16)}
          </p>
        </div>

        <div 
          style={{ transform: "translateZ(30px)" }} 
          className="mt-6 flex justify-between items-end relative z-10"
        >
          <div className="space-y-1">
            <p className="text-[10px] uppercase tracking-widest text-white/90">{Role}</p>
            <p className="text-sm font-bold text-white uppercase tracking-tighter">Harshit Vashisht</p>
          </div>
          
          <div className="flex gap-3">
            <Link href={github} target="_blank" className="p-2.5 bg-black/40 backdrop-blur-md border border-white/10 rounded-full hover:bg-white/20 transition-all">
              <GithubIcon size={20} className="text-white" />
            </Link>
            <Link href={link} target="_blank" className="p-2.5 bg-[#FBC138] text-black rounded-full hover:scale-110 shadow-xl transition-all">
              <ExternalLink size={20} />
            </Link>
          </div>
        </div>

        <div className="absolute inset-0 pointer-events-none rounded-4xl bg-linear-to-tr from-white/5 via-transparent to-white/5 opacity-40" />
      </motion.div>
    </div>
  );
};

export default ProjectCard;