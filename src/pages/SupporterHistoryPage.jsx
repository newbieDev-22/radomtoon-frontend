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
    <div className="px-1 md:px-28 py-6">
      <h1 className="text-4xl font-semibold py-8 flex flex-col">Activity History</h1>
      {histories.length != 0 ? (
        <div>
          <PaginationItem
            itemsPerPage={5}
            items={histories}
            ItemComponent={SupporterHistoryAllCard}
          />
        </div>
      ) : (
        <div className="flex flex-col items-center h-[60vh] text-xl text-gray-400 my-10">
          <div className="">
            <p className="text-2xl">Together, we can make history. </p>
            <p>support a project today!</p>
          </div>
          <img
            src="https://cdn.dribbble.com/users/860366/screenshots/6364054/desolazione_empty_1.gif"
            className="absolute -z-10 brightness-125"
            alt=""
          />
        </div>
      )}
    </div>
  );
}
