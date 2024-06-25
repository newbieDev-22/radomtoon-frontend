import ImgCard from "../components/ImageCard";

const mockImage =
  "https://static.thairath.co.th/media/B6FtNKtgSqRqbnNsbKEfQbPGELW2YjCcDQUpDilBzR4jVwhRbzfUfbngdYegm1bTfTXjc.webp";
const mockAvatar = "https://mdbcdn.b-cdn.net/img/new/avatars/1.webp";
const mockProjectName =
  "ascsacascasssssssssssssss ssssssssssssssssssssssssssssssssssssssssc";
const mockCreatorName = "safassafsafsfa";
const daysLeft = 23;

export default function Home() {
  return (
    <div>
      <div className="flex justify-center mt-20">
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
        <div className="grid grid-cols-2 gap-4 ml-4">
          <ImgCard
            size="medium"
            imageSrc={mockImage}
            productName={mockProjectName}
            creatorName={mockCreatorName}
            daysLeft={daysLeft}
            avatarImage={mockAvatar}
          />
          <ImgCard
            size="medium"
            imageSrc={mockImage}
            productName={mockProjectName}
            creatorName={mockCreatorName}
            daysLeft={daysLeft}
            avatarImage={mockAvatar}
          />
          <ImgCard
            size="medium"
            imageSrc={mockImage}
            productName={mockProjectName}
            creatorName={mockCreatorName}
            daysLeft={daysLeft}
            avatarImage={mockAvatar}
          />
          <ImgCard
            size="medium"
            imageSrc={mockImage}
            productName={mockProjectName}
            creatorName={mockCreatorName}
            daysLeft={daysLeft}
            avatarImage={mockAvatar}
          />
        </div>
      </div>
    </div>
  );
}
