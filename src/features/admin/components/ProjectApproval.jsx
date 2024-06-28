import Button from "../../../components/Button";
import TablePagination from "../../../components/TablePagination";

export default function ProjectApproval() {
  const ProjectApprovalColumns = ["Project name", "Go to project", "Approval"];

  const ProjectApprovalData = [
    ["Product A", <Button>See project...</Button>, <Button bg="green">Approve</Button>],
    ["Product A", <Button>See project...</Button>, <Button bg="green">Approve</Button>],
    ["Product A", <Button>See project...</Button>, <Button bg="green">Approve</Button>],
  ];

  return (
    <div className="px-28">
      <h1 className="font-bold text-3xl py-4">Project Approval</h1>
      <TablePagination data={ProjectApprovalData} columns={ProjectApprovalColumns} />
    </div>
  );
}
