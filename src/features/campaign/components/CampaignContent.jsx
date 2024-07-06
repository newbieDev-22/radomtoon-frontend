import dayjs from "dayjs";
import ReactPlayer from "react-player/youtube";
import { APPROVAL_STATUS_ID, MIN_DEADLINE_DAYS, USER_ROLE } from "../../../constants";
import Button from "../../../components/Button";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { useStore } from "../../../store/useStore";
import CampaignShowContent from "./CampaignShowContent";
import CampaignEditContent from "./CampaignEditContent";
import { toast } from "react-toastify";
import validateProduct from "../../../validators/validate-create-project";
import Spinner from "../../../components/Spinner";
import Modal from "../../../components/Modal";
import ConfirmModal from "../../../components/ConfirmModal";

const initialInputError = {
  productName: "",
  goal: "",
  deadline: "",
  categoryId: "",
  productImage: "",
  productVideo: "",
  summaryDetail: "",
};

export default function CampaignContent() {
  const role = useStore((state) => state.authUser.role);
  const authUser = useStore((state) => state.authUser.user);
  const today = useStore((state) => state.product.today);
  const filterProductByProductId = useStore((state) => state.filterProductByProductId);
  const productLoading = useStore((state) => state.productLoading);
  const updateProduct = useStore((state) => state.updateProduct);
  const deleteProduct = useStore((state) => state.deleteProduct);
  const sendProductToApproval = useStore((state) => state.sendProductToApproval);

  const { productId } = useParams();
  const filterData = filterProductByProductId(+productId);

  const isCreator = role === USER_ROLE.CREATOR && authUser.id === filterData?.creatorId;
  const isApproved = filterData?.approvalStatusId === APPROVAL_STATUS_ID.SUCCESS;
  const isPending = filterData?.approvalStatusId === APPROVAL_STATUS_ID.PENDING;
  const isFinish =
    filterData?.productStatusId === APPROVAL_STATUS_ID.SUCCESS ||
    filterData?.productStatusId === APPROVAL_STATUS_ID.FAILED;

  const initialInput = {
    productName: filterData?.productName,
    goal: filterData?.goal,
    deadline: dayjs(filterData?.deadline).format("YYYY-MM-DD"),
    categoryId: filterData?.categoryId,
    productImage: filterData?.productImage,
    productVideo: filterData?.productVideo,
    summaryDetail: filterData?.summaryDetail,
    supportCount: filterData?.supporterCount,
    totalFund: filterData?.totalFund,
  };

  const [input, setInput] = useState(initialInput);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [inputError, setInputError] = useState(initialInputError);
  const [isEdit, setIsEdit] = useState(false);
  const fileEl = useRef();
  const [file, setFile] = useState(null);

  const navigate = useNavigate();

  const todayFormat = dayjs(today);
  const deadlineFormat = dayjs(new Date(input.deadline));
  const remainingDay = deadlineFormat.diff(todayFormat, "day");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleClickSave = async (e) => {
    try {
      e.preventDefault();
      const dummyInput = { ...input };
      delete dummyInput.productImage;
      delete dummyInput.supportCount;
      delete dummyInput.totalFund;
      if (remainingDay < MIN_DEADLINE_DAYS) {
        return setInputError((prev) => ({
          ...prev,
          deadline: "Deadline must be at least 15 days from today.",
        }));
      }
      const error = validateProduct(dummyInput);
      if (error) {
        return setInputError(error);
      }
      setInputError(initialInputError);

      if (file) {
        const formData = new FormData();
        formData.append("productImage", file);
        input.deadline = dayjs(dummyInput.deadline).format("YYYY-MM-DD");
        for (const [key, value] of Object.entries(dummyInput)) {
          if (value) {
            formData.append(key, value);
          }
        }
        await updateProduct(+productId, formData);
      } else {
        await updateProduct(+productId, dummyInput);
      }

      toast.success("Created project successfully");
      setIsEdit(false);
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };

  const handleClickEdit = () => {
    if (!isApproved) {
      setIsEdit(true);
    }
  };

  const handleDelete = async () => {
    try {
      await deleteProduct(+productId);
      setIsDeleteModalOpen(false);
      toast.success("Deleted project successfully");
      navigate(`/creator-panel/${authUser.id}`);
    } catch (err) {
      console.log(err);
    }
  };

  const handleClickSendToApproval = async () => {
    try {
      if (filterData.productMilestones.length !== 3) {
        toast.error("Please add all 3 milestones");
        return;
      }

      if (filterData.productTiers.length < 1) {
        toast.error("Please add at least 1 tier");
        return;
      }

      if (filterData.approvalStatusId === APPROVAL_STATUS_ID.PENDING) {
        toast.error("Pending approval");
        return;
      }

      if (filterData.approvalStatusId === APPROVAL_STATUS_ID.SUCCESS) {
        toast.error("Already approved");
        return;
      }

      await sendProductToApproval(+productId);
      toast.success("Sent to approval successfully");
    } catch (err) {
      console.error(err);
    }
  };

  const handleInputChange = (e) =>
    setInput({ ...input, [e.target.name]: e.target.value });

  return (
    <>
      {productLoading && <Spinner transparent />}

      <input
        type="file"
        placeholder="Poster image"
        hidden
        ref={fileEl}
        onChange={(e) => {
          if (e.target.files[0]) {
            setFile(e.target.files[0]);
          }
        }}
      />
      <div className="flex flex-col justify-center gap-8 items-center">
        <div className="flex flex-col gap-4 justify-center items-center w-3/4 m-auto ">
          {!isEdit ? (
            <>
              <h1 className="text-4xl font-semibold text-center">{input.productName}</h1>
              <p className="text-lg text-gray-500 text-center">{input.summaryDetail}</p>
            </>
          ) : null}
        </div>
        <div className="flex justify-center items-center gap-8">
          <div className="flex justify-center w-2/5">
            {isEdit && file ? (
              <div onClick={() => fileEl.current.click()}>
                <img
                  src={URL.createObjectURL(file)}
                  className="h-full object-cover aspect-[16/9]"
                  alt=""
                />
              </div>
            ) : isEdit ? (
              <div onClick={() => fileEl.current.click()}>
                <img
                  src={input.productImage}
                  className="h-full object-cover aspect-[16/9]"
                  alt=""
                />
              </div>
            ) : null}

            {!isEdit && input.productVideo ? (
              <ReactPlayer
                className="h-full object-cover aspect-[16/9] rounded-lg"
                url={input.productVideo}
                controls={true}
              />
            ) : !isEdit ? (
              <img
                src={input.productImage}
                className="w-full h-full object-cover aspect-[16/9]"
                alt=""
              />
            ) : null}
          </div>
          <div className="flex flex-col gap-4 px-4">
            {isEdit ? (
              <CampaignEditContent
                input={input}
                inputError={inputError}
                handleInputChange={handleInputChange}
              />
            ) : (
              <CampaignShowContent input={input} remainingDay={remainingDay} />
            )}

            <div>
              {!isFinish && isCreator && !isApproved ? (
                <div className="grid grid-cols-4 gap-2">
                  <Button
                    width={30}
                    bg="green"
                    onClick={handleClickSave}
                    disabled={isPending}
                  >
                    Save
                  </Button>
                  <Button
                    width={30}
                    bg="yellow"
                    onClick={handleClickEdit}
                    disabled={isPending}
                  >
                    Edit
                  </Button>

                  <Button width={30} bg="red" onClick={() => setIsDeleteModalOpen(true)}>
                    Delete
                  </Button>
                  <Button
                    width={30}
                    bg="creator-saturate"
                    onClick={handleClickSendToApproval}
                    disabled={isPending}
                  >
                    Approval
                  </Button>
                </div>
              ) : (
                !isFinish && (
                  <div className="w-full">
                    <Button
                      width="full"
                      onClick={() => navigate(`/campaign/${productId}/tier`)}
                    >
                      Support this project
                    </Button>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>

      <Modal
        open={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        title={"Confirm Delete Product"}
        width={40}
      >
        <ConfirmModal
          subTitle={"Are you sure you want to delete this project?"}
          onCancel={() => setIsDeleteModalOpen(false)}
          onConfirm={() => {
            handleDelete();
          }}
        />
      </Modal>
    </>
  );
}
