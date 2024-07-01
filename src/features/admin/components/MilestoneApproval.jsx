import { useState } from "react";
import Button from "../../../components/Button";
import Modal from "../../../components/Modal";
import TablePagination from "../../../components/TablePagination";
import ApproveMilestoneModalDetail from "../../../tmp/ApproveMilestoneModal";

export default function MilestoneApproval() {
  const milestoneApprovalColumns = ["Project name", "Milestone Evidence", "Approval"];
  const [openApproveMilestoneModal, setOpenApproveMilestoneModal] = useState(false);

  const milestoneApprovalData = [
    [
      "Product A",
      <Button onClick={() => setOpenApproveMilestoneModal(true)}>See Evidence...</Button>,
      <Button bg="green">Approve</Button>,
    ],
    [
      "Product A",
      <Button onClick={() => setOpenApproveMilestoneModal(true)}>See Evidence...</Button>,
      <Button bg="green">Approve</Button>,
    ],
    [
      "Product A",
      <Button onClick={() => setOpenApproveMilestoneModal(true)}>See Evidence...</Button>,
      <Button bg="green">Approve</Button>,
    ],
  ];

  return (
    <div className="px-28">
      <h1 className="font-bold text-3xl py-4">Milestone Approval</h1>
      <TablePagination data={milestoneApprovalData} columns={milestoneApprovalColumns} />

      {openApproveMilestoneModal && (
        <Modal
          onClose={() => setOpenApproveMilestoneModal(false)}
          title="Milestone 1"
          width={40}
          open={true}
        >
          <ApproveMilestoneModalDetail
            onClose={() => setOpenApproveMilestoneModal(false)}
          />
        </Modal>
      )}
    </div>
  );
}
