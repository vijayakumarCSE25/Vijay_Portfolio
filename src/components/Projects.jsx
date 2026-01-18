import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ChevronRight } from 'lucide-react';
import Project_1 from '../assets/Project_1.png';
import Project_2 from '../assets/Project_2.png';
import Project_3 from '../assets/Project_3.png';
import Project_4 from '../assets/Project_4.png';
import Project_5 from '../assets/Project_5.png';
import Project_6 from '../assets/Project_6.png';

const Projects = () => {
    const projects = [
        {
            title: "Eat Sure App",
            desc: "EatSure App’s UI/UX focuses on a clean, food-first layout with easy navigation, helping users order meals quickly and without confusion. The design emphasizes clear categories, minimal steps, and smooth checkout for a fast and pleasant food-ordering experience.",
            tags: ["Figma", "UI/UX", "Mobile App"],
            image: Project_1,
            link: "https://shorturl.at/EG0Ww",
            github: "#"
        },
        {
            title: "Bus Ticket Booking App",
            desc: "The Bus Ticket Booking App UI/UX is designed for quick route search and simple seat selection with a clear, user-friendly flow. It ensures smooth booking, easy payment, and minimal user effort for a hassle-free travel experience.",
            tags: ["Figma", "Prototype", "UX Research"],
            image: Project_2,
            link: "https://shorturl.at/lwYJp",
            github: "#"
        },
        {
            title: "Chill Breeze App",
            desc: "Chill Breeze App UI/UX uses a calm, modern layout with intuitive controls to make browsing and booking relaxing and effortless. The design focuses on visual comfort, simple navigation, and a smooth user journey for a pleasant experience.",
            tags: ["Figma", "Prototype", "UX Research"],
            image: Project_3,
            link: "https://shorturl.at/eGc7Z",
            github: "#"
        },
         {
            title: "Spotify App",
            desc: "Spotify App UI/UX is designed with a clean, dark interface that highlights content and makes music discovery easy. The experience focuses on smooth navigation, quick access to favorites, and effortless playback control.",
            tags: ["Figma", "UI/UX", "Mobile App"],
            image: Project_4,
            link: "https://shorturl.at/gR0Vl",
            github: "#"
        },
         {
            title: "Recipe  Cost Calculator App",
            desc: "The Recipe Cost Calculator App UI/UX is designed to make ingredient entry and cost tracking simple and fast. It helps users clearly see total recipe cost with an easy, organized, and user-friendly interface.",
            tags: ["Figma", "UI/UX", "Mobile App"],
            image: Project_5,
            link: "https://shorturl.at/mJnA1",
            github: "#"
        },
         {
            title: "Event Management System",
            desc: "The Event Management System UI/UX is designed to organize events smoothly with clear workflows and easy navigation. It helps users manage bookings, schedules, and attendees efficiently through a simple, professional interface.",
            tags: ["Figma", "UI/UX", "Dashboard"],
            image: Project_6,
            link: "https://shorturl.at/OrXTR",
            github: "#"
        }
    ];

    return (

        <section id="projects" className="py-24">
            <div className="px-5">
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-blue-500 font-bold uppercase tracking-widest text-sm"
                    >
                        My Work
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl font-bold mt-4"
                    >
                        Featured Projects
                    </motion.h2>
                </div>


                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="glow-card group"
                        >
                            <div className="relative overflow-hidden aspect-[16/10]">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-blue-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                    <a href={project.github} className="p-3 bg-white text-blue-600 rounded-full hover:scale-110 transition-transform">
                                        <Github size={20} />
                                    </a>
                                    <a href={project.link} className="p-3 bg-blue-600 text-white rounded-full hover:scale-110 transition-transform">
                                        <ExternalLink size={20} />
                                    </a>
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, tIdx) => (
                                        <span key={tIdx} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-500 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-sm text-slate-400 leading-relaxed mb-6">
                                    {project.desc}
                                </p>
                                <a href={project.link} className="text-sm font-bold text-white flex items-center gap-2 group/link">
                                    View Project <ChevronRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <style jsx>{`
        section {
            padding-top: 6rem;
            padding-bottom: 6rem;
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }
        .flex { display: flex; }
        .justify-between { justify-content: space-between; }
        .items-end { align-items: flex-end; }
        .mb-16 { margin-bottom: 4rem; }
        .text-blue-500 { color: #3b82f6; }
        .font-bold { font-weight: 700; }
        .uppercase { text-transform: uppercase; }
        .tracking-widest { letter-spacing: 0.1em; }
        .text-sm { font-size: 0.875rem; }
        .text-4xl { font-size: 2.25rem; }
        .mt-4 { margin-top: 1rem; }
        .grid { display: grid; }
        @media (min-width: 768px) {
          .md\\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }
        @media (min-width: 1024px) {
          .lg\\:grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
        }
        .gap-8 { gap: 2rem; }
        .aspect-\\[16\\/10\\] { aspect-ratio: 16 / 10; }
        .p-6 { padding: 1.5rem; }
        .flex-wrap { flex-wrap: wrap; }
        .gap-2 { gap: 0.5rem; }
        .mb-4 { margin-bottom: 1rem; }
        .bg-white\\/5 { background-color: rgba(255, 255, 255, 0.05); }
        .border-white\\/10 { border-color: rgba(255, 255, 255, 0.1); }
        .rounded-full { border-radius: 9999px; }
        .text-\\[10px\\] { font-size: 10px; }
        .text-slate-400 { color: #94a3b8; }
        .text-xl { font-size: 1.25rem; }
        .mb-3 { margin-bottom: 0.75rem; }
        .text-white { color: #ffffff; }
        .leading-relaxed { line-height: 1.625; }
        .mb-6 { margin-bottom: 1.5rem; }
        .gap-4 { gap: 1rem; }
        .inset-0 { top: 0; right: 0; bottom: 0; left: 0; }
        .absolute { position: absolute; }
        .relative { position: relative; }
        .hover\\:scale-110:hover { transform: scale(1.1); }
      `}</style>
        </section>
    );
};

export default Projects;
