export default function Modal({ title = "MODAL", children }) {
  return (
    <div className="w-[600px] shadow-lg p-8 flex flex-col items-center rounded-lg">
      <div className="w-full flex justify-between">
        <div className="invisible">&#10005;</div>
        <div>&#10005;</div>
      </div>
      <h1 className="text-3xl font-bold mb-8">{title}</h1>
      <div>{children}</div>
    </div>
  );
}
