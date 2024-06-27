import { useState } from "react";
import AddMilestone from "../components/AddMilestone";
import Milestone from "../components/Milestone";
import CampaignSection from "../features/campaign/components/CampaignSection";
import { subPageMap } from "../constants";
import ProductCommentContainer from "../features/product-comment/components/ProductCommentContainer";
import ProductRewardContainer from "../features/product-reward/components/ProductRewardContainer";
import Editor from "../components/EditorComponent/Editor";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import CampaignContent from "../features/campaign/components/CampaignContent";

const project = {
  id: 1,
  title: "EASYPLAY1s - Portable Music Keyboard with MIDI",
  img: "https://c2.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fill,w_695,g_auto,q_auto,dpr_1.0,f_auto,h_460/k6og9yhnskzqbc5o3ldg",
};

const mockSelectTierPath = "/campaign/1/tier";

export default function CampaignPage() {
  const [subPage, setSubPage] = useState(subPageMap.STORY);
  const navigate = useNavigate();
  const handleSubPageChange = (subPage) => {
    setSubPage(subPage);
  };

const project = {
  id: 1,
  title: "OneXPlayer X1 Series: 3-in-1 Console w. AMD 8840U",
  img: "https://c4.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fill,w_695,g_auto,q_auto,dpr_2.0,f_auto,h_460/pgtsxevrajyxxfvah7pj",
  amountGet: 50000,
  amountGoal: 10000,
  supporters: 4261,
  remainingDay: 7
};


  return (
    <div>
      <CampaignContent title={project.title} img={project.img} amountGet={project.amountGet} amountGoal={project.amountGoal} supporters={project.supporters} remainingDay={project.remainingDay} />
      <CampaignSection handleSubPageChange={handleSubPageChange} />
      {subPage === subPageMap.STORY && <Editor />}
      {subPage === subPageMap.MILESTONE && (
        <div>
          <Milestone />

          <div className="grid grid-cols-3  w-full">
            <AddMilestone name="Milestone 1" />
            <AddMilestone name="Milestone 2" />
            <AddMilestone name="Milestone 3" />
          </div>
        </div>
      )}
      {subPage === subPageMap.REWARD && <ProductRewardContainer />}
      {subPage === subPageMap.FORUM && <ProductCommentContainer />}
    </div>
  );
}
