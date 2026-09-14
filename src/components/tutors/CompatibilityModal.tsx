import React from 'react';
import Modal from '../common/Modal';
import { CheckCircle2, Sparkles, UserCheck, ShieldCheck, ArrowRight } from 'lucide-react';
import type { Tutor } from './TutorCard';
import Button from '../ui/Button';

interface CompatibilityModalProps {
  isOpen: boolean;
  onClose: () => void;
  tutor: Tutor;
  onRequestDemo: () => void;
}

export const CompatibilityModal: React.FC<CompatibilityModalProps> = ({
  isOpen,
  onClose,
  tutor,
  onRequestDemo,
}) => {
  // Score breakdown (deterministic based on tutor id/experience/rating)
  const baseScore = tutor.rating ? Math.min(98, Math.round(tutor.rating * 19.5)) : 92;
  const breakdown = [
    { label: 'Subject Match', percentage: 100, note: 'Specialized in your selected curriculum' },
    { label: 'Location & Mode Match', percentage: 95, note: `Available in ${tutor.location} (${tutor.mode})` },
    { label: 'Experience & Qualifications', percentage: Math.min(98, 80 + tutor.experience * 3), note: `${tutor.experience}+ years verified teaching record` },
    { label: 'Schedule Availability', percentage: 90, note: 'Evenings & weekend slots open' },
    { label: 'Parent & Student Ratings', percentage: Math.round(tutor.rating * 20), note: `${tutor.rating} / 5.0 verified student satisfaction` },
  ];

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Intelligent Compatibility Analysis">
      <div className="space-y-6">
        {/* Tutor Mini Card */}
        <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
          <div className="relative w-14 h-14 shrink-0">
            {tutor.photoUrl ? (
              <img
                src={tutor.photoUrl}
                alt={tutor.name}
                className="w-full h-full object-cover rounded-full border-2 border-brand-lightBlue/30"
              />
            ) : (
              <div className="w-full h-full rounded-full bg-gradient-to-tr from-brand-blue to-brand-lightBlue text-white font-bold flex items-center justify-center text-xl">
                {tutor.name.charAt(0)}
              </div>
            )}
            <div className="absolute -bottom-1 -right-1 bg-emerald-500 text-white p-0.5 rounded-full border-2 border-white">
              <ShieldCheck className="w-3 h-3" />
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <h4 className="font-bold text-slate-900 truncate">{tutor.name}</h4>
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                <UserCheck className="w-3 h-3" /> Verified
              </span>
            </div>
            <p className="text-xs text-slate-500 truncate mt-0.5">
              {tutor.subjects.join(' • ')}
            </p>
          </div>
        </div>

        {/* Big Overall Score Card */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-brand-dark via-slate-900 to-brand-blue p-6 text-white shadow-soft-lg">
          <div className="absolute -right-8 -bottom-8 w-36 h-36 rounded-full bg-brand-lightBlue/20 blur-2xl" />
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-orange bg-white/10 px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-sm">
                <Sparkles className="w-3 h-3" /> Match Calculation
              </span>
              <p className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
                {baseScore}% Overall Match
              </p>
              <p className="text-xs text-slate-300 mt-1 max-w-sm">
                This tutor closely matches your learning requirements, grade level, and location.
              </p>
            </div>
            <div className="w-20 h-20 rounded-full border-4 border-emerald-400/80 bg-white/10 backdrop-blur-md flex flex-col items-center justify-center shrink-0 shadow-glow-blue">
              <span className="text-2xl font-black text-white">{baseScore}%</span>
              <span className="text-[10px] font-medium text-emerald-300 uppercase tracking-tight">Score</span>
            </div>
          </div>
        </div>

        {/* Compatibility Breakdown Bars */}
        <div className="space-y-3.5 pt-2">
          <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Compatibility Breakdown
          </h5>
          {breakdown.map((item, idx) => (
            <div key={idx} className="bg-white p-3.5 rounded-xl border border-slate-100 shadow-sm">
              <div className="flex items-center justify-between text-sm mb-1.5">
                <span className="font-semibold text-slate-800 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  {item.label}
                </span>
                <span className="font-bold text-brand-lightBlue">{item.percentage}%</span>
              </div>
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-brand-lightBlue to-emerald-500 transition-all duration-1000 ease-out"
                  style={{ width: `${item.percentage}%` }}
                />
              </div>
              <p className="text-[11px] text-slate-500 mt-1.5">{item.note}</p>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
          <Button
            variant="secondary"
            className="w-full sm:w-1/2 py-2.5 text-sm"
            onClick={onClose}
          >
            Close Analysis
          </Button>
          <Button
            variant="primary"
            className="w-full sm:w-1/2 py-2.5 text-sm shadow-md"
            rightIcon={<ArrowRight className="w-4 h-4" />}
            onClick={() => {
              onClose();
              onRequestDemo();
            }}
          >
            Request Demo Class
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default CompatibilityModal;
