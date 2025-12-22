import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code2 } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeTab, setActiveTab] = useState('Home');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`fixed left-0 right-0 z-50 flex justify-center transition-all duration-300 ${scrolled ? 'top-4' : 'top-0'}`}>
            <motion.div
                layout
                className={`
                    flex items-center justify-between px-8 
                    transition-all duration-300 ease-in-out
                    backdrop-blur-2xl shadow-xl z-50 border border-white/20
                    ${scrolled
                        ? 'w-[90%] md:w-[80%] lg:w-[60%] bg-black/70 rounded-3xl py-5 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] ring-1 ring-white/10'
                        : 'w-[95%] md:w-[92%] bg-black/30 rounded-3xl py-6 ring-1 ring-white/10'
                    }
                `}
            >
                {/* Logo */}
                <motion.a
                    href="#"
                    layout
                    className="text-2xl font-bold flex items-center gap-3"
                >
                    <div className="bg-primary/20 p-2.5 rounded-xl">
                        <Code2 className="text-primary" size={28} />
                    </div>
                    <span className="font-bold tracking-wide transition-colors text-white">Azmin<span className="text-primary">.dev</span></span>
                </motion.a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-2 rounded-full p-2 border transition-colors bg-white/5 border-white/5">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setActiveTab(link.name)}
                            className={`
                                relative px-6 py-2.5 rounded-full text-base font-medium transition-colors
                                ${activeTab === link.name
                                    ? 'text-white'
                                    : 'text-gray-300 hover:text-white'
                                }
                            `}
                        >
                            {activeTab === link.name && (
                                <motion.div
                                    layoutId="nav-pill"
                                    className="absolute inset-0 bg-primary rounded-full"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                            <span className="relative z-10 mix-blend-exclusion">{link.name}</span>
                        </a>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="p-2.5 rounded-full transition-colors text-white bg-white/10 hover:bg-white/20">
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </motion.div>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -20 }}
                        className="absolute top-20 w-[90%] backdrop-blur-xl border rounded-3xl overflow-hidden shadow-2xl md:hidden bg-black/80 border-white/10"
                    >
                        <div className="p-4 flex flex-col gap-2">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="px-4 py-3 rounded-lg transition-colors flex items-center justify-between group text-gray-300 hover:text-white hover:bg-white/5"
                                >
                                    {link.name}
                                    <span className="w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
