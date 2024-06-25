import React from "react";
import CreatorApprovalManagementTable from "./CreatorApprovalManagementTable";
import MockupData from "./GridTable";
import ProjectApprovalManagementTable from "./ProjectApprovalManagementTable";

export default function Table() {
  return (
    <>
      {/* <CreatorApprovalManagement /> */}
      <CreatorApprovalManagementTable />
      <ProjectApprovalManagementTable />
      {/* <MockupData /> */}
    </>
  );
}
