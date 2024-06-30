import { useState } from "react";
import Button from "../../../components/Button";
import TablePagination from "../../../components/TablePagination";
import Modal from "../../../components/Modal";
import CreatorRegisterForm from "../../../tmp/CreatorRegisterForm";
const creatorApprovalColumns = ["Creator name", "Register form", "Approval"];

export default function CreatorApproval() {
  const [openCreatorFormModal, setOpenCreatorFormModal] = useState(false);
  const creatorApprovalData = [
    [
      "John Doe",
      <Button onClick={() => setOpenCreatorFormModal(true)}>
        See form...
      </Button>,
      <div className="flex gap-2">
        <Button bg="green">Approve</Button>
        <Button bg="yellow">Cancel</Button>
      </div>,
    ],
    [
      "John Doe",
      <Button onClick={() => setOpenCreatorFormModal(true)}>
        See form...
      </Button>,
      <div className="flex gap-2">
        <Button bg="green">Approve</Button>
        <Button bg="yellow">Cancel</Button>
      </div>,
    ],
    [
      "John Doe",
      <Button onClick={() => setOpenCreatorFormModal(true)}>
        See form...
      </Button>,
      <div className="flex gap-2">
        <Button bg="green">Approve</Button>
        <Button bg="yellow">Cancel</Button>
      </div>,
    ],
  ];

  return (
    <div>
      <div className="px-28">
        <h1 className="font-bold text-3xl py-4">Creator Approval</h1>
        <TablePagination
          data={creatorApprovalData}
          columns={creatorApprovalColumns}
        />
      </div>
      {openCreatorFormModal && (
        <Modal
          onClose={() => setOpenCreatorFormModal(false)}
          title="CREATOR REGISTER FORM"
          width={40}
          open={true}
        >
          <CreatorRegisterForm />
        </Modal>
      )}
    </div>
  );
}
