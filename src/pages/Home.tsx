import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  UserCheck,
  ShieldCheck, 
  Home as HomeIcon, 
  BookOpen, 
  Clock, 
  Star, 
  GraduationCap, 
  ChevronRight, 
  Search,
  Compass,
  Zap
} from 'lucide-react';
import Button from '../components/ui/Button';
import TutorMatchingSimulator from '../components/hero/TutorMatchingSimulator';
import InteractiveTutorSearch from '../components/search/InteractiveTutorSearch';
import AnimatedCounter from '../components/common/AnimatedCounter';

const SUBJECT_LIST = [
  {
    name: 'Mathematics',
    desc: 'Classes 1–12 • CBSE, ICSE, JEE Foundation',
    icon: '📐',
    tutorCount: '120+ Tutors',
    color: 'from-blue-500/10 to-indigo-500/10',
    borderColor: 'hover:border-blue-500/40',
  },
  {
    name: 'Physics',
    desc: 'Classes 9–12 • Mechanics, Optics & Electrodynamics',
    icon: '⚡',
    tutorCount: '85+ Tutors',
    color: 'from-amber-500/10 to-orange-500/10',
    borderColor: 'hover:border-amber-500/40',
  },
  {
    name: 'Chemistry',
    desc: 'Organic, Inorganic & Physical Chemistry for Boards & NEET',
    icon: '🧪',
    tutorCount: '75+ Tutors',
    color: 'from-cyan-500/10 to-teal-500/10',
    borderColor: 'hover:border-cyan-500/40',
  },
  {
    name: 'Biology',
    desc: 'Botany, Zoology & Targeted NEET Medical Prep',
    icon: '🧬',
    tutorCount: '90+ Tutors',
    color: 'from-emerald-500/10 to-green-500/10',
    borderColor: 'hover:border-emerald-500/40',
  },
  {
    name: 'English',
    desc: 'Grammar, Literature, Creative Writing & Spoken English',
    icon: '📖',
    tutorCount: '65+ Tutors',
    color: 'from-purple-500/10 to-pink-500/10',
    borderColor: 'hover:border-purple-500/40',
  },
  {
    name: 'Computer Science',
    desc: 'Python, C++, Java, IP & School Coding Curricula',
    icon: '💻',
    tutorCount: '50+ Tutors',
    color: 'from-indigo-500/10 to-blue-500/10',
    borderColor: 'hover:border-indigo-500/40',
  },
  {
    name: 'Social Science',
    desc: 'History, Civics, Geography & Economics for High School',
    icon: '🌍',
    tutorCount: '45+ Tutors',
    color: 'from-rose-500/10 to-red-500/10',
    borderColor: 'hover:border-rose-500/40',
  },
  {
    name: 'Hindi',
    desc: 'Vyakaran, Sahitya, K-12 Boards & Literature',
    icon: '✍️',
    tutorCount: '40+ Tutors',
    color: 'from-orange-500/10 to-amber-500/10',
    borderColor: 'hover:border-orange-500/40',
  },
];

const TESTIMONIALS = [
  {
    id: 1,
    name: 'Dr. Sunita Kapoor',
    role: 'Parent • Varanasi',
    avatar: 'S',
    avatarBg: 'bg-emerald-100 text-emerald-700',
    rating: 5,
    title: 'Found the ideal Math mentor in 24 hours',
    content: 'Finding a reliable home tutor for Class 10 board exams was overwhelming. Paradox matched us with an experienced NIT alumnus who simplified trigonometry so well that my daughter scored 96%!',
    subject: 'Class 10 Mathematics',
    verified: true,
  },
  {
    id: 2,
    name: 'Rohan Deshmukh',
    role: 'Student • Prayagraj',
    avatar: 'R',
    avatarBg: 'bg-blue-100 text-blue-700',
    rating: 5,
    title: 'Cracked NEET Biology concepts seamlessly',
    content: 'The 1-on-1 personalized attention is incomparable to giant coaching factories. My mentor tailored every doubt session to my weak topics. The free demo class gave me total confidence.',
    subject: 'NEET Medical Prep',
    verified: true,
  },
  {
    id: 3,
    name: 'Mahesh Narang',
    role: 'Parent • Lucknow',
    avatar: 'M',
    avatarBg: 'bg-amber-100 text-amber-700',
    rating: 5,
    title: 'Completely professional and trustworthy',
    content: 'We specifically requested a female teacher for our 8th-grade daughter. Paradox verified credentials and arranged an offline home tutor within two days. Exceptional transparency and care.',
    subject: 'Class 8 All Subjects',
    verified: true,
  },
];

