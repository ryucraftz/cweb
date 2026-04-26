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
      icon: <FaBrain className="text-blue-500 text-2xl" />,
    },
    {
      id: 2,
      title: "AI for Research, Learning, and Content Creation",
      progress: 0,
      status: "Not Started",
      icon: <FaFlask className="text-indigo-500 text-2xl" />,
    },
    {
      id: 3,
      title: "Data to Decision: AI-Driven Analytics and Reporting",
      progress: 0,
      status: "Not Started",
      icon: <FaChartLine className="text-blue-600 text-2xl" />,
    },
    {
      id: 4,
      title: "AI-Powered Problem-Solving, Brainstorming, and Prototyping",
      progress: 0,
      status: "Not Started",
      icon: <FaLightbulb className="text-indigo-600 text-2xl" />,
    },
    {
      id: 5,
      title: "Understanding AI Agents",
      progress: 0,
      status: "Not Started",
      icon: <FaRobot className="text-blue-500 text-2xl" />,
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
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 drop-shadow-sm">
            Course <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Modules</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courseModules.map((module) => (
            <motion.div
              key={module.id}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="bg-white/80 backdrop-blur-2xl rounded-[2rem] shadow-md border border-gray-200 p-6 flex flex-col justify-between hover:shadow-lg hover:border-blue-300 hover:bg-white transition-colors"
            >
              <div>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 bg-blue-50/60 rounded-xl shadow-sm border border-blue-100">
                    {module.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 leading-tight">
                    {module.title}
                  </h3>
                </div>

                {module.progress > 0 ? (
                  <>
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-2 overflow-hidden border border-gray-300">
                      <div
                        className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 shadow-sm"
                        style={{ width: `${module.progress}%` }}
                      ></div>
                    </div>
                    <p className="text-sm font-semibold text-blue-600 mb-6 drop-shadow-sm">
                      {module.status}
                    </p>
                  </>
                ) : (
                  <p className="text-sm font-semibold text-gray-500 mb-6">
                    Not Started
                  </p>
                )}
              </div>

              <button
                onClick={() => handleViewDetails(module.id)}
                className="w-full py-3 rounded-full text-sm font-bold bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 shadow-sm hover:shadow-md"
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
