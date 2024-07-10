import { useParams } from "react-router-dom";
import { useStore } from "../../../store/useStore";
import { APPROVAL_STATUS_ID } from "../../../constants";

export default function Milestone() {
  const { productId } = useParams();
  const creatorProductData = useStore((state) => state.creatorProduct.data);

  const milestoneDataList = creatorProductData
    .filter((el) => el.id === +productId)
    .map((el) => el.productMilestones)[0];

  const approvalStatusObj = {};
  milestoneDataList?.forEach((element) => {
    approvalStatusObj[element.milestoneRankId] = element.approvalStatusId;
  });

  return (
    <div className="w-full">
      <div className="flex justify-center sticky top-20 bg-white rounded-2xl">
        <ul className="steps w-[1200px] ">
          <li
            className={`step ${
              approvalStatusObj[1] === APPROVAL_STATUS_ID.SUCCESS ? "step-accent" : ""
            }`}
          >
            Planning
          </li>
          <li
            className={`step ${
              approvalStatusObj[2] === APPROVAL_STATUS_ID.SUCCESS ? "step-accent" : ""
            }`}
          >
            Prototype
          </li>
          <li
            className={`step ${
              approvalStatusObj[3] === APPROVAL_STATUS_ID.SUCCESS ? "step-accent" : ""
            }`}
          >
            Production
          </li>
        </ul>
      </div>
    </div>
  );
}
