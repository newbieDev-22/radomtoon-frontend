import { CATEGORIES_TYPE } from "../constants";
import FilterItem from "./FilterItem";

export default function FilterBar() {
  return (
    <div className="scroll-hidden flex w-full gap-5 overflow-auto sm:justify-start px-5 md:justify-center pb-2  border-b-2 border-b-gray">
      <div className="flex gap-8">
        {CATEGORIES_TYPE.map((cat) => (
          <FilterItem
            key={cat.id}
            page={cat.name}
            categoryId={cat.id}
            onClick={() => {}}
          />
        ))}
      </div>
    </div>
  );
}
