import React, { useState } from 'react';
import { MapPin, BookOpen, Clock, ShieldCheck, Star } from 'lucide-react';
import DemoRequestModal from './DemoRequestModal';

export interface Tutor {
  id: string;
  name: string;
  photoUrl: string;
  experience: number;
  subjects: string[];
  location: string;
  fees: string;
  mode: string;
  rating: number;
}

interface TutorCardProps {
  tutor: Tutor;
}

const TutorCard: React.FC<TutorCardProps> = ({ tutor }) => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col md:flex-row gap-6 p-6">
      {/* Photo */}
      <div className="flex-shrink-0 relative w-24 h-24 md:w-32 md:h-32 mx-auto md:mx-0">
        <img 
          src={tutor.photoUrl} 
          alt={tutor.name} 
          className="w-full h-full object-cover rounded-full border-4 border-blue-50 shadow-sm"
        />
        <div className="absolute -bottom-2 -right-2 bg-green-500 text-white p-1.5 rounded-full border-2 border-white" title="Verified Tutor">
          <ShieldCheck className="w-4 h-4" />
        </div>
      </div>

      {/* Details */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-2 mb-2">
            <div>
              <h3 className="text-xl font-bold text-brand-dark flex items-center gap-2">
                {tutor.name}
              </h3>
              <div className="flex items-center gap-3 text-sm text-gray-500 mt-1">
                <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {tutor.location}</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {tutor.experience} Yrs Exp</span>
              </div>
            </div>
            <div className="flex items-center gap-1 bg-yellow-50 text-yellow-700 px-2.5 py-1 rounded-full text-sm font-semibold">
              <Star className="w-4 h-4 fill-current text-yellow-500" />
              {tutor.rating}
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {tutor.subjects.map((sub, idx) => (
              <span key={idx} className="bg-blue-50 text-brand-blue text-xs font-semibold px-3 py-1 rounded-full border border-blue-100 flex items-center gap-1">
                <BookOpen className="w-3 h-3" /> {sub}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-brand-dark">
            <span className="text-sm text-gray-500 block">Estimated Fees</span>
            <span className="font-bold text-lg">{tutor.fees} <span className="text-sm font-normal text-gray-500">/hr</span></span>
            <span className="text-xs text-gray-400 ml-2 block sm:inline">({tutor.mode})</span>
          </div>
          <button 
            onClick={() => setIsDemoModalOpen(true)}
            className="w-full sm:w-auto btn-primary px-6 py-2"
          >
            Request Demo
          </button>
        </div>
      </div>

      <DemoRequestModal 
        isOpen={isDemoModalOpen} 
        onClose={() => setIsDemoModalOpen(false)} 
        tutorName={tutor.name} 
      />
    </div>
  );
};

export default TutorCard;
