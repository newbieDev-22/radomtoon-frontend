import { useLocation } from "react-router-dom"

export default function SearchBar() {
  const location = useLocation()
  const inLanding = location.pathname == '/landing'

  return (
    <>
      <div className="w-96">
          <input
            type="text"
            placeholder="Search projects, creators, and categories"
            className={`pl-3 md:pl-10 text-sm md:text-base w-full rounded-l-lg transition duration-300 md:h-14 py-2 bg-opacity-50 focus:outline-none focus:text-black
              ${inLanding ? 'bg-gray-200 placeholder:text-white text-white focus:bg-white focus:placeholder:text-gray-400 hover:brightness-110' 
                : 'bg-gray-200 placeholder:text-gray-600 focus:placeholder:text-gray-700 text-gray-600 focus:bg-gray-200'}
                      `}
          />
        </div>
        <button className="w-14 text-white bg-creator-normal flex items-center justify-center rounded-r-lg transition hover:brightness-95 active:brightness-90">
          <span className="material-symbols-outlined">
            search
          </span>
        </button>
    </>
  )
}
