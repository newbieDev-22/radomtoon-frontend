export default function Dropdown({ data, onChange, title }) {
  return (
    <select
      className="p-2 indent-1 rounded-lg outline-none focus:outline-none border border-gray"
      onChange={(e) => onChange(e.target.value)}
    >
      <option disabled>{title}</option>
      {data.map((province) => (
        <option key={province} value={province}>
          {province}
        </option>
      ))}
    </select>
  );
}
