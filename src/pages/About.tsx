import React from 'react';
import { Target, Heart, Award, Shield, CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <div className="bg-brand-dark text-white py-20 px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue rounded-full filter blur-[100px] opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-orange rounded-full filter blur-[100px] opacity-20"></div>
        <div className="container-custom relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Empowering Education in India</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Paradox Tuition Services is India's premier platform connecting ambitious students with dedicated, expert home tutors. Our mission is to make quality education accessible, personalized, and impactful.
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-center md:text-left">
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center md:items-start group hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-blue transition-colors">
                <Target className="w-8 h-8 text-brand-blue group-hover:text-white transition-colors" />
              </div>
              <h2 className="text-3xl font-bold text-brand-dark mb-4">Our Mission</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                To transform the way students learn by providing highly personalized, 1-to-1 teaching environments. We strive to unlock every student's full potential through expert guidance and mentorship.
              </p>
            </div>
            
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center md:items-start group hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-orange transition-colors">
                <Heart className="w-8 h-8 text-brand-orange group-hover:text-white transition-colors" />
              </div>
              <h2 className="text-3xl font-bold text-brand-dark mb-4">Our Vision</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                To become the most trusted and widespread educational network in India, ensuring that no student is left behind due to a lack of quality teaching resources in their locality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-brand-dark mb-4">Why Choose Us?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: "Uncompromising Quality", desc: "We implement a rigorous 5-step screening process for all tutors, ensuring only the top 5% make it to our platform." },
              { icon: Award, title: "Proven Track Record", desc: "Over 10,000+ success stories across India with students showing a minimum 30% improvement in grades." },
              { icon: CheckCircle2, title: "Perfect Tutor Matching", desc: "Our advanced algorithm and educational counselors ensure you get a tutor whose teaching style matches the student's learning needs." }
            ].map((value, idx) => (
              <div key={idx} className="text-center px-4">
                <div className="w-20 h-20 mx-auto bg-gray-50 rounded-full flex items-center justify-center mb-6 border border-gray-100">
                  <value.icon className="w-10 h-10 text-brand-blue" />
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-brand-blue text-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-blue-800">
            <div>
              <div className="text-4xl font-extrabold mb-2 text-brand-orange">2500+</div>
              <div className="text-blue-200">Verified Tutors</div>
            </div>
            <div>
              <div className="text-4xl font-extrabold mb-2 text-brand-orange">500+</div>
              <div className="text-blue-200">Happy Students</div>
            </div>
            <div>
              <div className="text-4xl font-extrabold mb-2 text-brand-orange">5+</div>
              <div className="text-blue-200">Cities Covered</div>
            </div>
            <div>
              <div className="text-4xl font-extrabold mb-2 text-brand-orange">4.5/5</div>
              <div className="text-blue-200">Average Rating</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
