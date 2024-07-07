import dayjs from "dayjs";
import Button from "../../../components/Button";
import { PRODUCT_STATUS } from "../../../constants";
import { toast } from "react-toastify";
import { useStore } from "../../../store/useStore";

const colorMapping = {
  PENDING: "bg-yellow-500",
  FAILED: "bg-orange-500",
  SUCCESS: "bg-green-500",
  CANCELED: "bg-red-500",
  "NOT AVAILABLE": "bg-gray-500",
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
    <div className="flex gap-4 h-40 border justify-evenly items-center border-gray-300 rounded-lg px-8 py-4 my-4">
      <div className="h-full flex justify-center items-center">
        <img src={projectImage} alt="product" className="h-full aspect-auto rounded-xl" />
      </div>
      <div className="flex flex-col justify-evenly px-2">
        <div className="flex gap-2 items-center py-2">
          <div className="font-bold text-xl">{projectName}</div>
          <div className="bg-supporter-normal rounded-lg w-fit p-2 font-bold">
            {projectCategory}
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div>
            <div>{tierName}</div>
            <div>Support Date : {dayjs(date).format("DD/MM/YYYY")}</div>
          </div>
          <div className="text-2xl font-bold">{price} THB</div>
        </div>
      </div>
      <div className="flex flex-col justify-between gap-2">
        <div className="flex gap-2 items-center">
          <span className="font-bold">Project Status :</span>
          <span span className={`${colorMapping[fundingStatus]} p-2 rounded-lg`}>
            {fundingStatus}
          </span>
        </div>
        <div className="flex gap-2 items-center">
          <span className="font-bold">Delivery Status :</span>
          <span className={`${colorMapping[deliveryStatus]} p-2 rounded-lg`}>
            {deliveryStatus}
          </span>
        </div>
        {fundingStatus === PRODUCT_STATUS.PENDING && (
          <Button width={"full"} onClick={() => handleCancelSupport(productId)}>
            Cancel support
          </Button>
        )}
      </div>
    </div>
  );
}
