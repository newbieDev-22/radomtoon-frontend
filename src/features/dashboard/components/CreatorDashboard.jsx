import { useState } from "react";
import PieChart from "../../../components/chart/pieChart/PieChart"
import LineChart from "../../../components/chart/lineChart/LineChart";
import Milestone from "../../../components/Milestone";
import TablePagination from "../../../components/TablePagination";
import Button from "../../../components/Button";
import Modal from "../../../components/Modal";
import EvidenceModalDetail from "../../admin/components/EvidenceModalDetail";

const lineChartMockData = [
  { "label": "Jan", "supporter": 64854, "creator": 50561, "project": 35901 },
  { "label": "Feb", "supporter": 54628, "creator": 34628, "project": 46863 },
  { "label": "Mar", "supporter": 117238, "creator": 147238, "project": 79104 },
  { "label": "Apr", "supporter": 82830, "creator": 72830, "project": 46815 },
  { "label": "May", "supporter": 91208, "creator": 82919, "project": 70285 },
  { "label": "Jun", "supporter": 103609, "creator": 91208, "project": 83851 },
  { "label": "Jul", "supporter": 90974, "creator": 103609, "project": 69413 },
  { "label": "Aug", "supporter": 82919, "creator": 62407, "project": 54910 },
  { "label": "Sep", "supporter": 62407, "creator": 47081, "project": 35193, 
                    "supporterForecast": 62407, "creatorForecast": 47081, "projectForecast": 35193 },
  { "label": "Oct", "supporterForecast": 45324, "creatorForecast": 62812, "projectForecast": 41862 },
  { "label": "Nov", "supporterForecast": 47978, "creatorForecast": 20694, "projectForecast": 39591 },
  { "label": "Dec", "supporterForecast": 39175, "creatorForecast": 82465, "projectForecast": 59031 },
]

const pieChartMockData = [
  { "label": "Tier 1", "value":50888 },
  { "label": "Tier 2", "value":28943 },
  { "label": "Tier 3", "value":31424 },
]

export default function CreatorDashboard({ title }) {

  const [openEvidenceModal, setOpenEvidenceModal] = useState(false);

  const [ lineChartData, setLineChartData ] = useState(lineChartMockData)
  const [ pieChartData, setPieChartData ] = useState(pieChartMockData)

  const milestoneDataColumns = ["Project", "Status", "Evidence"];
  const milestoneData = [
    [
      "Milestone 1",
      <div className="text-red-600">Failed</div>,
      <Button onClick={() => setOpenEvidenceModal(true)}>Attach</Button>,
    ],
    [
      "Milestone 2",
      <div className="text-green-600">Pass</div>,
      <Button onClick={() => setOpenEvidenceModal(true)}>Attach</Button>,
    ],
    [
      "Milestone 3",
      <div className="text-gray-600">Pending</div>,
      <Button onClick={() => setOpenEvidenceModal(true)}>Attach</Button>,
    ],
  ];

  return (
    <div className="py-10 px-10 md:px-40 2xl:px-96 bg-[#b6e5e9]">
      <h1 className="text-center text-radomtoon-bright text-4xl font-bold py-5 mb-5 bg-[#e7f5fc] rounded-3xl">
      {title}
      </h1>
      <div className="grid grid-cols-2 gap-10 p-10 mx-auto rounded-3xl  bg-[#e7f5fc]">
        <span className="sm:col-span-2 col-span-2 md:col-span-1 bg-white rounded-2xl flex justify-center items-center flex-col">
          <h1 className="w-full px-10 justify-start text-lg font-semibold text-radomtoon-bright mt-4 ">
            Milestone Progress
          </h1>
          <Milestone />
        </span>
        <span className="row-span-2 col-span-2 sm:col-span-2 md:col-span-1 h-96 md:h-full bg-white rounded-2xl">
          <PieChart title='Tiers Percentage' data={pieChartData} />
        </span>
        <span className="sm:col-span-2 col-span-2 md:col-span-1 bg-white rounded-2xl">
          <h1 className="w-full px-10 justify-start text-lg font-semibold text-radomtoon-bright mt-4 mb-2">
            Milestone Status
          </h1>
          <div className="px-5 pb-5">
            <TablePagination
              data={milestoneData}
              columns={milestoneDataColumns}
              itemInOnePage={3}
              closePagination={true}
            />
          </div>
        </span>
        <span className="col-span-2">
          <LineChart title={'Progress'} data={lineChartData}/>
        </span>
      </div>
      {openEvidenceModal && (
        <Modal
          onClose={() => setOpenEvidenceModal(false)}
          title="Milestone : 1"
          width={45}
          open={true}
        >
          <EvidenceModalDetail />
        </Modal>
      )}
    </div>
  )
}
