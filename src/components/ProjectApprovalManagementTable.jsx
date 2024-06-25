import React from "react";
import GridTable from "./GridTable";

export default function ProjectApprovalManagementTable() {
  const columns = ["Creator name", "Project name", "Status"];
  const data = [
    {
      name: "John Doe",
      form: "Project 1",
      status: "success",
    },
    {
      name: "John Doe",
      form: "Project 2",
      status: "pending",
    },
    {
      name: "Dean Thomas",
      form: "Project 3",
      status: "failed",
    },
  ];
  return (
    <GridTable
      columns={columns}
      data={data}
      title="Project Approval Management"
    />
  );
}
