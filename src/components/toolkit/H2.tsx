import { ReactNode } from 'react';

interface H2Props {
  children: ReactNode;
  className?: string;
}

const H2 = ({ children, className = '' }: H2Props) => (
  <h2 className={`text-3xl font-extrabold text-gray-800 text-center ${className}`}>{children}</h2>
);

export default H2;
