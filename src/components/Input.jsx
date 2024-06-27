export default function Input({
  type = "text",
  placeholder,
  value,
  name,
  onChange,
  error,
}) {
  return (
    <div className={`relative w-full mb-4`}>
      <input
        className={`w-full indent-2 p-2 border-[1.5px] outline-none rounded-lg bg-gray-00 focus:border-radomtoon-dark transition duration-300 placeholder-gray-500 ${
          error ? "border-red-500 mt-2" : "border-gray"
        }`}
        type={type}
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={onChange}
      />
      {error && (
        <small className="text-red-500 block absolute top-full left-0">
          {error}
        </small>
      )}
    </div>
  );
}