const Home: React.FC = () => {
  const navigate = useNavigate();

  const scrollToSearch = () => {
    const el = document.getElementById('search-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/find-tutors');
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-brand-gray overflow-x-hidden">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION (REQUIREMENT 2) */}
      {/* ========================================================================= */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden bg-gradient-to-b from-blue-50/60 via-brand-gray to-brand-gray bg-grid-pattern">
        {/* Ambient subtle glow backdrops */}
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-brand-lightBlue/10 rounded-full blur-3xl pointer-events-none animate-glow-pulse" />
        <div className="absolute top-40 right-10 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl pointer-events-none animate-glow-pulse" />

        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Headline & Value Prop */}
            <div className="lg:col-span-7 text-center lg:text-left space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-soft text-slate-800 text-xs sm:text-sm font-semibold animate-fade-in">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span>Next-Generation Intelligent Tutor Matching</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-dark tracking-tight leading-[1.15] text-balance">
                Find the Right Tutor.{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-lightBlue via-blue-600 to-indigo-600">
                  Learn Without Limits.
                </span>
              </h1>

              {/* Supporting Value Proposition */}
              <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed">
                Connect with thoroughly verified educators for personalized 1-on-1 home tuition and online classes. Handpicked matching tailored to your curriculum, pace, and goals.
              </p>

              {/* Primary and Secondary CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
                <Button
                  size="lg"
                  onClick={scrollToSearch}
                  className="w-full sm:w-auto bg-brand-lightBlue hover:bg-blue-600 text-white font-bold shadow-soft hover:shadow-glow-blue rounded-2xl px-8 py-4 text-base transition-all btn-shimmer"
                  rightIcon={<ArrowRight className="w-5 h-5" />}
                >
                  Find a Tutor
                </Button>

                <Button
                  variant="secondary"
                  size="lg"
                  onClick={() => navigate('/become-tutor')}
                  className="w-full sm:w-auto rounded-2xl px-8 py-4 text-base font-semibold border-slate-200 hover:bg-white text-slate-800"
                >
                  Become a Tutor
                </Button>
              </div>

              {/* Trust Row */}
              <div className="pt-6 border-t border-slate-200/80 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-xs sm:text-sm font-semibold text-slate-700">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>Personalized Matching</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>Qualified Tutors</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>Home & Online Classes</span>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Tutor Matching Simulator */}
            <div className="lg:col-span-5 flex justify-center">
              <TutorMatchingSimulator />
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. INTERACTIVE TUTOR SEARCH (REQUIREMENT 3) */}
      {/* ========================================================================= */}
      <section id="search-section" className="section-padding bg-white relative">
        <div className="container-custom relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-lightBlue uppercase tracking-wider mb-2">
              <Compass className="w-4 h-4" />
              <span>Smart Search Engine</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight">
              Find Your Ideal Tutor in 4 Easy Steps
            </h2>
            <p className="text-slate-600 text-base mt-2">
              Select your requirements and our matching algorithm will instantly surface the highest-rated educators near you.
            </p>
          </div>

          <InteractiveTutorSearch />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. BENTO GRID PLATFORM BENEFITS (REQUIREMENT 7) */}
      {/* ========================================================================= */}
      <section className="section-padding bg-slate-50 relative overflow-hidden">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-orange uppercase tracking-wider mb-2">
              <Zap className="w-4 h-4" />
              <span>Platform Advantages</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight">
              Engineered for Academic Excellence
            </h2>
            <p className="text-slate-600 text-base mt-2">
              Why thousands of families across North India trust Paradox Tuition over traditional agencies.
            </p>
          </div>

          {/* Bento Grid layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            
            {/* Card 1: Large Card - Personalized Tutor Matching */}
            <div className="md:col-span-2 bg-gradient-to-br from-brand-dark via-slate-900 to-brand-blue rounded-3xl p-8 sm:p-10 text-white shadow-soft-lg flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-80 h-80 bg-brand-lightBlue/20 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-700" />
              <div className="relative z-10 space-y-4">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-orange bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
                  <Sparkles className="w-3.5 h-3.5" /> Intelligent Algorithm
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
                  Personalized Tutor Matching
                </h3>
                <p className="text-slate-300 text-sm sm:text-base max-w-lg leading-relaxed">
                  We don't just assign any teacher. Our system analyzes your child's learning pace, syllabus, language preference, and specific doubt areas to recommend tutors with proven success in that exact curriculum.
                </p>
              </div>

              <div className="relative z-10 pt-8 mt-6 border-t border-white/10 flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-300">
                <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-xl">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Tailored Pedagogical Style
                </span>
                <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-xl">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" /> 1-on-1 Free Demo Session
                </span>
              </div>
            </div>

            {/* Card 2: Small Card - Verified Tutors */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-soft flex flex-col justify-between hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-300">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-brand-dark">
                  Strictly Verified Tutors
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Every tutor profile undergoes multi-point credential verification, identity checks, and teaching demonstrations before approval.
                </p>
              </div>
              <div className="pt-6 text-xs font-bold text-emerald-600 flex items-center gap-1">
                <span>Top 5% Acceptance Rate</span>
              </div>
            </div>

            {/* Card 3: Small Card - Learn Anywhere */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-soft flex flex-col justify-between hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-300">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-brand-lightBlue flex items-center justify-center font-bold">
                  <HomeIcon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-brand-dark">
                  Learn Anywhere
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Choose between comfortable in-person home tuition right at your doorstep or high-interactivity digital online lessons.
                </p>
              </div>
              <div className="pt-6 text-xs font-bold text-brand-lightBlue flex items-center gap-1">
                <span>Home Visits or Interactive Online</span>
              </div>
            </div>

            {/* Card 4: Medium Card - Multiple Subjects */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-soft flex flex-col justify-between hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-300">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-brand-dark">
                  Multiple Subjects
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  From foundational K-8 to advanced JEE, NEET, ICSE, and CBSE board mentors across Science, Maths, Commerce, and Languages.
                </p>
              </div>
              <div className="pt-6 text-xs font-bold text-amber-600 flex items-center gap-1">
                <span>50+ Subject Specializations</span>
              </div>
            </div>

            {/* Card 5: Medium Card - Flexible Learning */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-soft flex flex-col justify-between hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-300">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-brand-dark">
                  Flexible Schedules
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Learn on your terms. Set your weekly class frequency, evening or weekend slots, with the ability to reschedule easily.
                </p>
              </div>
              <div className="pt-6 text-xs font-bold text-purple-600 flex items-center gap-1">
                <span>Custom Batches & Timings</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. "HOW IT WORKS" — INTERACTIVE JOURNEY (REQUIREMENT 6) */}
      {/* ========================================================================= */}
      <section id="how-it-works" className="section-padding bg-white relative">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-lightBlue uppercase tracking-wider mb-2">
              <Sparkles className="w-4 h-4" />
              <span>Simple 4-Step Process</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight">
              How It Works
            </h2>
            <p className="text-slate-600 text-base mt-2">
              From your initial requirement to your first class in 4 transparent steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative max-w-6xl mx-auto">
            {[
              {
                step: '01',
                title: 'Tell Us What You Need',
                desc: 'Share your grade, curriculum, subjects, location, and preferred learning schedule in 60 seconds.',
                icon: BookOpen,
                badge: '1 Min Request',
              },
              {
                step: '02',
                title: 'We Find Suitable Tutors',
                desc: 'Our system identifies top-rated tutors matching your requirements and academic goals.',
                icon: Search,
                badge: 'Instant Matching',
              },
              {
                step: '03',
                title: 'Choose Your Tutor',
                desc: 'Review detailed tutor credentials, experience, compatibility scores, and schedule a free demo.',
                icon: UserCheck,
                badge: 'Profiles & Scores',
              },
              {
                step: '04',
                title: 'Start Learning',
                desc: 'Attend the 1-on-1 demo session. If completely satisfied, finalize timings and begin learning.',
                icon: GraduationCap,
                badge: 'Zero Risk Demo',
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-brand-gray/80 rounded-3xl p-7 border border-slate-200/80 shadow-soft hover:shadow-soft-lg hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-3xl font-black text-slate-300 group-hover:text-brand-lightBlue transition-colors">
                        {item.step}
                      </span>
                      <div className="w-12 h-12 rounded-2xl bg-white text-brand-dark shadow-sm flex items-center justify-center group-hover:bg-brand-lightBlue group-hover:text-white transition-colors">
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-brand-dark mb-2 group-hover:text-brand-lightBlue transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-200/60">
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                      {item.badge}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Button
              size="lg"
              onClick={() => navigate('/find-tutor')}
              className="py-3.5 px-8 text-sm font-bold shadow-soft rounded-2xl"
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              Get Started Today
            </Button>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. INTERACTIVE SUBJECT EXPLORER (REQUIREMENT 10) */}
      {/* ========================================================================= */}
      <section className="section-padding bg-slate-50 bg-grid-lines relative">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-lightBlue uppercase tracking-wider mb-2">
              <GraduationCap className="w-4 h-4" />
              <span>Curriculum &amp; Specialties</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight">
              Explore Tutors by Subject
            </h2>
            <p className="text-slate-600 text-base mt-2">
              Experienced educators specializing in CBSE, ICSE, State Boards, and competitive exams.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
            {SUBJECT_LIST.map((sub, idx) => (
              <div
                key={idx}
                className={`bg-white rounded-3xl p-6 border border-slate-200/80 shadow-soft transition-all duration-300 hover:shadow-card-hover hover:-translate-y-2 flex flex-col justify-between group ${sub.borderColor}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-3xl p-2.5 rounded-2xl bg-slate-50 border border-slate-100 group-hover:scale-110 transition-transform">
                      {sub.icon}
                    </div>
                    <span className="text-[11px] font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
                      {sub.tutorCount}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-brand-dark group-hover:text-brand-lightBlue transition-colors mb-1">
                    {sub.name}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {sub.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100">
                  <Link
                    to={`/find-tutors?subject=${encodeURIComponent(sub.name)}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-lightBlue hover:text-blue-700 transition-colors group-hover:translate-x-0.5"
                  >
                    <span>Explore Tutors</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. PREMIUM STATISTICS SECTION (REQUIREMENT 8) */}
      {/* ========================================================================= */}
      <section className="py-20 bg-brand-dark text-white relative overflow-hidden">
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293d_1px,transparent_1px),linear-gradient(to_bottom,#1f293d_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30" />
        
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            
            {/* Stat 1 */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 text-center backdrop-blur-md">
              <div className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-2">
                <AnimatedCounter end={500} suffix="+" />
              </div>
              <div className="text-xs sm:text-sm font-bold text-brand-orange uppercase tracking-wider">
                Qualified Tutors
              </div>
              <p className="text-xs text-slate-400 mt-1">Verified background & degrees</p>
            </div>

            {/* Stat 2 */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 text-center backdrop-blur-md">
              <div className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-2">
                <AnimatedCounter end={1000} suffix="+" />
              </div>
              <div className="text-xs sm:text-sm font-bold text-emerald-400 uppercase tracking-wider">
                Students Assisted
              </div>
              <p className="text-xs text-slate-400 mt-1">Across 12+ city zones</p>
            </div>

            {/* Stat 3 */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 text-center backdrop-blur-md">
              <div className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-2">
                <AnimatedCounter end={50} suffix="+" />
              </div>
              <div className="text-xs sm:text-sm font-bold text-brand-lightBlue uppercase tracking-wider">
                Subjects & Exams
              </div>
              <p className="text-xs text-slate-400 mt-1">K-12, JEE, NEET & Doubts</p>
            </div>

            {/* Stat 4 */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 text-center backdrop-blur-md">
              <div className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-2">
                100%
              </div>
              <div className="text-xs sm:text-sm font-bold text-amber-400 uppercase tracking-wider">
                Zero Risk Demos
              </div>
              <p className="text-xs text-slate-400 mt-1">Pay only if satisfied</p>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. SOCIAL PROOF & TESTIMONIALS (REQUIREMENT 9) */}
      {/* ========================================================================= */}
      <section className="section-padding bg-white relative">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 uppercase tracking-wider mb-2">
              <Star className="w-4 h-4 fill-emerald-500 text-emerald-500" />
              <span>Real Student Stories</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight">
              Trusted by Parents & Students
            </h2>
            <p className="text-slate-600 text-base mt-2">
              Hear directly from families whose academic performance was transformed with Paradox tutors.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {TESTIMONIALS.map((t, idx) => (
              <div
                key={t.id}
                className={`bg-brand-gray/60 rounded-3xl p-8 border transition-all duration-300 flex flex-col justify-between ${
                  idx === 0
                    ? 'border-brand-lightBlue/50 bg-blue-50/20 shadow-soft-lg ring-1 ring-brand-lightBlue/20'
                    : 'border-slate-200/80 shadow-soft'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-[11px] font-semibold text-slate-500 bg-white px-2.5 py-0.5 rounded-full border border-slate-200">
                      {t.subject}
                    </span>
                  </div>

                  <h3 className="font-bold text-base text-brand-dark mb-3">
                    "{t.title}"
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic">
                    "{t.content}"
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-200/60 flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shadow-sm ${t.avatarBg}`}>
                    {t.avatar}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-brand-dark flex items-center gap-1.5">
                      {t.name}
                      {t.verified && <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />}
                    </h4>
                    <p className="text-[11px] text-slate-500 font-medium">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. PREMIUM CALL-TO-ACTION SECTIONS (REQUIREMENT 11) */}
      {/* ========================================================================= */}
      <section className="section-padding bg-slate-50 relative overflow-hidden">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            
            {/* CTA 1: For Students / Parents */}
            <div className="bg-gradient-to-br from-brand-blue to-indigo-900 rounded-3xl p-8 sm:p-12 text-white shadow-soft-xl relative overflow-hidden flex flex-col justify-between group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-lightBlue/20 rounded-full blur-2xl pointer-events-none" />
              <div className="relative z-10 space-y-4">
                <span className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-brand-orange bg-white/10 px-3 py-1 rounded-full">
                  For Students & Parents
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  Ready to Find the Right Tutor?
                </h3>
                <p className="text-slate-200 text-sm sm:text-base leading-relaxed max-w-md">
                  Tell us what you need and discover verified educators matching your specific learning goals, syllabus, and budget.
                </p>
              </div>

              <div className="relative z-10 pt-8 mt-6">
                <Button
                  onClick={() => navigate('/find-tutor')}
                  className="bg-brand-orange hover:bg-orange-600 text-white font-bold py-3 px-7 rounded-2xl shadow-soft"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                >
                  Find Your Tutor
                </Button>
              </div>
            </div>

            {/* CTA 2: For Tutors / Teachers */}
            <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-soft-xl flex flex-col justify-between hover:border-slate-300 transition-all">
              <div className="space-y-4">
                <span className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-brand-lightBlue bg-blue-50 px-3 py-1 rounded-full">
                  Join Our Faculty
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-dark tracking-tight">
                  Share Your Knowledge. Teach Students.
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-md">
                  Join Paradox Consultancy Services as a verified tutor. Connect with earnest students in your neighborhood and grow your tutoring career.
                </p>
              </div>

              <div className="pt-8 mt-6">
                <Button
                  variant="secondary"
                  onClick={() => navigate('/become-tutor')}
                  className="border-slate-300 hover:border-brand-dark text-brand-dark font-bold py-3 px-7 rounded-2xl"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                >
                  Become a Tutor
                </Button>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
