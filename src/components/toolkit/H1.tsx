import { ComponentChildren, FunctionComponent } from 'preact';

interface H1Props {
  children: ComponentChildren;
  className?: string;
}

const H1: FunctionComponent<H1Props> = ({ children, className = '' }) => (
  <h1 className={`text-4xl font-extrabold text-gray-900 ${className}`}>{children}</h1>
);

export default H1;
