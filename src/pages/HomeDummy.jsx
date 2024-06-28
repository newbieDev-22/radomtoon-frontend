import Modal from "../components/Modal";

import ApproveEvidenceModal from "../tmp/ApproveMilestoneModal";
import MilestoneDeclineReasonModal from "../tmp/MilestoneDeclineReasonModal";

export default function HomeDummy() {
  // return <CategoryContainer />;
  return (
    <Modal title="Milestone 1 : Decline Reason" width={47} open={true}>
      <MilestoneDeclineReasonModal />
    </Modal>
  );
}
