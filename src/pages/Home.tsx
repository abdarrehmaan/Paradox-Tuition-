import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MapPin, BookOpen, UserCheck, ShieldCheck, GraduationCap, Star, ArrowRight } from 'lucide-react';
import Button from '../components/ui/Button';
import { Card, CardContent } from '../components/ui/Card';

import Book3D from '../components/3d/Book3D';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-brand-gray">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50/80 via-indigo-50/40 to-pink-50/60 overflow-hidden border-b border-brand-lightBlue/10">

        
        {/* Colorful Abstract Backgrounds */}
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-brand-lightBlue/20 rounded-full mix-blend-multiply filter blur-[120px] opacity-70 pointer-events-none"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-brand-pink/20 rounded-full mix-blend-multiply filter blur-[100px] opacity-60 pointer-events-none"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] pointer-events-none"></div>
        
        <div className="container-custom relative z-10 pt-24 pb-32 lg:pt-32 lg:pb-40">
          {/* Two column layout: text left, 3D book right */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-4 xl:gap-8">

            {/* Left: text content */}
            <div className="flex-1 text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-orange to-amber-500 text-white font-bold px-5 py-2 rounded-full mb-8 shadow-md hover:shadow-lg transition-all animate-fade-in hover:-translate-y-0.5">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                100% OFF On Registration Fees (Limited Time Offer)
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-6xl font-extrabold text-brand-dark leading-[1.1] mb-6 tracking-tight animate-slide-up">
                Achieve More With A{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-lightBlue via-blue-600 to-brand-pink relative inline-block">
                  Dedicated Home Tutor
                  <svg
                    className="absolute w-full h-[10px] -bottom-1 left-0 text-brand-pink/40"
                    viewBox="0 0 200 10"
                    preserveAspectRatio="none"
                  >
                    <path d="M0 7 Q 50 0 100 7 Q 150 14 200 7" stroke="currentColor" strokeWidth="3" fill="transparent" strokeLinecap="round"/>
                  </svg>
                </span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 mb-10 font-medium leading-relaxed animate-slide-up" style={{ animationDelay: '100ms' }}>
                Verified teachers from Nursery to 12th for all subjects and competitive exams. Excel in your studies with personalized 1-to-1 attention at your doorstep.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-16 animate-slide-up" style={{ animationDelay: '200ms' }}>
                <Button size="lg" onClick={() => navigate('/find-tutor')} className="bg-gradient-to-r from-brand-lightBlue to-blue-600 border-none shadow-blue-500/30 shadow-lg text-lg px-8" rightIcon={<ArrowRight className="w-5 h-5" />}>
                  Book Free Demo Class
                </Button>
                <Button variant="secondary" size="lg" onClick={() => navigate('/become-tutor')} className="text-lg px-8 hover:border-brand-pink/30 hover:text-brand-pink transition-colors">
                  Become a Tutor
                </Button>
              </div>

            </div>

            {/* Right: 3D Book — vertically centred to the text block */}
            <div
              className="relative flex-shrink-0 flex items-center justify-center animate-fade-in self-center mt-8 lg:mt-0"
              style={{ width: '360px', height: '440px', animationDelay: '400ms' }}
            >
              {/* Ambient glow behind book */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'radial-gradient(ellipse at center, rgba(99,102,241,0.20) 0%, rgba(244,63,94,0.10) 60%, transparent 100%)',
                borderRadius: '50%',
                filter: 'blur(28px)',
                pointerEvents: 'none',
              }} />
              <Book3D />
            </div>

          </div>
        </div>

      </section>



      {/* Features Section */}
      <section className="section-padding bg-gradient-to-b from-brand-gray to-blue-50/30 relative">
        <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-brand-lightBlue/5 to-transparent pointer-events-none"></div>
        <div className="container-custom relative z-10">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4 tracking-tight">
              Why Choose <span className="text-brand-lightBlue">Paradox?</span>
            </h2>
            <p className="text-slate-600 text-lg">We provide the highest quality educational support to help students reach their full academic potential safely and efficiently.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: MapPin, color: 'text-brand-lightBlue', bg: 'bg-blue-50', border: 'group-hover:border-brand-lightBlue', title: "Expert Local Tutors", desc: "We provide highly vetted, expert tutors across Prayagraj, Lucknow, and Kanpur." },
              { icon: BookOpen, color: 'text-brand-pink', bg: 'bg-pink-50', border: 'group-hover:border-brand-pink', title: "Flexible Learning", desc: "Online and Offline classes available with absolutely ZERO registration fees." },
              { icon: UserCheck, color: 'text-brand-orange', bg: 'bg-orange-50', border: 'group-hover:border-brand-orange', title: "Female Tutors", desc: "Dedicated and qualified female tutors are available upon request for your peace of mind." },
              { icon: ShieldCheck, color: 'text-blue-600', bg: 'bg-blue-100', border: 'group-hover:border-blue-600', title: "Specialized Guidance", desc: "Expert MBBS/IITian tutors exclusively available for NEET & JEE aspirants." },
            ].map((feature, idx) => (
              <Card key={idx} hoverable className={`group border-transparent transition-all duration-300 ${feature.border} hover:shadow-lg`}>
                <CardContent className="p-8 relative overflow-hidden">
                  <div className={`absolute -right-6 -top-6 w-24 h-24 rounded-full opacity-20 transition-transform duration-500 group-hover:scale-150 ${feature.bg}`}></div>
                  <div className={`relative z-10 w-14 h-14 ${feature.bg} rounded-2xl flex items-center justify-center mb-6 shadow-sm transition-transform group-hover:-translate-y-1`}>
                    <feature.icon className={`h-7 w-7 ${feature.color}`} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-brand-dark relative z-10">{feature.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed relative z-10">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="section-padding bg-gradient-to-b from-blue-50/30 to-white relative">
        <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-lightBlue/20 to-transparent"></div>
        <div className="container-custom">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4 tracking-tight">How It Works</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">Getting started with Paradox Tuition Services is simple, fast, and completely secure.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative max-w-5xl mx-auto">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-10 left-[16%] right-[16%] h-1 bg-gradient-to-r from-brand-lightBlue/20 via-brand-pink/20 to-brand-orange/20 rounded-full"></div>
            
            {[
              { step: "1", color: "from-brand-lightBlue to-blue-500", title: "Search for Tutors", desc: "Use our smart search to find tutors based on subject, class, and your location." },
              { step: "2", color: "from-brand-pink to-rose-400", title: "Book a Demo", desc: "Connect with the tutor and schedule a free demo class at your convenience." },
              { step: "3", color: "from-brand-orange to-amber-500", title: "Start Learning", desc: "If satisfied, finalize the schedule and start achieving academic excellence." }
            ].map((item, idx) => (
              <div key={idx} className="relative flex flex-col items-center text-center group">
                <div className="w-20 h-20 bg-white border border-gray-100 rounded-full flex items-center justify-center mb-8 shadow-md z-10 hover:shadow-xl transition-all duration-300 relative overflow-hidden group-hover:-translate-y-2 group-hover:shadow-brand-lightBlue/20">
                  <div className={`absolute inset-0 bg-gradient-to-br opacity-10 ${item.color} transition-opacity duration-300 group-hover:opacity-20`}></div>
                  <span className={`text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-br ${item.color} relative z-10 drop-shadow-sm transition-all duration-500 group-hover:scale-150 group-hover:rotate-12`}>{item.step}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-brand-dark">{item.title}</h3>
                <p className="text-slate-600 text-sm px-4 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Subjects & Cities Section */}
      <section className="section-padding bg-gradient-to-br from-orange-50/40 via-brand-gray to-pink-50/30 relative overflow-hidden">
         <div className="absolute left-[-10%] bottom-[-20%] w-[500px] h-[500px] bg-brand-lightBlue/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Subjects */}
            <div className="bg-white p-8 rounded-3xl shadow-soft border border-gray-100/50">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-brand-orange/10 rounded-xl">
                  <GraduationCap className="h-7 w-7 text-brand-orange" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-brand-dark tracking-tight">Popular Subjects</h2>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {['All Subjects+Doubts', 'Mathematics', 'Science', 'English', 'Physics', 'Chemistry', 'Biology', 'NEET', 'JEE', 'ICSE', 'CBSE'].map((sub, idx) => (
                  <Link key={idx} to={`/find-tutors?subject=${sub}`} className="bg-gray-50 px-4 py-2 rounded-xl border border-gray-100 text-sm text-slate-700 font-medium hover:border-brand-orange hover:bg-brand-orange/5 hover:text-brand-orange transition-all duration-200">
                    {sub}
                  </Link>
                ))}
              </div>
            </div>

            {/* Cities */}
            <div className="bg-white p-8 rounded-3xl shadow-soft border border-gray-100/50">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-brand-pink/10 rounded-xl">
                  <MapPin className="h-7 w-7 text-brand-pink" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-brand-dark tracking-tight">Cities We Cover</h2>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {['Prayagraj', 'Lucknow', 'Kanpur', 'Delhi NCR', 'Mumbai', 'Bangalore'].map((city, idx) => (
                  <div key={idx} className="bg-gray-50 p-4 rounded-xl border border-gray-100 flex items-center justify-between group hover:border-brand-pink hover:bg-brand-pink/5 hover:shadow-sm transition-all duration-200 cursor-pointer">
                    <span className="text-sm font-medium text-slate-700 group-hover:text-brand-pink transition-colors">{city}</span>
                    <MapPin className="h-4 w-4 text-brand-pink/30 group-hover:text-brand-pink transition-colors" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-gradient-to-t from-blue-50/50 to-pink-50/30 relative">
        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4 tracking-tight">Community <span className="text-brand-pink">Love</span></h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">Don't just take our word for it. See what our parents and students have to say.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Rahul Sharma", role: "Parent, Delhi", initialColor: "bg-blue-100 text-brand-lightBlue", text: "Finding a reliable math tutor was a struggle until we found Paradox. My son's grades have improved significantly in just 2 months." },
              { name: "Priya Singh", role: "Student, Class 12", initialColor: "bg-pink-100 text-brand-pink", text: "The physics tutor I found here explained concepts so easily. I cracked my board exams with 95%! Highly thankful to the team." },
              { name: "Amit Verma", role: "Parent, Lucknow", initialColor: "bg-orange-100 text-brand-orange", text: "Very professional service. The demo class helped us make the right choice without any upfront payment. Highly recommended." }
            ].map((testimonial, idx) => (
              <Card key={idx} className="bg-white border-gray-100 shadow-md hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 text-amber-400 fill-current" />)}
                  </div>
                  <p className="text-slate-700 text-[15px] mb-8 leading-relaxed italic">"{testimonial.text}"</p>
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-sm border border-white/50 ${testimonial.initialColor}`}>
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-dark">{testimonial.name}</h4>
                      <p className="text-slate-500 text-xs font-medium mt-0.5 uppercase tracking-wide">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-brand-dark relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-gradient-to-tr from-brand-lightBlue/20 via-transparent to-brand-pink/20 opacity-80"></div>
        <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        
        <div className="container-custom relative z-10 max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight text-balance">
            Ready to Start <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-yellow-400">Learning?</span>
          </h2>
          <p className="text-lg text-slate-300 mb-10 max-w-xl mx-auto font-medium">Join thousands of students who are achieving their academic goals with our verified and highly qualified home tutors.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" onClick={() => navigate('/find-tutor')} className="bg-brand-orange hover:bg-orange-500 text-white border-none shadow-orange-500/30 shadow-lg text-lg px-10 py-4" rightIcon={<ArrowRight className="w-5 h-5" />}>
              Book Your Free Demo
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
