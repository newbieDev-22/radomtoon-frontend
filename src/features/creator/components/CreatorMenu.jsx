import { useState } from "react";
import CreatorCreatedProduct from "./CreatorCreatedProduct";
import CreatorEditProfile from "./CreatorEditProfile";

const adminMenuStyleMap = {
  isNotSelected:
    "outline-none px-6 py-2 m-2 hover:rounded-md hover:bg-gray-300 focus:outline-none hover:scale-110 active:scale-100 transition-all",
  isSelected: "outline-none px-6 py-2 m-2 bg-gray-400 rounded-md",
};

const creatorMenu = {
  About: "About",
  Created: "Created",
};

export default function CreatorMenu() {
  const [selectMenu, setSelectMenu] = useState(creatorMenu.About);

  return (
    <div>
      <div className="flex flex-row justify-center w-full border-b-1 shadow-md py-4">
        <button
          onClick={() => setSelectMenu(creatorMenu.About)}
          className={
            selectMenu === creatorMenu.About
              ? adminMenuStyleMap.isSelected
              : adminMenuStyleMap.isNotSelected
          }
        >
          About
        </button>
        <button
          onClick={() => setSelectMenu(creatorMenu.Created)}
          className={
            selectMenu === creatorMenu.Created
              ? adminMenuStyleMap.isSelected
              : adminMenuStyleMap.isNotSelected
          }
        >
          Created
        </button>
      </div>
      {selectMenu === creatorMenu.About && (
        <div className="px-20">
          <CreatorEditProfile />
        </div>
      )}
      {selectMenu === creatorMenu.Created && (
        <div className="px-20 py-8">
          <CreatorCreatedProduct />
        </div>
      )}
    </div>
  );
}
