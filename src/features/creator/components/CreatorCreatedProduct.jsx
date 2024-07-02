import { useNavigate } from "react-router-dom";
import ProductImageCard from "./ProductImageCard";
import Button from "../../../components/Button";
import { useStore } from "../../../store/useStore";
const mockImage =
  "https://static.thairath.co.th/media/B6FtNKtgSqRqbnNsbKEfQbPGELW2YjCcDQUpDilBzR4jVwhRbzfUfbngdYegm1bTfTXjc.webp";
const mockAvatar = "https://mdbcdn.b-cdn.net/img/new/avatars/1.webp";
const mockProjectName =
  "ascsacascasssssssssssssss ssssssssssssssssssssssssssssssssssssssssc";
const mockCreatorName = "safassafsafsfa";
const daysLeft = 23;

const loopCard = 6;

export default function CreatorCreatedProduct() {
  const creatorProduct = useStore((state) => state.creatorProduct.data);
  // console.log("creatorProduct", creatorProduct);
  const navigate = useNavigate();

  const handleClickAddNewProject = () => {
    navigate("/creator-campaign-setup");
  };

  return (
    <div>
      <div className="flex justify-center mt-10">
        <Button
          width={60}
          bg="creator-saturate"
          color="white"
          onClick={handleClickAddNewProject}
        >
          Start new project
        </Button>
      </div>
      <div className="flex justify-center gap-10 mt-20 mb-20">
        <div className="grid grid-cols-3 gap-10 mb-20 ">
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
