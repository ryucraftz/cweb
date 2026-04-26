import React from "react";
import { motion } from "framer-motion";

const HeroSection = ({ heroImg }) => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 lg:px-12 py-16 sm:py-24 overflow-hidden relative z-10">
      <div className="max-w-2xl text-left">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6 drop-shadow-lg"
        >
          Generative AI <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-300">Foundation Certificate</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg sm:text-xl text-slate-400 mb-10 leading-relaxed max-w-xl"
        >
          Master the essentials of Generative AI and build real-world
          applications using the most advanced models available today.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <button className="bg-teal-500/90 text-slate-950 font-bold px-8 py-4 rounded-full shadow-[0_0_20px_rgba(20,184,166,0.3)] hover:shadow-[0_0_40px_rgba(20,184,166,0.5)] hover:bg-teal-400 hover:-translate-y-1 transition-all duration-300 border border-teal-300/30">
            Start Learning
          </button>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex items-center mt-10 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-md w-max"
        >
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="Instructor"
            className="w-12 h-12 rounded-full mr-4 border-2 border-teal-500/50"
          />
          <div className="flex flex-col">
            <span className="text-slate-200 font-semibold">Instructor Jane Doe, Ph.D.</span>
            <span className="text-teal-400 text-sm">Lead AI Researcher</span>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="mt-16 md:mt-0 md:ml-10 flex justify-center relative"
      >
        <div className="absolute inset-0 bg-teal-500/20 blur-[100px] rounded-full mix-blend-screen pointer-events-none"></div>
        <img
          src={heroImg}
          alt="AI Visualization"
          className="rounded-[2rem] w-full max-w-[360px] md:max-w-[480px] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.8)] border border-white/[0.05] relative z-10"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
