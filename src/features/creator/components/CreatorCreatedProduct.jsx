import { useNavigate, useParams } from "react-router-dom";
import Button from "../../../components/Button";
import { useStore } from "../../../store/useStore";
import ImageCard from "../../../components/ImageCard";
import dayjs from "dayjs";
import { APPROVAL_STATUS_ID, STATUS_PRODUCT, USER_ROLE } from "../../../constants";

const getProductStatus = (product) => {
  const { approvalStatusId, productStatusId } = product;

  if (approvalStatusId === null) {
    return STATUS_PRODUCT.DRAFTING;
  }

  if (approvalStatusId === APPROVAL_STATUS_ID.PENDING) {
    return STATUS_PRODUCT.PENDING;
  }

  if (approvalStatusId === APPROVAL_STATUS_ID.FAILED) {
    return STATUS_PRODUCT.REJECTED;
  }

  if (productStatusId === APPROVAL_STATUS_ID.PENDING) {
    return STATUS_PRODUCT.IN_PROGRESS;
  }

  if (productStatusId === APPROVAL_STATUS_ID.SUCCESS) {
    return STATUS_PRODUCT.SUCCEEDED;
  }

  if (productStatusId === APPROVAL_STATUS_ID.FAILED) {
    return STATUS_PRODUCT.FAILED;
  }
};

export default function CreatorCreatedProduct() {
  const { creatorId } = useParams();
  const user = useStore((state) => state.authUser.user);
  const role = useStore((state) => state.authUser.role);
  const filterProductByCreatorId = useStore((state) => state.filterProductByCreatorId);
  const shouldFilterByApprovalStatus =
    role === USER_ROLE.CREATOR && user.id === +creatorId;
  const filterData = filterProductByCreatorId(creatorId, !shouldFilterByApprovalStatus);
  const today = useStore((state) => state.product.today);

  const navigate = useNavigate();

  const handleClickAddNewProject = () => {
    navigate("/creator-campaign-setup");
  };

  return (
    <>
      {/* button */}
      <div
        className="max-w-[64rem] m-auto  flex justify-center mb-5
      lg:justify-center  
      xl:justify-end "
      >
        {shouldFilterByApprovalStatus ? (
          <Button width={60} bg="creator-normal" onClick={handleClickAddNewProject}>
            Start new project
          </Button>
        ) : null}
      </div>

      <div className="flex flex-wrap gap-8 justify-center  items-center p-2 max-w-[70rem] m-auto  ">
        {filterData.map((el) => (
          <div key={el.id} className="flex justify-center gap-8 ">
            <ImageCard
              size="medium"
              imageSrc={el.productImage}
              productName={el.productName}
              creatorName={el.creatorName}
              goal={el.goal}
              totalFund={el.totalFund}
              daysLeft={
                dayjs(el.deadline).diff(dayjs(today), "day") >= 0
                  ? dayjs(el.deadline).diff(dayjs(today), "day")
                  : 0
              }
              content={el.summaryDetail}
              avatarImage={el.profileImage}
              vid={el.productVideo}
              productId={el.id}
              creatorId={el.creatorId}
              isEdit={true}
              projectStatus={getProductStatus(el)}
            />
          </div>
        ))}
        <div className="w-[20rem]"></div>
        <div className="w-[20rem]"></div>
      </div>
    </>
  );
}
