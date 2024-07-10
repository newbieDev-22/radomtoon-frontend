import Button from "../../../components/Button";

export default function TierShowContent({
  input,
  setIsEdit,
  isCreator = false,
  isApproved = false,
  index
}) {
  const { tierName, tierDetail, price, tierImage } = input;

  return (
    <div className="flex gap-12 shadow-lg border-gray-300 border py-8 px-10 hover:border-gray-500 transition-all rounded-xl">
      <div className="flex w-96 justify-center items-center ">
      <div className="flex flex-col  items-center justify-center p-4">
        <img src={tierImage} alt="Tier" className="rounded-xl w-full h-full object-cover " />
        <div className="mt-3 w-full">
          <p className="font-semibold text-gray-400 text-sm">Tier {index} :</p>
          <h1 className="font-semibold ">{tierName}</h1>
        </div>
      </div>
      </div>
      <div className="flex flex-col justify-between py-4 gap-8 w-3/4">
        
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold text-gray-400 text-sm">Detail</h3>
          <p className="text-justify">{tierDetail}</p>
        </div>
        <div className="grid grid-cols-2 gap-4 py-2">
          {!isApproved && isCreator && (
            <Button width="full" onClick={() => setIsEdit(true)}>
              Edit
            </Button>
          )}
          <div
            className={`w-full h-10 flex justify-center items-center font-bold px-4 rounded-md text-center ${
              !isApproved && isCreator ? "" : "col-span-2"
            } bg-supporter-saturate hover:scale-[103%] transition cursor-pointer`}
          >
            Pledge {price?.toLocaleString("en-US")} &#x0E3F;
          </div>
        </div>
      </div>
    </div>
  );
}
