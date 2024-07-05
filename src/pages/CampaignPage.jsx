import { useState } from "react";
import CampaignSection from "../features/campaign/components/CampaignSection";
import { APPROVAL_STATUS_ID, USER_ROLE, subPageMap } from "../constants";
import ProductCommentContainer from "../features/product-comment/components/ProductCommentContainer";
import ProductRewardContainer from "../features/product-reward/components/ProductRewardContainer";
import Editor from "../components/EditorComponent/Editor";
import CampaignContent from "../features/campaign/components/CampaignContent";
import { useStore } from "../store/useStore";
import { useParams, Navigate } from "react-router-dom";
import MilestoneContainer from "../features/product-milestone/MilestoneContainer";
import ProfileCard from "../components/ProfileCard";

export default function CampaignPage() {
  const [subPage, setSubPage] = useState(subPageMap.STORY);
  const role = useStore((state) => state.authUser.role);
  const authUser = useStore((state) => state.authUser.user);
  const { productId } = useParams();
  const filterProductByProductId = useStore((state) => state.filterProductByProductId);
  const filterData = filterProductByProductId(+productId);

  const isCreator = role === USER_ROLE.CREATOR && authUser.id === filterData.creatorId;

  if (
    !filterData ||
    (!isCreator && filterData.approvalStatusId !== APPROVAL_STATUS_ID.SUCCESS)
  ) {
    return <Navigate to="/" />;
  }
  const handleSubPageChange = (subPage) => {
    setSubPage(subPage);
  };

  return (

    <div className="py-10">
      <CampaignContent />
      <CampaignSection handleSubPageChange={handleSubPageChange} />
      <div className="flex w-[100vw]">
        <span className="w-[75vw] px-20 py-4 ">
          {subPage === subPageMap.STORY && ( <Editor /> )}
          {subPage === subPageMap.MILESTONE && <MilestoneContainer />}
          {subPage === subPageMap.REWARD && <ProductRewardContainer isCreator={isCreator} />}
          {subPage === subPageMap.FORUM && <ProductCommentContainer />}
        </span>
        <span className="w-[25vw] mt-20 pr-10 ">
          <div className="sticky top-32">
            <ProfileCard backers={123456} created={123} />
          </div>
        </span>
      </div>
    </div >
  );
}
