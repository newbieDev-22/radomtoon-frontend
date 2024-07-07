import { useStore } from "../../../store/useStore";
import Spinner from "../../../components/Spinner";
import PaginationItem from "../../../components/PaginationItem";
import CreatorApprovalAllCard from "./CreatorApprovalAllCard";

export default function CreatorApproval() {
  const creatorWaitingApprovalData = useStore((state) => state.waitingApproval.creator);
  const approvalLoading = useStore((state) => state.approvalLoading);

  return (
    <div>
      {approvalLoading && <Spinner transparent />}
      <div className="px-28">
        <h1 className="font-bold text-3xl py-4">Creator Approval</h1>
        {creatorWaitingApprovalData.length > 0 ? (
          <PaginationItem
            itemsPerPage={9}
            items={creatorWaitingApprovalData}
            ItemComponent={CreatorApprovalAllCard}
          />
        ) : (
          <h3 className="flex justify-center items-center text-xl">
            No creator pending approval
          </h3>
        )}
      </div>
    </div>
  );
}
