import { useState } from "react";
import StatsBar from "../components/StatsBannerComponent/StatsBanner";
import Approval from "../features/admin/components/Approval";
import { useStore } from "../store/useStore";
import AdminDashboard from "../features/dashboard/components/AdminDashboard"


const mockImgStatsBar =
  "https://c4.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fill,w_695,g_auto,q_auto,dpr_2.0,f_auto,h_460/bmt7dsxiwpfjlnxpcazs";
const mockDataStatsBar = [
  { id: 1, amount: 20000, title: "projects supported" },
  { id: 2, amount: 10000000, title: "towards ideas", currency: "THB" },
  { id: 3, amount: 400000, title: "contributions" },
  {
    id: 4,
    amount: Math.floor(10000000 * 0.02),
    title: "RADOMTOON's profits",
    currency: "THB",
  },
];

const adminMenuStyleMap = {
  isNotSelected:
    "outline-none px-6 py-2 m-2 hover:rounded-md hover:bg-gray-300 focus:outline-none hover:scale-110 active:scale-100 transition-all",
  isSelected: "outline-none px-6 py-2 m-2 bg-gray-400 rounded-md",
};

const adminMenu = {
  Approval: "Approval",
  Dashboard: "Dashboard",
};

export default function AdminPanel() {
  const [selectMenu, setSelectMenu] = useState(adminMenu.Approval);
  const waitingApproval = useStore((state) => state.waitingApproval);
  console.log("waitingApproval", waitingApproval);
  return (
    <div>
      <StatsBar data={mockDataStatsBar} bg={mockImgStatsBar} />
      <div className="flex flex-row justify-center w-full border-b-1 shadow-md py-4">
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
        <button
          onClick={() => setSelectMenu(adminMenu.Dashboard)}
          className={
            selectMenu === adminMenu.Dashboard
              ? adminMenuStyleMap.isSelected
              : adminMenuStyleMap.isNotSelected
          }
        >
          Dashboard
        </button>
      </div>
      {selectMenu === adminMenu.Approval && (
        <div className="px-20 py-8">
          <Approval />
        </div>
      )}
      {selectMenu === adminMenu.Dashboard && (
          <AdminDashboard />
      )}
    </div>
  );
}
