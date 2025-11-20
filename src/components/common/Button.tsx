interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';  // ← added ghost here
  size?: 'sm' | 'md' | 'lg';
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '',
  ...props 
}) => {
  const variants = {
    primary:   'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-slate-800 text-white hover:bg-slate-900',
    outline:   'border border-slate-300 text-slate-700 hover:bg-slate-50',
    ghost:     'text-slate-600 hover:bg-slate-100 hover:text-slate-900', // ← new ghost style
  };
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2',
    lg: 'px-6 py-3 text-lg'
  };

  return (
    <button 
      className={`
        ${variants[variant]} 
        ${sizes[size]} 
        rounded-lg font-medium transition-colors 
        disabled:opacity-50 disabled:cursor-not-allowed 
        flex items-center justify-center 
        ${className}
      `.trim()}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;