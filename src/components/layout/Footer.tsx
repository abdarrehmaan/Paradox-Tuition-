import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark pt-20 pb-10 text-slate-400 relative overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-brand-lightBlue/20 to-transparent"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-lightBlue/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16 mb-16">

          {/* Brand Info */}
          <div className="col-span-1 lg:col-span-1">
            <Link to="/" className="flex items-center justify-center mb-6 bg-white border border-white/20 rounded-xl shadow-md transition-transform hover:scale-105 w-[268px] h-[82px] overflow-hidden">
              <img src="/logo.png" alt="Paradox Tuition Services Logo" className="max-h-full max-w-full object-contain scale-[2.3] origin-center translate-x-[10px]" />
            </Link>
            <p className="text-sm leading-relaxed mb-8 pr-4">
              Connecting students with verified, highly qualified home tutors across India. Excellence in education delivered at your doorstep with personalized attention.
            </p>
            <div className="flex space-x-3">
              {/* Facebook */}
              <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-lightBlue hover:text-white hover:border-brand-lightBlue transition-all duration-300 shadow-sm group">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987H7.898v-2.891h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              {/* Instagram */}
              <a href="https://instagram.com/paradox_tuitions" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-lightBlue hover:text-white hover:border-brand-lightBlue transition-all duration-300 shadow-sm group">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              {/* WhatsApp */}
              <a href="https://wa.me/916388953289" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-lightBlue hover:text-white hover:border-brand-lightBlue transition-all duration-300 shadow-sm group">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.031 0C5.385 0 0 5.385 0 12.031c0 2.12.553 4.195 1.603 6.015L.306 24l6.098-1.597A11.967 11.967 0 0012.031 24c6.645 0 12.031-5.385 12.031-12.031S18.677 0 12.031 0zm.019 21.988a9.92 9.92 0 01-5.068-1.378l-.364-.216-3.766.987.994-3.669-.236-.376A9.919 9.919 0 012.073 12.05c0-5.467 4.457-9.924 9.924-9.924 2.65 0 5.143 1.032 7.017 2.906a9.88 9.88 0 012.906 7.018c0 5.467-4.457 9.938-9.87 9.938zM17.47 16c-.297-.892-1.524-1.282-1.633-1.317-.11-.035-.236-.053-.332.096-.109.163-.42.544-.515.656-.096.11-.19.123-.353.044-.163-.079-.76-.28-1.45-.892-.536-.475-.898-1.062-1.002-1.226-.104-.163-.01-.251.071-.33.072-.07.163-.19.245-.285.08-.096.108-.163.163-.272.053-.109.027-.206-.014-.285-.04-.08-.431-1.042-.591-1.428-.156-.375-.316-.324-.431-.33-.109-.006-.236-.006-.353-.006a.678.678 0 00-.49.227c-.163.177-.626.613-.626 1.496s.642 1.737.732 1.855c.08.118 1.258 1.927 3.048 2.696.425.183.757.292 1.016.374.426.136.814.116 1.12.07.342-.051 1.052-.43 1.202-.845.151-.415.151-.77.105-.845-.045-.075-.163-.12-.326-.201z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-slate-100 font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link to="/about" className="hover:text-brand-lightBlue transition-colors flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-brand-lightBlue/50"></span>About Us</Link></li>
              <li><Link to="/find-tutors" className="hover:text-brand-lightBlue transition-colors flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-brand-lightBlue/50"></span>Find a Tutor</Link></li>
              <li><Link to="/find-tutor" className="hover:text-brand-lightBlue transition-colors flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-brand-lightBlue/50"></span>Request a Tutor</Link></li>
              <li><Link to="/become-tutor" className="hover:text-brand-lightBlue transition-colors flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-brand-lightBlue/50"></span>Become a Tutor</Link></li>
              <li><Link to="/contact" className="hover:text-brand-lightBlue transition-colors flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-brand-lightBlue/50"></span>Contact Us</Link></li>
              <li><a href="#" className="hover:text-brand-lightBlue transition-colors flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-brand-lightBlue/50"></span>Testimonials</a></li>
            </ul>
          </div>

          {/* Subjects */}
          <div>
            <h3 className="text-slate-100 font-semibold text-lg mb-6">Top Subjects</h3>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link to="/find-tutors?subject=Mathematics" className="hover:text-brand-lightBlue transition-colors flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-brand-lightBlue/50"></span>Mathematics</Link></li>
              <li><Link to="/find-tutors?subject=Science" className="hover:text-brand-lightBlue transition-colors flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-brand-lightBlue/50"></span>Science</Link></li>
              <li><Link to="/find-tutors?subject=English" className="hover:text-brand-lightBlue transition-colors flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-brand-lightBlue/50"></span>English</Link></li>
              <li><Link to="/find-tutors?subject=Physics" className="hover:text-brand-lightBlue transition-colors flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-brand-lightBlue/50"></span>Physics</Link></li>
              <li><Link to="/find-tutors?subject=Accounts" className="hover:text-brand-lightBlue transition-colors flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-brand-lightBlue/50"></span>Accounts</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-slate-100 font-semibold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-5 text-sm">
              <li className="flex items-start gap-4 p-3 rounded-xl bg-white/5 border border-white/5 hover:border-brand-lightBlue/30 transition-colors">
                <MapPin className="h-5 w-5 text-brand-lightBlue shrink-0" />
                <span className="leading-relaxed text-slate-300">Kalandipuram, Prayagraj</span>
              </li>
              <li className="flex items-center gap-4 p-3 rounded-xl bg-white/5 border border-white/5 hover:border-brand-lightBlue/30 transition-colors">
                <Phone className="h-5 w-5 text-brand-lightBlue shrink-0" />
                <span className="text-slate-300">+91 63889 53289</span>
              </li>
              <li className="flex items-center gap-4 p-3 rounded-xl bg-white/5 border border-white/5 hover:border-brand-lightBlue/30 transition-colors">
                <Mail className="h-5 w-5 text-brand-lightBlue shrink-0" />
                <span className="text-slate-300">contact@paradoxtuition.in</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
          <p className="text-slate-500">&copy; {new Date().getFullYear()} Paradox Tuition Services. All rights reserved.</p>
          <div className="flex space-x-8 font-medium">
            <a href="#" className="hover:text-slate-200 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-200 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
