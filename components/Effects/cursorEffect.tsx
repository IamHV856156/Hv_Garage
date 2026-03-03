"use client";
import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

const GlassCursorEffect = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 150, damping: 20, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  const cursorScale = useSpring(1, { stiffness: 300, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseDown = () => cursorScale.set(0.8);
    const handleMouseUp = () => cursorScale.set(1);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isVisible]);

  return (
   <motion.div
     style={{
       translateX: cursorX,
       translateY: cursorY,
       scale: cursorScale,
       left: -16,
       top: -16,
     }}
     className={`fixed pointer-events-none z-9999 transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0"}`}
   >
      <div className="w-8 h-8 rounded-full border border-white/30 backdrop-blur-[2px] flex items-center justify-center">
        <div className="w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,0.8)]" />
      </div>

      <motion.div
        style={{
          x: useSpring(mouseX, { stiffness: 50, damping: 30 }),
          y: useSpring(mouseY, { stiffness: 50, damping: 30 }),
        }}
        className="absolute -inset-4 -z-10 bg-blue-500/10 blur-2xl rounded-full"
      />
    </motion.div>
  );
};

export default GlassCursorEffect;