import { useState } from "react";

const deliveryBtnColorMap = {
  isDelivery: "bg-gray-300 w-3/4 px-2 py-2 rounded-xl",
  isNotDelivery:
    "bg-yellow-300 w-3/4 px-2 py-2 rounded-xl hover:bg-yellow-500 hover:scale-110 active:scale-100",
};

export default function DeliveryButton({ isSend }) {
  const [isClick, setIsClick] = useState(isSend);

  const handleClick = () => {
    setIsClick(true);
  };

  return (
    <button
      className={
        isClick ? deliveryBtnColorMap.isDelivery : deliveryBtnColorMap.isNotDelivery
      }
      onClick={handleClick}
    >
      {isClick ? "Delivered" : "Send Product"}
    </button>
  );
}
