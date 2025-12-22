import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, X, ChevronRight, ChevronLeft } from 'lucide-react';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            id: 1,
            title: 'Entomo Portal',
            category: 'Full Stack Development',
            description: [
                "Designed and developed a full-stack employee portal using zero-code AI prompting, aligning internship deliverables with AI coursework.",
                "Built a centralized knowledge hub with role-based access, enabling employees and admins to manage internal content efficiently.",
                "Admin side of UI to enable editing contents without backend intervention",
                "Presented the solution to senior stakeholders and received approval for potential company-wide adoption.",
            ],
            details: "Centralized employee knowledge hub to host wellness session recordings, articles, town halls, internal trainings, and ISO certification progress, improving accessibility compared to email- and chat based distribution.",
            tech: ['Firebase', 'JavaScript', 'Antigravity', 'Base44'],
            color: 'from-green-400 to-teal-500',
            images: [
                "https://placehold.co/800x450/0f172a/00ff9d?text=Dashboard+View",
                "https://placehold.co/800x450/0f172a/00ff9d?text=Admin+Panel",
                "https://placehold.co/800x450/0f172a/00ff9d?text=Search+Feature"
            ]
        },
        {
            id: 2,
            title: 'Deepfake Detection System',
            category: 'Deep Learning',
            description: [
                "Developed a GAN architecture to synthesize original abstract art from noise vectors.",
                "Implemented stylistic controls allowing users to tweak color palettes and complexity.",
                "Optimized model inference time for real-time generation in the browser."
            ],
            details: "Using a hybrid model ResNet-50 with LSTM, the system detects deepfake videos by detecting generated artifacts on the face.",
            tech: ['Python', 'PyTorch', 'TensorFlow', 'Streamlit'],
            color: 'from-blue-500 to-cyan-500',
            images: [
                "https://placehold.co/800x450/1e293b/38bdf8?text=Generated+Art+1",
                "https://placehold.co/800x450/1e293b/38bdf8?text=Model+Architecture"
            ]
        },
        {
            id: 3,
            title: 'Stock Delivery Database Management System',
            category: 'Database Management',
            description: [
                "Designed and implemented a robust database management system to streamline stock delivery operations for a simulated supply chain environment.",
                "Utilized PL/SQL to create stored procedures, triggers, and functions for enforcing business logic and automating stock updates.",
                "Developed and optimized relational schemas, ER diagrams, and SQL queries to manage inventory, suppliers, orders, and deliveries efficiently."
            ],
            details: "Robust database management system to streamline stock delivery operations for a simulated supply chain environment.",
            tech: ['Oracle Database', 'PL/SQL', 'SQL', 'ERD'],
            color: 'from-purple-500 to-pink-500',
            images: [
                "https://placehold.co/800x450/2e1065/d8b4fe?text=Chat+Interface",
                "https://placehold.co/800x450/2e1065/d8b4fe?text=Conversation+Flow"
            ]
        },
        {
            id: 4,
            title: 'CKD Support System',
            category: 'Decision Support System',
            description: [
                "Multiple dashboard profiles showing the relation of each factor to CKD risk.",
                "Visualized graph of the relation of each factor to CKD risk.",
                "Supports doctors and health professionals to assist in diagnosing and treating kidney diseases."
            ],
            details: "A descision support system for doctors and health professionals to assist in diagnosing and treating kidney diseases.",
            tech: ['Power BI', 'Data Analysis'],
            color: 'from-orange-500 to-red-500',
            images: [
                "https://placehold.co/800x450/431407/fb923c?text=Simulation+Env",
                "https://placehold.co/800x450/431407/fb923c?text=Training+Graphs"
            ]
        }
    ];

    return (
        <section id="projects" className="section relative">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                    style={{ marginTop: '50px' }}
                >
                    <h2 className="text-4xl font-bold mb-4 text-white">Featured <span className="text-[#00ff9d]">Projects</span></h2>
                    <p className="text-gray-400">A showcase of my technical explorations and creations.</p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project) => (
                        <motion.div
                            layoutId={`card-${project.id}`}
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            onClick={() => setSelectedProject(project)}
                            className="glass-card group relative overflow-hidden cursor-pointer hover:border-[#00ff9d]/50 transition-colors"
                        >
                            {/* Decorative Gradient Background */}
                            <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${project.color} opacity-10 blur-3xl rounded-full transform translate-x-1/2 -translate-y-1/2 group-hover:opacity-20 transition-opacity duration-500`}></div>

                            <div className="relative z-10">
                                <span className="text-sm font-mono text-[#00ff9d] mb-2 block">{project.category}</span>
                                <motion.h3 layoutId={`title-${project.id}`} className="text-2xl font-bold mb-3 group-hover:text-[#00ff9d] transition-colors">{project.title}</motion.h3>

                                {/* CARD CONTENT: Showing Details (Paragraph) instead of Descriptions (Bullets) */}
                                <p className="text-gray-400 mb-6 line-clamp-3 leading-relaxed">
                                    {project.details}
                                </p>
                                <div className="text-xs text-[#00ff9d] mb-6 font-semibold flex items-center gap-1">
                                    Click to view details <ChevronRight size={14} />
                                </div>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map((t) => (
                                        <span key={t} className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Project Modal Popup */}
            <AnimatePresence>
                {selectedProject && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedProject(null)}
                            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                        />

                        {/* Modal Content */}
                        <motion.div
                            layoutId={`card-${selectedProject.id}`}
                            className="relative w-full max-w-4xl bg-[#0f172a] border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
                        >
                            {/* Close Button */}
                            <button
                                onClick={(e) => { e.stopPropagation(); setSelectedProject(null); }}
                                className="absolute top-4 right-4 z-20 p-2 bg-black/50 hover:bg-red-500/80 rounded-full text-white transition-colors"
                            >
                                <X size={24} />
                            </button>

                            {/* Scrollable Content */}
                            <div className="overflow-y-auto flex-1 custom-scrollbar">
                                {/* Image Gallery Section */}
                                <div className="relative w-full h-64 md:h-96 bg-black/50 group">
                                    <div className="flex overflow-x-auto snap-x snap-mandatory h-full w-full custom-scrollbar">
                                        {selectedProject.images.map((img, idx) => (
                                            <div key={idx} className="flex-shrink-0 w-full h-full snap-center relative">
                                                <img
                                                    src={img}
                                                    alt={`${selectedProject.title} screenshot ${idx + 1}`}
                                                    className="w-full h-full object-cover"
                                                />
                                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 px-3 py-1 rounded-full text-xs text-white backdrop-blur-md">
                                                    Image {idx + 1} / {selectedProject.images.length}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent pointer-events-none flex justify-between items-end">
                                        <span className="text-white/60 text-xs uppercase tracking-widest"> &larr; Swipe for images &rarr; </span>
                                    </div>
                                </div>

                                <div className="p-8">
                                    <div className="flex flex-col md:flex-row gap-6 justify-between items-start mb-6">
                                        <div>
                                            <span className="text-[#00ff9d] font-mono text-sm mb-2 block">{selectedProject.category}</span>
                                            <motion.h3 layoutId={`title-${selectedProject.id}`} className="text-3xl md:text-4xl font-bold text-white mb-2">{selectedProject.title}</motion.h3>
                                        </div>
                                        <div className="flex gap-3">
                                            <a href="#" className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-[#00ff9d]/20 text-white hover:text-[#00ff9d] transition-colors font-semibold text-sm">
                                                <Github size={18} /> Source
                                            </a>
                                            <a href="#" className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#00ff9d] text-black hover:bg-[#00ff9d]/80 transition-colors font-bold text-sm">
                                                <ExternalLink size={18} /> Live Demo
                                            </a>
                                        </div>
                                    </div>

                                    {/* Tech Stack */}
                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {selectedProject.tech.map((t) => (
                                            <span key={t} className="px-3 py-1 rounded-md bg-[#00ff9d]/10 border border-[#00ff9d]/20 text-[#00ff9d] text-sm font-medium">
                                                {t}
                                            </span>
                                        ))}
                                    </div>

                                    {/* MODAL CONTENT: Showing Descriptions (Bullets) HERE */}
                                    <div className="space-y-6 text-gray-300 leading-relaxed">
                                        <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
                                            <h4 className="text-lg font-bold text-white mb-3">Key Highlights</h4>
                                            {/* BULLET POINTS */}
                                            <ul className="list-disc pl-5 space-y-2 mb-4">
                                                {Array.isArray(selectedProject.description) ?
                                                    selectedProject.description.map((pt, i) => <li key={i}>{pt}</li>)
                                                    : <li>{selectedProject.description}</li>
                                                }
                                            </ul>

                                            <div className="text-sm text-gray-400 border-t border-white/10 pt-4 mt-4">
                                                <p>{selectedProject.details}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Projects;
