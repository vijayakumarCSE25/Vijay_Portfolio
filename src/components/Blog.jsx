import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';

const Blog = () => {
    const posts = [
        {
            title: "Integrating OpenAI in Web Applications",
            excerpt: "Discover how to leverage LLMs to build intelligent features like summarization, chat, and more.",
            date: "Jan 10, 2026",
            author: "Vijayakumar",
            category: "AI",
            color: "bg-blue-500/10 text-blue-500"
        },
        {
            title: "User Research is the foundation of UX design",
            excerpt: "Because it helps designers understand real user needs and problems. It ensures that design decisions are based on user data.",
            date: "Jan 05, 2026",
            author: "Vijayakumar",
            category: "UI/UX",
            color: "bg-purple-500/10 text-purple-500"
        },
        {
            title: "Information Architecture in 2026",
            excerpt: "It uses colors, typography, spacing, and layout to create a clean, attractive, and easy-to-use interface for users.",
            date: "Dec 28, 2025",
            author: "Vijayakumar",
            category: "Visual / UI Design",
            color: "bg-emerald-500/10 text-emerald-500"
        }
    ];

    return (
        <section id="blog" className="py-24 bg-slate-900/30">
            <div className="px-5">
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-blue-500 font-bold uppercase tracking-widest text-sm"
                    >
                        Insights
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl font-bold mt-4"
                    >
                        Recent Blog Posts
                    </motion.h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post, idx) => (
                        <motion.article
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all group flex flex-col"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <span className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${post.color}`}>
                                    {post.category}
                                </span>
                                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1">
                                    <Calendar size={12} /> {post.date}
                                </span>
                            </div>

                            <h3 className="text-xl font-bold mb-4 text-white group-hover:text-blue-500 transition-colors leading-tight">
                                {post.title}
                            </h3>

                            <p className="text-sm text-slate-400 leading-relaxed mb-8 flex-grow">
                                {post.excerpt}
                            </p>

                            <div className="flex items-center justify-between pt-6 border-t border-white/5">
                                <div className="flex items-center gap-2">
                                    <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-[10px] font-bold text-blue-500">
                                        V
                                    </div>
                                    <span className="text-xs font-medium text-slate-300">{post.author}</span>
                                </div>
                                <button className="text-blue-500 group-hover:translate-x-1 transition-transform">
                                    <ArrowRight size={18} />
                                </button>
                            </div>
                        </motion.article>
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
          .md\\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }
        @media (min-width: 1024px) {
          .lg\\:grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
        }
        .gap-8 { gap: 2rem; }
        .p-8 { padding: 2rem; }
        .rounded-3xl { border-radius: 1.5rem; }
        .bg-white\\/5 { background-color: rgba(255, 255, 255, 0.05); }
        .border-white\\/10 { border-color: rgba(255, 255, 255, 0.1); }
        .flex { display: flex; }
        .flex-col { flex-direction: column; }
        .items-center { align-items: center; }
        .gap-3 { gap: 0.75rem; }
        .mb-6 { margin-bottom: 1.5rem; }
        .px-4 { padding-left: 1rem; padding-right: 1rem; }
        .py-1\\.5 { padding-top: 0.375rem; padding-bottom: 0.375rem; }
        .rounded-full { border-radius: 9999px; }
        .text-\\[10px\\] { font-size: 10px; }
        .text-slate-500 { color: #64748b; }
        .gap-1 { gap: 0.25rem; }
        .text-xl { font-size: 1.25rem; }
        .mb-4 { margin-bottom: 1rem; }
        .text-white { color: #ffffff; }
        .leading-tight { line-height: 1.25; }
        .text-slate-400 { color: #94a3b8; }
        .leading-relaxed { line-height: 1.625; }
        .mb-8 { margin-bottom: 2rem; }
        .flex-grow { flex-grow: 1; }
        .justify-between { justify-content: space-between; }
        .pt-6 { padding-top: 1.5rem; }
        .border-t { border-top-width: 1px; }
        .w-6 { width: 1.5rem; }
        .h-6 { height: 1.5rem; }
        .text-blue-500 { color: #3b82f6; }
        .bg-blue-500\\/20 { background-color: rgba(59, 130, 246, 0.2); }
        .text-xs { font-size: 0.75rem; }
        .font-medium { font-weight: 500; }
        .text-slate-300 { color: #cbd5e1; }
        .bg-purple-500\\/10 { background-color: rgba(168, 85, 247, 0.1); }
        .text-purple-500 { color: #a855f7; }
        .bg-emerald-500\\/10 { background-color: rgba(16, 185, 129, 0.1); }
        .text-emerald-500 { color: #10b981; }
      `}</style>
        </section>
    );
};

export default Blog;
