import CreatorDeliveryCard from "./CreatorDeliveryCard";

export default function CreatorDeliveryAllCard({ currentItems }) {
  return (
    <div className="flex flex-col gap-4 pb-4">
      {currentItems.map((item) => (
        <CreatorDeliveryCard key={item.id} {...item} />
      ))}
    </div>
  );
}
