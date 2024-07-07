import ImageCard from "../../../components/ImageCard";
import { useStore } from "../../../store/useStore";
import dayjs from "dayjs";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { useSearchParams } from "react-router-dom";

export default function CategoryContainer() {

  const { categotyProductId } = useParams()
  const [seatchParams] = useSearchParams()

  const category = seatchParams.get("category")

  const today = useStore((state) => state.product.today);

  const filterProductsByCategory = useStore((state) => state.filterProductByCategory)
  const productByCategory = useStore((state) => state.productByCategory.data)

  useEffect(() => {
    filterProductsByCategory(categotyProductId)
  }, [])

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <div>
      <h1 className="flex justify-center text-5xl mt-10 font-bold">{category}</h1>
      <div className="flex justify-center mt-10 mb-40">
        <div className="grid grid-cols-3 gap-10 ml-4 ">
          {productByCategory.map((el) => (
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
        </div>
      </div>
    </div>
  );
}
