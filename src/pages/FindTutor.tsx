import React, { useState } from 'react';
import { 
  CheckCircle, 
  AlertCircle, 
  Sparkles, 
  ArrowRight, 
  ArrowLeft, 
  User, 
  Phone, 
  Mail, 
  MapPin, 
  Home, 
  Laptop, 
  FileText
} from 'lucide-react';
import { supabase } from '../lib/supabase';
import Button from '../components/ui/Button';
import FullTermsModal from '../components/common/FullTermsModal';

const QUICK_CLASSES = [
  'Class 1 - 5 (Primary)',
  'Class 6 - 8 (Middle)',
  'Class 9 (Secondary)',
  'Class 10 (CBSE/ICSE Boards)',
  'Class 11 (Science/Comm/Arts)',
  'Class 12 (Board Exams)',
  'JEE Mains & Advanced',
  'NEET Medical Prep',
  'College / Degree',
];

const QUICK_SUBJECTS = [
  'Mathematics',
  'Physics',
  'Chemistry',
  'Biology',
  'English',
  'Science (All)',
  'Accounts & Economics',
  'Computer Science',
  'All Subjects (Junior)',
];

const BUDGET_OPTIONS = [
  'Under ₹2,000 / month',
  '₹2,000 – ₹4,000 / month',
  '₹4,000 – ₹6,000 / month',
  '₹6,000 – ₹10,000 / month',
  'Above ₹10,000 / month',
  'Hourly Basis (₹300 - ₹800/hr)',
];

