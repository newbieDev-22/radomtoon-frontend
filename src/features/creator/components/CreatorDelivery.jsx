import PaginationItem from "../../../components/PaginationItem";
import CreatorDeliveryAllCard from "./CreatorDeliveryAllCard";

export default function CreatorDelivery({ data }) {
  return (
    <div className="px-full">
      {data.length > 0 ? (
        <PaginationItem
          itemsPerPage={6}
          items={data}
          ItemComponent={CreatorDeliveryAllCard}
        />
      ) : (
        <h3 className="flex justify-center items-center text-xl">
          No product pending approval
        </h3>
      )}
    </div>
  );
}
