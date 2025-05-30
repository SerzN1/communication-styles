import { ComponentChildren } from 'preact';

interface CardTitleProps {
  children: ComponentChildren;
  className?: string;
}

const CardTitle = ({ children, className = '' }: CardTitleProps) => (
  <h2 className={`text-2xl font-bold text-gray-800 mb-6 ${className}`}>{children}</h2>
);

export default CardTitle;
