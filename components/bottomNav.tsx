"use client";
import { Home, User, Briefcase, Mail } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

const menuItems = [
  { icon: <Home size={20} />, label: "Home", href: "#" },
  { icon: <User size={20} />, label: "About", href: "#about" },
  { icon: <Briefcase size={20} />, label: "Projects", href: "#projects" },
  { icon: <Mail size={20} />, label: "Contact", href: "#contact" },
];

function NavIcon({ item, mouseX }: { item: any; mouseX: any }) {
  const ref = useRef<HTMLAnchorElement>(null);

  const distance = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const scaleSync = useTransform(distance, [-150, 0, 150], [1, 1.6, 1]);
  const scale = useSpring(scaleSync, { mass: 0.1, stiffness: 150, damping: 12 });

  const ySync = useTransform(distance, [-150, 0, 150], [0, -10, 0]);
  const y = useSpring(ySync, { mass: 0.1, stiffness: 150, damping: 12 });

  return (
    <motion.a
      ref={ref}
      href={item.href}
      whileTap={{ scale: 0.9 }} 
      className="group relative flex h-12 w-12 items-center cursor-none justify-center rounded-full text-zinc-400 transition-colors hover:text-white"
    >
      <motion.div style={{ scale, y }} className="flex items-center justify-center">
        {item.icon}
      </motion.div>
      
      <span className="absolute -bottom-2 scale-0 rounded-xl bg-zinc-900/30 border border-white/10 px-3 py-1 text-[11px] font-medium text-white transition-all group-hover:scale-100 backdrop-blur-md shadow-2xl">
        {item.label}
      </span>
      
    </motion.a>
  );
}

const BottomNav = () => {
  const mouseX = useMotionValue(Infinity);

  return (
    <div className="fixed bottom-10 left-1/2 z-100 -translate-x-1/2 min-w-2xs [@media(max-width:400px)]:hidden sm:min-w-xl lg:min-w-3xl px-4">
      <motion.div 
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 25 }}
        className="flex items-end justify-evenly gap-10 rounded-full border border-white/10 bg-zinc-900/30 p-3 backdrop-blur-2xl shadow-2xl"
      >
        {menuItems.map((item) => (
          <NavIcon key={item.label} item={item} mouseX={mouseX} />
        ))}
      </motion.div>
    </div>
  );
};

export default BottomNav;