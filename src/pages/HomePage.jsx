import { useNavigate } from "react-router-dom";
import ImgCard from "../components/ImageCard";
import { mockDataStatsBar } from "../constants";
import { useStore } from "../store/useStore";
import dayjs from "dayjs";

import StatsBanner from "../components/StatsBannerComponent/StatsBanner";

const mockProductPath = "/campaign/1";

export default function HomePage() {
  const navigate = useNavigate();
  const product = useStore((state) => state.product.data);
  const today = useStore((state) => state.product.today);

  return (
    <div>
      <StatsBanner data={mockDataStatsBar} />
      <div className="flex justify-center gap-10 mt-10 mb-20">
        {product.slice(0, 1).map((el) => (
          <ImgCard
            key={el.id}
            widthSize="large"
            heightSize="large"
            progressSize="large"
            imageSize="large"
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
            vid={el.productVideo}
            mainCard={true}
            onClick={() => navigate(mockProductPath)}
          />
        ))}
        <div className="grid grid-cols-2 gap-4 mb-20">
          {product.slice(1, 5).map((el) => (
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
              avatarImage={el.creatorProfileImage}
              vid={el.productVideo}
              onClick={() => navigate(mockProductPath)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
