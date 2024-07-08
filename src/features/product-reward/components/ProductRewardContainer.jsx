import { useState, useEffect, useCallback } from "react";
import Button from "../../../components/Button";
import TierCard from "../../tier/components/TierCard";
import { toast } from "react-toastify";
import { useStore } from "../../../store/useStore";
import { useParams } from "react-router-dom";
import Spinner from "../../../components/Spinner";
import { APPROVAL_STATUS_ID } from "../../../constants";

const initialTierData = {
  id: 0,
  tierName: "",
  tierPrice: 0,
  tierDetail: "",
  tierImage: "",
  tierRankId: 0,
};

const TIER_RANK_NUMBERS = [1, 2, 3];

export default function ProductRewardContainer({ isCreator }) {
  const { productId } = useParams();
  const deleteTier = useStore((state) => state.deleteTier);
  const filterProductByProductId = useStore((state) => state.filterProductByProductId);
  const filterData = filterProductByProductId(+productId);
  const [tierData, setTierData] = useState(filterData.productTiers);
  const productLoading = useStore((state) => state.productLoading);

  const [tierRankAvailable, setTierRankAvailable] = useState(
    TIER_RANK_NUMBERS.map((rank) => ({ tierRankId: rank, available: true }))
  );

  const isApproved = filterData.approvalStatusId === APPROVAL_STATUS_ID.SUCCESS;

  useEffect(() => {
    setTierRankAvailable((prev) =>
      prev.map((tier) => ({
        ...tier,
        available: !tierData.some((el) => el.tierRankId === tier.tierRankId),
      }))
    );
  }, [tierData]);

  const handleDataChange = useCallback((tierRankId, data) => {
    setTierData((prev) =>
      prev.map((el) => (el.tierRankId === tierRankId ? { ...el, ...data } : el))
    );
  }, []);

  const handleAddNewTier = useCallback(
    (tierRankId) => {
      const tier = tierRankAvailable.find((el) => el.tierRankId === tierRankId);
      if (tier?.available) {
        if (tierData.length < 3) {
          setTierData((prev) => [...prev, { ...initialTierData, tierRankId }]);
          setTierRankAvailable((prev) =>
            prev.map((el) =>
              el.tierRankId === tierRankId ? { ...el, available: false } : el
            )
          );
        } else {
          toast.error("Tier is limited to 3");
        }
      } else {
        toast.error(`Already have rank ${tierRankId}`);
      }
    },
    [tierData, tierRankAvailable]
  );

  const handleDeleteNewTier = useCallback(
    async (productId, tierRankId) => {
      const tier = tierData.find((el) => el.tierRankId === tierRankId);
      if (tier) {
        setTierData((prev) => prev.filter((el) => el.tierRankId !== tierRankId));
        setTierRankAvailable((prev) =>
          prev.map((el) =>
            el.tierRankId === tierRankId ? { ...el, available: true } : el
          )
        );
        if (tier.id) {
          await deleteTier(productId, tier.id);
          toast.success("Tier deleted successfully");
        }
      }
    },
    [tierData, deleteTier]
  );

  return (
    <>
      {productLoading && <Spinner transparent />}
      <div className="w-4/5 m-auto p-6">
        <div className="flex justify-between items-center">
          <div className="py-4 flex flex-col gap-2">
            <h2 id="header" className="font-bold text-4xl">
              Reward Selection
            </h2>
            <h3 id="subHeader" className="text-xl">
              Select an option below
            </h3>
          </div>
          {!isApproved && (
            <div className="flex gap-4">
              {TIER_RANK_NUMBERS.map((el) => (
                <Button
                  key={el}
                  width="20"
                  onClick={() => handleAddNewTier(el)}
                  disabled={!tierRankAvailable[el - 1].available}
                >
                  {`Tier ${el}`}
                </Button>
              ))}
            </div>
          )}
        </div>

        <div className="flex flex-col gap-4">
          {tierData
            .sort((tier1, tier2) => tier1.tierRankId - tier2.tierRankId)
            .map((el) => (
              <TierCard
                key={el.tierRankId}
                {...el}
                handleDeleteNewTier={() => handleDeleteNewTier(productId, el.tierRankId)}
                handleDataChange={handleDataChange}
                isApproved={isApproved}
                isCreator={isCreator}
              />
            ))}
        </div>
      </div>
    </>
  );
}
