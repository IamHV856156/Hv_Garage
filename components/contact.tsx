"use client";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Instagram } from "lucide-react";
import { FaTelegram } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import ironman from "@/public/ironman.svg";
import babyspidy from "@/public/baby spidy.svg";

const GlassCard = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className={`relative rounded-[2.5rem] border border-white/10 bg-white/3 backdrop-blur-[50px] overflow-hidden ${className}`}
    >
      <div className="relative z-10">{children}</div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
    </motion.div>
  );
};

// Internal Helper for Social Cards to keep code clean
const SocialCard = ({ href, icon, title }: { href: string, icon: React.ReactNode, title: string }) => (
  <Link href={href} target="_blank" className="cursor-none group">
    <GlassCard className="p-10 h-full border border-white/5 group-hover:border-white/20 transition-colors">
      {icon}
      <h3 className="text-white font-bold text-xl tracking-tight group-hover:text-blue-400 transition-colors">
        {title}
      </h3>
      <p className="text-zinc-600 text-xs font-mono mt-2 uppercase tracking-widest">Connect ➜</p>
    </GlassCard>
  </Link>
);

const ContactLink = ({ icon, label, value, href }: any) => (
  <motion.a 
    href={href}
    whileHover={{ x: 10 }}
    className="flex items-center gap-5 group cursor-none w-fit"
  >
    <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-zinc-400 group-hover:text-blue-400 group-hover:border-blue-500/30 transition-all">
      {icon}
    </div>
    <div>
      <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-600 font-mono mb-1">{label}</p>
      <p className="text-white font-medium text-lg tracking-tight group-hover:text-blue-400 transition-colors">{value}</p>
    </div>
  </motion.a>
);

const Contact = () => {
  return (
    <section className="relative w-full min-h-screen bg-[#030303] py-24 px-6 flex items-center justify-center overflow-hidden">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
        {/* LEFT */}
        <div className="lg:col-span-5 flex flex-col justify-center space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-none">
              GET IN <br /> <span className="text-zinc-700 italic">TOUCH.</span>
            </h1>
            <p className="text-zinc-500 text-lg max-w-sm font-light leading-relaxed">
              Currently accepting select freelance commissions and architectural collaborations.
            </p>
          </motion.div>

          <div className="pt-4">
            <ContactLink 
              icon={<Mail size={20}/>} 
              label="Email" 
              value="Sudo_HV@proton.me" 
              href="mailto:Sudo_HV@proton.me" 
            />
          </div>
        </div>
        {/* ironman */}
        <div className="lg:col-span-5 flex flex-col justify-center space-y-8">
          <motion.span
          >
            <Image src={ironman} alt="ironman"/>
          </motion.span>
          </div>
          {/* spiderman */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-8">
          <motion.span
          >
            <Image src={babyspidy} alt="baby spidy"/>
          </motion.span>
          </div>
        {/* RIGHT: SOCIAL GRID*/}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          <SocialCard 
            href="https://github.com/IamHV856156" 
            icon={<Github className="text-yellow-500/50 mb-4" size={28} />} 
            title="Github" 
          />
          <SocialCard 
            href="https://www.linkedin.com/in/harshit-vashisht/" 
            icon={<Linkedin className="text-blue-500/50 mb-4" size={28} />} 
            title="LinkedIn" 
          />
          <SocialCard 
            href="https://t.me/Sudo_HV" 
            icon={<FaTelegram className="text-sky-500/50 mb-4" size={28} />} 
            title="Telegram" 
          />
          <SocialCard 
            href="https://www.instagram.com/vashisht7685" 
            icon={<Instagram className="text-pink-500/50 mb-4" size={28} />} 
            title="Instagram" 
          />
        </motion.div>

      </div>
    </section>
  );
};


export default Contact;