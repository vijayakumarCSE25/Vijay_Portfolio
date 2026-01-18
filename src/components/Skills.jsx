import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
    const categories = [
        {
            title: "UI/UX Designing",
            skills: [
                { name: "Figma", level: 92 },
                { name: "Adobe XD", level: 80 },
                { name: "Wireframing", level: 88 },
                { name: "Prototyping", level: 85 }
            ]
        },
        {
            title: "Hardware & Maintenance",
            skills: [
                { name: "PC Build", level: 95 },
                { name: "OS Installation", level: 92 },
                { name: "Troubleshooting", level: 88 },
                { name: "System Maintenance", level: 85 }
            ]
        },
        {
            title: "Networking",
            skills: [
                { name: "Network Configuration", level: 85 },
                { name: "Network Communication", level: 80 },
                { name: "IP Addressing", level: 90 },
                { name: "Routing & Switching", level: 75 }
            ]   
        }
    ];

    return (
        <section id="skills" className="py-24 bg-slate-900/30">
            <div className="px-5">
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-blue-500 font-bold uppercase tracking-widest text-sm"
                    >
                        My Expertise
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl font-bold mt-4"
                    >
                        Technical Proficiency
                    </motion.h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {categories.map((cat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2 }}
                            className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all hover:bg-white/[0.07]"
                        >
                            <h3 className="text-xl font-bold mb-8 text-white">{cat.title}</h3>
                            <div className="space-y-6">
                                {cat.skills.map((skill, sIdx) => (
                                    <div key={sIdx}>
                                        <div className="flex justify-between mb-2">
                                            <span className="text-sm font-medium text-slate-300">{skill.name}</span>
                                            <span className="text-sm font-bold text-blue-500">{skill.level}%</span>
                                        </div>
                                        <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1, delay: 0.5 + (sIdx * 0.1) }}
                                                className="h-full bg-gradient-to-r from-blue-600 to-indigo-500 rounded-full"
                                            ></motion.div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <style jsx>{`
        section {
            padding-top: 6rem;
            padding-bottom: 6rem;
            background-color: rgba(15, 23, 42, 0.3);
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }
        .text-center { text-align: center; }
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
          .md\\:grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
        }
        .gap-8 { gap: 2rem; }
        .p-8 { padding: 2rem; }
        .rounded-3xl { border-radius: 1.5rem; }
        .bg-white\\/5 { background-color: rgba(255, 255, 255, 0.05); }
        .border-white\\/10 { border-color: rgba(255, 255, 255, 0.1); }
        .text-xl { font-size: 1.25rem; }
        .mb-8 { margin-bottom: 2rem; }
        .text-white { color: #ffffff; }
        .space-y-6 > * + * { margin-top: 1.5rem; }
        .flex { display: flex; }
        .justify-between { justify-content: space-between; }
        .mb-2 { margin-bottom: 0.5rem; }
        .font-medium { font-weight: 500; }
        .text-slate-300 { color: #cbd5e1; }
        .h-2 { height: 0.5rem; }
        .w-full { width: 100%; }
        .rounded-full { border-radius: 9999px; }
        .overflow-hidden { overflow: hidden; }
        .h-full { height: 100%; }
        .bg-gradient-to-r { background-image: linear-gradient(to right, var(--tw-gradient-stops)); }
        .from-blue-600 { --tw-gradient-from: #2563eb; --tw-gradient-to: rgb(37 99 235 / 0); --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to); }
        .to-indigo-500 { --tw-gradient-to: #6366f1; }
      `}</style>
        </section>
    );
};

export default Skills;
