import { useState } from "react";
import Button from "../../../components/Button";
import { USER_ROLE } from "../../../constants";
import TierCard from "../../tier/components/TierCard";
import { motion } from "framer-motion";
import { animate } from "framer-motion";
import { easeIn } from "framer-motion";
import { stagger } from "framer-motion";

const data = [
  {
    mockTierNumber: "1",
    mockProductName: "Starter Kit",
    mockDetail: `📕By Popular Demand: The Book tier! A 350+ page tome packed with everything you need to add creature-collecting flair to your table. Compatible with D&D5e.
INCLUDES,`,
    mockDateEstimated: "Dec 2024",
    mockAmountSupporters: "456",
    mockImageProduct:
      "https://i.kickstarter.com/assets/045/220/970/bcc34c2ec9f7b561146385ddb7fc66b8_original.jpg?origin=ugc&q=80&width=600&sig=%2BkIHOIquAZUDBx9Vuu2zY0aBpGWqvDW2ZJzSabI6D5g%3D",
    mockPrice: 20,
  },
  {
    mockTierNumber: "1",
    mockProductName: "Starter Kit",
    mockDetail: `📕By Popular Demand: The Book tier! A 350+ page tome packed with everything you need to add creature-collecting flair to your table. Compatible with D&D5e.
INCLUDES,`,
    mockDateEstimated: "Dec 2024",
    mockAmountSupporters: "456",
    mockImageProduct:
      "https://i.kickstarter.com/assets/045/220/970/bcc34c2ec9f7b561146385ddb7fc66b8_original.jpg?origin=ugc&q=80&width=600&sig=%2BkIHOIquAZUDBx9Vuu2zY0aBpGWqvDW2ZJzSabI6D5g%3D",
    mockPrice: 20,
  },
];

const tierContainer = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const showTier = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 },
};

export default function ProductRewardContainer({ currentUser }) {
  const [isEdit, setIsEdit] = useState(false);
  currentUser = USER_ROLE.CREATOR;
  return (
    <>
      <div className=" w-4/5 m-auto p-6">
        <div className="py-4 flex flex-col gap-2">
          <h2 id="header" className=" font-bold text-4xl">
            Reward Selection
          </h2>
          <h3 id="subHeader" className="text-xl">
            Select an option below
          </h3>
        </div>
        <div className="flex flex-col gap-4">
          <Button width="60" onClick={() => setIsEdit(!isEdit)}>
            Switch isEdit State for Dev
          </Button>
          {currentUser === USER_ROLE.SUPPORTER ||
          currentUser === USER_ROLE.CREATOR ? (
            <motion.div
              variants={tierContainer}
              initial="hidden"
              animate="show"
            >
              {data.map((el) => (
                <motion.div variants={showTier}>
                  <TierCard el={el} isEdit={isEdit} currentUser={currentUser} />
                </motion.div>
              ))}
            </motion.div>
          ) : null}
        </div>
      </div>
    </>
  );
}
