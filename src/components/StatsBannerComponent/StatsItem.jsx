import { animate } from "framer-motion";
import { useState, useEffect } from "react";

export default function StatsItem({ amount, title, isLast, currency }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const controls = animate(Math.floor(amount * 0.99), amount, {
      type: "inertia",
      velocity: amount - Math.floor(amount * 0.99),
      power: 1,
      timeConstant: 500,
      bounceStiffness: 500,
      bounceDamping: 60,
      restDelta: 0.5,
      onUpdate(value) {
        setValue(Math.round(value));
      },
    });
    return () => controls.stop();
  }, [amount]);

  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className="text-2xl md:w-auto md:text-3xl text-radomtoon-bright whitespace-nowrap">
          {`${currency ? currency : ""} ${value.toLocaleString()}`}
        </h1>
        <p className="text-sm md:text-xl text-gray-400 whitespace-nowrap">{title}</p>
      </div>
      {!isLast && <hr className="h-[80%] mx-3 border" />}
    </>
  );
}
