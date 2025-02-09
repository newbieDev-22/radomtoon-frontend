import { useState, useEffect, useCallback } from "react";
import { CloseIcon } from "../../../icons";
import TierShowContent from "./TierShowContent";
import TierEditContent from "./TierEditContent";
import Modal from "../../../components/Modal";
import ConfirmModal from "../../../components/ConfirmModal";
import { useNavigate } from "react-router-dom";
import { APPROVAL_STATUS_ID, USER_ROLE } from "../../../constants";
import { useStore } from "../../../store/useStore";

export default function TierCard({
  id,
  tierName,
  price,
  tierDetail,
  tierImage,
  tierRankId,
  isApproved,
  isCreator,
  productId,
  handleDeleteNewTier,
  handleDataChange,
  index,
}) {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [input, setInput] = useState({
    id,
    tierName,
    price,
    tierDetail,
    tierImage,
    tierRankId,
  });
  const role = useStore((state) => state.authUser.role);

  const histories = useStore((state) => state.supporter.history);
  const filterProductByProductId = useStore((state) => state.filterProductByProductId);
  const filterHistory = histories?.filter((el) => el.productId === +productId);
  const isSupported = role === USER_ROLE.SUPPORTER && filterHistory.length > 0;
  const filterData = filterProductByProductId(+productId);

  const isFinish =
    filterData?.productStatusId === APPROVAL_STATUS_ID.SUCCESS ||
    filterData?.productStatusId === APPROVAL_STATUS_ID.FAILED;

  const [inputError, setInputError] = useState({
    tierName: "",
    price: "",
    tierDetail: "",
    tierImage: "",
    tierRankId: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (input.tierName === "") {
      setIsEdit(true);
    }
  }, [input.tierName]);

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleValueChange = useCallback((key, value) => {
    setInput((prev) => ({ ...prev, [key]: value }));
  }, []);

  const handleGoToPayment = () => {
    if (role === USER_ROLE.SUPPORTER && !isSupported && !isFinish) {
      navigate(`/campaign/${productId}/tier/${id}/payment`);
    } else if (role === USER_ROLE.GUEST) {
      navigate("/supporter-register");
    }
  };

  return (
    <>
      <div
        className="relative hover:scale-[102%] active:scale-100 transition-all w-full"
        onClick={handleGoToPayment}
      >
        {role === USER_ROLE.SUPPORTER ||
        role === USER_ROLE.GUEST ||
        !isCreator ||
        isApproved ? null : (
          <button
            className=" absolute top-2 right-2 hover:scale-[110%] active:scale-100"
            onClick={() => setIsDeleteModalOpen(true)}
          >
            <CloseIcon color="gray" />
          </button>
        )}

        {isEdit && !isApproved && isCreator ? (
          <TierEditContent
            input={{ ...input }}
            inputError={inputError}
            setInputError={setInputError}
            handleInputChange={handleInputChange}
            isEdit={isEdit}
            setIsEditing={setIsEdit}
            handleDataChange={handleDataChange}
            handleValueChange={handleValueChange}
          />
        ) : (
          <TierShowContent
            isEdit={isEdit}
            input={{ ...input }}
            setIsEdit={setIsEdit}
            isApproved={isApproved}
            isCreator={isCreator}
            index={index}
          />
        )}
      </div>
      <Modal
        open={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        title={"Confirm Delete Tier"}
        width={40}
      >
        <ConfirmModal
          subTitle={"Are you sure you want to delete this tier?"}
          onCancel={() => setIsDeleteModalOpen(false)}
          onConfirm={handleDeleteNewTier}
        />
      </Modal>
    </>
  );
}
