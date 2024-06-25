import PaymentFeature from "../features/payment/components/PaymentFeature";
import TierSummaryCard from "../features/payment/components/TierSummaryCard";

export default function Payment() {
  return (
    <div className="flex justify-between p-20 px-[15rem] items-center">
      <div className="">
        <PaymentFeature />
      </div>
      <div className="border ">
        <TierSummaryCard />
      </div>
    </div>
  );
}
