import { STATUS_PRODUCT } from "../constants";
import DeliveryButton from "../components/DeliveryButton";
import Button from "../components/Button";
import Modal from "../components/Modal";
import EvidenceModal from "../features/admin/components/EvidenceModalDetail";
import TablePagination from "../components/TablePagination";
import { useState } from "react";

const mockProductName = `Bria's Mythical Menagerie: Creature-Collecting & Plush`;
const mockStatus = STATUS_PRODUCT.PENDING;

export default function ProductManagePage() {
  const [openEvidenceModal, setOpenEvidenceModal] = useState(false);
  const columns = ["Project", "Tier", "Price", "Project Status", "Delivery Status"];
  const data = [
    ["Product A", 1, 100, <div className="text-red-600">Failed</div>, "-"],
    [
      "Product A",
      1,
      100,
      <div className="text-green-600">Success</div>,
      <DeliveryButton isSend={true} className="text-green-600">
        Delivered
      </DeliveryButton>,
    ],
    [
      "Product A",
      1,
      100,
      <div>Pending</div>,
      <DeliveryButton isSend={false}>Waiting product...</DeliveryButton>,
    ],
    [
      "Product A",
      1,
      100,
      <div>Pending</div>,
      <DeliveryButton isSend={false}>Waiting product...</DeliveryButton>,
    ],
    [
      "Product A",
      1,
      100,
      <div>Pending</div>,
      <DeliveryButton isSend={false}>Waiting product...</DeliveryButton>,
    ],
    [
      "Product A",
      1,
      100,
      <div>Pending</div>,
      <DeliveryButton isSend={false}>Waiting product...</DeliveryButton>,
    ],
    [
      "Product A",
      1,
      100,
      <div>Pending</div>,
      <DeliveryButton isSend={false}>Waiting product...</DeliveryButton>,
    ],
    [
      "Product A",
      1,
      100,
      <div>Pending</div>,
      <DeliveryButton isSend={false}>Waiting product...</DeliveryButton>,
    ],
    [
      "Product A",
      1,
      100,
      <div>Pending</div>,
      <DeliveryButton isSend={false}>Waiting product...</DeliveryButton>,
    ],
    [
      "Product A",
      1,
      100,
      <div>Pending</div>,
      <DeliveryButton isSend={false}>Waiting product...</DeliveryButton>,
    ],
    [
      "Product A",
      1,
      100,
      <div>Pending</div>,
      <DeliveryButton isSend={false}>Waiting product...</DeliveryButton>,
    ],
    [
      "Product A",
      1,
      100,
      <div>Pending</div>,
      <DeliveryButton isSend={false}>Waiting product...</DeliveryButton>,
    ],
    [
      "Product A",
      1,
      100,
      <div>Pending</div>,
      <DeliveryButton isSend={false}>Waiting product...</DeliveryButton>,
    ],
  ];

  const milestoneDataColumns = ["Project", "Milestone status", "Evidence"];
  const milestoneData = [
    [
      "Product A",
      <div className="text-red-600">Failed</div>,
      <Button onClick={() => setOpenEvidenceModal(true)}>Send Evidence</Button>,
    ],
    [
      "Product A",
      <div className="text-green-600">Pass</div>,
      <Button onClick={() => setOpenEvidenceModal(true)}>Send Evidence</Button>,
    ],
    [
      "Product A",
      <div className="text-gray-600">Pending</div>,
      <Button onClick={() => setOpenEvidenceModal(true)}>Send Evidence</Button>,
    ],
  ];

  return (
    <div className="m-auto flex flex-col justify-center py-4">
      <h1 className="text-center font-bold text-3xl my-3">{mockProductName}</h1>
      <h2 className="text-center font-semibold text-2xl py-1 text-gray-500">{`Status : ${mockStatus}`}</h2>

      <div className="pt-4 px-36">
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

      {openEvidenceModal && (
        <Modal
          onClose={() => setOpenEvidenceModal(false)}
          title="Milestone : 1"
          width={45}
          open={true}
        >
          <EvidenceModal />
        </Modal>
      )}
    </div>
  );
}
