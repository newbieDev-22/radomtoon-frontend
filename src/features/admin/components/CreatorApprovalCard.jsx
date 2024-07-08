export default function CreatorApprovalCard({ name, onClick }) {
  return (
    <button
      className="bg-gray-200 p-4 rounded-lg font-bold hover:scale-[102%] active:scale-100 transition hover:bg-gray-300"
      onClick={onClick}
    >
      <div>{name}</div>
    </button>
  );
}
