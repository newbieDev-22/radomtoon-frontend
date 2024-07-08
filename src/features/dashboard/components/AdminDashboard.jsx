import { useState } from "react";
import DoughnutChart from "../../../components/chart/doughnutChart/DoughnutChart";
import BarChart from "../../../components/chart/barChart/BarChartEx";
import LineChart from "../../../components/chart/lineChart/LineChart";
import Map from "../../../components/chart/mapComponent/Map";
import TextBlock from "../../../components/chart/textBlock/TextBlock";
import { useStore } from "../../../store/useStore";

const textBlockMockData = [
  { title: 'Active Creator', value: 5144, prev: 2691 },
  { title: 'Active Supporter', value: 20185, prev: 24801 },
  { title: 'Average Funding', value: 2810681  },
  { title: 'Success Project', value: 472, total: 564 },
]

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

const barChartMockSupporters = [
  { "label": "Game", "value": 5892 },
  { "label": "Technology", "value": 4178 },
  { "label": "Film", "value": 3941 },
  { "label": "Design", "value": 1482 },
  { "label": "Music", "value": 548 },
]
const barChartMockFunds = [
  { "label": "Game", "value": 157282 },
  { "label": "Technology", "value": 77516 },
  { "label": "Film", "value": 74201 },
  { "label": "Design", "value": 47501 },
  { "label": "Music", "value": 9501 },
]

export default function AdminDashboard() {
  const textBlockData = useStore(state => state.dashboardData.textBlockData)
  const lineChartData = useStore(state=> state.dashboardData.lineChartData)
  const doughnutChartData = useStore(state => state.dashboardData.doughnutChartData)
  const mapData = useStore(state => state.dashboardData.geoJsonData)

  const [ toggleBarChartData, setToggleBarChartData ] = useState(false)
  // const [ lineChartData, setLineChartData ] = useState(lineChartMockData)
  const [ barChartData, setBarChartData ] = useState(barChartMockSupporters)

  const handleToggleData = () => {
    setToggleBarChartData(!toggleBarChartData)
    toggleBarChartData ? setBarChartData(barChartMockSupporters) : setBarChartData(barChartMockFunds)
  }


  return (
    <div className="py-10 px-10 md:px-40 2xl:px-96 bg-[#b6e5e9]">
      <span className="grid grid-cols-2 gap-10 p-10 mx-auto rounded-3xl  bg-[#e7f5fc]">
        <span className="grid sm:grid-cols-2 md:grid-cols-4 gap-10 col-span-2">
          {textBlockData.map(data => <TextBlock key={data.title} title={data.title} value={data.value} prev={data.prev} total={data.total} />)}
        </span>
        <span className="col-span-2">
          <LineChart title={'Funds and Forecast'} data={lineChartData}/>
        </span>
        <span className="row-span-2 col-span-2 sm:col-span-2 md:col-span-1 h-96 md:h-full">
          <Map geojsonData={mapData} />
        </span>
        <span className="sm:col-span-2 col-span-2 md:col-span-1">
          <DoughnutChart title="Project Status Overview" data={doughnutChartData} />
          {/* <PieChart /> */}
        </span>
        <span className="sm:col-span-2 col-span-2 md:col-span-1">
          <BarChart title="Top 5 Categories" data={barChartData} onClick={handleToggleData} toggleBarChartData={toggleBarChartData} />
        </span>
      </span>
    </div>
  )
}
