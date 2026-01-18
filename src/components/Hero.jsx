import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ExternalLink, Github, Twitter, Linkedin } from 'lucide-react';
import profileImg from '../assets/vijay_profile.png';

const Hero = () => {
    return (
        <section id="home" aria-label="Hero section introducing Vijayakumar R" className="pt-32 pb-20 overflow-hidden">
            <div className="px-5 container grid md:grid-cols-2 gap-12 items-center py-12">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-500 text-sm font-semibold mb-6 border border-blue-500/20"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                        Available for New Projects
                    </motion.div>

                    <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
                        Designing Intuitive <br />
                        <span className="gradient-text">Digital Experiences That Convert</span>
                    </h1>

                    <p className="text-lg text-slate-400 mb-8 max-w-lg">
                        Hi, I'm <span className="text-white font-semibold">Vijayakumar R</span>. A passionate <span className="text-white font-medium">UI/UX Designer</span> and <span className="text-white font-medium">Network Engineer</span> specializing in building intuitive interfaces and robust network infrastructures.
                    </p>

                    <div className="flex flex-wrap gap-4 mb-10 hero-ctas">
                        <a href="#projects" className="px-5 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold flex items-center gap-2 transition-all transform hover:scale-105 btn-primary">
                            View My Work <ChevronRight size={20} />
                        </a>
                        <a href="#contact" className="px-5 py-4 hover:text-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold flex items-center gap-2 transition-all transform hover:scale-105 btn-primary">
                            Contact Me
                        </a>
                    </div>

                    <div className="flex items-center gap-6 text-slate-400 social-links">
                        <a href="https://github.com/vijayakumarCSE25" target="_blank" rel="noopener noreferrer" title="GitHub" className="hover:text-blue-500 transition-colors transform hover:scale-110"><Github size={28} /></a>
                        <a href="https://www.behance.net/vijayediter1" target="_blank" rel="noopener noreferrer" title="Behance" className="hover:text-blue-500 transition-colors transform hover:scale-110"><ExternalLink size={28} /></a>
                        <a
                            href="https://www.linkedin.com/in/vijayakumar-r-598584269/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn Profile"
                            title="LinkedIn"
                            className="hover:text-blue-500 transition-colors transform hover:scale-110"
                        >
                            <Linkedin size={28} />
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer" title="Twitter" className="hover:text-blue-500 transition-colors transform hover:scale-110"><Twitter size={28} /></a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="relative"
                >
                    {/* Background Glows */}
                    <div className="pointer-events-none absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-blue-600/20 blur-[120px] rounded-full -z-10" />
                    <div className="pointer-events-none absolute top-8 right-8 w-28 h-28 bg-indigo-600/30 blur-[60px] rounded-full -z-10" />

                    <div className="relative p-4">
                        {/* Profile Image */}
                        {/* Outer Glow Ring */}
                        {/* 🎨 UI/UX Badge */}
                        {/* <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                            className="
        absolute top-6 right-6
        hidden sm:flex
        items-center gap-2
        bg-white/10 backdrop-blur-md
        border border-white/20
        px-4 py-3 rounded-2xl shadow-xl
        z-20
        hover:scale-105 transition-transform
      "
                        >
                            <span className="text-lg">🎨</span>
                            <span className="text-[11px] font-semibold text-slate-200 uppercase tracking-wider">
                                UI/UX Designer
                            </span>
                        </motion.div> */}


                        {/* Image Ring */}
                        <div className="relative w-[25px] h-[25px] rounded-full p-2 bg-gradient-to-tr from-blue-500 to-purple-600">
                        <div className="w-full h-full rounded-full overflow-hidden bg-[#0b132b]">
                            <img
                                src={profileImg}
                                alt="Profile"
                                className="w-full h-full object-cover"
                                loading="lazy"
                            />
                        </div>
                        </div>
                        {/* 🌐 Network Badge */}
                        {/* <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                            className="
        absolute bottom-6 left-6
        hidden sm:flex
        items-center gap-2
        bg-blue-600/90 backdrop-blur-md
        border border-blue-400/50
        px-4 py-3 rounded-2xl shadow-xl
        z-20
        hover:scale-105 transition-transform
      "
                        >
                            <span className="text-lg">🌐</span>
                            <span className="text-[11px] font-semibold text-white uppercase tracking-wider">
                                Network Engineer
                            </span>
                        </motion.div> */}

                    </div>
                </motion.div>

            </div>

            <style jsx>{`
        section {
            padding-top: 8rem;
            padding-bottom: 5rem;
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }
        .grid { display: grid; }
        .gap-12 { gap: 3rem; }
        .items-center { align-items: center; }
        
        .hero-ctas .btn-primary, .hero-ctas .btn-secondary {
            display: flex;
            align-items: center;
            justify-content: center;
        }

        @media (max-width: 767px) {
          .grid { grid-template-columns: 1fr; }
          .text-5xl { font-size: 2.5rem; }
          .hero-ctas a { width: 100%; }
        }

        @media (min-width: 768px) {
          .md\\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .md\\:text-7xl { font-size: 4.5rem; }
        }
        .text-5xl { font-size: 3rem; }
        .font-extrabold { font-weight: 800; }
        .mb-2 { margin-bottom: 0.5rem; }
        .mb-6 { margin-bottom: 1.5rem; }
        .mb-8 { margin-bottom: 2rem; }
        .mb-10 { margin-bottom: 2.5rem; }
        .leading-tight { line-height: 1.25; }
        .text-lg { font-size: 1.125rem; }
        .text-slate-400 { color: #94a3b8; }
        .max-w-lg { max-width: 32rem; }
        .flex-wrap { flex-wrap: wrap; }
        .bg-blue-600 { background-color: #2563eb; }
        .hover\\:bg-blue-700:hover { background-color: #1d4ed8; }
        .bg-white\\/5 { background-color: rgba(255, 255, 255, 0.05); }
        .hover\\:bg-white\\/10:hover { background-color: rgba(255, 255, 255, 0.1); }
        .border-white\\/10 { border-color: rgba(255, 255, 255, 0.1); }
        .rounded-xl { border-radius: 0.75rem; }
        .aspect-square { aspect-ratio: 1 / 1; }
        .max-w-\\[500px\\] { max-width: 500px; }
        .rounded-\\[3rem\\] { border-radius: 3rem; }
        .blur-\\[120px\\] { filter: blur(120px); }
        .blur-\\[60px\\] { filter: blur(60px); }
        .-z-10 { z-index: -10; }
        .z-10 { z-index: 10; }
        .z-20 { z-index: 20; }
        .inline-flex { display: inline-flex; }
        .rounded-full { border-radius: 9999px; }
        .bg-blue-500\\/10 { background-color: rgba(59, 130, 246, 0.1); }
        .text-blue-500 { color: #3b82f6; }
        .border-blue-500\\/20 { border-color: rgba(59, 130, 246, 0.2); }
      `}</style>
        </section>
    );
};

export default Hero;
