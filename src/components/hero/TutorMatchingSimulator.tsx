import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Sparkles, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Star, 
  CheckCircle2, 
  ArrowRight,
  SlidersHorizontal,
  Home
} from 'lucide-react';
import MatchScoreBadge from '../ui/MatchScoreBadge';

interface SamplePreset {
  id: string;
  label: string;
  subject: string;
  grade: string;
  board: string;
  location: string;
  matchScore: number;
  tutorName: string;
  qualification: string;
  experience: string;
  mode: string;
  rating: number;
  reviewsCount: number;
}

const PRESETS: SamplePreset[] = [
  {
    id: 'math-10',
    label: 'Class 10 • Maths',
    subject: 'Mathematics',
    grade: 'Class 10',
    board: 'CBSE',
    location: 'Varanasi',
    matchScore: 96,
    tutorName: 'Er. Alok Srivastava',
    qualification: 'M.Tech • Ex-Allen Faculty',
    experience: '8+ Years Exp',
    mode: 'Home & Online',
    rating: 4.9,
    reviewsCount: 38,
  },
  {
    id: 'phys-12',
    label: 'Class 12 • Physics',
    subject: 'Physics',
    grade: 'Class 12',
    board: 'CBSE / ISC',
    location: 'Prayagraj',
    matchScore: 94,
    tutorName: 'Dr. Neha Verma',
    qualification: 'Ph.D Physics • Gold Medalist',
    experience: '6+ Years Exp',
    mode: 'Home Tuition',
    rating: 5.0,
    reviewsCount: 52,
  },
  {
    id: 'neet-bio',
    label: 'NEET • Biology',
    subject: 'Biology & Zoology',
    grade: 'NEET Dropper / 12th',
    board: 'NCERT Special',
    location: 'Lucknow',
    matchScore: 98,
    tutorName: 'Dr. A. K. Mishra',
    qualification: 'MBBS • Elite NEET Mentor',
    experience: '10+ Years Exp',
    mode: 'Online & Offline',
    rating: 4.95,
    reviewsCount: 64,
  },
];

