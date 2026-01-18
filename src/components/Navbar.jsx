import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Leaf, ArrowRight, Sparkles, Globe, ChevronDown, Check } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState({ code: 'en', name: 'English', native: 'English' });
  const langRef = useRef(null);

  const languages = [
    { code: 'en', name: 'English', native: 'English' },
    { code: 'hi', name: 'Hindi', native: 'हिन्दी' },
    { code: 'mr', name: 'Marathi', native: 'मराठी' },
    { code: 'gu', name: 'Gujarati', native: 'ગુજરાતી' },
    { code: 'ta', name: 'Tamil', native: 'தமிழ்' },
    { code: 'ml', name: 'Malayalam', native: 'മലയാളം' },
  ];

  // Close language dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (langRef.current && !langRef.current.contains(event.target)) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Track active section
      const sections = ['solutions', 'portfolio', 'testimonials', 'faq'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
      if (window.scrollY < 200) setActiveSection('');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Solutions', href: '/#solutions', id: 'solutions' },
    { name: 'Portfolio', href: '/#portfolio', id: 'portfolio' },
    { name: 'Testimonials', href: '/#testimonials', id: 'testimonials' },
    { name: 'FAQ', href: '/#faq', id: 'faq' },
  ];

  // Handle smooth scroll for anchor links
  const handleNavClick = (e, href) => {
    if (href.startsWith('/#')) {
      e.preventDefault();
      const targetId = href.substring(2);
      const element = document.getElementById(targetId);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: elementPosition - offset,
          behavior: 'smooth'
        });
      }
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/90 backdrop-blur-2xl shadow-lg shadow-gray-900/5 border-b border-gray-100' 
            : 'bg-gradient-to-b from-white/80 to-transparent backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#2D5A3D] to-[#E07B00] rounded-xl blur-lg opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
                <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-[#2D5A3D] via-[#3d7a52] to-[#2D5A3D] flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <Leaf className="w-5 h-5 text-white drop-shadow-sm" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-gray-900 tracking-tight leading-none">
                  Byte<span className="bg-gradient-to-r from-[#2D5A3D] to-[#3d7a52] bg-clip-text text-transparent">Citadel</span>
                </span>
                <span className="text-[10px] font-medium text-gray-400 tracking-wider uppercase">AgriTech IoT</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center">
              <div className="flex items-center gap-1 px-2 py-1.5 bg-gray-50/80 rounded-full border border-gray-100">
                {navLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`relative px-5 py-2 text-sm font-medium transition-all duration-300 rounded-full cursor-pointer ${
                      activeSection === link.id
                        ? 'text-white'
                        : 'text-gray-600 hover:text-[#2D5A3D]'
                    }`}
                  >
                    {/* Active background pill */}
                    {activeSection === link.id && (
                      <span className="absolute inset-0 bg-gradient-to-r from-[#2D5A3D] to-[#3d7a52] rounded-full shadow-lg shadow-[#2D5A3D]/25 -z-10" />
                    )}
                    {/* Hover effect */}
                    <span className={`absolute inset-0 bg-white rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300 -z-10 ${activeSection === link.id ? 'hidden' : ''}`} />
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Language Dropdown */}
              <div className="relative" ref={langRef}>
                <button
                  onClick={() => setIsLangOpen(!isLangOpen)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    isLangOpen 
                      ? 'bg-[#E8F0EA] text-[#2D5A3D]' 
                      : 'text-gray-600 hover:bg-gray-50 hover:text-[#2D5A3D]'
                  }`}
                >
                  <Globe className="w-4 h-4" />
                  <span className="hidden xl:inline">{selectedLang.code.toUpperCase()}</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${isLangOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {/* Dropdown Menu */}
                <div className={`absolute right-0 top-full mt-2 w-48 bg-white rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 overflow-hidden transition-all duration-300 origin-top-right ${
                  isLangOpen 
                    ? 'opacity-100 scale-100 translate-y-0' 
                    : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
                }`}>
                  <div className="p-2">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setSelectedLang(lang);
                          setIsLangOpen(false);
                        }}
                        className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm transition-all duration-200 ${
                          selectedLang.code === lang.code
                            ? 'bg-gradient-to-r from-[#2D5A3D] to-[#3d7a52] text-white'
                            : 'text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className="font-medium">{lang.native}</span>
                          <span className={`text-xs ${selectedLang.code === lang.code ? 'text-white/70' : 'text-gray-400'}`}>{lang.name}</span>
                        </div>
                        {selectedLang.code === lang.code && (
                          <Check className="w-4 h-4" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <a
                href="/#contact"
                onClick={(e) => handleNavClick(e, '/#contact')}
                className="group relative flex items-center gap-2 px-6 py-2.5 overflow-hidden rounded-full text-sm font-semibold transition-all duration-500 cursor-pointer"
              >
                {/* Button background with gradient */}
                <span className="absolute inset-0 bg-gradient-to-r from-[#2D5A3D] via-[#3d7a52] to-[#2D5A3D] bg-[length:200%_100%] group-hover:bg-[position:100%_0] transition-all duration-500" />
                {/* Shine effect */}
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                </span>
                {/* Shadow */}
                <span className="absolute inset-0 rounded-full shadow-xl shadow-[#2D5A3D]/30 group-hover:shadow-2xl group-hover:shadow-[#2D5A3D]/40 transition-shadow duration-500" />
                {/* Content */}
                <Sparkles className="relative w-4 h-4 text-[#E07B00]" />
                <span className="relative text-white">Get Started</span>
                <ArrowRight className="relative w-4 h-4 text-white group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 ${
                isMobileMenuOpen 
                  ? 'bg-[#2D5A3D] text-white' 
                  : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
              }`}
            >
              <div className="relative w-5 h-5">
                <span className={`absolute left-0 w-5 h-0.5 bg-current rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'top-2.5 rotate-45' : 'top-1'}`} />
                <span className={`absolute left-0 top-2.5 w-5 h-0.5 bg-current rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0 scale-0' : 'opacity-100'}`} />
                <span className={`absolute left-0 w-5 h-0.5 bg-current rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'top-2.5 -rotate-45' : 'top-4'}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-2xl border-b border-gray-100 shadow-xl shadow-gray-900/10 transition-all duration-400 ease-out ${
            isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
        >
          <div className="px-5 py-6 space-y-2">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`flex items-center justify-between px-4 py-3.5 rounded-2xl text-base font-medium transition-all duration-300 cursor-pointer ${
                  activeSection === link.id
                    ? 'bg-gradient-to-r from-[#2D5A3D] to-[#3d7a52] text-white shadow-lg shadow-[#2D5A3D]/20'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <span>{link.name}</span>
                <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${activeSection === link.id ? 'translate-x-0' : '-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100'}`} />
              </a>
            ))}

            {/* Mobile Language Selector */}
            <div className="pt-2 pb-2">
              <p className="px-4 py-2 text-xs font-medium text-gray-400 uppercase tracking-wider">Language</p>
              <div className="grid grid-cols-2 gap-2 px-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setSelectedLang(lang)}
                    className={`flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                      selectedLang.code === lang.code
                        ? 'bg-[#E8F0EA] text-[#2D5A3D] border-2 border-[#2D5A3D]/20'
                        : 'bg-gray-50 text-gray-600 border-2 border-transparent hover:border-gray-200'
                    }`}
                  >
                    <span>{lang.native}</span>
                    {selectedLang.code === lang.code && (
                      <Check className="w-3.5 h-3.5" />
                    )}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Mobile CTA */}
            <div className="pt-4 space-y-3">
              <a
                href="/#contact"
                onClick={(e) => handleNavClick(e, '/#contact')}
                className="flex items-center justify-center gap-2 w-full px-4 py-4 bg-gradient-to-r from-[#2D5A3D] to-[#3d7a52] text-white rounded-2xl text-base font-semibold shadow-xl shadow-[#2D5A3D]/25 active:scale-[0.98] transition-all duration-300 cursor-pointer"
              >
                <Sparkles className="w-5 h-5 text-[#E07B00]" />
                <span>Get Started Free</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <p className="text-center text-xs text-gray-400">No credit card required</p>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer */}
      <div className="h-18 lg:h-20" />
    </>
  );
};

export default Navbar;
