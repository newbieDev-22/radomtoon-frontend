
import { Line } from "react-chartjs-2"
import revenueData from "./data/revenueDate.json"
export default function LineChat() {
    return (
        <div className="w-[50rem] m-auto border-2 p-[3rem] rounded-xl  border-orange-500 flex justify-center my-10">
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
    )
}