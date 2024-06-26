import TierCard from "../../tier/components/TierCard";


const mockTierNumber = "1";
const mockProductName = "test name name name";
const mockDetail =
  "ascccccccccccccccccccccccccccccccc cccccccccccccccccccccccccccccccccccccccccccccccc ccccccccccccccccccccccccccc cccccccccccccsssssssssssssssssssssssss";
const mockDateEstimated = "Dec 2024";
const mockAmountSupporters = "456";
const mockImageProduct =
  "https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg";

export default function ProductRewardContainer() {
  return (
    <>
      <div className=" w-7/12 m-auto p-6">
        <h2 id="header" className=" font-bold text-3xl">
          Select your reward
        </h2>
        <h3 id="subHeader" className=" text-xl mb-5">
          Select an option below
        </h3>
        <div
          className="flex flex-col gap-4
        "
        >
          <TierCard
            tierNumber={mockTierNumber}
            productName={mockProductName}
            detail={mockDetail}
            dateEstimated={mockDateEstimated}
            amountSupporters={mockAmountSupporters}
            productImage={mockImageProduct}
          />
          <TierCard
            tierNumber={mockTierNumber}
            productName={mockProductName}
            detail={mockDetail}
            dateEstimated={mockDateEstimated}
            amountSupporters={mockAmountSupporters}
            productImage={mockImageProduct}
          />{" "}
          <TierCard
            tierNumber={mockTierNumber}
            productName={mockProductName}
            detail={mockDetail}
            dateEstimated={mockDateEstimated}
            amountSupporters={mockAmountSupporters}
            productImage={mockImageProduct}
          />
        </div>
      </div>
    </>
  );
}
