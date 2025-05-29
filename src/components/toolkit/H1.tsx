import { ReactNode } from 'react';

interface H1Props {
  children: ReactNode;
  className?: string;
}

const H1 = ({ children, className = '' }: H1Props) => (
  <h1 className={`text-4xl font-extrabold text-gray-900 ${className}`}>{children}</h1>
);

export default H1;
