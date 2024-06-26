import React from "react";

const ColumnsGridColsMapping = {
  3: "grid-cols-3",
  4: "grid-cols-4",
  5: "grid-cols-5",
  6: "grid-cols-6",
};
const DataGridColsMapping = {
  3: "grid-cols-3",
  4: "grid-cols-4",
  5: "grid-cols-5",
  6: "grid-cols-6",
};

export default function GridTable({ columns, data, title }) {
  const getStatusClass = (status) => {
    switch (status) {
      case "Success":
        return "text-green-600 bg-green-100 text-center rounded-lg";
      case "Pending":
        return "text-yellow-600 bg-yellow-100 text-center rounded-lg";
      case "Failed":
        return "text-red-600 bg-red-100 text-center rounded-lg";
      default:
        return "";
    }
  };

  const deliveryStatusClass = (status) => {
    switch (status) {
      case "Deliver":
        return "text-yellow-600 bg-yellow-100 text-center";
      case "Delivered":
        return "text-green-600 bg-green-100 text-center";
      default:
        return "";
    }
  };
  const evidenceStatusClass = (status) => {
    switch (status) {
      case "Send Evidence":
        return "text-yellow-600 bg-yellow-100 text-center";
      case "Evidence Sent":
        return "text-green-600 bg-green-100 text-center";
      default:
        return "";
    }
  };

  const handleDeliveryClick = (event) => {
    const button = event.target;
    button.classList.remove("text-yellow-600", "bg-yellow-100");
    button.classList.add("text-green-600", "bg-green-100");
    button.textContent = "delivered";
  };
  const handleEvidenceClick = (event) => {
    const button = event.target;
    button.classList.remove("text-yellow-600", "bg-yellow-100");
    button.classList.add("text-green-600", "bg-green-100");
    button.textContent = "Evidence Sent";
  };

  return (
    <div className="p-4 flex justify-center items-center">
      <div className="flex flex-col">
        <h1 className="text-2xl font-semibold mb-3">{title}</h1>
        <div className="overflow-x-auto border-2 border-gray-300 rounded-lg">
          <div
            className={`grid ${
              ColumnsGridColsMapping[columns.length]
            } gap-4 bg-gray-100 border-b border-gray-300`}
          >
            {columns.map((column, index) => (
              <div
                key={index}
                className=" py-3  w-[180px] text-center text-lg text-black font-semibold uppercase"
              >
                {column}
              </div>
            ))}
          </div>
          {data.map((item, index) => (
            <div
              key={index}
              className={`grid text- ${
                DataGridColsMapping[columns.length]
              } gap-4 ${
                index % 2 === 0 ? "bg-white" : "bg-gray-50"
              } border-b border-gray-300 text-center`}
            >
              {Object.entries(item).map(([key, value], subIndex) => (
                <div
                  key={subIndex}
                  className={` py-4  w-[180px] ${
                    key === "status" ? getStatusClass(value) : ""
                  }`}
                >
                  {key === "form" ? (
                    <a href="#" className="text-[#7D8398] hover:underline">
                      {value}
                    </a>
                  ) : key === "tier" ? (
                    <div>LV. {value}</div>
                  ) : key === "spendingMoney" ? (
                    <div>
                      THB{" "}
                      {value.toLocaleString("en-US", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </div>
                  ) : key === "delivery" ? (
                    <button
                      key={subIndex}
                      className={`w-[120px] rounded-lg shadow-md ${deliveryStatusClass(
                        value
                      )}`}
                      onClick={handleDeliveryClick}
                    >
                      {value}
                    </button>
                  ) : key === "evidence" ? (
                    <button
                      key={subIndex}
                      className={`w-[120px] rounded-lg shadow-md ${evidenceStatusClass(
                        value
                      )}`}
                      onClick={handleEvidenceClick}
                    >
                      {value}
                    </button>
                  ) : (
                    value
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
