import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FaBrain,
  FaFlask,
  FaChartLine,
  FaLightbulb,
  FaRobot,
} from "react-icons/fa";

const CourseModules = () => {
  const navigate = useNavigate();

  const courseModules = [
    {
      id: 1,
      title: "Mastering Generative AI and Advanced Prompting",
      progress: 20,
      status: "20% Complete",
      icon: <FaBrain className="text-teal-400 text-2xl" />,
    },
    {
      id: 2,
      title: "AI for Research, Learning, and Content Creation",
      progress: 0,
      status: "Not Started",
      icon: <FaFlask className="text-cyan-400 text-2xl" />,
    },
    {
      id: 3,
      title: "Data to Decision: AI-Driven Analytics and Reporting",
      progress: 0,
      status: "Not Started",
      icon: <FaChartLine className="text-teal-500 text-2xl" />,
    },
    {
      id: 4,
      title: "AI-Powered Problem-Solving, Brainstorming, and Prototyping",
      progress: 0,
      status: "Not Started",
      icon: <FaLightbulb className="text-cyan-500 text-2xl" />,
    },
    {
      id: 5,
      title: "Understanding AI Agents",
      progress: 0,
      status: "Not Started",
      icon: <FaRobot className="text-teal-400 text-2xl" />,
    },
  ];

  const handleViewDetails = (moduleId) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate("/modules", { state: { activeModuleId: moduleId } });
  };

  return (
    <div className="bg-transparent py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-50 mb-4 drop-shadow-lg">
            Course <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-300">Modules</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courseModules.map((module) => (
            <motion.div
              key={module.id}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="bg-white/[0.02] backdrop-blur-2xl rounded-[2rem] shadow-[0_16px_32px_rgba(0,0,0,0.5)] border border-white/[0.05] p-6 flex flex-col justify-between hover:shadow-[0_24px_48px_rgba(20,184,166,0.15)] hover:border-teal-400/30 hover:bg-white/[0.04] transition-colors"
            >
              <div>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 bg-slate-900/60 rounded-xl shadow-inner border border-white/[0.1]">
                    {module.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-100 leading-tight">
                    {module.title}
                  </h3>
                </div>

                {module.progress > 0 ? (
                  <>
                    <div className="w-full bg-slate-800 rounded-full h-2 mb-2 overflow-hidden border border-white/[0.05]">
                      <div
                        className="h-2 rounded-full bg-gradient-to-r from-teal-400 to-cyan-400 shadow-[0_0_10px_rgba(20,184,166,0.8)]"
                        style={{ width: `${module.progress}%` }}
                      ></div>
                    </div>
                    <p className="text-sm font-semibold text-teal-400 mb-6 drop-shadow-sm">
                      {module.status}
                    </p>
                  </>
                ) : (
                  <p className="text-sm font-semibold text-slate-500 mb-6">
                    Not Started
                  </p>
                )}
              </div>

              <button
                onClick={() => handleViewDetails(module.id)}
                className="w-full py-3 rounded-full text-sm font-bold bg-teal-500/90 text-slate-950 hover:bg-teal-400 transition-all duration-300 shadow-[0_0_15px_rgba(20,184,166,0.2)] hover:shadow-[0_0_25px_rgba(20,184,166,0.4)]"
              >
                View Details
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseModules;
