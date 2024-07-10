import { useEffect } from "react";
import PaymentFeature from "../features/payment/components/PaymentFeature";
import TierSummaryCard from "../features/payment/components/TierSummaryCard";
import PaymentGIF from "../assets/images/payment.json";
import Lottie from "lottie-react";
export default function PaymentPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex py-14 px-20 justify-center gap-20 bg-creator-normal">
      <div className="flex flex-row  p-3 rounded-lg shadow-lg bg-white">
        <div className="flex items-center px-4 ">
          <PaymentFeature />
        </div>
        <div className="flex items-center px-4">
          <TierSummaryCard />
        </div>
      </div>
      <div>
        <Lottie animationData={PaymentGIF} loop={true} />
      </div>
    </div>
  );
}
