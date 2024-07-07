import { Doughnut } from "react-chartjs-2";

export default function DoughnutChart({ title, data }) {
  return (
    <div className="w-full py-5 rounded-2xl bg-white flex flex-col justify-center items-center ">
      <div className="w-full px-10 justify-start text-lg font-semibold text-radomtoon-bright">
        {title}
      </div>
      <div className="h-96 w-full flex justify-center">
        <Doughnut
          className=" cursor-pointer"
          data={{
            labels: data.map((data) => data.label),
            datasets: [
              {
                label: "Count",
                data: data.map((data) => data.value),
                backgroundColor: [
                  "#ffd564",
                  "#32e7d3",
                  "rgba(253, 135, 135, 0.8)",
                  "#6869f4",
                  "rgba(452, 163, 279, 0.8)",
                ],
              },
            ],
          }}
        />
      </div>
    </div>
  );
}
