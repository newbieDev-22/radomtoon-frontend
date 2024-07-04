import { Pie } from "react-chartjs-2"
import { getResponsiveValue } from "../../../utils/responsive"

export default function PieChart({ title, data }) {
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
                    data: data.map((data) => data.value),
                    backgroundColor: [
                      "#4290C0",
                      "#54E6ED",
                      "#91C4D9",
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
      <div className="grid gap-4 grid-cols-3 w-full text-center">
        <span className="font-extrabold text-2xl xl:text-4xl text-[#4290C0]">{(data[0].value/(data.reduce( (acc, cur) => acc + cur.value, 0))*100).toFixed(0)}%</span>
        <span className="font-extrabold text-2xl xl:text-4xl text-[#54E6ED]">{(data[1].value/(data.reduce( (acc, cur) => acc + cur.value, 0))*100).toFixed(0)}%</span>
        <span className="font-extrabold text-2xl xl:text-4xl text-[#91C4D9]">{(data[2].value/(data.reduce( (acc, cur) => acc + cur.value, 0))*100).toFixed(0)}%</span>

        <span className="font-semibold text-base xl:text-xl text-radomtoon-bright">THB {data[0].value.toLocaleString()}</span>
        <span className="font-semibold text-base xl:text-xl text-radomtoon-bright">THB {data[1].value.toLocaleString()}</span>
        <span className="font-semibold text-base xl:text-xl text-radomtoon-bright">THB {data[2].value.toLocaleString()}</span>
      </div>
    </div>
    )
}