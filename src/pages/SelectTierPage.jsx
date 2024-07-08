import { useParams } from "react-router-dom";
import TierContainer from "../features/tier/components/TierContainer";
import { useStore } from "../store/useStore";
import { APPROVAL_STATUS_ID } from "../constants";

export default function SelectTierPage() {
  const { productId } = useParams();
  const filterProductByProductId = useStore((state) => state.filterProductByProductId);
  const filterData = filterProductByProductId(+productId);
  const isApproved = filterData.approvalStatusId === APPROVAL_STATUS_ID.SUCCESS;

  return (
    <div>
      <h1 className="text-4xl text-center font-bold py-8 px-4 w-4/5 mx-auto">
        {filterData.productName}
      </h1>
      <TierContainer data={filterData.productTiers} isApproved={isApproved} />
    </div>
  );
}
