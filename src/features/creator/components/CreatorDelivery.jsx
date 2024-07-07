import PaginationItem from "../../../components/PaginationItem";
import CreatorDeliveryAllCard from "./CreatorDeliveryAllCard";

export default function CreatorDelivery({ data }) {
  return (
    <div className="px-28">
      <h1 className="font-bold text-3xl py-4">Milestone Approval</h1>
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
