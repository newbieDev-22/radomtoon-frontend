import { animate } from "framer-motion";
import { useState, useEffect } from "react";

export default function StatsItemHome({ amount, title, currency }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const controls = animate(Math.floor(amount * 0.75), amount, {
      type: "inertia",
      velocity: amount - Math.floor(amount * 0.75),
      power: 1,
      timeConstant: 500,
      bounceStiffness: 600,
      bounceDamping: 80,
      restDelta: 0.5,
      onUpdate(value) {
        setValue(Math.round(value));
      },
    });
    return () => controls.stop();
  }, [amount]);

  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="text-5xl font-semibold md:w-auto text-white whitespace-nowrap">
        {`${currency || ""} ${value.toLocaleString()}`}
      </h1>
      <p className="text-2xl text-white whitespace-nowrap">{title}</p>
    </div>
  );
}
