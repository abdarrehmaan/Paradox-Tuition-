import React from 'react';
import { AlertCircle } from 'lucide-react';

const Terms: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container-custom max-w-4xl bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-gray-100">
        <h1 className="text-3xl md:text-5xl font-bold text-brand-dark mb-6 tracking-tight text-center">Terms and Conditions</h1>
        
        <div className="bg-brand-blue/5 border-l-4 border-brand-blue p-4 mb-8 rounded-r-lg flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
          <p className="text-gray-600 text-sm">
            Please read these Terms and Conditions carefully before using the Paradox Tuition Services platform.
          </p>
        </div>

        <div className="space-y-8 text-gray-700 leading-relaxed">
          
          {/* Section 1 */}
          <section>
            <h2 className="text-xl font-bold text-brand-dark border-b border-gray-100 pb-2 mb-4">⚖ 1. PLATFORM RIGHTS, CONTENT USE & GENERAL DISCLAIMER</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-gray-900">1.1 Right to Modify Terms</h3>
                <p>The Platform reserves the absolute, irrevocable, perpetual, and unilateral right to amend, revise, update, modify, supplement, or replace any provision of these Terms & Conditions at its sole discretion, at any time, without prior notice or obligation of individual communication. Such modifications shall take effect immediately upon publication. Continued access or use of the Platform shall constitute a legally binding acknowledgment and acceptance of the updated Terms. Users are solely responsible for periodically reviewing the latest version.</p>
              </div>

              <div>
                <h3 className="font-bold text-gray-900">1.2 Content Usage Restriction</h3>
                <p>All content available on the Platform, including but not limited to text, structure, design, branding elements, formats, and materials, constitutes the exclusive intellectual property of the Platform and is protected under applicable laws. Any unauthorized reproduction, duplication, distribution, public display, or commercial exploitation of such content is strictly prohibited and may result in legal proceedings.</p>
              </div>

              <div>
                <h3 className="font-bold text-gray-900">1.3 User-Generated Content</h3>
                <p>By submitting reviews, feedback, comments, or any form of content, users grant the Platform a perpetual, irrevocable, worldwide, royalty-free license to use, reproduce, modify, publish, and display such content. Users represent that such content is original and does not violate third-party rights. The Platform reserves the right to remove or modify content at its sole discretion.</p>
              </div>

              <div>
                <h3 className="font-bold text-gray-900">1.4 Accuracy of Information</h3>
                <p>While reasonable efforts are made to ensure accuracy, the Platform makes no warranties regarding completeness, reliability, or timeliness of information. The Platform shall not be liable for any loss arising from reliance on such information and reserves the right to correct inaccuracies within a reasonable timeframe (up to 7 working days).</p>
              </div>

              <div>
                <h3 className="font-bold text-gray-900">1.5 Reviews & Opinions Disclaimer</h3>
                <p>All user opinions and reviews reflect individual perspectives and do not represent the Platform. The Platform disclaims all liability arising from such content.</p>
              </div>

              <div>
                <h3 className="font-bold text-gray-900">1.6 Platform Role</h3>
                <p>The Platform functions strictly as an independent intermediary connecting Tutors and Parents/Students. It does not provide teaching services, supervise sessions, or guarantee outcomes. All engagements occur independently between users.</p>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-xl font-bold text-brand-dark border-b border-gray-100 pb-2 mb-4">👤 2. USER ELIGIBILITY & REGISTRATION</h2>
            <p>Users must be legally competent to enter into binding agreements (18+ or under guardian supervision). All information provided must be accurate, complete, and current. Submission of false or misleading information may result in immediate suspension or termination without notice.</p>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-xl font-bold text-brand-dark border-b border-gray-100 pb-2 mb-4">💰 3. PAYMENT TERMS</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-gray-900">3.1 First Month Engagement Fee</h3>
                <p>For the initial month of engagement, the Platform facilitates the collection of the tuition fee from the Parent/Student to streamline onboarding and coordination of services. A portion of this amount shall be retained by the Platform towards service facilitation, administrative efforts, and operational support (50%), while the remaining amount shall be transferred to the Tutor within a reasonable period following completion of the first month. If the engagement concludes prior to completion of the full month, the payable amount shall be proportionately adjusted based on the number of sessions conducted.</p>
              </div>

              <div>
                <h3 className="font-bold text-gray-900">3.2 Subsequent Payments</h3>
                <p>From the second month onward, financial arrangements shall be conducted directly between the Tutor and the Parent/Student. The Platform disclaims all responsibility for payment disputes, delays, or defaults thereafter.</p>
              </div>

              <div>
                <h3 className="font-bold text-gray-900">3.3 Payment Authority</h3>
                <p>No individual, tutor, or third party is authorized to collect payments on behalf of the Platform. Any payments made outside official channels shall be undertaken at the user’s own risk.</p>
              </div>

              <div>
                <h3 className="font-bold text-gray-900">3.4 Refund & Adjustment</h3>
                <p>Refunds, if any, shall be granted solely at the discretion of the Platform. Service charges and completed sessions are strictly non-refundable.</p>
              </div>

              <div>
                <h3 className="font-bold text-gray-900">3.5 Processing Timelines</h3>
                <p>All financial transactions are subject to reasonable processing timelines and operational constraints.</p>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-xl font-bold text-brand-dark border-b border-gray-100 pb-2 mb-4">🧪 4. TRIAL CLASSES</h2>
            <p className="mb-4">Trial classes are extended by the Platform strictly as a limited, conditional, and non-binding facilitative arrangement, intended solely for the purpose of enabling an initial interaction between the Tutor and the Parent/Student, with a view to assessing compatibility, communication effectiveness, instructional methodology, subject comprehension alignment, behavioral comfort, and overall suitability for a potential long-term engagement.</p>
            <p className="font-semibold mb-4 text-gray-900">It is expressly clarified, acknowledged, and agreed by all users that trial sessions shall not, under any circumstances, be construed as:</p>
            <ul className="list-disc pl-5 mb-4 space-y-1">
              <li>A confirmation or guarantee of future engagement</li>
              <li>A binding contractual relationship between Tutor and Parent/Student</li>
              <li>An assurance of satisfaction, performance, or continuity</li>
            </ul>
            <p className="font-semibold mb-4 text-gray-900">The following conditions shall apply in a strict, absolute, and non-negotiable manner:</p>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-gray-900">1. Limitation of Trial Sessions</h3>
                <p>Under no circumstances shall more than two (2) trial sessions be conducted. This limitation is absolute, irrespective of user requests, dissatisfaction, scheduling conflicts, or subjective expectations.</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900">2. Nature and Scope of Trial Engagement</h3>
                <p>Trial sessions are exploratory in nature and shall not impose any obligation—financial, professional, or otherwise—on the Platform, the Tutor, or the Parent/Student to proceed further.</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900">3. Non-Compensatory Framework</h3>
                <p>Trial sessions shall ordinarily be treated as non-compensable unless otherwise explicitly agreed in writing by the Platform. Any expectation of compensation without such agreement shall be deemed invalid.</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900">4. Platform Non-Intervention Clause</h3>
                <p>The Platform shall not be responsible for mediating, supervising, or evaluating the quality, conduct, or outcome of trial sessions beyond facilitating the connection.</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900">5. No Guarantee or Warranty</h3>
                <p>The Platform expressly disclaims any and all guarantees, warranties, or representations regarding: Tutor capability or teaching effectiveness, Student responsiveness or participation, Compatibility between the parties.</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900">6. Termination Rights</h3>
                <p>The Platform reserves the absolute, unconditional, and unilateral right to terminate, suspend, or discontinue any trial arrangement at any stage, without assigning any reason whatsoever.</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900">7. User Responsibility Acknowledgment</h3>
                <p>Users acknowledge that: Participation in trial sessions shall constitute full, informed, and irrevocable acceptance of the above conditions.</p>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-xl font-bold text-brand-dark border-b border-gray-100 pb-2 mb-4">🎓 5. TUTOR RESPONSIBILITIES</h2>
            <p className="mb-4">Tutors shall maintain professional standards including punctuality, quality teaching, and respectful conduct. Any misconduct, negligence, or misrepresentation may result in immediate termination and restriction.</p>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-gray-900">5.1 Commitment</h3>
                <p>Acceptance of an assignment constitutes a binding obligation. Withdrawal without valid reason may lead to suspension.</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900">5.2 Demo Failure</h3>
                <p>Failure in two consecutive demos may result in discontinuation of opportunities.</p>
              </div>
            </div>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-xl font-bold text-brand-dark border-b border-gray-100 pb-2 mb-4">👨‍👩‍👧 6. PARENT / STUDENT RESPONSIBILITIES</h2>
            <p className="mb-4">Parents/Students shall provide a safe, respectful, and cooperative environment and ensure timely payments. The Platform shall not be liable for disputes between users.</p>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-gray-900">6.1 Misconduct & Legal Escalation</h3>
                <p>Users must first report disputes to the Platform and allow reasonable time for resolution. No legal action shall be initiated without prior notification to the Platform. Violation may result in suspension or termination.</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900">6.2 Grievance Redressal</h3>
                <p>Grievance Officer: Paradox Team<br/>
                Email: contact@paradoxtuition.in<br/>
                Phone: +91 63889 53289<br/>
                Acknowledgment within 48 hours<br/>
                Resolution within 7–10 working days</p>
              </div>
            </div>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-xl font-bold text-brand-dark border-b border-gray-100 pb-2 mb-4">🔁 7. REPLACEMENT POLICY</h2>
            <p className="mb-4">The Platform may, at its sole, exclusive, and unfettered discretion, attempt to facilitate the provision of a replacement Tutor in circumstances including but not limited to dissatisfaction, incompatibility, discontinuation, scheduling conflicts, behavioral concerns, or unforeseen unavailability. However, users expressly acknowledge, agree, and accept that:</p>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-gray-900">1. Non-Obligatory Nature</h3>
                <p>The provision of a replacement Tutor is a purely facilitative, goodwill-based effort and shall not be construed as a contractual obligation or guaranteed service.</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900">2. Availability Constraints</h3>
                <p>Replacement shall be subject to: Tutor availability, Geographic feasibility, Subject specialization requirements, Operational limitations.</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900">3. No Guarantee of Suitability</h3>
                <p>The Platform does not warrant, guarantee, or represent that any replacement Tutor shall meet or exceed user expectations.</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900">4. Limitation on Requests</h3>
                <p>Repeated, excessive, or unreasonable requests for replacements may be declined at the sole discretion of the Platform.</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900">5. Platform Immunity</h3>
                <p>The Platform shall not be liable for: Delays in replacement, Non-availability of suitable alternatives, Dissatisfaction arising from replacement Tutors.</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900">6. Final Authority Clause</h3>
                <p>All decisions regarding replacement shall remain final, binding, and non-negotiable.</p>
              </div>
            </div>
          </section>

          {/* Remaining Sections */}
          <section className="space-y-6">
            <div>
              <h2 className="text-xl font-bold text-brand-dark border-b border-gray-100 pb-2 mb-2">🚫 8. NON-CIRCUMVENTION</h2>
              <p>Users explicitly, irrevocably, and unconditionally agree that they shall not, directly or indirectly, engage in any act intended to bypass, circumvent, undermine, or otherwise avoid the Platform’s role, involvement, or entitlement in the facilitation of services. This includes, without limitation: Establishing direct financial arrangements outside the Platform, Encouraging off-platform engagement to avoid service charges, Sharing contact details with the intent to bypass the Platform. Any such act shall constitute a serious, material, and fundamental breach of these Terms. In such instances, the Platform reserves the right to: Immediately terminate access without notice, Permanently blacklist the user, Deny all present and future services, Initiate legal proceedings for recovery of damages, losses, or reputational harm. Users acknowledge that this clause is critical to the sustainability, fairness, and operational integrity of the Platform.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-brand-dark border-b border-gray-100 pb-2 mb-2">🔒 9. CONFIDENTIALITY</h2>
              <p>Users undertake a legally binding obligation to maintain strict, absolute, and perpetual confidentiality with respect to all Platform-related information, whether disclosed directly or indirectly. Confidential information shall include, but not be limited to: Revenue models and pricing structures, Business strategies and operational mechanisms, User data and communication details, Internal policies and procedural frameworks. Users shall: Not disclose such information to any third party, Not reproduce or circulate such information, Not utilize such information for personal, competitive, or commercial gain. Any breach shall result in: Immediate termination, Permanent blacklisting, Legal action, including claims for damages. This obligation shall survive indefinitely beyond termination.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-brand-dark border-b border-gray-100 pb-2 mb-2">⚠ 10. MISUSE & FRAUD</h2>
              <p>The Platform enforces a strict zero-tolerance policy against any form of misuse, abuse, fraud, or unethical conduct. Misuse shall include, but is not limited to: Submission of false, misleading, or fabricated information, Identity misrepresentation or impersonation, Harassment, abuse, or inappropriate conduct, Financial manipulation or payment fraud, Exploitation of system vulnerabilities. Upon detection, the Platform may: Immediately suspend or terminate access, Permanently blacklist the user, Report to legal authorities, Initiate civil or criminal proceedings. The Platform shall bear no liability for any consequences arising from such enforcement actions.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-brand-dark border-b border-gray-100 pb-2 mb-2">⚖ 11. LIMITATION OF LIABILITY</h2>
              <p>To the maximum extent permissible under law, the Platform shall be absolutely, unequivocally, and entirely exempt from any liability whatsoever, whether direct, indirect, incidental, consequential, special, exemplary, or punitive. This includes, but is not limited to: Academic failure or underperformance, Tutor negligence or misconduct, Student non-compliance or lack of effort, Financial losses or missed opportunities, Emotional distress, inconvenience, or dissatisfaction. Users expressly acknowledge that: The Platform acts solely as a facilitator, All risks are borne by the users. Under no circumstances shall the Platform’s liability exceed the service fee received.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-brand-dark border-b border-gray-100 pb-2 mb-2">🛡 12. INDEMNITY</h2>
              <p>Users agree to irrevocably indemnify, defend, and hold harmless the Platform from any and all claims, liabilities, damages, losses, costs, expenses, and legal fees arising from: Breach of these Terms, Misuse of the Platform, Violation of laws, Infringement of rights. This indemnity shall: Be continuing and unconditional, Survive termination indefinitely.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-brand-dark border-b border-gray-100 pb-2 mb-2">📉 13. NO GUARANTEE OF RESULTS</h2>
              <p>The Platform expressly disclaims any and all guarantees, assurances, warranties, or representations regarding academic outcomes. Users acknowledge that outcomes depend on multiple independent and uncontrollable factors, including: Student effort, Tutor compatibility, External academic conditions. No claim shall arise against the Platform for unsatisfactory results.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-brand-dark border-b border-gray-100 pb-2 mb-2">🔍 14. VERIFICATION DISCLAIMER</h2>
              <p>The Platform does not independently verify Tutor credentials unless explicitly stated. Users acknowledge full responsibility for conducting due diligence and waive all claims arising from reliance on Platform-listed information.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-brand-dark border-b border-gray-100 pb-2 mb-2">📵 15. COMMUNICATION CONSENT</h2>
              <p>Users provide unconditional consent to receive communications through all channels, including but not limited to calls, SMS, email, and WhatsApp. Such communication may include operational updates, promotions, and service notifications.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-brand-dark border-b border-gray-100 pb-2 mb-2">🌐 16. SERVICE AVAILABILITY</h2>
              <p>The Platform reserves unrestricted rights to modify, suspend, or discontinue services at any time without any liability. No liability shall arise from service interruptions, technical failures, or downtime.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-brand-dark border-b border-gray-100 pb-2 mb-2">📊 17. DATA USAGE</h2>
              <p>User data may be processed, analyzed, stored, and utilized for operational, analytical, and improvement purposes. All such use shall comply with applicable standards while protecting identifiable data.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-brand-dark border-b border-gray-100 pb-2 mb-2">⚡ 18. FORCE MAJEURE</h2>
              <p>The Platform shall not be liable for any delay or failure due to events beyond its control, including natural disasters, governmental actions, or technical disruptions.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-brand-dark border-b border-gray-100 pb-2 mb-2">🔗 19. OFF-PLATFORM DEALINGS</h2>
              <p>The Platform bears no responsibility whatsoever for any dealings outside its ecosystem. Users engaging independently do so entirely at their own risk.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-brand-dark border-b border-gray-100 pb-2 mb-2">📜 20. INTELLECTUAL PROPERTY</h2>
              <p>All intellectual property rights remain exclusively vested in the Platform. Unauthorized use shall result in legal action.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-brand-dark border-b border-gray-100 pb-2 mb-2">⚖ 21. DISPUTE RESOLUTION</h2>
              <p>The Platform shall act as mediator, and its decision shall be final and binding.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-brand-dark border-b border-gray-100 pb-2 mb-2">🌍 22. GOVERNING LAW</h2>
              <p>These Terms shall be governed exclusively by Indian law, and disputes shall fall under appropriate jurisdiction.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-brand-dark border-b border-gray-100 pb-2 mb-2">✅ 23. ACCEPTANCE</h2>
              <p>By proceeding, the user confirms: “I have read, understood, and agree to be legally bound by these Terms & Conditions.”</p>
            </div>

          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;
