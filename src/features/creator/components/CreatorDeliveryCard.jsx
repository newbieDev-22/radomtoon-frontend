import { useParams } from "react-router-dom";
import Button from "../../../components/Button";
import { DELIVERY_STATUS, PRODUCT_STATUS_ID } from "../../../constants";
import { useStore } from "../../../store/useStore";
import Spinner from "../../../components/Spinner";
import { toast } from "react-toastify";

export default function CreatorDeliveryCard({
  tierName,
  deliveryStatus,
  productStatusId,
  supporterFirstName,
  supporterLastName,
  supporterId,
}) {
const {productId}=useParams()
  const updateDelivery = useStore((state) => state.updateDelivery);
  const deliveryLoading = useStore((state) => state.delivery.loading);


  const handleDelivery = async ()=>{
    try {
      updateDelivery(+productId,supporterId)
      toast.success("Sent successful")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>   
    {deliveryLoading && <Spinner transparent/>}
    <div className="border-b-2 flex justify-between items-center p-2 font-bold">
    <span>
      {supporterFirstName} {supporterLastName}
    </span>
    <span>{tierName}</span>
    <div>
      <Button
        disabled={
          deliveryStatus !== DELIVERY_STATUS.PENDING ||
          productStatusId !== PRODUCT_STATUS_ID.SUCCESS
        }
        width={"full"}
        bg="green"
        onClick={handleDelivery}
      >
        Delivery
      </Button>
    </div>
  </div></>

  );
}
