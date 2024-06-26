import AddMilestone from "../components/AddMilestone";
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
      <content className="flex flex-col items-center">
        <h1 className="text-3xl font-semibold my-[5vh] w-[50vw] text-center">
          {project.title}
        </h1>
        <div className="grid grid-cols-2">
          <div className="w-[564px] h-[452px] overflow-hidden  rounded-xl">
            <img
              src={project.img}
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
          <div className="flex flex-col">
            <div className="">line</div>
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
          </div>
        </div>
      </content>
      <CampaignSection />

      {/* milestone */}
      <Milestone />

      <div className="flex justify-center gap-2">
        <AddMilestone name="Milestone 1" />
        <AddMilestone name="Milestone 2" />
        <AddMilestone name="Milestone 3" />
      </div>
    </div>
  );
}
