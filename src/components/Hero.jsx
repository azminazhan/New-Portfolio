import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Brain, Cpu, Network, ChevronDown } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
            <div className="container relative z-10">
                <div className="flex flex-col items-center justify-center lg:items-center text-center">

                    {/* "Hi, I'm" layout */}
                    <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 mb-4">
                        <motion.h2
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-4xl md:text-6xl font-bold text-white whitespace-nowrap"
                        >
                            Hi, I'm
                        </motion.h2>

                        {/* Name with text stroke */}
                        <motion.h1
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-6xl md:text-8xl font-black uppercase text-stroke tracking-widest"
                            style={{ fontFamily: "'Outfit', sans-serif" }}
                        >
                            AZMIN
                        </motion.h1>
                    </div>

                    <motion.p
                        style={{ marginTop: '10px' }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 text-center"
                    >
                        A passionate fresh graduate loves learning new things <br /> and likes to develop systems and software
                    </motion.p>

                    <motion.div
                        style={{ marginTop: '50px' }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}

                    >
                        <button className="btn btn-primary px-8 py-3 rounded-full text-sm tracking-wider uppercase">
                            View Projects
                        </button>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Down Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 1 }}
            >
                <span className="text-xs text-gray-400 uppercase tracking-widest">Scroll Down</span>
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                    <ChevronDown size={24} className="text-primary" />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
