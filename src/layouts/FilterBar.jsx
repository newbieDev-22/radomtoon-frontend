import FilterItem from "./FilterItem";

const categoryList = [
  { id: 1, page: "Art" },
  { id: 2, page: "Comics" },
  { id: 3, page: "Crafts" },
  { id: 4, page: "Dance" },
  { id: 5, page: "Design" },
  { id: 6, page: "Fashion" },
  { id: 7, page: "Film" },
  { id: 8, page: "Games" },
  { id: 9, page: "Music" },
  { id: 10, page: "Technology" },
];

export default function FilterBar() {
  return (
    <div className="flex w-full items-end gap-5 overflow-auto sm:justify-start px-5 md:justify-center py-2  border-b-2 border-b-gray">
      <div className="flex gap-8">
        {categoryList.map((cat) => (
          <FilterItem key={cat.id} page={cat.page} onClick={() => {}} />
        ))}
      </div>
    </div>
  );
}
