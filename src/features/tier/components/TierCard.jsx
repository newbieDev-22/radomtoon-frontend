import Button from "../../../components/Button";

export default function TierCard({
  tierNumber,
  productName,
  detail,
  dateEstimated,
  amountSupporters,
  productImage,
  onClick,
}) {
  return (
    <div
      role="button"
      onClick={onClick}
      className="shadow-lg border-gray-300 border py-8 px-12 hover:border-gray-500 
    transition-all hover:scale-[101%] active:scale-100 rounded-xl"
    >
      <div className="grid grid-cols-7">
        <div className="flex flex-col gap-5 max-w-3xl col-span-4 justify-center">
          <h2 className="font-bold text-3xl">{`Tier ${tierNumber}`}</h2>
          <h3 className="text-2xl font-semibold  overflow-hidden">{productName}</h3>
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-semibold">Detail</h3>
            <p className="">{detail}`</p>
          </div>
          <div className="max-w-2xl">
            <p className="text-xl font-semibold">Estimated Delivery</p>
            <h3 className="">{dateEstimated}</h3>
          </div>

          <div className="bg-gray-300 w-40 rounded py-2 text-center font-semibold">{`${amountSupporters} Supporters`}</div>
          <Button isNotActive={true}>Pledge 20 &#x0E3F;</Button>
        </div>
        <div className="flex items-center justify-center col-span-3 p-4">
          <img
            src={productImage}
            alt="product's picture"
            className="aspect-auto w-full rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
