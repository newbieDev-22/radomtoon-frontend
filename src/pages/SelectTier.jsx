import { useState } from "react";
import TierContainer from "../features/tier/components/TierContainer";

export default function SelectTier() {

  const [productName, setProductName] = useState("Product name")

  return (
    <>
      <h1 className="text-6xl text-center font-bold mt-10 mb-5">{productName}</h1>
      <TierContainer />
    </>
  )
}
