import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, ...props }) => {
  const baseStyles = 'px-4 py-2 font-bold text-white rounded focus:outline-none focus:shadow-outline';
  const variantStyles =
    variant === 'primary'
      ? 'bg-blue-500 hover:bg-blue-700'
      : 'bg-gray-500 hover:bg-gray-700';

  return (
    <button
      className={`${baseStyles} ${variantStyles}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
