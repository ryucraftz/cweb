import React from 'react';
import { FaRegLightbulb, FaMicrochip, FaSyncAlt, FaMedal } from "react-icons/fa";

const learnItems = [
    {
        icon: <FaRegLightbulb className="text-blue-500 text-4xl mb-4" />,
        title: "Core AI Concepts",
        description: "Understand the fundamental principles driving modern generative models.",
    },
    {
        icon: <FaMicrochip className="text-indigo-500 text-4xl mb-4" />,
        title: "Practical Model Applications",
        description: "Apply cutting-edge generative AI models to real-world problems.",
    },
    {
        icon: <FaSyncAlt className="text-blue-500 text-4xl mb-4" />,
        title: "Continuous Innovation",
        description: "Stay updated with the latest advancements and emerging techniques in AI.",
    },
    {
        icon: <FaMedal className="text-indigo-500 text-4xl mb-4" />,
        title: "Certification Readiness",
        description: "Prepare for industry-recognized certifications with comprehensive coverage.",
    },
];

const LearnSection = () => {
    return (
        <section className="px-10 md:px-20 py-24 bg-transparent text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-16 text-gray-900 drop-shadow-sm">What You'll Learn</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-center max-w-5xl mx-auto">
                {learnItems.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white/80 border border-gray-200 backdrop-blur-xl shadow-md rounded-[2rem] p-8 flex flex-col items-center justify-center hover:bg-white hover:-translate-y-2 hover:shadow-lg hover:border-blue-200 transition-all duration-500 ease-out"
                    >
                        <div className="p-4 bg-blue-50/50 rounded-2xl shadow-inner border border-blue-100 mb-2">
                            {item.icon}
                        </div>
                        <h3 className="font-bold text-xl text-gray-800 mb-3">{item.title}</h3>
                        <p className="text-gray-600 text-sm md:text-base text-center leading-relaxed">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default LearnSection;