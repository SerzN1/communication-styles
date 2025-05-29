import React, { ReactNode, HTMLAttributes } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: ReactNode;
}

const Card: React.FC<CardProps> = ({ className = '', children, ...props }) => (
  <div className={`style-card bg-white p-6 rounded-xl shadow-md ${className}`} {...props}>
    {children}
  </div>
);

export default Card;
