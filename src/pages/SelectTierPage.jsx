import TierContainer from "../features/tier/components/TierContainer";

export default function SelectTierPage() {
  const productName = "Product name";

  return (
    <div>
      <h1 className="text-6xl text-center font-bold mt-10 mb-5">{productName}</h1>
      <TierContainer />
    </div>
  );
}
