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
        nextLabel=">"
        nextClassName={"p-2 rounded-lg font-bold hover:bg-gray-200"}
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<"
        previousClassName={"p-2 rounded-lg font-bold hover:bg-gray-200"}
        renderOnZeroPageCount={null}
        className={"flex justify-center items-center gap-4"}
        pageClassName={
          " p-2 w-8 flex items-center justify-center font-bold hover:scale-[102%] active:scale-100 transition"
        }
        activeClassName={"bg-creator-normal rounded-lg"}
      />
    </>
  );
}
