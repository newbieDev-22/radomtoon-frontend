import Button from "../../../components/Button";
import TablePagination from "../../../components/TablePagination";

export default function MilestoneApproval() {
  const milestoneApprovalColumns = ["Project name", "Milestone Evidence", "Approval"];

  const milestoneApprovalData = [
    ["Product A", <Button>See Evidence...</Button>, <Button bg="green">Approve</Button>],
    ["Product A", <Button>See Evidence...</Button>, <Button bg="green">Approve</Button>],
    ["Product A", <Button>See Evidence...</Button>, <Button bg="green">Approve</Button>],
  ];

  return (
    <div className="px-28">
      <h1 className="font-bold text-3xl py-4">Milestone Approval</h1>
      <TablePagination data={milestoneApprovalData} columns={milestoneApprovalColumns} />
    </div>
  );
}
