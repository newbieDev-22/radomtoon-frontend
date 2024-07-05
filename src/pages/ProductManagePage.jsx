import { STATUS_PRODUCT } from "../constants";
import DeliveryButton from "../components/DeliveryButton";
import Button from "../components/Button";
import Modal from "../components/Modal";
import EvidenceModal from "../features/admin/components/EvidenceModalDetail";
import TablePagination from "../components/TablePagination";
import { useState } from "react";
import CreatorDashboard from "../features/dashboard/components/CreatorDashboard";

const mockProductName = `Bria's Mythical Menagerie: Creature-Collecting & Plush`;
const mockStatus = STATUS_PRODUCT.IN_PROGRESS;

export default function ProductManagePage() {
  const [openEvidenceModal, setOpenEvidenceModal] = useState(false);
  const supporterColumns = ["Project", "Tier", "Price", "Project Status", "Delivery Status"];
  const supporterData = [
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


  return (
    <>
      <CreatorDashboard 
        title={mockProductName} status={mockStatus}
        supporterData={supporterData} supporterColumns={supporterColumns}
      />
    </>
  );
}
