import Lottie from "lottie-react";
import LoadingLottie from "../assets/images/loading.json";

export default function Spinner({ transparent }) {
  return (
    <>
      <div
        className={`fixed inset-0 bg-black z-40 ${transparent ? "opacity-70" : ""}`}
      ></div>
      <div className="fixed inset-0 z-50 flex justify-center items-center">
        <Lottie animationData={LoadingLottie} loop={true} />
      </div>
    </>
  );
}
