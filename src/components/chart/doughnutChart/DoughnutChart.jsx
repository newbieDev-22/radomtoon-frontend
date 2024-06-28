import { Chart as ChartJS } from "chart.js/auto"
import { Bar, Pie, Doughnut, Line } from "react-chartjs-2"

import sourceData from "./data/sourceData.json"
export default function DoughnutChart() {
    return (
        <div className="w-[50rem] m-auto border-2 p-[3rem] rounded-xl  border-orange-500 flex justify-center my-10">
            <Doughnut
                className=" cursor-pointer"
                data={{
                    labels: sourceData.map((data) => data.lable),
                    datasets: [
                        {
                            label: "Count",
                            data: sourceData.map((data) => data.value),
                            backgroundColor: [
                                "rgba(42, 63, 229, 0.8)",
                                "rgba(250, 192, 19, 0.8)",
                                "rgba(253, 135, 135, 0.8)",
                                "rgba(42, 263, 229, 0.8)",
                                "rgba(452, 163, 279, 0.8)",
                            ],
                        },

                    ]
                }}
            />
        </div>

    )
}