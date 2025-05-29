const CardTitle = ({ children, className = "" }) => (
  <h2 className={`text-3xl font-extrabold text-gray-800 text-center ${className}`}>{children}</h2>
);

export default CardTitle;
