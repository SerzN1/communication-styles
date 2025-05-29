import { ReactNode } from 'react';

interface H3Props {
  children: ReactNode;
  className?: string;
}

const H3 = ({ children, className = '' }: H3Props) => (
  <h3 className={`text-lg font-medium text-gray-800 mb-6 ${className}`}>{children}</h3>
);

export default H3;
