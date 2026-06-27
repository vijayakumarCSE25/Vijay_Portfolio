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
            title: "Deneeraj Website",
            desc: "Redesigned the Deneeraj website to improve usability and user experience. Enhanced service discovery with a clean, modern interface and intuitive navigation. Focused on increasing engagement and supporting better lead generation.",
            tags: ["Figma", "UI/UX", "Dashboard"],
            image: Project_1,
            link: "https://www.figma.com/proto/8SFyek6q7CkiOYNexWCTAV/Task?node-id=306-55&p=f&viewport=326%2C220%2C0.13&t=Xu9Y1XGhTWQV2DbL-1&scaling=min-zoom&content-scaling=fixed&page-id=306%3A54",
            github: "#"
        },
         {
            title: "Cable Tie Supply",
            desc: "Redesigned the Cable Tie Supply e-commerce website to improve usability, product discovery, and the overall shopping experience. Focused on creating a modern, user-friendly that increases customer engagement and conversion rates.",
            tags: ["Figma", "UI/UX", "Dashboard"],
            image: Project_2,
            link: "https://www.figma.com/proto/GRnC37KXrb1KtRIB55Be1d/CTS-Web?node-id=603-156&viewport=434%2C60%2C0.1&t=Tyw1eKYc2AZxOSxT-1&scaling=min-zoom&content-scaling=fixed&page-id=603%3A155",
            github: "#"
        },
         {
            title: "Hand Made Sign Website",
            desc: "Designed a clean and visually appealing for a handmade sign business to showcase custom products and strengthen brand identity. Focused on intuitive navigation, engaging visuals to encourage customer inquiries and purchases.",
            tags: ["Figma", "UI/UX", "Dashboard"],
            image: Project_3,
            link: "https://www.figma.com/proto/ZhPhUGDkaO3R725HioSA5m/HMS?node-id=459-164&viewport=446%2C60%2C0.09&t=9nv5uucOwYzHK58C-1&scaling=min-zoom&content-scaling=fixed&page-id=459%3A163",
            github: "#"
        },
        {
            title: "Eat Sure App",
            desc: "EatSure App’s UI/UX focuses on a clean, food-first layout with easy navigation, helping users order meals quickly and without confusion. The design emphasizes clear categories, minimal steps, and smooth checkout for a fast and pleasant food-ordering experience.",
            tags: ["Figma", "UI/UX", "Mobile App"],
            image: Project_4,
            link: "https://www.figma.com/proto/PsTz7C5sdrKEVZ33yg6pqJ/Food_Order_App?node-id=1-2&p=f&viewport=193%2C291%2C0.08&t=BgBMzFk7AFM1WhZK-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=52%3A105&page-id=0%3A1",
            github: "#"
        },
        {
            title: "Bus Ticket Booking App",
            desc: "The Bus Ticket Booking App UI/UX is designed for quick route search and simple seat selection with a clear, user-friendly flow. It ensures smooth booking, easy payment, and minimal user effort for a hassle-free travel experience.",
            tags: ["Figma", "Prototype", "UX Research"],
            image: Project_5,
            link: "https://www.figma.com/proto/nCGTCSVrUvAia4cq9MRTCP/Ticket_Book?node-id=2-22&p=f&viewport=206%2C378%2C0.07&t=4gfvpZ0gEIuObjdn-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A3&page-id=0%3A1",
            github: "#"
        },
        {
            title: "Chill Breeze App",
            desc: "Chill Breeze App UI/UX uses a calm, modern layout with intuitive controls to make browsing and booking relaxing and effortless. The design focuses on visual comfort, simple navigation, and a smooth user journey for a pleasant experience.",
            tags: ["Figma", "Prototype", "UX Research"],
            image: Project_6,
            link: "https://www.figma.com/proto/yhPg5zfVDGtNuV3iUdZpwo/Salon_App?node-id=9-42&p=f&viewport=62%2C339%2C0.05&t=mFXdmtIhfVHQrkSt-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A4&page-id=0%3A1",
            github: "#"
        },
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
