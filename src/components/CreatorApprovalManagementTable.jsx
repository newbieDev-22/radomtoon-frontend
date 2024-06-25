import React from "react";
import GridTable from "./GridTable";

export default function CreatorApprovalManagementTable() {
  const columns = ["Creator name", "Register form", "Status"];
  const data = [
    {
      name: "John Doe",
      form: "See form...",
      status: "success",
    },
    {
      name: "Tom Hardy",
      form: "See form...",
      status: "pending",
    },
    {
      name: "Sho Chang",
      form: "See form...",
      status: "failed",
    },
  ];

  return (
    <GridTable
      columns={columns}
      data={data}
      title="Creator approval management"
    />
  );
}
