"use client";
import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {  GithubIcon, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  link: string;
  github: string;
  color: string;
  iconName: string;
  iconSrc: string;
}


const ProjectCard = ({ title, description, tags, link, github, color,iconName, iconSrc }: ProjectProps) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`group relative h-64 w-[400px] rounded-2xl border border-white/10 bg-gradient-to-br ${color} p-8 shadow-2xl transition-all duration-300 hover:border-white/20`}
    >
      {/* Visa Logo / Brand */}
      <div className="flex justify-between items-start">
        <div className="h-10 w-14 rounded-md bg-gradient-to-br from-yellow-400 to-yellow-600 opacity-80 shadow-inner" />
        <span className="text-xl font-black italic text-white/40 group-hover:text-white transition-colors uppercase">
           <Image 
            src={iconSrc} 
            alt={iconName} 
            width={40}
            height={40}
            className="object-cover rounded-full brightness-110"
          />
        </span>
      </div>

      <div className="mt-8">
        <p className="font-mono text-2xl tracking-[0.2em] text-white/90">
          {title.padEnd(16, " ").substring(0, 16)}
        </p>
      </div>

      <div className="mt-4 flex justify-between items-end">
        <div className="space-y-1">
          <p className="text-[10px] uppercase tracking-widest text-white/40">Project Lead</p>
          <p className="text-sm font-medium text-white/80 uppercase">Harshit Vashisht</p>
          {/* <p className="text-sm font-medium text-white/80 uppercase">{description}</p>
          <p className="text-sm font-medium text-white/80 uppercase">{tags}</p> */}
        </div>
        
        <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <Link href={github} target="_blank" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-all">
            <GithubIcon size={30} />
          </Link>
          <Link href={link} target="_blank" className="p-2 bg-[#FBC138] text-black rounded-full hover:scale-110 transition-all">
            <ExternalLink size={30} />
          </Link>
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none rounded-2xl bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
};

export default ProjectCard;