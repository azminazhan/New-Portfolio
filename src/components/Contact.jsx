import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Twitter, Github, Send } from 'lucide-react';

const Contact = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending...");
        const formData = new FormData(event.target);

        // Replace with your Web3Forms Access Key
        formData.append("access_key", "fd54a48d-cf5e-4a31-acc4-772f2e84109b");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Message Sent Successfully!");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

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
                        <p className="text-gray-400 !mb-12 text-lg">
                            I'm currently looking for new opportunities, my inbox is always open.
                            Whether you have a question or just want to say hi, I'll try my best to get back to you!
                        </p>

                        <div className="flex flex-col gap-6 mb-8">
                            <a href="mailto:mazminazhan@gmail.com" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors">
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-[#00ff9d] border border-white/10 hover:border-[#00ff9d]/50 transition-colors">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 font-medium mb-1">Email Me</p>
                                    <p className="text-xl font-bold text-white tracking-wide">mazminazhan@gmail.com</p>
                                </div>
                            </a>
                        </div>

                        <div className="flex gap-4">
                            <SocialLink
                                icon={<Linkedin size={20} />}
                                href="https://www.linkedin.com/in/muhammad-azmin-77a906362"
                                text="Muhammad Azmin"
                            />
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass-card p-8"
                    >
                        <form onSubmit={onSubmit} className="flex flex-col gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00ff9d] transition-colors"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00ff9d] transition-colors"
                                    placeholder="john@example.com"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                                <textarea
                                    name="message"
                                    rows="4"
                                    required
                                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00ff9d] transition-colors resize-none"
                                    placeholder="Your message here..."
                                ></textarea>
                            </div>

                            <button type="submit" className="flex items-center gap-2 justify-center py-3 px-6 rounded-lg font-bold text-black bg-[#00ff9d] hover:bg-[#00ff9d]/80 transition-all">
                                Send Message <Send size={18} />
                            </button>

                            {result && <span className="text-center text-sm font-medium text-gray-300 mt-2">{result}</span>}
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

const SocialLink = ({ icon, href, text }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors">
        <div className="w-12 h-12 flex-shrink-0 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-[#00ff9d] border border-white/10 hover:border-[#00ff9d]/50 hover:bg-[#00ff9d]/10 transition-all shadow-lg">
            {icon}
        </div>
        {text && (
            <div>
                <p className="text-sm text-gray-500 font-medium mb-1">LinkedIn</p>
                <p className="text-xl font-bold text-white tracking-wide">{text}</p>
            </div>
        )}
    </a>
);

export default Contact;
