import dayjs from "dayjs";
import Button from "../components/Button";
import TablePagination from "../components/TablePagination";
import { PRODUCT_STATUS } from "../constants";
import { useStore } from "../store/useStore";

const columns = [
  "Project",
  "Tier Name",
  "Price",
  "Date",
  "Project Status",
  "Delivery Status",
  "Cancel support",
];

const colorMapping = {
  PENDING: "text-yellow-500",
  FAILED: "text-red-500",
  SUCCESS: "text-green-500",
  CANCEL: "text-red-800",
};

// const handleCancelSupport = async (productId) => {};

export default function SupporterHistoryPage() {
  const histories = useStore((state) => state.supporter.history);

  const historyMap = histories?.map((el) => {
    const cancelSupport = el.fundingStatus === PRODUCT_STATUS.PENDING && (
      <Button bg="red" width="40">
        Cancel support
      </Button>
    );

    return [
      el.projectName,
      el.tierName,
      el.price,
      dayjs(el.date).format("DD/MM/YYYY"),
      <div key={el.fundingStatus} className={colorMapping[el.fundingStatus]}>
        {el.fundingStatus}
      </div>,
      <div key={el.deliveryStatus} className={colorMapping[el.deliveryStatus]}>
        {el.deliveryStatus}
      </div>,
      cancelSupport,
    ];
  });

  return (
    <div className="px-28 py-6">
      <h1 className="text-4xl font-semibold py-8">Activity History</h1>
      {historyMap.length > 0 ? (
        <TablePagination data={historyMap} columns={columns} />
      ) : (
        <h3 className="flex justify-center items-center text-xl">No histories data</h3>
      )}
    </div>
  );
}
