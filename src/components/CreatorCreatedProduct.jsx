import ProductImageCard from "./ProductImageCard";
import Button from "./Button";

const mockImage =
  "https://static.thairath.co.th/media/B6FtNKtgSqRqbnNsbKEfQbPGELW2YjCcDQUpDilBzR4jVwhRbzfUfbngdYegm1bTfTXjc.webp";
const mockAvatar = "https://mdbcdn.b-cdn.net/img/new/avatars/1.webp";
const mockProjectName =
  "ascsacascasssssssssssssss ssssssssssssssssssssssssssssssssssssssssc";
const mockCreatorName = "safassafsafsfa";
const daysLeft = 23;

const loopCard = 6;

export default function CreatorCreatedProduct() {
  return (
    <div>
      <div className="flex justify-center gap-10 mt-20 mb-20">
        <div className="grid grid-cols-3 gap-10 mb-20 ">
          <div className="border-dashed border-4 border-gray-500 rounded-lg bg-red-300">
            <Button width="full" height="full" bg="creator-normal">
              <span className="text-5xl text-white ">+</span>
            </Button>
          </div>
          {Array.from({ length: loopCard }).map((_, index) => (
            <ProductImageCard
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
