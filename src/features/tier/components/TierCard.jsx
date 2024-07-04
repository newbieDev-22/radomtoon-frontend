import { useState, useEffect, useCallback } from "react";
import { CloseIcon } from "../../../icons";
import TierShowContent from "./TierShowContent";
import TierEditContent from "./TierEditContent";
import Modal from "../../../components/Modal";
import ConfirmModal from "../../../components/ConfirmModal";

export default function TierCard({
  id,
  tierName,
  price,
  tierDetail,
  tierImage,
  tierRankId,
  isApproved,
  isCreator,
  handleDeleteNewTier,
  handleDataChange,
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

  const [inputError, setInputError] = useState({
    tierName: "",
    price: "",
    tierDetail: "",
    tierImage: "",
    tierRankId: "",
  });

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

  return (
    <>
      <div className="relative hover:scale-[102%] active:scale-100 transition-all">
        <button
          className="absolute top-2 right-2 hover:scale-[110%] active:scale-100"
          onClick={() => setIsDeleteModalOpen(true)}
        >
          <CloseIcon color="gray" />
        </button>
        {isEdit && !isApproved && isCreator ? (
          <TierEditContent
            input={input}
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
            input={input}
            setIsEdit={setIsEdit}
            isApproved={isApproved}
            isCreator={isCreator}
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
