import { useState } from "react";
import CampaignSection from "../features/campaign/components/CampaignSection";
import { USER_ROLE, subPageMap } from "../constants";
import ProductCommentContainer from "../features/product-comment/components/ProductCommentContainer";
import ProductRewardContainer from "../features/product-reward/components/ProductRewardContainer";
import Editor from "../components/EditorComponent/Editor";
import CampaignContent from "../features/campaign/components/CampaignContent";
import { useStore } from "../store/useStore";
import { useParams, Navigate } from "react-router-dom";
import MilestoneContainer from "../features/product-milestone/MilestoneContainer";

export default function CampaignPage() {
  const [subPage, setSubPage] = useState(subPageMap.STORY);
  const role = useStore((state) => state.authUser.role);
  const authUser = useStore((state) => state.authUser.user);
  const { productId } = useParams();
  const filterProductByProductId = useStore((state) => state.filterProductByProductId);
  const filterData = filterProductByProductId(+productId);
  if (!filterData) {
    return <Navigate to="/" />;
  }
  const handleSubPageChange = (subPage) => {
    setSubPage(subPage);
  };

  const isCreator = role === USER_ROLE.CREATOR && authUser.id === filterData.creatorId;

  return (

    <div className="py-10">
      <CampaignContent />
      <CampaignSection handleSubPageChange={handleSubPageChange} />
      {subPage === subPageMap.STORY && (
        <div className="px-32 py-4">
          <Editor />
        </div>
      )}

      {subPage === subPageMap.MILESTONE && <MilestoneContainer />}
      {subPage === subPageMap.REWARD && <ProductRewardContainer isCreator={isCreator} />}
      {subPage === subPageMap.FORUM && <ProductCommentContainer />}

    </div >
  );
}
