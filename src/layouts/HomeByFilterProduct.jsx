import dayjs from "dayjs";
import ImageCard from "../components/ImageCard";
import { useStore } from "../store/useStore";
import { motion } from "framer-motion";
import { CATEGORIES_TYPE_MAP_NAME } from "../constants";
import FilterNotFound from "../components/FilterNotFound";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useParams } from "react-router-dom";

const containerVariants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 1 } },
};

export default function HomeByFilterProduct() {

  const { categoryId } = useParams()
  const [seatchParams] = useSearchParams()

  const word = seatchParams.get("word")

  const today = useStore((state) => state.product.today);
  const searchProduct = useStore((state) => state.searchProduct);
  const categoryFilter = useStore((state) => state.categoryFilter);
  const setCategoryFilter = useStore((state) => state.setCategoryFilter);
  const filterProduct = useStore((state) => state.filterProduct)

  useEffect(() => {
    filterProduct(word, categoryId)
  }, [seatchParams])

  if (!searchProduct.length && word) {
    setCategoryFilter(null);
    return (
      <FilterNotFound />
    );
  }

  return (
    <div>
      {categoryFilter && word ? (
        <h1 className="text-center text-4xl font-bold m-10">
          Filter by : {categoryId} category and word: {word}{" "}
        </h1>
      ) : categoryFilter ? (
        <h1 className="text-center text-4xl font-bold m-10">
          Filter by : {categoryId} category
        </h1>
      ) : (
        <h1 className="text-center text-4xl font-bold m-10">Filter by : {word}</h1>
      )}

      <div className="flex justify-center gap-10 mt-10 mb-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-3 gap-4 mb-20"
        >
          {searchProduct.map((el) => (
            <motion.div key={el.id} variants={itemVariants}>
              <ImageCard
                key={el.id}
                size="medium"
                imageSrc={el.productImage}
                productName={el.productName}
                creatorName={el.creatorName}
                daysLeft={
                  dayjs(el.deadline).diff(dayjs(today), "day") >= 0
                    ? dayjs(el.deadline).diff(dayjs(today), "day")
                    : 0
                }
                content={el.summaryDetail}
                goal={el.goal}
                totalFund={el.totalFund}
                avatarImage={el.profileImage}
                vid={el.productVideo}
                productId={el.id}
                creatorId={el.creatorId}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
