import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/Button";
import { useStore } from "../../../store/useStore";
import StatsBannerHome from "../../../components/StatsBannerComponent/StatsBannerHome";
import { USER_ROLE } from "../../../constants";

export default function HomeStat() {
  const { role } = useStore((state) => state.authUser);
  const isSupported = role === USER_ROLE.SUPPORTER
  const isCreator = role === USER_ROLE.CREATOR
  const isAdmin = role === USER_ROLE.ADMIN

  const navigate = useNavigate();
  const { projectSupport, towardIdea, contribution } = useStore(
    (state) => state.stats.data
  );

  const dataStatsBar = [
    { id: 1, amount: projectSupport, title: "active projects" },
    { id: 2, amount: towardIdea, title: "towards ideas", currency: "THB" },
    { id: 3, amount: contribution, title: "contributions" },
  ];

  return (
    <div className="min-w-full">
      <motion.img
        src={
          "https://i.pinimg.com/originals/e7/50/38/e75038ae16be9d330cb1f3563833647e.gif"
        }
        className="absolute w-full h-full object-cover -hue-rotate-15"
        alt="home-stat"
      />
      <main className="relative flex flex-col justify-center items-center h-[100vh] z-10 overflow-hidden">
        <motion.h1 className=" text-center text-white text-5xl md:text-6xl font-extrabold drop-shadow-2xl">
          <div className="leading-[70px]">{"Thailand’s No.1 Crowdfunding Platform"}</div>
        </motion.h1>
        <div className="py-4">
          <StatsBannerHome data={dataStatsBar} />
        </div>
        <div className="flex flex-row gap-8 ">
          <div className="flex gap-20 my-auto h-12">
            <Button
              onClick={() => navigate("/search")}
              bg="supporter-saturate"
              height="full"
            >
              SEE PROJECT
            </Button>
           {!isSupported && !isCreator && !isAdmin && <Button
              onClick={() => navigate("/supporter-register")}
              bg="supporter-saturate"
              border="supporter-saturate"
              height="full"
            >
              GET STARTED
            </Button>}
          </div>
        </div>
      </main>
    </div>
  );
}
