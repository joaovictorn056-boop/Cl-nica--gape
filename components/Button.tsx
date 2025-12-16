import React from 'react';

interface ButtonProps {
  text: string;
  onClick?: () => void;
  href?: string;
  className?: string;
  variant?: 'primary' | 'secondary';
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  text, 
  onClick, 
  href, 
  className = '', 
  variant = 'primary',
  fullWidth = false
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-4 text-base font-bold transition-all duration-300 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-emerald-600 hover:bg-emerald-700 text-white focus:ring-emerald-500",
    secondary: "bg-white hover:bg-gray-50 text-emerald-700 border-2 border-emerald-600 focus:ring-emerald-500"
  };

  const widthClass = fullWidth ? "w-full" : "";

  const content = (
    <>
      <i className="fab fa-whatsapp text-xl mr-2"></i>
      {text}
    </>
  );

  if (href) {
    return (
      <a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer"
        className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
      >
        {content}
      </a>
    );
  }

  return (
    <button 
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
    >
      {content}
    </button>
  );
};

export default Button;