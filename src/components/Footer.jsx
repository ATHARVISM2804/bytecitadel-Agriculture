import { Link } from 'react-router-dom';
import { Leaf, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Solutions', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const solutions = [
    { name: 'Smart Irrigation', href: '/services#irrigation' },
    { name: 'Cold Chain Monitoring', href: '/services#coldchain' },
    { name: 'Crop Health AI', href: '/services#crophealth' },
    { name: 'Retail Inventory', href: '/services#inventory' },
  ];

  return (
    <footer className="bg-[#1a3d28] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold tracking-tight">
                Byte<span className="text-[#7cb88a]">Citadel</span>
              </span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-5">
              Empowering Indian farmers with affordable IoT solutions for sustainable growth.
            </p>
            <div className="space-y-2.5">
              <a href="tel:+919876543210" className="flex items-center gap-2.5 text-sm text-white/70 hover:text-[#E07B00] transition-colors">
                <Phone className="w-4 h-4" />
                <span>+91 98765 43210</span>
              </a>
              <a href="mailto:hello@bytecitadel.com" className="flex items-center gap-2.5 text-sm text-white/70 hover:text-[#E07B00] transition-colors">
                <Mail className="w-4 h-4" />
                <span>hello@bytecitadel.com</span>
              </a>
              <div className="flex items-start gap-2.5 text-sm text-white/70">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Ahmedabad, Gujarat, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href}
                    className="text-sm text-white/60 hover:text-[#E07B00] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Solutions</h4>
            <ul className="space-y-2.5">
              {solutions.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href}
                    className="text-sm text-white/60 hover:text-[#E07B00] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Stay Updated</h4>
            <p className="text-sm text-white/60 mb-4">Get AgriTech tips & updates</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2.5 bg-white/10 border border-white/10 rounded-lg text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#E07B00] transition-colors"
              />
              <button className="px-4 py-2.5 bg-[#E07B00] rounded-lg hover:bg-[#c96b00] transition-colors">
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-white/50">
            <span>© {currentYear} ByteCitadel Agriculture. All rights reserved.</span>
            <div className="flex items-center gap-4">
              <Link to="/privacy" className="hover:text-white/70 transition-colors">Privacy</Link>
              <Link to="/terms" className="hover:text-white/70 transition-colors">Terms</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
