import { ButtonHTMLAttributes, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: ReactNode;
  className?: string;
}

export const Button = ({
  variant = 'primary',
  children,
  className = '',
  ...props
}: ButtonProps) => {
  const baseClasses = 'px-6 py-3 rounded-lg font-semibold transition-colors duration-200';
  const variantClasses = variant === 'primary'
    ? 'bg-blue-600 text-white hover:bg-blue-500'
    : 'bg-white text-blue-600 border-2 border-blue-600 hover:bg-gray-50';

  return (
    <button
      className={twMerge(baseClasses, variantClasses, className)}
      {...props}
    >
      {children}
    </button>
  );
}; 