import Milestone from "./components/Milestone";
import AddMilestone from "./components/AddMilestone";
import { useParams } from "react-router-dom";
import { useStore } from "../../store/useStore";
import { APPROVAL_STATUS_ID, USER_ROLE } from "../../constants";

export default function MilestoneContainer() {
  const { productId } = useParams();
  const filterProductByProductId = useStore((state) => state.filterProductByProductId);
  const filterData = filterProductByProductId(+productId);
  const { user, role } = useStore((state) => state.authUser);

  const isCreator = role === USER_ROLE.CREATOR && user.id === filterData.creatorId;
  const isApproved = filterData.approvalStatusId === APPROVAL_STATUS_ID.SUCCESS;
  const approvalStatusObj = {};
  filterData.productMilestones?.forEach((element) => {
    approvalStatusObj[element.milestoneRankId] = element.approvalStatusId;
  });

  const handleSelectMilestone = (milestoneRankId) => {
    return (
      filterData.productMilestones.find(
        (el) => el.milestoneRankId === +milestoneRankId
      ) || null
    );
  };

  return (
    <div>
      <Milestone approvalStatusObj={approvalStatusObj} />
      <div className="flex items-center flex-col gap-10 mt-10">
        <AddMilestone
          name="Planning"
          milestoneData={handleSelectMilestone(1)}
          isCreator={isCreator}
          isApproved={isApproved}
          isPass={approvalStatusObj[1] === APPROVAL_STATUS_ID.SUCCESS}
        />
        <AddMilestone
          name="Prototype"
          milestoneData={handleSelectMilestone(2)}
          isCreator={isCreator}
          isApproved={isApproved}
          isPass={approvalStatusObj[2] === APPROVAL_STATUS_ID.SUCCESS}
        />
        <AddMilestone
          name="Production"
          milestoneData={handleSelectMilestone(3)}
          isCreator={isCreator}
          isApproved={isApproved}
          isPass={approvalStatusObj[3] === APPROVAL_STATUS_ID.SUCCESS}
        />
      </div>
    </div>
  );
}
