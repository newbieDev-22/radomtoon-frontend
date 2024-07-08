import { useParams } from "react-router-dom";
import { useStore } from "../../../store/useStore";
import { useEffect } from "react";

export default function TierSummaryCard() {
  const { productId, tierId } = useParams();
  const setTierPending = useStore((state) => state.setTierPending);

  useEffect(() => {
    setTierPending(productId, tierId);
  }, [setTierPending, productId, tierId]);

  const tierPendingPayment = useStore((state) => state.tierPendingPayment);

  return (
    <div className="card bg-base-100 w-96 p-5 ">
      <figure className="p-2 border-2 h-80 border-none pb-4">
        <img
          src={tierPendingPayment.tierImage}
          alt="Shoes"
          className="h-full object-cover rounded-lg"
        />
      </figure>
      <div className="card-body items-center text-center px-2">
        <div className="flex flex-col justify-between mb-3">
          <p className="font-semibold text-lg max-w-64 text-left border-b-2">
            {tierPendingPayment.tierName}
          </p>
          <span className="flex justify-end font-extrabold text-sm mt-2">Total :</span>
          <span className="flex justify-end font-semibold text-xl">{`${tierPendingPayment.price} ฿`}</span>
        </div>
      </div>
    </div>
  );
}
