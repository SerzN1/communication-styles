import { Link } from 'react-router-dom';

const CTAButton = ({ to, children, className = '', ...props }) => (
  <Link to={to} {...props}>
    <button
      className={
        "bg-blue-600 text-white px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm hover:bg-blue-700 transition duration-300 inline-flex items-center cursor-pointer" +
        className
      }
      type="button"
    >
      {children}
      <i className="fas fa-arrow-right ml-2 text-xl"></i>
    </button>
  </Link>
);

export default CTAButton;
