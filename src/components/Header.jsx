import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Rocket } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];
  const [activeLink, setActiveLink] = useState('#home');


  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-3' : 'bg-transparent py-6'
        }`}
    >
      <div className="px-5 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 group cursor-pointer"
        >
          <div className="p-2 bg-blue-600/20 rounded-lg group-hover:bg-blue-600/30 transition-colors">
            <Rocket className="text-blue-500 w-6 h-6" />
          </div>
          <span className="text-xl font-bold tracking-tight">
            &lt; <span className="text-blue-500">Vijayakumar</span> /&gt;
          </span>
        </motion.div>

        {/* Desktop Nav */}
        <nav className="nav-desktop">
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
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-sm font-semibold transition-all transform hover:scale-105 "
          >
            Hire Me
          </motion.button>
        </nav>

        {/* Mobile Toggle */}
        <div className="nav-mobile-toggle">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-slate-300 hover:text-white"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0b0f19] border-b border-white/10 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  // onClick={() => setIsMobileMenuOpen(false)}
                  onClick={() => setActiveLink(link.href)}
                  className="text-lg font-medium text-slate-300 hover:text-white"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.button className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold">
                Hire Me
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        header {
          position: fixed;
          width: 100%;
        }
        .container {
          max-width: 1200px;
          margin: 0 ;
          display: flex;
          justify-content: space-between;
          
        }

        .nav-desktop {
          display: none;
          align-items: center;
          gap: 2rem;
        }

        .nav-mobile-toggle {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        @media (min-width: 768px) {
          .nav-desktop { display: flex; }
          .nav-mobile-toggle { display: none; }
        }

        .flex { display: flex; }
        .flex-col { flex-direction: column; }
        .items-center { align-items: center; }
        .justify-between { justify-content: space-between; }
        .gap-2 { gap: 0.5rem; }
        .gap-4 { gap: 1rem; }
        .gap-6 { gap: 1.5rem; }
        .gap-8 { gap: 2rem; }
        .z-50 { z-index: 50; }
        .p-2 { padding: 0.5rem; }
        .px-5 { padding-left: 1.25rem; padding-right: 1.25rem; }
        .py-2.5 { padding-top: 0.625rem; padding-bottom: 0.625rem; }
        .py-3 { padding-top: 0.75rem; padding-bottom: 0.75rem; }
        .py-6 { padding-top: 1.5rem; padding-bottom: 1.5rem; }
        .px-6 { padding-left: 1.5rem; padding-right: 1.5rem; }
        .py-8 { padding-top: 2rem; padding-bottom: 2rem; }
        .text-xl { font-size: 1.25rem; }
        .text-lg { font-size: 1.125rem; }
        .font-bold { font-weight: 700; }
        .font-medium { font-weight: 500; }
        .font-semibold { font-weight: 600; }
        .text-sm { font-size: 0.875rem; }
        .text-blue-500 { color: #3b82f6; }
        .bg-blue-600 { background-color: #2563eb; }
        .text-slate-300 { color: #cbd5e1; }
        .text-white { color: #ffffff; }
        .rounded-lg { border-radius: 0.5rem; }
        .rounded-full { border-radius: 9999px; }
        .rounded-xl { border-radius: 0.75rem; }
        .cursor-pointer { cursor: pointer; }
        .w-full { width: 100%; }
        .py-4 { padding-top: 1rem; padding-bottom: 1rem; }
        .overflow-hidden { overflow: hidden; }
        .border-b { border-bottom-width: 1px; }
        .border-white\/10 { border-color: rgba(255, 255, 255, 0.1); }
        .bg-\[#0b0f19\] { background-color: #0b0f19; }
      `}</style>
    </header>
  );
};

export default Header;