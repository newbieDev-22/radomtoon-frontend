import { useState } from "react";
import ReactPaginate from "react-paginate";

export default function PaginationItem({ itemsPerPage, items, ItemComponent }) {
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;

  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <ItemComponent currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel="next"
        nextClassName={"bg-yellow-300 p-2 rounded-lg font-bold"}
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="previous"
        previousClassName={"bg-yellow-300 p-2 rounded-lg font-bold"}
        renderOnZeroPageCount={null}
        className={"flex justify-center items-center gap-4"}
        pageClassName={
          "bg-gray-300 p-2 w-8 flex items-center justify-center rounded-lg font-bold hover:scale-[102%] active:scale-100 transition"
        }
        activeClassName={"bg-gray-500"}
      />
    </>
  );
}
