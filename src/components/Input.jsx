import React from "react";

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
        className={`w-full p-2 border-[1.5px] outline-none rounded-lg ${
          error ? "border-red-500" : "border-gray"
        }`}
        type={type}
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={onChange}
      />
      {error && (
        <small className="text-red-500 mt-1 block absolute top-full left-0">
          {error}
        </small>
      )}
    </div>
  );
}
