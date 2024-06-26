export default function SearchBar() {
  return (
    <div className="w-full">
      <input
        type="text"
        placeholder="Search projects, creators, and categories"
        className="pl-3 md:pl-10 text-sm md:text-base w-full rounded-lg 
        transition duration-300 md:h-14 py-2 bg-opacity-50 focus:outline-none
         focus:text-black bg-gray-200 placeholder:text-gray-600 focus:placeholder:text-gray-700
          text-gray-600 focus:bg-gray-200"
      />
    </div>
  );
}
