import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/Button";
import { useStore } from "../../../store/useStore";
import { USER_ROLE } from "../../../constants";

const fadeInLeft = {
  initial: {
    opacity: 0,
    x: -25,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
  transition: {
    delay: 0,
    duration: 0.6,
    ease: "easeInOut",
  },
};

export default function HomeGetStart() {
  const { role } = useStore((state) => state.authUser);
  const isSupported = role === USER_ROLE.SUPPORTER
  const navigate = useNavigate();

  return (
    <div className="min-w-full">
      <main className="relative flex flex-col justify-center items-center h-[100vh] z-10 overflow-hidden">
        <motion.img
          src={
            "https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fill,w_695,g_auto,q_auto,dpr_2.0,f_auto,h_460/rdvnkdwgeg1xihqm941e"
          }
          className="absolute w-full h-full object-cover"
          alt=""
        />
        <motion.h1
          {...fadeInLeft}
          className="md:w-[80vw] text-center text-white text-5xl md:text-7xl font-bold drop-shadow-2xl"
        >
          <div className="leading-[90px]">
            {"Discover and support creative projects from passionate creators worldwide"}
          </div>
        </motion.h1>
        <div className="absolute bottom-[16vh] flex flex-row gap-8 py-4">
          <div className="flex gap-20 my-auto h-12">
            <Button
              onClick={() => navigate("/search")}
              bg="supporter-saturate"
              height="full"
            >
              SEE PROJECT
            </Button>
           { !isSupported  && <Button
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
