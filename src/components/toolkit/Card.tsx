const Card = ({ className = "", children, ...props }) => (
  <div className={`style-card bg-white p-6 rounded-xl shadow-md ${className}`} {...props}>
    {children}
  </div>
);

export default Card;
