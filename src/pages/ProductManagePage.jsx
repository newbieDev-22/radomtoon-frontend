import { useEffect } from "react";
import GridTable from "../components/GridTable";
import { STATUS_PRODUCT } from "../constants";
import { useState } from "react";
import DeliveryButton from "../components/DeliveryButton";
import Button from "../components/Button";
import Modal from "../components/Modal";
import EvidenceModal from "../tmp/EvidenceModal";
import ConfirmModal from "../tmp/ConfirmModal";

const mockProductName = `Bria's Mythical Menagerie: Creature-Collecting & Plush`;
const mockStatus = STATUS_PRODUCT.PENDING;
const columns = [
  "Project",
  "Tier",
  "Price",
  "Project Status",
  "Delivery Status",
];

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
  const itemInOnePage = 10;
  const pageCount = Math.ceil(data.length / itemInOnePage);
  const allFalseStateList = [];

  for (let i = 0; i < pageCount; i++) {
    const allFalseState = {};
    allFalseState["page"] = i;
    allFalseState["selected"] = false;
    allFalseStateList.push(allFalseState);
  }

  const dummyAllFalseStateList = [...allFalseStateList];
  dummyAllFalseStateList[0].selected = true;

  const [selectPage, setSelectPage] = useState(dummyAllFalseStateList);
  const [filterData, setFilterData] = useState([]);
  const [openEvidenceModal, setOpenEvidenceModal] = useState(false);
  const [openDeliveryModal, setOpenDeliveryModal] = useState(false);

  const handleSelectPage = (page) => {
    const newState = [];
    for (let i = 0; i < pageCount; i++) {
      const allFalseState = {};
      allFalseState["page"] = i;
      if (page === i) {
        allFalseState["selected"] = true;
      } else {
        allFalseState["selected"] = false;
      }
      newState.push(allFalseState);
    }
    setSelectPage(newState);
  };

  useEffect(() => {
    const selectPageNum = selectPage.filter((el) => el.selected === true)[0];
    setFilterData(
      data.slice(
        selectPageNum.page * itemInOnePage,
        selectPageNum.page * itemInOnePage + 10
      )
    );
  }, [selectPage]);

  return (
    <>
      <div className="w-[100vw] m-auto flex flex-col justify-center py-4">
        <h1 className="text-center font-bold text-3xl my-3">
          {mockProductName}
        </h1>
        <h2 className="text-center font-semibold text-2xl py-1 text-gray-500">{`Status : ${mockStatus}`}</h2>

        <div className="flex flex-col gap-4 py-8">
          <div className="flex flex-col px-48 justify-center">
            <GridTable data={milestoneDataColumns} isHeader={true} />
            {milestoneData.map((el, index) => (
              <GridTable
                openEvidence={() => setOpenEvidenceModal(true)}
                key={el.page}
                index={index}
                data={Object.values(el)}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 py-8">
          <div className="flex flex-col px-20 justify-center">
            <GridTable data={columns} isHeader={true} />
            {filterData.map((el, index) => (
              <GridTable
                openDelivery={() => setOpenDeliveryModal(true)}
                key={el.page}
                index={index}
                data={Object.values(el)}
              />
            ))}
          </div>
          <div className="join flex justify-center">
            {selectPage.map((el) => (
              <button
                key={el.page}
                className={`join-item btn btn-md ${
                  el.selected ? "btn-active " : null
                }`}
                onClick={() => handleSelectPage(el.page)}
              >
                {el.page + 1}
              </button>
            ))}
          </div>
        </div>
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
      {openDeliveryModal && (
        <Modal
          onClose={() => setOpenDeliveryModal(false)}
          title="Delivery"
          width={30}
          open={true}
        >
          <ConfirmModal subTitle={"Are you sure to confirm delivery?"} />
        </Modal>
      )}
    </>
  );
}
