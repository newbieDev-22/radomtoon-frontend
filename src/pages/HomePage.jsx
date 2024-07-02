import ImgCard from "../components/ImageCard";
import { mockDataStatsBar } from "../constants";
import { useStore } from "../store/useStore";
import StatsBanner from "../components/StatsBannerComponent/StatsBanner";
import dayjs from "dayjs";

export default function HomePage() {
  const approvalProduct = useStore((state) => state.approvalProduct);
  const today = useStore((state) => state.product.today);
  return (
    <div>
      <StatsBanner data={mockDataStatsBar} />
      <div className="flex justify-center gap-10 mt-10 mb-20">
        {approvalProduct.slice(0, 1).map((el) => (
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
            avatarImage={el.profileImage}
            vid={el.productVideo}
            mainCard={true}
            productId={el.id}
            creatorId={el.creatorId}
          />
        ))}
        <div className="grid grid-cols-2 gap-4 mb-20">
          {approvalProduct.slice(1, 5).map((el) => (
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
            />
          ))}
        </div>
      </div>
    </div>
  );
}
