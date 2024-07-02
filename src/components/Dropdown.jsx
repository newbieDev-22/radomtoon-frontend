export default function Dropdown({ data, onChange, title }) {
  return (
    <select
      className="h-full indent-2 rounded-lg outline-none focus:outline-none border border-gray w-full"
      onChange={(e) => onChange(e.target.value)}
    >
      <option disabled>{title}</option>
      {data.map((el) => (
        <option key={el} value={el}>
          {el}
        </option>
      ))}
    </select>
  );
}
