import { SpinnerIcon } from "../icons";

export default function Spinner({ transparent }) {
  return (
    <>
      <div
        className={`fixed inset-0 bg-brack z-40 ${transparent ? "opacity-70" : ""}`}
      ></div>
      <div className="fixed inset-0 z-50 flex justify-center items-center animate-spin">
        <SpinnerIcon className={" fill-purple-600 w-14 h-14"} />
      </div>
    </>
  );
}
