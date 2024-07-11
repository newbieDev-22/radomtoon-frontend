import dayjs from "dayjs";
import Button from "../../../components/Button";
import { PRODUCT_STATUS } from "../../../constants";
import { toast } from "react-toastify";
import { useStore } from "../../../store/useStore";

const colorMapping = {
  PENDING: "bg-green-500 text-white",
  FAILED: "bg-orange-500 text-white",
  SUCCESS: "bg-green-500 text-white",
  CANCELED: "bg-red-600 text-white",
  "NOT AVAILABLE": "bg-gray-300",
  DEVERIED: "bg-green-500 text-white",
};

export default function SupporterHistoryCard({
  productId,
  projectName,
  projectImage,
  projectCategory,
  tierName,
  price,
  date,
  fundingStatus,
  deliveryStatus,
}) {
  const cancelSupportProduct = useStore((state) => state.cancelSupportProduct);
  const handleCancelSupport = async (productId) => {
    try {
      await cancelSupportProduct(+productId);
      toast.success("Product canceled successfully");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex gap-4 h-40 justify-between border items-center border-gray-300 rounded-lg px-8 py-4 my-4">
      {/* left */}
      <div className="h-full flex items-center min-w-[16rem]">
        <img src={projectImage} alt="product" className="h-full aspect-auto rounded-xl" />
      </div>
      {/* middle */}
      <div className="flex px-2 w-full justify-between ">
        <div>
          <div className="font-bold text-xl">{projectName}</div>
          <div>
            <div>{tierName}</div>
            <div>Support Date : {dayjs(date).format("DD/MM/YYYY")}</div>
          </div>
        </div>

        <div>
          <div className="bg-supporter-normal rounded-lg w-auto text-center p-2 font-bold text-sm ">
            {projectCategory}
          </div>
          <div className="text-xl font-bold w-32 mt-2">
            {price?.toLocaleString("en-US")} THB
          </div>
        </div>
      </div>

      {/* right */}
      <div className="flex flex-col justify-between gap-2 min-w-[18rem]">
        <div className="flex items-center">
          <span className="font-bold w-full">Project Status :</span>
          <span
            className={`${colorMapping[fundingStatus]} p-2 w-full text-center rounded-lg`}
          >
            {fundingStatus}
          </span>
        </div>
        <div className="flex items-center">
          <span className="font-bold w-full">Delivery Status :</span>
          <span
            className={`${colorMapping[deliveryStatus]} p-2 w-full text-center rounded-lg`}
          >
            {deliveryStatus}
          </span>
        </div>
        {fundingStatus === PRODUCT_STATUS.PENDING && (
          <Button
            bg="creator-saturate"
            color="white"
            width={"full"}
            onClick={() => handleCancelSupport(productId)}
          >
            Cancel support
          </Button>
        )}
      </div>
    </div>
  );
}
