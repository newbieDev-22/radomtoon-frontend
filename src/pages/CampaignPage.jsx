import { useState } from "react";
import CampaignSection from "../features/campaign/components/CampaignSection";
import { USER_ROLE, subPageMap } from "../constants";
import ProductCommentContainer from "../features/product-comment/components/ProductCommentContainer";
import ProductRewardContainer from "../features/product-reward/components/ProductRewardContainer";
import Editor from "../components/EditorComponent/Editor";
import CampaignContent from "../features/campaign/components/CampaignContent";
import { useStore } from "../store/useStore";
import { useParams, Navigate } from "react-router-dom";
import MilestoneContainer from "../features/milestone/components/MilestoneContainer";

const project = {
  id: 1,
  creatorId: 1,
  title: "Bria's Mythical Menagerie: Creature-Collecting & Plush",
  img: "https://i.kickstarter.com/assets/044/665/040/4701c73df8b68838ac143981ab5aa350_original.jpg?anim=false&fit=cover&gravity=auto&height=576&origin=ugc&q=92&width=1024&sig=Icl7GqhaIdWe9RTm9tgYXQvkIktgy3wTpAhAI75efqQ%3D",
  url: "https://youtu.be/TRGxbp-jlCs",
  amountGet: 157983,
  amountGoal: 10500,
  supporters: 1376,
  remainingDay: 15,
};

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
      <CampaignContent
        title={project.title}
        img={project.img}
        amountGet={project.amountGet}
        amountGoal={project.amountGoal}
        supporters={project.supporters}
        remainingDay={project.remainingDay}
        url={project.url}
        isCreator={isCreator}
      />
      <CampaignSection handleSubPageChange={handleSubPageChange} />
      {subPage === subPageMap.STORY && (
        <div className="px-32 py-4">
          <Editor />
        </div>
      )}
      {subPage === subPageMap.MILESTONE && <MilestoneContainer />}
      {subPage === subPageMap.REWARD && <ProductRewardContainer isCreator={isCreator} />}
      {subPage === subPageMap.FORUM && <ProductCommentContainer />}
    </div>
  );
}
