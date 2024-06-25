export default function Modal({ title = "MODAL", children, onClose }) {
  return (
    <>
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="w-[600px] bg-white shadow-lg p-8 flex flex-col items-center rounded-lg relative">
        <div className="w-full flex justify-between mb-4">
          <div className="invisible">&#10005;</div>
          <button onClick={onClose}>&#10005;</button>
        </div>
        <h1 className="text-3xl font-bold mb-8">{title}</h1>
        <div>{children}</div>
      </div>
    </div>
      <div className="fixed inset-0 bg-gray-200 opacity-40" onClick={onClose}></div>
      </>
  );
}

