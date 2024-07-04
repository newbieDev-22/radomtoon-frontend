const heightMapping = {
  full: "h-full",
  normal: "h-[42px]",
};

export default function Input({
  placeholder,
  error,
  type = "text",
  name,
  value,
  onChange,
  height = "normal",
}) {
  return (
    <>
      <input
        className={`w-full ${
          heightMapping[height]
        } indent-2 px-2 border-[1.5px] outline-none rounded-lg focus:border-radomtoon-dark transition duration-300 placeholder-gray-400 ${
          error ? "border-red-500" : "border-gray"
        }`}
        type={type}
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={onChange}
      />
      {error && <small className="text-red-500 text-xs font-semibold">{error}</small>}
    </>
  );
}
