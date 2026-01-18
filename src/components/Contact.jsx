import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        alert("Message sent successfully!");
        setFormData({ name: '', email: '', message: '' });
    };

    const contactInfo = [
        {
            icon: <Mail className="text-blue-500" />,
            label: "Email",
            value: "cecsvijayakumar25@gmail.com",
            href: "mailto:cecsvijayakumar25@gmail.com"
        },
        {
            icon: <Phone className="text-blue-500" />,
            label: "Phone",
            value: "+91 90036 94806",
            href: "tel:+919003694806"
        },
        {
            icon: <MapPin className="text-blue-500" />,
            label: "Location",
            value: "Perundurai, Erode, India",
            href: "#"
        }
    ];
    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Blog', href: '#blog' },
        { name: 'Contact', href: '#contact' },
    ];
    const [activeLink, setActiveLink] = useState("#contact");

    return (
        <section id="contact" className="py-24">
            <div className="px-5 container">
                <div className="grid lg:grid-cols-2 gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-blue-500 font-bold uppercase tracking-widest text-sm mb-4 block">Get In Touch</span>
                        <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                            Let's Build Something <br />
                            <span className="text-blue-500">Amazing Together</span>
                        </h2>
                        <p className="text-slate-400 text-lg mb-12">
                            Have a project in mind or just want to say hi? Feel free to reach out. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                        </p>

                        <div className="space-y-6">
                            {contactInfo.map((info, idx) => (
                                <a
                                    key={idx}
                                    href={info.href}
                                    className="flex items-center gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all group"
                                >
                                    <div className="p-4 rounded-xl bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors">
                                        {info.icon}
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">{info.label}</p>
                                        <p className="font-bold text-white group-hover:text-blue-500 transition-colors">{info.value}</p>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glow-card p-8 md:p-12"
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <div className="p-3 bg-blue-500/10 rounded-xl">
                                <MessageSquare className="text-blue-500" />
                            </div>
                            <h3 className="text-2xl font-bold">Send me a message</h3>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Name</label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        placeholder="John Doe"
                                        className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:border-blue-500 focus:outline-none transition-colors"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Email</label>
                                    <input
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        placeholder="john@example.com"
                                        className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:border-blue-500 focus:outline-none transition-colors"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Message</label>
                                <textarea
                                    rows="5"
                                    required
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    placeholder="Share your thoughts..."
                                    className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:border-blue-500 focus:outline-none transition-colors resize-none"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold flex items-center justify-center gap-3 transition-all transform hover:scale-[1.02] active:scale-[0.98]"
                            >
                                Send Message <Send size={20} />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>

            <footer className="mt-24 pt-12 border-t border-white/5 text-center">
                <div className="container flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="text-xl font-bold tracking-tight">
                        &lt; <span className="text-blue-500">Vijay</span> /&gt;
                    </div>

                    <div className="flex gap-8 text-sm font-medium text-slate-400">
                        {navLinks.map((link, index) => (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                onClick={() => setActiveLink(link.href)}
                                className={`text-sm font-medium transition-colors
                                ${activeLink === link.href
                                        ? 'text-blue-500'
                                        : 'text-slate-300 hover:text-blue-400'
                                    }
                                hover:underline
                              `}

                            >
                                {link.name}
                            </motion.a>
                        ))}
                    </div>

                    <p className="text-sm text-slate-500">
                        © {new Date().getFullYear()} Vijayakumar R. Built with React.
                    </p>
                </div>
            </footer>

            <style jsx>{`
        section {
            padding-top: 6rem;
            padding-bottom: 3rem;
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }
        .grid { display: grid; }
        .gap-16 { gap: 4rem; }
        @media (min-width: 1024px) {
          .lg\\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }
        .text-blue-500 { color: #3b82f6; }
        .font-bold { font-weight: 700; }
        .uppercase { text-transform: uppercase; }
        .tracking-widest { letter-spacing: 0.1em; }
        .text-sm { font-size: 0.875rem; }
        .text-4xl { font-size: 2.25rem; }
        .md\\:text-5xl { font-size: 3rem; }
        .leading-tight { line-height: 1.25; }
        .text-slate-400 { color: #94a3b8; }
        .text-lg { font-size: 1.125rem; }
        .mb-4 { margin-bottom: 1rem; }
        .mb-8 { margin-bottom: 2rem; }
        .mb-12 { margin-bottom: 3rem; }
        .space-y-6 > * + * { margin-top: 1.5rem; }
        .flex { display: flex; }
        .items-center { align-items: center; }
        .gap-6 { gap: 1.5rem; }
        .p-6 { padding: 1.5rem; }
        .rounded-2xl { border-radius: 1rem; }
        .bg-white\\/5 { background-color: rgba(255, 255, 255, 0.05); }
        .border-white\\/10 { border-color: rgba(255, 255, 255, 0.1); }
        .p-4 { padding: 1rem; }
        .rounded-xl { border-radius: 0.75rem; }
        .bg-blue-500\\/10 { background-color: rgba(59, 130, 246, 0.1); }
        .text-xs { font-size: 0.75rem; }
        .text-slate-500 { color: #64748b; }
        .mb-1 { margin-bottom: 0.25rem; }
        .text-white { color: #ffffff; }
        .p-8 { padding: 2rem; }
        .md\\:p-12 { padding: 3rem; }
        .gap-4 { gap: 1rem; }
        .text-2xl { font-size: 1.5rem; }
        .grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        @media (min-width: 768px) {
          .md\\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .md\\:flex-row { flex-direction: row; }
        }
        .gap-6 { gap: 1.5rem; }
        .w-full { width: 100%; }
        .px-6 { padding-left: 1.5rem; padding-right: 1.5rem; }
        .py-4 { padding-top: 1rem; padding-bottom: 1rem; }
        .resize-none { resize: none; }
        .py-5 { padding-top: 1.25rem; padding-bottom: 1.25rem; }
        .bg-blue-600 { background-color: #2563eb; }
        .hover\\:bg-blue-700:hover { background-color: #1d4ed8; }
        .justify-center { justify-content: center; }
        .gap-3 { gap: 0.75rem; }
        .mt-24 { margin-top: 6rem; }
        .pt-12 { padding-top: 3rem; }
        .border-t { border-top-width: 1px; }
        .flex-col { flex-direction: column; }
        .justify-between { justify-content: space-between; }
        .gap-8 { gap: 2rem; }
        .font-medium { font-weight: 500; }
        .tracking-tight { letter-spacing: -0.025em; }
      `}</style>
        </section>
    );
};

export default Contact;