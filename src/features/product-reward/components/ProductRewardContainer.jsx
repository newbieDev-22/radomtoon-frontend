import TierCard from "../../tier/components/TierCard";

const mockTierNumber = "1";
const mockProductName = "Starter Kit";
const mockDetail = `📕By Popular Demand: The Book tier! A 350+ page tome packed with everything you need to add creature-collecting flair to your table. Compatible with D&D5e.
INCLUDES
Bria's Mythical Menagerie Hardcover
Less`;
const mockDateEstimated = "Dec 2024";
const mockAmountSupporters = "456";
const mockImageProduct =
  "https://i.kickstarter.com/assets/045/220/970/bcc34c2ec9f7b561146385ddb7fc66b8_original.jpg?origin=ugc&q=80&width=600&sig=%2BkIHOIquAZUDBx9Vuu2zY0aBpGWqvDW2ZJzSabI6D5g%3D";

export default function ProductRewardContainer() {
  return (
    <div className=" w-4/5 m-auto p-6">
      <div className="py-4 flex flex-col gap-2">
        <h2 id="header" className=" font-bold text-4xl">
          Reward Selection
        </h2>
        <h3 id="subHeader" className="text-xl">
          Select an option below
        </h3>
      </div>
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
        />
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
  );
}
