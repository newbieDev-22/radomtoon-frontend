import GridTable from "../components/GridTable";

const columns = ["Project name", "Tier", "Spending Money", "Delivery"];
const data = [
  {
    name: "Product A",
    tier: 1,
    spendingMoney: 100,
    delivery: "Deliver",
  },
  {
    name: "Product A",
    tier: 1,
    spendingMoney: 100,
    delivery: "Deliver",
  },
  {
    name: "Product A",
    tier: 1,
    spendingMoney: 100,
    delivery: "Deliver",
  },
  {
    name: "Product A",
    tier: 1,
    spendingMoney: 100,
    delivery: "Deliver",
  },
  {
    name: "Product A",
    tier: 1,
    spendingMoney: 100,
    delivery: "Deliver",
  },
];

export default function SupporterHistoryPage() {
  return <GridTable columns={columns} data={data} title="Histories" />;
}
