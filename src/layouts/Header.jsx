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
        className={`2xl:px-48 md:mt-0 items-start md:items-center grid z-20 h-[12vh] bg-transparent
          grid-cols-1 md:flex grid-rows-2 md:justify-between  ${inLanding && "absolute w-full"
          } `}
      >
        <div className="flex justify-self-start ">
          <Link to="/" className="w-52 md:w-72 text-supporter-saturate">
            <RadomtoonIcon />
          </Link>
          <div className="flex md:hidden text-sm mr-5">
            <Menu />
          </div>
        </div>
        {location.pathname !== LANDING_PATH ? (
          <div className="flex justify-center px-6 md:px-0 w-full md:w-[32vw]">
            <SearchBar />
          </div>
        ) : (
          <div></div>
        )}
        <div className=" hidden md:flex pl-10 justify-self-end  ">
          <Menu />
        </div>
      </header>

      {location.pathname !== LANDING_PATH && <FilterBar />}
    </>
  );
}
