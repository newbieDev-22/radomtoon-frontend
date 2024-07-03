import { useNavigate, useParams } from "react-router-dom";
import Button from "../../../components/Button";
import { useStore } from "../../../store/useStore";
import ImgCard from "../../../components/ImageCard";
import dayjs from "dayjs";
import { USER_ROLE } from "../../../constants";

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
    <div className="flex justify-center items-center">
      <div className="flex flex-col justify-center gap-8 ">
        {shouldFilterByApprovalStatus ? (
          <div className="flex justify-end w-full">
            {/* <Button
              width={60}
              bg="creator-saturate"
              color="white"
              onClick={handleClickAddNewProject}
            >
              Start new project
            </Button> */}
            <Button
              width={60}
              bg="creator-saturate"
              onClick={handleClickAddNewProject}
            >
              Start new project
            </Button>
          </div>
        ) : null}
        <div className="grid grid-cols-3 gap-10">
          {filterData.map((el) => (
            <ImgCard
              key={el.id}
              size="medium"
              imageSrc={el.productImage}
              productName={el.productName}
              creatorName={el.creatorName}
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
            />
          ))}
        </div>
      </div>
    </div>
  );
}
