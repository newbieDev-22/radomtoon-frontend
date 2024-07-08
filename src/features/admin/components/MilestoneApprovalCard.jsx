import { useNavigate } from "react-router-dom";
import Button from "../../../components/Button";
import Modal from "../../../components/Modal";
import MilestoneEvidenceForm from "./MilestoneEvidenceForm";
import RejectApproval from "./RejectApproval";
import MilestoneForm from "./MilestoneForm";
import { useState } from "react";
import { toast } from "react-toastify";
import { useStore } from "../../../store/useStore";
import {MILESTONE_STATUS} from "../../../constants"

export default function MilestoneApprovalCard({
  id,
  productId,
  milestoneRankId,
  evidenceTextDetail,
  evidenceImage,
  milestoneDetail,
  product: { productName },
}) {
  const [isOpenApproveEvidenceModal, setIsOpenApproveEvidenceModal] = useState(false);
  const [isOpenMilestoneModal, setIsOpenMilestoneModal] = useState(false);
  const [isOpenRejectModal, setIsOpenRejectModal] = useState(false);

  const milestoneEvidencePass = useStore((state) => state.milestoneEvidencePass);
  const milestoneEvidenceFailed = useStore((state) => state.milestoneEvidenceFailed);

  const navigate = useNavigate();
  const handlePendingReject = () => {
    setIsOpenRejectModal(true);
  };

  const handleApprovalMilestone = async () => {
    try {
      await milestoneEvidencePass(id);
      toast.success("Milestone approved");
      setIsOpenApproveEvidenceModal(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex gap-4 justify-between items-center p-4 font-bold transition border-b-2">
        <div>
          {productName} : {MILESTONE_STATUS[milestoneRankId]}
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <Button
              width={"full"}
              bg="green"
              onClick={() => navigate(`/campaign/${productId}`)}
            >
              See project
            </Button>
          </div>
          <div>
            <Button
              width={"full"}
              bg="green"
              onClick={() => setIsOpenMilestoneModal(true)}
            >
              See milestone
            </Button>
          </div>
          <div>
            <Button
              width={"full"}
              bg={"green"}
              onClick={() => setIsOpenApproveEvidenceModal(true)}
            >
              See evidence
            </Button>
          </div>
        </div>
      </div>
      <Modal
        title="Milestone Detail"
        width={40}
        open={isOpenMilestoneModal}
        onClose={() => setIsOpenMilestoneModal(false)}
      >
        <MilestoneForm
          milestoneRankId={milestoneRankId}
          milestoneDetail={milestoneDetail}
        />
      </Modal>
      <Modal
        title="Milestone Evidence"
        width={60}
        open={isOpenApproveEvidenceModal}
        onClose={() => setIsOpenApproveEvidenceModal(false)}
      >
        <MilestoneEvidenceForm
          evidenceTextDetail={evidenceTextDetail}
          evidenceImage={evidenceImage}
          approve={handleApprovalMilestone}
          reject={handlePendingReject}
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
          pendingFailedId={id}
        />
      </Modal>
    </>
  );
}
