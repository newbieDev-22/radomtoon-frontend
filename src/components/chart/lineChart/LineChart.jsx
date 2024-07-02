
import { Line } from "react-chartjs-2"
import revenueData from "./data/revenueDate.json"
export default function LineChart({ title }) {
    return (
        <div className="w-full py-5 rounded-2xl bg-white flex flex-col justify-center items-center ">
          <div className="w-full px-10 justify-start text-xl font-semibold text-radomtoon-bright">
            {title}
          </div>
          <div className="h-96 w-full flex justify-center">
            <Line
                data={{
                    labels: revenueData.map((data) => data.label),
                    datasets: [
                        {
                            label: "Revennue",
                            data: revenueData.map((data) => data.revenue),
                            backgroundColor: "#064FF0",
                            borderColor: "#064FF0",
                        },
                        {
                            label: "Revennue",
                            data: revenueData.map((data) => data.cost),
                            backgroundColor: "red",
                            borderColor: "orange",
                        }
                    ],
                }}
            />
          </div>
        </div>
    )
}