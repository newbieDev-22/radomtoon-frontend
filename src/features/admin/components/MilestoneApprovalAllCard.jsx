import MilestoneApprovalCard from "./MilestoneApprovalCard";

export default function MilestoneApprovalAllCard({ currentItems }) {
  return (
    <div className="flex flex-col gap-4 pb-4">
      {currentItems.map((item) => (
        <MilestoneApprovalCard key={item.id} {...item} />
      ))}
    </div>
  );
}
