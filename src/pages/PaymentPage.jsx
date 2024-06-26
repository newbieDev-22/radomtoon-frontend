import PaymentFeature from "../features/payment/components/PaymentFeature";
import TierSummaryCard from "../features/payment/components/TierSummaryCard";

export default function PaymentPage() {
  return (
    <div className="grid grid-cols-2 p-10">
      <div className="flex items-center px-24">
        <PaymentFeature />
      </div>
      <div className="flex items-center px-24">
        <TierSummaryCard />
      </div>
    </div>
  );
}
