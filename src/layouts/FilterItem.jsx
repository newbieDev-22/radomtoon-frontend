import { useStore } from "../store/useStore";

export default function FilterItem({ page, categoryId }) {

  const filterProduct = useStore((state) => state.filterProduct)
  const setWord = useStore((state) => state.setWord)
  const setcategoryFilter = useStore((state) => state.setcategoryFilter)


  const handleClickCategory = (categotyId) => {
    setWord("")
    setcategoryFilter(categotyId)
    filterProduct(categoryId)
  }

  return (
    <button
      className="font-medium hover:scale-[110%] active:scale-100"
      onClick={() => handleClickCategory(categoryId)}
    >
      {page}
    </button>
  );
}
