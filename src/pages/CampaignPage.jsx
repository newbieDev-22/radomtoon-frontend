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

  return (
    <div>
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-semibold my-[5vh] w-[50vw] text-center">
          {project.title}
        </h1>
        <div className="grid grid-cols-2 gap-12">
          <div className="w-[564px] h-[452px] overflow-hidden  rounded-xl">
            <img src={project.img} className="w-full h-full object-cover" alt="" />
          </div>
          <div className="flex flex-col justify-center">
            <div className="py-4">
              <progress
                className="progress progress-warning w-full"
                value="70"
                max="100"
              ></progress>
            </div>
            <div>
              <div className="text-4xl font-bold text-supporter-saturate">
                THB {50000}
              </div>
              <div className="text-gray-500 font-semibold">
                supported of THB {"10,000"} goal
              </div>
            </div>
            <div>
              <div className="text-3xl font-extrabold">{5000}</div>
              <div className="text-gray-500 font-semibold">supporters</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold">{7}</div>
              <div className="text-gray-500 font-semibold">days to go</div>
            </div>
            <div className="py-2">
              <Button width={"full"} onClick={() => navigate(mockSelectTierPath)}>
                Support this project
              </Button>
            </div>
          </div>
        </div>
      </div>
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
