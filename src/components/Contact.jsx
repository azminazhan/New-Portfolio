import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Twitter, Github, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="section">
            <div className="container">
                <div className="grid md:grid-cols-2 gap-12 items-center">

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-bold mb-6">Let's <span className="gradient-text">Connect</span></h2>
                        <p className="text-gray-400 mb-8 text-lg">
                            I'm currently looking for new opportunities, my inbox is always open.
                            Whether you have a question or just want to say hi, I'll try my best to get back to you!
                        </p>

                        <div className="flex flex-col gap-6 mb-8">
                            <a href="mailto:hello@example.com" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors">
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-blue-400">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Email Me</p>
                                    <p className="text-lg font-semibold">hello@aidev.com</p>
                                </div>
                            </a>
                        </div>

                        <div className="flex gap-4">
                            <SocialLink icon={<Github size={20} />} />
                            <SocialLink icon={<Linkedin size={20} />} />
                            <SocialLink icon={<Twitter size={20} />} />
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass-card p-8"
                    >
                        <form className="flex flex-col gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                                <input
                                    type="text"
                                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                                <input
                                    type="email"
                                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                                    placeholder="john@example.com"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                                <textarea
                                    rows="4"
                                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
                                    placeholder="Your message here..."
                                ></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary justify-center">
                                Send Message <Send size={18} />
                            </button>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

const SocialLink = ({ icon }) => (
    <a
        href="#"
        className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-blue-500 hover:bg-blue-500/10 transition-all"
    >
        {icon}
    </a>
);

export default Contact;
