import { ComponentChildren, FunctionComponent, JSX } from 'preact';

interface CardProps extends JSX.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: ComponentChildren;
}

const Card: FunctionComponent<CardProps> = ({ className = '', children, ...props }) => (
  <div className={`style-card bg-white p-6 rounded-xl shadow-md ${className}`} {...props}>
    {children}
  </div>
);

export default Card;
