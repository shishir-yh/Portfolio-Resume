import React from "react";
import { motion } from "framer-motion";
import {
    FaHtml5, FaCss3, FaNode, FaReact,
} from "react-icons/fa";
import {
    SiTailwindcss, SiNextdotjs, SiFirebase,
    SiMongodb, SiExpress, SiReactquery, SiAxios,
} from "react-icons/si";

const SkillsSection = () => {
    const skills = {
        Frontend: [
            { name: "HTML", icon: <FaHtml5 className="w-12 h-12 text-orange-500" /> },
            { name: "CSS", icon: <FaCss3 className="w-12 h-12 text-primary" /> },
            { name: "Tailwind CSS", icon: <SiTailwindcss className="w-12 h-12 text-blue-400" /> },
            { name: "React", icon: <FaReact className="w-12 h-12 text-blue-500" /> },
            { name: "Next.js", icon: <SiNextdotjs className="w-12 h-12 text-black dark:text-white" /> },
        ],
        Backend: [
            { name: "Node.js", icon: <FaNode className="w-12 h-12 text-green-500" /> },
            { name: "Express", icon: <SiExpress className="w-12 h-12 text-gray-800 dark:text-white" /> },
            { name: "MongoDB", icon: <SiMongodb className="w-12 h-12 text-green-600" /> },
            { name: "Firebase", icon: <SiFirebase className="w-12 h-12 text-yellow-500" /> },
        ],
        Tools: [
            { name: "TanStack Query", icon: <SiReactquery className="w-12 h-12 text-red-500" /> },
            { name: "Axios", icon: <SiAxios className="w-12 h-12 text-blue-600" /> },
        ],
    };

    return (
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="py-16 bg-base-200"
        >
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12"
                >
                    Skills
                </motion.h2>

                <div className="flex flex-col md:flex-row justify-center gap-8">
                    {Object.entries(skills).map(([category, items]) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="bg-base-100 p-6 rounded-lg shadow-md"
                        >
                            <h3 className="text-2xl font-semibold text-primary mb-4">{category}</h3>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {items.map((skill, index) => (
                                    <motion.div
                                        key={index}
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        transition={{ type: "spring", stiffness: 200 }}
                                        className="flex flex-col items-center justify-center p-4 bg-base-200 rounded-lg"
                                    >
                                        {skill.icon}
                                        <p className="mt-2 text-lg text-gray-700">{skill.name}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

export default SkillsSection;

