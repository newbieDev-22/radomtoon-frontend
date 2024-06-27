import { useState, useEffect } from "react";
import GridTable from "../components/GridTable";

const columns = ["Project", "Tier", "Price", "Project Status", "Delivery Status"];
const data = [
  ["Product A", 1, 100, <div className="text-red-600">Failed</div>, <div>-</div>],
  [
    "Product A",
    1,
    100,
    <div className="text-green-600">Success</div>,
    <div className="text-green-600">Delivered</div>,
  ],
  ["Product A", 1, 100, <div>Pending</div>, <div>Waiting product...</div>],
  ["Product A", 1, 100, <div className="text-red-600">Failed</div>, <div>-</div>],
  [
    "Product A",
    1,
    100,
    <div className="text-green-600">Success</div>,
    <div className="text-green-600">Delivered</div>,
  ],
  ["Product A", 1, 100, <div>Pending</div>, <div>Waiting product...</div>],
  ["Product A", 1, 100, <div className="text-red-600">Failed</div>, <div>-</div>],
  [
    "Product A",
    1,
    100,
    <div className="text-green-600">Success</div>,
    <div className="text-green-600">Delivered</div>,
  ],
  ["Product A", 1, 100, <div>Pending</div>, <div>Waiting product...</div>],
  ["Product A", 1, 100, <div className="text-red-600">Failed</div>, <div>-</div>],
  [
    "Product A",
    1,
    100,
    <div className="text-green-600">Success</div>,
    <div className="text-green-600">Delivered</div>,
  ],
  ["Product A", 1, 100, <div>Pending</div>, <div>Waiting product...</div>],
  ["Product A", 1, 100, <div className="text-red-600">Failed</div>, <div>-</div>],
  [
    "Product A",
    1,
    100,
    <div className="text-green-600">Success</div>,
    <div className="text-green-600">Delivered</div>,
  ],
  ["Product A", 1, 100, <div>Pending</div>, <div>Waiting product...</div>],
  ["Product A", 1, 100, <div className="text-red-600">Failed</div>, <div>-</div>],
  [
    "Product A",
    1,
    100,
    <div className="text-green-600">Success</div>,
    <div className="text-green-600">Delivered</div>,
  ],
  ["Product A", 1, 100, <div>Pending</div>, <div>Waiting product...</div>],
  ["Product A", 1, 100, <div className="text-red-600">Failed</div>, <div>-</div>],
  [
    "Product A",
    1,
    100,
    <div className="text-green-600">Success</div>,
    <div className="text-green-600">Delivered</div>,
  ],
  ["Product A", 1, 100, <div>Pending</div>, <div>Waiting product...</div>],
  ["Product A", 1, 100, <div className="text-red-600">Failed</div>, <div>-</div>],
  [
    "Product A",
    1,
    100,
    <div className="text-green-600">Success</div>,
    <div className="text-green-600">Delivered</div>,
  ],
  ["Product A", 1, 100, <div>Pending</div>, <div>Waiting product...</div>],
  ["Product A", 1, 100, <div className="text-red-600">Failed</div>, <div>-</div>],
  [
    "Product A",
    1,
    100,
    <div className="text-green-600">Success</div>,
    <div className="text-green-600">Delivered</div>,
  ],
  ["Product A", 1, 100, <div>Pending</div>, <div>Waiting product...</div>],
];

export default function SupporterHistoryPage() {
  const itemInOnePage = 10;
  const pageCount = Math.ceil(data.length / itemInOnePage);
  const allFalseStateList = [];

  for (let i = 0; i < pageCount; i++) {
    const allFalseState = {};
    allFalseState["page"] = i;
    allFalseState["selected"] = false;
    allFalseStateList.push(allFalseState);
  }

  const dummyAllFalseStateList = [...allFalseStateList];
  dummyAllFalseStateList[0].selected = true;

  const [selectPage, setSelectPage] = useState(dummyAllFalseStateList);
  const [filterData, setFilterData] = useState([]);

  const handleSelectPage = (page) => {
    const newState = [];
    for (let i = 0; i < pageCount; i++) {
      const allFalseState = {};
      allFalseState["page"] = i;
      if (page === i) {
        allFalseState["selected"] = true;
      } else {
        allFalseState["selected"] = false;
      }
      newState.push(allFalseState);
    }
    setSelectPage(newState);
  };

  useEffect(() => {
    const selectPageNum = selectPage.filter((el) => el.selected === true)[0];
    setFilterData(
      data.slice(
        selectPageNum.page * itemInOnePage,
        selectPageNum.page * itemInOnePage + 10
      )
    );
  }, [selectPage]);

  return (
    <div className="px-10 py-6 flex flex-col gap-4 justify-center">
      <h1 className="text-3xl font-semibold py-4">Histories</h1>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col px-20 justify-center">
          <GridTable data={columns} isHeader={true} />
          {filterData.map((el, index) => (
            <GridTable key={el.page} index={index} data={Object.values(el)} />
          ))}
        </div>
        <div className="join flex justify-center">
          {selectPage.map((el) => (
            <button
              key={el.page}
              className={`join-item btn btn-md ${el.selected ? "btn-active " : null}`}
              onClick={() => handleSelectPage(el.page)}
            >
              {el.page + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
