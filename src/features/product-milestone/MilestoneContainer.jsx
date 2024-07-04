import Milestone from "./components/Milestone";
import AddMilestone from "./components/AddMilestone";
import { useParams } from "react-router-dom";
import { useStore } from "../../store/useStore";
import { useState } from "react";
import { APPROVAL_STATUS_ID, USER_ROLE } from "../../constants";

export default function MilestoneContainer() {
  const { productId } = useParams();
  const filterProductByProductId = useStore((state) => state.filterProductByProductId);
  const filterData = filterProductByProductId(+productId);
  const [milestoneData, setMilestoneData] = useState(filterData.productMilestones);
  const role = useStore((state) => state.authUser.role);
  const authUser = useStore((state) => state.authUser.user);

  const isCreator = role === USER_ROLE.CREATOR && authUser.id === filterData.creatorId;
  const isApproved = filterData.approvalStatusId === APPROVAL_STATUS_ID.SUCCESS;

  const handleSelectMilestone = (milestoneRankId) => {
    return milestoneData.find((el) => el.milestoneRankId === +milestoneRankId) || null;
  };

  return (
    <div>
      <Milestone />
      <div className="flex items-center flex-col gap-10">
        <AddMilestone
          name="Planning"
          milestoneData={handleSelectMilestone(1)}
          isCreator={isCreator}
          isApproved={isApproved}
        />
        <AddMilestone
          name="Prototype"
          milestoneData={handleSelectMilestone(2)}
          isCreator={isCreator}
          isApproved={isApproved}
        />
        <AddMilestone
          name="Production"
          milestoneData={handleSelectMilestone(3)}
          isCreator={isCreator}
          isApproved={isApproved}
        />
      </div>
    </div>
  );
}
