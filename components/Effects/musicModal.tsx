"use client";
import { Music, Radio, ExternalLink, Target } from "lucide-react";
import { useState, useRef ,createContext,useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdTrackChanges } from "react-icons/md";
import Link from "next/link";

export const MusicContext = createContext<any>(null);

export const MusicProvider = ({ children }: any) => {
  const [currentTrack, setCurrentTrack] = useState({ message: "Track Changed..." });
  return (
    <MusicContext.Provider value={{ currentTrack, setCurrentTrack }}>
      {children}
    </MusicContext.Provider>
  );
};

export default function MusicModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playlistData = [
    { label: '❄️', url: 'https://usa9.fastcast4u.com/proxy/jamz?mp=/1', message:'Track Changed...' },
    { label: '🎸', url: 'https://usa3.fastcast4u.com/proxy/mcbnkwave?mp=/;?', message:'Track Changed...' },
    { label: 'IN', url: 'https://stream.zeno.fm/5qp76a5h3p8uv', message:'Track Changed...' },
  ];

  const togglePlayback = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const { setCurrentTrack } = useContext(MusicContext);

  const playTrack = (url: string,message: string) => {
    if (audioRef.current) {
      audioRef.current.src = url;
      audioRef.current.play();
      setIsPlaying(true);
    }setCurrentTrack({message});
  };

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <audio ref={audioRef} onEnded={() => setIsPlaying(false)} />
      
      <button 
        onClick={togglePlayback}
        className="p-2 border border-white/10 rounded-full hover:bg-white/5 transition-all cursor-pointer group"
      >
        <Music size={24} className={`transition-colors ${isPlaying ? 'text-[#FBC138]' : 'text-gray-400 group-hover:text-[#FBC138]'}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute -right-35 mt-2 w-72 bg-zinc-900/50 text-zinc-300 border border-white/10 backdrop-blur-2xl rounded-3xl p-5 shadow-2xl z-100"
          >
            {/* Header */}
            <div className="flex items-center gap-3 mb-5">
               <MdTrackChanges className="w-8 h-8" />
               <h2 className="text-xl font-bold">Change Track</h2>
            </div>
            
            {/* Genre Icons */}
            <div className="flex justify-center gap-3 mb-6">
              {playlistData.map((item) => (
                <button 
                  key={item.label} 
                  onClick={() => playTrack(item.url,item.message)}
                  className={`w-12 h-12 flex items-center justify-center border border-zinc-200 rounded-full group-hover:bg-zinc-800 group-hover:backdrop-blur-3xl  transition-colors font-medium`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <hr className="border-zinc-200 mb-6" />

            {/* Spotify Section */}
            <div className="flex items-center gap-2 mb-4 font-medium text-sm">
              <Radio size={18} />
              <span>Top on Spotify</span>
            </div>

            <div className="flex items-center gap-3 mb-5">
              <div className="w-14 h-14 bg-zinc-200 rounded-lg overflow-hidden">
                <img src="https://i.scdn.co/image/ab67706f000000024c803b7481199043791d990b" alt="Harry styles" />
              </div>
              <div>
                <p className="font-bold text-sm">Today's Top Hits</p>
                <p className="text-zinc-500 text-xs">The hottest 50</p>
              </div>
            </div>
            <Link href="https://open.spotify.com/playlist/37i9dQZF1DXcBWIGoYBM5M?si=sKMnRq-FQzeezWU8-_srzw" target="_blank">
            <button className="w-full flex items-center justify-center gap-2 bg-black text-white py-3 rounded-xl font-medium text-sm hover:bg-zinc-800 transition-colors">
              Listen on Spotify <ExternalLink size={14} />
            </button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}