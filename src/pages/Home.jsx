import ImgCard from "../components/ImageCard";

const mockImage =
  "https://static.thairath.co.th/media/B6FtNKtgSqRqbnNsbKEfQbPGELW2YjCcDQUpDilBzR4jVwhRbzfUfbngdYegm1bTfTXjc.webp";
const mockAvatar = "https://mdbcdn.b-cdn.net/img/new/avatars/1.webp";
const mockProjectName =
  "ascsacascasssssssssssssss ssssssssssssssssssssssssssssssssssssssssc";
const mockCreatorName = "safassafsafsfa";
const daysLeft = 23;

const loopCard = 6;

export default function Home() {
  return (
    <div>
        <h1 className="flex justify-center text-5xl text-semibold mt-20">Title</h1>
      <div className="flex justify-center gap-10 mt-20 mb-20">
        <div>
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
            mainCard={true}
          />
        </div>
        <div className="grid grid-cols-2 gap-10 mb-20 ">
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
