import { useState } from "react";
import Button from "../../../components/Button";
import Modal from "../../../components/Modal";
import TablePagination from "../../../components/TablePagination";
import ApproveMilestoneModalDetail from "../../../tmp/ApproveMilestoneModal";
import MilestoneDeclineReasonModal from "../../../tmp/MilestoneDeclineReasonModal";
import ConfirmModal from "../../../tmp/ConfirmModal";

export default function MilestoneApproval() {
  const milestoneApprovalColumns = [
    "Project name",
    "Milestone Evidence",
    "Approval",
  ];
  const [openApproveMilestoneModal, setOpenApproveMilestoneModal] =
    useState(false);
  const [openDeclineMilestoneModal, setOpenDeclineMilestoneModal] =
    useState(false);
  const [openApprove, setOpenApprove] = useState(false);

  const milestoneApprovalData = [
    [
      "Product A",
      <Button onClick={() => setOpenApproveMilestoneModal(true)}>
        See Evidence...
      </Button>,
      <div className="flex gap-2">
        <Button bg="green">Approve</Button>
        <Button bg="yellow">Cancel</Button>
      </div>,
    ],
    [
      "Product A",
      <Button onClick={() => setOpenApproveMilestoneModal(true)}>
        See Evidence...
      </Button>,
      <div className="flex gap-2">
        <Button bg="green">Approve</Button>
        <Button bg="yellow">Cancel</Button>
      </div>,
    ],
    [
      "Product A",
      <Button onClick={() => setOpenApproveMilestoneModal(true)}>
        See Evidence...
      </Button>,
      <div className="flex gap-2">
        <Button bg="green">Approve</Button>
        <Button bg="yellow">Cancel</Button>
      </div>,
    ],
  ];

  return (
    <div className="px-28">
      <h1 className="font-bold text-3xl py-4">Milestone Approval</h1>
      <TablePagination
        data={milestoneApprovalData}
        columns={milestoneApprovalColumns}
      />

      {openApproveMilestoneModal && (
        <Modal
          onClose={() => setOpenApproveMilestoneModal(false)}
          title="Milestone 1"
          width={40}
          open={true}
        >
          <ApproveMilestoneModalDetail
            onClose={() => setOpenApproveMilestoneModal(false)}
            onOpenDecline={() => setOpenDeclineMilestoneModal(true)}
          />
        </Modal>
      )}
      {openDeclineMilestoneModal && (
        <Modal
          onClose={() => setOpenDeclineMilestoneModal(false)}
          title="Milestone 1 : Decline Reason"
          width={42}
          open={true}
        >
          <MilestoneDeclineReasonModal
            onClose={() => setOpenDeclineMilestoneModal(false)}
          />
        </Modal>
      )}
      {openApprove && (
        <Modal
          onClose={() => setOpenApprove(false)}
          title="Approve"
          width={47}
          open={true}
        >
          <ConfirmModal subTitle="Approve this milestone?" />
        </Modal>
      )}
    </div>
  );
}