const FindTutor: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);

  const [formData, setFormData] = useState({
    student_name: '',
    phone: '',
    email: '',
    city: '',
    class_grade: '',
    subjects: '',
    mode: 'Home Tuition',
    budget: '',
    gender_preference: '',
    additional_notes: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleQuickSelect = (field: 'class_grade' | 'subjects' | 'budget', value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const validateStep = (stepNumber: number): boolean => {
    setError(null);
    if (stepNumber === 1) {
      if (!formData.student_name.trim()) {
        setError('Please enter the student or parent name.');
        return false;
      }
      if (!formData.phone.trim() || formData.phone.length < 10) {
        setError('Please enter a valid 10-digit phone number so our counselor can reach you.');
        return false;
      }
      if (!formData.class_grade.trim()) {
        setError('Please select or specify the class/grade.');
        return false;
      }
    }
    if (stepNumber === 2) {
      if (!formData.subjects.trim()) {
        setError('Please enter or select at least one subject needed.');
        return false;
      }
      if (!formData.mode) {
        setError('Please choose your preferred learning mode.');
        return false;
      }
    }
    if (stepNumber === 3) {
      if (!formData.city.trim()) {
        setError('Please enter your city and locality/area for accurate matching.');
        return false;
      }
    }
    return true;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, 4));
      window.scrollTo({ top: 120, behavior: 'smooth' });
    }
  };

  const prevStep = () => {
    setError(null);
    setCurrentStep(prev => Math.max(prev - 1, 1));
    window.scrollTo({ top: 120, behavior: 'smooth' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreedToTerms) {
      setError('Please agree to the terms & conditions before submitting.');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const { error: dbError } = await supabase.from('student_enquiries').insert([formData]);
      if (dbError) throw dbError;

      setIsSubmitted(true);
    } catch (err: any) {
      console.error('Error submitting enquiry:', err);
      setError(err.message || 'An error occurred while submitting your enquiry. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setCurrentStep(1);
    setFormData({
      student_name: '',
      phone: '',
      email: '',
      city: '',
      class_grade: '',
      subjects: '',
      mode: 'Home Tuition',
      budget: '',
      gender_preference: '',
      additional_notes: '',
    });
    setAgreedToTerms(false);
    setShowTermsModal(false);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-[85vh] flex flex-col items-center justify-center bg-brand-gray px-4 py-16">
        <div className="bg-white p-8 sm:p-12 rounded-3xl shadow-soft-xl text-center max-w-lg w-full border border-slate-200/80 space-y-6 animate-fade-in">
          <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
            <CheckCircle className="w-10 h-10" />
          </div>

          <div className="space-y-2">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full">
              <Sparkles className="w-3.5 h-3.5" /> Request Confirmed
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark">
              Enquiry Submitted!
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Thank you for reaching out to Paradox Tuition Services. Our academic coordinators will evaluate your requirements and contact you at <strong className="text-slate-900">{formData.phone}</strong> within 24 hours with suitable tutor profiles.
            </p>
          </div>

          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 text-left space-y-2 text-xs text-slate-600">
            <div className="flex justify-between">
              <span className="text-slate-400 font-medium">Student:</span>
              <span className="font-semibold text-slate-800">{formData.student_name}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400 font-medium">Class & Subject:</span>
              <span className="font-semibold text-slate-800">{formData.class_grade} • {formData.subjects}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400 font-medium">Location & Mode:</span>
              <span className="font-semibold text-slate-800">{formData.city} ({formData.mode})</span>
            </div>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              onClick={resetForm}
              className="btn-secondary w-full py-3 text-sm font-semibold rounded-xl"
            >
              Submit Another Request
            </button>
            <Button
              variant="primary"
              className="w-full py-3 text-sm font-bold rounded-xl shadow-soft"
              onClick={() => window.location.href = '/'}
            >
              Back to Home
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-brand-gray min-h-screen py-10 sm:py-16">
      <div className="container-custom max-w-3xl">
        
        {/* Onboarding Header */}
        <div className="text-center mb-8 sm:mb-10 space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-lightBlue bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Fast Guided Onboarding</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight">
            Find the Perfect Home Tutor
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-lg mx-auto">
            Answer a few quick questions to receive verified tutor recommendations within 24 hours.
          </p>
        </div>

        {/* Stepper Card */}
        <div className="bg-white rounded-3xl shadow-soft-xl border border-slate-200/80 overflow-hidden">
          
          {/* Progress Indicator Bar */}
          <div className="bg-slate-900 p-5 sm:p-6 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-brand-lightBlue text-white font-bold flex items-center justify-center text-sm shadow-sm">
                {currentStep}
              </span>
              <div>
                <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                  Step {currentStep} of 4
                </p>
                <h4 className="text-sm font-bold text-white">
                  {currentStep === 1 && 'Student & Class Grade'}
                  {currentStep === 2 && 'Subjects & Tuition Mode'}
                  {currentStep === 3 && 'Location & Preferences'}
                  {currentStep === 4 && 'Review & Confirm'}
                </h4>
              </div>
            </div>

            {/* Step Dots */}
            <div className="flex gap-1.5">
              {[1, 2, 3, 4].map((s) => (
                <div
                  key={s}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    s === currentStep
                      ? 'w-6 bg-brand-orange'
                      : s < currentStep
                      ? 'w-3 bg-emerald-400'
                      : 'w-3 bg-white/20'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Form Content */}
          <form onSubmit={handleSubmit} className="p-6 sm:p-10 space-y-6">
            
            {/* Error banner */}
            {error && (
              <div className="rounded-2xl bg-red-50 p-4 border border-red-200 text-red-700 text-xs sm:text-sm font-medium flex items-center gap-2.5 animate-fade-in">
                <AlertCircle className="w-5 h-5 shrink-0 text-red-500" />
                <span>{error}</span>
              </div>
            )}

            {/* ========================================================================= */}
            {/* STEP 1: STUDENT INFO & CLASS GRADE */}
            {/* ========================================================================= */}
            {currentStep === 1 && (
              <div className="space-y-6 animate-fade-in">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Student or Parent's Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-4 top-3.5" />
                    <input
                      type="text"
                      required
                      name="student_name"
                      value={formData.student_name}
                      onChange={handleChange}
                      placeholder="e.g. Ramesh Sharma"
                      className="w-full pl-11 pr-4 py-3 rounded-2xl border border-slate-200 text-sm font-medium focus:ring-2 focus:ring-brand-lightBlue/20 focus:border-brand-lightBlue outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      WhatsApp / Mobile Number *
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-slate-400 absolute left-4 top-3.5" />
                      <input
                        type="tel"
                        required
                        pattern="[0-9]{10}"
                        maxLength={10}
                        name="phone"
                        value={formData.phone}
                        onChange={(e) => {
                          e.target.value = e.target.value.replace(/\D/g, '');
                          handleChange(e);
                        }}
                        placeholder="10-digit mobile number"
                        className="w-full pl-11 pr-4 py-3 rounded-2xl border border-slate-200 text-sm font-medium focus:ring-2 focus:ring-brand-lightBlue/20 focus:border-brand-lightBlue outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Email Address (Optional)
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-400 absolute left-4 top-3.5" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. ramesh@example.com"
                        className="w-full pl-11 pr-4 py-3 rounded-2xl border border-slate-200 text-sm font-medium focus:ring-2 focus:ring-brand-lightBlue/20 focus:border-brand-lightBlue outline-none transition-all"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    What class or grade is the student in? *
                  </label>
                  <input
                    type="text"
                    required
                    name="class_grade"
                    value={formData.class_grade}
                    onChange={handleChange}
                    placeholder="Or type custom class (e.g. Class 10 CBSE)"
                    className="w-full px-4 py-3 rounded-2xl border border-slate-200 text-sm font-medium focus:ring-2 focus:ring-brand-lightBlue/20 focus:border-brand-lightBlue outline-none mb-3"
                  />

                  <p className="text-xs text-slate-500 font-semibold mb-2">Or select from common classes:</p>
                  <div className="flex flex-wrap gap-2">
                    {QUICK_CLASSES.map((cls) => (
                      <button
                        key={cls}
                        type="button"
                        onClick={() => handleQuickSelect('class_grade', cls)}
                        className={`text-xs py-1.5 px-3 rounded-xl border font-semibold transition-all ${
                          formData.class_grade === cls
                            ? 'bg-slate-900 text-white border-slate-900'
                            : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        {cls}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* ========================================================================= */}
            {/* STEP 2: SUBJECTS & LEARNING MODE */}
            {/* ========================================================================= */}
            {currentStep === 2 && (
              <div className="space-y-6 animate-fade-in">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Subjects Required *
                  </label>
                  <input
                    type="text"
                    required
                    name="subjects"
                    value={formData.subjects}
                    onChange={handleChange}
                    placeholder="e.g. Mathematics, Physics, Chemistry"
                    className="w-full px-4 py-3 rounded-2xl border border-slate-200 text-sm font-medium focus:ring-2 focus:ring-brand-lightBlue/20 focus:border-brand-lightBlue outline-none mb-3"
                  />

                  <p className="text-xs text-slate-500 font-semibold mb-2">Quick pick subjects:</p>
                  <div className="flex flex-wrap gap-2">
                    {QUICK_SUBJECTS.map((sub) => (
                      <button
                        key={sub}
                        type="button"
                        onClick={() => handleQuickSelect('subjects', sub)}
                        className={`text-xs py-1.5 px-3 rounded-xl border font-semibold transition-all ${
                          formData.subjects === sub
                            ? 'bg-brand-blue text-white border-brand-blue'
                            : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        {sub}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-3">
                    Preferred Mode of Tuition *
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      { id: 'Home Tuition', label: 'Home Tuition', sub: 'Tutor visits your residence', icon: Home },
                      { id: 'Online', label: 'Online Classes', sub: 'Live interactive 1-to-1 video', icon: Laptop },
                      { id: 'Both', label: 'Both (Flexible)', sub: 'Open to either mode', icon: Sparkles },
                    ].map((m) => {
                      const isSelected = formData.mode === m.id;
                      const Icon = m.icon;
                      return (
                        <button
                          key={m.id}
                          type="button"
                          onClick={() => setFormData(prev => ({ ...prev, mode: m.id }))}
                          className={`p-4 rounded-2xl text-left border transition-all flex flex-col justify-between ${
                            isSelected
                              ? 'border-brand-lightBlue bg-blue-50/60 ring-2 ring-brand-lightBlue/20 shadow-sm'
                              : 'border-slate-200 bg-white hover:border-slate-300'
                          }`}
                        >
                          <div className="w-8 h-8 rounded-xl bg-slate-100 flex items-center justify-center mb-2 text-slate-700">
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <p className="font-bold text-xs text-slate-900">{m.label}</p>
                            <p className="text-[11px] text-slate-500">{m.sub}</p>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {/* ========================================================================= */}
            {/* STEP 3: LOCATION & PREFERENCES */}
            {/* ========================================================================= */}
            {currentStep === 3 && (
              <div className="space-y-6 animate-fade-in">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    City & Area / Locality *
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-slate-400 absolute left-4 top-3.5" />
                    <input
                      type="text"
                      required
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="e.g. Kalindipuram, Prayagraj or Sigra, Varanasi"
                      className="w-full pl-11 pr-4 py-3 rounded-2xl border border-slate-200 text-sm font-medium focus:ring-2 focus:ring-brand-lightBlue/20 focus:border-brand-lightBlue outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Tutor Gender Preference
                    </label>
                    <select
                      name="gender_preference"
                      value={formData.gender_preference}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-2xl border border-slate-200 text-sm font-medium bg-white focus:ring-2 focus:ring-brand-lightBlue/20 outline-none"
                    >
                      <option value="">No Preference</option>
                      <option value="Female">Female Tutor</option>
                      <option value="Male">Male Tutor</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Monthly Budget (Approximate)
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-2xl border border-slate-200 text-sm font-medium bg-white focus:ring-2 focus:ring-brand-lightBlue/20 outline-none"
                    >
                      <option value="">Select Budget Range</option>
                      {BUDGET_OPTIONS.map((b) => (
                        <option key={b} value={b}>{b}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Any Specific Requirements / Timings (Optional)
                  </label>
                  <textarea
                    name="additional_notes"
                    value={formData.additional_notes}
                    onChange={handleChange}
                    rows={3}
                    placeholder="e.g. evening batches preferred, child needs help with physics numericals..."
                    className="w-full px-4 py-3 rounded-2xl border border-slate-200 text-sm font-medium focus:ring-2 focus:ring-brand-lightBlue/20 outline-none resize-none"
                  />
                </div>
              </div>
            )}

            {/* ========================================================================= */}
            {/* STEP 4: REVIEW & CONFIRM */}
            {/* ========================================================================= */}
            {currentStep === 4 && (
              <div className="space-y-6 animate-fade-in">
                <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200/80 space-y-3">
                  <h4 className="font-bold text-sm text-slate-900 border-b border-slate-200 pb-2">
                    Summary of Your Request
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-600">
                    <div>
                      <span className="text-slate-400 block">Student:</span>
                      <strong className="text-slate-900">{formData.student_name}</strong>
                    </div>
                    <div>
                      <span className="text-slate-400 block">Phone:</span>
                      <strong className="text-slate-900">{formData.phone}</strong>
                    </div>
                    <div>
                      <span className="text-slate-400 block">Class:</span>
                      <strong className="text-slate-900">{formData.class_grade}</strong>
                    </div>
                    <div>
                      <span className="text-slate-400 block">Subjects:</span>
                      <strong className="text-slate-900">{formData.subjects}</strong>
                    </div>
                    <div>
                      <span className="text-slate-400 block">Location:</span>
                      <strong className="text-slate-900">{formData.city}</strong>
                    </div>
                    <div>
                      <span className="text-slate-400 block">Mode & Budget:</span>
                      <strong className="text-slate-900">{formData.mode} • {formData.budget || 'Flexible'}</strong>
                    </div>
                  </div>
                </div>

                {/* Terms and Conditions Checkbox */}
                <div className="p-4 rounded-2xl border border-slate-200 bg-white">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={agreedToTerms}
                      onChange={(e) => setAgreedToTerms(e.target.checked)}
                      className="w-5 h-5 mt-0.5 rounded text-brand-lightBlue focus:ring-brand-lightBlue"
                      required
                    />
                    <span className="text-xs sm:text-sm text-slate-700 leading-relaxed select-none">
                      I agree to the{' '}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          setShowTermsModal(true);
                        }}
                        className="text-brand-lightBlue hover:underline font-bold inline-flex items-center gap-1"
                      >
                        <FileText className="w-3.5 h-3.5" /> terms & conditions
                      </button>{' '}
                      governing tutor connections, privacy, and free demo classes. <span className="text-red-500">*</span>
                    </span>
                  </label>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="pt-6 border-t border-slate-100 flex items-center justify-between gap-4">
              {currentStep > 1 ? (
                <button
                  type="button"
                  onClick={prevStep}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-600 hover:text-slate-900 py-3 px-5 rounded-xl hover:bg-slate-100 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>
              ) : (
                <div />
              )}

              {currentStep < 4 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="inline-flex items-center gap-2 py-3.5 px-8 rounded-2xl bg-brand-lightBlue hover:bg-blue-600 text-white font-bold text-sm shadow-soft hover:shadow-soft-lg hover:-translate-y-0.5 transition-all"
                >
                  <span>Continue</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <Button
                  type="submit"
                  disabled={loading || !agreedToTerms}
                  isLoading={loading}
                  className="py-3.5 px-10 rounded-2xl bg-brand-orange hover:bg-orange-600 text-white font-bold text-base shadow-soft-lg hover:-translate-y-0.5 transition-all"
                  rightIcon={<ArrowRight className="w-5 h-5" />}
                >
                  Submit Tutor Request
                </Button>
              )}
            </div>

          </form>
        </div>
      </div>

      {/* Full Terms & Conditions Modal */}
      <FullTermsModal
        isOpen={showTermsModal}
        onClose={() => setShowTermsModal(false)}
        onAgree={() => setAgreedToTerms(true)}
      />
    </div>
  );
};

export default FindTutor;
