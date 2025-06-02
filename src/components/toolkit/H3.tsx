import { ComponentChildren, FunctionComponent } from 'preact';

interface H3Props {
  children: ComponentChildren;
  className?: string;
}

const H3: FunctionComponent<H3Props> = ({ children, className = '' }) => (
  <h3 className={`text-lg font-medium text-gray-800 mb-6 ${className}`}>{children}</h3>
);

export default H3;
