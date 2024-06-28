import { useState } from "react";
import StatsBar from "../components/StatsBannerComponent/StatsBanner";
import GridTable from "../components/GridTable";
import Modal from "../components/Modal";
import CreatorRegisterForm from "../tmp/CreatorRegisterForm";
import EvidenceModal from "../tmp/EvidenceModal";
import ApproveEvidenceModal from "../tmp/ApproveMilestoneModal";

const mockImgStatsBar =
  "https://c4.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fill,w_695,g_auto,q_auto,dpr_2.0,f_auto,h_460/bmt7dsxiwpfjlnxpcazs";
const mockDataStatsBar = [
  { id: 1, amount: 194504, title: "projects supported" },
  { id: 2, amount: 1062035636, title: "towards ideas", currency: "THB" },
  { id: 3, amount: 84372090, title: "contributions" },
  { id: 4, amount: 2035636, title: "RADOMTOON's profits", currency: "THB" },
];

const adminMenu = {
  CreatorApproval: "Creator Approval",
  ProjectApproval: "Project Approval",
  MilestoneApproval: "Milestone Approval",
};

const adminMenuStyleMap = {
  isNotSelected:
    "outline-none px-6 py-2 m-2 hover:rounded-md hover:bg-gray-300 focus:outline-none hover:scale-110 active:scale-100 transition-all",
  isSelected: "outline-none px-6 py-2 m-2 bg-gray-400 rounded-md",
};

export default function AdminPanel() {
  const [openCreatorFormModal, setOpenCreatorFormModal] = useState(false);
  const [openApproveMilestoneModal, setOpenApproveMilestoneModal] =
    useState(true);
  const [openDeclineMilestoneModal, setOpenDeclineMilestoneModal] =
    useState(true);
  const [selectMenu, setSelectMenu] = useState(adminMenu.CreatorApproval);
  return (
    <div>
      <StatsBar data={mockDataStatsBar} bg={mockImgStatsBar} />
      <div className="flex flex-row justify-center w-full border-b-1 shadow-md py-4">
        <button
          onClick={() => setSelectMenu(adminMenu.CreatorApproval)}
          className={
            selectMenu === adminMenu.CreatorApproval
              ? adminMenuStyleMap.isSelected
              : adminMenuStyleMap.isNotSelected
          }
        >
          Creator Approval
        </button>
        <button
          onClick={() => setSelectMenu(adminMenu.ProjectApproval)}
          className={
            selectMenu === adminMenu.ProjectApproval
              ? adminMenuStyleMap.isSelected
              : adminMenuStyleMap.isNotSelected
          }
        >
          Project Approval
        </button>
        <button
          onClick={() => setSelectMenu(adminMenu.MilestoneApproval)}
          className={
            selectMenu === adminMenu.MilestoneApproval
              ? adminMenuStyleMap.isSelected
              : adminMenuStyleMap.isNotSelected
          }
        >
          Milestone Approval
        </button>
      </div>
      <div></div>
      {openCreatorFormModal && (
        <Modal
          onClose={() => setOpenApproveMilestoneModal(false)}
          title="CREATOR REGISTER FORM"
          width={40}
          open={true}
        >
          <CreatorRegisterForm />
        </Modal>
      )}
      {openApproveMilestoneModal && (
        <Modal
          onClose={() => setOpenApproveMilestoneModal(false)}
          title="Milestone 1"
          width={40}
          open={true}
        >
          <ApproveEvidenceModal
            onClose={() => setOpenApproveMilestoneModal(false)}
          />
        </Modal>
      )}
    </div>
  );
}
