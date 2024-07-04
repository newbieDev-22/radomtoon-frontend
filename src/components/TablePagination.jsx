import { useEffect, useState } from "react";
import GridTable from "./GridTable";

export default function TablePagination({
  data,
  columns,
  itemInOnePage = 10,
  closePagination = false,
}) {
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
    <div className="flex flex-col gap-4">
      <div className="flex flex-col justify-center">
        <GridTable key={"head"} data={columns} isHeader={true} index={"head"} />
        {filterData.map((el, index) => (
          <GridTable key={index} index={index} data={Object.values(el)} />
        ))}
      </div>
      {!closePagination && (
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
      )}
    </div>
  );
}
