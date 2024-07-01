export default function FilterItem({ page, onClick }) {
  return (
    <button
      className="font-medium hover:scale-[110%] active:scale-100"
      onClick={onClick}
    >
      {page}
    </button>
  );
}
