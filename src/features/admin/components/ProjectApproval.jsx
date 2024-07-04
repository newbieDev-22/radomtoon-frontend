import { useState } from "react";
import Button from "../../../components/Button";
import Spinner from "../../../components/Spinner";
import TablePagination from "../../../components/TablePagination";
import { useStore } from "../../../store/useStore";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Modal from "../../../components/Modal";
import RejectApproval from "./RejectApproval";
const projectApprovalColumns = ["Project name", "Go to project", "Approval"];

export default function ProjectApproval() {
  const productWaitingApprovalData = useStore((state) => state.waitingApproval.product);
  const productPass = useStore((state) => state.productPass);
  const productFailed = useStore((state) => state.productFailed);
  const approvalLoading = useStore((state) => state.approvalLoading);

  const [isOpenConfirmModal, setIsOpenConfirmModal] = useState(false);
  const [pendingFailedId, setPendingFailedId] = useState(null);

  const navigate = useNavigate();

  const handlePassApproval = async (id) => {
    await productPass(id);
    toast.success("Product approved successfully");
    setIsOpenConfirmModal(false);
  };

  const handlePendingFailed = (id) => {
    setPendingFailedId(id);
    setIsOpenConfirmModal(true);
  };

  const projectApprovalData = productWaitingApprovalData.map((data) => {
    return [
      data.productName,
      <Button key={data.id} onClick={() => navigate(`/campaign/${data.id}`)}>
        See project
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
    <>
      {approvalLoading && <Spinner transparent />}

      <div className="px-28">
        <h1 className="font-bold text-3xl py-4">Project Approval</h1>
        {projectApprovalData.length > 0 ? (
          <TablePagination data={projectApprovalData} columns={projectApprovalColumns} />
        ) : (
          <h3 className="flex justify-center items-center text-xl">
            No product pending approval
          </h3>
        )}
      </div>
      <Modal
        open={isOpenConfirmModal}
        onClose={() => setIsOpenConfirmModal(false)}
        title={"Confirm Reject Register"}
        width={40}
      >
        <RejectApproval
          productFailed={productFailed}
          onClose={() => setIsOpenConfirmModal(false)}
          pendingFailedId={pendingFailedId}
        />
      </Modal>
    </>
  );
}
