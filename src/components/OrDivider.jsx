const OrDivider = ({ text = "Or" }) => (
  <div className="flex items-center my-6">
    <div className="flex-1 h-px bg-gray-300"></div>
    <span className="px-4 text-gray-500 text-sm font-medium">{text}</span>
    <div className="flex-1 h-px bg-gray-300"></div>
  </div>
);

export default OrDivider;
