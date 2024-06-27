export default function Dropdown({ data, onChange, title }) {
  return (
    <div className="w-full mb-4">
      <select
        className="bg-gray-200 p-2 rounded-lg"
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">{title}</option>
        {data.map((province, index) => (
          <option key={index} value={province}>
            {province}
          </option>
        ))}
      </select>
    </div>
  );
}
