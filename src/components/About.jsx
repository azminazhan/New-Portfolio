import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Wrench, Terminal, Cloud, Sparkles } from 'lucide-react';
// import profileImg from '../assets/profile-placeholder.jpg'; // Placeholder removed
import profileImg from '../assets/profile.jpg';

const About = () => {
    const timeline = [
        {
            title: "Internship at @AWS Cloud Foundation",
            date: "June 2025 - Aug 2025",
            description: "Worked on AWS services, cloud deployment, and automation. Gained hands-on experience with cloud infrastructure and DevOps practices."
        },
        {
            title: "Internship at @ProdigyInfoTech",
            date: "June 2024 - Aug 2024",
            description: "Worked on UI/UX design, responsive components, and integrated APIs using React and Tailwind CSS."
        }
    ];

    const skills = [
        { category: "Programming Languages", icon: Code, items: ["Python", "C++", "JavaScript", "SQL", "PL/SQL"] },
        { category: "Databases", icon: Database, items: ["Oracle", "Firebase"] },
        { category: "Tools & Software", icon: Wrench, items: ["Microsoft Office", "Power BI", "Figma", "Jira"] },
        { category: "Development Tools", icon: Terminal, items: ["VS Code", "Antigravity", "Base44"] },
        { category: "Backend / Cloud", icon: Cloud, items: ["Firebase", "Google Colab"] },
        { category: "Other", icon: Sparkles, items: ["Video Editing", "Machine Learning"] }
    ];

    return (
        <section id="about" className="section bg-black/50 relative">
            <div className="container">
                {/* Intro Section */}
                <div className="flex flex-col md:flex-row items-center gap-12 mb-24">
                    {/* Profile Image (Placeholder) */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden border-2 border-white/10 shrink-0"
                    >
                        <img src={profileImg} alt="Profile" className="w-full h-full object-cover object-top" />
                    </motion.div>

                    {/* Bio Text */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-center md:text-left"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            I'm <span className="text-primary">Azmin Azhan</span>, An Intelligent Systems Engineering graduate building reliable, <br /> AI-driven software systems.
                        </h2>

                        <p className="text-gray-400 mb-6 leading-relaxed">
                            <br />
                            I’m a final-year student in Bachelor of Information Systems (Hons.) Intelligent Systems Engineering, with hands-on experience gained
                            through my internship in QA testing and ongoing academic and personal projects in AI, machine learning, software development, and data
                            analytics. I enjoy building systems that are not only functional, but thoughtful—whether that means ensuring software quality through
                            testing or designing intelligent solutions using data and deep learning.
                            <br />
                        </p>



                        {/* Social Icons */}
                        {/* Skills Grid */}
                        <div className="flex flex-wrap gap-3 justify-center md:justify-start" style={{ marginTop: '20px' }}>
                            {skills.flatMap(s => s.items).map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.05 }}
                                    className="text-sm rounded-full bg-white/10 backdrop-blur-xl border border-white/50 text-white shadow-lg hover:bg-white/20 hover:scale-105 transition-all cursor-default whitespace-nowrap flex-shrink-0 min-w-max"
                                    style={{ padding: '1px 5px' }}
                                >
                                    {item}
                                </motion.div>
                            ))}
                        </div>


                    </motion.div>
                </div>


            </div>
        </section>
    );
};

export default About;
