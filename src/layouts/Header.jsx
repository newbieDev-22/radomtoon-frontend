import { useLocation, useNavigate } from "react-router-dom";
import { RadomtoonIcon } from "../icons";
import SearchBar from "./SearchBar";
import Menu from "./Menu";
import FilterBar from "./FilterBar";
import { useStore } from "../store/useStore";

const HOME_PATH = "/";

export default function Header() {
  const location = useLocation();
  const inHomePage = location.pathname === "/";

  const navigate = useNavigate();
  const filterProduct = useStore((state) => state.filterProduct);

  const handleToHomePage = () => {
    filterProduct();
    navigate("/search");
  };

  return (
    <>
      <header
        className={`2xl:px-48 mt-3 md:mt-0 items-start md:items-center grid z-20 h-[12vh] bg-transparent
          grid-cols-1 md:flex grid-rows-2 md:justify-between   ${
            (inHomePage || location.pathname.includes("/search")) && "absolute w-full"
          } `}
      >
        <div className="flex justify-self-start ">
          <div className="w-64 overflow-hidden ml-3 md:ml-0">
            <div
              onClick={handleToHomePage}
              className="w-52 md:w-72 text-supporter-saturate overflow-hidden "
            >
              <RadomtoonIcon />
            </div>
          </div>
          <div className="flex md:hidden text-sm mr-5">
            <Menu />
          </div>
        </div>
        {location.pathname !== HOME_PATH ? (
          <div className="flex justify-center px-6 md:px-0 w-full md:w-[32vw]">
            <SearchBar />
          </div>
        ) : (
          <div></div>
        )}
        <div className=" hidden md:flex justify-self-end  ">
          <Menu />
        </div>
      </header>

      {location.pathname != HOME_PATH && <FilterBar />}
    </>
  );
}
