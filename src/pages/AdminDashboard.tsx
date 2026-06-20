import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { Shield, Lock, Search, RefreshCw, Settings, Clock } from 'lucide-react';

const AdminDashboard: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState('');

  const [enquiries, setEnquiries] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [dbError, setDbError] = useState('');

  // Auto-logout state
  const [showSettings, setShowSettings] = useState(false);
  const [autoLogoutEnabled, setAutoLogoutEnabled] = useState<boolean>(() => {
    return localStorage.getItem('admin_auto_logout_enabled') === 'true';
  });
  const [autoLogoutMode, setAutoLogoutMode] = useState<'inactivity' | 'specific_time'>(() => {
    return (localStorage.getItem('admin_auto_logout_mode') as 'inactivity' | 'specific_time') || 'inactivity';
  });
  const [inactivityDuration, setInactivityDuration] = useState<number>(() => {
    const val = localStorage.getItem('admin_inactivity_duration');
    return val ? parseInt(val, 10) : 30; // Default 30 min
  });
  const [specificTime, setSpecificTime] = useState<string>(() => {
    return localStorage.getItem('admin_specific_logout_time') || '18:00'; // Default 6:00 PM
  });
  const [timeLeft, setTimeLeft] = useState<number>(inactivityDuration * 60);
  const [logoutReason, setLogoutReason] = useState<string | null>(null);

  // Authentication Handler
  useEffect(() => {
    // Check for auto-logout reason on mount
    const reason = localStorage.getItem('admin_logout_reason');
    if (reason) {
      setLogoutReason(reason);
      localStorage.removeItem('admin_logout_reason');
    }

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

  // Persist settings to localStorage
  useEffect(() => {
    localStorage.setItem('admin_auto_logout_enabled', String(autoLogoutEnabled));
  }, [autoLogoutEnabled]);

  useEffect(() => {
    localStorage.setItem('admin_auto_logout_mode', autoLogoutMode);
  }, [autoLogoutMode]);

  useEffect(() => {
    localStorage.setItem('admin_inactivity_duration', String(inactivityDuration));
    if (autoLogoutMode === 'inactivity') {
      setTimeLeft(inactivityDuration * 60);
    }
  }, [inactivityDuration, autoLogoutMode]);

  useEffect(() => {
    localStorage.setItem('admin_specific_logout_time', specificTime);
  }, [specificTime]);

  // Inactivity Timer logic
  useEffect(() => {
    if (!isAuthenticated || !autoLogoutEnabled || autoLogoutMode !== 'inactivity') {
      return;
    }

    // Reset timer on user activity
    const resetTimer = () => {
      setTimeLeft(inactivityDuration * 60);
    };

    const activityEvents = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart'];
    const registerEvents = () => {
      activityEvents.forEach((event) => {
        window.addEventListener(event, resetTimer);
      });
    };

    const unregisterEvents = () => {
      activityEvents.forEach((event) => {
        window.removeEventListener(event, resetTimer);
      });
    };

    registerEvents();

    // Start timer interval
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          // Trigger logout
          localStorage.setItem('admin_logout_reason', 'inactivity');
          handleSignOut();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      clearInterval(timer);
      unregisterEvents();
    };
  }, [isAuthenticated, autoLogoutEnabled, autoLogoutMode, inactivityDuration]);

  // Specific Time logout logic
  useEffect(() => {
    if (!isAuthenticated || !autoLogoutEnabled || autoLogoutMode !== 'specific_time') {
      return;
    }

    const checkTime = () => {
      const now = new Date();
      const currentHours = now.getHours().toString().padStart(2, '0');
      const currentMinutes = now.getMinutes().toString().padStart(2, '0');
      const currentTimeString = `${currentHours}:${currentMinutes}`;

      if (currentTimeString === specificTime) {
        localStorage.setItem('admin_logout_reason', 'scheduled');
        handleSignOut();
      }
    };

    // Check immediately and then every 10 seconds
    checkTime();
    const interval = setInterval(checkTime, 10000);

    return () => clearInterval(interval);
  }, [isAuthenticated, autoLogoutEnabled, autoLogoutMode, specificTime]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setAuthError('');
    setLogoutReason(null); // Clear logout message on new attempt
    
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
              {logoutReason && (
                <div className="rounded-md bg-amber-50 p-4 border border-amber-100">
                  <div className="flex">
                    <Clock className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-amber-800">
                        {logoutReason === 'inactivity'
                          ? 'You have been logged out due to inactivity.'
                          : logoutReason === 'scheduled'
                          ? 'You have been logged out at your scheduled auto-logout time.'
                          : 'You have been logged out.'}
                      </h3>
                    </div>
                  </div>
                </div>
              )}

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
          <div className="mt-4 sm:mt-0 flex flex-wrap gap-3">
            <button
              onClick={() => setShowSettings(!showSettings)}
              className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium shadow-sm border transition-colors focus:outline-none focus:ring-2 focus:ring-brand-blue ${
                showSettings
                  ? 'bg-brand-blue/10 border-brand-blue/30 text-brand-blue hover:bg-brand-blue/20'
                  : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50'
              }`}
            >
              <Settings className="w-4 h-4" />
              Auto-Logout Settings
            </button>
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

        {/* Settings Panel */}
        {showSettings && (
          <div className="mb-8 bg-white p-6 rounded-2xl shadow-sm border border-gray-150 transition-all duration-300">
            <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2 mb-4">
              <Clock className="w-5 h-5 text-brand-blue" />
              Configure Auto-Logout
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Toggle Column */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Enable Auto-Logout</label>
                <div className="flex items-center mt-2">
                  <button
                    type="button"
                    onClick={() => setAutoLogoutEnabled(!autoLogoutEnabled)}
                    className={`${
                      autoLogoutEnabled ? 'bg-brand-blue' : 'bg-gray-200'
                    } relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none`}
                  >
                    <span
                      className={`${
                        autoLogoutEnabled ? 'translate-x-5' : 'translate-x-0'
                      } pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out`}
                    />
                  </button>
                  <span className="ml-3 text-sm text-gray-600">
                    {autoLogoutEnabled ? 'Active' : 'Disabled'}
                  </span>
                </div>
              </div>

              {/* Mode Column */}
              {autoLogoutEnabled && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Logout Trigger</label>
                  <select
                    value={autoLogoutMode}
                    onChange={(e) => setAutoLogoutMode(e.target.value as 'inactivity' | 'specific_time')}
                    className="block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-brand-blue focus:outline-none focus:ring-brand-blue bg-white"
                  >
                    <option value="inactivity">Inactivity Timeout (Idle)</option>
                    <option value="specific_time">Specific Clock Time</option>
                  </select>
                </div>
              )}

              {/* Options Column */}
              {autoLogoutEnabled && (
                <div>
                  {autoLogoutMode === 'inactivity' ? (
                    <>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Inactivity Duration</label>
                      <select
                        value={inactivityDuration}
                        onChange={(e) => setInactivityDuration(Number(e.target.value))}
                        className="block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-brand-blue focus:outline-none focus:ring-brand-blue bg-white"
                      >
                        <option value={1}>1 Minute (Testing)</option>
                        <option value={5}>5 Minutes</option>
                        <option value={15}>15 Minutes</option>
                        <option value={30}>30 Minutes</option>
                        <option value={60}>1 Hour</option>
                      </select>
                    </>
                  ) : (
                    <>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Logout Time</label>
                      <input
                        type="time"
                        value={specificTime}
                        onChange={(e) => setSpecificTime(e.target.value)}
                        className="block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-brand-blue focus:outline-none focus:ring-brand-blue"
                      />
                    </>
                  )}
                </div>
              )}
            </div>
            
            {/* Status / Countdown Indicator */}
            {autoLogoutEnabled && (
              <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-ping"></div>
                  <span>
                    {autoLogoutMode === 'inactivity'
                      ? `Auto-logout after ${inactivityDuration}m of inactivity.`
                      : `Auto-logout scheduled at ${specificTime} daily.`}
                  </span>
                </div>
                {autoLogoutMode === 'inactivity' && (
                  <div>
                    Remaining time: <span className="font-semibold text-gray-700">{formatTime(timeLeft)}</span>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

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
