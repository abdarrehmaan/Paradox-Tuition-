import React from 'react';
import { Loader2 } from 'lucide-react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className = '',
      variant = 'primary',
      size = 'md',
      isLoading,
      leftIcon,
      rightIcon,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';
    
    const variants = {
      primary: 'bg-brand-lightBlue text-white hover:bg-blue-600 shadow-soft hover:shadow-soft-lg hover:-translate-y-0.5 active:translate-y-0 focus:ring-brand-lightBlue',
      secondary: 'bg-white text-brand-dark border border-gray-200 hover:bg-gray-50 shadow-sm hover:shadow-soft focus:ring-gray-200',
      outline: 'bg-transparent text-brand-lightBlue border border-brand-lightBlue hover:bg-brand-lightBlue/10 focus:ring-brand-lightBlue',
      ghost: 'bg-transparent text-gray-600 hover:bg-gray-100 hover:text-brand-dark focus:ring-gray-200',
    };

    const sizes = {
      sm: 'text-sm px-3 py-1.5 rounded-lg',
      md: 'text-sm px-4 py-2.5 rounded-xl',
      lg: 'text-base px-6 py-3 rounded-2xl',
    };

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
        {!isLoading && leftIcon && <span className="mr-2">{leftIcon}</span>}
        {children}
        {!isLoading && rightIcon && <span className="ml-2">{rightIcon}</span>}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
