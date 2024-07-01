export default function Dropdown({ data, onChange, title, error }) {
  return (
    <div className="flex flex-col w-full mb-4">
      <select
        className={`bg-gray-200 p-2 rounded-lg w-64 ${
          error ? "border-red-500 border-[1.5px]" : ""
        }`}
        // className="bg-gray-200 p-2 rounded-lg w-64 focus:outline-none"
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">{title}</option>
        {data.map((province, index) => (
          <option key={index} value={province}>
            {province}
          </option>
        ))}
      </select>
      {error && <small className="text-red-500">{error}</small>}
    </div>
  );
}
