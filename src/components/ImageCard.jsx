import { heightMap, widthMap, STATUS_PRODUCT, STATUS_PRODUCT_THEME } from "../constants";
import ReactPlayer from "react-player";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProgressBar from "./ProgressBar";
import Avatar from "./Avatar";
import ProductInfo from "./ProductInfo";

export default function ImageCard({
  imageSrc,
  productName,
  creatorName,
  daysLeft,
  goal,
  totalFund,
  avatarImage,
  content,
  vid,
  widthSize = "medium",
  heightSize = "large",
  productId,
  creatorId,
  isEdit = false,
  progressHeight = "medium",
  projectStatus = STATUS_PRODUCT.DRAFTING,
  isCorrectCreator = false,
}) {
  const [hover, setHover] = useState(false);
  const navigate = useNavigate();

  const handleMouseEnter = () => setHover(true);
  const handleMouseLeave = () => setHover(false);

  const handleClickDotMenu = () => {
    navigate(`/product/${productId}/status`);
  };

  const cardClasses = `group ${widthMap[widthSize]} ${
    heightMap[heightSize]
  } active:scale-100 transition duration-300 rounded-xl border border-transparent overflow-hidden shadow-lg ${
    isEdit
      ? ""
      : "hover:h-auto hover:absolute z-20 hover:bg-white hover:border-slate-300 hover:shadow-lg"
  }`;

  return (
    <div
      role="button"
      className="relative h-full transition-all duration-300 cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex gap-4">
        <div className="relative">
          <div className={cardClasses}>
            <div
              className="h-40 relative overflow-hidden bg-white/70 px-2 pt-2"
              onClick={() => navigate(`/campaign/${productId}`)}
            >
              {(!hover || !vid) && (
                <img
                  src={imageSrc}
                  className="h-full w-full object-cover rounded-t-lg"
                  alt="product-card"
                />
              )}
              {hover && vid && (
                <div className="w-full h-full">
                  <ReactPlayer
                    url={vid}
                    playing
                    muted
                    width="100%"
                    height="100%"
                    className="rounded-t-lg"
                  />
                </div>
              )}
            </div>
            <div className="px-2 bg-white/70">
              <ProgressBar
                Numerator={totalFund}
                Denominator={goal}
                height={progressHeight}
              />
            </div>
            <div className="px-2 pb-2 bg-white/70 rounded-b-xl">
              <div className="flex bg-white px-2 gap-2 pt-2 pb-1 rounded-b-xl">
                <Avatar
                  avatarImage={avatarImage}
                  creatorName={creatorName}
                  creatorId={creatorId}
                />
                <ProductInfo
                  productName={productName}
                  creatorName={creatorName}
                  daysLeft={daysLeft}
                  productId={productId}
                  content={content}
                  hover={hover}
                />
              </div>
            </div>
          </div>
          {isEdit && (
            <div className="absolute bottom-2 right-0 hover:brightness-110 active:scale-100 transition-all mr-1">
              <button
                className={`flex w-32 h-4 justify-center items-center rounded-md text-xs font-semibold px-2 py-3 ${STATUS_PRODUCT_THEME[projectStatus].bg}`}
                onClick={handleClickDotMenu}
                disabled={!isCorrectCreator}
              >
                {STATUS_PRODUCT_THEME[projectStatus].text}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
