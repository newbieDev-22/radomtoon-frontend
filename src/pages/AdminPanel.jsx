import { useState } from "react";
import StatsBar from "../components/StatsBannerComponent/StatsBanner";
import Approval from "../features/admin/components/Approval";
import Overview from "../features/admin/components/Overview";

const mockImgStatsBar =
  "https://c4.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fill,w_695,g_auto,q_auto,dpr_2.0,f_auto,h_460/bmt7dsxiwpfjlnxpcazs";
const mockDataStatsBar = [
  { id: 1, amount: 194504, title: "projects supported" },
  { id: 2, amount: 1062035636, title: "towards ideas", currency: "THB" },
  { id: 3, amount: 84372090, title: "contributions" },
  { id: 4, amount: 2035636, title: "RADOMTOON's profits", currency: "THB" },
];

const adminMenuStyleMap = {
  isNotSelected:
    "outline-none px-6 py-2 m-2 hover:rounded-md hover:bg-gray-300 focus:outline-none hover:scale-110 active:scale-100 transition-all",
  isSelected: "outline-none px-6 py-2 m-2 bg-gray-400 rounded-md",
};

const adminMenu = {
  Overview: "Overview",
  Approval: "Approval",
};

export default function AdminPanel() {
  const [selectMenu, setSelectMenu] = useState(adminMenu.Overview);
  return (
    <div>
      <StatsBar data={mockDataStatsBar} bg={mockImgStatsBar} />
      <div className="flex flex-row justify-center w-full border-b-1 shadow-md py-4">
        <button
          onClick={() => setSelectMenu(adminMenu.Overview)}
          className={
            selectMenu === adminMenu.Overview
              ? adminMenuStyleMap.isSelected
              : adminMenuStyleMap.isNotSelected
          }
        >
          Overview
        </button>
        <button
          onClick={() => setSelectMenu(adminMenu.Approval)}
          className={
            selectMenu === adminMenu.Approval
              ? adminMenuStyleMap.isSelected
              : adminMenuStyleMap.isNotSelected
          }
        >
          Approval
        </button>
      </div>
      {selectMenu === adminMenu.Overview && (
        <div className="px-20">
          <Overview />
        </div>
      )}
      {selectMenu === adminMenu.Approval && (
        <div className="px-20 py-8">
          <Approval />
        </div>
      )}
    </div>
  );
}
