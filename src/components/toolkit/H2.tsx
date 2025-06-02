import { ComponentChildren, FunctionComponent } from 'preact';

interface H2Props {
  children: ComponentChildren;
  className?: string;
}

const H2: FunctionComponent<H2Props> = ({ children, className = '' }) => (
  <h2 className={`text-3xl font-extrabold text-gray-800 text-center ${className}`}>{children}</h2>
);

export default H2;
