import { useNavigate } from "react-router-dom";
import { useStore } from "../store/useStore";


export default function FilterItem({ page, categoryId }) {
  const navigate = useNavigate()
  const filterProductsByCategory = useStore((state) => state.filterProductByCategory)

  const handleClickCategory = (categotyId) => {
    // navigate(`/product/${categotyId}/?category=${page}`)
    filterProductsByCategory(categoryId)

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
