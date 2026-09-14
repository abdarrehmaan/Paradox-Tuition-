import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { 
  Filter, 
  Search, 
  Sparkles, 
  MapPin, 
  X, 
  ArrowRight,
  SlidersHorizontal,
  RotateCcw
} from 'lucide-react';
import TutorCard from '../components/tutors/TutorCard';
import TutorCardSkeleton from '../components/tutors/TutorCardSkeleton';
import type { Tutor } from '../components/tutors/TutorCard';
import { supabase } from '../lib/supabase';
import Button from '../components/ui/Button';

const mockTutors: Tutor[] = [
  {
    id: 'tutor-1',
    name: 'Er. Alok Srivastava',
    photoUrl: '',
    experience: 8,
    subjects: ['Mathematics', 'Physics'],
    location: 'Varanasi',
    fees: '₹600',
    mode: 'Home & Online',
    rating: 4.9,
    qualification: 'M.Tech (NIT) • 8+ Yrs Ex-Faculty',
    matchScore: 96,
  },
  {
    id: 'tutor-2',
    name: 'Dr. Neha Verma',
    photoUrl: '',
    experience: 6,
    subjects: ['Physics', 'Science'],
    location: 'Prayagraj',
    fees: '₹700',
    mode: 'Home Tuition',
    rating: 5.0,
    qualification: 'Ph.D Physics • Gold Medalist',
    matchScore: 94,
  },
  {
    id: 'tutor-3',
    name: 'Dr. A. K. Mishra',
    photoUrl: '',
    experience: 10,
    subjects: ['Biology', 'Science'],
    location: 'Lucknow',
    fees: '₹800',
    mode: 'Home & Online',
    rating: 4.95,
    qualification: 'MBBS • Elite NEET Mentor',
    matchScore: 98,
  },
  {
    id: 'tutor-4',
    name: 'Priya Patel',
    photoUrl: '',
    experience: 7,
    subjects: ['English', 'Social Science'],
    location: 'Prayagraj',
    fees: '₹500',
    mode: 'Online',
    rating: 4.85,
    qualification: 'M.A. English Literature (DU)',
    matchScore: 92,
  },
  {
    id: 'tutor-5',
    name: 'Sneha Gupta',
    photoUrl: '',
    experience: 9,
    subjects: ['Accounts', 'Economics', 'Commerce'],
    location: 'Prayagraj',
    fees: '₹650',
    mode: 'Home & Online',
    rating: 4.9,
    qualification: 'M.Com, CA Inter • Accounts Specialist',
    matchScore: 95,
  },
  {
    id: 'tutor-6',
    name: 'Vikramaditya Roy',
    photoUrl: '',
    experience: 5,
    subjects: ['Chemistry', 'Science'],
    location: 'Kanpur',
    fees: '₹550',
    mode: 'Home Tuition',
    rating: 4.8,
    qualification: 'M.Sc Chemistry • JEE Specialist',
    matchScore: 91,
  },
  {
    id: 'tutor-7',
    name: 'Er. Aman Tripathi',
    photoUrl: '',
    experience: 4,
    subjects: ['Computer Science', 'Mathematics'],
    location: 'Delhi NCR',
    fees: '₹600',
    mode: 'Online',
    rating: 4.9,
    qualification: 'B.Tech CSE • Coding & Logic Mentor',
    matchScore: 93,
  },
  {
    id: 'tutor-8',
    name: 'Kavita Mehrotra',
    photoUrl: '',
    experience: 11,
    subjects: ['All Subjects', 'Mathematics', 'Hindi'],
    location: 'Prayagraj',
    fees: '₹450',
    mode: 'Home Tuition',
    rating: 5.0,
    qualification: 'Senior Primary Specialist • 11+ Yrs Exp',
    matchScore: 97,
  }
];

