import { ComponentChildren, JSX } from 'preact';

interface CardProps extends JSX.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: ComponentChildren;
}

const Card = ({ className = '', children, ...props }: CardProps) => (
  <div className={`style-card bg-white p-6 rounded-xl shadow-md ${className}`} {...props}>
    {children}
  </div>
);

export default Card;
