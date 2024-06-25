import React from "react";
import GridTable from "./GridTable";

export default function SupportManagementTable() {
  const columns = ["Name", "Tier", "Spending Money", "Delivery"];
  const data = [
    {
      name: "Anne Marie",
      tier: 1,
      spendingMoney: 100,
      delivery: "deliver",
    },
    {
      name: "Harry Potter",
      tier: 2,
      spendingMoney: 500,
      delivery: "deliver",
    },
    {
      name: "Ron Weasley",
      tier: 3,
      spendingMoney: 1000,
      delivery: "deliver",
    },
    {
      name: "Hermione Granger",
      tier: 1,
      spendingMoney: 100,
      delivery: "deliver",
    },
    {
      name: "Albus Dumbledore",
      tier: 2,
      spendingMoney: 500,
      delivery: "deliver",
    },
  ];

  return <GridTable columns={columns} data={data} title="Support Management" />;
}
