import { useEffect } from "react";
import PaginationItem from "../../../components/PaginationItem";
import CreatorDeliveryAllCard from "./CreatorDeliveryAllCard";
import { useStore } from "../../../store/useStore";
import { useParams } from "react-router-dom";

export default function CreatorDelivery() {
  const { productId } = useParams();
  const fetchDeliveryUser = useStore((state) => state.fetchDeliveryUser);
  const deliveryData = useStore((state) => state.delivery.data);

  useEffect(() => {
    fetchDeliveryUser(productId);
  }, []);

  return (
    <>
      <div className="px-full">
        {deliveryData.length > 0 ? (
          <PaginationItem
            itemsPerPage={6}
            items={deliveryData}
            ItemComponent={CreatorDeliveryAllCard}
          />
        ) : (
          <h3 className="flex justify-center items-center text-xl">
            No product pending approval
          </h3>
        )}
      </div>
    </>
  );
}
