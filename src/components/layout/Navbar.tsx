import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, User as UserIcon, LogOut, ArrowRight, ShieldCheck } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import Button from '../ui/Button';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, signOut } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Courses', path: '/courses' },
    { name: 'Find Tutor', path: '/find-tutors' },
    { name: 'Become a Tutor', path: '/become-tutor' },
    { name: 'Request Tutor', path: '/find-tutor' },
    { name: 'Subjects', path: '/find-tutors?subject=All' },
    { name: 'How It Works', path: '/#how-it-works' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-xl shadow-soft py-2.5 sm:py-3 border-b border-slate-200/80'
          : 'bg-white/70 backdrop-blur-md py-4 sm:py-5 border-b border-slate-200/40'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Brand Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 transition-transform hover:scale-[1.02] focus:outline-none"
          >
            <div className="h-10 sm:h-12 w-auto overflow-hidden flex items-center">
              <img
                src="/logo.png"
                alt="Paradox Tuition Logo"
                className="h-full w-auto object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav aria-label="Main Navigation" className="hidden lg:flex items-center space-x-1 xl:space-x-2 bg-slate-100/70 p-1.5 rounded-full border border-slate-200/60 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-xs xl:text-sm font-semibold px-3.5 py-1.5 rounded-full transition-all duration-200 ${
                    isActive
                      ? 'bg-white text-brand-lightBlue shadow-sm'
                      : 'text-slate-600 hover:text-brand-dark hover:bg-white/50'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right Action Area */}
          <div className="hidden lg:flex items-center space-x-3">
            {user ? (
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-slate-700 flex items-center gap-1.5 bg-slate-100 px-3 py-1.5 rounded-full">
                  <UserIcon className="w-3.5 h-3.5 text-brand-lightBlue" />
                  {user.email?.split('@')[0]}
                </span>
                <Button variant="ghost" size="sm" onClick={signOut} leftIcon={<LogOut className="w-3.5 h-3.5" />}>
                  Logout
                </Button>
              </div>
            ) : null}

            <Button
              variant="primary"
              size="sm"
              onClick={() => navigate('/find-tutor')}
              className="py-2 px-4 text-xs xl:text-sm font-bold shadow-soft hover:shadow-glow-blue rounded-full"
              rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
            >
              Find a Tutor
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <Button
              variant="primary"
              size="sm"
              onClick={() => navigate('/find-tutor')}
              className="py-1.5 px-3 text-xs font-bold shadow-sm rounded-xl"
            >
              Find Tutor
            </Button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors focus:outline-none"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`lg:hidden fixed inset-x-0 top-full bg-white/95 backdrop-blur-2xl border-b border-slate-200 shadow-2xl transition-all duration-300 origin-top overflow-hidden ${
          isOpen ? 'max-h-[85vh] py-6 opacity-100 visible' : 'max-h-0 py-0 opacity-0 invisible'
        }`}
      >
        <div className="max-w-md mx-auto px-6 space-y-3">
          <div className="flex items-center gap-2 pb-3 mb-2 border-b border-slate-100 text-xs font-semibold text-slate-400 uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>Paradox Intelligent EdTech</span>
          </div>

          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 rounded-2xl text-base font-semibold transition-all ${
                location.pathname === link.path
                  ? 'bg-brand-lightBlue text-white shadow-soft'
                  : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              {link.name}
            </Link>
          ))}

          <div className="pt-4 mt-2 border-t border-slate-100 flex flex-col gap-2.5">
            <Button
              variant="primary"
              className="w-full justify-center py-3 text-sm font-bold shadow-soft"
              onClick={() => {
                setIsOpen(false);
                navigate('/find-tutor');
              }}
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              Request Free Demo Class
            </Button>
            <Button
              variant="secondary"
              className="w-full justify-center py-3 text-sm font-semibold"
              onClick={() => {
                setIsOpen(false);
                navigate('/become-tutor');
              }}
            >
              Teach With Paradox
            </Button>

            {user && (
              <button
                onClick={() => {
                  signOut();
                  setIsOpen(false);
                }}
                className="mt-2 text-xs text-rose-600 font-semibold text-center py-2 hover:underline flex items-center justify-center gap-1.5"
              >
                <LogOut className="w-3.5 h-3.5" /> Logout ({user.email})
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
