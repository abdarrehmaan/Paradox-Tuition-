import React from 'react';

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  leftIcon?: React.ReactNode;
  options: { value: string; label: string }[];
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className = '', label, error, leftIcon, options, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-brand-dark mb-1.5 pl-1">
            {label}
          </label>
        )}
        <div className="relative">
          {leftIcon && (
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
              {leftIcon}
            </div>
          )}
          <select
            ref={ref}
            className={`w-full bg-white border appearance-none ${
              error ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 focus:border-brand-lightBlue focus:ring-brand-lightBlue/20'
            } rounded-xl py-2.5 px-4 text-brand-dark focus:outline-none focus:ring-4 transition-all duration-200 shadow-sm ${
              leftIcon ? 'pl-10' : ''
            } ${className}`}
            {...props}
          >
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-gray-400">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
        {error && <p className="mt-1.5 text-sm text-red-500 pl-1">{error}</p>}
      </div>
    );
  }
);

Select.displayName = 'Select';

export default Select;
