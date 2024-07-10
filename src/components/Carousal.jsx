import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

export default function Carousal({
  children,
  autoSlide = false,
  autoSlideInterval = 3000,
}) {
  const [current, setCurrent] = useState(0);
  const prev = () =>
    setCurrent((current) => (current === 0 ? children?.length - 1 : current - 1));
  const next = () =>
    setCurrent((current) => (current === children?.length - 1 ? 0 : current + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  });

  return (
    <div className="overflow-hidden relative ">
      <div
        className="flex transition-transform ease-in-out duration-500 z-50"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {children}
      </div>

      <div className="absolute inset-y-0 left-4 flex items-center justify-between z-50">
        <button
          className="p-1 rounded-full shadow bg-white/40
         text-gray-800 hover:bg-white z-10"
          onClick={prev}
        >
          <ChevronLeft size={30} />
        </button>
      </div>

      <div className="absolute inset-y-0 right-4 flex items-center justify-between z-20">
        <button
          className="p-1 rounded-full shadow bg-white/40
         text-gray-800 hover:bg-white z-10"
          onClick={next}
        >
          <ChevronRight size={30} />
        </button>
      </div>

      <div className="absolute bottom-2 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {children?.map((el, index) => (
            <div
              key={index}
              className={`transition-all w-3 h-3 rounded-full bg-white
                ${current === index ? "p-2" : "p-1"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
