import CategoryContainer from "../components/CategoryContainer";
import BarChart from "../components/chart/barChart/BarChartEx";
import DoughnutChart from "../components/chart/doughnutChart/DoughnutChart";
import LineChat from "../components/chart/lineChat/LineChat";
import PieChart from "../components/chart/pieChart/PieChart";

export default function HomeDummy() {
  return (
    <div>
      {/* Test BarChart */}
      <BarChart />
      <DoughnutChart />
      <LineChat />
      <PieChart />
      {/* End test BarChart */}
      <CategoryContainer />
    </div>
  );
}
