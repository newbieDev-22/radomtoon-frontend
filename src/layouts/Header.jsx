import { Link, useLocation, useParams } from "react-router-dom"
import { RadomtoonIcon } from "../icons"
import SearchBar from "./SearchBar"
import Menu from "./Menu"
import Nav from "./Nav"

export default function Header() {
  const location = useLocation()
  const params = useParams()

  const inLanding = location.pathname == '/landing'
  const hideHeader = ['/login'].includes(location.pathname);
  const hideNav = ['/landing', '/login',`/campaign/${params.productId}/payment`].includes(location.pathname)

  return (
    <>
      {hideHeader || (
        <header className={`2xl:px-48 mt-5 md:mt-0 items-start md:items-center grid z-10 h-[14vh] bg-transparent
          grid-cols-1 md:grid-cols-3 grid-rows-2 md:grid-rows-1 ${inLanding && 'absolute w-full'}`}
       >
         <div className="flex justify-evenly md:justify-between">
           <Link to="/" className="w-52 md:w-72 text-supporter-saturate">
             <RadomtoonIcon />
           </Link>
           <div className="md:hidden gap-3 flex items-center text-sm mr-5">
             <Menu />
           </div>
         </div>
         <div className="flex justify-center px-6 md:px-0">
           <SearchBar />
         </div>
         <div className=" hidden md:flex items-center justify-end gap-20 mr-20 2xl:mr-10">
           <Menu />
         </div>
       </header>
      )}

      {hideNav || <Nav />}
    </>
  )
}
