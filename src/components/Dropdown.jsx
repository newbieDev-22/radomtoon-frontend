const CLASS_NAME_DEFAULT =
  "h-full indent-2 rounded-lg outline-none focus:outline-none border border-gray w-full";

export default function Dropdown({
  data,
  onChange,
  title,
  className = CLASS_NAME_DEFAULT,
  selectValue,
}) {
  return (
    <select className={className} onChange={(e) => onChange(e.target.value)}>
      <option disabled>{title}</option>
      {data.map((el) => (
        <option key={el} value={el} selected={el === selectValue}>
          {el}
        </option>
      ))}
    </select>
  );
}
