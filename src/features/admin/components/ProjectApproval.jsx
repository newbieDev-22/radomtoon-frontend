import { useStore } from "../../../store/useStore";
import PaginationItem from "../../../components/PaginationItem";
import ProjectApprovalAllCard from "./ProjectApprovalAllCard";

export default function ProjectApproval() {
  const productWaitingApprovalData = useStore((state) => state.waitingApproval.product);

  return (
    <div className="px-28">
      <h1 className="font-bold text-3xl py-4">Project Approval</h1>
      {productWaitingApprovalData.length > 0 ? (
        <PaginationItem
          itemsPerPage={9}
          items={productWaitingApprovalData}
          ItemComponent={ProjectApprovalAllCard}
        />
      ) : (
        <h3 className="flex justify-center items-center text-xl">
          No product pending approval
        </h3>
      )}
    </div>
  );
}
