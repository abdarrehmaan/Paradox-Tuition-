import React from 'react';

const Privacy: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container-custom max-w-4xl bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-gray-100">
        <h1 className="text-3xl md:text-5xl font-bold text-brand-dark mb-10 tracking-tight text-center flex items-center justify-center gap-4">
          <span>🔐</span> Privacy Policy
        </h1>

        <div className="space-y-8 text-gray-700 leading-relaxed md:text-lg">

          <section>
            <h2 className="text-xl font-bold text-brand-dark border-b border-gray-100 pb-2 mb-4">1. Introduction</h2>
            <p>The Platform is committed to safeguarding the privacy, integrity, and confidentiality of all personal information shared by its users, including Tutors, Parents, Students, and visitors.</p>
            <p className="mt-2">This Privacy Policy provides a comprehensive explanation of how data is collected, used, processed, disclosed, and protected.</p>
            <p className="mt-2 font-semibold">By accessing or using the Platform, users expressly consent to the practices described herein and acknowledge that such consent forms the basis of lawful data processing.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-dark border-b border-gray-100 pb-2 mb-4">2. Scope and Applicability</h2>
            <p className="mb-4">This Privacy Policy applies to all interactions carried out through or in connection with the Platform, including but not limited to:</p>
            <div className="space-y-3">
              <div><strong className="text-gray-900">Website Usage:</strong> Any browsing, navigation, or interaction with the Platform’s website, including viewing content, submitting forms, or accessing services.</div>
              <div><strong className="text-gray-900">User Registration and Onboarding:</strong> Information provided during sign-up, profile creation, or verification processes.</div>
              <div><strong className="text-gray-900">Service Facilitation:</strong> Data exchanged or processed during tutor-student matching, communication, and coordination.</div>
              <div><strong className="text-gray-900">Communication Channels:</strong> Interactions through calls, messages, emails, or third-party communication platforms.</div>
            </div>
            <p className="mt-4 font-semibold">This policy applies uniformly to all users, regardless of their role or level of engagement.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-dark border-b border-gray-100 pb-2 mb-4">3. Categories of Information Collected</h2>
            <p className="mb-4">The Platform may collect and process the following categories of information in a structured and lawful manner:</p>

            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-brand-blue text-lg">3.1 Personal Identification Information</h3>
                <p className="mb-2">This includes information that directly identifies an individual:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>Full Name:</strong> Collected for identification, communication, and record-keeping purposes.</li>
                  <li><strong>Contact Information:</strong> Including mobile number and email address, used for communication, verification, and service coordination.</li>
                  <li><strong>Residential Address / Location:</strong> Used for tutor-student matching, geographical filtering, and service delivery planning.</li>
                  <li><strong>Profile Images (Optional):</strong> Users may voluntarily upload images to personalize their profile; such data is handled with care and not used beyond intended purposes.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-brand-blue text-lg">3.2 Professional and Educational Information</h3>
                <p className="mb-2">Relevant particularly for Tutors and Students:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>Academic Qualifications:</strong> Used to assess tutor suitability and match them with appropriate requirements.</li>
                  <li><strong>Subject Expertise and Experience:</strong> Helps in creating accurate tutor profiles and ensuring relevant connections.</li>
                  <li><strong>Student Requirements:</strong> Includes class, subject preferences, timing, and academic needs.</li>
                  <li><strong>Preferences and Availability:</strong> Helps in optimizing matching and scheduling.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-brand-blue text-lg">3.3 Transactional and Financial Information</h3>
                <p className="mb-2">The Platform may collect limited financial data necessary for service facilitation:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>Payment Records:</strong> Includes transaction amounts, dates, and status.</li>
                  <li><strong>Billing Details:</strong> May include basic information required for invoicing or record maintenance.</li>
                  <li><strong>Exclusion of Sensitive Data:</strong> The Platform does not collect or store sensitive financial credentials such as card numbers, CVV, or OTPs.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-brand-blue text-lg">3.4 Communication and Interaction Data</h3>
                <p className="mb-2">To ensure smooth service operations:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>Messages and Conversations:</strong> Records of communication exchanged through Platform-facilitated channels.</li>
                  <li><strong>Feedback and Reviews:</strong> User-submitted evaluations and ratings used for transparency and service improvement.</li>
                  <li><strong>Support Queries:</strong> Details shared while seeking assistance or raising complaints.</li>
                  <li><strong>Call Records (if applicable):</strong> May include logs or summaries for quality assurance and dispute resolution.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-brand-blue text-lg">3.5 Technical and Usage Data</h3>
                <p className="mb-2">Automatically collected data to improve system performance:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>Device Information:</strong> Including device type, operating system, and browser details.</li>
                  <li><strong>IP Address:</strong> Used for security, analytics, and location-based services.</li>
                  <li><strong>Usage Behavior:</strong> Includes pages visited, time spent, and interaction patterns.</li>
                  <li><strong>Log Data:</strong> Maintained for troubleshooting, monitoring, and system optimization.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-brand-blue text-lg">3.6 Voluntarily Provided Information</h3>
                <p className="mb-2">Any additional information shared by users, including:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Notes or preferences shared during communication.</li>
                  <li>Additional details provided in forms or discussions.</li>
                </ul>
                <p className="mt-2">Such data is processed only for relevant purposes.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-dark border-b border-gray-100 pb-2 mb-4">4. Purpose of Data Collection and Processing</h2>
            <p className="mb-4">The Platform processes collected data for clearly defined and legitimate purposes:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Service Facilitation:</strong> Enabling efficient connection between Tutors and Students based on requirements and availability.</li>
              <li><strong>Onboarding and Profile Management:</strong> Creating, maintaining, and verifying user profiles.</li>
              <li><strong>Payment Handling and Record Maintenance:</strong> Tracking financial transactions and ensuring transparency.</li>
              <li><strong>Communication and Notifications:</strong> Sending updates, confirmations, reminders, and support responses.</li>
              <li><strong>Customer Support and Dispute Resolution:</strong> Addressing complaints, resolving issues, and ensuring user satisfaction.</li>
              <li><strong>Platform Improvement:</strong> Analyzing usage trends to enhance performance, features, and user experience.</li>
              <li><strong>Fraud Prevention and Security:</strong> Detecting and preventing unauthorized or suspicious activities.</li>
              <li><strong>Legal Compliance:</strong> Meeting regulatory requirements and responding to lawful requests.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-dark border-b border-gray-100 pb-2 mb-4">5. Legal Basis of Processing</h2>
            <p className="mb-4">Data processing is carried out based on:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>User Consent:</strong> Explicit agreement provided during usage.</li>
              <li><strong>Service Necessity:</strong> Processing required to deliver platform services.</li>
              <li><strong>Legitimate Interests:</strong> Improving services and maintaining platform integrity.</li>
              <li><strong>Legal Obligations:</strong> Compliance with applicable laws and regulations.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-dark border-b border-gray-100 pb-2 mb-4">6. Data Sharing and Disclosure</h2>
            <p className="mb-4">The Platform maintains strict confidentiality but may share data under specific circumstances:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Service Facilitation:</strong> Limited sharing between Tutors and Parents for coordination.</li>
              <li><strong>Legal Requirements:</strong> Disclosure to authorities when mandated by law.</li>
              <li><strong>Fraud Prevention:</strong> Sharing necessary information to prevent misuse or unauthorized activities.</li>
            </ul>
            <p className="mt-4 font-semibold text-gray-900">The Platform does not engage in selling or renting user data.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-dark border-b border-gray-100 pb-2 mb-4">7. Data Security Measures</h2>
            <p className="mb-4">The Platform adopts and maintains a combination of technical, administrative, and procedural safeguards designed to protect personal information from unauthorized access, misuse, alteration, disclosure, or destruction.</p>
            <p className="mb-4 font-semibold text-gray-900">These measures include, but are not limited to:</p>
            <ul className="list-disc pl-5 space-y-3 mb-4">
              <li><strong>Access Control Mechanisms:</strong> Personal data is accessible only to authorized personnel, partners, or systems on a strictly need-to-know basis. Access rights are periodically reviewed and updated to prevent unauthorized exposure.</li>
              <li><strong>Data Storage Practices:</strong> Information is stored using secure systems and infrastructure that aim to minimize risks associated with data breaches, leakage, or corruption.</li>
              <li><strong>Monitoring and Internal Controls:</strong> The Platform may implement logging, monitoring, and internal audit mechanisms to detect unusual or suspicious activity and ensure compliance with internal policies.</li>
              <li><strong>Data Handling Protocols:</strong> Personnel handling sensitive data are expected to adhere to confidentiality obligations and standardized data-handling procedures.</li>
            </ul>
            <p className="mb-4 font-semibold text-gray-900">Despite the above measures, users acknowledge and agree that:</p>
            <ul className="list-disc pl-5 space-y-2 mb-4 text-red-700">
              <li>No system of data transmission or storage can be guaranteed to be completely secure</li>
              <li>The Platform cannot ensure absolute protection against all potential cyber threats</li>
            </ul>
            <p>Accordingly, the Platform shall not be held liable for any unauthorized access, loss, or disclosure of data arising from circumstances beyond its reasonable control.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-dark border-b border-gray-100 pb-2 mb-4">8. User Responsibility</h2>
            <p className="mb-4">Users play a critical role in maintaining the security and confidentiality of their own information. By using the Platform, users agree to:</p>
            <ul className="list-disc pl-5 space-y-3 mb-4">
              <li><strong>Maintain Confidentiality:</strong> Users shall take reasonable precautions to protect their personal and contact information from unauthorized access or misuse.</li>
              <li><strong>Exercise Discretion:</strong> Users are advised not to share sensitive personal or financial information unnecessarily, especially in informal or off-platform communications.</li>
              <li><strong>Verify Counterparties:</strong> Users should exercise independent judgment when interacting with other users and should not rely solely on information available on the Platform.</li>
              <li><strong>Use Secure Communication Practices:</strong> Users should avoid sharing confidential details over unsecured channels and should ensure that communications are conducted responsibly.</li>
            </ul>
            <p className="mb-4 font-semibold text-gray-900">The Platform shall not be responsible or liable for:</p>
            <ul className="list-disc pl-5 space-y-2 text-red-700">
              <li>Any misuse, disclosure, or exploitation of data voluntarily shared by users</li>
              <li>Any consequences arising from user negligence or lack of due diligence</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-dark border-b border-gray-100 pb-2 mb-4">9. Data Retention Policy</h2>
            <p className="mb-4">The Platform retains personal data only for as long as it is reasonably necessary to fulfill the purposes outlined in this Privacy Policy, including but not limited to service delivery, dispute resolution, and legal compliance.</p>
            <p className="mb-4 font-semibold text-gray-900">The retention framework includes:</p>
            <ul className="list-disc pl-5 space-y-3 mb-4">
              <li><strong>Active Data Usage Period:</strong> Data is actively retained while the user continues to engage with the Platform and avail services.</li>
              <li><strong>Post-Service Retention:</strong> Certain data may be retained for a reasonable duration after service completion to address disputes, enforce agreements, or comply with regulatory requirements.</li>
              <li><strong>Archival and Anonymization:</strong> Data that is no longer required may be securely archived, anonymized, or aggregated for analytical purposes.</li>
              <li><strong>Deletion Protocols:</strong> Upon request or when no longer necessary, data may be permanently deleted or de-identified, subject to operational and legal constraints.</li>
            </ul>
            <p>The Platform reserves the right to retain certain information where required for legitimate business interests or legal obligations.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-dark border-b border-gray-100 pb-2 mb-4">10. Cookies and Tracking Technologies</h2>
            <p className="mb-4">The Platform may utilize cookies, web beacons, and similar tracking technologies to enhance functionality and improve user experience.</p>
            <p className="mb-4 font-semibold text-gray-900">These technologies may be used for:</p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li><strong>Session Management:</strong> Maintaining user sessions and enabling smooth navigation across the Platform.</li>
              <li><strong>Performance and Analytics:</strong> Understanding how users interact with the Platform, including pages visited, time spent, and navigation patterns.</li>
              <li><strong>Personalization:</strong> Customizing content, recommendations, and user experience based on preferences and behavior.</li>
              <li><strong>Security Purposes:</strong> Detecting unusual activity and preventing unauthorized access.</li>
            </ul>
            <p className="mb-4 font-semibold text-gray-900">Users have the option to:</p>
            <ul className="list-disc pl-5 space-y-2 mb-4 text-blue-700">
              <li>Disable cookies through browser settings</li>
              <li>Control tracking preferences</li>
            </ul>
            <p>However, disabling such features may limit certain functionalities or user experience.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-dark border-b border-gray-100 pb-2 mb-4">11. Third-Party Services and Integrations</h2>
            <p className="mb-4">The Platform may, from time to time, integrate with or provide access to third-party services, applications, or websites.</p>
            <p className="mb-4 font-semibold text-gray-900">Users acknowledge that:</p>
            <ul className="list-disc pl-5 space-y-3 mb-4">
              <li><strong>Independent Privacy Practices:</strong> Such third-party platforms operate independently and have their own privacy policies and data handling practices.</li>
              <li><strong>Limited Control:</strong> The Platform does not control, monitor, or take responsibility for how third parties collect, use, or protect user data.</li>
              <li><strong>User Responsibility:</strong> Users are encouraged to review the privacy policies of any third-party services they interact with before sharing information.</li>
            </ul>
            <p className="mb-4 font-semibold text-gray-900">The Platform shall not be liable for:</p>
            <ul className="list-disc pl-5 space-y-2 text-red-700">
              <li>Any loss, misuse, or unauthorized access of data handled by third parties</li>
              <li>Any disputes arising from interactions with external services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-dark border-b border-gray-100 pb-2 mb-4">12. Consent to Communication</h2>
            <p className="mb-4">By registering with or using the Platform, users expressly consent to receiving communications through various channels, including but not limited to:</p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Voice calls</li>
              <li>SMS or messaging services</li>
              <li>WhatsApp or similar digital platforms</li>
              <li>Email notifications</li>
            </ul>
            <p className="mb-4 font-semibold text-gray-900">Such communications may include:</p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Service updates and confirmations</li>
              <li>Transactional and operational messages</li>
              <li>Support and grievance responses</li>
              <li>Promotional or informational content (where applicable)</li>
            </ul>
            <p className="mb-4 font-semibold text-gray-900">Users acknowledge that:</p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Certain communications are essential for service delivery and cannot be opted out of</li>
              <li>Non-essential communications may be limited or opted out of where feasible</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-dark border-b border-gray-100 pb-2 mb-4">13. Rights of Users</h2>
            <p className="mb-4">Subject to applicable laws and reasonable operational limitations, users may exercise certain rights concerning their personal data, including:</p>
            <ul className="list-disc pl-5 space-y-3 mb-4">
              <li><strong>Right to Access:</strong> Users may request access to the personal information held about them.</li>
              <li><strong>Right to Rectification:</strong> Users may request correction of inaccurate, incomplete, or outdated information.</li>
              <li><strong>Right to Erasure (Deletion):</strong> Users may request deletion of their data, subject to retention requirements.</li>
              <li><strong>Right to Withdraw Consent:</strong> Users may withdraw consent for specific processing activities, where applicable.</li>
              <li><strong>Right to Restrict Processing:</strong> Users may request limitation of data usage under certain conditions.</li>
            </ul>
            <p className="mb-4 font-semibold text-gray-900">All such requests:</p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Must be submitted through official communication channels</li>
              <li>Will be processed within a reasonable timeframe</li>
            </ul>
            <p>The Platform reserves the right to decline or limit requests where required by law or operational necessity.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-dark border-b border-gray-100 pb-2 mb-4">14. Children’s Privacy</h2>
            <p className="mb-4">The Platform recognizes the importance of protecting the privacy of minors.</p>
            <ul className="list-disc pl-5 space-y-3 mb-4">
              <li><strong>Parental Involvement:</strong> Services involving minors must be facilitated under the supervision and consent of a parent or legal guardian.</li>
              <li><strong>Data Handling:</strong> Information related to minors is collected only to the extent necessary for service delivery.</li>
              <li><strong>Responsibility:</strong> Parents/guardians are responsible for monitoring interactions and ensuring safe use of the Platform.</li>
            </ul>
            <p className="font-semibold text-blue-800">The Platform does not knowingly collect personal data from minors without appropriate consent.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-dark border-b border-gray-100 pb-2 mb-4">15. Limitation of Liability</h2>
            <p className="mb-4 font-semibold text-gray-900">To the fullest extent permitted by applicable law, the Platform shall not be held liable for:</p>
            <ul className="list-disc pl-5 space-y-3 mb-4">
              <li><strong>Unauthorized Access:</strong> Data breaches resulting from user negligence, weak security practices, or sharing of credentials.</li>
              <li><strong>External Threats:</strong> Cyber-attacks, hacking incidents, or technical failures beyond reasonable control.</li>
              <li><strong>User-to-User Data Sharing:</strong> Misuse of information exchanged voluntarily between Tutors and Parents/Students.</li>
              <li><strong>Indirect or Consequential Losses:</strong> Any loss of data, business, reputation, or opportunity arising from data-related incidents.</li>
            </ul>
            <p className="font-semibold text-gray-900">Users acknowledge that use of the Platform is at their own risk.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-dark border-b border-gray-100 pb-2 mb-4">16. Updates to Privacy Policy</h2>
            <p className="mb-4">The Platform reserves the right to modify, update, or revise this Privacy Policy at any time without prior notice.</p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>Updates may reflect changes in legal requirements, operational practices, or service offerings</li>
              <li>Users are encouraged to review the policy periodically</li>
            </ul>
            <p className="font-semibold text-gray-900">Continued use of the Platform after updates constitutes acceptance of the revised policy.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-dark border-b border-gray-100 pb-2 mb-4">17. Grievance Redressal Mechanism</h2>
            <p className="mb-4">For any concerns, complaints, or queries related to privacy or data handling, users may contact the designated Grievance Officer:</p>

            <div className="bg-gray-100 p-6 rounded-lg mb-6 border border-gray-200">
              <p><strong>Grievance Officer:</strong> Azmam Alam</p>
              <p><strong>Email:</strong> paradoxservicess@gmail.com</p>
              <p><strong>Address:</strong> Prayagraj India</p>
            </div>

            <p className="mb-4 font-semibold text-gray-900">Resolution Process:</p>
            <ul className="list-disc pl-5 space-y-3 mb-4">
              <li><strong>Acknowledgment:</strong> Complaints will be acknowledged within 48 hours of receipt.</li>
              <li><strong>Review & Investigation:</strong> The Platform may review the complaint, request additional information, and assess the issue.</li>
              <li><strong>Resolution Timeline:</strong> A response or resolution will be provided within 7–10 working days, depending on complexity.</li>
              <li><strong>Action Measures:</strong> The Platform may take appropriate action, including warnings, suspension, or corrective measures where required.</li>
            </ul>
          </section>

        </div>
      </div>
    </div>
  );
};

export default Privacy;
