import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/Button";

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

export default function HomeProduct() {
  const navigate = useNavigate();

  return (
    <div className="min-w-full">
      <main className="relative flex flex-col justify-center items-center h-[100vh] z-10 overflow-hidden">
        <div className="absolute w-full h-full">
          <div className="w-full h-full flex">
            <div className="w-full h-full bg-blend-darken bg-black">
              <img
                src="https://res.cloudinary.com/dpl1p3prr/image/upload/v1720450867/172045086597593311.avif"
                className="w-full h-full object-cover blur-3xl"
              />
            </div>
          </div>
        </div>
        {/* <motion.img
          src={
            "https://res.cloudinary.com/dpl1p3prr/image/upload/v1720280188/172028018736243317.avif"
          }
          className="absolute w-full h-full object-cover"
          alt=""
        /> */}
      </main>
    </div>
  );
}
