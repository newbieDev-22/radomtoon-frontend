import { useState } from "react";
import { SearchIcon } from "../icons";
import { useStore } from "../store/useStore";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const setWord = useStore((state) => state.setWord);
  const filterProduct = useStore((state) => state.filterProduct);
  const word = useStore((state) => state.word);
  const categoryFilter = useStore((state) => state.categoryFilter);
  const navigate = useNavigate();

  const [input, setInput] = useState("");

  const handleClickSearch = () => {
    setInput("");
    setWord(input);
    filterProduct(word, categoryFilter);
    navigate("/");
  };

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
      />
      <button
        onClick={handleClickSearch}
        className="w-10 md:w-16 sm:w-10 bg-creator-normal 
        transition rounded-r-lg flex justify-center items-center hover:bg-creator-saturate active:bg-creator-normal"
      >
        <SearchIcon />
      </button>
    </div>
  );
}
