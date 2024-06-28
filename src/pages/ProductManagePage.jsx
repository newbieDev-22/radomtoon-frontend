import { STATUS_PRODUCT } from "../constants";
import DeliveryButton from "../components/DeliveryButton";
import Button from "../components/Button";
import TablePagination from "../components/TablePagination";

const mockProductName = `Bria's Mythical Menagerie: Creature-Collecting & Plush`;
const mockStatus = STATUS_PRODUCT.PENDING;
const columns = ["Project", "Tier", "Spending Fund", "Delivery Status"];

const data = [
  [
    "Product A",
    1,
    100,
    <DeliveryButton isSend={true} isDisable={true}>
      Delivered
    </DeliveryButton>,
  ],
  ["Product A", 1, 100, <DeliveryButton isSend={true}>Delivered</DeliveryButton>],
  [
    "Product A",
    1,
    100,
    <DeliveryButton isSend={false}>Waiting product...</DeliveryButton>,
  ],
  [
    "Product A",
    1,
    100,
    <DeliveryButton isSend={false}>Waiting product...</DeliveryButton>,
  ],
  [
    "Product A",
    1,
    100,
    <DeliveryButton isSend={false}>Waiting product...</DeliveryButton>,
  ],
  [
    "Product A",
    1,
    100,
    <DeliveryButton isSend={false}>Waiting product...</DeliveryButton>,
  ],
  [
    "Product A",
    1,
    100,
    <DeliveryButton isSend={false}>Waiting product...</DeliveryButton>,
  ],
  [
    "Product A",
    1,
    100,
    <DeliveryButton isSend={false}>Waiting product...</DeliveryButton>,
  ],
  [
    "Product A",
    1,
    100,

    <DeliveryButton isSend={false}>Waiting product...</DeliveryButton>,
  ],
  [
    "Product A",
    1,
    100,

    <DeliveryButton isSend={false}>Waiting product...</DeliveryButton>,
  ],
  [
    "Product A",
    1,
    100,

    <DeliveryButton isSend={false}>Waiting product...</DeliveryButton>,
  ],
  [
    "Product A",
    1,
    100,

    <DeliveryButton isSend={false}>Waiting product...</DeliveryButton>,
  ],
  [
    "Product A",
    1,
    100,

    <DeliveryButton isSend={false}>Waiting product...</DeliveryButton>,
  ],
];

const milestoneDataColumns = ["Project", "Milestone status", "Evidence"];

const milestoneData = [
  [
    "Product A",
    <div className="text-red-600">Failed</div>,
    <Button>Send Evidence</Button>,
  ],
  [
    "Product A",
    <div className="text-green-600">Pass</div>,
    <Button>Send Evidence</Button>,
  ],
  [
    "Product A",
    <div className="text-gray-600">Pending</div>,
    <Button>Send Evidence</Button>,
  ],
];

export default function ProductManagePage() {
  return (
    <div className="w-[100vw] m-auto flex flex-col justify-center py-4">
      <h1 className="text-center font-bold text-3xl my-3">{mockProductName}</h1>
      <h2 className="text-center font-semibold text-2xl py-1 text-gray-500">{`Status : ${mockStatus}`}</h2>

      <div className="pt-8 px-36">
        <h1 className="font-bold text-3xl py-4">Milestone Status</h1>
        <TablePagination
          data={milestoneData}
          columns={milestoneDataColumns}
          itemInOnePage={3}
        />
      </div>

      <div className="pb-4 px-36">
        <h1 className="font-bold text-3xl py-4">Supporter Management</h1>
        <TablePagination data={data} columns={columns} />
      </div>
    </div>
  );
}
