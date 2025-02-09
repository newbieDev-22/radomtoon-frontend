import { Bar } from "react-chartjs-2";
import { FilterIcon, FilterMonth } from "../../../icons";
import { useState } from "react";
import Dropdown from "../../Dropdown";
import dayjs from "dayjs";
import { useEffect } from "react";
import { MONTH_NAME_MAP } from "../../../constants";

export default function BarChart({ title, data, onClick, toggleBarChartData }) {
  const [month, setMonth] = useState(new Date());
  const today = new Date();
  const todayMonth = dayjs(today).format("MMM");
  const filterData = data.filter((el) => el.month === todayMonth)[0];

  const [currentData, setCurrentData] = useState(filterData.data);
  const handleMonthChange = (selectedMonth) => {
    const monthIndex = MONTH_NAME_MAP.indexOf(selectedMonth);
    const newMonth = new Date(today.getFullYear(), monthIndex, 1);
    setMonth(newMonth);
    const currentMonth = dayjs(newMonth).format("MMM");
    const filterData = data.filter((el) => el.month === currentMonth)[0];
    setCurrentData(filterData.data);
  };

  useEffect(() => {
    const currentMonth = dayjs(month).format("MMM");
    const filterData = data.filter((el) => el.month === currentMonth)[0];
    setCurrentData(filterData.data);
  }, [data]);

  return (
    <div className="w-full py-4 px-10 flex justify-center rounded-xl bg-white ">
      <div className="w-full">
        <div className="flex justify-between">
          <span className="text-xl font-semibold text-radomtoon-bright">{title}</span>
          <span className="flex items-center text-xs gap-2">
            <div className="flex rounded-sm border">
              <span className="h-4 w-4">
                <FilterMonth className={"w-full h-full"} />
              </span>
              <Dropdown
                data={MONTH_NAME_MAP}
                onChange={handleMonthChange}
                title="Select your month"
                selectValue={MONTH_NAME_MAP[month.getMonth()]}
                className="indent-1 w-24 "
              />
            </div>
            <div
              onClick={onClick}
              className="flex items-center gap-1 border px-1 rounded-sm cursor-pointer active:scale-95"
            >
              <span className="h-4 w-4">
                <FilterIcon className={"w-full h-full"} />
              </span>
              <button>Switch Data</button>
            </div>
          </span>
        </div>
        <Bar
          className=" cursor-pointer"
          data={{
            labels: currentData?.map((data) => data.label),
            datasets: [
              {
                label: toggleBarChartData ? "Funds" : "Supporters",
                data: currentData?.map((data) => data.value),
                backgroundColor: "rgba(250, 192, 19, 0.8)",
                barThickness: 20,
                barPercentage: 1,
              },
            ],
          }}
        />
      </div>
    </div>
  );
}
