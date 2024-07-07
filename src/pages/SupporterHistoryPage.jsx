import { useStore } from "../store/useStore";
import SupporterHistoryCard from "../features/history/components/SupporterHistoryCard";
import PaginationItem from "../components/PaginationItem";

function SupporterHistoryAllCard({ currentItems }) {
  return (
    <>
      {currentItems.map((item) => (
        <SupporterHistoryCard key={item.id} {...item} />
      ))}
    </>
  );
}

export default function SupporterHistoryPage() {
  const histories = useStore((state) => state.supporter.history);

  return (
    <div className="px-28 py-6">
      <h1 className="text-4xl font-semibold py-8 flex flex-col">Activity History</h1>
      <div>
        <PaginationItem
          itemsPerPage={5}
          items={histories}
          ItemComponent={SupporterHistoryAllCard}
        />
      </div>
    </div>
  );
}
