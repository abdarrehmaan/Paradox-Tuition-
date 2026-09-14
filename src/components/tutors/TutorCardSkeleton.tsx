import React from 'react';

export const TutorCardSkeleton: React.FC = () => {
  return (
    <div className="bg-white rounded-3xl border border-slate-100 p-6 shadow-soft flex flex-col md:flex-row gap-6 relative overflow-hidden">
      {/* Avatar skeleton */}
      <div className="flex-shrink-0 flex justify-center md:justify-start">
        <div className="w-24 h-24 md:w-32 md:h-32 rounded-3xl shimmer-skeleton" />
      </div>

      {/* Content skeleton */}
      <div className="flex-1 flex flex-col justify-between space-y-4">
        <div>
          {/* Top row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
            <div className="space-y-2">
              <div className="h-6 w-48 rounded-lg shimmer-skeleton" />
              <div className="h-4 w-32 rounded-md shimmer-skeleton" />
            </div>
            <div className="h-8 w-24 rounded-full shimmer-skeleton" />
          </div>

          {/* Badges row */}
          <div className="flex flex-wrap gap-2 mt-4">
            <div className="h-7 w-20 rounded-full shimmer-skeleton" />
            <div className="h-7 w-24 rounded-full shimmer-skeleton" />
            <div className="h-7 w-28 rounded-full shimmer-skeleton" />
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1.5 w-full sm:w-auto">
            <div className="h-3 w-16 rounded shimmer-skeleton" />
            <div className="h-6 w-28 rounded-lg shimmer-skeleton" />
          </div>
          <div className="flex gap-2 w-full sm:w-auto">
            <div className="h-11 w-32 rounded-xl shimmer-skeleton" />
            <div className="h-11 w-36 rounded-xl shimmer-skeleton" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorCardSkeleton;
