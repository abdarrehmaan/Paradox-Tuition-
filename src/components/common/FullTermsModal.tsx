import React from 'react';
import Modal from './Modal';
import Button from '../ui/Button';

interface FullTermsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAgree?: () => void;
}

export const FullTermsModal: React.FC<FullTermsModalProps> = ({
  isOpen,
  onClose,
  onAgree,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Terms & Conditions — Paradox Tuition Services">
      <div className="space-y-4 text-xs sm:text-sm text-slate-700 max-h-[60vh] overflow-y-auto pr-2 leading-relaxed whitespace-pre-wrap select-text">
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

Under no circumstances shall more than two (2) trial sessions be conducted. Trial sessions are exploratory in nature and shall not impose any obligation on either party to proceed further.

🔒 5. CODE OF CONDUCT & SAFETY
All users agree to maintain professional conduct, mutual respect, and legal adherence during all sessions. Tutors and students are expected to maintain an environment focused on educational progress.

✅ ACCEPTANCE OF TERMS
By checking the agreement box and submitting your requirements, you confirm that you have read, understood, and agreed to be legally bound by these Terms & Conditions.`}
      </div>

      <div className="pt-4 mt-4 border-t border-slate-200 flex justify-end gap-2">
        <Button variant="secondary" onClick={onClose} size="sm">
          Close
        </Button>
        {onAgree && (
          <Button
            variant="primary"
            size="sm"
            onClick={() => {
              onAgree();
              onClose();
            }}
          >
            I Agree & Accept
          </Button>
        )}
      </div>
    </Modal>
  );
};

export default FullTermsModal;
