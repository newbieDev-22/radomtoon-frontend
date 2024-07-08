import { useStore } from "../../../store/useStore";
import PaginationItem from "../../../components/PaginationItem";
import MilestoneApprovalAllCard from "./MilestoneApprovalAllCard";

export default function MilestoneApproval() {
  const milestoneApprovalData = useStore((state) => state.waitingApproval.milestone);

  return (
    <div className="px-28">
      <h1 className="font-bold text-3xl py-4">Milestone Approval</h1>
      {milestoneApprovalData.length > 0 ? (
        <PaginationItem
          itemsPerPage={6}
          items={milestoneApprovalData}
          ItemComponent={MilestoneApprovalAllCard}
        />
      ) : (
        <h3 className="flex justify-center items-center text-xl">
          No product pending approval
        </h3>
      )}
    </div>
  );
}
