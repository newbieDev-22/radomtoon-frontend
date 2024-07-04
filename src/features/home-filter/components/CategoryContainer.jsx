import { useNavigate } from "react-router-dom";
import ImageCard from "../../../components/ImageCard";
import { useStore } from "../../../store/useStore";
import dayjs from "dayjs";

const mockProductPath = "/campaign/1";

export default function CategoryContainer() {
  const product = useStore((state) => state.product.data);
  const today = useStore((state) => state.product.today);
  const navigate = useNavigate();

  return (
    <div>
      <h1 className="flex justify-center text-5xl text-semibold mt-10">Title</h1>
      <div className="flex justify-center mt-10 mb-40">
        <div className="grid grid-cols-3 gap-10 ml-4 ">
          {product.map((el) => (
            <ImageCard
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
              avatarImage={el.creatorProfileImage}
              onClick={() => navigate(mockProductPath)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
