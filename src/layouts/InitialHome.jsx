import { useStore } from "../store/useStore";
import dayjs from "dayjs";
import { motion } from "framer-motion";
import ImageCard from "../components/ImageCard";

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

const mainCardVariants = {
  initial: { opacity: 0, y: 10 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
    },
  },
};

export default function InitialHome() {
  const today = useStore((state) => state.product.today);
  const fiveProduct = useStore((state) => state.fiveProduct);
  console.log(fiveProduct);
  return (
    <div>
      <div className="flex justify-center gap-10 mt-10 mb-20">
        {fiveProduct?.slice(0, 1).map((el) => (
          <motion.div key={el.id} {...mainCardVariants}>
            <ImageCard
              widthSize="large"
              heightSize="large"
              progressSize="large"
              imageSize="large"
              imageSrc={el.productImage}
              productName={el.productName}
              creatorName={el.creatorName}
              goal={el.goal}
              totalFund={el.totalFund}
              daysLeft={
                dayjs(el.deadline).diff(dayjs(today), "day") >= 0
                  ? dayjs(el.deadline).diff(dayjs(today), "day")
                  : 0
              }
              content={el.summaryDetail}
              avatarImage={el.profileImage}
              vid={el.productVideo}
              mainCard={true}
              productId={el.id}
              creatorId={el.creatorId}
              progressHeight="large"
            />
          </motion.div>
        ))}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-2 gap-4 mb-20"
        >
          {fiveProduct?.slice(1, 5).map((el) => (
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
