import GridTable from "../components/GridTable";

export default function SupportManagementTable() {
  const columns = ["Name", "Tier", "Spending Money", "Delivery"];
  const data = [
    {
      name: "Anne Marie",
      tier: 1,
      spendingMoney: 100,
      delivery: "Deliver",
    },
    {
      name: "Harry Potter",
      tier: 2,
      spendingMoney: 500,
      delivery: "Deliver",
    },
    {
      name: "Ron Weasley",
      tier: 3,
      spendingMoney: 1000,
      delivery: "Deliver",
    },
    {
      name: "Hermione Granger",
      tier: 1,
      spendingMoney: 100,
      delivery: "Deliver",
    },
    {
      name: "Albus Dumbledore",
      tier: 2,
      spendingMoney: 500,
      delivery: "Deliver",
    },
  ];

  return <GridTable columns={columns} data={data} title="Support Management" />;
}
