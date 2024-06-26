export default function FilterItem({ page, onClick }) {
  return (
    <button
      className="font-medium hover:scale-[110%] active:text-supporter-saturate"
      onClick={onClick}
    >
      {page}
    </button>
  );
}
