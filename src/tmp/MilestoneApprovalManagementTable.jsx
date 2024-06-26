import GridTable from "../components/GridTable";

export default function MilestoneApprovalManagementTable() {
  const columns = ["Creator name", "Project name", "Milestone Evidence", "Status"];
  const data = [
    {
      name: "John Doe",
      projectName: "Project 1",
      form: "See Evidence...",
      status: "success",
    },
    {
      name: "John Doe",
      projectName: "Project 2",
      form: "See Evidence...",
      status: "pending",
    },
    {
      name: "Dean Thomas",
      projectName: "Project 1",
      form: "See Evidence...",
      status: "failed",
    },
  ];
  return (
    <GridTable columns={columns} data={data} title="Milestone Approval Management" />
  );
}
