import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, MessageCircle, ShieldCheck, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark pt-20 pb-12 text-slate-400 relative overflow-hidden border-t border-slate-800">
      {/* Abstract Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-brand-lightBlue/30 to-transparent" />
      <div className="absolute -top-32 right-0 w-96 h-96 bg-brand-lightBlue/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-32 left-0 w-96 h-96 bg-brand-orange/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-5">
            <Link to="/" className="inline-block">
              <div className="h-12 w-auto bg-white/95 px-3 py-1.5 rounded-xl border border-white/20 inline-flex items-center">
                <img
                  src="/logo.png"
                  alt="Paradox Tuition Logo"
                  className="h-full w-auto object-contain"
                />
              </div>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              India's intelligent tutor-matching platform. We connect ambitious students with thoroughly vetted home and online educators with personalized 1-on-1 attention.
            </p>
            <div className="flex items-center gap-3 text-xs font-semibold text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-3.5 py-1.5 rounded-xl w-fit">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>100% Background & Qualification Verified Tutors</span>
            </div>
          </div>

          {/* Column 1: Explore */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-5">
              Explore
            </h4>
            <ul className="space-y-3 text-sm font-medium">
              <li>
                <Link to="/courses" className="hover:text-white transition-colors text-brand-lightBlue font-semibold">
                  Structured Courses
                </Link>
              </li>
              <li>
                <Link to="/find-tutors" className="hover:text-white transition-colors">
                  Find Tutors
                </Link>
              </li>
              <li>
                <Link to="/become-tutor" className="hover:text-white transition-colors">
                  Become a Tutor
                </Link>
              </li>
              <li>
                <Link to="/find-tutors?subject=All" className="hover:text-white transition-colors">
                  Browse Subjects
                </Link>
              </li>
              <li>
                <Link to="/find-tutors?location=Prayagraj" className="hover:text-white transition-colors">
                  Prayagraj Tutors
                </Link>
              </li>
              <li>
                <Link to="/find-tutors?location=Varanasi" className="hover:text-white transition-colors">
                  Varanasi Tutors
                </Link>
              </li>
              <li>
                <Link to="/find-tutors?location=Lucknow" className="hover:text-white transition-colors">
                  Lucknow Tutors
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-5">
              Services
            </h4>
            <ul className="space-y-3 text-sm font-medium">
              <li>
                <Link to="/find-tutors?mode=Home+Tuition" className="hover:text-white transition-colors">
                  Home Tuition
                </Link>
              </li>
              <li>
                <Link to="/find-tutors?mode=Online" className="hover:text-white transition-colors">
                  Online Tuition
                </Link>
              </li>
              <li>
                <Link to="/find-tutors?subject=JEE" className="hover:text-white transition-colors">
                  IIT-JEE Preparation
                </Link>
              </li>
              <li>
                <Link to="/find-tutors?subject=NEET" className="hover:text-white transition-colors">
                  NEET Medical Prep
                </Link>
              </li>
              <li>
                <Link to="/find-tutors?subject=CBSE" className="hover:text-white transition-colors">
                  CBSE & ICSE Boards
                </Link>
              </li>
              <li>
                <Link to="/donate-book" className="hover:text-brand-orange transition-colors flex items-center gap-1.5 text-brand-orange">
                  <Heart className="w-3.5 h-3.5 fill-current" />
                  <span>Free Book Initiative</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Company */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-5">
              Company & Help
            </h4>
            <ul className="space-y-3 text-sm font-medium">
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact Support
                </Link>
              </li>
              <li>
                <a
                  href="https://wa.me/916388953289"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors flex items-center gap-1.5"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>WhatsApp: +91 63889 53289</span>
                </a>
              </li>
              <li className="flex items-center gap-1.5 text-slate-400">
                <Phone className="w-4 h-4 text-brand-lightBlue shrink-0" />
                <span>+91 63889 53289</span>
              </li>
              <li className="flex items-center gap-1.5 text-slate-400">
                <Mail className="w-4 h-4 text-brand-lightBlue shrink-0" />
                <span className="truncate">contact@paradoxtuition.in</span>
              </li>
              <li className="flex items-start gap-1.5 text-slate-400 text-xs pt-1">
                <MapPin className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <span>Kalindipuram, Prayagraj, UP - 211011</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Paradox Tuition & Consultancy Services. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <Link to="/privacy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-slate-300 transition-colors">
              Terms & Conditions
            </Link>
            <a
              href="https://mine-vrpo.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-lightBlue transition-colors"
            >
              Engineered with excellence by <span className="text-slate-400 font-semibold">abdarrehmaan</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
