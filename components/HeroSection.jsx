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
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6 drop-shadow-sm"
        >
          Generative AI <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Foundation Certificate</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg sm:text-xl text-gray-600 mb-10 leading-relaxed max-w-xl"
        >
          Master the essentials of Generative AI and build real-world
          applications using the most advanced models available today.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <button className="bg-blue-600 text-white font-bold px-8 py-4 rounded-full shadow-[0_4px_14px_rgba(37,99,235,0.39)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.23)] hover:bg-blue-500 hover:-translate-y-1 transition-all duration-300">
            Start Learning
          </button>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex items-center mt-10 p-4 rounded-2xl bg-white/70 border border-gray-200 backdrop-blur-md w-max shadow-sm"
        >
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="Instructor"
            className="w-12 h-12 rounded-full mr-4 border-2 border-blue-500/50"
          />
          <div className="flex flex-col">
            <span className="text-gray-900 font-semibold">Instructor Jane Doe, Ph.D.</span>
            <span className="text-blue-600 text-sm">Lead AI Researcher</span>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="mt-16 md:mt-0 md:ml-10 flex justify-center relative"
      >
        <div className="absolute inset-0 bg-blue-500/10 blur-[100px] rounded-full mix-blend-multiply pointer-events-none"></div>
        <img
          src={heroImg}
          alt="AI Visualization"
          className="rounded-[2rem] w-full max-w-[360px] md:max-w-[480px] shadow-xl border border-gray-100 relative z-10"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
