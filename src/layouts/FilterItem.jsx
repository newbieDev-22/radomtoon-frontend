import { useNavigate } from "react-router-dom";
import { useStore } from "../store/useStore";

export default function FilterItem({ page, categoryId }) {
  const navigate = useNavigate();
  const filterProduct = useStore((state) => state.filterProduct);
  const setWord = useStore((state) => state.setWord);
  const setCategoryFilter = useStore((state) => state.setCategoryFilter);

  const handleClickCategory = () => {
    setWord("");
    setCategoryFilter(categoryId);
    filterProduct(categoryId);
    navigate(`/product/${categoryId}/?category=${page}`);
  };

  return (
    <button
      className="font-medium hover:scale-[110%] active:scale-100"
      onClick={handleClickCategory}
    >
      {page}
    </button>
  );
}
