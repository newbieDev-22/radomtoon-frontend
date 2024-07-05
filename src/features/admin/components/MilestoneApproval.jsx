import { useState } from "react";
import Button from "../../../components/Button";
import Modal from "../../../components/Modal";
import TablePagination from "../../../components/TablePagination";
import ApproveMilestoneModalDetail from "../../../tmp/ApproveMilestoneModal";
import { useStore } from "../../../store/useStore";
import MilestoneEvidenceForm from "./MilestoneEvidenceForm";
import { toast } from "react-toastify";
import RejectApproval from "./RejectApproval";

export default function MilestoneApproval() {
  const milestoneApprovalColumns = [
    "Project name",
    "Milestone Evidence",
    "Approval",
  ];
  const [isOpenApproveEvidenceModal, setIsOpenApproveEvidenceModal] =
    useState(false);
  const [isOpenRejectModal, setIsOpenRejectModal] = useState(false);
  const [currentEvidence, setCurrentEvidence] = useState(null);
  const [pendingFailId, setPendingFailId] = useState(null);
  const milestoneApprovalData = useStore(
    (state) => state.waitingApproval.milestone
  );

  const milestoneEvidencePass = useStore(
    (state) => state.milestoneEvidencePass
  );
  const milestoneEvidenceFailed = useStore(
    (state) => state.milestoneEvidenceFailed
  );

  const handleCurrentEvidence = (milestoneApprovalData) => {
    setCurrentEvidence(milestoneApprovalData);
    setIsOpenApproveEvidenceModal(true);
  };

  const handlePendingReject = (milestoneId) => {
    setPendingFailId(milestoneId);
    setIsOpenRejectModal(true);
  };

  const handleAppoveMilestone = async (milestoneId) => {
    try {
      await milestoneEvidencePass(milestoneId);
      toast.success("Milestone approved");
      setIsOpenApproveEvidenceModal(false);
    } catch (error) {
      console.log(error);
    }
  };

  const milestoneApprovalDataMap = milestoneApprovalData.map((data) => {
    return [
      data.product.productName,
      <Button onClick={() => handleCurrentEvidence(data)}>
        See Evidence...
      </Button>,
      <div className="flex gap-4">
        <Button
          bg="red"
          width={20}
          onClick={() => handlePendingReject(data.id)}
        >
          Reject
        </Button>
        <Button
          bg="green"
          width={20}
          onClick={() => handleAppoveMilestone(data.id)}
        >
          Approve
        </Button>
      </div>,
    ];
  });

  return (
    <>
      <div className="px-28">
        <h1 className="font-bold text-3xl py-4">Milestone Approval</h1>
        {milestoneApprovalDataMap.length > 0 ? (
          <TablePagination
            data={milestoneApprovalDataMap}
            columns={milestoneApprovalColumns}
          />
        ) : (
          <h3 className="flex justify-center items-center text-xl">
            No milestone pending approval
          </h3>
        )}
      </div>
      <Modal
        title="Milestone Evidence"
        width={60}
        open={isOpenApproveEvidenceModal}
        onClose={() => setIsOpenApproveEvidenceModal(false)}
      >
        <MilestoneEvidenceForm
          data={currentEvidence}
          approve={() => handleAppoveMilestone(currentEvidence.id)}
          reject={() => handlePendingReject(currentEvidence.id)}
          onClose={() => setIsOpenApproveEvidenceModal(false)}
        />
      </Modal>
      <Modal
        open={isOpenRejectModal}
        onClose={() => setIsOpenRejectModal(false)}
        title={"Reject milestone evidence"}
        width={40}
      >
        <RejectApproval
          productFailed={milestoneEvidenceFailed}
          onClose={() => {
            setIsOpenApproveEvidenceModal(false);
            setIsOpenRejectModal(false);
          }}
          pendingFailedId={pendingFailId}
        />
      </Modal>
    </>
  );
}
