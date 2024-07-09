import { useState } from "react";
import Milestone from "../../product-milestone/components/Milestone";
import PieChart from "../../../components/chart/pieChart/PieChart";
import LineChart from "../../../components/chart/lineChart/LineChart";
import Modal from "../../../components/Modal";
import CreatorDelivery from "../../creator/components/CreatorDelivery";
import EvidenceModalDetail from "../../creator/components/EvidenceModalDetail";
import Button from "../../../components/Button";
import { useStore } from "../../../store/useStore";
import { useParams } from "react-router-dom";
import {
  APPROVAL_STATUS_ID,
  PRODUCT_STATUS_ID,
  STATUS_PRODUCT_THEME,
} from "../../../constants";
import getProductStatus from "../../../utils/get-product-status";

const lineChartMockData = [
  { label: "Jan", supporter: 64854, creator: 50561, project: 35901 },
  { label: "Feb", supporter: 54628, creator: 34628, project: 46863 },
  { label: "Mar", supporter: 117238, creator: 147238, project: 79104 },
  { label: "Apr", supporter: 82830, creator: 72830, project: 46815 },
  { label: "May", supporter: 91208, creator: 82919, project: 70285 },
  { label: "Jun", supporter: 103609, creator: 91208, project: 83851 },
  { label: "Jul", supporter: 90974, creator: 103609, project: 69413 },
  { label: "Aug", supporter: 82919, creator: 62407, project: 54910 },
  {
    label: "Sep",
    supporter: 62407,
    creator: 47081,
    project: 35193,
    supporterForecast: 62407,
    creatorForecast: 47081,
    projectForecast: 35193,
  },
  {
    label: "Oct",
    supporterForecast: 45324,
    creatorForecast: 62812,
    projectForecast: 41862,
  },
  {
    label: "Nov",
    supporterForecast: 47978,
    creatorForecast: 20694,
    projectForecast: 39591,
  },
  {
    label: "Dec",
    supporterForecast: 39175,
    creatorForecast: 82465,
    projectForecast: 59031,
  },
];

const pieChartMockData = [
  { label: "Tier 1", value: 50888 },
  { label: "Tier 2", value: 28943 },
  { label: "Tier 3", value: 31424 },
];

export default function CreatorDashboard() {
  const { productId } = useParams();
  const [currentMilestone, setCurrentMilestone] = useState(null);
  const [openEvidenceModal, setOpenEvidenceModal] = useState(false);

  const [lineChartData, setLineChartData] = useState(lineChartMockData);
  const [pieChartData, setPieChartData] = useState(pieChartMockData);

  const creatorProductData = useStore((state) => state.creatorProduct.data);
  const selectedProduct = creatorProductData.filter((el) => el.id === +productId)[0];

  const status = getProductStatus(selectedProduct);
  const title = selectedProduct?.productName;

  const milestoneDataList = selectedProduct.productMilestones;

  const approvalStatusObj = {};
  milestoneDataList.forEach((element) => {
    approvalStatusObj[element.milestoneRankId] = element.approvalStatusId;
  });
  console.log(
    "selectedProduct.productStatusId !== PRODUCT_STATUS_ID.SUCCESS",
    selectedProduct.productStatusId,
    PRODUCT_STATUS_ID.SUCCESS
  );
  return (
    <div className="py-10 px-10 md:px-40 2xl:px-80 bg-[#b6e5e9]">
      <div className="py-5 mb-5 bg-[#e7f5fc] rounded-3xl">
        <h1 className="text-center text-radomtoon-bright text-4xl font-bold ">{title}</h1>
        <h2
          className={`text-center font-semibold text-2xl py-1 ${STATUS_PRODUCT_THEME[status].color}`}
        >
          {`Status : ${status}`}
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-10 p-10 mx-auto rounded-3xl md:w-full  bg-[#e7f5fc]">
        <span className="sm:col-span-2 col-span-2 md:col-span-1 bg-white rounded-2xl flex justify-center items-center flex-col">
          <h1 className="w-full px-10 justify-start text-lg font-semibold text-radomtoon-bright mt-4 ">
            Milestone Progress
          </h1>
          <Milestone />
        </span>
        <span className="row-span-2 col-span-2 sm:col-span-2 md:col-span-1 h-96 md:h-full bg-white rounded-2xl">
          <PieChart title="Tiers Percentage" data={pieChartData} />
        </span>
        <div className="sm:col-span-2 col-span-2 md:col-span-1 bg-white rounded-2xl">
          <h1 className="w-full px-10 justify-start text-lg font-semibold text-radomtoon-bright mt-4 mb-2">
            Milestone Status
          </h1>
          <div className="px-5 pb-5">
            <div className="flex flex-col">
              <div className="flex justify-center items-center p-3 ">
                <div className="flex flex-col  gap-4 w-full">
                  <div className="flex justify-between items-center p-3 border-b-2">
                    <h1>Planning</h1>
                    <Button
                      onClick={() => {
                        setOpenEvidenceModal(true);
                        setCurrentMilestone(1);
                      }}
                      disabled={
                        approvalStatusObj[1] === APPROVAL_STATUS_ID.SUCCESS ||
                        approvalStatusObj[1] === APPROVAL_STATUS_ID.PENDING ||
                        selectedProduct.productStatusId !== PRODUCT_STATUS_ID.SUCCESS
                      }
                    >
                      Send Evidence
                    </Button>
                  </div>
                  <div className="flex justify-between items-center p-3 border-b-2">
                    <h1>Prototype</h1>
                    {
                      <Button
                        onClick={() => {
                          setOpenEvidenceModal(true);
                          setCurrentMilestone(2);
                        }}
                        disabled={
                          approvalStatusObj[1] !== APPROVAL_STATUS_ID.SUCCESS ||
                          approvalStatusObj[2] === APPROVAL_STATUS_ID.SUCCESS ||
                          approvalStatusObj[2] === APPROVAL_STATUS_ID.PENDING
                        }
                      >
                        Send Evidence
                      </Button>
                    }
                  </div>
                  <div className="flex justify-between items-center p-3 border-b-2">
                    <h1>Production</h1>
                    <Button
                      onClick={() => {
                        setOpenEvidenceModal(true);
                        setCurrentMilestone(3);
                      }}
                      disabled={
                        approvalStatusObj[1] !== APPROVAL_STATUS_ID.SUCCESS ||
                        approvalStatusObj[2] !== APPROVAL_STATUS_ID.SUCCESS ||
                        approvalStatusObj[3] === APPROVAL_STATUS_ID.SUCCESS ||
                        approvalStatusObj[3] === APPROVAL_STATUS_ID.PENDING
                      }
                    >
                      Send Evidence
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <span className="col-span-2">
          <LineChart title={"Progress"} data={lineChartData} />
        </span>
        <div className="col-span-2 p-5 rounded-2xl bg-white">
          <div className="w-full px-5 mb-5 justify-start text-xl font-semibold text-radomtoon-bright">
            Supporter Distribution Tracking
          </div>
          <CreatorDelivery />
        </div>
      </div>
      {openEvidenceModal && (
        <Modal
          onClose={() => setOpenEvidenceModal(false)}
          title="Milestone : 1"
          width={45}
          open={true}
        >
          <EvidenceModalDetail milestoneRankId={currentMilestone} />
        </Modal>
      )}
    </div>
  );
}
