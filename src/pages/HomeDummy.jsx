import Modal from "../components/Modal";
import MilestoneEvidenceForm from "../features/admin/components/MilestoneEvidenceForm";
import CreatorDashboard from "../features/dashboard/components/CreatorDashboard";

export default function HommyDummy() {
  return (
    <Modal title="Milestone Evidence" width={60} open={true}>
      <MilestoneEvidenceForm />
    </Modal>
  );
}
