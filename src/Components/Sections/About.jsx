import React, { useState } from "react";
import { motion } from "framer-motion";

const About = () => {
    const [showMore, setShowMore] = useState(false);

    return (
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="py-16  bg-gray-100 text-gray-800 "
        >
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12"
                >
                    About me
                </motion.h2>
                <div className="max-w-3xl mx-auto text-center">
                    <p className="text-lg text-gray-700 mb-6">
                        Hello! I’m <span className="text-primary font-semibold">Shishir</span>, a passionate{" "}
                        <span className="text-primary font-semibold">Frontend Developer</span> with a love for
                        crafting beautiful and functional user interfaces.
                    </p>

                    {showMore && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}

                        >
                            <p className="text-lg text-gray-700 mb-6">
                                I specialize in building{" "}
                                <span className="text-primary font-semibold">responsive, user-friendly, and visually
                                    appealing websites</span> using modern technologies like{" "}
                                <span className="text-primary font-semibold">React, Tailwind CSS, and JavaScript</span>.
                            </p>
                            <p className="text-lg text-gray-700 mb-6">
                                When I’m not coding, you can find me exploring new technologies, contributing to
                                open-source projects, or diving into the latest trends in web development. Outside of
                                programming, I have a keen interest in{" "}
                                <span className="text-primary font-semibold">photography</span> and{" "}
                                <span className="text-primary font-semibold">traveling</span>, which help me stay
                                inspired and bring fresh perspectives to my work.
                            </p>
                            <p className="text-lg text-gray-700">
                                I believe that great design and functionality go hand in hand, and I’m always excited to
                                take on new challenges that push me to grow as a developer.
                            </p>
                        </motion.div>
                    )}

                    {/* Animated Button */}
                    <motion.button
                        onClick={() => setShowMore(!showMore)}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 200 }}
                        className="mt-4 px-6 py-2 bg-primary text-white font-semibold rounded-lg shadow-md hover:bg-primary-dark transition-all"
                    >
                        {showMore ? "Show Less" : "Know More About Me"}
                    </motion.button>
                </div>
            </div>
        </motion.section>
    );
};

export default About;
