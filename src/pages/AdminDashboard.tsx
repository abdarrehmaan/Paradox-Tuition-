import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { Shield, Lock, Search, RefreshCw } from 'lucide-react';

const AdminDashboard: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState('');

  const [enquiries, setEnquiries] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [dbError, setDbError] = useState('');

  // Authentication Handler
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        setIsAuthenticated(true);
        fetchEnquiries();
      }
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
        setEnquiries([]);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setAuthError('');
    
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setAuthError(error.message);
    } else {
      setIsAuthenticated(true);
      fetchEnquiries();
    }
    setLoading(false);
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
  };

  // Data Fetching
  const fetchEnquiries = async () => {
    setLoading(true);
    setDbError('');
    try {
      const { data, error } = await supabase
        .from('student_enquiries')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setEnquiries(data || []);
    } catch (err: any) {
      console.error('Error fetching enquiries:', err);
      setDbError(err.message || 'Failed to load enquiries.');
    } finally {
      setLoading(false);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-[calc(100vh-72px)] bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-blue/10">
            <Shield className="h-8 w-8 text-brand-blue" />
          </div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Admin Access Only
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Secure login for Paradox Tuition administrators
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow-xl shadow-gray-200/50 sm:rounded-2xl sm:px-10 border border-gray-100">
            <form className="space-y-6" onSubmit={handleLogin}>
              {authError && (
                <div className="rounded-md bg-red-50 p-4 border border-red-100">
                  <div className="flex">
                    <Lock className="h-5 w-5 text-red-400" />
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-red-800">{authError}</h3>
                    </div>
                  </div>
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700">Admin Email</label>
                <div className="mt-1">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full appearance-none rounded-lg border border-gray-300 px-4 py-3 placeholder-gray-400 shadow-sm focus:border-brand-blue focus:outline-none focus:ring-brand-blue sm:text-sm transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Password</label>
                <div className="mt-1">
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full appearance-none rounded-lg border border-gray-300 px-4 py-3 placeholder-gray-400 shadow-sm focus:border-brand-blue focus:outline-none focus:ring-brand-blue sm:text-sm transition-colors"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-lg btn-primary px-4 py-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2"
                >
                  Authenticate
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="sm:flex sm:items-center sm:justify-between mb-8 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
              <Shield className="w-7 h-7 text-brand-blue" />
              New Student Enquiries
            </h1>
            <p className="mt-2 text-sm text-gray-600">
              A list of all new student requests looking for tutors.
            </p>
          </div>
          <div className="mt-4 sm:mt-0 flex gap-4">
            <button
              onClick={fetchEnquiries}
              disabled={loading}
              className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm border border-gray-200 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-brand-blue"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
              Refresh Data
            </button>
            <button
              onClick={handleSignOut}
              className="inline-flex items-center gap-2 rounded-lg bg-red-50 px-4 py-2 text-sm font-medium text-red-700 shadow-sm border border-red-100 hover:bg-red-100 focus:outline-none"
            >
              <Lock className="w-4 h-4" />
              Sign Out
            </button>
          </div>
        </div>

        {/* Data Container */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          {dbError && (
            <div className="p-4 bg-red-50 border-b border-red-100 text-red-700 text-sm">
              {dbError}
            </div>
          )}

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="whitespace-nowrap py-4 pl-6 pr-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                    Date
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-4 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                    Student Details
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-4 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                    Requirements
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-4 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                    Preferences
                  </th>
                  <th scope="col" className="whitespace-nowrap px-6 py-4 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                    Notes
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {enquiries.length === 0 && !loading ? (
                  <tr>
                    <td colSpan={5} className="py-12 text-center">
                      <Search className="mx-auto h-12 w-12 text-gray-300 mb-3" />
                      <p className="text-gray-500 text-lg">No student enquiries found</p>
                    </td>
                  </tr>
                ) : (
                  enquiries.map((enquiry) => (
                    <tr key={enquiry.id || enquiry.created_at} className="hover:bg-gray-50/50 transition-colors">
                      <td className="whitespace-nowrap py-4 pl-6 pr-3 text-sm text-gray-500">
                        {new Date(enquiry.created_at).toLocaleDateString()}
                      </td>
                      <td className="px-3 py-4 text-sm">
                        <div className="font-medium text-gray-900">{enquiry.student_name}</div>
                        <div className="text-gray-500">{enquiry.phone}</div>
                        <div className="text-gray-500">{enquiry.email}</div>
                        <div className="text-gray-500 mt-1">{enquiry.city}</div>
                      </td>
                      <td className="px-3 py-4 text-sm">
                        <div className="text-gray-900"><span className="font-medium">Class:</span> {enquiry.class_grade}</div>
                        <div className="text-gray-900 mt-1"><span className="font-medium">Subject:</span> {enquiry.subjects}</div>
                      </td>
                      <td className="px-3 py-4 text-sm">
                        <span className="inline-flex items-center rounded-full bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 border border-blue-100 mb-1">
                          {enquiry.mode}
                        </span>
                        <div className="text-gray-500 text-xs mt-1">Budget: {enquiry.budget || 'N/A'}</div>
                        <div className="text-gray-500 text-xs">Tutor: {enquiry.gender_preference || 'Any'}</div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500 max-w-xs truncate" title={enquiry.additional_notes}>
                        {enquiry.additional_notes || <span className="text-gray-300 italic">No additional notes</span>}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
