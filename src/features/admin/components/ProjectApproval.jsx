import { toast } from "react-toastify";
import Button from "../../../components/Button";
import TablePagination from "../../../components/TablePagination";

export default function ProjectApproval() {
  const ProjectApprovalColumns = ["Project name", "Go to project", "Approval"];

  const ProjectApprovalData = [
    [
      "Product A",
      <Button>See project...</Button>,
      <div className="flex gap-2">
        <Button
          onClick={() => toast.success("Request has been approved")}
          bg="green"
        >
          Approve
        </Button>
        <Button
          onClick={() => toast.error("Request has been canceled")}
          bg="yellow"
        >
          Cancel
        </Button>
      </div>,
    ],
    [
      "Product A",
      <Button>See project...</Button>,
      <div className="flex gap-2">
        <Button
          onClick={() => toast.success("Request has been approved")}
          bg="green"
        >
          Approve
        </Button>
        <Button
          onClick={() => toast.error("Request has been canceled")}
          bg="yellow"
        >
          Cancel
        </Button>
      </div>,
    ],
    [
      "Product A",
      <Button>See project...</Button>,
      <div className="flex gap-2">
        <Button
          onClick={() => toast.success("Request has been approved")}
          bg="green"
        >
          Approve
        </Button>
        <Button
          onClick={() => toast.error("Request has been canceled")}
          bg="yellow"
        >
          Cancel
        </Button>
      </div>,
    ],
  ];

  return (
    <div className="px-28">
      <h1 className="font-bold text-3xl py-4">Project Approval</h1>
      <TablePagination
        data={ProjectApprovalData}
        columns={ProjectApprovalColumns}
      />
    </div>
  );
}
