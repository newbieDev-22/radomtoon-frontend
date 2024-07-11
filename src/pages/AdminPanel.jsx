import { useState } from "react";
import StatsBar from "../components/StatsBannerComponent/StatsBanner";
import Approval from "../features/admin/components/Approval";
import AdminDashboard from "../features/dashboard/components/AdminDashboard";
import { useStore } from "../store/useStore";


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
  const adminStatsData = useStore((state) => state.dashboardData.adminStatsData);

  const [selectMenu, setSelectMenu] = useState(adminMenu.Approval);

  return (
    <div>
      <StatsBar data={adminStatsData}  />
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
      {selectMenu === adminMenu.Dashboard && <AdminDashboard />}
    </div>
  );
}
