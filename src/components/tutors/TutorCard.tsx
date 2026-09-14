import React, { useState } from 'react';
import { 
  MapPin, 
  BookOpen, 
  Clock, 
  ShieldCheck, 
  Star, 
  Sparkles, 
  GraduationCap,
  ArrowRight
} from 'lucide-react';
import DemoRequestModal from './DemoRequestModal';
import CompatibilityModal from './CompatibilityModal';
import MatchScoreBadge from '../ui/MatchScoreBadge';

export interface Tutor {
  id: string;
  name: string;
  photoUrl?: string;
  experience: number;
  subjects: string[];
  location: string;
  fees: string;
  mode: string;
  rating: number;
  qualification?: string;
  matchScore?: number;
}

interface TutorCardProps {
  tutor: Tutor;
}

const TutorCard: React.FC<TutorCardProps> = ({ tutor }) => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isCompatibilityModalOpen, setIsCompatibilityModalOpen] = useState(false);

  // Compute realistic match score if not provided
  const matchScore = tutor.matchScore || Math.min(98, Math.round((tutor.rating || 4.8) * 19.5));

  // Default qualification if not present
  const qualification = tutor.qualification || (
    tutor.subjects.includes('Mathematics') 
      ? 'M.Sc Mathematics • Experienced Educator'
      : tutor.subjects.includes('Physics')
      ? 'M.Sc Physics • Senior Faculty'
      : tutor.subjects.includes('Accounts')
      ? 'M.Com / CA Inter • Accounts Specialist'
      : 'B.Ed / Post Graduate • Certified Tutor'
  );

  return (
    <>
      <div className="group bg-white rounded-3xl border border-slate-200/80 shadow-soft hover:shadow-soft-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col md:flex-row p-5 sm:p-7 gap-6 relative">
        {/* Accent top/left line on hover */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-lightBlue via-cyan-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Tutor Avatar Column */}
        <div className="flex-shrink-0 flex flex-col items-center justify-start sm:w-32 mx-auto sm:mx-0">
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden shadow-sm border-2 border-slate-100 group-hover:border-brand-lightBlue/40 transition-colors">
            {tutor.photoUrl ? (
              <img
                src={tutor.photoUrl}
                alt={tutor.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-tr from-brand-dark via-slate-800 to-brand-blue text-white flex items-center justify-center font-bold text-3xl group-hover:scale-105 transition-transform duration-500">
                {tutor.name.charAt(0)}
              </div>
            )}
            <div
              className="absolute bottom-1.5 right-1.5 bg-emerald-500 text-white p-1 rounded-full border-2 border-white shadow-sm"
              title="Verified Educator"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Match Score Badge */}
          <div className="mt-3">
            <MatchScoreBadge score={matchScore} size="sm" />
          </div>
        </div>

        {/* Tutor Info Column */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            {/* Name, rating & badges row */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-2">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-bold text-brand-dark group-hover:text-brand-lightBlue transition-colors">
                    {tutor.name}
                  </h3>
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-2 py-0.5 rounded-full">
                    <ShieldCheck className="w-3 h-3" /> Verified
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5 flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4 text-brand-lightBlue shrink-0" />
                  <span>{qualification}</span>
                </p>
              </div>

              {/* Rating */}
              <div className="inline-flex items-center gap-1 bg-amber-50 text-amber-800 px-2.5 py-1 rounded-xl text-xs font-bold self-start border border-amber-200/60">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span>{tutor.rating}</span>
                <span className="text-amber-600 font-normal">/5.0</span>
              </div>
            </div>

            {/* Quick Meta Details */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-slate-600 mt-3 pt-2 border-t border-slate-100">
              <span className="inline-flex items-center gap-1 font-medium">
                <Clock className="w-3.5 h-3.5 text-brand-lightBlue" />
                <span>{tutor.experience}+ Years Exp</span>
              </span>
              <span className="inline-flex items-center gap-1 font-medium">
                <MapPin className="w-3.5 h-3.5 text-rose-500" />
                <span>{tutor.location}</span>
              </span>
              <span className="inline-flex items-center gap-1 font-medium text-slate-700 bg-slate-100/80 px-2 py-0.5 rounded-md">
                {tutor.mode.toLowerCase().includes('online') && tutor.mode.toLowerCase().includes('offline') ? (
                  <>🏠 Home • 💻 Online</>
                ) : tutor.mode.toLowerCase().includes('online') ? (
                  <>💻 Online Classes</>
                ) : (
                  <>🏠 Home Tuition</>
                )}
              </span>
            </div>

            {/* Subject Chips */}
            <div className="mt-4 flex flex-wrap gap-1.5">
              {tutor.subjects.map((sub, idx) => (
                <span
                  key={idx}
                  className="bg-blue-50/80 text-brand-blue text-xs font-medium px-3 py-1 rounded-xl border border-blue-100/80 flex items-center gap-1.5"
                >
                  <BookOpen className="w-3 h-3 text-brand-lightBlue" />
                  <span>{sub}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Pricing and Action CTAs */}
          <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs text-slate-400 block font-medium uppercase tracking-wider">
                Tuition Fee
              </span>
              <div className="flex items-baseline gap-1">
                <span className="font-extrabold text-xl text-slate-900">{tutor.fees}</span>
                <span className="text-xs text-slate-500 font-medium">/ month or hr</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <button
                type="button"
                onClick={() => setIsCompatibilityModalOpen(true)}
                className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-bold transition-all flex items-center justify-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5 text-brand-orange" />
                <span>Compatibility</span>
              </button>
              <button
                type="button"
                onClick={() => setIsDemoModalOpen(true)}
                className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-brand-lightBlue hover:bg-blue-600 text-white text-xs font-bold shadow-soft hover:shadow-glow-blue transition-all flex items-center justify-center gap-1.5"
              >
                <span>Request Tutor</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Demo Request Modal */}
      <DemoRequestModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
        tutorName={tutor.name}
      />

      {/* Compatibility Breakdown Modal */}
      <CompatibilityModal
        isOpen={isCompatibilityModalOpen}
        onClose={() => setIsCompatibilityModalOpen(false)}
        tutor={tutor}
        onRequestDemo={() => setIsDemoModalOpen(true)}
      />
    </>
  );
};

export default TutorCard;
