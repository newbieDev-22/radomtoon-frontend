import AddMilestone from "../components/AddMilestone";
import CampaignContent from "../components/CampaignContent";
import EditRewardCard from "../components/EditRewardCard";
import Milestone from "../components/Milestone";
import CampaignSection from "../layouts/CampaignSection";

const project = {
  id: 1,
  title: "EASYPLAY1s - Portable Music Keyboard with MIDI",
  img: "https://c2.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fill,w_695,g_auto,q_auto,dpr_1.0,f_auto,h_460/k6og9yhnskzqbc5o3ldg",
};

export default function Campaign() {
  return (
    <div>
      <CampaignContent
        title={project.title}
        img={project.img}
        amountGet={200}
        amountGoal={500}
        supporters="20"
        remainingDay="20"
      />
      <CampaignSection />

      {/* milestone */}
      <Milestone />

      <div className="flex justify-center gap-2">
        <AddMilestone name="Milestone 1" />
        <AddMilestone name="Milestone 2" />
        <AddMilestone name="Milestone 3" />
      </div>
      {/* <EditRewardCard name="Tier 1" product_name="Spiderman" estimated_date='20 DEC 2024' price='20'  /> */}
    </div>
  );
}
