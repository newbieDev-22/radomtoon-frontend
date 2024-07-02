import { useState } from "react";
import CreatorCreatedProduct from "./CreatorCreatedProduct";
import CreatorEditProfile from "./CreatorEditProfile";

const adminMenuStyleMap = {
  isNotSelected:
    "outline-none px-6 py-2 m-2 hover:rounded-md hover:bg-gray-300 focus:outline-none hover:scale-110 active:scale-100 transition-all",
  isSelected: "outline-none px-6 py-2 m-2 bg-gray-400 rounded-md",
};

const CREATOR_MENU = {
  ABOUT: "About",
  CREATED: "Created",
};

export default function CreatorMenu() {
  const [selectMenu, setSelectMenu] = useState(CREATOR_MENU.ABOUT);

  return (
    <div>
      <div className="flex flex-row justify-center w-full border-b-1 shadow-md py-4">
        <button
          onClick={() => setSelectMenu(CREATOR_MENU.ABOUT)}
          className={
            selectMenu === CREATOR_MENU.ABOUT
              ? adminMenuStyleMap.isSelected
              : adminMenuStyleMap.isNotSelected
          }
        >
          About
        </button>
        <button
          onClick={() => setSelectMenu(CREATOR_MENU.CREATED)}
          className={
            selectMenu === CREATOR_MENU.CREATED
              ? adminMenuStyleMap.isSelected
              : adminMenuStyleMap.isNotSelected
          }
        >
          Created
        </button>
      </div>
      {selectMenu === CREATOR_MENU.ABOUT && (
        <div className="px-20">
          <CreatorEditProfile />
        </div>
      )}
      {selectMenu === CREATOR_MENU.CREATED && (
        <div className="px-20 py-8">
          <CreatorCreatedProduct />
        </div>
      )}
    </div>
  );
}
