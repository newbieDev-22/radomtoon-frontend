import { useNavigate } from "react-router-dom";
import ImgCard from "../components/ImageCard";
import {
  daysLeft,
  loopCard,
  mockAvatar,
  mockContent,
  mockCreatorName,
  mockImage,
  mockProjectName,
} from "../constants";
import BarChart from "../components/chart/barChart/BarChartEx";

const mockProductPath = "/campaign/1";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div>
      <h1 className="flex justify-center text-5xl text-semibold mt-10">Home</h1>
      <div className="flex justify-center gap-10 mt-10 mb-20">
        <ImgCard
          widthSize="large"
          heightSize="large"
          progressSize="large"
          imageSize="large"
          imageSrc={mockImage}
          productName={mockProjectName}
          creatorName={mockCreatorName}
          daysLeft={daysLeft}
          avatarImage={mockAvatar}
          content={mockContent}
          mainCard={true}
          onClick={() => navigate(mockProductPath)}
        />
        <div className="grid grid-cols-2 gap-10 mb-20 ">
          {Array.from({ length: loopCard }).map((_, index) => (
            <ImgCard
              key={index}
              size="medium"
              imageSrc={mockImage}
              productName={mockProjectName}
              creatorName={mockCreatorName}
              daysLeft={daysLeft}
              content={mockContent}
              avatarImage={mockAvatar}
              onClick={() => navigate(mockProductPath)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
