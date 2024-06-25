import React from "react";
import Button from "./Button";

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
        return "text-green-600 bg-green-100 text-center";
      case "Pending":
        return "text-yellow-600 bg-yellow-100 text-center";
      case "Failed":
        return "text-red-600 bg-red-100 text-center";
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
        <h1 className="text-lg font-semibold mb-3">{title}</h1>
        <div className="overflow-x-auto border-2 border-gray-300 rounded-lg">
          <div
            className={`grid ${
              ColumnsGridColsMapping[columns.length]
            } gap-4 bg-gray-100 border-b border-gray-300`}
          >
            {columns.map((column, index) => (
              <div
                key={index}
                className=" py-3  w-[180px] text-center text-xs text-black font-semibold uppercase"
              >
                {column}
              </div>
            ))}
          </div>
          {data.map((item, index) => (
            <div
              key={index}
              className={`grid ${DataGridColsMapping[columns.length]} gap-4 ${
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

{
  /* {data.map((item, index) => (
        <div
          key={index}
          className="grid grid-cols-3 gap-4 border-b border-gray-300"
        >
          <div className="px-6 py-4">{item.name}</div>
          <div className="px-6 py-4 text-[#7D8398] cursor-pointer">
            {item.form}
          </div>
          <div className={`px-6 py-4 ${getStatusClass(item.status)}`}>
            {item?.status === "success" ? (
              <span className="inline-flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 mr-1 text-green-500 size-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path d="m4.5 12.75 6 6 9-13.5" />
                </svg>
                Success
              </span>
            ) : item?.status === "pending" ? (
              <span className="inline-flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 mr-1 text-yellow-500 size-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                </svg>
                Pending
              </span>
            ) : (
              <span className="inline-flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 mr-1 text-red-500 size-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M6 18 18 6M6 6l12 12" />
                </svg>
                Failed
              </span>
            )}
          </div>
        </div>
      ))} */
}
