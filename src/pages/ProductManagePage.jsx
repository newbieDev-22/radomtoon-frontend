import { useState } from "react";
import { STATUS_PRODUCT } from "../constants";

export default function ProductManagePage() {
  const [projectName, setProjectName] = useState("Product name 1");
  const [status, setStatus] = useState(STATUS_PRODUCT.PENDING);

  return (
    <div className="w-[100vw] m-auto flex flex-col justify-center truncate">
      <h1 className="text-center font-bold text-4xl my-3">{projectName}</h1>
      <h2 className="text-center font-semibold text-3xl">{`Status : ${status}`}</h2>
    </div>
  );
}
