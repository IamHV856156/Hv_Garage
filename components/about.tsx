"use client";
import { motion } from "framer-motion";
import { Code2, Fingerprint, Globe2, Sparkles } from "lucide-react";

const About = () => {
  return (
    <section className="relative w-full min-h-screen bg-[#020202] py-24 px-6 flex flex-col items-center justify-center overflow-hidden">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/*LEFT COLUMN: IDENTITY (The "Profile" Glass) */}
        <div className="lg:col-span-4 space-y-6">
          <GlassCard className="h-full flex flex-col justify-between p-10 border hover:border-blue-500/30">
            <div>
              <Fingerprint className="text-blue-500 mb-6" size={40} />
              <h2 className="text-blue-500 font-sans tracking-[0.3em] text-[13px]  mb-2">// about me</h2>
              <h1 className="text-5xl font-black text-zinc-400 tracking-tighter leading-none mb-6">HARSHIT <br /> VASHISHT.</h1>
                <h3 className="text-[18px] font-mono text-blue-500 hover:text-yellow-500 tracking-tighter leading-none mb-6">Web Dev X FOSS X Code X Design</h3>
              <p className="text-zinc-400 text-lg font-light leading-relaxed">
                Full-stack architect crafting <span className="text-white">High-Fidelity</span> digital experiences. 
                I treat the web as a tactile medium where code meets physics.
              </p>
            </div>
            
            <div className="pt-8 border-t border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Globe2 size={16} className="text-zinc-600" />
                <span className="text-xs text-zinc-500 font-mono tracking-widest uppercase">Based in Delhi,India</span>
              </div>
              <div className="h-2 w-2 rounded-full bg-emerald-500 hover:bg-yellow-500 animate-ping" />
            </div>
          </GlassCard>
        </div>

        {/* RIGHT COLUMN: TERMINAL & SPECS */}
        <div className="lg:col-span-8 flex flex-col gap-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <GlassCard className="p-8 border hover:border-yellow-500/30">
              <Sparkles className="text-yellow-500/50 mb-4" size={24} />
              <h3 className="text-white font-bold text-xl mb-3 italic tracking-tight underline decoration-blue-500/50 underline-offset-4">Philosophy</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">
                "Minimalism is the architecture; motion is the lifeblood." I believe every pixel should serve a purpose and every interaction should feel like natural physics.
              </p>
            </GlassCard>

            <GlassCard className="p-8 border hover:border-emerald-500/30">
              <Code2 className="text-emerald-500/50 mb-4" size={24} />
              <h3 className="text-white font-bold text-xl mb-3 tracking-tight">Core Arsenal</h3>
              <div className="flex flex-wrap gap-2">
                {['Html','JavaScript','React.js','TypeScript','C','C++','Tailwind','Framer Motion'].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-white/5 rounded-md text-[15px] hover:bg-emerald-500/50 hover:text-zinc-50  font-mono text-zinc-400 border border-white/5 ">
                    {tech}
                  </span>
                ))}
              </div>
            </GlassCard>
          </div>

          {/* THE TERMINAL SLOT*/}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="relative grow min-h-87.5 rounded-[2.5rem] bg-black/40 border border-white/10 backdrop-blur-3xl overflow-hidden group shadow-2xl"
          >
            <div className="absolute top-0 w-full h-10 bg-white/5 flex items-center px-6 border-b border-white/5 justify-between">
              <div className="flex gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/20" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/20" />
              </div>
              <span className="text-[11px] font-mono text-zinc-600 tracking-tighter uppercase">Hv^s_Garage</span>
            </div>

            <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4 opacity-40 group-hover:opacity-60 transition-opacity">
              <div className="p-4 rounded-full bg-blue-500/5 border border-blue-500/20">
                <Code2 className="text-blue-500 animate-pulse" size={32} />
              </div>
              <p className="font-mono text-[15px] text-blue-400 tracking-[0.4em] uppercase">Initializing Terminal...</p>
            </div>
            
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

const GlassCard = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className={`relative rounded-[2.5rem] border border-white/10 bg-white/1 backdrop-blur-[50px] overflow-hidden ${className}`}
    >
      <div className="relative z-10">{children}</div>
      <div className="absolute bottom-0 left-0 w-full h-[1] bg-linear-to-r from-transparent via-white/10 to-transparent" />
    </motion.div>
  );
};

export default About;