const FindTutors: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const [tutors, setTutors] = useState<Tutor[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Filters state initialized from search params if provided
  const [selectedSubject, setSelectedSubject] = useState(searchParams.get('subject') || 'All');
  const [selectedLocation, setSelectedLocation] = useState(searchParams.get('location') || '');
  const [selectedMode, setSelectedMode] = useState(searchParams.get('mode') || 'All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('match');

  useEffect(() => {
    const fetchTutors = async () => {
      try {
        setLoading(true);
        const { data, error: dbError } = await supabase.from('tutors').select('*');
        let fetchedData: Tutor[] = [];
        if (!dbError && data && data.length > 0) {
          fetchedData = data as Tutor[];
        }
        setTutors([...mockTutors, ...fetchedData]);
      } catch (err: any) {
        console.error('Error fetching tutors:', err);
        setTutors(mockTutors);
      } finally {
        // Subtle delay to demonstrate smooth skeleton UX
        setTimeout(() => setLoading(false), 400);
      }
    };

    fetchTutors();
  }, []);

  // Filter and sort logic
  const filteredTutors = useMemo(() => {
    return tutors.filter((tutor) => {
      // Subject filter
      if (selectedSubject && selectedSubject !== 'All') {
        const matchesSubject = tutor.subjects.some(
          (s) => s.toLowerCase().includes(selectedSubject.toLowerCase())
        );
        if (!matchesSubject) return false;
      }

      // Location filter
      if (selectedLocation && selectedLocation.trim() !== '') {
        const matchesLocation = tutor.location.toLowerCase().includes(selectedLocation.toLowerCase());
        if (!matchesLocation) return false;
      }

      // Teaching mode filter
      if (selectedMode && selectedMode !== 'All' && selectedMode !== 'Either') {
        if (!tutor.mode.toLowerCase().includes(selectedMode.toLowerCase().replace(' tuition', '').replace(' classes', ''))) {
          return false;
        }
      }

      // Text query search
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matchesName = tutor.name.toLowerCase().includes(q);
        const matchesSub = tutor.subjects.some((s) => s.toLowerCase().includes(q));
        const matchesLoc = tutor.location.toLowerCase().includes(q);
        if (!matchesName && !matchesSub && !matchesLoc) return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'match') {
        return (b.matchScore || 90) - (a.matchScore || 90);
      }
      if (sortBy === 'rating') {
        return b.rating - a.rating;
      }
      if (sortBy === 'experience') {
        return b.experience - a.experience;
      }
      return 0;
    });
  }, [tutors, selectedSubject, selectedLocation, selectedMode, searchQuery, sortBy]);

  const resetFilters = () => {
    setSelectedSubject('All');
    setSelectedLocation('');
    setSelectedMode('All');
    setSearchQuery('');
    setSortBy('match');
  };

  return (
    <div className="bg-brand-gray min-h-screen py-8 sm:py-12">
      <div className="container-custom">
        {/* Header section */}
        <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-lightBlue bg-blue-50 px-3 py-1 rounded-full mb-2 border border-blue-100">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Smart Match Directory</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight">
              Verified Tutors & Mentors
            </h1>
            <p className="text-sm sm:text-base text-slate-600 mt-1">
              Connect with vetted home & online tutors across India with 100% free demo classes.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setIsFilterOpen(true)}
              className="lg:hidden flex items-center gap-2 btn-secondary px-4 py-2.5 text-sm font-semibold"
            >
              <Filter className="w-4 h-4 text-brand-lightBlue" />
              <span>Filters</span>
            </button>
            <Button
              variant="primary"
              size="sm"
              onClick={() => navigate('/find-tutor')}
              className="py-2.5 px-5 shadow-soft"
            >
              Request Custom Match
            </Button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Desktop Filters Sidebar */}
          <aside className="hidden lg:block lg:w-1/4 shrink-0">
            <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-soft sticky top-28 space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2 font-bold text-slate-900">
                  <SlidersHorizontal className="w-4 h-4 text-brand-lightBlue" />
                  <span>Filter Directory</span>
                </div>
                {(selectedSubject !== 'All' || selectedLocation !== '' || selectedMode !== 'All' || searchQuery !== '') && (
                  <button
                    onClick={resetFilters}
                    className="text-xs text-brand-lightBlue font-semibold hover:underline flex items-center gap-1"
                  >
                    <RotateCcw className="w-3 h-3" /> Reset
                  </button>
                )}
              </div>

              {/* Keyword Search */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Search Tutor / Subject
                </label>
                <div className="relative">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="e.g. Alok, Physics, Math..."
                    className="w-full pl-9 pr-3 py-2 text-sm rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-lightBlue/20 focus:border-brand-lightBlue outline-none"
                  />
                </div>
              </div>

              {/* Subject Selector */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Subject
                </label>
                <select
                  value={selectedSubject}
                  onChange={(e) => setSelectedSubject(e.target.value)}
                  className="w-full px-3 py-2.5 text-sm rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-brand-lightBlue/20 outline-none"
                >
                  <option value="All">All Subjects</option>
                  <option value="Mathematics">Mathematics</option>
                  <option value="Physics">Physics</option>
                  <option value="Chemistry">Chemistry</option>
                  <option value="Biology">Biology</option>
                  <option value="English">English</option>
                  <option value="Accounts">Accounts & Economics</option>
                  <option value="Computer Science">Computer Science</option>
                  <option value="Social Science">Social Science</option>
                </select>
              </div>

              {/* Location Input */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  City / Location
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                  <input
                    type="text"
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    placeholder="Search city (e.g. Varanasi)"
                    className="w-full pl-9 pr-3 py-2 text-sm rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-lightBlue/20 focus:border-brand-lightBlue outline-none"
                  />
                </div>
              </div>

              {/* Mode of Teaching */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Teaching Mode
                </label>
                <div className="space-y-2 text-xs font-medium text-slate-700">
                  {['All', 'Home Tuition', 'Online'].map((mode) => (
                    <label key={mode} className="flex items-center gap-2 cursor-pointer p-1.5 rounded-lg hover:bg-slate-50">
                      <input
                        type="radio"
                        name="modeRadio"
                        checked={selectedMode === mode}
                        onChange={() => setSelectedMode(mode)}
                        className="text-brand-lightBlue focus:ring-brand-lightBlue"
                      />
                      <span>{mode === 'All' ? 'All Modes (Offline & Online)' : mode}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Sort By */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Sort By
                </label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-3 py-2 text-sm rounded-xl border border-slate-200 bg-slate-50 focus:bg-white outline-none"
                >
                  <option value="match">Highest Match Score</option>
                  <option value="rating">Top Rated (Stars)</option>
                  <option value="experience">Most Experienced</option>
                </select>
              </div>
            </div>
          </aside>

          {/* Tutor Cards List & Results */}
          <div className="flex-1">
            {/* Results bar */}
            <div className="flex items-center justify-between mb-6 pb-2 border-b border-slate-200/60">
              <span className="text-sm font-semibold text-slate-700">
                Showing <strong className="text-brand-dark">{loading ? '...' : filteredTutors.length}</strong> verified tutors
              </span>
              <span className="text-xs text-slate-500 hidden sm:inline">
                All tutors pass strict background & qualification verification
              </span>
            </div>

            {loading ? (
              <div className="space-y-6">
                <TutorCardSkeleton />
                <TutorCardSkeleton />
                <TutorCardSkeleton />
              </div>
            ) : filteredTutors.length > 0 ? (
              <div className="space-y-6">
                {filteredTutors.map((tutor) => (
                  <TutorCard key={tutor.id} tutor={tutor} />
                ))}
              </div>
            ) : (
              /* Requirement 16: Empty State Fallback */
              <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 text-center shadow-soft max-w-xl mx-auto space-y-5 animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-blue-50 text-brand-lightBlue flex items-center justify-center mx-auto shadow-sm">
                  <Search className="w-8 h-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-brand-dark">
                    We couldn't find an exact match yet
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed max-w-md mx-auto">
                    Don't worry! We have a private network of 500+ verified tutors not publicly listed. Tell us your exact subject, class, and locality and our team will match you within 24 hours.
                  </p>
                </div>
                <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3">
                  <button
                    onClick={resetFilters}
                    className="btn-secondary text-sm py-2.5 px-6"
                  >
                    Clear Filters
                  </button>
                  <Button
                    variant="primary"
                    className="text-sm py-2.5 px-6 shadow-soft"
                    onClick={() => navigate('/find-tutor')}
                    rightIcon={<ArrowRight className="w-4 h-4" />}
                  >
                    Request Tutor Assistance
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filters Slide-over Drawer */}
      {isFilterOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          <div
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
            onClick={() => setIsFilterOpen(false)}
          />
          <div className="relative ml-auto w-full max-w-xs bg-white h-full shadow-2xl p-6 overflow-y-auto flex flex-col justify-between z-10 animate-fade-in">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-lg">
                  <Filter className="w-5 h-5 text-brand-lightBlue" />
                  <span>Filters</span>
                </div>
                <button
                  onClick={() => setIsFilterOpen(false)}
                  className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Subject */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Subject
                </label>
                <select
                  value={selectedSubject}
                  onChange={(e) => setSelectedSubject(e.target.value)}
                  className="w-full px-3 py-2 text-sm rounded-xl border border-slate-200 bg-slate-50"
                >
                  <option value="All">All Subjects</option>
                  <option value="Mathematics">Mathematics</option>
                  <option value="Physics">Physics</option>
                  <option value="Chemistry">Chemistry</option>
                  <option value="Biology">Biology</option>
                  <option value="English">English</option>
                  <option value="Accounts">Accounts & Commerce</option>
                  <option value="Computer Science">Computer Science</option>
                </select>
              </div>

              {/* Location */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Location
                </label>
                <input
                  type="text"
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  placeholder="e.g. Prayagraj"
                  className="w-full px-3 py-2 text-sm rounded-xl border border-slate-200"
                />
              </div>

              {/* Mode */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Mode
                </label>
                <select
                  value={selectedMode}
                  onChange={(e) => setSelectedMode(e.target.value)}
                  className="w-full px-3 py-2 text-sm rounded-xl border border-slate-200 bg-slate-50"
                >
                  <option value="All">All Modes</option>
                  <option value="Home Tuition">Home Tuition</option>
                  <option value="Online">Online Learning</option>
                </select>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100 flex gap-2">
              <button
                onClick={resetFilters}
                className="flex-1 btn-secondary text-xs py-2.5"
              >
                Reset
              </button>
              <Button
                variant="primary"
                className="flex-1 text-xs py-2.5"
                onClick={() => setIsFilterOpen(false)}
              >
                Apply
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FindTutors;
