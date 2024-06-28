import TablePagination from "../components/TablePagination";

const columns = ["Project", "Tier", "Price", "Project Status", "Delivery Status"];
const data = [
  ["Product A", 1, 100, <div className="text-red-600">Failed</div>, <div>-</div>],
  [
    "Product A",
    1,
    100,
    <div className="text-green-600">Success</div>,
    <div className="text-green-600">Delivered</div>,
  ],
  ["Product A", 1, 100, <div>Pending</div>, <div>Waiting product...</div>],
  ["Product A", 1, 100, <div className="text-red-600">Failed</div>, <div>-</div>],
  [
    "Product A",
    1,
    100,
    <div className="text-green-600">Success</div>,
    <div className="text-green-600">Delivered</div>,
  ],
  ["Product A", 1, 100, <div>Pending</div>, <div>Waiting product...</div>],
  ["Product A", 1, 100, <div className="text-red-600">Failed</div>, <div>-</div>],
  [
    "Product A",
    1,
    100,
    <div className="text-green-600">Success</div>,
    <div className="text-green-600">Delivered</div>,
  ],
  ["Product A", 1, 100, <div>Pending</div>, <div>Waiting product...</div>],
  ["Product A", 1, 100, <div className="text-red-600">Failed</div>, <div>-</div>],
  [
    "Product A",
    1,
    100,
    <div className="text-green-600">Success</div>,
    <div className="text-green-600">Delivered</div>,
  ],
  ["Product A", 1, 100, <div>Pending</div>, <div>Waiting product...</div>],
  ["Product A", 1, 100, <div className="text-red-600">Failed</div>, <div>-</div>],
  [
    "Product A",
    1,
    100,
    <div className="text-green-600">Success</div>,
    <div className="text-green-600">Delivered</div>,
  ],
  ["Product A", 1, 100, <div>Pending</div>, <div>Waiting product...</div>],
  ["Product A", 1, 100, <div className="text-red-600">Failed</div>, <div>-</div>],
  [
    "Product A",
    1,
    100,
    <div className="text-green-600">Success</div>,
    <div className="text-green-600">Delivered</div>,
  ],
  ["Product A", 1, 100, <div>Pending</div>, <div>Waiting product...</div>],
  ["Product A", 1, 100, <div className="text-red-600">Failed</div>, <div>-</div>],
  [
    "Product A",
    1,
    100,
    <div className="text-green-600">Success</div>,
    <div className="text-green-600">Delivered</div>,
  ],
  ["Product A", 1, 100, <div>Pending</div>, <div>Waiting product...</div>],
  ["Product A", 1, 100, <div className="text-red-600">Failed</div>, <div>-</div>],
  [
    "Product A",
    1,
    100,
    <div className="text-green-600">Success</div>,
    <div className="text-green-600">Delivered</div>,
  ],
  ["Product A", 1, 100, <div>Pending</div>, <div>Waiting product...</div>],
  ["Product A", 1, 100, <div className="text-red-600">Failed</div>, <div>-</div>],
  [
    "Product A",
    1,
    100,
    <div className="text-green-600">Success</div>,
    <div className="text-green-600">Delivered</div>,
  ],
  ["Product A", 1, 100, <div>Pending</div>, <div>Waiting product...</div>],
];

export default function SupporterHistoryPage() {
  return (
    <div className="px-28 py-6">
      <h1 className="text-4xl font-semibold py-8">Activity History</h1>
      <TablePagination data={data} columns={columns} />
    </div>
  );
}
