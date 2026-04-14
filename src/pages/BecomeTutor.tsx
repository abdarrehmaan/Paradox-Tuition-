import React, { useState } from 'react';
import { UploadCloud, CheckCircle, AlertCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

const BecomeTutor: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

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
              setAgreedToTerms(false);
              setShowTerms(false);
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

            {/* Terms and Conditions */}
            <div className="pt-2">
              <label className="flex items-start gap-3 cursor-pointer p-2 hover:bg-gray-50 rounded-lg transition-colors">
                <input 
                  type="checkbox" 
                  checked={agreedToTerms} 
                  onChange={(e) => setAgreedToTerms(e.target.checked)} 
                  className="w-5 h-5 mt-0.5 text-brand-blue border-gray-300 rounded focus:ring-brand-blue" 
                  required 
                />
                <span className="text-gray-600 font-medium select-none">
                  I agree to{' '}
                  <span 
                    className="text-[#38bdf8] hover:underline cursor-pointer" 
                    onClick={(e) => { 
                      e.preventDefault(); 
                      setShowTerms(!showTerms); 
                    }}
                  >
                    terms & conditions
                  </span>
                  . <span className="text-red-500">*</span>
                </span>
              </label>

              {showTerms && (
                <div className="mt-4 bg-gray-50 border border-gray-200 rounded-lg p-6 h-64 overflow-y-auto text-sm text-gray-700 whitespace-pre-wrap leading-relaxed shadow-inner">
                  {`⚖ 1. PLATFORM RIGHTS, CONTENT USE & GENERAL DISCLAIMER
1.1 Right to Modify Terms
The Platform reserves the absolute, irrevocable, perpetual, and unilateral right to amend, revise, update, modify, supplement, or replace any provision of these Terms & Conditions at its sole discretion, at any time, without prior notice or obligation of individual communication. Such modifications shall take effect immediately upon publication. Continued access or use of the Platform shall constitute a legally binding acknowledgment and acceptance of the updated Terms. Users are solely responsible for periodically reviewing the latest version.

1.2 Content Usage Restriction
All content available on the Platform, including but not limited to text, structure, design, branding elements, formats, and materials, constitutes the exclusive intellectual property of the Platform and is protected under applicable laws. Any unauthorized reproduction, duplication, distribution, public display, or commercial exploitation of such content is strictly prohibited and may result in legal proceedings.

1.3 User-Generated Content
By submitting reviews, feedback, comments, or any form of content, users grant the Platform a perpetual, irrevocable, worldwide, royalty-free license to use, reproduce, modify, publish, and display such content. Users represent that such content is original and does not violate third-party rights. The Platform reserves the right to remove or modify content at its sole discretion.

1.4 Accuracy of Information
While reasonable efforts are made to ensure accuracy, the Platform makes no warranties regarding completeness, reliability, or timeliness of information. The Platform shall not be liable for any loss arising from reliance on such information and reserves the right to correct inaccuracies within a reasonable timeframe (up to 7 working days).

1.5 Reviews & Opinions Disclaimer
All user opinions and reviews reflect individual perspectives and do not represent the Platform. The Platform disclaims all liability arising from such content.

1.6 Platform Role
The Platform functions strictly as an independent intermediary connecting Tutors and Parents/Students. It does not provide teaching services, supervise sessions, or guarantee outcomes. All engagements occur independently between users.

👤 2. USER ELIGIBILITY & REGISTRATION
Users must be legally competent to enter into binding agreements (18+ or under guardian supervision). All information provided must be accurate, complete, and current. Submission of false or misleading information may result in immediate suspension or termination without notice.

💰 3. PAYMENT TERMS
3.1 First Month Engagement Fee
For the initial month of engagement, the Platform facilitates the collection of the tuition fee from the Parent/Student to streamline onboarding and coordination of services. A portion of this amount shall be retained by the Platform towards service facilitation, administrative efforts, and operational support (50%), while the remaining amount shall be transferred to the Tutor within a reasonable period following completion of the first month. If the engagement concludes prior to completion of the full month, the payable amount shall be proportionately adjusted based on the number of sessions conducted.

3.2 Subsequent Payments
From the second month onward, financial arrangements shall be conducted directly between the Tutor and the Parent/Student. The Platform disclaims all responsibility for payment disputes, delays, or defaults thereafter.

3.3 Payment Authority
No individual, tutor, or third party is authorized to collect payments on behalf of the Platform. Any payments made outside official channels shall be undertaken at the user’s own risk.

3.4 Refund & Adjustment
Refunds, if any, shall be granted solely at the discretion of the Platform. Service charges and completed sessions are strictly non-refundable.

3.5 Processing Timelines
All financial transactions are subject to reasonable processing timelines and operational constraints.

🧪 4. TRIAL CLASSES
Trial classes are extended by the Platform strictly as a limited, conditional, and non-binding facilitative arrangement, intended solely for the purpose of enabling an initial interaction between the Tutor and the Parent/Student, with a view to assessing compatibility, communication effectiveness, instructional methodology, subject comprehension alignment, behavioral comfort, and overall suitability for a potential long-term engagement.

It is expressly clarified, acknowledged, and agreed by all users that trial sessions shall not, under any circumstances, be construed as:

A confirmation or guarantee of future engagement
A binding contractual relationship between Tutor and Parent/Student
An assurance of satisfaction, performance, or continuity
The following conditions shall apply in a strict, absolute, and non-negotiable manner:

1. Limitation of Trial Sessions
Under no circumstances shall more than two (2) trial sessions be conducted. This limitation is absolute, irrespective of user requests, dissatisfaction, scheduling conflicts, or subjective expectations.

2. Nature and Scope of Trial Engagement
Trial sessions are exploratory in nature and shall not impose any obligation—financial, professional, or otherwise—on the Platform, the Tutor, or the Parent/Student to proceed further.

3. Non-Compensatory Framework
Trial sessions shall ordinarily be treated as non-compensable unless otherwise explicitly agreed in writing by the Platform. Any expectation of compensation without such agreement shall be deemed invalid.

4. Platform Non-Intervention Clause
The Platform shall not be responsible for mediating, supervising, or evaluating the quality, conduct, or outcome of trial sessions beyond facilitating the connection.

5. No Guarantee or Warranty
The Platform expressly disclaims any and all guarantees, warranties, or representations regarding: Tutor capability or teaching effectiveness, Student responsiveness or participation, Compatibility between the parties.

6. Termination Rights
The Platform reserves the absolute, unconditional, and unilateral right to terminate, suspend, or discontinue any trial arrangement at any stage, without assigning any reason whatsoever.

7. User Responsibility Acknowledgment
Users acknowledge that: Participation in trial sessions shall constitute full, informed, and irrevocable acceptance of the above conditions.

🎓 5. TUTOR RESPONSIBILITIES
Tutors shall maintain professional standards including punctuality, quality teaching, and respectful conduct. Any misconduct, negligence, or misrepresentation may result in immediate termination and restriction.

5.1 Commitment
Acceptance of an assignment constitutes a binding obligation. Withdrawal without valid reason may lead to suspension.

5.2 Demo Failure
Failure in two consecutive demos may result in discontinuation of opportunities.

👨👩👧 6. PARENT / STUDENT RESPONSIBILITIES
Parents/Students shall provide a safe, respectful, and cooperative environment and ensure timely payments. The Platform shall not be liable for disputes between users.

6.1 Misconduct & Legal Escalation
Users must first report disputes to the Platform and allow reasonable time for resolution. No legal action shall be initiated without prior notification to the Platform. Violation may result in suspension or termination.

6.2 Grievance Redressal
Grievance Officer: Paradox Team
Email: contact@paradoxtuition.in
Phone: +91 63889 53289
Acknowledgment within 48 hours
Resolution within 7–10 working days

🔁 7. REPLACEMENT POLICY
The Platform may, at its sole, exclusive, and unfettered discretion, attempt to facilitate the provision of a replacement Tutor in circumstances including but not limited to dissatisfaction, incompatibility, discontinuation, scheduling conflicts, behavioral concerns, or unforeseen unavailability. However, users expressly acknowledge, agree, and accept that:

1. Non-Obligatory Nature
The provision of a replacement Tutor is a purely facilitative, goodwill-based effort and shall not be construed as a contractual obligation or guaranteed service.

2. Availability Constraints
Replacement shall be subject to: Tutor availability, Geographic feasibility, Subject specialization requirements, Operational limitations.

3. No Guarantee of Suitability
The Platform does not warrant, guarantee, or represent that any replacement Tutor shall meet or exceed user expectations.

4. Limitation on Requests
Repeated, excessive, or unreasonable requests for replacements may be declined at the sole discretion of the Platform.

5. Platform Immunity
The Platform shall not be liable for: Delays in replacement, Non-availability of suitable alternatives, Dissatisfaction arising from replacement Tutors.

6. Final Authority Clause
All decisions regarding replacement shall remain final, binding, and non-negotiable.

🚫 8. NON-CIRCUMVENTION
Users explicitly, irrevocably, and unconditionally agree that they shall not, directly or indirectly, engage in any act intended to bypass, circumvent, undermine, or otherwise avoid the Platform’s role, involvement, or entitlement in the facilitation of services. This includes, without limitation: Establishing direct financial arrangements outside the Platform, Encouraging off-platform engagement to avoid service charges, Sharing contact details with the intent to bypass the Platform. Any such act shall constitute a serious, material, and fundamental breach of these Terms. In such instances, the Platform reserves the right to: Immediately terminate access without notice, Permanently blacklist the user, Deny all present and future services, Initiate legal proceedings for recovery of damages, losses, or reputational harm. Users acknowledge that this clause is critical to the sustainability, fairness, and operational integrity of the Platform.

🔒 9. CONFIDENTIALITY
Users undertake a legally binding obligation to maintain strict, absolute, and perpetual confidentiality with respect to all Platform-related information, whether disclosed directly or indirectly. Confidential information shall include, but not be limited to: Revenue models and pricing structures, Business strategies and operational mechanisms, User data and communication details, Internal policies and procedural frameworks. Users shall: Not disclose such information to any third party, Not reproduce or circulate such information, Not utilize such information for personal, competitive, or commercial gain. Any breach shall result in: Immediate termination, Permanent blacklisting, Legal action, including claims for damages. This obligation shall survive indefinitely beyond termination.

⚠ 10. MISUSE & FRAUD
The Platform enforces a strict zero-tolerance policy against any form of misuse, abuse, fraud, or unethical conduct. Misuse shall include, but is not limited to: Submission of false, misleading, or fabricated information, Identity misrepresentation or impersonation, Harassment, abuse, or inappropriate conduct, Financial manipulation or payment fraud, Exploitation of system vulnerabilities. Upon detection, the Platform may: Immediately suspend or terminate access, Permanently blacklist the user, Report to legal authorities, Initiate civil or criminal proceedings. The Platform shall bear no liability for any consequences arising from such enforcement actions.

⚖ 11. LIMITATION OF LIABILITY
To the maximum extent permissible under law, the Platform shall be absolutely, unequivocally, and entirely exempt from any liability whatsoever, whether direct, indirect, incidental, consequential, special, exemplary, or punitive. This includes, but is not limited to: Academic failure or underperformance, Tutor negligence or misconduct, Student non-compliance or lack of effort, Financial losses or missed opportunities, Emotional distress, inconvenience, or dissatisfaction. Users expressly acknowledge that: The Platform acts solely as a facilitator, All risks are borne by the users. Under no circumstances shall the Platform’s liability exceed the service fee received.

🛡 12. INDEMNITY
Users agree to irrevocably indemnify, defend, and hold harmless the Platform from any and all claims, liabilities, damages, losses, costs, expenses, and legal fees arising from: Breach of these Terms, Misuse of the Platform, Violation of laws, Infringement of rights. This indemnity shall: Be continuing and unconditional, Survive termination indefinitely.

📉 13. NO GUARANTEE OF RESULTS
The Platform expressly disclaims any and all guarantees, assurances, warranties, or representations regarding academic outcomes. Users acknowledge that outcomes depend on multiple independent and uncontrollable factors, including: Student effort, Tutor compatibility, External academic conditions. No claim shall arise against the Platform for unsatisfactory results.

🔍 14. VERIFICATION DISCLAIMER
The Platform does not independently verify Tutor credentials unless explicitly stated. Users acknowledge full responsibility for conducting due diligence and waive all claims arising from reliance on Platform-listed information.

📵 15. COMMUNICATION CONSENT
Users provide unconditional consent to receive communications through all channels, including but not limited to calls, SMS, email, and WhatsApp. Such communication may include operational updates, promotions, and service notifications.

🌐 16. SERVICE AVAILABILITY
The Platform reserves unrestricted rights to modify, suspend, or discontinue services at any time without any liability. No liability shall arise from service interruptions, technical failures, or downtime.

📊 17. DATA USAGE
User data may be processed, analyzed, stored, and utilized for operational, analytical, and improvement purposes. All such use shall comply with applicable standards while protecting identifiable data.

⚡ 18. FORCE MAJEURE
The Platform shall not be liable for any delay or failure due to events beyond its control, including natural disasters, governmental actions, or technical disruptions.

🔗 19. OFF-PLATFORM DEALINGS
The Platform bears no responsibility whatsoever for any dealings outside its ecosystem. Users engaging independently do so entirely at their own risk.

📜 20. INTELLECTUAL PROPERTY
All intellectual property rights remain exclusively vested in the Platform. Unauthorized use shall result in legal action.

⚖ 21. DISPUTE RESOLUTION
The Platform shall act as mediator, and its decision shall be final and binding.

🌍 22. GOVERNING LAW
These Terms shall be governed exclusively by Indian law, and disputes shall fall under appropriate jurisdiction.

✅ 23. ACCEPTANCE
By proceeding, the user confirms: “I have read, understood, and agree to be legally bound by these Terms & Conditions.”`}
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
