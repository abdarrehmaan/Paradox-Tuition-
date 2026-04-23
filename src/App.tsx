import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import WhatsAppButton from './components/common/WhatsAppButton';
import ScrollToTop from './components/common/ScrollToTop';

// Lazy-loaded Pages
const Home = lazy(() => import('./pages/Home'));
const FindTutors = lazy(() => import('./pages/FindTutors'));
const BecomeTutor = lazy(() => import('./pages/BecomeTutor'));
const FindTutor = lazy(() => import('./pages/FindTutor'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const StudentsList = lazy(() => import('./pages/StudentsList'));
const AddStudent = lazy(() => import('./pages/AddStudent'));
const DonateBook = lazy(() => import('./pages/DonateBook'));
const Terms = lazy(() => import('./pages/Terms'));
const Privacy = lazy(() => import('./pages/Privacy'));
const AdminDashboard = lazy(() => import('./pages/AdminDashboard'));

// A simple loading fallback
const PageLoader = () => (
  <div className="flex justify-center items-center h-[60vh]">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-blue"></div>
  </div>
);

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow pt-[72px]"> {/* pt-[72px] to account for fixed navbar */}
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/find-tutors" element={<FindTutors />} />
            <Route path="/become-tutor" element={<BecomeTutor />} />
            <Route path="/find-tutor" element={<FindTutor />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/donate-book" element={<DonateBook />} />
            {/* Test route for Supabase Component */}
            <Route path="/students" element={<StudentsList />} />
            <Route path="/add-student" element={<AddStudent />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/admin" element={<AdminDashboard />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
