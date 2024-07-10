import { Chart as ChartJS } from "chart.js/auto";
import { Line } from "react-chartjs-2";

export default function LineChart({ title, data }) {
  return (
    <div className="w-full py-5 rounded-2xl bg-white flex flex-col justify-center items-center ">
      <div className="w-full px-10 justify-start text-xl font-semibold text-radomtoon-bright">
        {title}
      </div>
      <div className="h-[80%] lg:h-96 w-full flex justify-center">
        <Line
          data={{
            labels: data.map((data) => data.label),
            datasets: [
              {
                label: "Funding",
                data: data.map((data) => data.fund),
                backgroundColor: "#32e7d3",
                borderColor: "#32e7d3",
              },
              {
                label: "Forecast",
                data: data.map((data) => data.forecast),
                backgroundColor: "#ffd564",
                borderColor: "#ffd564",
              },
            ],
          }}
          options={{
            plugins: {
              legend: {
                position: "bottom",
              },
            },
          }}
        />
      </div>
    </div>
  );
}
// 0B5868
