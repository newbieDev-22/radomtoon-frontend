import { useNavigate } from "react-router-dom";
import { useStore } from "../store/useStore";

export default function FilterItem({ page, categoryId }) {
  const navigate = useNavigate();
  const filterProduct = useStore((state) => state.filterProduct);

  const handleClickCategory = () => {
    navigate(`/search/?categoryId=${categoryId}`);
    filterProduct(categoryId);
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
