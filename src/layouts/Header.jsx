import { Link, useLocation } from "react-router-dom";
import { RadomtoonIcon } from "../icons";
import SearchBar from "./SearchBar";
import Menu from "./Menu";
import FilterBar from "./FilterBar";

const LANDING_PATH = "/landing";

export default function Header() {
  const location = useLocation();
  const inLanding = location.pathname == "/landing";
  return (
    <>
      <header
        className={`2xl:px-48 mt-5 md:mt-0 items-start md:items-center grid z-20 h-[14vh] bg-transparent
          grid-cols-1 md:grid-cols-3 grid-rows-2 md:grid-rows-1  ${
            inLanding && "absolute w-full"
          } `}
      >
        <div className="flex justify-evenly md:justify-between">
          <Link to="/" className="w-52 md:w-72 text-supporter-saturate">
            <RadomtoonIcon />
          </Link>
          <div className="md:hidden gap-3 flex items-center text-sm mr-5">
            <Menu />
          </div>
        </div>
        {location.pathname !== LANDING_PATH ? (
          <div className="flex justify-center px-6 md:px-0">
            <SearchBar />
          </div>
        ) : (
          <div></div>
        )}
        <div className=" hidden md:flex items-center justify-end gap-20 mr-8 2xl:mr-10 ">
          <Menu />
        </div>
      </header>

      {location.pathname !== LANDING_PATH && <FilterBar />}
    </>
  );
}
