"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal as TerminalIcon, Cpu, ChevronRight, Sun, Moon, Maximize2, Minimize2, X, DollarSign } from "lucide-react";

const FEDORA_NEOFETCH = `
           /####\\            hv@fedora
          /######\\         --------------  
         /########\\          OS: Fedora Linux
        /###/  \\###\\        Editor: Neovim
   /############\\###\\       DE: Gnome
  /######/\\######\\###\\     Stats: Open to Collab
 /######/  \\######\\###\\    
/######/    \\######\\###\\   
\\######\\    /######/###/    
 \\######\\  /######/###/     
  \\######\\/######/###/      
   \\############/###/ 
    \\##########/###/  
     \\########/###/   
`;

const COMMANDS: Record<string, string> = {
  help: "COMMANDS: [whoami] [help] [echo] [play] [pause] [theme] [clear] [sleep] [neofetch] [open]",
  whoami: "HARSHIT VASHISHT: Full-stack developer specializing in high-end UI/UX.",
  play: "Starting background frequency... 🎵",
  pause: "Audio stream suspended.",
  theme: "Switching interface protocols...",
  sudo: "Permission denied ('-')",
};

const Terminal = () => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>(["SYSTEM READY. TYPE 'help' TO BEGIN..."]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isMaximized, setIsMaximized] = useState(false);
  const [isClosed, setIsClosed] = useState(false);
  
  const scrollRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const fullInput = input.trim();
    const args = fullInput.split(" ");
    const cmd = args[0].toLowerCase();
    
    const newHistory = [...history, `> ${fullInput}`];
    
    // Immediate state triggers
    if (cmd === "play") audioRef.current?.play();
    if (cmd === "pause") audioRef.current?.pause();
    if (cmd === "theme") setIsDarkMode(!isDarkMode);
    if (cmd === "open") setIsClosed(false);
    if (cmd === "sleep") setIsClosed(true);

    setIsProcessing(true);

    setTimeout(() => {
      if (cmd === "neofetch") {
        setHistory([...newHistory, FEDORA_NEOFETCH]);
      } 
      else if (cmd === "echo") {
        const message = args.slice(1).join(" ");
        setHistory([...newHistory, message || " "]);
      } 
      else if (cmd === "clear") {
        setHistory([]);
      } 
      else if (COMMANDS[cmd]) {
        setHistory([...newHistory, COMMANDS[cmd]]);
      } 
      else {
        setHistory([...newHistory, `ERROR: Unknown command '${cmd}'`]);
      }
      
      setIsProcessing(false);
      setInput("");
    }, 300);
  };

  return (
    <>
      <audio ref={audioRef} src="https://usa9.fastcast4u.com/proxy/jamz?mp=/1" />

      <AnimatePresence mode="wait">
        {!isClosed ? (
          <motion.div 
            key="terminal"
            layoutId="terminal-container"
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              y: 0,
              position: isMaximized ? "fixed" : "relative",
              top: isMaximized ? "5%" : "auto",
              left: isMaximized ? "5%" : "auto",
              width: isMaximized ? "90vw" : "100%",
              height: isMaximized ? "85vh" : "450px",
              zIndex: isMaximized ? 100 : 10,
            }}
            exit={{ opacity: 0, scale: 0.2, x: 100, y: 100, transition: { duration: 0.4 } }}
            className={`flex flex-col rounded-2xl overflow-hidden shadow-2xl border transition-all duration-500 ${
              isDarkMode ? "bg-black/90 backdrop-blur-xl border-white/10" : "bg-white/95 backdrop-blur-xl border-black/10"
            }`}
          >
            {/* HEADER */}
            <div className={`px-4 py-3 border-b flex items-center justify-between ${isDarkMode ? "bg-white/5 border-white/5" : "bg-black/5 border-black/5"}`}>
              <div className="flex items-center gap-3">
                <div className="flex gap-2">
                  <button onClick={() => setIsClosed(true)} className="group size-3 rounded-full bg-[#FF605C] flex items-center justify-center">
                    <X size={8} className="opacity-0 group-hover:opacity-100 text-black/50" />
                  </button>
                  <button onClick={() => setIsMaximized(!isMaximized)} className="group size-3 rounded-full bg-[#FFBD44] flex items-center justify-center" >
                    <Minimize2 size={8} className="opacity-0 group-hover:opacity-100 text-black/50" />
                  </button>
                  <button onClick={() => setIsMaximized(!isMaximized)} className="group size-3 rounded-full bg-[#28C940] flex items-center justify-center">
                    <Maximize2 size={8} className="opacity-0 group-hover:opacity-100 text-black/50" />
                  </button>
                </div>
                <span className={`text-[10px] font-mono uppercase tracking-widest ${isDarkMode ? "text-zinc-500" : "text-zinc-400"}`}>
                   {isMaximized ? "Floating Root" : "Local Terminal"}
                </span>
              </div>
              <button onClick={() => setIsDarkMode(!isDarkMode)} className="text-zinc-500 hover:text-blue-500 transition-colors">
                {isDarkMode ? <Sun size={14} /> : <Moon size={14} />}
              </button>
            </div>

            {/* BODY */}
            <div ref={scrollRef} className="flex-1 p-6 font-mono text-xs md:text-sm overflow-y-auto space-y-1 custom-scrollbar">
              {history.map((line, i) => (
                <div 
                  key={i} 
                  className={`
                    ${line.startsWith(">") ? "text-blue-500 font-bold" : isDarkMode ? "text-zinc-300" : "text-zinc-700"}
                    ${line.includes("Returns") ? "text-blue-400" : ""}
                  `}
                  style={{ whiteSpace: 'pre-wrap' }} // Crucial for ASCII alignment
                >
                  {line}
                </div>
              ))}
              <form onSubmit={handleCommand} className="flex items-center gap-2 pt-2">
                <DollarSign size={14} className="italic text-blue-500" />
                <input 
                  autoFocus 
                  className={`flex-1 bg-transparent border-none outline-none ${isDarkMode ? "text-zinc-200" : "text-black"}`} 
                  value={input} 
                  onChange={(e) => setInput(e.target.value)} 
                  placeholder="type help..." 
                />
              </form>
            </div>
          </motion.div>
        ) : (
          /* --- terminal logo--- */
          <motion.div 
            key="logo"
            layoutId="terminal-container"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsClosed(false)}
            className="bottom-8 right-8 z-100 size-14 rounded-2xl bg-black shadow-2xl shadow-blue-500/40 flex items-center justify-center cursor-pointer border border-white/30"
          >
            <TerminalIcon className="text-white" size={24} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* OVERLAY */}
      {isMaximized && !isClosed && (
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50" 
          onClick={() => setIsMaximized(false)} 
        />
      )}
    </>
  );
};

export default Terminal;