import React, { useState } from 'react';
import { MessageCircle, PhoneCall, HelpCircle, X } from 'lucide-react';
import CallbackModal from './CallbackModal';

export const FloatingActionWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCallbackOpen, setIsCallbackOpen] = useState(false);

  return (
    <>
      <aside aria-label="Support & Quick Actions" className="fixed bottom-6 right-6 z-40 flex flex-col items-end pointer-events-none select-none">
        {/* Expanded Quick Action Pills */}
        <div
          className={`flex flex-col items-end space-y-2.5 mb-3 transition-all duration-300 ease-out origin-bottom ${
            isOpen
              ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto'
              : 'opacity-0 scale-95 translate-y-4 pointer-events-none'
          }`}
        >
          {/* WhatsApp Direct Chat */}
          <a
            href="https://wa.me/916388953289?text=Hi%20Paradox%20Tuition,%20I%20would%20like%20to%20find%20a%20verified%20tutor."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-[#25D366] text-white shadow-soft-lg hover:shadow-xl hover:scale-105 transition-all text-xs sm:text-sm font-semibold group"
          >
            <span>Chat on WhatsApp</span>
            <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
              <MessageCircle className="w-4 h-4 text-white fill-current" />
            </span>
          </a>

          {/* Request Callback */}
          <button
            onClick={() => {
              setIsOpen(false);
              setIsCallbackOpen(true);
            }}
            className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white text-brand-dark border border-slate-200/90 shadow-soft-lg hover:shadow-xl hover:scale-105 transition-all text-xs sm:text-sm font-semibold group"
          >
            <span>Request Callback</span>
            <span className="w-8 h-8 rounded-full bg-brand-lightBlue/10 flex items-center justify-center text-brand-lightBlue group-hover:bg-brand-lightBlue group-hover:text-white transition-colors">
              <PhoneCall className="w-4 h-4" />
            </span>
          </button>

          {/* Quick Help / FAQ */}
          <a
            href="/contact"
            className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white text-slate-700 border border-slate-200/90 shadow-soft-lg hover:shadow-xl hover:scale-105 transition-all text-xs sm:text-sm font-semibold group"
          >
            <span>Need Help?</span>
            <span className="w-8 h-8 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-white transition-colors">
              <HelpCircle className="w-4 h-4" />
            </span>
          </a>
        </div>

        {/* Master Floating Trigger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close quick support menu" : "Open quick support menu"}
          className={`pointer-events-auto relative flex items-center justify-center w-14 h-14 rounded-full shadow-soft-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-brand-lightBlue/30 ${
            isOpen
              ? 'bg-slate-900 text-white rotate-90 scale-100'
              : 'bg-gradient-to-r from-brand-lightBlue to-blue-600 text-white hover:scale-110 hover:shadow-glow-blue'
          }`}
        >
          {isOpen ? (
            <X className="w-6 h-6 -rotate-90 transition-transform" />
          ) : (
            <>
              <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-white" />
              </span>
              <MessageCircle className="w-6 h-6" />
            </>
          )}
        </button>
      </aside>

      {/* Callback Modal */}
      <CallbackModal isOpen={isCallbackOpen} onClose={() => setIsCallbackOpen(false)} />
    </>
  );
};

export default FloatingActionWidget;
