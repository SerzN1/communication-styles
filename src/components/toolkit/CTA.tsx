import { Link } from 'react-router-dom';

import { ButtonHTMLAttributes, ReactNode } from 'react';

interface CTAProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  to?: string;
  children: ReactNode;
  className?: string;
}

const CTA = ({ to = '/assessment', children, className = '', ...props }: CTAProps) => (
  <div className={'text-center mb-20 ' + className}>
    <Link to={to}>
      <button
        className="bg-blue-600 text-white px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm hover:bg-blue-700 transition duration-300 inline-flex items-center cursor-pointer"
        type="button"
        {...props}
      >
        {children}
        <i className="fas fa-arrow-right ml-2 text-xl"></i>
      </button>
    </Link>
  </div>
);

export default CTA;
