import { useState } from "react";
import { SearchIcon } from "../icons";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useStore } from "../store/useStore";

export default function SearchBar() {
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const [searchParams] = useSearchParams();
  const categoryId = searchParams.get("categoryId");

  const filterProduct = useStore((state) => state.filterProduct);

  const handleSearch = () => {
    if (categoryId) {
      const searchResult = filterProduct(categoryId, input);
      if (searchResult.length) {
        navigate(`/search/?categoryId=${categoryId}&word=${input}`);
      } else {
        filterProduct(0, input);
        navigate(`/search/?word=${input}`);
      }
    } else {
      filterProduct(0, input);
      navigate(`/search/?word=${input}`);
    }
    setInput("");
  };

  const handleEnterKey = e => { if (e.key === 'Enter') handleSearch() }

  return (
    <div className="w-full flex">
      <input
        type="text"
        placeholder="Search projects, creators, and categories"
        className="pl-3 md:pl-10 text-sm md:text-base w-full rounded-l-lg 
        transition duration-300 md:h-14 py-2 bg-opacity-50 focus:outline-none
         focus:text-black bg-gray-200 placeholder:text-gray-600 focus:placeholder:text-gray-700
          text-gray-600 focus:bg-gray-200"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleEnterKey}
      />
      <button
        onClick={handleSearch}
        className="w-10 md:w-16 sm:w-10 bg-supporter-normal 
        transition rounded-r-lg flex justify-center items-center hover:bg-supporter-saturate active:bg-creator-normal"
      >
        <SearchIcon />
      </button>
    </div>
  );
}
