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

            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-gray-900 mb-2">📌 6.1 General Responsibilities</h3>
                <p className="mb-2">Parents/Students shall:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Provide a Safe and Respectful Environment:</strong> Ensure that the Tutor is treated with dignity, respect, and professionalism at all times, whether sessions are conducted online or offline. Any form of harassment, intimidation, discrimination, or inappropriate behavior shall be strictly prohibited.</li>
                  <li><strong>Ensure Timely and Fair Payments:</strong> Adhere to the agreed fee structure and ensure that payments are made promptly and in good faith, without unnecessary delay, withholding, or dispute, except where justified.</li>
                  <li><strong>Maintain Transparency and Honesty:</strong> Provide accurate and complete information regarding academic requirements, expectations, schedule, and any relevant details necessary for effective service delivery.</li>
                  <li><strong>Facilitate a Conducive Learning Environment:</strong> Ensure that the student is available, prepared, and in a suitable environment for learning during scheduled sessions.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 mb-2">⚠️ 6.2 Prohibited Conduct</h3>
                <p className="mb-2">Parents/Students shall not:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Engage in any form of abusive, threatening, or disrespectful conduct toward Tutors</li>
                  <li>Misrepresent academic needs, schedules, or commitments</li>
                  <li>Attempt to exploit, manipulate, or unfairly pressure Tutors</li>
                  <li>Interfere with the Tutor’s ability to deliver services effectively</li>
                  <li>Encourage or participate in any activity that violates Platform policies, including non-circumvention</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 mb-2">⚖️ 6.3 Misconduct and Escalation Protocol</h3>
                <p className="mb-2">In the event of any dispute, concern, or allegation of misconduct:</p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li>Parents/Students shall first notify the Platform and provide reasonable details of the issue</li>
                  <li>The Platform shall be given a reasonable opportunity to review, mediate, and attempt resolution</li>
                </ul>
                <p className="mb-2 font-semibold">Users expressly agree that:</p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li>No formal complaint, legal proceeding, or escalation to authorities shall be initiated without first informing the Platform</li>
                  <li>Cooperation in good faith during the resolution process is mandatory</li>
                </ul>
                <p>Failure to follow this protocol may result in restriction or termination of access to Platform services.</p>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 mb-2">🚫 6.4 Platform Liability Disclaimer</h3>
                <p className="mb-2">The Platform acts solely as an intermediary facilitating connections and shall not be held liable for:</p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li>Disputes, disagreements, or conflicts between Parents/Students and Tutors</li>
                  <li>Quality, effectiveness, or outcomes of teaching services</li>
                  <li>Behavior, conduct, or actions of Tutors or Students during or after engagement</li>
                  <li>Any financial, academic, emotional, or personal consequences arising from such interactions</li>
                </ul>
                <p>Users acknowledge that all engagements are independent arrangements entered into at their own discretion and risk.</p>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 mb-2">🧾 6.5 Responsibility for Independent Decisions</h3>
                <p className="mb-2">Parents/Students are solely responsible for:</p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li>Evaluating the suitability of a Tutor prior to engagement</li>
                  <li>Monitoring the progress and conduct of the learning process</li>
                  <li>Making independent decisions regarding continuation, modification, or termination of services</li>
                </ul>
                <p>The Platform does not guarantee compatibility, satisfaction, or outcomes.</p>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 mb-2">🔒 6.6 Continuing Obligations</h3>
                <p className="mb-2">The responsibilities outlined herein shall:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Apply throughout the duration of engagement</li>
                  <li>Continue to apply to all interactions originating from the Platform</li>
                  <li>Remain enforceable even after cessation of services where relevant</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 mb-2">⚠️ 6.7 Consequences of Breach</h3>
                <p className="mb-2">Any violation of this section may result in, at the sole discretion of the Platform:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Suspension or termination of access</li>
                  <li>Restriction from future services</li>
                  <li>Reporting or escalation in case of serious misconduct</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 mb-2">🧠 6.8 Acknowledgment</h3>
                <p className="mb-2">By using the Platform, Parents/Students acknowledge that:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>They have read and understood these responsibilities</li>
                  <li>They agree to comply fully and in good faith</li>
                  <li>These obligations are essential to maintaining a safe, fair, and effective ecosystem for all users</li>
                </ul>
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

            <div className="space-y-4">
              <h2 className="text-xl font-bold text-brand-dark border-b border-gray-100 pb-2">🛡️ 12. INDEMNITY</h2>
              <p>Users expressly, irrevocably, and unconditionally agree to indemnify, defend, and hold harmless the Platform, its owners, affiliates, employees, representatives, agents, and partners from and against any and all claims, demands, actions, proceedings, liabilities, damages, losses, costs, expenses, and legal fees (including reasonable attorney fees) arising out of or in connection with:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Breach of Terms:</strong> Any violation, non-compliance, or breach of these Terms & Conditions, whether intentional or unintentional.</li>
                <li><strong>Misuse of the Platform:</strong> Any unauthorized, unlawful, unethical, or improper use of the Platform, including misuse of services, features, or user interactions.</li>
                <li><strong>Violation of Applicable Laws:</strong> Any act or omission that results in non-compliance with applicable laws, regulations, or legal obligations.</li>
                <li><strong>Infringement of Rights:</strong> Any violation or alleged violation of third-party rights, including intellectual property rights, privacy rights, contractual rights, or any other legal entitlement.</li>
                <li><strong>User-to-User Interactions:</strong> Any dispute, misconduct, or claim arising between Tutors and Parents/Students, including financial, behavioral, or service-related issues.</li>
              </ul>

              <div className="pt-2">
                <h3 className="font-bold text-gray-900 mb-2">⚖️ 12.1 Scope and Nature of Indemnity</h3>
                <p className="mb-2">This indemnity shall:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Be Continuing and Absolute:</strong> Remain in effect at all times, regardless of the status of the user’s engagement with the Platform.</li>
                  <li><strong>Be Unconditional:</strong> Apply irrespective of whether the Platform has been negligent or otherwise involved, except where prohibited by law.</li>
                  <li><strong>Survive Termination:</strong> Continue indefinitely even after termination, suspension, or discontinuation of services.</li>
                  <li><strong>Cover Direct and Indirect Losses:</strong> Extend to all forms of damages, including direct, indirect, incidental, consequential, and reputational losses.</li>
                </ul>
              </div>

              <div className="pt-2">
                <h3 className="font-bold text-gray-900 mb-2">🧾 12.2 Defense and Cooperation</h3>
                <p className="mb-2">Users agree to:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Cooperate fully with the Platform in the defense of any claim</li>
                  <li>Provide necessary information, documents, or assistance when required</li>
                  <li>Not settle or resolve any claim affecting the Platform without prior written consent</li>
                </ul>
              </div>

              <div className="pt-2">
                <h3 className="font-bold text-gray-900 mb-2">🔒 12.3 Platform Rights</h3>
                <p className="mb-2">The Platform reserves the right to:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Assume exclusive defense and control of any matter subject to indemnification</li>
                  <li>Recover all costs incurred, including legal and administrative expenses</li>
                  <li>Take appropriate action to protect its interests</li>
                </ul>
              </div>
            </div>

            <div className="space-y-4 pt-6">
              <h2 className="text-xl font-bold text-brand-dark border-b border-gray-100 pb-2">📉 13. NO GUARANTEE OF RESULTS</h2>
              <p>The Platform expressly disclaims any and all guarantees, warranties, assurances, or representations—whether express or implied—regarding academic outcomes, performance improvements, or results arising from the use of its services.</p>

              <div className="pt-2">
                <h3 className="font-bold text-gray-900 mb-2">📊 13.1 Nature of Services</h3>
                <p className="mb-2">Users acknowledge that:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>The Platform only facilitates connections between Tutors and Students</li>
                  <li>It does not control, supervise, or influence the delivery of educational services</li>
                  <li>It does not evaluate or guarantee the effectiveness of teaching methods</li>
                </ul>
              </div>

              <div className="pt-2">
                <h3 className="font-bold text-gray-900 mb-2">🔍 13.2 Factors Affecting Outcomes</h3>
                <p className="mb-2">Academic and learning outcomes are dependent on numerous independent and uncontrollable factors, including but not limited to:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Student Effort and Participation:</strong> Level of dedication, discipline, and consistency in learning.</li>
                  <li><strong>Tutor Compatibility:</strong> Alignment between teaching style and student learning preferences.</li>
                  <li><strong>External Academic Conditions:</strong> School curriculum, exam patterns, institutional support, and environment.</li>
                  <li><strong>Personal and Environmental Factors:</strong> Health, mental focus, home environment, and external distractions.</li>
                </ul>
              </div>

              <div className="pt-2">
                <h3 className="font-bold text-gray-900 mb-2">⚠️ 13.3 Disclaimer of Liability</h3>
                <p className="mb-2">Accordingly:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>The Platform shall not be held liable for any dissatisfaction, underperformance, or failure to achieve expected results</li>
                  <li>No claim, demand, or action shall arise against the Platform based on academic outcomes</li>
                </ul>
              </div>

              <div className="pt-2">
                <h3 className="font-bold text-gray-900 mb-2">🧠 13.4 User Acknowledgment</h3>
                <p className="mb-2">Users expressly acknowledge that:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Educational outcomes are inherently uncertain</li>
                  <li>Engagement with Tutors is undertaken at their own discretion and risk</li>
                </ul>
              </div>
            </div>

            <div className="space-y-4 pt-6">
              <h2 className="text-xl font-bold text-brand-dark border-b border-gray-100 pb-2">🔍 14. VERIFICATION DISCLAIMER</h2>
              <p>The Platform does not independently verify, authenticate, or guarantee the credentials, qualifications, experience, or background of Tutors unless explicitly stated.</p>

              <div className="pt-2">
                <h3 className="font-bold text-gray-900 mb-2">📌 14.1 Nature of Information</h3>
                <p className="mb-2">Users acknowledge that:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Information provided on the Platform is primarily based on self-declaration by Tutors</li>
                  <li>The Platform may not conduct background checks, document verification, or credential validation in all cases</li>
                </ul>
              </div>

              <div className="pt-2">
                <h3 className="font-bold text-gray-900 mb-2">⚠️ 14.2 User Responsibility</h3>
                <p className="mb-2">Users are solely responsible for:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Conducting independent due diligence before engaging with any Tutor</li>
                  <li>Verifying credentials, qualifications, and suitability</li>
                  <li>Assessing compatibility and trustworthiness</li>
                </ul>
              </div>

              <div className="pt-2">
                <h3 className="font-bold text-gray-900 mb-2">🚫 14.3 Limitation of Liability</h3>
                <p className="mb-2">The Platform shall not be held liable for:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Misrepresentation, inaccuracy, or falsification of information by Tutors</li>
                  <li>Any consequences arising from reliance on such information</li>
                  <li>Any loss, damage, or dispute resulting from such reliance</li>
                </ul>
              </div>

              <div className="pt-2">
                <h3 className="font-bold text-gray-900 mb-2">🧾 14.4 Waiver of Claims</h3>
                <p className="mb-2">Users expressly waive any and all claims against the Platform arising from or related to:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Verification failures</li>
                  <li>Reliance on Platform-listed information</li>
                  <li>Engagement decisions based on such information</li>
                </ul>
              </div>
            </div>

            <div className="space-y-4 pt-6">
              <h2 className="text-xl font-bold text-brand-dark border-b border-gray-100 pb-2">📵 15. COMMUNICATION CONSENT</h2>
              <p>By registering with or using the Platform, users provide their explicit, informed, unconditional, and continuing consent to receive communications from the Platform through various channels, including but not limited to: Voice calls, SMS and messaging services, Email communications, WhatsApp or similar digital communication platforms.</p>

              <div className="pt-2">
                <h3 className="font-bold text-gray-900 mb-2">📩 15.1 Nature of Communications</h3>
                <p className="mb-2">Such communications may include:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Operational Messages:</strong> Account updates, onboarding information, session confirmations, and service-related notifications.</li>
                  <li><strong>Transactional Communications:</strong> Payment confirmations, reminders, and financial updates.</li>
                  <li><strong>Support and Grievance Responses:</strong> Replies to user queries, complaints, or assistance requests.</li>
                  <li><strong>Promotional and Informational Content:</strong> Offers, updates, announcements, and relevant service-related information.</li>
                </ul>
              </div>

              <div className="pt-2">
                <h3 className="font-bold text-gray-900 mb-2">⚠️ 15.2 User Acknowledgment</h3>
                <p className="mb-2">Users acknowledge that:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Certain communications are essential for service delivery and cannot be opted out of</li>
                  <li>Communication may occur at reasonable times as per operational requirements</li>
                  <li>Standard messaging or communication charges may apply as per user’s telecom provider</li>
                </ul>
              </div>

              <div className="pt-2">
                <h3 className="font-bold text-gray-900 mb-2">🚫 15.3 Limitation of Liability</h3>
                <p className="mb-2">The Platform shall not be held liable for:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Delays, failures, or non-delivery of messages due to network or third-party issues</li>
                  <li>Miscommunication arising from incorrect contact details provided by users</li>
                </ul>
              </div>

              <div className="pt-2">
                <h3 className="font-bold text-gray-900 mb-2">🔒 15.4 Continuing Consent</h3>
                <p className="mb-2">This consent shall:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Remain valid throughout the duration of the user’s association with the Platform</li>
                  <li>Continue unless explicitly withdrawn where applicable</li>
                  <li>Extend to all communication channels used by the Platform</li>
                </ul>
              </div>
            </div>

            <div className="space-y-4 pt-6">
              <h2 className="text-xl font-bold text-brand-dark border-b border-gray-100 pb-2">🌐 16. SERVICE AVAILABILITY</h2>
              <p>The Platform reserves the absolute, unrestricted, and discretionary right to modify, suspend, restrict, limit, or discontinue any part of its services, features, functionalities, or operations at any time, with or without prior notice and without incurring any liability whatsoever.</p>

              <div className="pt-2">
                <h3 className="font-bold text-gray-900 mb-2">⚙️ 16.1 Nature of Service Provision</h3>
                <p className="mb-2">Users acknowledge and agree that:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>The Platform operates on a best-effort basis and does not guarantee uninterrupted, continuous, or error-free availability of services</li>
                  <li>Access to the Platform may be affected by maintenance activities, system upgrades, technical issues, or external dependencies</li>
                </ul>
              </div>

              <div className="pt-2">
                <h3 className="font-bold text-gray-900 mb-2">⚠️ 16.2 Service Interruptions</h3>
                <p className="mb-2">Interruptions may occur due to, but not limited to:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Scheduled or unscheduled maintenance</li>
                  <li>Server downtime or infrastructure failures</li>
                  <li>Internet connectivity issues</li>
                  <li>Third-party service disruptions</li>
                </ul>
              </div>

              <div className="pt-2">
                <h3 className="font-bold text-gray-900 mb-2">🚫 16.3 Limitation of Liability</h3>
                <p className="mb-2">The Platform shall not be liable for:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Temporary or permanent unavailability of services</li>
                  <li>Loss of data, opportunities, or business arising from service interruptions</li>
                  <li>Any inconvenience or disruption caused to users</li>
                </ul>
              </div>

              <div className="pt-2">
                <h3 className="font-bold text-gray-900 mb-2">🔒 16.4 Platform Discretion</h3>
                <p className="mb-2">The Platform reserves the right to:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Introduce, remove, or alter features at its sole discretion</li>
                  <li>Restrict access to certain users or regions</li>
                  <li>Modify service structure without obligation to compensate users</li>
                </ul>
              </div>
            </div>

            <div className="space-y-4 pt-6">
              <h2 className="text-xl font-bold text-brand-dark border-b border-gray-100 pb-2">📊 17. DATA USAGE</h2>
              <p>The Platform may collect, process, store, analyze, and utilize user data in a lawful and structured manner for operational, analytical, and service improvement purposes.</p>

              <div className="pt-2">
                <h3 className="font-bold text-gray-900 mb-2">📌 17.1 Scope of Data Usage</h3>
                <p className="mb-2">Data may be used for:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Operational Efficiency:</strong> Managing user interactions, matching services, and platform functionality</li>
                  <li><strong>Analytical Insights:</strong> Understanding user behavior, trends, and engagement patterns</li>
                  <li><strong>Service Enhancement:</strong> Improving features, performance, and user experience</li>
                  <li><strong>Security and Monitoring:</strong> Detecting fraud, preventing misuse, and maintaining system integrity</li>
                </ul>
              </div>

              <div className="pt-2">
                <h3 className="font-bold text-gray-900 mb-2">🔍 17.2 Nature of Data Processing</h3>
                <p className="mb-2">The Platform may:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Aggregate and anonymize user data for analytical purposes</li>
                  <li>Process data using automated or manual systems</li>
                  <li>Retain data for internal evaluation and improvement</li>
                </ul>
              </div>

              <div className="pt-2">
                <h3 className="font-bold text-gray-900 mb-2">🔒 17.3 Data Protection Commitment</h3>
                <p className="mb-2">All such usage shall:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Be carried out in accordance with applicable legal and regulatory standards</li>
                  <li>Avoid disclosure of personally identifiable information beyond necessary purposes</li>
                  <li>Maintain reasonable safeguards to protect user privacy</li>
                </ul>
              </div>

              <div className="pt-2">
                <h3 className="font-bold text-gray-900 mb-2">⚠️ 17.4 Limitation of Liability</h3>
                <p className="mb-2">The Platform shall not be liable for:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Analytical outcomes derived from aggregated data</li>
                  <li>Any indirect consequences arising from internal data usage</li>
                </ul>
              </div>
            </div>

            <div className="space-y-4 pt-6">
              <h2 className="text-xl font-bold text-brand-dark border-b border-gray-100 pb-2">⚡ 18. FORCE MAJEURE</h2>
              <p>The Platform shall not be held liable or responsible for any failure, delay, interruption, or inability to perform its obligations where such failure arises due to events beyond its reasonable control.</p>

              <div className="pt-2">
                <h3 className="font-bold text-gray-900 mb-2">🌍 18.1 Covered Events</h3>
                <p className="mb-2">Such events include, but are not limited to:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Natural disasters (earthquakes, floods, fires, pandemics)</li>
                  <li>Governmental actions, regulations, or restrictions</li>
                  <li>War, civil unrest, or public disturbances</li>
                  <li>Power outages or infrastructure breakdowns</li>
                  <li>Internet or telecommunication failures</li>
                  <li>Cyber-attacks or system-wide disruptions</li>
                </ul>
              </div>

              <div className="pt-2">
                <h3 className="font-bold text-gray-900 mb-2">⚠️ 18.2 Effect of Force Majeure</h3>
                <p className="mb-2">In such circumstances:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Obligations of the Platform shall be suspended for the duration of the event</li>
                  <li>The Platform shall not be considered in breach of its obligations</li>
                </ul>
              </div>

              <div className="pt-2">
                <h3 className="font-bold text-gray-900 mb-2">🔄 18.3 Resumption of Services</h3>
                <p className="mb-2">The Platform shall make reasonable efforts to resume normal operations once the Force Majeure event ceases.</p>
              </div>
            </div>

            <div className="space-y-4 pt-6">
              <h2 className="text-xl font-bold text-brand-dark border-b border-gray-100 pb-2">🔗 19. OFF-PLATFORM DEALINGS</h2>
              <p>The Platform shall bear no responsibility, liability, or accountability whatsoever for any dealings, communications, agreements, or transactions that occur outside its ecosystem.</p>

              <div className="pt-2">
                <h3 className="font-bold text-gray-900 mb-2">📌 19.1 Independent Engagements</h3>
                <p className="mb-2">Users engaging in direct or independent arrangements:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Do so entirely at their own discretion and risk</li>
                  <li>Assume full responsibility for outcomes, payments, and disputes</li>
                </ul>
              </div>

              <div className="pt-2">
                <h3 className="font-bold text-gray-900 mb-2">⚠️ 19.2 Limitation of Platform Involvement</h3>
                <p className="mb-2">The Platform shall not:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Mediate disputes arising from off-platform interactions</li>
                  <li>Provide support, refunds, or intervention in such cases</li>
                  <li>Be liable for any losses or damages incurred</li>
                </ul>
              </div>

              <div className="pt-2">
                <h3 className="font-bold text-gray-900 mb-2">🚫 19.3 Waiver of Claims</h3>
                <p className="mb-2">Users expressly waive any and all claims against the Platform arising from:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Off-platform agreements</li>
                  <li>Independent financial transactions</li>
                  <li>Direct communication outside Platform control</li>
                </ul>
              </div>
            </div>

            <div className="space-y-4 pt-6">
              <h2 className="text-xl font-bold text-brand-dark border-b border-gray-100 pb-2">📜 20. INTELLECTUAL PROPERTY</h2>
              <p>All intellectual property rights associated with the Platform are and shall remain the exclusive property of the Platform.</p>

              <div className="pt-2">
                <h3 className="font-bold text-gray-900 mb-2">🧠 20.1 Scope of Intellectual Property</h3>
                <p className="mb-2">This includes, but is not limited to:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Website design, layout, and structure</li>
                  <li>Logos, branding elements, and trademarks</li>
                  <li>Content, text, graphics, and materials</li>
                  <li>Software, features, and functionality</li>
                </ul>
              </div>

              <div className="pt-2">
                <h3 className="font-bold text-gray-900 mb-2">🚫 20.2 Restrictions on Use</h3>
                <p className="mb-2">Users shall not:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Copy, reproduce, distribute, or modify any content</li>
                  <li>Use Platform materials for commercial purposes</li>
                  <li>Reverse-engineer or attempt to extract proprietary elements</li>
                </ul>
              </div>

              <div className="pt-2">
                <h3 className="font-bold text-gray-900 mb-2">⚖️ 20.3 Enforcement Rights</h3>
                <p className="mb-2">Any unauthorized use shall result in:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Immediate legal action</li>
                  <li>Claims for damages, injunctions, or penalties</li>
                  <li>Restriction of access to the Platform</li>
                </ul>
              </div>
            </div>

            <div className="space-y-4 pt-6">
              <h2 className="text-xl font-bold text-brand-dark border-b border-gray-100 pb-2">⚖️ 21. DISPUTE RESOLUTION</h2>
              <p>In the event of any dispute, disagreement, or claim arising between users or involving the Platform:</p>

              <div className="pt-2">
                <h3 className="font-bold text-gray-900 mb-2">📌 21.1 Internal Resolution First</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Users agree to first approach the Platform for resolution</li>
                  <li>The Platform shall attempt to mediate in good faith</li>
                </ul>
              </div>

              <div className="pt-2">
                <h3 className="font-bold text-gray-900 mb-2">⚠️ 21.2 Binding Nature of Decision</h3>
                <p className="mb-2">Users agree that:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>The Platform’s decision shall be final and binding for matters within its scope</li>
                  <li>Users shall cooperate in the resolution process</li>
                </ul>
              </div>

              <div className="pt-2">
                <h3 className="font-bold text-gray-900 mb-2">🚫 21.3 Limitation of Platform Liability</h3>
                <p className="mb-2">The Platform’s role is limited to facilitation and mediation and shall not be liable for:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Outcomes of disputes</li>
                  <li>Enforcement of user agreements</li>
                </ul>
              </div>

              <div className="pt-2">
                <h3 className="font-bold text-gray-900 mb-2">🧾 21.4 Escalation</h3>
                <p className="mb-2">Where disputes cannot be resolved internally:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Parties may pursue remedies under applicable law</li>
                  <li>Subject to jurisdiction defined herein</li>
                </ul>
              </div>
            </div>

            <div className="space-y-4 pt-6 pb-6">
              <h2 className="text-xl font-bold text-brand-dark border-b border-gray-100 pb-2">🇮🇳 22. GOVERNING LAW & JURISDICTION</h2>
              <p>These Terms & Conditions shall be governed by and construed in accordance with the laws of India.</p>

              <div className="pt-2">
                <h3 className="font-bold text-gray-900 mb-2">⚖️ 22.1 Jurisdiction</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>All disputes arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the competent courts in the applicable region</li>
                  <li>Users agree to submit to such jurisdiction without objection</li>
                </ul>
              </div>

              <div className="pt-2">
                <h3 className="font-bold text-gray-900 mb-2">🧾 22.2 Applicability of Law</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Any provision found invalid under applicable law shall not affect the enforceability of remaining provisions</li>
                  <li>The Terms shall be interpreted in a manner consistent with applicable legal frameworks</li>
                </ul>
              </div>
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
