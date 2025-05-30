import { ComponentChildren } from 'preact';

interface H2Props {
  children: ComponentChildren;
  className?: string;
}

const H2 = ({ children, className = '' }: H2Props) => (
  <h2 className={`text-3xl font-extrabold text-gray-800 text-center ${className}`}>{children}</h2>
);

export default H2;
