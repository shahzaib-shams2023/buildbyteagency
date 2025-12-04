import React, { useState, useRef, useEffect } from 'react';
import { Menu, X, Terminal, ChevronDown, ChevronRight, ArrowRight, Github, Twitter, Linkedin } from 'lucide-react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { NAV_LINKS, CONTACT_EMAIL, CONTACT_PHONE, DETAILED_SERVICES, SERVICE_MENU_GROUPS } from '../constants';

interface LayoutProps {
  children: React.ReactNode;
}

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const timeoutRef = useRef<number | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsMegaMenuOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = window.setTimeout(() => {
      setIsMegaMenuOpen(false);
    }, 150);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || isMegaMenuOpen ? 'bg-white backdrop-blur-xl border-b border-slate-200/50 shadow-sm' : 'bg-transparent border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center relative z-50">
            <NavLink to="/" className="flex items-center gap-2 group">
              <div className="bg-gradient-to-br from-brand-600 to-accent-600 p-2 rounded-xl shadow-lg shadow-brand-500/30 group-hover:scale-105 transition-transform duration-300">
                 <Terminal className="h-5 w-5 text-white" />
              </div>
              <span className={`font-display font-bold text-xl tracking-tight transition-colors ${scrolled || isMegaMenuOpen ? 'text-slate-900' : 'text-slate-900'}`}>
                BuiltByTe
              </span>
            </NavLink>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8 h-full">
            {NAV_LINKS.map((link) => {
              if (link.label === 'Services') {
                return (
                  <div 
                    key={link.path} 
                    className="relative h-full flex items-center"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <NavLink 
                      to={link.path}
                      className={({ isActive }) => 
                        `flex items-center gap-1 text-sm font-medium transition-all px-3 py-2 rounded-full ${
                          isActive || isMegaMenuOpen 
                            ? 'text-brand-600 bg-brand-50' 
                            : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                        }`
                      }
                      onClick={() => setIsMegaMenuOpen(false)}
                    >
                      {link.label}
                      <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isMegaMenuOpen ? 'rotate-180' : ''}`} />
                    </NavLink>

                    {/* Mega Menu Dropdown */}
                    <div 
                      className={`absolute top-full left-1/2 -translate-x-1/2 w-[90vw] max-w-5xl transition-all duration-300 origin-top pt-4 ${
                        isMegaMenuOpen 
                          ? 'opacity-100 visible translate-y-0' 
                          : 'opacity-0 invisible -translate-y-2'
                      }`}
                    >
                      <div className="bg-white backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-200/60 overflow-hidden p-8 ring-1 ring-slate-900/5">
                        <div className="grid grid-cols-4 gap-8">
                          {SERVICE_MENU_GROUPS.map((group) => {
                             return (
                               <div key={group.title} className="space-y-4">
                                  <Link 
                                    to={`/services/${group.mainServiceId}`}
                                    onClick={() => setIsMegaMenuOpen(false)}
                                    className="group/title flex items-center gap-2"
                                  >
                                    <h4 className="font-display font-bold text-slate-900 group-hover/title:text-brand-600 transition-colors">
                                      {group.title}
                                    </h4>
                                    <ArrowRight className="h-3 w-3 opacity-0 -translate-x-2 group-hover/title:opacity-100 group-hover/title:translate-x-0 transition-all text-brand-600" />
                                  </Link>
                                  <ul className="space-y-1">
                                    {group.items.map(itemId => {
                                      const item = DETAILED_SERVICES.find(s => s.id === itemId);
                                      if (!item) return null;
                                      return (
                                        <li key={item.id}>
                                          <Link 
                                            to={`/services/${item.id}`}
                                            onClick={() => setIsMegaMenuOpen(false)}
                                            className="text-sm text-slate-500 hover:text-brand-600 hover:bg-slate-50 px-3 py-1.5 -mx-3 rounded-lg block transition-colors border-l-2 border-transparent hover:border-brand-300"
                                          >
                                            {item.title}
                                          </Link>
                                        </li>
                                      );
                                    })}
                                  </ul>
                               </div>
                             );
                          })}
                        </div>
                         
                         <div className="bg-slate-50/80 -m-8 mt-8 p-4 flex items-center justify-between border-t border-slate-100">
                           <div className="flex items-center gap-4 px-6">
                             <div className="bg-brand-100 p-2 rounded-full text-brand-600">
                                <Terminal className="h-4 w-4" />
                             </div>
                             <div>
                               <span className="text-sm font-semibold text-slate-900 block">Need a custom solution?</span>
                               <span className="text-xs text-slate-500 block">We build tailored software for unique business needs.</span>
                             </div>
                           </div>
                           <Link to="/contact" className="text-sm font-semibold text-brand-600 hover:text-brand-700 flex items-center px-6 py-2 bg-white border border-slate-200 rounded-lg shadow-sm hover:shadow hover:border-brand-200 transition-all">
                             Contact us <ChevronRight className="h-4 w-4 ml-1" />
                           </Link>
                         </div>
                      </div>
                    </div>
                  </div>
                );
              }
              return (
                <NavLink 
                  key={link.path} 
                  to={link.path}
                  className={({ isActive }) => 
                    `text-sm font-medium transition-all px-3 py-2 rounded-full ${
                      isActive 
                        ? 'text-brand-600 bg-brand-50' 
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              );
            })}
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium rounded-full text-white bg-slate-900 hover:bg-brand-600 transition-all shadow-lg shadow-brand-500/20 hover:shadow-brand-500/40 transform hover:-translate-y-0.5"
            >
              Get estimate
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-white/50 backdrop-blur-sm inline-flex items-center justify-center p-2 rounded-full text-slate-600 hover:text-brand-600 hover:bg-white focus:outline-none ring-1 ring-slate-200"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 h-[calc(100vh-80px)] overflow-y-auto" id="mobile-menu">
          <div className="px-4 py-4 space-y-2">
            {NAV_LINKS.map((link) => {
              if (link.label === 'Services') {
                return (
                  <div key={link.path} className="space-y-2">
                    <div 
                      className="flex items-center justify-between px-3 py-3 rounded-xl text-base font-semibold text-slate-800 bg-slate-50"
                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                    >
                      <span>{link.label}</span>
                      <ChevronDown className={`h-5 w-5 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                    </div>
                    {/* Mobile Services Accordion */}
                    {isServicesOpen && (
                      <div className="pl-2 space-y-4 ml-1 py-2">
                        <Link 
                          to="/services" 
                          onClick={() => setIsOpen(false)}
                          className="block px-4 py-2 rounded-lg text-sm font-bold text-brand-600 bg-brand-50/50"
                        >
                          All Services
                        </Link>
                        {SERVICE_MENU_GROUPS.map(group => (
                          <div key={group.title} className="space-y-1">
                             <Link
                                to={`/services/${group.mainServiceId}`}
                                onClick={() => setIsOpen(false)}
                                className="block px-4 py-1.5 rounded-lg text-sm font-bold text-slate-900"
                             >
                               {group.title}
                             </Link>
                             <div className="grid grid-cols-1 gap-1 pl-4 border-l border-slate-200 ml-4">
                               {group.items.map(itemId => {
                                 const item = DETAILED_SERVICES.find(s => s.id === itemId);
                                 return item ? (
                                    <Link
                                      key={itemId}
                                      to={`/services/${item.id}`}
                                      onClick={() => setIsOpen(false)}
                                      className="block px-3 py-1.5 rounded-md text-sm font-medium text-slate-500 hover:text-brand-600 hover:bg-slate-50"
                                    >
                                      {item.title}
                                    </Link>
                                 ) : null;
                               })}
                             </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({isActive}) => `block px-4 py-3 rounded-xl text-base font-medium transition-colors ${isActive ? 'bg-brand-50 text-brand-700 font-semibold' : 'text-slate-700 hover:bg-slate-50'}`}
                >
                  {link.label}
                </NavLink>
              );
            })}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center px-4 py-4 mt-8 rounded-xl shadow-lg shadow-brand-500/20 bg-gradient-to-r from-brand-600 to-accent-600 text-white font-bold hover:shadow-xl transition-all"
            >
              Get estimate
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 space-y-6">
            <div className="flex items-center gap-2 text-white">
               <div className="bg-brand-600 p-1.5 rounded-lg">
                  <Terminal className="h-5 w-5" />
               </div>
              <span className="font-display font-bold text-xl tracking-tight">BuiltByTe</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Custom systems engineered for scale, clarity, and performance. We build digital products that drive business growth.
            </p>
            <div className="flex gap-4">
               <a href="#" className="text-slate-400 hover:text-white transition-colors"><Twitter className="h-5 w-5" /></a>
               <a href="#" className="text-slate-400 hover:text-white transition-colors"><Github className="h-5 w-5" /></a>
               <a href="#" className="text-slate-400 hover:text-white transition-colors"><Linkedin className="h-5 w-5" /></a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-bold text-white tracking-wide uppercase mb-6">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li><NavLink to="/services" className="hover:text-brand-400 transition-colors">Services</NavLink></li>
              <li><NavLink to="/portfolio" className="hover:text-brand-400 transition-colors">Portfolio</NavLink></li>
              <li><NavLink to="/blog" className="hover:text-brand-400 transition-colors">Resources</NavLink></li>
              <li><NavLink to="/about" className="hover:text-brand-400 transition-colors">About Us</NavLink></li>
            </ul>
          </div>
          
          <div>
             <h3 className="text-sm font-bold text-white tracking-wide uppercase mb-6">Legal</h3>
             <ul className="space-y-3 text-sm">
              <li><NavLink to="/privacy-policy" className="hover:text-brand-400 transition-colors">Privacy Policy</NavLink></li>
              <li><NavLink to="/terms-and-conditions" className="hover:text-brand-400 transition-colors">Terms & Conditions</NavLink></li>
              <li><NavLink to="/refund-policy" className="hover:text-brand-400 transition-colors">Refund Policy</NavLink></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-bold text-white tracking-wide uppercase mb-6">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-green-500"></span> Available for new projects</li>
              <li className="text-slate-400 pt-2">{CONTACT_EMAIL}</li>
              <li className="text-slate-400">{CONTACT_PHONE}</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
           <p>&copy; {new Date().getFullYear()} BuiltByTe Agency. All rights reserved.</p>
           <p>Engineered with ❤️ in Silicon Valley.</p>
        </div>
      </div>
    </footer>
  );
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-900 bg-slate-50/50">
      <Header />
      <main className="flex-grow pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;