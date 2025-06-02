import { ComponentChildren, FunctionComponent, JSX } from 'preact';
import { FaArrowRight } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

interface CTAProps extends JSX.HTMLAttributes<HTMLButtonElement> {
  to?: string;
  children: ComponentChildren;
  className?: string;
}

const CTA: FunctionComponent<CTAProps> = ({ to = '/assessment', children, className = '', ...props }) => (
  <div className={'text-center mb-20 ' + className}>
    <Link to={to}>
      <button
        className="bg-blue-600 text-white px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm hover:bg-blue-700 transition duration-300 inline-flex items-center cursor-pointer"
        type="button"
        {...props}
      >
        {children}
        <FaArrowRight className="ml-2 text-xl" />
      </button>
    </Link>
  </div>
);

export default CTA;
