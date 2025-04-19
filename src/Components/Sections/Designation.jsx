import React from "react";
import { FaGithub, FaLinkedin, FaFileDownload } from "react-icons/fa";
import sisirImage from "../../assets/Profilepic/shisir-profile.jpg";
import { motion } from "framer-motion";

const Designation = () => {
    return (
        // bg-white text-gray-800
        <section className=" bg-white text-gray-800 lg:min-h-screen  pt-16 pb-14  flex flex-col items-center text-center">
            {/* Profile Picture */}

            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-primary shadow-lg">
                <img
                    src={sisirImage}
                    alt="Shishir"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Text Content */}
            <div className="mt-6">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
                    Hello, I am <br /> <span className="text-primary">Yeasir Hossain Shishir</span>
                </h1>
                <motion.p className="mt-4 text-xl md:text-2xl text-gray-700 animate-bounce">
                    React Frontend Developer <span className="text-primary animate-blink"></span>
                </motion.p>

                {/* Buttons and Social Links */}
                <div className="mt-6 flex flex-col items-center gap-4">
                    <a
                        href="/path-to-your-resume.pdf"
                        download
                        className="btn btn-primary flex items-center gap-2"
                    >
                        <FaFileDownload className="text-lg" />
                        Download Resume
                    </a>
                    <div className="flex gap-4">
                        <a
                            href="https://github.com/shishir-yh"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-700 hover:text-primary transition-colors"
                        >
                            <FaGithub className="text-2xl" />
                        </a>
                        <a
                            href="https://linkedin.com/in/yourusername"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-700 hover:text-primary transition-colors"
                        >
                            <FaLinkedin className="text-2xl" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Designation;
