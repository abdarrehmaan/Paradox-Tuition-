import React, { useState } from 'react';
import { CheckCircle, AlertCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

const FindTutor: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

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
    setShowTerms(false);
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

👨‍👩‍👧 6. PARENT / STUDENT RESPONSIBILITIES

📌 6.1 General Responsibilities
Parents/Students shall:
• Provide a Safe and Respectful Environment: Ensure that the Tutor is treated with dignity, respect, and professionalism at all times, whether sessions are conducted online or offline. Any form of harassment, intimidation, discrimination, or inappropriate behavior shall be strictly prohibited.
• Ensure Timely and Fair Payments: Adhere to the agreed fee structure and ensure that payments are made promptly and in good faith, without unnecessary delay, withholding, or dispute, except where justified.
• Maintain Transparency and Honesty: Provide accurate and complete information regarding academic requirements, expectations, schedule, and any relevant details necessary for effective service delivery.
• Facilitate a Conducive Learning Environment: Ensure that the student is available, prepared, and in a suitable environment for learning during scheduled sessions.

⚠️ 6.2 Prohibited Conduct
Parents/Students shall not:
• Engage in any form of abusive, threatening, or disrespectful conduct toward Tutors
• Misrepresent academic needs, schedules, or commitments
• Attempt to exploit, manipulate, or unfairly pressure Tutors
• Interfere with the Tutor’s ability to deliver services effectively
• Encourage or participate in any activity that violates Platform policies, including non-circumvention

⚖️ 6.3 Misconduct and Escalation Protocol
In the event of any dispute, concern, or allegation of misconduct:
• Parents/Students shall first notify the Platform and provide reasonable details of the issue
• The Platform shall be given a reasonable opportunity to review, mediate, and attempt resolution
Users expressly agree that:
• No formal complaint, legal proceeding, or escalation to authorities shall be initiated without first informing the Platform
• Cooperation in good faith during the resolution process is mandatory
Failure to follow this protocol may result in restriction or termination of access to Platform services.

🚫 6.4 Platform Liability Disclaimer
The Platform acts solely as an intermediary facilitating connections and shall not be held liable for:
• Disputes, disagreements, or conflicts between Parents/Students and Tutors
• Quality, effectiveness, or outcomes of teaching services
• Behavior, conduct, or actions of Tutors or Students during or after engagement
• Any financial, academic, emotional, or personal consequences arising from such interactions
Users acknowledge that all engagements are independent arrangements entered into at their own discretion and risk.

🧾 6.5 Responsibility for Independent Decisions
Parents/Students are solely responsible for:
• Evaluating the suitability of a Tutor prior to engagement
• Monitoring the progress and conduct of the learning process
• Making independent decisions regarding continuation, modification, or termination of services
The Platform does not guarantee compatibility, satisfaction, or outcomes.

🔒 6.6 Continuing Obligations
The responsibilities outlined herein shall:
• Apply throughout the duration of engagement
• Continue to apply to all interactions originating from the Platform
• Remain enforceable even after cessation of services where relevant

⚠️ 6.7 Consequences of Breach
Any violation of this section may result in, at the sole discretion of the Platform:
• Suspension or termination of access
• Restriction from future services
• Reporting or escalation in case of serious misconduct

🧠 6.8 Acknowledgment
By using the Platform, Parents/Students acknowledge that:
• They have read and understood these responsibilities
• They agree to comply fully and in good faith
• These obligations are essential to maintaining a safe, fair, and effective ecosystem for all users

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

🛡️ 12. INDEMNITY (Expanded & Legally Reinforced Clause)
Users expressly, irrevocably, and unconditionally agree to indemnify, defend, and hold harmless the Platform, its owners, affiliates, employees, representatives, agents, and partners from and against any and all claims, demands, actions, proceedings, liabilities, damages, losses, costs, expenses, and legal fees (including reasonable attorney fees) arising out of or in connection with:
• Breach of Terms: Any violation, non-compliance, or breach of these Terms & Conditions, whether intentional or unintentional.
• Misuse of the Platform: Any unauthorized, unlawful, unethical, or improper use of the Platform, including misuse of services, features, or user interactions.
• Violation of Applicable Laws: Any act or omission that results in non-compliance with applicable laws, regulations, or legal obligations.
• Infringement of Rights: Any violation or alleged violation of third-party rights, including intellectual property rights, privacy rights, contractual rights, or any other legal entitlement.
• User-to-User Interactions: Any dispute, misconduct, or claim arising between Tutors and Parents/Students, including financial, behavioral, or service-related issues.

⚖️ 12.1 Scope and Nature of Indemnity
This indemnity shall:
• Be Continuing and Absolute: Remain in effect at all times, regardless of the status of the user’s engagement with the Platform.
• Be Unconditional: Apply irrespective of whether the Platform has been negligent or otherwise involved, except where prohibited by law.
• Survive Termination: Continue indefinitely even after termination, suspension, or discontinuation of services.
• Cover Direct and Indirect Losses: Extend to all forms of damages, including direct, indirect, incidental, consequential, and reputational losses.

🧾 12.2 Defense and Cooperation
Users agree to:
• Cooperate fully with the Platform in the defense of any claim
• Provide necessary information, documents, or assistance when required
• Not settle or resolve any claim affecting the Platform without prior written consent

🔒 12.3 Platform Rights
The Platform reserves the right to:
• Assume exclusive defense and control of any matter subject to indemnification
• Recover all costs incurred, including legal and administrative expenses
• Take appropriate action to protect its interests

📉 13. NO GUARANTEE OF RESULTS (Expanded & Strengthened Clause)
The Platform expressly disclaims any and all guarantees, warranties, assurances, or representations—whether express or implied—regarding academic outcomes, performance improvements, or results arising from the use of its services.

📊 13.1 Nature of Services
Users acknowledge that:
• The Platform only facilitates connections between Tutors and Students
• It does not control, supervise, or influence the delivery of educational services
• It does not evaluate or guarantee the effectiveness of teaching methods

🔍 13.2 Factors Affecting Outcomes
Academic and learning outcomes are dependent on numerous independent and uncontrollable factors, including but not limited to:
• Student Effort and Participation: Level of dedication, discipline, and consistency in learning.
• Tutor Compatibility: Alignment between teaching style and student learning preferences.
• External Academic Conditions: School curriculum, exam patterns, institutional support, and environment.
• Personal and Environmental Factors: Health, mental focus, home environment, and external distractions.

⚠️ 13.3 Disclaimer of Liability
Accordingly:
• The Platform shall not be held liable for any dissatisfaction, underperformance, or failure to achieve expected results
• No claim, demand, or action shall arise against the Platform based on academic outcomes

🧠 13.4 User Acknowledgment
Users expressly acknowledge that:
• Educational outcomes are inherently uncertain
• Engagement with Tutors is undertaken at their own discretion and risk

🔍 14. VERIFICATION DISCLAIMER (Expanded & Strengthened Clause)
The Platform does not independently verify, authenticate, or guarantee the credentials, qualifications, experience, or background of Tutors unless explicitly stated.

📌 14.1 Nature of Information
Users acknowledge that:
• Information provided on the Platform is primarily based on self-declaration by Tutors
• The Platform may not conduct background checks, document verification, or credential validation in all cases

⚠️ 14.2 User Responsibility
Users are solely responsible for:
• Conducting independent due diligence before engaging with any Tutor
• Verifying credentials, qualifications, and suitability
• Assessing compatibility and trustworthiness

🚫 14.3 Limitation of Liability
The Platform shall not be held liable for:
• Misrepresentation, inaccuracy, or falsification of information by Tutors
• Any consequences arising from reliance on such information
• Any loss, damage, or dispute resulting from such reliance

🧾 14.4 Waiver of Claims
Users expressly waive any and all claims against the Platform arising from or related to:
• Verification failures
• Reliance on Platform-listed information
• Engagement decisions based on such information

📵 15. COMMUNICATION CONSENT (Expanded & Legally Reinforced Clause)
By registering with or using the Platform, users provide their explicit, informed, unconditional, and continuing consent to receive communications from the Platform through various channels, including but not limited to:
• Voice calls
• SMS and messaging services
• Email communications
• WhatsApp or similar digital communication platforms

📩 15.1 Nature of Communications
Such communications may include:
• Operational Messages: Account updates, onboarding information, session confirmations, and service-related notifications.
• Transactional Communications: Payment confirmations, reminders, and financial updates.
• Support and Grievance Responses: Replies to user queries, complaints, or assistance requests.
• Promotional and Informational Content: Offers, updates, announcements, and relevant service-related information.

⚠️ 15.2 User Acknowledgment
Users acknowledge that:
• Certain communications are essential for service delivery and cannot be opted out of
• Communication may occur at reasonable times as per operational requirements
• Standard messaging or communication charges may apply as per user’s telecom provider

🚫 15.3 Limitation of Liability
The Platform shall not be held liable for:
• Delays, failures, or non-delivery of messages due to network or third-party issues
• Miscommunication arising from incorrect contact details provided by users

🔒 15.4 Continuing Consent
This consent shall:
• Remain valid throughout the duration of the user’s association with the Platform
• Continue unless explicitly withdrawn where applicable
• Extend to all communication channels used by the Platform

🌐 16. SERVICE AVAILABILITY
The Platform reserves the absolute, unrestricted, and discretionary right to modify, suspend, restrict, limit, or discontinue any part of its services, features, functionalities, or operations at any time, with or without prior notice and without incurring any liability whatsoever.

⚙️ 16.1 Nature of Service Provision
Users acknowledge and agree that:
• The Platform operates on a best-effort basis and does not guarantee uninterrupted, continuous, or error-free availability of services
• Access to the Platform may be affected by maintenance activities, system upgrades, technical issues, or external dependencies

⚠️ 16.2 Service Interruptions
Interruptions may occur due to, but not limited to:
• Scheduled or unscheduled maintenance
• Server downtime or infrastructure failures
• Internet connectivity issues
• Third-party service disruptions

🚫 16.3 Limitation of Liability
The Platform shall not be liable for:
• Temporary or permanent unavailability of services
• Loss of data, opportunities, or business arising from service interruptions
• Any inconvenience or disruption caused to users

🔒 16.4 Platform Discretion
The Platform reserves the right to:
• Introduce, remove, or alter features at its sole discretion
• Restrict access to certain users or regions
• Modify service structure without obligation to compensate users

📊 17. DATA USAGE
The Platform may collect, process, store, analyze, and utilize user data in a lawful and structured manner for operational, analytical, and service improvement purposes.

📌 17.1 Scope of Data Usage
Data may be used for:
• Operational Efficiency: Managing user interactions, matching services, and platform functionality
• Analytical Insights: Understanding user behavior, trends, and engagement patterns
• Service Enhancement: Improving features, performance, and user experience
• Security and Monitoring: Detecting fraud, preventing misuse, and maintaining system integrity

🔍 17.2 Nature of Data Processing
The Platform may:
• Aggregate and anonymize user data for analytical purposes
• Process data using automated or manual systems
• Retain data for internal evaluation and improvement

🔒 17.3 Data Protection Commitment
All such usage shall:
• Be carried out in accordance with applicable legal and regulatory standards
• Avoid disclosure of personally identifiable information beyond necessary purposes
• Maintain reasonable safeguards to protect user privacy

⚠️ 17.4 Limitation of Liability
The Platform shall not be liable for:
• Analytical outcomes derived from aggregated data
• Any indirect consequences arising from internal data usage

⚡ 18. FORCE MAJEURE
The Platform shall not be held liable or responsible for any failure, delay, interruption, or inability to perform its obligations where such failure arises due to events beyond its reasonable control.

🌍 18.1 Covered Events
Such events include, but are not limited to:
• Natural disasters (earthquakes, floods, fires, pandemics)
• Governmental actions, regulations, or restrictions
• War, civil unrest, or public disturbances
• Power outages or infrastructure breakdowns
• Internet or telecommunication failures
• Cyber-attacks or system-wide disruptions

⚠️ 18.2 Effect of Force Majeure
In such circumstances:
• Obligations of the Platform shall be suspended for the duration of the event
• The Platform shall not be considered in breach of its obligations

🔄 18.3 Resumption of Services
The Platform shall make reasonable efforts to resume normal operations once the Force Majeure event ceases.

🔗 19. OFF-PLATFORM DEALINGS
The Platform shall bear no responsibility, liability, or accountability whatsoever for any dealings, communications, agreements, or transactions that occur outside its ecosystem.

📌 19.1 Independent Engagements
Users engaging in direct or independent arrangements:
• Do so entirely at their own discretion and risk
• Assume full responsibility for outcomes, payments, and disputes

⚠️ 19.2 Limitation of Platform Involvement
The Platform shall not:
• Mediate disputes arising from off-platform interactions
• Provide support, refunds, or intervention in such cases
• Be liable for any losses or damages incurred

🚫 19.3 Waiver of Claims
Users expressly waive any and all claims against the Platform arising from:
• Off-platform agreements
• Independent financial transactions
• Direct communication outside Platform control

📜 20. INTELLECTUAL PROPERTY 
All intellectual property rights associated with the Platform are and shall remain the exclusive property of the Platform.

🧠 20.1 Scope of Intellectual Property
This includes, but is not limited to:
• Website design, layout, and structure
• Logos, branding elements, and trademarks
• Content, text, graphics, and materials
• Software, features, and functionality

🚫 20.2 Restrictions on Use
Users shall not:
• Copy, reproduce, distribute, or modify any content
• Use Platform materials for commercial purposes
• Reverse-engineer or attempt to extract proprietary elements

⚖️ 20.3 Enforcement Rights
Any unauthorized use shall result in:
• Immediate legal action
• Claims for damages, injunctions, or penalties
• Restriction of access to the Platform

⚖️ 21. DISPUTE RESOLUTION
In the event of any dispute, disagreement, or claim arising between users or involving the Platform:

📌 21.1 Internal Resolution First
• Users agree to first approach the Platform for resolution
• The Platform shall attempt to mediate in good faith

⚠️ 21.2 Binding Nature of Decision
Users agree that:
• The Platform’s decision shall be final and binding for matters within its scope
• Users shall cooperate in the resolution process

🚫 21.3 Limitation of Platform Liability
The Platform’s role is limited to facilitation and mediation and shall not be liable for:
• Outcomes of disputes
• Enforcement of user agreements

🧾 21.4 Escalation
Where disputes cannot be resolved internally:
• Parties may pursue remedies under applicable law
• Subject to jurisdiction defined herein

🇮🇳 22. GOVERNING LAW & JURISDICTION
These Terms & Conditions shall be governed by and construed in accordance with the laws of India.

⚖️ 22.1 Jurisdiction
• All disputes arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the competent courts in the applicable region
• Users agree to submit to such jurisdiction without objection

🧾 22.2 Applicability of Law
• Any provision found invalid under applicable law shall not affect the enforceability of remaining provisions
• The Terms shall be interpreted in a manner consistent with applicable legal frameworks

✅ 23. ACCEPTANCE
By proceeding, the user confirms: “I have read, understood, and agree to be legally bound by these Terms & Conditions.”`}
                </div>
              )}
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
