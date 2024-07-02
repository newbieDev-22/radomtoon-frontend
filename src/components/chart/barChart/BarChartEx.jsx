import { Chart as ChartJS } from "chart.js/auto"
import { Bar, Pie, Doughnut, Line } from "react-chartjs-2"

import sourceData from "./data/sourceData.json"


export default function BarChart() {


    return (
        <>
            <div className="w-full py-4 px-10 flex justify-center rounded-xl bg-white ">
                <Bar
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
                                borderRadius: 5
                            },

                        ]
                    }}
                />
            </div>
        </>
    )
}