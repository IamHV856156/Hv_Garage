"use client";
import { Home, User, Briefcase, Mail } from "lucide-react";
import { motion } from "framer-motion";

const BottomNav = () => {
  const menuItems = [
    { icon: <Home size={20} />, label: "Home", href: "#" },
    { icon: <Briefcase size={20} />, label: "Projects", href: "#projects" },
    { icon: <User size={20} />, label: "About", href: "#about" },
    { icon: <Mail size={20} />, label: "Contact", href: "#contact" },
  ];

  return (
    <div className="fixed bottom-8 left-1/2 z-[100] -translate-x-1/2">
      <motion.div 
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="flex items-center gap-2 rounded-2xl border border-white/10 bg-zinc-900/50 p-2 backdrop-blur-2xl shadow-2xl"
      >
        {menuItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="group relative flex h-12 w-12 items-center justify-center rounded-xl text-zinc-400 transition-all hover:bg-white/10 hover:text-white"
          >
            {item.icon}
            <span className="absolute -top-10 scale-0 rounded bg-white px-2 py-1 text-[10px] font-bold text-black transition-all group-hover:scale-100">
              {item.label}
            </span>
          </a>
        ))}
      </motion.div>
    </div>
  );
};

export default BottomNav;