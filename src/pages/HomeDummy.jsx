import ImgCard from "../components/ImageCard";

const mockImage = "https://static.thairath.co.th/media/B6FtNKtgSqRqbnNsbKEfQbPGELW2YjCcDQUpDilBzR4jVwhRbzfUfbngdYegm1bTfTXjc.webp";
const mockAvatar = "https://mdbcdn.b-cdn.net/img/new/avatars/1.webp";
const mockProjectName = "ascsacascasssssssssssssss ssssssssssssssssssssssssssssssssssssssssc";
const mockCreatorName = "safassafsafsfa";
const daysLeft = 23;

const loopCard = 16;

export default function HomeDummy() {
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
            />
          ))}
        </div>
      </div>
    </div>
  );
}
