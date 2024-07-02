import PieChart from "../components/chart/pieChart/PieChart"
import DoughnutChart from "../components/chart/doughnutChart/DoughnutChart";
import BarChart from "../components/chart/barChart/BarChartEx";
import LineChart from "../components/chart/lineChart/LineChart";
import Map from "../components/chart/mapComponent/Map";

export default function HommyDummy() {
  return (
    // <CategoryContainer />
    <div className="py-10 px-10 md:px-40 2xl:px-96 bg-[#b6e5e9]">
      <span className="grid grid-cols-2 gap-10 p-10 mx-auto rounded-3xl  bg-[#e7f5fc]">
        <span className="grid grid-cols-4 gap-10 col-span-2">
          
          <div className="flex flex-col justify-between bg-white h-44 rounded-2xl py-4 px-4">
            <p className="font-semibold text-lg text-radomtoon-bright">Active Creator</p>
            <div className="flex flex-col items-center">
              <h1 className="font-bold text-5xl text-center">5144</h1>
              <h2 className="font-normal text-2xl text-center text-green-500">+25%</h2>
            </div>
              <p className="text-xs text-center font-medium text-gray-400">vs previous 30 days</p>
          </div>
          <div className="flex flex-col justify-between bg-white h-44 rounded-2xl py-4 px-4">
            <p className="font-semibold text-lg text-radomtoon-bright">Active Creator</p>
            <div className="flex flex-col items-center">
              <h1 className="font-bold text-5xl text-center">5144</h1>
              <h2 className="font-normal text-2xl text-center text-green-500">+25%</h2>
            </div>
              <p className="text-xs text-center font-medium text-gray-400">vs previous 30 days</p>
          </div>
          <div className="flex flex-col justify-between bg-white h-44 rounded-2xl py-4 px-4">
            <p className="font-semibold text-lg text-radomtoon-bright">Active Creator</p>
            <div className="flex flex-col items-center">
              <h1 className="font-bold text-5xl text-center">5144</h1>
              <h2 className="font-normal text-2xl text-center text-green-500">+25%</h2>
            </div>
              <p className="text-xs text-center font-medium text-gray-400">vs previous 30 days</p>
          </div>
          <div className="flex flex-col justify-between bg-white h-44 rounded-2xl py-4 px-4">
            <p className="font-semibold text-lg text-radomtoon-bright">Active Creator</p>
            <div className="flex flex-col items-center">
              <h1 className="font-bold text-5xl text-center">5144</h1>
              <h2 className="font-normal text-2xl text-center text-green-500">+25%</h2>
            </div>
              <p className="text-xs text-center font-medium text-gray-400">vs previous 30 days</p>
          </div>
        </span>
        <span className="col-span-2">
          <LineChart title={'Funds and Forecast'} />
        </span>
        <span className="row-span-2">
          <Map />
        </span>
        <span>
          <DoughnutChart />
          {/* <PieChart /> */}
        </span>
        <span>
          <BarChart />
        </span>
        
      </span>
    </div>
  );
}
