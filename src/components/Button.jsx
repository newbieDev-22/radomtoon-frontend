const buttonColor = {
  orange: "bg-[#F4AE72] text-white active:bg-[#F8CBA5]",
  red: "bg-[#F55B5B] text-white active:bg-[#F88C8C]",
  green: "bg-[#44C125] text-white active:bg-[#97E783]",
};

export default function Button({ children, moveDown, color }) {
  return (
    <button
      className={`${moveDown} ${buttonColor[color]} p-3 rounded-lg transform transition-transform duration-200 hover:scale-105`}
    >
      {children}
    </button>
  );
}
