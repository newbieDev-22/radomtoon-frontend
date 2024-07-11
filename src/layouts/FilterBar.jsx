import { CATEGORIES_TYPE } from "../constants";
import FilterItem from "./FilterItem";
import { useLocation } from "react-router-dom";

export default function FilterBar() {
  const location = useLocation();
  const absoluteFilter = location.pathname.includes("/search");

  return (
    <div
      className={`${
        absoluteFilter
          ? "absolute top-[26vh] md:top-[35vh] text-white z-10"
          : "border-b-2 border-b-gray"
      }  scroll-hidden flex w-full gap-5 overflow-auto sm:justify-start px-5 md:justify-center pb-2`}
    >
      <div className="flex gap-8">
        {[{ id: 0, name: "ALL" }, ...CATEGORIES_TYPE].map((cat) => (
          <FilterItem key={cat.id} page={cat.name} categoryId={cat.id} />
        ))}
      </div>
    </div>
  );
}
