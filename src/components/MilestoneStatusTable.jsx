import React from "react";
import GridTable from "./GridTable";

export default function MilestoneStatusTable() {
  const columns = ["Milstone name", "Milestone status", "Evidence"];
  const data = [
    {
      milestoneName: "Milestone 1",
      status: "Success",
      evidence: "Send Evidence",
    },
    {
      milestoneName: "Milestone 2",
      status: "Pending",
      evidence: "Send Evidence",
    },
    {
      milestoneName: "Milestone 3",
      status: "Failed",
      evidence: "Send Evidence",
    },
  ];

  return <GridTable columns={columns} data={data} title="Support Management" />;
}
