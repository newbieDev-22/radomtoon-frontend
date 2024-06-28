import { useEffect } from "react";
import { createPortal } from "react-dom";
import { CloseIcon } from "../icons";

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
            <>
              <div className="fixed inset-0 bg-[#000000]/45 z-30"></div>
              <div className="fixed inset-0 z-40" onClick={onClose}>
                <div className="flex justify-center items-center min-h-screen">
                  <div
                    className="bg-[#030303] rounded-lg shadow-lg"
                    style={{ width: `${width}rem` }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="relative">
                      <div className="flex justify-center items-center pt-8 pb-2 relative rounded-t-lg">
                        <h5 className="text-white text-4xl font-bold ">{title}</h5>
                      </div>
                      <div className="relative ">
                        <button
                          className="absolute bottom-0 right-6 transition-all hover:scale-110"
                          onClick={onClose}
                        >
                          <CloseIcon />
                        </button>
                      </div>
                    </div>

                    <div className="px-12 pb-6">{children}</div>
                  </div>
                </div>
              </div>
            </>,
            document.getElementById("modal")
          )
        : null}
    </>
  );
}
