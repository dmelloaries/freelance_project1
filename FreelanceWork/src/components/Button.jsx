
const Button = ({ text, className }) => {
  return (
    <button
      className={`px-6 py-2 rounded-lg font-semibold text-black shadow-[3px_3px_0_2px_black] hover:shadow-[6px_6px_0_2px_black] transition-shadow duration-300 border border-black ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
