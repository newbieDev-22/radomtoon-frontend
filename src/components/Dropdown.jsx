export default function Dropdown({ data, onChange, title, className }) {
  return (
    <select
      className={className}
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
