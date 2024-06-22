export default function FilterBar({ categories_name }) {
    return (
      <div className="flex justify-center items-center w-full h-14 gap-10 border-gray-200 shadow-lg">
        <button className="m-5 hover:text-gray-600 hover:border-b-4 focus:outline-none focus:border-b-4 focus:border-gray-500">{categories_name}case1</button>
  
        <button className="m-5 hover:text-gray-600 hover:border-b-4 focus:outline-none focus:border-b-4 focus:border-gray-500">{categories_name}cate2</button>
        <button className="m-5 hover:text-gray-600 hover:border-b-4 focus:outline-none focus:border-b-4 focus:border-gray-500">{categories_name}cate3</button>
        <button className="m-5 hover:text-gray-600 hover:border-b-4 focus:outline-none focus:border-b-4 focus:border-gray-500">{categories_name}cate4</button>
        <button className="m-5 hover:text-gray-600 hover:border-b-4 focus:outline-none focus:border-b-4 focus:border-gray-500">{categories_name}cate5</button>
        <button className="m-5 hover:text-gray-600 hover:border-b-4 focus:outline-none focus:border-b-4 focus:border-gray-500">{categories_name}cate6</button>
      </div>
    );
  }
  