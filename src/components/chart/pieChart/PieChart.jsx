import { Pie } from "react-chartjs-2"
import { Chart as ChartJS } from "chart.js/auto"
import { getResponsiveValue } from "../../../utils/responsive"

export default function PieChart({ title, data=[] }) {

  const totalValue = data.reduce((acc, cur) => acc + (cur?.value ?? 0), 0);
  const zoomLevels = {
    sm: 'right',
    '2xl': 'bottom'
  }
  const setZoomLevel = getResponsiveValue(zoomLevels)

    return (
      <div className="h-full w-full py-5 rounded-2xl bg-white flex flex-col gap-2 justify-between items-center ">
        <div className="w-full px-10 justify-start text-lg font-semibold text-radomtoon-bright">
          {title}
        </div>
        <div className=" w-[60%] flex justify-center">
          <Pie
              className="cursor-pointer"
              data={{
                labels: data.map((data) => data.label),
                datasets: [
                  {
                    label: "Count",
                    data: data.map((data) => data?.value),
                    backgroundColor: [
                      "#7BCFF6",
                      "#54E6ED",
                      "#5A91F2",
                    ],
                  },
                ],
              }}
              options={{
                plugins: {
                  legend: {
                    position: setZoomLevel,
                  },
                },
              }}
            />
      </div>
        {totalValue>0 
          ? 
          <div className="grid gap-4 grid-cols-3 w-full text-center">
            <span className="font-extrabold text-2xl xl:text-4xl text-[#7BCFF6]">{(data[0]?.value/(data.reduce( (acc, cur) => acc + cur.value, 0))*100).toFixed(0)}%</span>
            <span className="font-extrabold text-2xl xl:text-4xl text-[#54E6ED]">{(data[1]?.value/(data.reduce( (acc, cur) => acc + cur.value, 0))*100).toFixed(0)}%</span>
            <span className="font-extrabold text-2xl xl:text-4xl text-[#5A91F2]">{(data[2]?.value/(data.reduce( (acc, cur) => acc + cur.value, 0))*100).toFixed(0)}%</span>

            <span className="font-semibold text-base xl:text-xl text-radomtoon-bright">THB {data[0]?.value.toLocaleString()}</span>
            <span className="font-semibold text-base xl:text-xl text-radomtoon-bright">THB {data[1]?.value.toLocaleString()}</span>
            <span className="font-semibold text-base xl:text-xl text-radomtoon-bright">THB {data[2]?.value.toLocaleString()}</span>
          </div>
        :
        'No tier data available'
        }
    </div>
    )
}