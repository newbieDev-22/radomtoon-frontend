import { Doughnut } from "react-chartjs-2";

export default function DoughnutChart({ title, data }) {
  const totalValue = data.reduce((acc, cur) => acc + cur.value, 0);
  
    return (
      <div className="w-full py-5 rounded-2xl bg-white flex flex-col justify-center items-center ">
        <div className="w-full px-10 justify-start text-lg font-semibold text-radomtoon-bright">
          {title}
        </div>
        <div className="h-96 w-full flex justify-center">
        <Doughnut
                  className=" cursor-pointer"
                  data={{
                      labels: data.map((data) => (data.value / totalValue * 100).toFixed(0)+'%' + ' '+ data.label),
                      datasets: [
                          {
                              label: "Count",
                              data: data.map((data) => data.value),
                              backgroundColor: [
                                "#32e7d3",
                                  "#ffd564",
                                  "rgba(253, 135, 135, 0.8)",
                                  "#6869f4",
                                  "rgba(452, 163, 279, 0.8)",
                              ],
                          },

                      ]
                  }}
              />
      </div>
    </div>
  );
}
