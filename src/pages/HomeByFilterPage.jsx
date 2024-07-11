import dayjs from "dayjs";
import ImageCard from "../components/ImageCard";
import { useStore } from "../store/useStore";
import { motion } from "framer-motion";
import { useSearchParams } from "react-router-dom";
import { CATEGORIES_TYPE_MAP_NAME, CATEGORIES_HUE_MAP, CATEGORIES_HUE_RESET } from "../constants";
import { useEffect } from "react";

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
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeInOut" } },
};

export default function HomeByFilterPage() {
  const [searchParams] = useSearchParams();
  const word = searchParams.get("word");
  const categoryId = searchParams.get("categoryId");

  const today = useStore((state) => state.product.today);
  const searchProduct = useStore((state) => state.searchProduct);
  const filterProduct = useStore((state) => state.filterProduct);

  useEffect(() => {
    if (!categoryId && !word) {
      filterProduct();
    }
  }, [categoryId, word]);

  return (
    <div>
      <div className={`h-[30vh] md:h-[40vh] w-screen flex items-center justify-center relative`}>
      {categoryId && word && (
        <div className="text-center text-6xl md:text-8xl text-white font-mono font-bold pt-10">
          <h1>{CATEGORIES_TYPE_MAP_NAME[categoryId]}</h1> 
          <p className="text-xl">:{word}</p>
        </div>
      )}
      {categoryId && !word && (
        <h1 className="text-center text-6xl md:text-8xl text-white font-mono font-bold pt-10">
          {CATEGORIES_TYPE_MAP_NAME[categoryId]}
        </h1>
      )}
      {!categoryId && word && (
        <h1 className="text-center text-6xl md:text-8xl text-white font-mono font-bold pt-10">{word}</h1>
      )}
      <img 
        src={'https://steamuserimages-a.akamaihd.net/ugc/1635359997296706183/0B06CA0A2E1052B440A0EE8794986729BB58540F/'} 
        className={`absolute w-full h-full ${CATEGORIES_HUE_MAP[categoryId]} -z-10 object-cover bg-creator-normal`}
        alt="" />
    </div>

      <div className={`flex justify-center gap-10 pt-10 pb-20 ${CATEGORIES_HUE_MAP[categoryId]} bg-gradient-to-r from-[#33076f] via-[#df07fa] to-[#2a085e]`}>
        <div className={`${CATEGORIES_HUE_RESET[categoryId]}`}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-4 gap-x-6 gap-y-4 mb-20"
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
    </div>
  );
}