export const TutorMatchingSimulator: React.FC = () => {
  const navigate = useNavigate();
  const [activePresetIndex, setActivePresetIndex] = useState(0);
  const [isCalculating, setIsCalculating] = useState(false);
  const [progress, setProgress] = useState(100);

  const current = PRESETS[activePresetIndex];

  const handleSelectPreset = (idx: number) => {
    if (idx === activePresetIndex || isCalculating) return;
    setIsCalculating(true);
    setProgress(20);
    setActivePresetIndex(idx);

    const timer1 = setTimeout(() => setProgress(65), 250);
    const timer2 = setTimeout(() => setProgress(100), 550);
    const timer3 = setTimeout(() => setIsCalculating(false), 700);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  };

  return (
    <div className="w-full max-w-lg mx-auto bg-white/95 backdrop-blur-2xl rounded-3xl border border-white/60 shadow-soft-xl p-5 sm:p-7 relative overflow-hidden transition-all duration-300">
      {/* Decorative Glow elements */}
      <div className="absolute -top-16 -right-16 w-40 h-40 bg-brand-lightBlue/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 w-40 h-40 bg-brand-orange/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header Banner */}
      <div className="flex items-center justify-between gap-2 pb-4 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-brand-blue to-brand-lightBlue flex items-center justify-center text-white shadow-sm">
            <Sparkles className="w-4 h-4 animate-pulse" />
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Live Matching Engine
            </h4>
            <p className="text-sm font-bold text-slate-900">
              {isCalculating ? 'Computing Compatibility...' : 'Perfect Match Found'}
            </p>
          </div>
        </div>

        <MatchScoreBadge score={isCalculating ? 75 : current.matchScore} size="sm" />
      </div>

      {/* Preset Selector Chips */}
      <div className="mt-4">
        <div className="flex items-center justify-between text-xs text-slate-500 mb-2 font-medium">
          <span className="flex items-center gap-1">
            <SlidersHorizontal className="w-3 h-3 text-brand-lightBlue" />
            Try matching sample student:
          </span>
          <span className="text-[11px] text-brand-lightBlue font-semibold">Live Demo</span>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {PRESETS.map((p, idx) => (
            <button
              key={p.id}
              onClick={() => handleSelectPreset(idx)}
              className={`text-xs py-1.5 px-2 rounded-xl font-medium transition-all text-center truncate ${
                activePresetIndex === idx
                  ? 'bg-brand-blue text-white shadow-sm ring-2 ring-brand-blue/30'
                  : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200/70'
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>

      {/* Search Criteria Preview Box */}
      <div className="mt-4 p-3.5 rounded-2xl bg-slate-50/80 border border-slate-200/70">
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className="bg-white px-2.5 py-1 rounded-lg border border-slate-200 font-semibold text-slate-800">
            📚 {current.subject}
          </span>
          <span className="bg-white px-2.5 py-1 rounded-lg border border-slate-200 font-semibold text-slate-800">
            🎓 {current.grade}
          </span>
          <span className="bg-white px-2.5 py-1 rounded-lg border border-slate-200 font-semibold text-slate-800">
            🏛️ {current.board}
          </span>
          <span className="bg-white px-2.5 py-1 rounded-lg border border-slate-200 font-semibold text-slate-800 flex items-center gap-1">
            <MapPin className="w-3 h-3 text-rose-500" /> {current.location}
          </span>
        </div>

        {/* Progress bar */}
        <div className="mt-3">
          <div className="flex justify-between text-[11px] text-slate-500 mb-1 font-medium">
            <span>Intelligent Verification</span>
            <span className="font-bold text-brand-lightBlue">{progress}%</span>
          </div>
          <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
            <div
              className="bg-gradient-to-r from-brand-lightBlue to-emerald-500 h-full rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      {/* Top Match Result Card */}
      <div className={`mt-4 p-4 rounded-2xl border transition-all duration-300 ${
        isCalculating
          ? 'opacity-40 scale-[0.98] border-slate-100 bg-white'
          : 'opacity-100 scale-100 border-emerald-200/80 bg-gradient-to-br from-white to-emerald-50/30 shadow-soft'
      }`}>
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-brand-dark to-brand-blue text-white font-bold flex items-center justify-center text-lg shadow-sm">
                {current.tutorName.charAt(current.tutorName.indexOf(' ') + 1 || 0)}
              </div>
              <div className="absolute -bottom-1 -right-1 bg-emerald-500 text-white p-0.5 rounded-full border-2 border-white">
                <ShieldCheck className="w-3.5 h-3.5" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h5 className="font-bold text-slate-900 text-sm">{current.tutorName}</h5>
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-lightBlue shrink-0" />
              </div>
              <p className="text-xs text-brand-lightBlue font-medium">{current.qualification}</p>
            </div>
          </div>

          <div className="text-right">
            <div className="inline-flex items-center gap-1 bg-amber-50 text-amber-800 text-xs font-bold px-2 py-0.5 rounded-md border border-amber-200/60">
              <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
              {current.rating}
            </div>
            <p className="text-[10px] text-slate-400 mt-0.5">{current.reviewsCount} reviews</p>
          </div>
        </div>

        {/* Feature badges */}
        <div className="flex flex-wrap gap-2 text-[11px] text-slate-600 mb-4 pt-1">
          <span className="inline-flex items-center gap-1 bg-slate-100 px-2 py-0.5 rounded-md font-medium">
            <Clock className="w-3 h-3 text-slate-500" /> {current.experience}
          </span>
          <span className="inline-flex items-center gap-1 bg-blue-50 text-blue-700 px-2 py-0.5 rounded-md font-medium">
            <Home className="w-3 h-3" /> {current.mode}
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <button
            onClick={() => navigate(`/find-tutors?subject=${encodeURIComponent(current.subject)}`)}
            className="flex-1 py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-all shadow-sm flex items-center justify-center gap-1.5 group"
          >
            <span>View Profile</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </button>
          <button
            onClick={() => navigate('/find-tutor')}
            className="py-2.5 px-4 rounded-xl bg-brand-orange hover:bg-orange-600 text-white text-xs font-bold transition-all shadow-sm"
          >
            Request Tutor
          </button>
        </div>
      </div>
    </div>
  );
};

export default TutorMatchingSimulator;
