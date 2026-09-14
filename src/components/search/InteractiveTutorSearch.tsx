import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Search, 
  MapPin, 
  Home, 
  Laptop, 
  Sparkles, 
  ArrowRight, 
  ArrowLeft, 
  Check, 
  Compass,
  Repeat
} from 'lucide-react';

const SUBJECTS = [
  { id: 'Mathematics', name: 'Mathematics', icon: '📐', desc: 'Algebra, Calculus & Foundations' },
  { id: 'Physics', name: 'Physics', icon: '⚡', desc: 'Mechanics, Electromagnetism & Optics' },
  { id: 'Chemistry', name: 'Chemistry', icon: '🧪', desc: 'Organic, Inorganic & Physical' },
  { id: 'Biology', name: 'Biology & NEET', icon: '🧬', desc: 'Botany, Zoology & Medical Prep' },
  { id: 'English', name: 'English & Grammar', icon: '📖', desc: 'Literature, Writing & Spoken' },
  { id: 'Computer Science', name: 'Coding & CS', icon: '💻', desc: 'Python, C++, Java & Basics' },
  { id: 'Commerce', name: 'Commerce & Accounts', icon: '📊', desc: 'Accountancy, Economics & Business' },
  { id: 'All Subjects', name: 'All Subjects (Junior)', icon: '🌟', desc: 'Complete comprehensive guidance' },
];

const CLASSES = [
  { id: 'Class 1 - 5', label: 'Primary (Class 1 - 5)', sub: 'Foundation & All Subjects' },
  { id: 'Class 6 - 8', label: 'Middle (Class 6 - 8)', sub: 'Math, Science, English' },
  { id: 'Class 9 - 10', label: 'Secondary (Class 9 - 10)', sub: 'Boards Prep (CBSE/ICSE)' },
  { id: 'Class 11 - 12', label: 'Senior (Class 11 - 12)', sub: 'Science / Commerce / Arts' },
  { id: 'JEE / NEET', label: 'JEE & NEET Special', sub: 'Targeted rank mentorship' },
  { id: 'Other', label: 'College / Language', sub: 'Custom syllabus' },
];

const MODES = [
  { id: 'Home Tuition', title: 'Home Tuition', icon: Home, desc: 'Verified tutor teaches 1-on-1 at your home', badge: 'Most Popular' },
  { id: 'Online Classes', title: 'Online Classes', icon: Laptop, desc: 'Interactive live 1-to-1 digital classroom', badge: 'Flexible' },
  { id: 'Either', title: 'Either (Flexible)', icon: Repeat, desc: 'Open to both offline home tutor or online', badge: 'Fastest Match' },
];

const CITIES = ['Prayagraj', 'Varanasi', 'Lucknow', 'Kanpur', 'Delhi NCR', 'Noida', 'Patna', 'Gorakhpur'];

