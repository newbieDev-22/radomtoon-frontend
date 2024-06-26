import ImgCard from "../../../components/ImageCard";
import {
  daysLeft,
  loopCard,
  mockAvatar,
  mockContent,
  mockCreatorName,
  mockImage,
  mockProjectName,
} from "../../../constants";

export default function CategoryContainer() {
  return (
    <div>
      <h1 className="flex justify-center text-5xl text-semibold mt-10">Title</h1>
      <div className="flex justify-center mt-10 mb-40">
        <div className="grid grid-cols-3 gap-10 ml-4 ">
          {Array.from({ length: loopCard }).map((_, index) => (
            <ImgCard
              key={index}
              size="medium"
              imageSrc={mockImage}
              productName={mockProjectName}
              creatorName={mockCreatorName}
              daysLeft={daysLeft}
              avatarImage={mockAvatar}
              content={mockContent}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
