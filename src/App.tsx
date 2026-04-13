import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import WhatsAppButton from './components/common/WhatsAppButton';
import ScrollToTop from './components/common/ScrollToTop';

// Placeholder Pages
import Home from './pages/Home';
import FindTutors from './pages/FindTutors';
import BecomeTutor from './pages/BecomeTutor';
import FindTutor from './pages/FindTutor';
import About from './pages/About';
import Contact from './pages/Contact';
import StudentsList from './pages/StudentsList'; // the new Supabase test page
import AddStudent from './pages/AddStudent';
import Login from './pages/Login';
import Signup from './pages/Signup';
import DonateBook from './pages/DonateBook';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow pt-[72px]"> {/* pt-[72px] to account for fixed navbar */}
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
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
