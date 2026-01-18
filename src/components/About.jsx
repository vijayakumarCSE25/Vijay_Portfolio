import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Code2, Globe2 } from 'lucide-react';

const About = () => {
    const highlights = [
        {
            icon: <Lightbulb className="text-amber-400" />,
            title: "Visionary Problem Solver",
            desc: "Transforming complex challenges into elegant, user-centric solutions."
        },
        {
            icon: <Code2 className="text-blue-400" />,
            title: "UI/UX & Networking",
            desc: "Combining aesthetic design with robust network infrastructure."
        },
        {
            icon: <Globe2 className="text-emerald-400" />,
            title: "Perundurai Based",
            desc: "Bringing local talent to the global tech ecosystem."
        }
    ];

    return (
        <section id="about" className="py-24 relative overflow-hidden">
            <div className="px-5">
                <div className="text-center mb-12">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-blue-500 font-bold uppercase tracking-widest text-sm mb-4 block"
                    >
                        About Me
                    </motion.span>
                </div>

                <div className="grid md:grid-cols-2 gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="order-2 md:order-1"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                            From <span className="text-blue-500">Perundurai</span> to the <br />
                            Corporate World
                        </h2>
                        <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
                            <p>
                                As a student at <span className="text-white font-medium">KSR College of Engineering</span>, I've dedicated myself to master both the digital and physical layers of technology. My journey is driven by a curiosity to understand how things work and a passion for making them work better for users.
                            </p>
                            <p>
                                Specializing in <span className="text-white font-medium">UI/UX Design</span> and <span className="text-white font-medium">Networking</span>, I bridge the gap between human interaction and technical stability. Whether it's crafting a pixel-perfect interface in Figma or configuring a complex network, I strive for excellence in every layer of the stack.
                            </p>
                        </div>

                        <div className="mt-10 grid gap-6">
                            {highlights.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.2 }}
                                    className="flex gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all group"
                                >
                                    <div className="p-3 rounded-xl bg-white/5 group-hover:bg-blue-500/10 transition-colors">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-white mb-1">{item.title}</h3>
                                        <p className="text-sm text-slate-400">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="order-1 md:order-2 relative"
                    >
                        <div className="glow-card p-1 rounded-3xl">
                            <div className="bg-[#0b0f19] rounded-[calc(1.5rem-1px)] p-8 h-full">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-4">
                                        <div className="h-48 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 p-6 flex flex-col justify-end">
                                            <div className="text-3xl font-bold">2025</div>
                                            <div className="text-xs uppercase font-bold text-blue-100">Graduating Year</div>
                                        </div>
                                        <div className="h-32 rounded-2xl bg-white/5 border border-white/10 p-6 flex flex-col justify-center">
                                            <div className="text-2xl font-bold">3+</div>
                                            <div className="text-xs uppercase font-bold text-slate-500">Global Projects</div>
                                        </div>
                                    </div>
                                    <div className="space-y-4 pt-8">
                                        <div className="h-32 rounded-2xl bg-white/5 border border-white/10 p-6 flex flex-col justify-center">
                                            <div className="text-2xl font-bold">70%</div>
                                            <div className="text-xs uppercase font-bold text-slate-500">Academic Score</div>
                                        </div>
                                        <div className="h-48 rounded-2xl bg-gradient-to-tr from-indigo-600 to-purple-700 p-6 flex flex-col justify-end">
                                            <div className="text-3xl font-bold">UI/UX</div>
                                            <div className="text-xs uppercase font-bold text-indigo-100">Primary Focus</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            <style jsx>{`
        section {
          padding-top: 6rem;
          padding-bottom: 6rem;
        }
        .text-center { text-align: center; }
        .mb-12 { margin-bottom: 3rem; }
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }
        .grid { display: grid; }
        .gap-16 { gap: 4rem; }
        .items-center { align-items: center; }
        @media (min-width: 768px) {
          .md\\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .md\\:order-1 { order: 1; }
          .md\\:order-2 { order: 2; }
        }
        .order-1 { order: 1; }
        .order-2 { order: 2; }
        .text-4xl { font-size: 2.25rem; }
        .md\\:text-5xl { font-size: 3rem; }
        .font-bold { font-weight: 700; }
        .mb-4 { margin-bottom: 1rem; }
        .mb-8 { margin-bottom: 2rem; }
        .leading-tight { line-height: 1.25; }
        .space-y-6 > * + * { margin-top: 1.5rem; }
        .text-slate-400 { color: #94a3b8; }
        .text-lg { font-size: 1.125rem; }
        .leading-relaxed { line-height: 1.625; }
        .mt-10 { margin-top: 2.5rem; }
        .gap-6 { gap: 1.5rem; }
        .p-4 { padding: 1rem; }
        .rounded-2xl { border-radius: 1rem; }
        .bg-white\\/5 { background-color: rgba(255, 255, 255, 0.05); }
        .border-white\\/10 { border-color: rgba(255, 255, 255, 0.1); }
        .p-3 { padding: 0.75rem; }
        .rounded-xl { border-radius: 0.75rem; }
        .text-white { color: #ffffff; }
        .mb-1 { margin-bottom: 0.25rem; }
        .text-sm { font-size: 0.875rem; }
        .rounded-3xl { border-radius: 1.5rem; }
        .bg-\\[\\#0b0f19\\] { background-color: #0b0f19; }
        .p-8 { padding: 2rem; }
        .h-full { height: 100%; }
        .grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        .gap-4 { gap: 1rem; }
        .space-y-4 > * + * { margin-top: 1rem; }
        .h-48 { height: 12rem; }
        .bg-gradient-to-br { background-image: linear-gradient(to bottom right, var(--tw-gradient-stops)); }
        .from-blue-600 { --tw-gradient-from: #2563eb; --tw-gradient-to: rgb(37 99 235 / 0); --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to); }
        .to-indigo-700 { --tw-gradient-to: #4338ca; }
        .p-6 { padding: 1.5rem; }
        .flex-col { flex-direction: column; }
        .justify-end { justify-content: flex-end; }
        .text-3xl { font-size: 1.875rem; }
        .text-xs { font-size: 0.75rem; }
        .uppercase { text-transform: uppercase; }
        .text-blue-100 { color: #dbeafe; }
        .h-32 { height: 8rem; }
        .text-slate-500 { color: #64748b; }
        .pt-8 { padding-top: 2rem; }
        .bg-gradient-to-tr { background-image: linear-gradient(to top right, var(--tw-gradient-stops)); }
        .from-indigo-600 { --tw-gradient-from: #4f46e5; --tw-gradient-to: rgb(79 70 229 / 0); --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to); }
        .to-purple-700 { --tw-gradient-to: #7e22ce; }
        .text-indigo-100 { color: #e0e7ff; }
      `}</style>
        </section>
    );
};

export default About;
