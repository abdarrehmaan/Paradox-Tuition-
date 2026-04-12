import React, { useState } from 'react';
import { UploadCloud, CheckCircle, AlertCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

const BecomeTutor: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [resumeFile, setResumeFile] = useState<File | null>(null);

  const [formData, setFormData] = useState({
    full_name: '',
    phone: '',
    email: '',
    city: '',
    subjects: '',
    classes: '',
    experience: '',
    qualification: '',
    mode: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResumeFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      let resume_url = null;

      // 1. Upload to Supabase Storage if a file was selected
      if (resumeFile) {
        const fileExt = resumeFile.name.split('.').pop();
        const fileName = `${Date.now()}_${Math.random().toString(36).substring(7)}.${fileExt}`;
        const filePath = `${fileName}`;

        const { error: uploadError } = await supabase.storage
          .from('resumes')
          .upload(filePath, resumeFile);

        if (uploadError) {
          throw new Error(`Failed to upload resume: ${uploadError.message}`);
        }

        const { data: publicUrlData } = supabase.storage
          .from('resumes')
          .getPublicUrl(filePath);

        resume_url = publicUrlData.publicUrl;
      }

      // 2. Submit application with resume_url
      const submissionData = { ...formData, resume_url };
      const { error: dbError } = await supabase.from('tutor_applications').insert([submissionData]);

      if (dbError) throw dbError;
      
      setIsSubmitted(true);
    } catch (err: any) {
      console.error("Error submitting application:", err);
      setError(err.message || 'An error occurred while submitting your application.');
    } finally {
      setLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center bg-gray-50 px-4">
        <div className="bg-white p-10 rounded-2xl shadow-xl text-center max-w-md w-full border border-gray-100">
          <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Application Submitted!</h2>
          <p className="text-gray-600 mb-6">
            Thank you for applying to Paradox Tuition Services! Our team will review your profile.
          </p>
          <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-8 text-center">
            <h3 className="font-bold text-green-800 mb-2">Next Step: Join Our Channel</h3>
            <p className="text-green-700 text-sm mb-4">
              Please join our WhatsApp channel for Home tuition leads and School Jobs.
            </p>
            <a 
              href="https://whatsapp.com/channel/0029VbCVOiQLdQeeHXvYtM16" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#25D366] text-white px-6 py-3 rounded-full font-bold hover:bg-[#128C7E] transition-colors shadow-md hover:shadow-lg"
            >
              Join WhatsApp Channel
            </a>
          </div>
          <button 
            onClick={() => {
              setIsSubmitted(false);
              setFormData({ full_name: '', phone: '', email: '', city: '', subjects: '', classes: '', experience: '', qualification: '', mode: '' });
              setResumeFile(null);
            }}
            className="btn-primary w-full"
          >
            Submit Another Application
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container-custom max-w-4xl">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-5xl font-bold text-brand-dark mb-4 tracking-tight">Join as a Home Tutor & Start Earning</h1>
          <p className="text-lg text-gray-600">Register with India's fastest-growing home tuition network</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          <div className="bg-brand-blue/5 border-b border-brand-blue/10 p-6 md:p-8 flex items-start gap-4">
            <AlertCircle className="w-6 h-6 text-brand-blue flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-brand-dark text-lg mb-1">Registration Guidelines</h3>
              <p className="text-gray-600 text-sm">Please ensure all details provided are accurate. Your profile will be verified before activation. Keep your degree certificates and identity proof handy for the verification call.</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="p-6 md:p-10 space-y-8">
            {error && (
              <div className="rounded-md bg-red-50 p-4 border border-red-200">
                <p className="text-sm font-medium text-red-800">{error}</p>
              </div>
            )}

            {/* Personal Info */}
            <div>
              <h3 className="text-xl font-bold text-brand-dark mb-6 border-b border-gray-100 pb-2">Personal Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                  <input required name="full_name" value={formData.full_name} onChange={handleChange} type="text" placeholder="John Doe" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-blue/20 outline-none transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
                  <input required name="phone" value={formData.phone} onChange={handleChange} type="tel" placeholder="+91 92784 93998" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-blue/20 outline-none transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                  <input required name="email" value={formData.email} onChange={handleChange} type="email" placeholder="john@example.com" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-blue/20 outline-none transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">City *</label>
                  <input required name="city" value={formData.city} onChange={handleChange} type="text" placeholder="e.g. Delhi NCR" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-blue/20 outline-none transition-colors" />
                </div>
              </div>
            </div>

            {/* Teaching Profile */}
            <div>
              <h3 className="text-xl font-bold text-brand-dark mb-6 border-b border-gray-100 pb-2">Teaching Profile</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Subjects you can teach *</label>
                  <input required name="subjects" value={formData.subjects} onChange={handleChange} type="text" placeholder="Math, Science, English..." className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-blue/20 outline-none transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Classes you prefer *</label>
                  <input required name="classes" value={formData.classes} onChange={handleChange} type="text" placeholder="Class 1 to 10" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-blue/20 outline-none transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Years of Experience *</label>
                  <select required name="experience" value={formData.experience} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:ring-2 focus:ring-brand-blue/20 outline-none transition-colors">
                    <option value="">Select Experience</option>
                    <option value="0-1">0-1 Years (Fresher)</option>
                    <option value="2-5">2-5 Years</option>
                    <option value="6-10">6-10 Years</option>
                    <option value="10+">10+ Years</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Highest Qualification *</label>
                  <input required name="qualification" value={formData.qualification} onChange={handleChange} type="text" placeholder="e.g. B.Tech, M.Sc, B.Ed" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-blue/20 outline-none transition-colors" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-3">Preferred Mode of Teaching *</label>
                  <div className="flex flex-wrap gap-6">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="mode" value="Home Tuition" checked={formData.mode === 'Home Tuition'} onChange={handleChange} className="w-4 h-4 text-brand-blue" required /> Home Tuition Only
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="mode" value="Online" checked={formData.mode === 'Online'} onChange={handleChange} className="w-4 h-4 text-brand-blue" required /> Online Only
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="mode" value="Both" checked={formData.mode === 'Both'} onChange={handleChange} className="w-4 h-4 text-brand-blue" required /> Both (Home & Online)
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Resume Upload */}
            <div>
              <h3 className="text-xl font-bold text-brand-dark mb-6 border-b border-gray-100 pb-2">Upload Resume</h3>
              {!resumeFile ? (
                <div className="relative border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:bg-gray-50 transition-colors cursor-pointer group">
                  <input type="file" onChange={handleFileChange} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" accept=".pdf,.doc,.docx" />
                  <UploadCloud className="w-12 h-12 text-gray-400 group-hover:text-brand-blue mx-auto mb-4 transition-colors" />
                  <p className="text-gray-700 font-medium mb-1">Click to upload or drag and drop</p>
                  <p className="text-gray-500 text-sm">PDF, DOCX up to 5MB (Stored locally for now)</p>
                </div>
              ) : (
                <div className="flex items-center justify-between p-4 border border-brand-blue/20 bg-brand-blue/5 rounded-xl">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-8 h-8 text-green-500" />
                    <div>
                      <p className="font-semibold text-brand-dark text-sm">{resumeFile.name}</p>
                      <p className="text-xs text-gray-500">{(resumeFile.size / 1024 / 1024).toFixed(2)} MB</p>
                    </div>
                  </div>
                  <button type="button" onClick={() => setResumeFile(null)} className="text-red-500 text-sm font-medium hover:underline">
                    Remove
                  </button>
                </div>
              )}
            </div>

            {/* Submit */}
            <div className="pt-6">
              <button disabled={loading} type="submit" className="w-full sm:w-auto btn-primary px-12 py-4 text-lg font-bold mx-auto flex items-center justify-center shadow-xl shadow-blue-500/20 transform hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed">
                {loading ? 'Submitting...' : 'Submit Application'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BecomeTutor;
