import { useNavigate } from "react-router-dom";
import ImgCard from "../components/ImageCard";
import { mockDataStatsBar } from "../constants";
import { useStore } from "../store/useStore";
import dayjs from "dayjs";
import { motion } from "framer-motion";

import StatsBanner from "../components/StatsBannerComponent/StatsBanner";
import { animate } from "framer-motion";

const mockProductPath = "/campaign/1";

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

export default function HomePage() {
  const navigate = useNavigate();
  const product = useStore((state) => state.product.data);
  const today = useStore((state) => state.product.today);

  return (
    <div>
      <StatsBanner data={mockDataStatsBar} />
      <div className="flex justify-center gap-10 mt-10 mb-20">
        {product.slice(0, 1).map((el) => (
          <motion.div key={el.id} {...mainCardVariants}>
            <ImgCard
              widthSize="large"
              heightSize="large"
              progressSize="large"
              imageSize="large"
              imageSrc={el.productImage}
              productName={el.productName}
              creatorName={el.creatorName}
              daysLeft={
                dayjs(el.deadline).diff(dayjs(today), "day") >= 0
                  ? dayjs(el.deadline).diff(dayjs(today), "day")
                  : 0
              }
              content={el.summaryDetail}
              avatarImage={el.creatorProfileImage}
              vid={el.productVideo}
              mainCard={true}
              onClick={() => navigate(mockProductPath)}
            />
          </motion.div>
        ))}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-2 gap-4 mb-20"
        >
          {product.slice(1, 5).map((el) => (
            <motion.div key={el.id} variants={itemVariants}>
              <ImgCard
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
                avatarImage={el.creatorProfileImage}
                vid={el.productVideo}
                onClick={() => navigate(mockProductPath)}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
