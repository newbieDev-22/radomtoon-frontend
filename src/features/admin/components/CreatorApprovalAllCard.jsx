import { useState } from "react";
import { useStore } from "../../../store/useStore";
import { toast } from "react-toastify";
import CreatorApprovalCard from "./CreatorApprovalCard";
import Modal from "../../../components/Modal";
import CreatorRegisterForm from "./CreatorRegisterForm";
import ConfirmModal from "../../../components/ConfirmModal";

export default function CreatorApprovalAllCard({ currentItems }) {
  const [isOpenCreatorFormModal, setIsOpenCreatorFormModal] = useState(false);
  const [isOpenConfirmModal, setIsOpenConfirmModal] = useState(false);
  const [pendingFailedId, setPendingFailedId] = useState(null);
  const [currentCreator, setCurrentCreator] = useState(null);
  const creatorRegisterPass = useStore((state) => state.creatorRegisterPass);
  const creatorRegisterFailed = useStore((state) => state.creatorRegisterFailed);

  const handlePassApproval = async (id) => {
    await creatorRegisterPass(id);
    toast.success("Creator approved successfully");
    setIsOpenConfirmModal(false);
    setIsOpenCreatorFormModal(false);
  };

  const handlePendingFailed = (id) => {
    setPendingFailedId(id);
    setIsOpenConfirmModal(true);
  };

  const handleCurrentCreator = (data) => {
    setCurrentCreator(data);
    setIsOpenCreatorFormModal(true);
  };

  const handleFailedApproval = async (id) => {
    await creatorRegisterFailed(id);
    toast.success("Creator rejected successfully");
    setIsOpenConfirmModal(false);
    setIsOpenCreatorFormModal(false);
  };
  return (
    <>
      <div className="grid grid-cols-3 gap-4 pb-4">
        {currentItems.map((item) => (
          <CreatorApprovalCard
            key={item.id}
            name={`${item.firstName} ${item.lastName}`}
            onClick={() => handleCurrentCreator(item)}
          />
        ))}
      </div>
      <Modal
        title="CREATOR REGISTER FORM"
        width={80}
        open={isOpenCreatorFormModal}
        onClose={() => setIsOpenCreatorFormModal(false)}
      >
        <CreatorRegisterForm
          data={currentCreator}
          handlePassApproval={handlePassApproval}
          handlePendingFailed={handlePendingFailed}
        />
      </Modal>
      <Modal
        open={isOpenConfirmModal}
        onClose={() => setIsOpenConfirmModal(false)}
        title={"Confirm Reject Register"}
        width={40}
      >
        <ConfirmModal
          subTitle={"Are you sure you want to delete this project?"}
          onCancel={() => setIsOpenConfirmModal(false)}
          onConfirm={() => {
            handleFailedApproval(pendingFailedId);
          }}
        />
      </Modal>
    </>
  );
}
