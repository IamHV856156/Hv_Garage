"use client";
import React from "react";

const GridBG = () => {
  return (
    <div className="fixed inset-0 -z-10 bg-[#020202] overflow-hidden pointer-events-none">
      
      <div className="absolute top-[10%] left-0 w-full h-[60%] bg-blue-900/20 blur-[150px]" />

      <div 
        className="absolute bottom-0 left-[-50%] w-[200%] h-[120%]"
        style={{
          perspective: '800px',
          perspectiveOrigin: '50% 0%',
        }}
      >
        <div 
          className="absolute inset-0 animate-landscape"
          style={{
            transform: 'rotateX(75deg)',
            backgroundImage: `
              linear-gradient(to right, rgba(59, 130, 246, 0.3) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px',
            maskImage: 'linear-gradient(to top, black 30%, transparent 95%)',
          }}
        >
          <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,#020202_100%)]" />
        </div>
      </div>

      <div className="absolute inset-0 scanlines opacity-10" />
      
    </div>
  );
};

export default GridBG;