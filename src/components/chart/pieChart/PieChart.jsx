import { Pie } from "react-chartjs-2"
import sourceData from "../doughnutChart/data/sourceData.json"
export default function PieChart() {
    return (
      <div className="w-full h-80 py-5 rounded-2xl bg-white flex justify-center ">
      <Pie
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