import { useEffect } from "react";
import { createPortal } from "react-dom";
import { CloseIcon } from "../icons";
import Backdrop from "./Backdrop";
import { motion } from "framer-motion";

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

export default function Modal({ width = 30, title, children, open, onClose }) {
  useEffect(() => {
    const handleEscPress = (e) => {
      if (e.keyCode === 27) {
        onClose?.();
      }
    };
    document.body.addEventListener("keydown", handleEscPress);
    return () => document.body.removeEventListener("keydown", handleEscPress);
  }, [onClose]);

  return (
    <>
      {open
        ? createPortal(
            <Backdrop onClick={onClose}>
              <div className=" fixed inset-0 bg-[#000000]/45 z-30"></div>
              <div className="fixed inset-0 z-40">
                <div className="flex justify-center items-center min-h-screen">
                  <motion.div
                    onClick={(e) => e.stopPropagation()}
                    variants={dropIn}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="bg-white rounded-lg shadow-lg"
                    style={{ width: `${width}rem` }}
                  >
                    <div className="relative mb-6">
                      <div className="flex justify-center items-center pt-8 pb-2 relative rounded-t-lg">
                        <h5 className="text-black text-4xl font-bold">{title}</h5>
                      </div>
                      <div className="relative ">
                        <button
                          className="absolute bottom-0 right-6 transition-all hover:scale-110"
                          onClick={onClose}
                        >
                          <CloseIcon color={"black"} />
                        </button>
                      </div>
                    </div>

                    <div className="px-12 pb-6 flex justify-center">{children}</div>
                  </motion.div>
                </div>
              </div>
            </Backdrop>,
            document.getElementById("modal")
          )
        : null}
    </>
  );
}
