import React, { useState, useEffect } from 'react';
import { Filter, Search } from 'lucide-react';
import TutorCard from '../components/tutors/TutorCard';
import type { Tutor } from '../components/tutors/TutorCard';
import { supabase } from '../lib/supabase';

const FindTutors: React.FC = () => {
  const [tutors, setTutors] = useState<Tutor[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    const fetchTutors = async () => {
      try {
        setLoading(true);
        // Supabase returns an array of objects that happen to match our Tutor interface
        const { data, error: dbError } = await supabase.from('tutors').select('*');
        if (dbError) throw dbError;
        if (data) setTutors(data as Tutor[]);
      } catch (err: any) {
        console.error("Error fetching tutors:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    
    fetchTutors();
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="container-custom">
        {/* Page Header */}
        <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-brand-dark tracking-tight">Find Your Perfect Tutor</h1>
            <p className="text-gray-600 mt-1">Browse {loading ? '...' : tutors.length}+ verified home tutors across India</p>
            {error && <p className="text-red-500 mt-2 text-sm">{error}</p>}
          </div>
          <button 
            className="md:hidden flex items-center justify-center gap-2 btn-secondary px-4 py-2"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          >
            <Filter className="w-5 h-5" /> Filters
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside className={`lg:w-1/4 ${isFilterOpen ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 sticky top-24">
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-gray-100">
                <Filter className="w-5 h-5 text-brand-blue" />
                <h2 className="font-bold text-lg text-brand-dark">Filters</h2>
              </div>

              {/* Class Filter */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Class</label>
                <select className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50 text-gray-700 focus:bg-white focus:ring-2 focus:ring-brand-blue/20 outline-none transition-colors">
                  <option>All Classes</option>
                  <option>Class 1 - 5</option>
                  <option>Class 6 - 8</option>
                  <option>Class 9 - 10</option>
                  <option>Class 11 - 12</option>
                </select>
              </div>

              {/* Subject Filter */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Subject</label>
                <select className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50 text-gray-700 focus:bg-white focus:ring-2 focus:ring-brand-blue/20 outline-none transition-colors">
                  <option>Any Subject</option>
                  <option>Mathematics</option>
                  <option>Science</option>
                  <option>English</option>
                  <option>Physics</option>
                  <option>Chemistry</option>
                  <option>Accounts</option>
                </select>
              </div>

              {/* Location */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Location</label>
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <input 
                    type="text" 
                    placeholder="Search city/area..." 
                    className="w-full pl-9 pr-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50 text-gray-700 focus:bg-white focus:ring-2 focus:ring-brand-blue/20 outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Teaching Mode */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-3">Teaching Mode</label>
                <div className="space-y-2 text-sm text-gray-600">
                  <label className="flex items-center gap-2 cursor-pointer hover:text-brand-blue transition-colors">
                    <input type="checkbox" className="rounded text-brand-blue focus:ring-brand-blue/20" /> Home Tuition (Offline)
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer hover:text-brand-blue transition-colors">
                    <input type="checkbox" className="rounded text-brand-blue focus:ring-brand-blue/20" /> Online Learning
                  </label>
                </div>
              </div>

              <button className="w-full btn-primary py-2.5 text-sm mt-2">
                Apply Filters
              </button>
            </div>
          </aside>

          {/* Tutor Cards List */}
          <div className="lg:w-3/4 flex flex-col gap-6">
            {tutors.map(tutor => (
              <TutorCard key={tutor.id} tutor={tutor} />
            ))}

            {/* Pagination Placeholder */}
            <div className="mt-8 flex justify-center pb-8">
              <nav className="inline-flex rounded-md shadow-sm">
                <a href="#" className="py-2 px-4 rounded-l-md border border-gray-200 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">Previous</a>
                <a href="#" className="py-2 px-4 border-t border-b border-gray-200 bg-brand-blue text-white text-sm font-medium">1</a>
                <a href="#" className="py-2 px-4 border-t border-b border-gray-200 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">2</a>
                <a href="#" className="py-2 px-4 border-t border-b border-gray-200 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">3</a>
                <a href="#" className="py-2 px-4 rounded-r-md border border-gray-200 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">Next</a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindTutors;
