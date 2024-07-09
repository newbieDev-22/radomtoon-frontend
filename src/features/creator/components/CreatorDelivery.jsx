import { useEffect } from "react";
import PaginationItem from "../../../components/PaginationItem";
import CreatorDeliveryAllCard from "./CreatorDeliveryAllCard";
import { useStore } from "../../../store/useStore";
import { useParams } from "react-router-dom";
import Spinner from "../../../components/Spinner";

export default function CreatorDelivery() {
  const { productId } = useParams();
  const fetchDeliveryUser = useStore((state) => state.fetchDeliveryUser);
  const deliveryData = useStore((state) => state.delivery.data);
  const deliveryLoading = useStore((state) => state.delivery.loading);

  useEffect(() => {
    fetchDeliveryUser(productId);
  }, []);

  return (
    <>
      {deliveryLoading && <Spinner transparent />}
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
