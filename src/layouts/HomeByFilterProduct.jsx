import dayjs from "dayjs";
import ImageCard from "../components/ImageCard";
import { useStore } from "../store/useStore";
import { motion } from "framer-motion";

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

    const today = useStore((state) => state.product.today);
    const approvalProduct = useStore((state) => state.approvalProduct);

    const word = useStore((state) => state.word)
    const keyFilter = ["productName", "creatorName"]
    const productFilter = approvalProduct.filter((item) => {
        return keyFilter.some((filter) => {
            return item[filter].toLowerCase().indexOf(word.toLowerCase()) > -1
        })
    })
    return (
        <div>
            <div className="flex justify-center gap-10 mt-10 mb-20">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                    className="grid grid-cols-3 gap-4 mb-20"
                >
                    {productFilter.map((el) => (
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
    )
}