export const InteractiveTutorSearch: React.FC = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedMode, setSelectedMode] = useState('Home Tuition');
  const [location, setLocation] = useState('Prayagraj');
  const [isMatching, setIsMatching] = useState(false);
  const [matchingProgress, setMatchingProgress] = useState(0);

  const startMatching = () => {
    setIsMatching(true);
    setMatchingProgress(15);

    const t1 = setTimeout(() => setMatchingProgress(50), 300);
    const t2 = setTimeout(() => setMatchingProgress(85), 650);
    const t3 = setTimeout(() => {
      setMatchingProgress(100);
      navigate(
        `/find-tutors?subject=${encodeURIComponent(selectedSubject || 'All')}&class=${encodeURIComponent(
          selectedClass || 'All'
        )}&mode=${encodeURIComponent(selectedMode)}&location=${encodeURIComponent(location)}`
      );
    }, 1100);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-3xl border border-slate-200/80 shadow-soft-xl overflow-hidden transition-all duration-300">
      {/* Top Header & Stepper */}
      <div className="bg-gradient-to-r from-slate-900 via-brand-dark to-brand-blue p-6 sm:p-8 text-white relative">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-orange bg-white/10 px-3 py-1 rounded-full mb-2 backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Step-by-Step Tutor Finder</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
              {step === 1 && 'What are you looking to learn?'}
              {step === 2 && 'Which class are you studying in?'}
              {step === 3 && 'How would you like to learn?'}
              {step === 4 && 'Where are you located?'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Find matched tutors in under 60 seconds with zero upfront commitments.
            </p>
          </div>

          {/* Stepper Pill */}
          <div className="flex items-center gap-1.5 bg-white/10 px-4 py-2 rounded-2xl backdrop-blur-md self-start sm:self-center border border-white/10">
            {[1, 2, 3, 4].map((s) => (
              <div
                key={s}
                className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                  step === s
                    ? 'bg-brand-orange text-white ring-2 ring-brand-orange/40'
                    : step > s
                    ? 'bg-emerald-500 text-white'
                    : 'bg-white/20 text-slate-300'
                }`}
              >
                {step > s ? <Check className="w-3.5 h-3.5" /> : s}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Body with Dynamic Steps */}
      <div className="p-6 sm:p-8 min-h-[360px] flex flex-col justify-between">
        {isMatching ? (
          /* Animated Matching State */
          <div className="py-12 flex flex-col items-center justify-center text-center space-y-6 animate-fade-in">
            <div className="relative">
              <div className="w-24 h-24 rounded-full bg-brand-lightBlue/10 flex items-center justify-center text-brand-lightBlue">
                <Compass className="w-12 h-12 animate-spin text-brand-lightBlue" style={{ animationDuration: '3s' }} />
              </div>
              <span className="absolute -top-1 -right-1 flex h-6 w-6">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75" />
                <span className="relative inline-flex rounded-full h-6 w-6 bg-brand-orange text-white text-[10px] font-bold items-center justify-center">
                  AI
                </span>
              </span>
            </div>

            <div className="max-w-md space-y-2">
              <h4 className="text-xl font-extrabold text-brand-dark">
                Finding your best tutor matches...
              </h4>
              <p className="text-sm text-slate-500">
                Scanning verified tutors for <strong className="text-brand-dark">{selectedSubject || 'selected subjects'}</strong> in <strong className="text-brand-dark">{location}</strong> ({selectedMode})
              </p>
            </div>

            {/* Progress bar */}
            <div className="w-full max-w-sm bg-slate-100 h-2.5 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-brand-lightBlue via-blue-500 to-emerald-500 rounded-full transition-all duration-300"
                style={{ width: `${matchingProgress}%` }}
              />
            </div>
            <span className="text-xs font-semibold text-slate-400">
              Matching verified profiles • {matchingProgress}%
            </span>
          </div>
        ) : (
          <>
            {/* STEP 1: SUBJECT SELECTION */}
            {step === 1 && (
              <div className="animate-fade-in space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {SUBJECTS.map((sub) => {
                    const isSelected = selectedSubject === sub.id;
                    return (
                      <button
                        key={sub.id}
                        type="button"
                        onClick={() => setSelectedSubject(sub.id)}
                        className={`p-4 rounded-2xl text-left border transition-all duration-200 flex flex-col justify-between group ${
                          isSelected
                            ? 'border-brand-lightBlue bg-blue-50/60 ring-2 ring-brand-lightBlue/20 shadow-sm'
                            : 'border-slate-200/80 bg-white hover:border-slate-300 hover:bg-slate-50'
                        }`}
                      >
                        <div className="text-2xl mb-2">{sub.icon}</div>
                        <div>
                          <div className="font-bold text-sm text-slate-900 group-hover:text-brand-lightBlue transition-colors">
                            {sub.name}
                          </div>
                          <div className="text-xs text-slate-500 mt-0.5 line-clamp-1">
                            {sub.desc}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* STEP 2: CLASS SELECTION */}
            {step === 2 && (
              <div className="animate-fade-in space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {CLASSES.map((cls) => {
                    const isSelected = selectedClass === cls.id;
                    return (
                      <button
                        key={cls.id}
                        type="button"
                        onClick={() => setSelectedClass(cls.id)}
                        className={`p-5 rounded-2xl text-left border transition-all duration-200 group ${
                          isSelected
                            ? 'border-brand-lightBlue bg-blue-50/60 ring-2 ring-brand-lightBlue/20 shadow-sm'
                            : 'border-slate-200/80 bg-white hover:border-slate-300 hover:bg-slate-50'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-bold text-sm text-slate-900 group-hover:text-brand-lightBlue transition-colors">
                            {cls.label}
                          </span>
                          <span
                            className={`w-5 h-5 rounded-full border flex items-center justify-center text-xs ${
                              isSelected
                                ? 'bg-brand-lightBlue text-white border-brand-lightBlue'
                                : 'border-slate-300 text-transparent'
                            }`}
                          >
                            <Check className="w-3 h-3" />
                          </span>
                        </div>
                        <p className="text-xs text-slate-500">{cls.sub}</p>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* STEP 3: LEARNING MODE */}
            {step === 3 && (
              <div className="animate-fade-in space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {MODES.map((mode) => {
                    const isSelected = selectedMode === mode.id;
                    const Icon = mode.icon;
                    return (
                      <button
                        key={mode.id}
                        type="button"
                        onClick={() => setSelectedMode(mode.id)}
                        className={`p-6 rounded-2xl text-left border transition-all duration-200 flex flex-col justify-between group ${
                          isSelected
                            ? 'border-brand-lightBlue bg-blue-50/60 ring-2 ring-brand-lightBlue/20 shadow-sm'
                            : 'border-slate-200/80 bg-white hover:border-slate-300 hover:bg-slate-50'
                        }`}
                      >
                        <div>
                          <div className="flex items-center justify-between mb-3">
                            <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-brand-dark group-hover:bg-brand-lightBlue group-hover:text-white transition-colors">
                              <Icon className="w-6 h-6" />
                            </div>
                            <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                              {mode.badge}
                            </span>
                          </div>
                          <h4 className="font-bold text-base text-slate-900 group-hover:text-brand-lightBlue transition-colors">
                            {mode.title}
                          </h4>
                          <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                            {mode.desc}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* STEP 4: LOCATION */}
            {step === 4 && (
              <div className="animate-fade-in space-y-6">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Enter City, Area, or Pin Code
                  </label>
                  <div className="relative">
                    <Search className="w-5 h-5 text-slate-400 absolute left-4 top-3.5" />
                    <input
                      type="text"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="e.g. Prayagraj, Varanasi, Lucknow..."
                      className="w-full pl-12 pr-4 py-3 rounded-2xl border border-slate-200 text-sm font-medium focus:ring-2 focus:ring-brand-lightBlue/20 focus:border-brand-lightBlue outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <p className="text-xs font-semibold text-slate-500 mb-2.5">
                    Popular localities:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {CITIES.map((c) => (
                      <button
                        key={c}
                        type="button"
                        onClick={() => setLocation(c)}
                        className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold border transition-all ${
                          location.toLowerCase() === c.toLowerCase()
                            ? 'bg-slate-900 text-white border-slate-900'
                            : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        <MapPin className="w-3 h-3 inline mr-1 text-brand-orange" />
                        {c}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Bottom Controls */}
            <div className="pt-8 border-t border-slate-100 flex items-center justify-between gap-4 mt-6">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-600 hover:text-slate-900 py-2.5 px-4 rounded-xl hover:bg-slate-100 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>
              ) : (
                <div />
              )}

              {step < 4 ? (
                <button
                  type="button"
                  onClick={() => setStep(step + 1)}
                  className="inline-flex items-center gap-2 py-3 px-6 rounded-xl bg-brand-lightBlue hover:bg-blue-600 text-white font-semibold text-sm shadow-soft hover:shadow-soft-lg hover:-translate-y-0.5 transition-all"
                >
                  <span>Continue</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={startMatching}
                  className="inline-flex items-center gap-2 py-3 px-7 rounded-xl bg-gradient-to-r from-brand-orange to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold text-sm shadow-soft-lg hover:-translate-y-0.5 transition-all"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Find My Tutor Matches</span>
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default InteractiveTutorSearch;
