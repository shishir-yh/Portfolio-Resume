import React, { useState } from 'react';
import { motion } from "framer-motion";

const projects = [
    {
        name: "Hostel Meal Management System ",
        image: "https://i.ibb.co.com/VW23VzVQ/a-12.jpg",
        techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
        description: "Daily Grub is a robust Hostel Management System designed for university hostels. It streamlines meal management and review processes, offering both students and administrators an easy-to-use platform to handle daily operations efficiently.",
        liveLink: "https://hostel-meal-auth.web.app/",
        githubLink: "https://github.com/shishir-yh/Hostel_Meal_System_Client_a12",
        challenges: "Handling real-time updates and ensuring secure payment processing.",
        improvements: "Add AI-based recommendations and improve mobile responsiveness.",
    },
    {
        name: "Course Review System",
        image: "https://i.ibb.co.com/ZRbpdjJP/a-11.jpg",
        techStack: ["React", "Firebase", "Tailwind CSS", "DaisyUI"],
        description: "This project is a full-stack application that allows users to review and interact with courses listed by others. Users can log in, add courses, and share their experiences through reviews. It also provides functionality for users to manage their reviews and explore reviews of courses they've added.",
        liveLink: "https://service-review-a2ab2.web.app/",
        githubLink: "https://github.com/shishir-yh/Service_Review_Client-a11",
        challenges: "Implementing real-time sync across multiple users.",
        improvements: "Add offline support and integrate calendar view.",
    },
    {
        name: "Portfolio Website",
        image: "https://i.ibb.co.com/LXf6CHbK/Movie-Portal-Pic.jpg",
        techStack: ["React", "Tailwind CSS", "DaisyUI"],
        description: "A responsive portfolio website showcasing my projects and skills.",
        liveLink: "http://movie-portal-mass.surge.sh/",
        githubLink: "https://github.com/example/portfolio-client",
        challenges: "Ensuring cross-browser compatibility and accessibility.",
        improvements: "Add a blog section and dark mode toggle.",
    },
];


const ProjectCard = ({ project, onClick }) => (
    <div className="relative group  shadow-md border border-gray-300 rounded-lg overflow-hidden transition-all duration-300 hover:shadow ">
        {/* Image with Overlay */}
        <figure className="relative">
            <img src={project.image} alt={project.name} className="w-full h-68 object-cover transition-transform duration-300 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-75 flex items-center justify-center transition-opacity duration-1000">
                <h2 className="text-white text-lg font-extrabold text-center">{project.name}</h2>
            </div>
        </figure>

        {/* Button (Hidden until Hover) */}
        <div className="absolute inset-0 flex items-end justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button className="mb-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition" onClick={onClick}>
                View More / Details
            </button>
        </div>
    </div>
);


const ProjectModal = ({ project, onClose }) => (
    <div className={`modal ${project ? 'modal-open' : ''}`}>
        <div className="modal-box bg-white text-gray-900 border border-gray-300">
            <h3 className="font-bold text-3xl text-gray-900">{project.name}</h3>
            <p><strong>Tech Stack:</strong> {project.techStack.join(", ")}</p>
            <p><strong>Description:</strong> {project.description}</p>
            <p><strong>Live Link:</strong> <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">{project.liveLink}</a></p>
            <p><strong>GitHub Link:</strong> <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">{project.githubLink}</a></p>
            <p><strong>Challenges:</strong> {project.challenges}</p>
            <p><strong>Improvements:</strong> {project.improvements}</p>
            <div className="modal-action">
                <button className="btn bg-red-500 text-white hover:bg-red-600" onClick={onClose}>Close</button>
            </div>
        </div>
    </div>
);

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <div className="container mx-auto lg:p-4 pb-12">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12"
                >
                    My Projects
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-4 gap-16">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            project={project}
                            onClick={() => setSelectedProject(project)}
                        />
                    ))}
                </div>
                {selectedProject && (
                    <ProjectModal
                        project={selectedProject}
                        onClose={() => setSelectedProject(null)}
                    />
                )}
            </div>
        </div>
    );
};

export default Projects;
