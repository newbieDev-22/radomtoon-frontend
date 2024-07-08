import { useState } from "react";
import DoughnutChart from "../../../components/chart/doughnutChart/DoughnutChart";
import BarChart from "../../../components/chart/barChart/BarChartEx";
import LineChart from "../../../components/chart/lineChart/LineChart";
import Map from "../../../components/chart/mapComponent/Map";
import TextBlock from "../../../components/chart/textBlock/TextBlock";
import { useStore } from "../../../store/useStore";

const barChartMockSupporters = [
  { label: "Game", value: 5892 },
  { label: "Technology", value: 4178 },
  { label: "Film", value: 3941 },
  { label: "Design", value: 1482 },
  { label: "Music", value: 548 },
];
const barChartMockFunds = [
  { label: "Game", value: 157282 },
  { label: "Technology", value: 77516 },
  { label: "Film", value: 74201 },
  { label: "Design", value: 47501 },
  { label: "Music", value: 9501 },
];

export default function AdminDashboard() {
  const textBlockData = useStore((state) => state.dashboardData.textBlockData);
  const lineChartData = useStore((state) => state.dashboardData.lineChartData);
  const doughnutChartData = useStore((state) => state.dashboardData.doughnutChartData);
  const mapData = useStore((state) => state.dashboardData.geoJsonData);

  const [toggleBarChartData, setToggleBarChartData] = useState(false);
  // const [ lineChartData, setLineChartData ] = useState(lineChartMockData)
  const [barChartData, setBarChartData] = useState(barChartMockSupporters);

  const handleToggleData = () => {
    setToggleBarChartData(!toggleBarChartData);
    toggleBarChartData
      ? setBarChartData(barChartMockSupporters)
      : setBarChartData(barChartMockFunds);
  };

  return (
    <div className="py-10 px-10 md:px-40 2xl:px-96 bg-[#b6e5e9]">
      <span className="grid grid-cols-2 gap-10 p-10 mx-auto rounded-3xl  bg-[#e7f5fc]">
        <span className="grid sm:grid-cols-2 md:grid-cols-4 gap-10 col-span-2">
          {textBlockData.map((data) => (
            <TextBlock
              key={data.title}
              title={data.title}
              value={data.value}
              prev={data.prev}
              total={data.total}
            />
          ))}
        </span>
        <span className="col-span-2">
          <LineChart title={"Funds and Forecast"} data={lineChartData} />
        </span>
        <span className="row-span-2 col-span-2 sm:col-span-2 md:col-span-1 h-96 md:h-full">
          <Map geojsonData={mapData} />
        </span>
        <span className="sm:col-span-2 col-span-2 md:col-span-1">
          <DoughnutChart title="Project Status Overview" data={doughnutChartData} />
          {/* <PieChart /> */}
        </span>
        <span className="sm:col-span-2 col-span-2 md:col-span-1">
          <BarChart
            title="Top 5 Categories"
            data={barChartData}
            onClick={handleToggleData}
            toggleBarChartData={toggleBarChartData}
          />
        </span>
      </span>
    </div>
  );
}
