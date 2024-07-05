import { useState } from "react";
import Button from "../../../components/Button";
import TablePagination from "../../../components/TablePagination";
import Modal from "../../../components/Modal";
import CreatorRegisterForm from "./CreatorRegisterForm";
import { useStore } from "../../../store/useStore";
import ConfirmModal from "../../../components/ConfirmModal";
import { toast } from "react-toastify";
import Spinner from "../../../components/Spinner";
const creatorApprovalColumns = ["Creator name", "Register form", "Approval"];

export default function CreatorApproval() {
  const creatorWaitingApprovalData = useStore((state) => state.waitingApproval.creator);
  const creatorRegisterPass = useStore((state) => state.creatorRegisterPass);
  const creatorRegisterFailed = useStore((state) => state.creatorRegisterFailed);
  const approvalLoading = useStore((state) => state.approvalLoading);
  const [isOpenCreatorFormModal, setIsOpenCreatorFormModal] = useState(false);
  const [isOpenConfirmModal, setIsOpenConfirmModal] = useState(false);
  const [pendingFailedId, setPendingFailedId] = useState(null);
  const [currentCreator, setCurrentCreator] = useState(null);

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

  const creatorApprovalData = creatorWaitingApprovalData?.map((data) => {
    return [
      `${data.firstName} ${data.lastName}`,
      <Button
        key={data.id}
        onClick={() => {
          handleCurrentCreator(data);
        }}
      >
        See form...
      </Button>,
      <div key={data.id} className="flex gap-4">
        <Button
          bg="red"
          width={20}
          onClick={() => {
            handlePendingFailed(data.id);
          }}
        >
          Reject
        </Button>
        <Button bg="green" onClick={() => handlePassApproval(data.id)} width={20}>
          Approve
        </Button>
      </div>,
    ];
  });

  return (
    <div>
      {approvalLoading && <Spinner transparent />}
      <div className="px-28">
        <h1 className="font-bold text-3xl py-4">Creator Approval</h1>
        {creatorApprovalData?.length > 0 ? (
          <TablePagination data={creatorApprovalData} columns={creatorApprovalColumns} />
        ) : (
          <h3 className="flex justify-center items-center text-xl">
            No creator register pending approval
          </h3>
        )}
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
    </div>
  );
}
