import { useState } from "react";
import FilterItem from "./FilterItem";
import Cursor from "../features/cursor-navbar/Cursor";

// const categoryList = [
//   { id: 1, page: "Art" },
//   { id: 2, page: "Comics" },
//   { id: 3, page: "Crafts" },
//   { id: 4, page: "Dance" },
//   { id: 5, page: "Design" },
//   { id: 6, page: "Fashion" },
//   { id: 7, page: "Film" },
//   { id: 8, page: "Games" },
//   { id: 9, page: "Music" },
//   { id: 10, page: "Technology" },
// ];

// export default function FilterBar() {
//   return (
//     <div className="scroll-hidden flex w-full gap-5 overflow-auto sm:justify-start px-5 md:justify-center pb-2  border-b-2 border-b-gray">
//       <div className="flex gap-8">
//         {categoryList.map((cat) => (
//           <FilterItem key={cat.id} page={cat.page} onClick={() => { }} />
//         ))}
//       </div>
//     </div>
//   );
// }

export default function FilterBar() {

  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  })

  return (
    <>

      <ul
        onMouseLeave={() => {
          setPosition((prev) => ({ ...prev, opacity: 0 }))
        }}
        className="relative mx-auto flex w-fit rounded-full bg-white p-1"

      >
        <FilterItem setPosition={setPosition}>Art</FilterItem>
        <FilterItem setPosition={setPosition}>Comics</FilterItem>
        <FilterItem setPosition={setPosition}>Crafts</FilterItem>
        <FilterItem setPosition={setPosition}>Dance</FilterItem>
        <FilterItem setPosition={setPosition}>Design</FilterItem>
        <FilterItem setPosition={setPosition}>Fashion</FilterItem>
        <FilterItem setPosition={setPosition}>Film</FilterItem>
        <FilterItem setPosition={setPosition}>Games</FilterItem>
        <FilterItem setPosition={setPosition}>Music</FilterItem>
        <FilterItem setPosition={setPosition}>Technology</FilterItem>
        <Cursor position={position} />
      </ul>

    </>
  );
}


