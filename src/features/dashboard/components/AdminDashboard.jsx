import { useState } from "react";
import DoughnutChart from "../../../components/chart/doughnutChart/DoughnutChart";
import BarChart from "../../../components/chart/barChart/BarChartEx";
import LineChart from "../../../components/chart/lineChart/LineChart";
import Map from "../../../components/chart/mapComponent/Map";
import TextBlock from "../../../components/chart/textBlock/TextBlock";
import { useStore } from "../../../store/useStore";

export default function AdminDashboard() {
  const textBlockData = useStore((state) => state.dashboardData.textBlockData);
  const lineChartData = useStore((state) => state.dashboardData.lineChartData);
  const doughnutChartData = useStore((state) => state.dashboardData.doughnutChartData);
  const mapData = useStore((state) => state.dashboardData.geoJsonData);
  const barChartDataAll = useStore((state) => state.dashboardData.barChartData);

  const [toggleBarChartData, setToggleBarChartData] = useState(false);
  // const [ lineChartData, setLineChartData ] = useState(lineChartMockData)
  const barChartSupporters = barChartDataAll.map((el) => ({
    month: el.month,
    data: el.topFiveByTotalSupporter,
  }));
  const [barChartData, setBarChartData] = useState(barChartSupporters);

  const handleToggleData = () => {
    const barChartSupporters = barChartDataAll.map((el) => ({
      month: el.month,
      data: el.topFiveByTotalSupporter,
    }));
    const barChartFund = barChartDataAll.map((el) => ({
      month: el.month,
      data: el.topFiveByTotalFund,
    }));
    setToggleBarChartData(!toggleBarChartData);
    toggleBarChartData
      ? setBarChartData(barChartSupporters)
      : setBarChartData(barChartFund);
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
