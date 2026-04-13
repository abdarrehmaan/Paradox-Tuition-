import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User as UserIcon, LogOut } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import Button from '../ui/Button';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { user, signOut } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Teachers', path: '/find-tutors' },
    { name: 'Request a Tutor', path: '/find-tutor' },
    { name: 'Become a Tutor', path: '/become-tutor' },
    { name: 'Donate Books', path: '/donate-book' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled
        ? 'bg-blue-50/95 backdrop-blur-md shadow-soft py-3 border-b border-brand-lightBlue/20'
        : 'bg-blue-50/80 backdrop-blur-sm py-5 shadow-sm border-b border-blue-100'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center rounded-2xl">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center w-[268px] h-[82px]">
            <Link to="/" className="flex items-center justify-center w-full h-full p-0 m-0">
              <img src="/logo.png" alt="Paradox Tuition Services Logo" className="w-full h-full object-cover" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6 bg-white/50 backdrop-blur-md px-6 py-2.5 rounded-full border border-white/60 shadow-sm">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-medium transition-colors duration-200 hover:text-brand-lightBlue ${location.pathname === link.path ? 'text-brand-lightBlue font-semibold' : 'text-slate-600'
                    }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="flex space-x-3 items-center">
              {user ? (
                <>
                  <span className="text-sm font-medium text-slate-700 flex items-center gap-1.5 bg-white shadow-sm border border-gray-100 rounded-full px-3 py-1.5">
                    <UserIcon className="w-4 h-4 text-brand-lightBlue" />
                    {user.email?.split('@')[0]}
                  </span>
                  <Button variant="ghost" size="sm" onClick={signOut} leftIcon={<LogOut className="w-4 h-4" />}>
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <Link to="/login">
                    <Button variant="ghost" size="sm">Login</Button>
                  </Link>
                  <Link to="/signup">
                    <Button variant="primary" size="sm">Sign Up</Button>
                  </Link>
                </>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-brand-lightBlue p-2 rounded-lg bg-white/50 backdrop-blur-md border border-white/60 shadow-sm focus:outline-none transition-colors"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full transition-all duration-300 origin-top ${isOpen ? 'opacity-100 scale-y-100 visible' : 'opacity-0 scale-y-95 invisible'
          }`}
      >
        <div className="m-4 bg-white/95 backdrop-blur-xl shadow-glass border border-white/20 rounded-2xl overflow-hidden">
          <div className="px-4 py-4 space-y-1.5">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2.5 rounded-xl text-base font-medium transition-colors ${location.pathname === link.path
                  ? 'text-brand-lightBlue bg-brand-lightBlue/10'
                  : 'text-slate-600 hover:text-brand-lightBlue hover:bg-slate-50'
                  }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 pb-2 flex flex-col gap-3 border-t border-gray-100 mt-2">
              {user ? (
                <>
                  <div className="px-4 text-sm font-medium text-slate-600 flex items-center gap-2">
                    <UserIcon className="w-4 h-4 text-brand-lightBlue" />
                    {user.email}
                  </div>
                  <Button variant="secondary" className="w-full justify-center" onClick={() => { signOut(); setIsOpen(false); }} leftIcon={<LogOut className="w-4 h-4" />}>
                    Logout
                  </Button>
                </>
              ) : (
                <div className="flex gap-3 px-2">
                  <Link to="/login" onClick={() => setIsOpen(false)} className="flex-1">
                    <Button variant="secondary" className="w-full justify-center">Login</Button>
                  </Link>
                  <Link to="/signup" onClick={() => setIsOpen(false)} className="flex-1">
                    <Button variant="primary" className="w-full justify-center">Sign Up</Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
