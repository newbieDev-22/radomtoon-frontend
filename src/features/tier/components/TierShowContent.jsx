import Button from "../../../components/Button";

export default function TierShowContent({
  input,
  setIsEdit,
  isCreator = false,
  isApproved = false,
}) {
  const { tierName, tierDetail, price, tierImage } = input;

  return (
    <div className="flex gap-12 shadow-lg border-gray-300 border py-8 px-12 hover:border-gray-500 transition-all rounded-xl">
      <div className="flex flex-col justify-center gap-8 w-1/2">
        <h1 className="font-bold text-3xl">{tierName}</h1>
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold text-xl">Detail</h3>
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
            } bg-supporter-saturate`}
          >
            Pledge {price?.toLocaleString("en-US")} &#x0E3F;
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center w-1/2 p-4">
        <img src={tierImage} alt="Tier" className="rounded-xl object-cover" />
      </div>
    </div>
  );
}
