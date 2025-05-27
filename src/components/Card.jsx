const Card = ({ className = "", children }) => (
  <div className={`style-card bg-white p-6 rounded-xl shadow-md ${className}`}>
    {children}
  </div>
);

export default Card;
