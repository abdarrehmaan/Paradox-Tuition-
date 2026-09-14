import React from 'react';
import { Sparkles } from 'lucide-react';

interface MatchScoreBadgeProps {
  score: number;
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
  className?: string;
}

export const MatchScoreBadge: React.FC<MatchScoreBadgeProps> = ({
  score,
  size = 'md',
  showLabel = true,
  className = '',
}) => {
  const isHighMatch = score >= 90;
  const isGoodMatch = score >= 80 && score < 90;

  const colorStyles = isHighMatch
    ? 'bg-emerald-50 text-emerald-700 border-emerald-200/80 shadow-emerald-500/10'
    : isGoodMatch
    ? 'bg-blue-50 text-blue-700 border-blue-200/80 shadow-blue-500/10'
    : 'bg-amber-50 text-amber-700 border-amber-200/80 shadow-amber-500/10';

  const dotColor = isHighMatch
    ? 'bg-emerald-500'
    : isGoodMatch
    ? 'bg-blue-500'
    : 'bg-amber-500';

  const sizeStyles = {
    sm: 'text-xs px-2.5 py-0.5 gap-1.5',
    md: 'text-xs sm:text-sm font-semibold px-3 py-1 gap-2',
    lg: 'text-base font-bold px-4 py-1.5 gap-2.5',
  };

  return (
    <div
      className={`inline-flex items-center rounded-full border shadow-sm font-semibold tracking-wide transition-transform hover:scale-105 ${colorStyles} ${sizeStyles[size]} ${className}`}
    >
      <span className="relative flex h-2 w-2">
        <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${dotColor}`} />
        <span className={`relative inline-flex rounded-full h-2 w-2 ${dotColor}`} />
      </span>
      <span>{score}%</span>
      {showLabel && <span className="font-medium opacity-90">Match</span>}
      {isHighMatch && <Sparkles className="w-3.5 h-3.5 opacity-80" />}
    </div>
  );
};

export default MatchScoreBadge;
