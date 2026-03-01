import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, X, ChevronRight, ChevronLeft } from 'lucide-react';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [enlargedImage, setEnlargedImage] = useState(null);
    const galleryRef = useRef(null);

    const scrollGallery = (direction) => {
        if (galleryRef.current) {
            const scrollAmount = galleryRef.current.clientWidth;
            galleryRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
        }
    };

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
                `${import.meta.env.BASE_URL}signin1.png`,
                `${import.meta.env.BASE_URL}home.png`,
                `${import.meta.env.BASE_URL}articles.png`,
                `${import.meta.env.BASE_URL}iso.png`,
                `${import.meta.env.BASE_URL}admin.png`
            ],
            liveDemo: "https://entomo-7c549.web.app/",
            github: "#",
            credentials: { email: "sadmin@entomo.co", pass: "12345678" }
        },
        {
            id: 2,
            title: 'Deepfake Detection System',
            category: 'Deep Learning',
            description: [
                "Standalone deepfake detection system with a Streamlit frontend and hybrid CNN–RNN backend for video forgery detection.",
                "Trained the model on real and manipulated datasets to identify facial inconsistencies and temporal artifacts.",
                "Utilized Convolutional Neural Networks (CNN) for spatial feature extraction and Recurrent Neural Networks (RNN) for temporal sequence analysis.",
                "Experimented and analysed based on different factors, optmizer, learning rate, sequence length, dropout rate and total epoch to get the best performance."
            ],
            details: "Using a hybrid model ResNet-50 with LSTM, the system detects deepfake videos by detecting generated artifacts on the face.",
            tech: ['Python', 'Streamlit', 'TensorFlow', 'PyTorch', 'Machine Learning'],
            liveDemo: 'https://deepfake-detection-system-hv7yzpci4fubzj9vvktvlu.streamlit.app/',
            github: "#",
            color: 'from-blue-500 to-cyan-500',
            images: [
                `${import.meta.env.BASE_URL}deep_home.png`,
                `${import.meta.env.BASE_URL}deep_process.png`,
                `${import.meta.env.BASE_URL}deep_result.png`,
                `${import.meta.env.BASE_URL}deep_explain.png`
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
                "https://placehold.co/800x450/2e1065/d8b4fe?text=No+Preview",
                "https://placehold.co/800x450/2e1065/d8b4fe?text=No+Preview"
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
                `${import.meta.env.BASE_URL}ckd1.png`,
                `${import.meta.env.BASE_URL}ckd2.png`,
                `${import.meta.env.BASE_URL}ckd3.png`
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
                                    <div ref={galleryRef} className="flex overflow-x-auto snap-x snap-mandatory h-full w-full custom-scrollbar scroll-smooth">
                                        {selectedProject.images.map((img, idx) => (
                                            <div key={idx} className="flex-shrink-0 w-full h-full snap-center relative group/image overflow-hidden cursor-zoom-in" onClick={() => setEnlargedImage(img)}>
                                                <img
                                                    src={img}
                                                    alt={`${selectedProject.title} screenshot ${idx + 1}`}
                                                    className="w-full h-full object-cover transition-all duration-300 group-hover/image:scale-105 group-hover/image:blur-sm"
                                                />
                                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 pointer-events-none">
                                                    <span className="bg-black/70 text-white font-bold !py-5 !px-5 rounded-full backdrop-blur-md border border-white/20 shadow-2xl tracking-wide">
                                                        Click to Enlarge
                                                    </span>
                                                </div>
                                                <div className="absolute bottom-4 left-4 bg-black/60 !px-3 !py-2 rounded-full text-xs font-bold text-white backdrop-blur-md border border-white/10 shadow-lg pointer-events-none">
                                                    Image {idx + 1} / {selectedProject.images.length}
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Navigation Arrows */}
                                    <button
                                        onClick={(e) => { e.stopPropagation(); scrollGallery('left'); }}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-[#00ff9d] text-white hover:text-black p-3 rounded-full backdrop-blur-md border border-white/20 transition-all opacity-0 group-hover:opacity-100 shadow-xl"
                                    >
                                        <ChevronLeft size={24} />
                                    </button>
                                    <button
                                        onClick={(e) => { e.stopPropagation(); scrollGallery('right'); }}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-[#00ff9d] text-white hover:text-black p-3 rounded-full backdrop-blur-md border border-white/20 transition-all opacity-0 group-hover:opacity-100 shadow-xl"
                                    >
                                        <ChevronRight size={24} />
                                    </button>
                                </div>

                                <div className="!px-32 md:!px-6 py-12">
                                    <div className="flex flex-col md:flex-row gap-8 justify-between items-start mb-10">
                                        <div>
                                            <span className="text-[#00ff9d] font-mono text-sm mb-4 block tracking-wider uppercase font-semibold">{selectedProject.category}</span>
                                            <motion.h3 layoutId={`title-${selectedProject.id}`} className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">{selectedProject.title}</motion.h3>
                                        </div>
                                        <div className="flex flex-col items-center sm:items-end mt-2 md:mt-0">
                                            <div className="flex gap-4">
                                                {selectedProject.github && (
                                                    <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="flex items-center !gap-2 !px-4 !py-2 rounded-full bg-white/10 hover:bg-[#00ff9d]/20 text-white hover:text-[#00ff9d] transition-colors font-semibold text-base leading-none">
                                                        <Github size={20} /> Source
                                                    </a>
                                                )}
                                                {selectedProject.liveDemo && (
                                                    <a href={selectedProject.liveDemo} target="_blank" rel="noopener noreferrer" className="flex items-center !gap-2 !px-4 !py-3 rounded-full bg-[#00ff9d] !text-black hover:bg-[#00ff9d]/80 transition-colors font-bold text-base leading-none">
                                                        <ExternalLink size={20} /> Live Demo
                                                    </a>
                                                )}
                                            </div>
                                            {selectedProject.credentials && (
                                                <div className="!mt-6 p-4 bg-white/5 rounded-xl border border-[#00ff9d]/20 text-sm text-gray-300 w-full sm:w-auto self-end md:self-end shadow-md">
                                                    <p className="font-bold text-white mb-3 text-xs uppercase tracking-wider flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#00ff9d]"></span> Demo Credentials</p>
                                                    <div className="flex items-center justify-between gap-8 mb-2">
                                                        <span className="text-gray-400">Email:</span>
                                                        <span className="text-[#00ff9d] font-mono select-all">{selectedProject.credentials.email}</span>
                                                    </div>
                                                    <div className="flex items-center justify-between gap-8">
                                                        <span className="text-gray-400">Password:</span>
                                                        <span className="text-[#00ff9d] font-mono select-all">{selectedProject.credentials.pass}</span>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Tech Stack */}
                                    <div className="flex flex-wrap gap-3 mb-12">
                                        {selectedProject.tech.map((t) => (
                                            <span key={t} className="px-4 py-2 rounded-lg bg-[#00ff9d]/10 border border-[#00ff9d]/20 text-[#00ff9d] text-sm font-semibold tracking-wide">
                                                {t}
                                            </span>
                                        ))}
                                    </div>

                                    {/* MODAL CONTENT: Showing Descriptions (Bullets) HERE */}
                                    <div className="space-y-8 text-gray-300 leading-relaxed">
                                        <div className="bg-white/5 !pb-3 !pt-3 rounded-3xl border border-white/10 !mt-12 lg:mx-8">
                                            <h4 className="text-xl md:text-2xl font-bold text-white mb-6 !pb-3 !pl-8 md:!pl-6">Key Highlights</h4>
                                            {/* BULLET POINTS */}
                                            <ul className="!pl-8 md:!pl-14 space-y-6 mb-6 !pb-6 text-base md:text-lg text-white/90">
                                                {Array.isArray(selectedProject.description) ?
                                                    selectedProject.description.map((pt, i) => (
                                                        <li key={i} className="flex items-start gap-4 leading-relaxed">
                                                            <div className="flex-shrink-0 flex items-center h-7 pt-1">
                                                                <div className="w-2.5 h-2.5 rounded-full bg-[#00ff9d] shadow-[0_0_10px_#00ff9d]"></div>
                                                            </div>
                                                            <span className="flex-1">{pt}</span>
                                                        </li>
                                                    ))
                                                    : (
                                                        <li className="flex items-start gap-4 leading-relaxed">
                                                            <div className="flex-shrink-0 flex items-center h-7 pt-1">
                                                                <div className="w-2.5 h-2.5 rounded-full bg-[#00ff9d] shadow-[0_0_10px_#00ff9d]"></div>
                                                            </div>
                                                            <span className="flex-1">{selectedProject.description}</span>
                                                        </li>
                                                    )
                                                }
                                            </ul>

                                            <div className="text-base text-gray-400 border-t border-white/10 pt-6 mt-6 pb-4 leading-loose !px-8 md:!px-14">
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

            {/* Enlarged Image Modal */}
            <AnimatePresence>
                {enlargedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setEnlargedImage(null)}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-8 cursor-zoom-out"
                    >
                        <button
                            onClick={(e) => { e.stopPropagation(); setEnlargedImage(null); }}
                            className="absolute top-6 right-6 z-[110] p-3 bg-white/10 hover:bg-red-500/80 rounded-full text-white transition-colors backdrop-blur-md border border-white/20 shadow-2xl"
                        >
                            <X size={28} />
                        </button>
                        <motion.img
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            src={enlargedImage}
                            alt="Enlarged view"
                            className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl border border-white/10 cursor-default"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Projects;
