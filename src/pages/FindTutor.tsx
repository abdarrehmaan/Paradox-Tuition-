import React, { useState } from 'react';
import { CheckCircle, AlertCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

const FindTutor: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const [formData, setFormData] = useState({
    student_name: '',
    phone: '',
    email: '',
    city: '',
    class_grade: '',
    subjects: '',
    mode: '',
    budget: '',
    gender_preference: '',
    additional_notes: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const { error: dbError } = await supabase.from('student_enquiries').insert([formData]);
      if (dbError) throw dbError;

      setIsSubmitted(true);
    } catch (err: any) {
      console.error('Error submitting enquiry:', err);
      setError(err.message || 'An error occurred while submitting your enquiry.');
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setFormData({
      student_name: '',
      phone: '',
      email: '',
      city: '',
      class_grade: '',
      subjects: '',
      mode: '',
      budget: '',
      gender_preference: '',
      additional_notes: '',
    });
    setAgreedToTerms(false);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center bg-gray-50 px-4">
        <div className="bg-white p-10 rounded-2xl shadow-xl text-center max-w-md w-full border border-gray-100">
          <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Enquiry Submitted!</h2>
          <p className="text-gray-600 mb-8">
            Thank you for reaching out to Paradox Tuition Services. Our team will review your
            requirements and connect you with the best-matched tutor within 24 hours.
          </p>
          <button onClick={resetForm} className="btn-primary w-full">
            Submit Another Enquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container-custom max-w-4xl">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-5xl font-bold text-brand-dark mb-4 tracking-tight">
            Find the Perfect Home Tutor
          </h1>
          <p className="text-lg text-gray-600">
            Tell us your requirements and we'll match you with a verified, qualified tutor near you
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          {/* Info Banner */}
          <div className="bg-brand-blue/5 border-b border-brand-blue/10 p-6 md:p-8 flex items-start gap-4">
            <AlertCircle className="w-6 h-6 text-brand-blue flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-brand-dark text-lg mb-1">How It Works</h3>
              <p className="text-gray-600 text-sm">
                Fill in your requirements below. Our team will shortlist the best-matched tutors
                and reach out to you within 24 hours with profiles for you to choose from. 100% free
                for students & parents.
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="p-6 md:p-10 space-y-8">
            {error && (
              <div className="rounded-md bg-red-50 p-4 border border-red-200">
                <p className="text-sm font-medium text-red-800">{error}</p>
              </div>
            )}

            {/* Student Details */}
            <div>
              <h3 className="text-xl font-bold text-brand-dark mb-6 border-b border-gray-100 pb-2">
                Student Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Student's Name *
                  </label>
                  <input
                    required
                    name="student_name"
                    value={formData.student_name}
                    onChange={handleChange}
                    type="text"
                    placeholder="e.g. Rajesh Kumar"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-blue/20 outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    required
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    type="tel"
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-blue/20 outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email"
                    placeholder="e.g. rajesh@example.com"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-blue/20 outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    City / Area *
                  </label>
                  <input
                    required
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    type="text"
                    placeholder="e.g. Kalandipuram, Prayagraj"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-blue/20 outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Class / Grade *
                  </label>
                  <input
                    required
                    name="class_grade"
                    value={formData.class_grade}
                    onChange={handleChange}
                    type="text"
                    placeholder="e.g. Class 10, Class 12 Science, Graduation"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-blue/20 outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Subjects Required *
                  </label>
                  <input
                    required
                    name="subjects"
                    value={formData.subjects}
                    onChange={handleChange}
                    type="text"
                    placeholder="e.g. Maths, Physics, Chemistry"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-blue/20 outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Tutor Gender Preference
                  </label>
                  <select
                    name="gender_preference"
                    value={formData.gender_preference}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:ring-2 focus:ring-brand-blue/20 outline-none transition-colors"
                  >
                    <option value="">No Preference</option>
                    <option value="Male">Male Tutor</option>
                    <option value="Female">Female Tutor</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Monthly Budget ₹ (if any)
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:ring-2 focus:ring-brand-blue/20 outline-none transition-colors"
                  >
                    <option value="">Select Budget Range</option>
                    <option value="Under ₹2000">Under ₹2,000 / month</option>
                    <option value="₹2000-₹4000">₹2,000 – ₹4,000 / month</option>
                    <option value="₹4000-₹6000">₹4,000 – ₹6,000 / month</option>
                    <option value="₹6000-₹10000">₹6,000 – ₹10,000 / month</option>
                    <option value="Above ₹10000">Above ₹10,000 / month</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Preferred Mode of Tuition *
                  </label>
                  <div className="flex flex-wrap gap-6">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="mode"
                        value="Home Tuition"
                        checked={formData.mode === 'Home Tuition'}
                        onChange={handleChange}
                        className="w-4 h-4 text-brand-blue"
                        required
                      />
                      Home Tuition (Tutor visits home)
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="mode"
                        value="Online"
                        checked={formData.mode === 'Online'}
                        onChange={handleChange}
                        className="w-4 h-4 text-brand-blue"
                        required
                      />
                      Online Classes
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="mode"
                        value="Both"
                        checked={formData.mode === 'Both'}
                        onChange={handleChange}
                        className="w-4 h-4 text-brand-blue"
                        required
                      />
                      Both (Flexible)
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Notes */}
            <div>
              <h3 className="text-xl font-bold text-brand-dark mb-6 border-b border-gray-100 pb-2">
                Additional Requirements
              </h3>
              <textarea
                name="additional_notes"
                value={formData.additional_notes}
                onChange={handleChange}
                rows={4}
                placeholder="Any specific requirements, preferred timings, or anything else you'd like us to know..."
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-blue/20 outline-none transition-colors resize-none"
              />
            </div>

            {/* Terms and Conditions */}
            <div>
              <h3 className="text-xl font-bold text-brand-dark mb-6 border-b border-gray-100 pb-2">Terms & Conditions</h3>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 h-64 overflow-y-auto mb-4 text-sm text-gray-700 whitespace-pre-wrap leading-relaxed shadow-inner">
                <h4 className="font-bold text-lg mb-4 text-brand-dark">📜 Tuition Collaboration Terms & Conditions</h4>
                {`1. Definitions
“Platform / We / Us” refers to the tuition service provider facilitating connections between tutors and parents/students.
“Tutor” refers to the individual providing teaching services.
“Parent/Student/Client” refers to the individual availing tuition services.

2. First Month Payment
• The Platform will collect the first month’s tuition fee from the parent/student.
• 50% of the total fee will be retained by the Platform as a service charge.
• The remaining 50% will be transferred to the Tutor within 7 days after completion of the first month.
• In case the student discontinues within the first month, the Tutor’s payment will be calculated proportionally based on the number of classes conducted.

3. Payments from Second Month Onwards
• From the second month onward, the Parent/Student will pay the Tutor directly.
• The Platform will not be responsible for any payment delays or disputes beyond the first month.

4. Fee Structure
• The agreed tuition fee is final and non-negotiable once confirmed.
• Any changes must be mutually agreed upon by all parties with prior notice.

5. Trial Classes
• A maximum of 2 trial classes will be conducted.
• Each trial class will be of standard duration.
• Trial classes will be unpaid unless otherwise agreed.
• No extension beyond 2 trial classes will be permitted.

6. Tutor Commitment
• Once a Tutor accepts a tuition assignment, they are expected to fulfill their commitment professionally.
• Backing out without a valid reason (such as medical emergency or unavoidable circumstances) may result in removal from future opportunities on the Platform.

7. Failure in Demo/Trial
• If a Tutor fails to meet expectations in two consecutive demo/trial opportunities, the Platform reserves the right to discontinue offering further tuition assignments.

8. Code of Conduct
Tutors are expected to:
• Maintain punctuality and professionalism
• Deliver quality teaching
• Communicate respectfully with students and parents
• Avoid any misconduct or inappropriate behavior
Failure to adhere may result in termination from the Platform.

9. Non-Circumvention
• Tutors and Parents/Students agree not to bypass the Platform to establish direct arrangements during the first month of engagement.
• Any violation may lead to termination of services and restriction from future opportunities.

10. Confidentiality
• All discussions, agreements, and revenue-sharing terms between the Tutor and the Platform must remain strictly confidential and must not be disclosed to any third party.

11. Cancellation & Termination
• Either party may discontinue tuition after the first month with prior notice.
• The Platform reserves the right to terminate services in case of misconduct, breach of terms, or non-compliance.

12. Dispute Resolution
• In case of any disputes, the Platform will act as a mediator, and its decision shall be final and binding.

13. Governing Law
• These Terms & Conditions shall be governed by and interpreted in accordance with the laws of India.

14. Additional Legal Terms
a) Limitation of Liability
The Platform shall not be liable for any indirect, incidental, or consequential damages, including academic performance, disputes, or financial losses between Tutor and Parent/Student.

b) Indemnity
Users agree to indemnify and hold harmless the Platform from any claims, damages, or liabilities arising due to misuse of services, breach of terms, or misconduct.

c) No Guarantee of Results
The Platform does not guarantee any specific academic outcomes or results from tuition services.

d) Background Verification Disclaimer
The Platform does not guarantee or verify the credentials, qualifications, or background of Tutors. Users are advised to conduct their own due diligence.

e) Digital Communication Consent
Users consent to receive communication via calls, messages, and digital platforms (including WhatsApp).

f) Service Availability
The Platform does not guarantee uninterrupted or error-free services and may modify or discontinue services at any time.

g) Data Usage
The Platform may use anonymized user data for analytics, service improvement, and operational purposes.

h) Eligibility
Users must be at least 18 years old or have parental/guardian consent to use the Platform.

i) Force Majeure
The Platform shall not be held responsible for delays or failures caused by events beyond its control, including natural disasters, internet issues, or government restrictions.

15. Acceptance
By proceeding, the user confirms:`}
              </div>
              <label className="flex items-start gap-3 cursor-pointer p-2 hover:bg-gray-50 rounded-lg transition-colors">
                <input 
                  type="checkbox" 
                  checked={agreedToTerms} 
                  onChange={(e) => setAgreedToTerms(e.target.checked)} 
                  className="w-5 h-5 mt-0.5 text-brand-blue border-gray-300 rounded focus:ring-brand-blue" 
                  required 
                />
                <span className="text-gray-700 font-medium select-none">
                  “I have read, understood, and agree to abide by the Terms & Conditions stated above.”
                </span>
              </label>
            </div>

            {/* Submit */}
            <div className="pt-6">
              <button
                disabled={loading}
                type="submit"
                className="w-full sm:w-auto btn-primary px-12 py-4 text-lg font-bold mx-auto flex items-center justify-center shadow-xl shadow-blue-500/20 transform hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? 'Submitting...' : 'Submit Enquiry'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FindTutor;
