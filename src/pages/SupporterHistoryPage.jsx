import Button from "../components/Button";
import TablePagination from "../components/TablePagination";
import { PRODUCT_STATUS } from "../constants";
import { useStore } from "../store/useStore";

const columns = [
  "Project",
  "Tier Name",
  "Price",
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

  const historyMap = histories.map((el) => {
    const cancelSupport = el.fundingStatus === PRODUCT_STATUS.PENDING && (
      <Button onClick={() => handleCancelSupport(el.productId)} bg="red" width="40">
        Cancel support
      </Button>
    );

    return [
      el.projectName,
      el.tierName,
      el.price,
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
      <TablePagination data={historyMap} columns={columns} />
    </div>
  );
}
